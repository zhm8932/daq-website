webpackJsonp([26],{0:function(t,e,n){n(215),t.exports=n(7)},215:function(t,e,n){var a;a=function(t,e,a){function o(t){function e(){t.addClass("disabled").off("click");var s={name:a,birthday:r,gender:d,patientCode:n.find("[name=patientCode]").val().trim()};$.ajax({url:"/users/account/complete",type:"POST",data:s,dataType:"json",success:function(a){if(a.success){var r=new i.MsgShow({delayTime:2e3,title:'<i class="icon"></i>完善成功!',otherBox:"successBox"});r.hideMsg(1e3),window.location.reload()}else"1001"===a.serverCode?i.ShowComfirmDialog({tipText:'该客户编号不存在,您可取消重新输入!<div class="text-stress">您也可继续添加拥有新的客户编号</div>',okCallback:function(){n.find("[name=patientCode]").val(""),e()}}):(n.find(".prompt em").html(a.msg),n.find(".prompt").show()),t.removeClass("disabled").on("click",function(){return o(t),!1})},error:function(e){"404"==e.status?n.find(".prompt em").html("页面丢失，请稍后再试"):"500"==e.status?n.find(".prompt em").html("系统忙，请稍后再试"):n.find(".prompt em").html("网络错误"),n.find(".prompt").show(),t.removeClass("disabled").on("click",function(){return o(t),!1})}})}var n=$("form[name=accInfoForm]"),a=n.find("[name=name]").val().trim(),r=n.find("[name=birthday]").val().trim(),s=n.find("[name=patientCode]").val().trim(),d=n.find("#gender .option.active").attr("data-value");return a&&r&&d?void(s?e():i.ShowComfirmDialog({tipText:'如果你已有客户编号，请绑定已有的客户编号，未绑定将不能查看以前的就诊报告。<div class="text-stress">您也可继续添加拥有新的客户编号</div>',okCallback:function(){e()}})):(n.find(".prompt em").html("必输项不能为空"),n.find(".prompt").show(),!1)}var i=n(4);n(10),n(11),$(function(){$("#hasBind").val();$("#birthday").daterangepicker({singleDatePicker:!0,showDropdowns:!0,autoUpdateInput:!1,locale:{format:"YYYY-MM-DD",daysOfWeek:["日","一","二","三","四","五","六"],monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]}},function(t,e,n){$("#birthday").val(t.format("YYYY-MM-DD"))}),$("#complete-acc").on("click",function(){return o($(this)),!1})})}.call(e,n,e,t),!(void 0!==a&&(t.exports=a))}});