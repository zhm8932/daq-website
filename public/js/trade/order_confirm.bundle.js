webpackJsonp([19],{0:function(t,exports,o){o(196),t.exports=o(7)},196:function(t,exports,o){var a;a=function(require,exports,t){function a(t){var o=$(".goods-list tbody tr"),e=[],n=(o.eq(0).attr("data-goodsid"),[]);o.each(function(t,o){var a=$(o),d={};d.goodsId=a.attr("data-goodsid"),a.attr("data-id")&&"undefined"!=a.attr("data-id")&&n.push(a.attr("data-id")),d.transmitType=a.attr("data-transmitType");for(var i=JSON.parse(a.attr("data-address")),r="",c=0;c<i.length;c++)r+=i[c].name;d.address=r,d.hospital=JSON.parse(a.attr("data-hospital")),d.amount=1,e.push(d)});var d=$("#cityId").val(),i=$("#coupon-table .radio.checked").closest("tr").attr("data-id")||"",r=$("#actualTotal .price").html().substr(1);if(parseFloat(r)<=0)return c.ShowComfirmDialog({tipText:"订单金额必须大于0.00元",noConfirmBtn:!0}),!1;var u={cityId:d,couponCodeId:i,goodsPropertyList:e};t.addClass("disabled").off("click");var l=$("#orderToken").val();c.SendAjax({url:"/trade/order/create",param:{orderPlaceDTO:JSON.stringify(u),ids:JSON.stringify(n),orderToken:l},method:"POST",tipText:"提交订单",callback:function(t){s.getCartCount(function(){window.location.href="/trade/order/orderSuccess?id="+t.id})},errorFun:function(){t.removeClass("disabled").on("click",function(){a(t)})}})}function e(t){s.CheckLogin(function(){var o=$("#coupon-code").val().trim();return o?(t.off("click"),void c.SendAjax({url:"/users/coupon/addByInvite",param:{inviteCode:o},method:"POST",tipText:"添加优惠券",callback:function(o){c.ShowComfirmDialog({tipText:"领取成功!",noConfirmBtn:!0}),$("#coupon-code").val("");var a=$("#coupon-table tbody tr"),d=i(o.data),r=$(d.trStr);d.isfit?(a.eq(0).before(r),r.find(".coupon-radio").on("click",function(){n($(this))})):a.eq(l).before(r),$("#coupon-table tbody tr.no-record").remove(),t.on("click",function(){e($(this))})},errorFun:function(){t.on("click",function(){e($(this))})}})):(c.ShowComfirmDialog({tipText:"请输入优惠码",noConfirmBtn:!0}),!1)})}function n(t){c.CheckRadio(t,".coupon-radio",function(){var o=parseInt($("#discountPriceTotal").val()),a=parseInt($("#servicePriceTotal").val()),e=parseInt($("#goodsTotalPrice").val());if(t.hasClass("checked")){var n,d,i,r,c,s=t.closest("tr"),u=s.attr("data-ftype");"cash"==u?(n=i=parseInt(s.attr("data-faceValue")),d=o-i>0?o-i+a:0+a):"discount"==u&&(r=parseFloat(s.attr("data-discount")),c=parseFloat(s.attr("data-mostDeduction")),n=(o*(1-.1*r)).toFixed(0),n=n>=c?c:n,d=o-n+a),$("#actualTotal .price").html("￥"+(d/100).toFixed(2)),$("#actualTotal .fav").html("(已优惠￥"+(n/100).toFixed(2)+")")}else $("#actualTotal .price").html("￥"+(e/100).toFixed(2)),$("#actualTotal .fav").html("(已优惠￥0.00)")})}function d(){s.CheckLogin(function(){var t={pageSize:100,useState:1,pageIndex:1};c.SendAjax({url:"/users/coupon/list",param:t,method:"GET",tipText:"获取优惠券",callback:function(t){var o=t.data,a=[],e=[];if(0===o.length)$("#coupon-table tbody").html('<tr class="text-center no-record"><td colspan="5">暂无优惠券记录</td></tr>');else{for(var d=0;d<o.length;d++){var r=i(o[d]);r.isfit?a.push(r.trStr):e.push(r.trStr)}$("#coupon-table tbody").html(a.join("")+e.join(""))}$(".coupon-radio").off("click").on("click",function(){n($(this))})},errorFun:function(t){}})})}function i(t){var o,a,e,n=[],d=parseInt($("#discountPriceTotal").val()),i=$("#currentHospitalCode").val(),s=JSON.parse(t.fitArea),p=[],f=[],h=!1,m=(new Date).getTime();for(e=0;e<s.length;e++)p.push(s[e].hospitalName),f.push(s[e].hospitalCode);return"cash"==t.ftype?(o=parseFloat(t.faceValue),a=parseFloat(t.enoughMoney),d>=a&&r(i,f)&&m>=t.beginTime&&m<=t.endTime?(n.push('<tr data-id="'+t.couponCodeId+'" data-faceValue="'+o+'" data-enoughMoney="'+a+'" data-ftype="'+t.ftype+'"><td><span class="radio coupon-radio"></span></td>'),h=!0):(n.push('<tr data-id="'+t.couponCodeId+'" data-faceValue="'+o+'" data-enoughMoney="'+a+'" data-ftype="'+t.ftype+'"><td><span class="radio coupon-radio disabled"></span></td>'),h=!1),n.push("<td>"+(parseFloat(t.faceValue)/100).toFixed(2)+"元</td>"),0==a?n.push("<td>无门槛</td>"):n.push("<td>满"+(a/100).toFixed(2)+"元使用</td>")):"discount"==t.ftype&&(r(i,f)&&m>=t.beginTime&&m<=t.endTime?(n.push('<tr data-id="'+t.couponCodeId+'" data-discount="'+t.discount+'" data-mostDeduction="'+t.mostDeduction+'" data-ftype="'+t.ftype+'"><td><span class="radio coupon-radio"></span></td>'),h=!0):(n.push('<tr data-id="'+t.couponCodeId+'" data-discount="'+t.discount+'" data-mostDeduction="'+t.mostDeduction+'" data-ftype="'+t.ftype+'"><td><span class="radio coupon-radio disabled"></span></td>'),h=!1),n.push("<td>"+t.discount+"折</td>"),n.push("<td>最多可抵"+(parseFloat(t.mostDeduction)/100).toFixed(2)+"元</td>")),n.push("<td>限"+p.join("、")+"</td>"),n.push("<td >"+c.GetLoacalDateString(t.beginTime)+" 至 "+c.GetLoacalDateString(t.endTime)+"</td></tr>"),h?l++:u++,{trStr:n.join(""),isfit:h}}function r(t,o){for(var a=0;a<o.length;a++)if(t===o[a])return!0;return!1}var c=o(4),s=o(9),u=0,l=0;$(function(){$(".add-coupon").on("click",function(){e($(this))}),$("#submit-btn").on("click",function(){a($(this))}),$(".coupon-trigger").on("click",function(){var t=$(this);if(t.hasClass("opend"))t.removeClass("opend"),$(".coupon-box").hide();else{t.addClass("opend"),$(".coupon-box").show();var o=$(".coupon-box").data("load");"first"==o&&($(".coupon-box").data("load","non-first"),d())}})})}.call(exports,o,exports,t),!(void 0!==a&&(t.exports=a))}});