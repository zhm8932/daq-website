define(function(require,exports,module){function t(){var t=$(".goods-list tbody tr"),a=[];t.eq(0).attr("data-goodsid");t.each(function(t,o){var d=$(o),n={};n.goodsId=d.attr("data-goodsid"),n.transmitType=d.attr("data-transmitType"),n.address=JSON.parse(d.attr("data-address")),n.amount=1,a.push(n)});var o=$("#cityId").val(),d=$("#coupon-table .radio.cheked").closest("tr").attr("data-id")||"",n={cityId:o,couponCodeId:d,goodsPropertyList:a};$("#submitForm input[name=orderPlaceDTO]").val(JSON.stringify(n)),$("#submitForm").submit()}function a(t){t.addClass("disabled").off("click");var d=$("#coupon-code").val();i.SendAjax({url:"/trade/coupon/addByInvite",param:{inviteCode:d},method:"POST",tipText:"添加优惠券",callback:function(d){var e=[];n(e,d.data);var i=$(e.join(""));$("#coupon-table tbody").append(i),i.find(".coupon-radio").on("click",function(){o($(this))}),t.removeClass("disabled").on("click",function(){a($(this))})},errorFun:function(){t.removeClass("disabled").on("click",function(){a($(this))})}})}function o(t){i.CheckRadio(t,".coupon-radio",function(){var a=parseInt($("#goodsTotalPrice").val());if(t.hasClass("checked")){var o,d,n,e,i,c=t.closest("tr"),s=c.attr("data-ftype");"cash"==s?(o=n=parseInt(c.attr("data-faceValue")),d=a-n):"discount"==s&&(e=parseFloat(c.attr("data-discount")),i=parseFloat(c.attr("data-mostDeduction")),o=(a*(1-.1*e)).toFixed(0),o=o>=i?i:o,d=a-o),$("#actualTotal .price").html("￥"+d/100),$("#actualTotal .fav").html("(已优惠￥"+o/100+")")}else $("#actualTotal .price").html("￥"+a/100),$("#actualTotal .fav").html("(已优惠￥0)")})}function d(){var t={pageSize:100,useState:1,pageIndex:1};i.SendAjax({url:"/trade/coupon/list",param:t,method:"GET",tipText:"获取优惠券",callback:function(t){for(var a=t.data.data,d=[],e=0;e<a.length;e++)n(d,a[e]);$("#coupon-table tbody").html(d.join("")),$(".coupon-radio").off("click").on("click",function(){o($(this))})},errorFun:function(t){}})}function n(t,a){var o,d,n,c=parseInt($("#goodsTotalPrice").val()),s=$("#cityId").val(),u=JSON.parse(a.fitArea),r=[],p=[];for(n=0;n<u.length;n++)r.push(u[n].name),p.push(u[n].categoryId);"cash"==a.ftype?(o=parseInt(a.faceValue),d=parseInt(a.enoughMoney),c>=d&&e(s,p)?t.push('<tr data-id="'+a.couponCodeId+'" data-faceValue="'+o+'" data-enoughMoney="'+d+'" data-ftype="'+a.ftype+'"><td><span class="radio coupon-radio"></span></td>'):t.push('<tr data-id="'+a.couponCodeId+'" data-faceValue="'+o+'" data-enoughMoney="'+d+'" data-ftype="'+a.ftype+'"><td><span class="radio coupon-radio disabled"></span></td>'),t.push("<td>"+parseInt(a.faceValue)/100+"元</td>"),0==d?t.push("<td>无门槛</td>"):t.push("<td>满"+d/100+"元使用</td>")):"discount"==a.ftype&&(e(s,p)?t.push('<tr data-id="'+a.couponCodeId+'" data-discount="'+a.discount+'" data-mostDeduction="'+a.mostDeduction+'" data-ftype="'+a.ftype+'"><td><span class="radio coupon-radio"></span></td>'):t.push('<tr data-id="'+a.couponCodeId+'" data-discount="'+a.discount+'" data-mostDeduction="'+a.mostDeduction+'" data-ftype="'+a.ftype+'"><td><span class="radio coupon-radio disabled"></span></td>'),t.push("<td>"+a.discount+"折</td>"),t.push("<td>最多可抵"+parseInt(a.mostDeduction)/100+"元</td>")),t.push("<td>限定地区:"+r.join(",")+"</td>"),t.push("<td >有效期至"+i.GetLoacalDateString(a.endTime)+"</td></tr>")}function e(t,a){for(var o=0;o<a.length;o++)if(t==a[o])return!0;return!1}var i=require("../utils.js");$(function(){d(),$(".add-coupon").on("click",function(){a($(this))}),$("#submit-btn").on("click",function(){t()})})});