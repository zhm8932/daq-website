define(function (require, exports, module) {
    var utils = require('../libs/utils.js');
    var login = require('../login');

    $('.alipay').on('click',function(){
        getPayId(alipay,4);
    });

    $('.wechat-pay').on('click',function(){
        getPayId(wechatPay,6);
    });

    function getPayId(fun,payWay){
        login.CheckLogin(function() {
            var id = $('#order-detail').data('id');
            utils.SendAjax({
                url: '/trade/pay/payid',
                param: {orderId: id},
                method: 'POST',
                tipText: '获取支付ID',
                callback: function (result) {
                    fun && fun(result.data.id, payWay);
                },
                errorFun: function (result) {

                }
            });
        });
    }

    function alipay(id,payWay){
        login.CheckLogin(function() {
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
        login.CheckLogin(function() {
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
            '<span class="scan-tip">请使用微信"扫一扫"扫描二维码支付</span></div><div class="price text-stress">￥323</div></div>'+
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
        login.CheckLogin(function() {
            var id = $('#order-detail').data('id');
            utils.SendAjax({
                url: '/trade/order/state',
                param: {id: id},
                method: 'GET',
                tipText: '前往支付页面',
                callback: function (result) {
                    if (result.data.orderState == 2) {
                        window.location.href = '/trade/order/paySuccess?order_no=' + id;
                    }
                },
                errorFun: function (result) {

                }
            });
        });
    }
});