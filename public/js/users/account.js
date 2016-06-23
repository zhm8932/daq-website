define(function (require, exports, module) {
    var utils = require('../libs/utils.js');
    require("moment");
    require("daterangepicker");

    var firstChooseTime = true;

    $(function () {
        var hasBind = $('#hasBind').val();
        if (hasBind != 'true') {
            utils.BuildSelect($('#gender'));

            $('#birthday').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                autoUpdateInput: false,   //默认为空
                locale : {
                    format : 'YYYY-MM-DD',
                    daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],
                    monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月',
                        '七月', '八月', '九月', '十月', '十一月', '十二月' ]
                }
            }, function(start, end, label) {
                $('#birthday').val(start.format('YYYY-MM-DD'));
            });
        }

    });


    function completeInfo(popup){
        var completeDialog = $('.complete-dialog');
        var name = completeDialog.find('[name=name]').val().trim();
        var birthday = completeDialog.find('[name=birthday]').val().trim();
        var gender = completeDialog.find('#gender .option.active').attr('data-value');
        if(!(name && birthday && gender)){
            completeDialog.find('.prompt em').html('必输项不能为空');
            completeDialog.find('.prompt').show();
            return false;
        }

        var $this = $('.complete-dialog span.ok');
        $this.addClass('disabled').off('click');
        var param = $('form[name=accInfoForm]').serialize()+'&gender='+gender;
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
                if(result.data){
                    completeDialog.find('.prompt em').html('客户编码有误');
                    completeDialog.find('.prompt').show();
                }
                $this.removeClass('disabled').on('click', function () {
                    completeInfo(popup);
                });
            }
        });
    }

});