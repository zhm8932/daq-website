webpackJsonp([28],{0:function(t,n,e){e(216),t.exports=e(7)},209:function(t,n,e){var o;o=function(t,n,o){function a(t){function n(e,o){if(e<0)return t.outdatedFun&&t.outdatedFun(),!1;o.attr("data-restTime",1e3*e);var a=parseInt(e/60)<10?"0"+parseInt(e/60):parseInt(e/60),i=parseInt(e%60)<10?"0"+parseInt(e%60):parseInt(e%60);o.html(a+t.minuteUnit+i+t.secondUnit),e--,setTimeout(function(){n(e,o)},1e3)}var e={minuteUnit:"分",secondUnit:"秒",outdatedFun:function(){window.location.reload()}},o="true"===$("#browser-mobile").val();o&&(e.minuteUnit=" : ",e.secondUnit=""),t=$.extend({},e,t);var a=$(".timer");a.each(function(e,o){var a=$(o),i=parseInt(a.attr("data-paytime")),r=parseInt(a.attr("data-currenttime")),c=parseInt((t.totalTime-(r-i))/1e3);n(c,a)})}e(3),n.updateTime=a}.call(n,e,n,t),!(void 0!==o&&(t.exports=o))},216:function(t,n,e){var o;o=function(t,n,o){function a(t){d.CheckLogin(function(){r.ShowComfirmDialog({tipText:"确定删除吗?",okCallback:function(){t.addClass("disabled").off("click");var n=t.closest("dl.order"),e=n.attr("data-id");r.SendAjax({url:"/trade/order/delete",param:{id:e},method:"POST",tipText:"删除订单",callback:function(t){window.location.reload()},errorFun:function(n){t.removeClass("disabled").on("click",function(){a(t)})}})}})})}function i(t){d.CheckLogin(function(){r.ShowComfirmDialog({tipText:"确定取消吗?",okCallback:function(){t.addClass("disabled").off("click");var n=t.closest("dl.order"),e=n.attr("data-id");r.SendAjax({url:"/trade/order/cancel",param:{id:e},method:"POST",tipText:"取消订单",callback:function(t){window.location.reload()},errorFun:function(n){t.removeClass("disabled").on("click",function(){i(t)})}})}})})}var r=e(4),c=e(209),d=e(9);$(function(){c.updateTime({totalTime:18e5,outdatedFun:function(){window.location.href="/trade/order/list"}}),$(".del-order").on("click",function(){a($(this))}),$(".cancel-order").on("click",function(){i($(this))})})}.call(n,e,n,t),!(void 0!==o&&(t.exports=o))}});