define(function (require, exports, module) {
    var utils = require('../libs/utils.js');

    $(function () {
        $('.add-coupon').on('click', function () {
            addCoupon($(this));
        });
        $('#submit-btn').on('click',function(){
            submitOrder();
        });

        $('.coupon-trigger').on('click',function(){
            var $this = $(this);
            if($this.hasClass('opend')){
                $this.removeClass('opend');
                $('.coupon-box').hide();
            }else{
                $this.addClass('opend');
                $('.coupon-box').show();

                var load = $('.coupon-box').data('load');
                if(load == 'first'){
                    $('.coupon-box').data('load','non-first');
                    getAllCoupon();
                }
            }
        });
    });

    function submitOrder(){
        var trs = $('.goods-list tbody tr');
        var items = [];
        var id = trs.eq(0).attr('data-goodsid');
        trs.each(function (index, ele) {
            var $this = $(ele);
            var item = {};
            item.goodsId = $this.attr('data-goodsid');
            item.transmitType = $this.attr('data-transmitType');
            item.address = JSON.parse($this.attr('data-address'));
            item.amount = 1;//默认数量为1
            items.push(item);
        });

        var cityId = $('#cityId').val();
        var couponCodeId = $('#coupon-table .radio.cheked').closest('tr').attr('data-id') || '';


        var orderPlaceDTO = {
            "cityId": cityId,
            "couponCodeId": couponCodeId,
            "goodsPropertyList": items
        };

        $('#submitForm input[name=orderPlaceDTO]').val(JSON.stringify(orderPlaceDTO));
        $('#submitForm').submit();
    }


    function addCoupon($this) {
        utils.CheckLogin(function() {
            $this.addClass('disabled').off('click');
            var inviteCode = $('#coupon-code').val();
            utils.SendAjax({
                url: '/users/coupon/addByInvite',
                param: {inviteCode: inviteCode},
                method: 'POST',
                tipText: '添加优惠券',
                callback: function (result) {
                    var tableArr = [];
                    buildCouponTableTr(tableArr, result.data);
                    var tr = $(tableArr.join(''));
                    $('#coupon-table tbody').append(tr);
                    tr.find('.coupon-radio').on('click', function () {
                        checkCouponRadio($(this));
                    });
                    $this.removeClass('disabled').on('click', function () {
                        addCoupon($(this));
                    });
                },
                errorFun: function () {
                    $this.removeClass('disabled').on('click', function () {
                        addCoupon($(this));
                    });
                }
            });
        });
    }

    function checkCouponRadio($this) {
        utils.CheckRadio($this, '.coupon-radio', function () {
            var goodsTotalPrice = parseInt($('#goodsTotalPrice').val());
            if($this.hasClass('checked')){
                var favValue, actualTotal, faceValue, discount, mostDeduction;
                var tr = $this.closest('tr');
                var ftype = tr.attr('data-ftype');

                if (ftype == 'cash') {
                    favValue = faceValue = parseInt(tr.attr('data-faceValue'));
                    actualTotal = goodsTotalPrice - faceValue;
                } else if (ftype == 'discount') {
                    discount = parseFloat(tr.attr('data-discount'));
                    mostDeduction = parseFloat(tr.attr('data-mostDeduction'));
                    favValue = (goodsTotalPrice * (1-discount * 0.1)).toFixed(0);
                    favValue = favValue >= mostDeduction ? mostDeduction : favValue;
                    actualTotal = goodsTotalPrice - favValue;
                }
                $('#actualTotal .price').html('￥'+actualTotal/100);
                $('#actualTotal .fav').html('(已优惠￥'+favValue/100+')');
            }else{
                $('#actualTotal .price').html('￥'+goodsTotalPrice/100);
                $('#actualTotal .fav').html('(已优惠￥0)');
            }
        });
    }

    function getAllCoupon() {
        utils.CheckLogin(function() {
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
                    var data = result.data.data;
                    var tableArr = [];
                    for (var i = 0; i < data.length; i++) {
                        buildCouponTableTr(tableArr, data[i]);
                    }
                    $('#coupon-table tbody').html(tableArr.join(''));
                    $('.coupon-radio').off('click').on('click', function () {
                        checkCouponRadio($(this));
                    });
                },
                errorFun: function (result) {

                }
            });
        });
    }

    function buildCouponTableTr(tableArr, data) {
        var goodsTotalPrice = parseInt($('#goodsTotalPrice').val());
        var cityId = $('#cityId').val();
        var faceValue, enoughMoney;
        var j;
        var fitAreaArr = JSON.parse(data.fitArea);
        var areaNames = [];
        var areaIds = [];
        for (j = 0; j < fitAreaArr.length; j++) {
            areaNames.push(fitAreaArr[j].name);
            areaIds.push(fitAreaArr[j].categoryId);
        }

        if (data.ftype == 'cash') {
            faceValue = parseInt(data.faceValue);
            enoughMoney = parseInt(data.enoughMoney);
            if (!(goodsTotalPrice >= enoughMoney && isInArea(cityId, areaIds))) {
                tableArr.push('<tr data-id="' + data.couponCodeId + '" data-faceValue="' + faceValue + '" data-enoughMoney="' + enoughMoney + '" data-ftype="' + data.ftype + '"><td><span class="radio coupon-radio disabled"></span></td>');
            } else {
                tableArr.push('<tr data-id="' + data.couponCodeId + '" data-faceValue="' + faceValue + '" data-enoughMoney="' + enoughMoney + '" data-ftype="' + data.ftype + '"><td><span class="radio coupon-radio"></span></td>');
            }
            tableArr.push('<td>' + parseInt(data.faceValue) / 100 + '元</td>');

            if (enoughMoney == 0) {
                tableArr.push('<td>无门槛</td>');
            } else {
                tableArr.push('<td>满' + enoughMoney / 100 + '元使用</td>');
            }
        } else if (data.ftype == 'discount') {
            if (!isInArea(cityId, areaIds)) {
                tableArr.push('<tr data-id="' + data.couponCodeId + '" data-discount="' + data.discount + '" data-mostDeduction="' + data.mostDeduction + '" data-ftype="' + data.ftype + '"><td><span class="radio coupon-radio disabled"></span></td>');
            } else {
                tableArr.push('<tr data-id="' + data.couponCodeId + '" data-discount="' + data.discount + '" data-mostDeduction="' + data.mostDeduction + '" data-ftype="' + data.ftype + '"><td><span class="radio coupon-radio"></span></td>');
            }

            tableArr.push('<td>' + data.discount + '折</td>');
            tableArr.push('<td>最多可抵' + parseInt(data.mostDeduction) / 100 + '元</td>');
        }

        tableArr.push('<td>限定地区:' + areaNames.join(',') + '</td>');

        tableArr.push('<td >有效期至' + utils.GetLoacalDateString(data.endTime) + '</td></tr>');

    }

    function isInArea(id, areaIds) {
        for (var i = 0; i < areaIds.length; i++) {
            if (id == areaIds[i]) {
                return true;
            }
        }
        return false;
    }
});