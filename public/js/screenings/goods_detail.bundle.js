webpackJsonp([16],{0:function(t,a,e){e(202),t.exports=e(7)},193:function(t,a,e){var o;o=function(t,a,e){e.exports={host:"localhost",port:"8080",hostname:"http://120.76.24.129",appKey:"T-OPF-02191317",secret:"themis-opf-test",v:"1.0.0",format:"json"}}.call(a,e,a,t),!(void 0!==o&&(t.exports=o))},196:function(t,a,e){var o;o=function(t){$(function(){var t=$(".health_detail article,.goods_detail article"),a=t.width();$.each(t.find("img"),function(t,e){var o,i,s=$(this);$("<img/>").attr("src",$(s).attr("src")).load(function(){o=this.width,i=this.height,o>=a?$(s).css("width","100%").css("height","auto"):$(s).css("width",o+"px").css("height",i+"px")})})})}.call(a,e,a,t),!(void 0!==o&&(t.exports=o))},202:function(t,a,e){var o;o=function(t){function a(){s(function(){var t=[],a=$("#goods"),e={},o=$("#transmit-type .type.on");e.transmitType=o.attr("data-transmitType");var i=o.attr("data-favPrice"),s=parseInt(a.attr("data-discountPrice"))+parseInt(i);e.favPrice=i,e.subTotal=s;var n=JSON.parse($("#locals_address").val());if("sampling_home"==o.attr("data-transmitType")){var r=$("#area .option.active").data("area");n.push(r)}e.address=JSON.stringify(n),e.goodsId=a.attr("data-id"),e.imgUrl=a.attr("data-imgUrl"),e.goodsName=a.attr("data-goodsName"),e.discountPrice=a.attr("data-discountPrice"),e.hospital=$("#hospital").val(),t.push(e),$("#submitForm input[name=items]").val(JSON.stringify(t)),$("#submitForm input[name=totalPrice]").val(s),$("#submitForm").submit()})}function o(t){l.SendAjax({url:t.url,param:t.param,method:"GET",tipText:"获取地址",callback:function(a){for(var e=a.data,o=[],i=0;i<e.length;i++){var s={};s.id=e[i].id,s.name=e[i].name,s.level=e[i].level,0==i?o.push('<li class="option active" data-area='+JSON.stringify(s)+">"+s.name+"</li>"):o.push('<li class="option" data-area='+JSON.stringify(s)+">"+s.name+"</li>")}$("#"+t.id+" .options").html(o.join("")),e.length<=0?$("#"+t.id+" .selected .text").html("暂无区域"):$("#"+t.id+" .selected .text").html(e[0].name),t.fun&&t.fun()}})}function i(){s(function(){var t=$("#transmit-type .type.on"),a=t.attr("data-value"),e=JSON.parse($("#locals_address").val());if("sampling_home"==t.attr("data-transmitType")){var o=$("#area .option.active").data("area");e.push(o)}var i=$("#goods").attr("data-id"),s={address:JSON.stringify(e),transmit_type:a,goodsId:i,hospital:$("#hospital").val()};l.SendAjax({url:"/trade/cart/addItem",param:s,method:"POST",tipText:"加入购物车",callback:function(t){new l.MsgShow({delayTime:2e3,title:'<i class="icon"></i>加入购物车成功!',otherBox:"successBox"}).hideMsg();r.cartCoutAddOne()}})})}function s(t){r.CheckLogin(function(){if(!n())return!1;var a=$("#transmit-type .type.on");return 0==a.length?($(".type-box").addClass("unchoose"),!1):void(t&&t())})}function n(){var t,a;try{t=JSON.parse($("#locals_address").val()),a=JSON.parse($("#fit_hospital").val())}catch(e){return!1}for(var o=t[1].categoryId,i=0;i<a.length;i++){var s=a[i];if(s.city==o){$("#hospitalName").text(s.hospitalName);var n={hospitalCode:s.hospitalCode,hospitalName:s.hospitalName};return $("#hospital").val(JSON.stringify(n)),!0}}return $(".submitBox button").addClass("disabled"),$(".hospital-tip").removeClass("none"),!1}var r=(e(193),e(9)),l=e(4);e(5),$(function(){e(196),$(".slideBox").touchSlider({container:this,duration:350,delay:3e3,margin:5,mouseTouch:!0,namespace:"touchslider",next:".next",pagination:".tit span",heightType:!0,currentClass:"on",prev:".prev",autoplay:!1,viewport:".touchslider-viewport"}),n()&&($("#addCartBtn").on("click",function(){i()}),$("#toOrder").on("click",function(){a()}));var t=$(".service_type span"),s=t.length,r=t.parents(".service_type_wrapper");1==s?r.addClass("service_type_one"):2==s?r.addClass("service_type_two"):r.addClass("service_type_three"),$(".goods_detail .tab span").on("click",function(){var t=0,a=$(".topBar").height(),e=$(".goods_detail .tab"),o=e.height(),i=a+o,s=$(this),n=s.data("href-id");t=$("#"+n).offset().top-i,"content-detail"==n&&(t=$("#"+n).offset().top-i),$("html,body").animate({scrollTop:t},1e3)});var l=JSON.parse($("#locals_address").val()),d=$("#transmit-type .type"),c=!0;d.each(function(t,a){var e=$(a);e.on("click",function(){d.removeClass("on"),e.addClass("on"),$(".type-box").removeClass("unchoose");var t=e.attr("data-transmitType");if("sampling_home"==t){if($("#area").removeClass("none"),c){var a=l[1].categoryId;o({id:"area",url:"/dic/list/parentId",param:{activeState:1,parentId:a}}),c=!1}}else $("#area").addClass("none")})}),$(".type-box .box-header .close").on("click",function(){$(".type-box").removeClass("unchoose")})}),window.onload=function(){var t=$(".goods_detail #tab"),a=$(".topBar").height(),e=t.offset().top,o=$(".tab").width();$(window).scroll(function(){$(document).scrollTop()+a>e?(t.css("position","fixed").css({top:a+"px",width:o}),$("#tab-copy").removeClass("none"),console.log("悬浮")):(t.css("position","static").css("width",o+"px"),$("#tab-copy").addClass("none"))})}}.call(a,e,a,t),!(void 0!==o&&(t.exports=o))}});