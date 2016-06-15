define(function (require, exports, module) {
    var utils = require('../libs/utils.js');
    
    $('.del-patient').on('click',function(){
        delPatient($(this));
    });

    $('#add-tr').on('click',function(){
        addTr();
    });

    function addTr(){
        var trHtml = '<tr class="new-tr"><td><input placeholder="就诊人姓名"/></td>'+
            '<td><div class="select-box"><div class="selected"><span class="text">请选择</span><i class="icon pull-down"></i></div><ul class="options"><li class="option">男</li><li class="option">女</li></ul></div></td>'+
            '<td><input placeholder="就诊人姓名"/></td>'+
            '<td><input placeholder="年龄"/></td>'+
            '<td class="text-main new-patient"><a href="javascript:void(0)">添加</a></td></tr>';
        var tr = $(trHtml);
        utils.BuildSelect(tr.find('.select-box'));
        tr.find('.new-patient').on('click',function(){
            addPatient($(this));
        });
        $('#add-tr').closest('tr').before(tr);

    }

    function addPatient($this){
        var tr = $this.closest('tr');
        tr.find();
        utils.SendAjax({
            url: '/users/patient/del',
            param: {contactPersonId:id},
            method: 'POST',
            tipText: '删除就诊人',
            callback: function (result) {
                tr.hide(1000);
            },
            errorFun: function (result) {

            }
        });
    }

    function delPatient($this){
        var tr = $this.closest('tr');
        var id = tr.data('id');
        utils.SendAjax({
            url: '/users/patient/del',
            param: {contactPersonId:id},
            method: 'POST',
            tipText: '删除就诊人',
            callback: function (result) {
                tr.hide(1000);
            },
            errorFun: function (result) {

            }
        });
        
    }
});