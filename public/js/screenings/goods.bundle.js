webpackJsonp([15],{0:function(a,exports,t){t(200),a.exports=t(7)},16:function(a,exports,t){var e,i,s,i,s;/*! jQuery ellipsis - v1.1.1 - 2014-02-23
	* https://github.com/STAR-ZERO/jquery-ellipsis
	* Copyright (c) 2014 Kenji Abe; Licensed MIT */
!function(o){i=[t(3)],e=o,s="function"==typeof e?e.apply(exports,i):e,!(void 0!==s&&(a.exports=s)),i=[t(3)],s=function(){return o(window.jQuery,window,document,void 0)}.apply(exports,i),!(void 0!==s&&(a.exports=s))}(function($){$.fn.ellipsis=function(a){var t={row:1,onlyFullWords:!1,"char":"...",callback:function(){},position:"tail"};return a=$.extend(t,a),this.each(function(){var t=$(this),e=t.text(),i=e,s=i.length,o=t.height();t.text("a");var r=parseFloat(t.css("lineHeight"),10),l=t.height(),n=r>l?r-l:0,c=n*(a.row-1)+l*a.row;if(o<=c)return t.text(e),void a.callback.call(this);var d=1,h=0,p=e.length;if("tail"===a.position){for(;d<p;)h=Math.ceil((d+p)/2),t.text(e.slice(0,h)+a["char"]),t.height()<=c?d=h:p=h-1;e=e.slice(0,d),a.onlyFullWords&&(e=e.replace(/[\u00AD\w\uac00-\ud7af]+$/,"")),e+=a["char"]}else if("middle"===a.position){for(var u=0;d<p;)h=Math.ceil((d+p)/2),u=Math.max(s-h,0),t.text(i.slice(0,Math.floor((s-u)/2))+a["char"]+i.slice(Math.floor((s+u)/2),s)),t.height()<=c?d=h:p=h-1;u=Math.max(s-d,0);var f=i.slice(0,Math.floor((s-u)/2)),g=i.slice(Math.floor((s+u)/2),s);a.onlyFullWords&&(f=f.replace(/[\u00AD\w\uac00-\ud7af]+$/,"")),e=f+a["char"]+g}t.text(e),a.callback.call(this)}),this}})},193:function(a,exports,t){var e;e=function(require,exports,a){a.exports={host:"localhost",port:"8080",hostname:"http://120.76.24.129",appKey:"T-OPF-02191317",secret:"themis-opf-test",v:"1.0.0",format:"json"}}.call(exports,t,exports,a),!(void 0!==e&&(a.exports=e))},196:function(a,exports,t){var e;e=function(require){$(function(){var a=$(".health_detail article,.goods_detail article"),t=a.width();$.each(a.find("img"),function(a,e){var i,s,o=$(this);$("<img/>").attr("src",$(o).attr("src")).load(function(){i=this.width,s=this.height,i>=t?$(o).css("width","100%").css("height","auto"):$(o).css("width",i+"px").css("height",s+"px")})})})}.call(exports,t,exports,a),!(void 0!==e&&(a.exports=e))},200:function(a,exports,t){var e;e=function(require){t(3);var a=(t(193),t(4));t(16);var e=t(201);$(document).ready(function(){function i(a){return parseFloat(a)/100%1!=0?parseFloat(a)/100:parseFloat(a)/100+".00"}function s(t){return $.ajax({url:"/screenings/goods",data:t,success:function(t){var e=JSON.parse(t),s="";if(e.success){var o=e.data.data,r="";d=e.data.pageCount,$.each(o,function(t,e){var o="",l="";o=i(e.discountPrice),l=i(e.price),r=a.browser.mobile?e.mobileCoverImages[0]:e.pcCoverImages[0],s+='<li class="box"><a href="/screenings/goods/detail/'+e.id+'"><img data-original="'+r+'"/><h4><a href="/screenings/goods/detail/'+e.id+'">'+e.goodsName+"</a></h4><p>"+e.fitPeople+'</p><div class="price"><span class="new"><em>￥</em>'+o+'</span><span class="old">原价'+l+"</span></div></div></li>"}),$(s).appendTo($("#waterfal")),$(".goods_list img").lazyload({effect:"fadeIn"})}}}),{pageCount:d,data:t}}function o(){c+=1;var a={pageIndex:c,send:!0,categoryId:$(".tab ul li.on").attr("data-id")};d&&c<=d&&s(a)}t(196),e(".tab li");var r=$(".tab"),l=r.find(".on").attr("data-id"),n=r.find("img");$.each(n,function(a,t){l==$(t).attr("data-id")&&$(t).show()}),a.browser.ie?$(".ellips").ellipsis({row:2,"char":"……",callback:function(){}}):a.browser.mobile,$(".pages").on("click",".prev,.next",function(){var t=$(this).attr("data-page"),e=$(this),i={pageIndex:t};e.hasClass("disable")||a.SendAjax({url:"/healths/list/list_ask_web",param:i,method:"POST",tipText:"请求问答数据",callback:function(a){var t=a,i=$("#list_ask ul");if(t.success){var s=t.data.data,o="",r=t.data.currentPage,l=t.data.pageCount;$.each(s,function(a,t){o+='<li><a href="/healths/list/article/'+t.id+'" title="'+t.title+'"><i class="icon"></i>'+t.title+"</a></li>"}),e.hasClass("next")?r==l?(e.addClass("disable"),e.siblings().removeClass("disable")):1!=r?(e.attr("data-page",r+1),e.siblings().removeClass("disable").attr("data-page",r-1)):(e.attr("data-page",r+1),e.siblings().attr("data-page",r-1)):1==r?(e.addClass("disable"),e.siblings().removeClass("disable")):1!=r?(e.attr("data-page",r-1),e.siblings().removeClass("disable").attr("data-page",r+1)):(e.attr("data-page",r-1),e.siblings().attr("data-page",r+1)),i.html(o)}}})});var c=1,d=$("#waterfal").attr("data-pageCount")||"",h=$(window).height(),p=$(".footer").outerHeight()+$(".copyright").outerHeight();a.browser.mobile&&(p+=$(".footerWap").height()),$(window).scroll(function(){var a=$(document).scrollTop();a>=h-p-50&&(h=$(document).height(),o())})})}.call(exports,t,exports,a),!(void 0!==e&&(a.exports=e))},201:function(a,exports,t){var e;e=function(require,exports,a){function t(a){for(var t=location.pathname,e=$(a),i=($(".nav ul li.on a").attr("href"),0),s=e.length;i<s;i++){var o=$(e[i]).find("a").attr("href");o.search(t)!=-1&&"/screenings/goods"!=t?$(e[i]).addClass("on"):o.search(t)!=-1&&$(e[0]).addClass("on")}}a.exports=t}.call(exports,t,exports,a),!(void 0!==e&&(a.exports=e))}});