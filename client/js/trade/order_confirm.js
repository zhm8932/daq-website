define(function (require, exports, module) {
    var utils = require('../libs/utils.js');
    var login = require('../login.js');

    var unfitCouponNum = 0;
    var fitCouponNum = 0;

    $(function () {
        $('.add-coupon').on('click', function () {
            addCoupon($(this));
        });
        $('#submit-btn').on('click', function () {
            submitOrder($(this));
        });

        $('.coupon-trigger').on('click', function () {
            var $this = $(this);
            if ($this.hasClass('opend')) {
                $this.removeClass('opend');
                $('.coupon-box').hide();
            } else {
                $this.addClass('opend');
                $('.coupon-box').show();

                var load = $('.coupon-box').data('load');
                if (load == 'first') {
                    $('.coupon-box').data('load', 'non-first');
                    getAllCoupon();
                }
            }
        });
    });

    function submitOrder($this) {
        var trs = $('.goods-list tbody tr');
        var items = [];
        var id = trs.eq(0).attr('data-goodsid');
        var ids = [];
        trs.each(function (index, ele) {
            var tr = $(ele);
            var item = {};
            item.goodsId = tr.attr('data-goodsid');
            if(tr.attr('data-id') && tr.attr('data-id') != 'undefined'){
                ids.push(tr.attr('data-id'));
            }
            item.transmitType = tr.attr('data-transmitType');
            var addressArr = JSON.parse(tr.attr('data-address'));
            var address = '';
            for(var i = 0; i < addressArr.length; i++){
                address += addressArr[i].name;
            }
            item.address = address;
            item.hospital = JSON.parse(tr.attr('data-hospital'));
            item.amount = 1;//默认数量为1
            items.push(item);
        });

        var cityId = $('#cityId').val();
        var couponCodeId = $('#coupon-table .radio.checked').closest('tr').attr('data-id') || '';

        var actualTotal = $('#actualTotal .price').html().substr(1);
        if(parseFloat(actualTotal) <= 0 ){
            utils.ShowComfirmDialog({tipText:'订单金额必须大于0.00元',noConfirmBtn:true});
            return false;
        }

        var orderPlaceDTO = {
            "cityId": cityId,
            "couponCodeId": couponCodeId,
            "goodsPropertyList": items
        };

        // $('#submitForm input[name=orderPlaceDTO]').val(JSON.stringify(orderPlaceDTO));
        // $('#submitForm input[name=ids]').val(JSON.stringify(ids));
        // $('#submitForm').submit();

        $this.addClass('disabled').off('click');
        var orderToken = $('#orderToken').val();

        utils.SendAjax({
            url: '/trade/order/create',
            param: {orderPlaceDTO:JSON.stringify(orderPlaceDTO),ids:JSON.stringify(ids),orderToken:orderToken},
            method: 'POST',
            tipText: '提交订单',
            callback: function (result) {
                login.getCartCount(function () {
                    window.location.href = '/trade/order/orderSuccess?id='+result.id;
                });

            },
            errorFun: function () {
                $this.removeClass('disabled').on('click', function () {
                    submitOrder($this);
                });
            }
        });
    }


    function addCoupon($this) {
        login.CheckLogin(function () {
            var inviteCode = $('#coupon-code').val().trim();
            if(!inviteCode){
                utils.ShowComfirmDialog({tipText:'请输入优惠码',noConfirmBtn:true});
                return false;
            }
            $this.off('click');
            utils.SendAjax({
                url: '/users/coupon/addByInvite',
                param: {inviteCode: inviteCode},
                method: 'POST',
                tipText: '添加优惠券',
                callback: function (result) {
                    utils.ShowComfirmDialog({tipText:'领取成功!',noConfirmBtn:true});
                    $('#coupon-code').val('');
                    var trs = $('#coupon-table tbody tr');
                    var json = buildCouponTableTr(result.data);
                    var tr = $(json.trArr.join(''));
                    //给优惠券排序.如果可用就排在第一位,不可用就排在不可用的第一位
                    if(json.isfit){
                        trs.eq(0).before(tr);
                        tr.find('.coupon-radio').on('click', function () {
                            checkCouponRadio($(this));
                        });
                    }else{
                        trs.eq(fitCouponNum).before(tr);
                    }
                    $('#coupon-table tbody tr.no-record').remove();
                    $this.on('click', function () {
                        addCoupon($(this));
                    });
                },
                errorFun: function () {
                    $this.on('click', function () {
                        addCoupon($(this));
                    });
                }
            });
        });
    }

    function checkCouponRadio($this) {
        utils.CheckRadio($this, '.coupon-radio', function () {
            var discountPriceTotal = parseInt($('#discountPriceTotal').val());
            var servicePriceTotal = parseInt($('#servicePriceTotal').val());
            var goodsTotalPrice = parseInt($('#goodsTotalPrice').val());
            if ($this.hasClass('checked')) {
                var favValue, actualTotal, faceValue, discount, mostDeduction;
                var tr = $this.closest('tr');
                var ftype = tr.attr('data-ftype');

                if (ftype == 'cash') {
                    favValue = faceValue = parseInt(tr.attr('data-faceValue'));
                    actualTotal = discountPriceTotal - faceValue > 0 ? discountPriceTotal - faceValue + servicePriceTotal: 0 + servicePriceTotal;
                } else if (ftype == 'discount') {
                    discount = parseFloat(tr.attr('data-discount'));
                    mostDeduction = parseFloat(tr.attr('data-mostDeduction'));
                    favValue = (discountPriceTotal * (1 - discount * 0.1)).toFixed(0);
                    favValue = favValue >= mostDeduction ? mostDeduction : favValue;
                    actualTotal = discountPriceTotal - favValue + servicePriceTotal;
                }
                $('#actualTotal .price').html('￥' + (actualTotal / 100).toFixed(2));
                $('#actualTotal .fav').html('(已优惠￥' + (favValue / 100).toFixed(2) + ')');
            } else {
                $('#actualTotal .price').html('￥' + (goodsTotalPrice / 100).toFixed(2));
                $('#actualTotal .fav').html('(已优惠￥0.00)');
            }
        });
    }

    function getAllCoupon() {
        login.CheckLogin(function () {
            var param = {
                pageSize: 100,
                useState: 1,
                pageIndex: 1
            };
            utils.SendAjax({
                url: '/users/coupon/list',
                param: param,
                method: 'GET',
                tipText: '获取优惠券',
                callback: function (result) {
                    var data = result.data;
                    var fitTableArr = [];
                    var unfitTableArr = [];

                    if(data.length === 0){
                        $('#coupon-table tbody').html('<tr class="text-center no-record"><td colspan="5">暂无优惠券记录</td></tr>');
                    }else{
                        for (var i = 0; i < data.length; i++) {
                            var json = buildCouponTableTr(data[i]);
                            if(json.isfit){
                                fitTableArr.push(json.trArr);
                            }else{
                                unfitTableArr.push(json.trArr);
                            }
                        }

                        $('#coupon-table tbody').html(fitTableArr.join('')+unfitTableArr.join(''));
                    }

                    $('.coupon-radio').off('click').on('click', function () {
                        checkCouponRadio($(this));
                    });
                },
                errorFun: function (result) {

                }
            });
        });
    }

    function buildCouponTableTr(data) {
        var trArr = [];
        var discountPriceTotal = parseInt($('#discountPriceTotal').val());
        var currentHospitalCode = $('#currentHospitalCode').val();
        var faceValue, enoughMoney;
        var j;
        var fitAreaArr = JSON.parse(data.fitArea);
        var hospitalNameList = [];
        var hospitalCodeList = [];
        var isfit = false;//是否可使用
        var nowTime = new Date().getTime();
        for (j = 0; j < fitAreaArr.length; j++) {
            hospitalNameList.push(fitAreaArr[j].hospitalName);
            hospitalCodeList.push(fitAreaArr[j].hospitalCode);
        }


        if (data.ftype == 'cash') {
            faceValue = parseFloat(data.faceValue);
            enoughMoney = parseFloat(data.enoughMoney);
            if (!(discountPriceTotal >= enoughMoney && hospitalIsFit(currentHospitalCode, hospitalCodeList) && nowTime >= data.beginTime && nowTime<=data.endTime)) {
                trArr.push('<tr data-id="' + data.couponCodeId + '" data-faceValue="' + faceValue + '" data-enoughMoney="' + enoughMoney + '" data-ftype="' + data.ftype + '"><td><span class="radio coupon-radio disabled"></span></td>');
                isfit = false;
            } else {
                trArr.push('<tr data-id="' + data.couponCodeId + '" data-faceValue="' + faceValue + '" data-enoughMoney="' + enoughMoney + '" data-ftype="' + data.ftype + '"><td><span class="radio coupon-radio"></span></td>');
                isfit = true;
            }
            trArr.push('<td>' + (parseFloat(data.faceValue) / 100).toFixed(2) + '元</td>');

            if (enoughMoney == 0) {
                trArr.push('<td>无门槛</td>');
            } else {
                trArr.push('<td>满' + (enoughMoney / 100).toFixed(2) + '元使用</td>');
            }
        } else if (data.ftype == 'discount') {
            if (!(hospitalIsFit(currentHospitalCode, hospitalCodeList) && nowTime >= data.beginTime && nowTime<=data.endTime)) {
                trArr.push('<tr data-id="' + data.couponCodeId + '" data-discount="' + data.discount + '" data-mostDeduction="' + data.mostDeduction + '" data-ftype="' + data.ftype + '"><td><span class="radio coupon-radio disabled"></span></td>');
                isfit = false;
            } else {
                trArr.push('<tr data-id="' + data.couponCodeId + '" data-discount="' + data.discount + '" data-mostDeduction="' + data.mostDeduction + '" data-ftype="' + data.ftype + '"><td><span class="radio coupon-radio"></span></td>');
                isfit = true;
            }

            trArr.push('<td>' + data.discount + '折</td>');
            trArr.push('<td>最多可抵' + (parseFloat(data.mostDeduction) / 100).toFixed(2) + '元</td>');
        }

        trArr.push('<td>限' + hospitalNameList.join('、') + '</td>');

        trArr.push('<td >'+utils.GetLoacalDateString(data.beginTime)+' 至 ' + utils.GetLoacalDateString(data.endTime) + '</td></tr>');

        isfit ? fitCouponNum++ : unfitCouponNum++;//计算可用优惠券和不可用的数量

        return {
            trArr:trArr,
            isfit:isfit
        };

    }

    // function isInArea(id, areaIds) {
    //     for (var i = 0; i < areaIds.length; i++) {
    //         if (id == areaIds[i]) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    function hospitalIsFit(hospitalCode, hospitalCodeList) {
        for (var i = 0; i < hospitalCodeList.length; i++) {
            if (hospitalCode === hospitalCodeList[i]) {
                return true;
            }
        }
        return false;
    }

});