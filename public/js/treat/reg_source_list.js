define(function (require, exports, module) {
    var utils = require('../libs/utils.js');
    var login = require('../login.js');

    $(function(){
        $('.register').on('click',function(){
            var $this = $(this);
            var doctorInfo = $this.closest('.doctor-info-detail');
            var form = $('#regByDocForm');
            form.find('input[name=date]').val($this.data('date'));
            form.find('input[name=doctorId]').val(doctorInfo.attr('data-accountid'));
            form.find('input[name=docName]').val(doctorInfo.attr('data-docName'));
            form.find('input[name=docTitle]').val(doctorInfo.attr('data-docTitle'));
            form.submit();
        });
    });
});