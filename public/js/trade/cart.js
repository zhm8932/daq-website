define(function(require,exports,module){function t(t,a){var e=t.closest(".table-tr").find(".operation"),o=e.attr("data-city"),c=$(".table-tr .checkbox.checked").length,n=null;a&&1==c?(n=$(".table-tr .checkbox").not(".deleted"),n.each(function(t,a){var e=$(a).closest(".table-tr"),c=e.find(".operation").attr("data-city");c!=o&&($(a).addClass("not-in-area"),e.find(".mask").removeClass("none"))})):a||0!=c||(n=$(".table-tr .checkbox.not-in-area").not(".deleted"),n.each(function(t,a){var e=$(a).closest(".table-tr");e.find(".operation").attr("data-city");$(a).removeClass("not-in-area"),e.find(".mask").addClass("none")}))}function a(t){console.log(t),s.CheckLogin(function(){i.ShowComfirmDialog({tipText:"确定删除吗?",okCallback:function(){t.off("click");var e=$(t).closest(".operation").attr("data-id");i.SendAjax({url:"/trade/cart/delItem",param:{id:e},method:"POST",tipText:"删除",callback:function(a){t.closest(".table-tr").hide(500),t.closest(".table-tr").find(".checkbox").addClass("deleted").removeClass("checked"),s.cartCoutDelOne(),c()},errorFun:function(e){t.on("click",function(){a(t)})}})}})})}function e(t){var a=$(".tfoot .check-all");t.hasClass("checked")?(t.removeClass("checked"),a.hasClass("checked")&&a.removeClass("checked")):t.addClass("checked"),c()}function o(a){var e=$(".table-tr .checkbox").not(".deleted").not(".not-in-area");a.hasClass("checked")?(e.each(function(a,e){$(e).removeClass("checked"),t($(e),!1)}),$(a).removeClass("checked")):(e.each(function(a,e){$(e).hasClass("not-in-area")||($(e).addClass("checked"),t($(e),!0))}),$(a).addClass("checked")),c()}function c(){var t=$(".table-tr .checkbox.checked"),a=t.length,e=0;t.each(function(t,a){var o=parseFloat($(a).closest(".table-tr").find(".operation").attr("data-subTotal"));e+=o}),$(".tfoot .price").html("￥"+(e/100).toFixed(2)),$(".tfoot .num").html(a),a>0?$(".submit-btn").addClass("back-stress").off("click").on("click",function(){n(t,e)}):$(".submit-btn").removeClass("back-stress").off("click")}function n(t,a){var e=[];t.each(function(t,a){var o=$(a).closest(".table-tr").find(".operation"),c={};c.id=o.attr("data-id"),c.goodsId=o.attr("data-goodsId"),c.imgUrl=o.attr("data-imgUrl"),c.goodsName=o.attr("data-goodsName"),c.discountPrice=o.attr("data-discountPrice"),c.transmitType=o.attr("data-transmitType"),c.address=o.attr("data-address"),c.hospital=o.attr("data-hospital"),c.subTotal=o.attr("data-subTotal"),c.favPrice=o.attr("data-favPrice"),e.push(c)}),$("#submitForm input[name=items]").val(JSON.stringify(e)),$("#submitForm input[name=totalPrice]").val(a),$("#submitForm").submit()}var i=require("../libs/utils.js"),s=require("../login.js");$(function(){var t=i.SetMinHeight(),c=$(".empty-cart-box");c&&c.css("margin-top",(t-c.height())/2+"px"),$(".del-cart-item").on("click",function(){a($(this))}),$(".table-tr .checkbox").on("click",function(){e($(this),$(this))}),$(".tfoot .check-all").on("click",function(){o($(this))}),$(".submit-btn").on("click",function(){}),$(".empty-cart .to-buy").on("click",function(){window.location.href="/screenings/goods"})});var r;$("body").on("mousedown",".table-tr",function(){var t=$(this).find(".del-cart-item");r=setTimeout(function(){console.log("mousedown"),a(t)},2e3)}),$("body").bind("mouseup",function(){clearTimeout(r)})});