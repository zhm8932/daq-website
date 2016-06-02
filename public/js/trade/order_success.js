define(function (require, exports, module) {
    var utils = require('../utils.js');

    $('.alipay').on('click',function(){
        var id = $('#order-detail').data('id');
        utils.SendAjax({
            url: '/trade/pay/payid',
            param: {orderId: id},
            method: 'POST',
            tipText: '获取支付ID',
            callback: function (result) {
                alipay(result.data.id);
            },
            errorFun: function (result) {

            }
        });
    });

    function alipay(id){
        utils.SendAjax({
            url: '/trade/pay/ali',
            param: {id: id,payWay:4},
            method: 'POST',
            tipText: '前往支付宝支付',
            callback: function (result) {
                window.open(result.data.credentia.order_info);
            },
            errorFun: function (result) {

            }
        });
    }
});