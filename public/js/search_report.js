define(function(require){console.log("111111111");var o=require("./config");console.log(o);var n=document.querySelector("#code");console.log("code:",n),n.oninput=function(){n.setCustomValidity("")},n.oninvalid=function(){console.log(n),n.setCustomValidity("请输入服务条形码？")}});