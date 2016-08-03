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
});