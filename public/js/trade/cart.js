define(function(require,exports,module){function t(t,a){var e=t.closest(".table-tr").find(".operation"),c=e.attr("data-city"),o=$(".table-tr .checkbox.checked").length,s=null;a&&1==o?(s=$(".table-tr .checkbox").not(".deleted"),s.each(function(t,a){var e=$(a).closest(".table-tr"),o=e.find(".operation").attr("data-city");o!=c&&($(a).addClass("not-in-area"),e.find(".mask").removeClass("none"))})):a||0!=o||(s=$(".table-tr .checkbox.not-in-area").not(".deleted"),s.each(function(t,a){var e=$(a).closest(".table-tr");e.find(".operation").attr("data-city");$(a).removeClass("not-in-area"),e.find(".mask").addClass("none")}))}function a(t){t.addClass("disabled").off("click");var e=$(t).closest(".operation").attr("data-id");n.SendAjax({url:"/trade/cart/delItem",param:{id:e},method:"POST",tipText:"删除",callback:function(a){t.closest(".table-tr").hide(500),t.closest(".table-tr").find(".checkbox").addClass("deleted").removeClass("checked"),o()},errorFun:function(e){t.removeClass("disabled").on("click",function(){a(t)})}})}function e(a){var e=$(".tfoot .check-all");a.hasClass("checked")?(a.removeClass("checked"),e.hasClass("checked")&&e.removeClass("checked"),t(a,!1)):(a.addClass("checked"),t(a,!0)),o()}function c(a){var e=$(".table-tr .checkbox").not(".deleted").not(".not-in-area");a.hasClass("checked")?(e.each(function(a,e){$(e).removeClass("checked"),t($(e),!1)}),$(a).removeClass("checked")):(e.each(function(a,e){$(e).hasClass("not-in-area")||($(e).addClass("checked"),t($(e),!0))}),$(a).addClass("checked")),o()}function o(){var t=$(".table-tr .checkbox.checked"),a=t.length,e=0;t.each(function(t,a){var c=parseFloat($(a).closest(".table-tr").find(".operation").attr("data-subTotal"));e+=c}),$(".tfoot .price").html("￥"+e/100),$(".tfoot .num").html(a),a>0?$(".submit-btn").addClass("back-stress").off("click").on("click",function(){s(t,e)}):$(".submit-btn").removeClass("back-stress").off("click")}function s(t,a,e){var c=[];t.each(function(t,a){var e=$(a).closest(".table-tr").find(".operation"),o={};o.id=e.attr("data-id"),o.goodsId=e.attr("data-goodsId"),o.imgUrl=e.attr("data-imgUrl"),o.goodsName=e.attr("data-goodsName"),o.discountPrice=e.attr("data-discountPrice"),o.transmitType=e.attr("data-transmitType"),o.address=e.attr("data-address"),o.subTotal=e.attr("data-subTotal"),o.favPrice=e.attr("data-favPrice"),c.push(o)}),$("#submitForm input[name=items]").val(JSON.stringify(c)),$("#submitForm input[name=totalPrice]").val(a),$("#submitForm").submit()}var n=require("../utils.js");$(function(){$(".del-cart-item").on("click",function(){a($(this))}),$(".table-tr .checkbox").on("click",function(){e($(this),$(this))}),$(".tfoot .check-all").on("click",function(){c($(this))}),$(".submit-btn").on("click",function(){})})});