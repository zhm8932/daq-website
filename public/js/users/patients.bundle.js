webpackJsonp([30],{0:function(t,n,i){i(218),t.exports=i(7)},218:function(t,n,i){var e;e=function(t,n,e){function a(){var t='<tr class="new-tr"><td class="name"><input placeholder="就诊人姓名"/></td><td class="gender"><div class="select-box"><div class="selected"><span class="text">请选择</span><i class="icon pull-down"></i></div><ul class="options"><li class="option">男</li><li class="option">女</li></ul></div></td><td class="birthday"><input placeholder="出生年月"/></td><td class="telephone"><input placeholder="联系电话"/></td><td class="new-patient"><a class="text-main" href="javascript:void(0)">添加</a></td></tr>',n=$(t);l.BuildSelect(n.find(".select-box")),n.find(".new-patient").on("click",function(){d($(this))}),$("#add-tr").closest("tr").before(n)}function d(t){var n="",i="",e="",a="",d="",o={1:"男",2:"女"},s=t.closest("tr");s.find(".name input"),s.find(".gender .options .option.active"),s.find(".birthday input"),s.find(".telephone input");l.SendAjax({url:"/users/patient/add",param:{name:n,gender:i,birthday:e,telephone:a},method:"POST",tipText:"添加就诊人",callback:function(t){s.html("<td>"+n+"</td><td>"+o[i]+"</td><td>"+d+"</td><td>"+a+'</td><td><a href="javascript:void(0)" class="del-patient">删除</a></td>'),s.data("id",t.data.id),s.find(".del-patient").on("click",function(){c($(this))})},errorFun:function(t){}})}function c(t){o.CheckLogin(function(){var n=t.closest("tr"),i=n.data("id");l.SendAjax({url:"/users/patient/del",param:{contactPersonId:i},method:"POST",tipText:"删除就诊人",callback:function(t){n.hide(1e3)},errorFun:function(t){}})})}var l=i(4),o=i(9);$(".del-patient").on("click",function(){c($(this))}),$("#add-tr").on("click",function(){a()})}.call(n,i,n,t),!(void 0!==e&&(t.exports=e))}});