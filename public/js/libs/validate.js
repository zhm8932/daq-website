define(function(require,exports,module){
    require('jquery');

    function validateTel(obj){
        // var str = obj.val();
        // var value = $.trim(str).replace(/\s/g, '');
        // var _cdreg = /^\d{7,11}$/;
        // if(value.length==0 || value == "请输入手机号"){
        //     $("#"+id).addClass("err");
        //     $("#"+id).parent().parent().addClass("brd-c-red");
        //     return false;
        // }
        // if(!_cdreg.test(value) || value =="11111111111"){
        //     $("#"+id).addClass("err");
        //     $("#"+id).parent().parent().addClass("brd-c-red");
        //     $("#"+tipId).html("手机号输入有误");
        //     return false;
        // }
        // $("#"+tipId).html("");
        // $("#"+id).removeClass("err");
        // $("#"+id).parent().parent().removeClass("brd-c-red");
        // return true;
    }

    module.exports = {
        validateTel:validateTel
    }
});