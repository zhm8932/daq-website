define(function (require, exports, module) {
    var utils = require('../libs/utils.js');
    var login = require('../login.js');

    $(function(){
        $('.del-reg').on('click',function(){
            delItem($(this));
        });

        $('.cancel-reg').on('click',function(){
            cancelItem($(this));
        })
    });

    function delItem($this){
        login.CheckLogin(function() {
            utils.ShowComfirmDialog({
                tipText:'确定删除吗?',
                okCallback:function(){
                    $this.addClass('disabled').off('click');
                    var tr = $this.closest('tr,dl');
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
        login.CheckLogin(function() {
            utils.ShowComfirmDialog({
                tipText:'确定取消吗?',
                okCallback:function(){
                    $this.addClass('disabled').off('click');
                    var tr = $this.closest('tr,dl');
                    var reservationId = tr.attr('data-id');
                    utils.SendAjax({
                        url: '/users/register/cancel',
                        param: {reservationId: reservationId},
                        method: 'POST',
                        tipText: '取消挂号',
                        callback: function (result) {
                            var td = $this.closest('td');
                            td.prev().prev().html('已取消').removeClass('text-stress').addClass('text-sec');
                            td.html('<a href="javascript:void(0)" class="del-reg">删除</a>');
                            td.find('.del-reg').on('click',function(){
                                delItem($(this));
                            });
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