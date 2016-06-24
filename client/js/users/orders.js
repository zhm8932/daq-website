define(function (require, exports, module) {
    var utils = require('../libs/utils.js');
    var login = require('../login.js');

    $(function(){
        $('.del-order').on('click',function(){
            delItem($(this));
        });

        $('.cancel-order').on('click',function(){
            cancelItem($(this));
        });
    });

    function delItem($this){
        login.CheckLogin(function() {
            utils.ShowComfirmDialog({
                tipText:'确定删除吗?',
                okCallback:function(){
                    $this.addClass('disabled').off('click');
                    var tr = $this.closest('dl.order');
                    var id = tr.attr('data-id');
                    utils.SendAjax({
                        url: '/trade/order/delete',
                        param: {id: id},
                        method: 'POST',
                        tipText: '删除订单',
                        callback: function (result) {
                            window.location.reload();
                        },
                        errorFun: function (result) {
                            $this.removeClass('disabled').on('click', function () {
                                delItem($this);
                            });
                        }
                    });
                }
            });
        });
    }

    function cancelItem($this){
        login.CheckLogin(function() {
            utils.ShowComfirmDialog({
                tipText:'确定取消吗?',
                okCallback:function(){
                    $this.addClass('disabled').off('click');
                    var tr = $this.closest('dl.order');
                    var id = tr.attr('data-id');
                    utils.SendAjax({
                        url: '/trade/order/cancel',
                        param: {id: id},
                        method: 'POST',
                        tipText: '取消订单',
                        callback: function (result) {
                            window.location.reload();
                        },
                        errorFun: function (result) {
                            $this.removeClass('disabled').on('click', function () {
                                delItem($this);
                            });
                        }
                    });
                }
            });
        });
    }

});