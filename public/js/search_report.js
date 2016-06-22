define(function(require){
    var config = require('./config');
    require("moment");
    require("daterangepicker");

    $(function () {
        $('.time').daterangepicker({
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
            $('.time').val(start.format('YYYY-MM-DD'));
        });

        console.log(config);

        var code = document.querySelector('#code');
        console.log("code:",code);
        code.oninput=function(){

            code.setCustomValidity("");
        };
        code.oninvalid=function(){
            console.log(code);
            code.setCustomValidity("请输入服务条形码？");
        };
    })

});