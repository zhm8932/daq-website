define(function (require, exports, module) {
    var utils = require('../libs/utils.js');
    require("moment");
    require("daterangepicker");

    var firstChooseTime = true;

    $(function () {
        var hasBind = $('#hasBind').val();
        // if (hasBind != 'true') {
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

            $('#complete-acc').on('click',function(){
                completeInfo($(this));
                return false;
            });
        // }

    });


    function completeInfo($this){
        var form = $('form[name=accInfoForm]');
        var name = form.find('[name=name]').val().trim();
        var birthday = form.find('[name=birthday]').val().trim();
        var patientCode = form.find('[name=patientCode]').val().trim();
        var gender = form.find('#gender .option.active').attr('data-value');
        if(!(name && birthday && gender)){
            form.find('.prompt em').html('必输项不能为空');
            form.find('.prompt').show();
            return false;
        }
        $this.addClass('disabled').off('click');
        var param = {
            name:name,
            birthday:birthday,
            gender:gender,
            patientCode:patientCode
        };
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
                myMsg.hideMsg(1000);
            },
            errorFun: function (result) {
                if(result && result.msg){
                    form.find('.prompt em').html(result.msg);
                    form.find('.prompt').show();
                }
                $this.removeClass('disabled').on('click', function () {
                    completeInfo($this);
                    return false;
                });
            }
        });
    }

});