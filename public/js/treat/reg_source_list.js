define(function (require, exports, module) {
    var utils = require('../libs/utils.js');
    var login = require('../login.js');

    $(function(){
        $('.register').on('click',function(){
            var $this = $(this);
            var date = utils.GetLoacalDateString(parseFloat($this.data('date')));
            var doctorId = $this.closest('.doctor-id').data('accountid');
            window.location.href = '/treat/reg/doctorView?date='+date+'&doctorId='+doctorId;
        });
    });

    function getMonthAndDate(timestamp){
        var date = new Date(timestamp);
        var year = date.getFullYear();
        var m = parseInt(date.getMonth()) + 1;
        var month = m < 10 ? '0' + m : m;
        var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var time =  month + '/' + d;
        return time;
    }

});