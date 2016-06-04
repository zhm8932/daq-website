define(function (require, exports, module) {
    var utils = require('../libs/utils.js');

    $('.date').each(function(index,ele){
        var $this = $(ele);
        var timestamp = parseInt($this.html());
        var time = utils.GetLoacalDateString(timestamp);
        $this.html(time);
    });

    $('.add-coupon').on('click',function(){
        addCoupon($(this));
    });


    $('.coupon-state .unuse').on('click',function(){
        getCouponList($(this),'1');
    });
    $('.coupon-state .used').on('click',function(){
        getCouponList($(this),'2');
    });
    $('.coupon-state .overdue').on('click',function(){
        getCouponList($(this),'3');
    });

    function getCouponList($this,useState){
        var param = {
            pageSize: 100,
            useState: useState,
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
                if(data.length <= 0){
                    $('#coupon-table tbody').html('<tr class="text-center"><td colspan="5">暂无优惠券记录</td></tr>');
                }else{
                    for (var i = 0; i < data.length; i++) {
                        buildCouponTableTr(tableArr, data[i]);
                    }
                    $('#coupon-table tbody').html(tableArr.join(''));
                }
                $('.coupon-state li').removeClass('on');
                $this.addClass('on');
            },
            errorFun: function (result) {

            }
        });
    }

    function addCoupon($this) {
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
    }


    function buildCouponTableTr(tableArr, data) {
        var enoughMoney;
        var fitAreaArr = JSON.parse(data.fitArea);
        var j;
        var areaNames = [];
        var areaIds = [];
        for (j = 0; j < fitAreaArr.length; j++) {
            areaNames.push(fitAreaArr[j].name);
            areaIds.push(fitAreaArr[j].categoryId);
        }

        if (data.ftype == 'cash') {
            enoughMoney = parseInt(data.enoughMoney);
            tableArr.push('<tr>');
            tableArr.push('<td>' + parseInt(data.faceValue) / 100 + '元</td>');

            if (enoughMoney == 0) {
                tableArr.push('<td>无门槛</td>');
            } else {
                tableArr.push('<td>满' + enoughMoney / 100 + '元使用</td>');
            }
        } else if (data.ftype == 'discount') {
            tableArr.push('<tr>');
            tableArr.push('<td>' + data.discount + '折</td>');
            tableArr.push('<td>最多可抵' + parseInt(data.mostDeduction) / 100 + '元</td>');
        }

        tableArr.push('<td>限定地区:' + areaNames.join(',') + '</td>');

        tableArr.push('<td >有效期至' + utils.GetLoacalDateString(data.endTime) + '</td></tr>');

    }
});