define(function (require, exports, module) {
    var utils = require('../libs/utils.js');

    $(function () {
        var hasBind = $('#hasBind').val();
        if (hasBind != 'true') {
            showAccountDialog({});
        }
        $('#scheduleId-select .option').on('click', function () {
            var $this = $(this);
            $('#scheduleId').val($this.data('value'));
            var cost = parseInt($this.data('cost'));
            $('#cost').html(cost / 100 + '元');
        });

        $('#commit-reg').on('click', function () {
            commitReg($(this));
        });
    });

    function commitReg($this) {
        $this.addClass('disabled').off('click');
        // utils.CheckLogin(function () {
            var scheduleId = $('#scheduleId').val();
            var param = {scheduleId:scheduleId};
            utils.SendAjax({
                url: '/treats/reg/byDoc',
                param: param,
                method: 'POST',
                tipText: '挂号',
                callback: function (result) {
                    var needPay = $('#needPay').val();
                    if (needPay != 'true') {
                        window.location.href = "/users/register/list";
                    }else{
                        var json = result.data.tradeDTO;
                        window.location.href = "/treats/reg/topay?id="+json.id+'&cost='+json.amount+'&orderId='+result.data.id;
                    }
                },
                errorFun: function (result) {
                    $this.removeClass('disabled').on('click', function () {
                        commitReg($(this));
                    });
                }
            });
        // });
    }

    function showAccountDialog() {
        var popup = new utils.Popup({
            msg: '<div class="box-header">完善信息<i class="icon close closePopup"></i></div><div class="box-body">' +
            '<ul class="tip-box"><li>为了能正常使用预约挂号服务,请及时补充以下材料。</li><li>以下信息为预约时所需项,一经填写不可更改,提交前请检查核对。</li><li>绑定已有客户编号,您可在病例中心中查看历史报告。</li></ul>' +
            '<form name="accInfoForm"><ul><li><label><i class="text-stress">* </i>姓名</label><input name="name"/></li><li><label><i class="text-stress">* </i>性别</label><input name="gender"/></li><li><label><i class="text-stress">* </i>出生年月</label><input name="birthday"/></li><li><label>绑定已有客户编码</label><input placeholder="请输入已有客户编码"/></li>' +
            '</ul></form></div>',
            otherMsg: 'confirm-btn',
            popupBox: 'popupBox',
            okText: '提交',
            cancel: 'closePopup',
            otherBox: 'complete-dialog',
            width: '475',
            callback: function () {
                //TouchSlide({ slideCell:"#slideLogin",titCell:".tit span", mainCell:".bd"});
                $("#slideLogin").touchSlider({
                    container: this,
                    duration: 350, // 动画速度
                    delay: 3000, // 动画时间间隔
                    margin: 5,
                    mouseTouch: true,
                    namespace: "touchslider",
                    next: ".touchslider-next", // next 样式指定
                    pagination: ".tit span",
                    currentClass: "on", // current 样式指定
                    prev: ".touchslider-prev", // prev 样式指定
                    // scroller: viewport.children(),
                    autoplay: false, // 自动播放
                    viewport: ".touchslider-viewport"  //内容区域
                });
            },
            cancelFun: function () {
                window.location.href = "/treat/regsource/list";
            },
            okCallback: function () {
                var $this = $('.complete-dialog span.ok');
                $this.addClass('disabled').off('click');
                var param = $('form[name=accInfoForm]').serialize();
                utils.SendAjax({
                    url: '/users/account/complete',
                    param: param,
                    method: 'POST',
                    tipText: '完善信息',
                    callback: function (result) {
                        var myMsg = new utils.MsgShow({
                            delayTime: 2000,
                            title: '<i class="icon"></i>完善成功!',
                            otherBox: 'successBox'
                        });
                        popup.hideBox();
                        myMsg.hideMsg(1000);
                    },
                    errorFun: function (result) {
                        $this.removeClass('disabled').on('click', function () {

                        });
                    }
                });
            }
        })
    }

});