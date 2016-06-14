define(function (require, exports, module) {
    var utils = require('../libs/utils.js');

    $('#add-tr').on('click',function(){
        addTr();
    });

    function addTr(){
        var trHtml = '<tr class="new-tr"><td><input placeholder="就诊人姓名"/></td>'+
            '<td><select><option>男</option><option>女</option></select></td>'+
            '<td><input placeholder="就诊人姓名"/></td>'+
            '<td><input placeholder="年龄"/></td>'+
            '<td class="text-main new-patient">添加</td></tr>';
        var tr = $(trHtml);
        tr.find('.new-patient').on('click',function(){
            addPatient($(this));
        });
        $('#add-tr').closest('tr').before(tr);

    }

    function addPatient($this){
        var tr = $this.closest('tr');
        tr.find();
    }

    function delPatient($this){
        var tr = $this.closest('tr');
        var id = tr.data('id');
        
    }
});