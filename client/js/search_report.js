define(function(require){
    console.log('111111111');
    var config = require('./config');
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
});