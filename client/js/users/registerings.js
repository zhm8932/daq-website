define(function (require, exports, module) {
    var utils = require('../libs/utils.js');

    $(function(){
        $('.del-reg').on('click',function(){
            delItem($(this));
        })

        $('.cancel-reg').on('click',function(){
            cancelItem($(this));
        })
    });

    function delItem($this){
        utils.CheckLogin(function() {
            utils.ShowComfirmDialog({
                tipText:'确定删除吗?',
                okCallback:function(){
                    $this.addClass('disabled').off('click');
                    var tr = $this.closest('tr');
                    var reservationId = tr.attr('data-id');
                    utils.SendAjax({
                        url: '/users/register/del',
                        param: {reservationId: reservationId},
                        method: 'POST',
                        tipText: '删除挂号',
                        callback: function (result) {
                            tr.hide(500);
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
        utils.CheckLogin(function() {
            utils.ShowComfirmDialog({
                tipText:'确定取消吗?',
                okCallback:function(){
                    $this.addClass('disabled').off('click');
                    var tr = $this.closest('tr');
                    var reservationId = tr.attr('data-id');
                    utils.SendAjax({
                        url: '/users/register/cancel',
                        param: {reservationId: reservationId},
                        method: 'POST',
                        tipText: '取消挂号',
                        callback: function (result) {
                            $this.closest('td').prev().html('已取消').removeClass('text-stress').addClass('text-sec');
                            $this.closest('td').html('');
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