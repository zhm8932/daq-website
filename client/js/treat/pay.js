define(function (require, exports, module) {
    var utils = require('../libs/utils.js');

    var payId = $('#payId').val();

    $('.alipay').on('click',function(){
        alipay(payId,4);
    });

    $('.wechat-pay').on('click',function(){
        wechatPay(payId,6);
    });

    function alipay(id,payWay){
        utils.CheckLogin(function() {
            utils.SendAjax({
                url: '/trade/order/pay',
                param: {id: id, payWay: payWay},
                method: 'POST',
                tipText: '前往支付页面',
                callback: function (result) {
                    window.location.href = result.data.credentia.order_info;
                },
                errorFun: function (result) {

                }
            });
        });
    }

    function wechatPay(id,payWay){
        utils.CheckLogin(function() {
            utils.SendAjax({
                url: '/trade/order/pay',
                param: {id: id, payWay: payWay},
                method: 'POST',
                tipText: '前往支付页面',
                callback: function (result) {
                    showDialog(result);
                },
                errorFun: function (result) {

                }
            });
        });
    }

    function showDialog(result) {
        var stateTimer = null;
        var popup = new utils.Popup({
            msg: '<div class="wechat-pay-dialog"><div class="left-box"><img src="data:image/png;base64,'+result.data.credentia.orderInfo+'"/><div class="wechat-tip"><i class="icon scan"></i>'+
            '<span class="scan-tip">请使用微信"扫一扫"扫描二维码支付</span></div><div class="price text-stress">￥'+result.data.totalCost+'</div></div>'+
            '<div class="right-box"><img src="/images/wxsm_img.png"/></div><div>',
            otherMsg:'',
            bOhterMsg:true,
            callback:function () {
                stateTimer = setInterval(function(){
                    queryOrderState();
                },3000);
            },
            okText:'登录',
            width:'730',
            otherBox:'wechat-box',
            isHide:false,
            okCallback:function(){

            },
            cancelFun:function(){
                clearInterval(stateTimer);
            }
        })

    }

    function queryOrderState(){
        utils.CheckLogin(function() {
            var orderId = $('#orderId').val();
            utils.SendAjax({
                url: '/treats/order/state',
                param: {reservationId: orderId},
                method: 'GET',
                tipText: '查询订单状态',
                callback: function (result) {
                    if (result.data.reservationStatus == 1) {
                        window.location.href = '/users/register/list';
                    }
                },
                errorFun: function (result) {

                }
            });
        });
    }
});