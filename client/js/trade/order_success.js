define(function (require, exports, module) {
    var utils = require('../libs/utils.js');

    $('.alipay').on('click',function(){
        getPayId(alipay,4);
    });

    function getPayId(fun,payWay){
        var id = $('#order-detail').data('id');
        utils.SendAjax({
            url: '/trade/pay/payid',
            param: {orderId: id},
            method: 'POST',
            tipText: '获取支付ID',
            callback: function (result) {
                fun && fun(result.data.id,payWay);
            },
            errorFun: function (result) {

            }
        });
    }

    function alipay(id,payWay){
        utils.SendAjax({
            url: '/trade/order/pay',
            param: {id: id,payWay:payWay},
            method: 'POST',
            tipText: '前往支付页面',
            callback: function (result) {
                window.location.href = result.data.credentia.order_info;
            },
            errorFun: function (result) {

            }
        });
    }

    function wechatPay(id,payWay){
        window.location.href = '/trade/trade/wechatPay';
    }
});