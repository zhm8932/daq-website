webpackJsonp([21],{0:function(t,a,e){e(208),t.exports=e(7)},208:function(t,a,e){var n;n=function(t,a,n){function i(t,a){u.CheckLogin(function(){var e=$("#order-detail").data("id");l.SendAjax({url:"/trade/pay/payid",param:{orderId:e},method:"POST",tipText:"获取支付ID",callback:function(e){t&&t(e.data.id,a)},errorFun:function(t){}})})}function o(t,a){var e=$("#order-detail").data("id"),n=window.location.href,i=n.substr(0,n.indexOf("/",n.indexOf("/",n.indexOf("/")+1)+1));u.CheckLogin(function(){l.SendAjax({url:"/trade/order/pay",param:{id:t,payWay:a,ext:i+"/trade/order/paySuccess?order_no="+e},method:"POST",tipText:"前往支付页面",callback:function(t){window.location.href=t.data.credentia.order_info},errorFun:function(t){}})})}function r(t,a){u.CheckLogin(function(){l.SendAjax({url:"/trade/order/pay",param:{id:t,payWay:a},method:"POST",tipText:"前往支付页面",callback:function(t){var a="true"===$("#isMobile").val();a?d(t):c(t)},errorFun:function(t){}})})}function d(t){var a=null;new l.Popup({msg:'<div class="wechat-pay-dialog"><div class="left-box"><img src="data:image/png;base64,'+t.data.credentia.orderInfo+'"/><div class="wechat-tip"><i class="icon scan"></i><span class="scan-tip">请使用微信"扫一扫"扫描二维码支付</span></div><div class="price text-stress">￥'+t.data.tradeDTO.amount/100+"</div></div><div>",otherMsg:"",bOhterMsg:!0,callback:function(){a=setInterval(function(){s(function(t){var a=$("#order-detail").data("id"),e=t.data.orderState;2==e?window.location.href="/trade/order/paySuccess?order_no="+a:1!=e&&(window.location.href="/trade/order/list")})},3e3)},okText:"登录",width:"300",otherBox:"wechat-box",isHide:!1,okCallback:function(){},cancelFun:function(){clearInterval(a)}})}function c(t){var a=null;new l.Popup({msg:'<div class="wechat-pay-dialog"><div class="left-box"><img src="data:image/png;base64,'+t.data.credentia.orderInfo+'"/><div class="wechat-tip"><i class="icon scan"></i><span class="scan-tip">请使用微信"扫一扫"扫描二维码支付</span></div><div class="price text-stress">￥'+(t.data.tradeDTO.amount/100).toFixed(2)+'</div></div><div class="right-box"><img src="/public/images/wxsm_img.png"/></div><div>',otherMsg:"",bOhterMsg:!0,callback:function(){a=setInterval(function(){s(function(t){var a=$("#order-detail").data("id"),e=t.data.orderState;2==e?window.location.href="/trade/order/paySuccess?order_no="+a:1!=e&&(window.location.href="/trade/order/list")})},3e3)},okText:"登录",width:"730",otherBox:"wechat-box",isHide:!1,okCallback:function(){},cancelFun:function(){clearInterval(a)}})}function s(t){var a=$("#order-detail").data("id");l.SendAjax({url:"/trade/order/state",param:{id:a,time:(new Date).getTime()},method:"GET",tipText:"查询订单状态",callback:function(a){t&&t(a)},errorFun:function(t){}})}var l=e(4),u=e(9);s(function(t){var a=t.data.orderState;1!=a&&(window.location.href="/screenings/goods")});var f=e(209),p=window.location.href;p.substr(0,p.indexOf("/",p.indexOf("/",p.indexOf("/")+1)+1));$(function(){f.updateTime({totalTime:18e5,outdatedFun:function(){window.location.href="/trade/order/list"}}),$(".alipay").on("click",function(){var t=$(this).attr("data-paynum");i(o,t)}),$(".wechat-pay").on("click",function(){i(r,6)})})}.call(a,e,a,t),!(void 0!==n&&(t.exports=n))},209:function(t,a,e){var n;n=function(t,a,n){function i(t){function a(e,n){if(e<0)return t.outdatedFun&&t.outdatedFun(),!1;n.attr("data-restTime",1e3*e);var i=parseInt(e/60)<10?"0"+parseInt(e/60):parseInt(e/60),o=parseInt(e%60)<10?"0"+parseInt(e%60):parseInt(e%60);n.html(i+t.minuteUnit+o+t.secondUnit),e--,setTimeout(function(){a(e,n)},1e3)}var e={minuteUnit:"分",secondUnit:"秒",outdatedFun:function(){window.location.reload()}},n="true"===$("#browser-mobile").val();n&&(e.minuteUnit=" : ",e.secondUnit=""),t=$.extend({},e,t);var i=$(".timer");i.each(function(e,n){var i=$(n),o=parseInt(i.attr("data-paytime")),r=parseInt(i.attr("data-currenttime")),d=parseInt((t.totalTime-(r-o))/1e3);a(d,i)})}e(3),a.updateTime=i}.call(a,e,a,t),!(void 0!==n&&(t.exports=n))}});