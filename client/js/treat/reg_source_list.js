define(function (require, exports, module) {
    var utils = require('../libs/utils.js');
    var login = require('../login.js');

    $(function(){
        $('.month-date').each(function(index,ele){
            var $this = $(ele);
            var timestamp = parseInt($this.html());
            var time = getMonthAndDate(timestamp);
            $this.html(time);
        });

        $('.register').on('click',function(){
            var $this = $(this);
            var date = utils.GetLoacalDateString(parseFloat($this.data('date')));
            var tr = $this.closest('tr')
            var doctorId = tr.data('accountid');
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