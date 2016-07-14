define(function (require, exports, module) {
    var utils = require('../libs/utils.js');
    var timer = require('../libs/timer.js');
    var login = require('../login.js');

    $(function(){
        timer.updateTime({
            totalTime:30*60*1000,
            outdatedFun:function(){
                window.location.href = '/users/register/list';
            }
        });

        $('.del-reg').on('click',function(){
            delItem($(this));
        });

        $('.cancel-reg').on('click',function(){
            cancelItem($(this));
        });

        $('.to-pay').on('click',function(){
            var item = $(this).closest('.item');
            var timer = item.find('.timer');
            var payTime = timer.attr('data-paytime');
            var currentTime = parseInt(payTime) + (30*60*1000 - parseInt(timer.attr('data-restTime')));
            var id = item.attr('data-payid');
            var cost = item.attr('data-cost');
            var orderId = item.attr('data-id');
            window.location.href = '/treats/reg/topay?payTime='+payTime+'&id='+id+'&totalCost='+cost+'&orderId='+id+'&currentTime='+currentTime;
        });
        
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
                            window.location.reload();
                            // var td = $this.closest('td,p');
                            // console.log("td:",td)
                            // // td.prev().prev().html('已取消').removeClass('text-stress').addClass('text-sec');
                            // tr.find('.status').html('已取消').removeClass('text-stress').addClass('text-sec');
                            // td.html('<a href="javascript:void(0)" class="del-reg">删除</a>');
                            // td.find('.del-reg').on('click',function(){
                            //     delItem($(this));
                            // });
                        },
                        errorFun: function (result) {
                            $this.removeClass('disabled').on('click', function () {
                                cancelItem($this);
                            });
                        }
                    });
                }
            });
        });
    }

});