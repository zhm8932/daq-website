!function(e){function t(a){if(s[a])return s[a].exports;var n=s[a]={exports:{},id:a,loaded:!1};return e[a].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var a=window.webpackJsonp;window.webpackJsonp=function(i,r){for(var o,d,l=0,u=[];l<i.length;l++)d=i[l],n[d]&&u.push.apply(u,n[d]),n[d]=0;for(o in r)e[o]=r[o];for(a&&a(i,r);u.length;)u.shift().call(null,t);if(r[0])return s[0]=0,t(0)};var s={},n={31:0};t.e=function(e,a){if(0===n[e])return a.call(null,t);if(void 0!==n[e])n[e].push(a);else{n[e]=[a];var s=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.charset="utf-8",i.async=!0,i.src=t.p+""+e+"."+({0:"abouts",1:"agencys/department_detail",2:"agencys/detail",3:"agencys/infos",4:"agencys/list",5:"common",6:"components",7:"config",8:"healths",9:"healths/list",10:"healths/list_ask",11:"imgAuto",12:"index",13:"login",14:"pager",15:"screenings/goods",16:"screenings/goods_detail",17:"searchs/search_report",18:"trade/cart",19:"trade/order_confirm",20:"trade/order_list",21:"trade/order_success",22:"treat/pay",23:"treat/reg_doc",24:"treat/reg_source_list",25:"users/account",26:"users/coupons",27:"users/order_detail",28:"users/orders",29:"users/patients",30:"users/registerings"}[e]||e)+".bundle.js",s.appendChild(i)}},t.m=e,t.c=s,t.p=""}([,,,function(e,t){e.exports=jQuery},function(e,t,a){var s;s=function(e,t,s){function n(e){return w.hex_md5(e).toUpperCase()}function i(e){var t={ok:"ok",okOther:"okBtn",cancel:"cancel",close:"close",globalBg:"globalBg",popupBox:"popupBox",otherBox:"",isHide:!0,isMore:!1,isCancelBtn:!1,otherMsg:"其他提示信息",bOhterMsg:!1,msg:"请输入内容",delayTime:2e3,okText:"确定",cancelText:"取消",okCallback:null,cancelFun:null,closeFun:null,callback:null,completeRenderFun:null};this.opts=$.extend({},t,e),this.popupBox=this.opts.popupBox,this.$body=$("body"),this.init()}function r(e){var t={closeBtn:".closeBtn",mainCell:"msgBox",otherBox:"",title:"提示语",delayTime:1500,interTime:1500,width:300,height:50,effect:"fade"};this.options=$.extend({},t,e),this.mainCell=this.options.mainCell,this.init()}function o(e,t){var a=$(e).children(),s=$(t).children();a.hasClass("on")||a.first().addClass("on"),s.first().show();var n=$(".tabBox .hd .on").index();s.eq(n).show().siblings().hide(),a.click(function(){n=$(this).index(),$(this).addClass("on").siblings().removeClass(),s.eq(n).show().siblings().hide()})}function d(e){var t=$("#"+e).val();return""!=t.trim()||($("#"+e).parent().find(".tip").html("不能为空"),!1)}function l(e){var t=/^(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/;return t.test(e)}function u(e){$.ajax({url:e.url,type:e.method||"GET",data:e.param||{},dataType:e.dataType||"json",success:function(t){t.success?e.callback&&e.callback(t):(L({tipText:e.tipText+"失败,原因是:"+t.msg,noConfirmBtn:!0}),e.errorFun&&e.errorFun(t))},error:function(t){L("404"==t.status?{tipText:"页面丢失，请稍后再试",noConfirmBtn:!0}:"500"==t.status?{tipText:"系统忙，请稍后再试",noConfirmBtn:!0}:{tipText:e.tipText+"出错了,响应码是"+t.status+",请联系管理员",noConfirmBtn:!0}),e.errorFun&&e.errorFun()}})}function m(e,t,a){if("success"==e)var s='<div id="alertTip" class="alert-tip alert-success ">'+t+"</div>";else var s='<div id="alertTip" class="alert-tip alert-fail">'+t+"</div>";$(s).appendTo($("body").eq(0)),$("#alertTip").center(),$("#alertTip").show(1e3),setTimeout(function(){$("#alertTip").hide(1e3),$("#alertTip").remove(),a&&a()},2500)}function _(e,t,a,s){var n=e+"="+encodeURIComponent(t);if(s>0){var i=new Date;i.setTime(i.getTime+3600*s*1e3),n=n+";expires="+i.toGMTString()}n+=";path="+a,document.cookie=n}function c(e){for(var t=document.cookie,a=t.split("; "),s=0;s<a.length;s++){var n=a[s].split("=");if(n[0]==e)return decodeURIComponent(n[1])}return""}function h(e){var t=new Date;t.setTime(t.getTime()-1e4),document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:01 GMT"}function p(e){if(e)var t=new Date(e);else var t=new Date;var a=t.getHours()<10?"0"+t.getHours():t.getHours(),s=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),n=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds(),i=a+":"+s+":"+n;return i}function f(e){if(e)var t=new Date(e);else var t=new Date;var a=t.getFullYear(),s=parseInt(t.getMonth())+1,n=s<10?"0"+s:s,i=t.getDate()<10?"0"+t.getDate():t.getDate(),r=a+"-"+n+"-"+i;return r}function M(e){if(e)var t=new Date(e);else var t=new Date;var a=t.getFullYear(),s=parseInt(t.getMonth())+1,n=s<10?"0"+s:s,i=t.getDate()<10?"0"+t.getDate():t.getDate(),r=t.getHours()<10?"0"+t.getHours():t.getHours(),o=t.getMinutes()<10?"0"+t.getMinutes():t.getMinutes(),d=t.getSeconds()<10?"0"+t.getSeconds():t.getSeconds(),l=a+"-"+n+"-"+i+"&nbsp;"+r+":"+o+":"+d;return l}function y(e){for(var e=e.replace(/\+/g," ").split("&"),t={},a="",s=0,n=e.length;s<n;s++)a=e[s].split("="),t[a[0]]=decodeURIComponent(decodeURI(a[1])).trim();return t}function g(e,t,a){e.hasClass("disabled")||(e.hasClass("checked")?e.removeClass("checked"):($(t).removeClass("checked"),e.addClass("checked")),a&&a())}function L(e){var t=e.confirmBtnText||"确定",a=e.cancelBtnText||"取消",s="okBtn",n="";n=e.noConfirmBtn?'<div class="box-header">提示<i class="icon close closePopup"></i></div><div class="box-body"><p class="confim-tip">'+e.tipText+'</p><div class="btn-box"><button class="cancelBtn closePopup">'+t+"</button></div></div>":'<div class="box-header">提示<i class="icon close closePopup"></i></div><div class="box-body"><p class="confim-tip">'+e.tipText+'</p><div class="btn-box"><button class="cancelBtn closePopup">'+a+'</button><button class="submitBtn confirm-btn '+s+'">'+t+"</button></div></div>";new i({msg:n,otherMsg:"confirm-btn",popupBox:"popupBox",ok:"confirm-btn",close:"closePopup",okOther:s,callback:function(){e.callback&&e.callback()},otherBox:"confirm-box",okCallback:function(){e.okCallback&&e.okCallback()}})}function Y(e){e.each(function(e,t){var a=$(t);a.on("click",function(e){$(".select-box").not($(this)).removeClass("open"),a.hasClass("open")?a.removeClass("open"):a.addClass("open")}),a.find(".options").on("click",function(e){e.stopPropagation();var t=$(this),a=$(e.target);if(a.is("li")){a.siblings().removeClass("active"),a.addClass("active");var s=t.closest(".select-box"),n=s.find(".selected .text");n.html(a.html()),s.removeClass("open")}})})}function v(){var e=$(window).height(),t=$("body>.topBar").outerHeight(!0)+$("body>.header").outerHeight(!0)+$("body>.nav").outerHeight(!0)+$("body>.positon").outerHeight(!0)+$("body>.footer").outerHeight(!0)+$("body>.copyright").outerHeight(!0),a=e-t+$("body>.topBar").outerHeight(!0);return $(".main-box").css("min-Height",a+"px"),a}a(3),a(5);var w=a(6);i.prototype={init:function(){var e=this;e.render(),$("."+e.popupBox).show(),e.$body.off("click","."+e.opts.okOther),e.$body.off("click","."+e.opts.cancel),e.$body.on("click","."+e.opts.okOther,function(){e.opts.okCallback(),e.opts.isHide&&e.hideBox()}),$(window).on("keydown",function(t){"13"==t.keyCode&&(e.opts.okCallback(),e.opts.isHide&&e.hideBox())});var t="."+this.opts.close;this.$body.on("click",t,function(){e.closeCallback()});var a="."+e.opts.cancel;this.$body.on("click",a,function(){e.cancelCallback()})},hideBox:function(e){var t=this;setTimeout(function(){$("."+t.getPopupBox()).hide(),t.opts.isMore||$("."+t.opts.globalBg).hide(),e&&e()},t.opts.delayTime)},globalBgFn:function(){var e='<div class="globalBg"></div>';$(".globalBg").length?$(".globalBg").show():this.$body.append(e)},getPopupBox:function(){var e=this.popupBox;return this.opts.isMore&&(e=this.opts.otherBox),e},render:function(e){var t=this;t.globalBgFn(),t.opts.isMore?t.$body.append(t.popupHtml()):$("."+t.popupBox).length?($("."+t.popupBox).remove(),t.$body.append(t.popupHtml())):t.$body.append(t.popupHtml()),t.opts.callback&&t.opts.callback();var a=$("."+this.opts.popupBox).outerWidth(),s=$("."+this.opts.popupBox).height();t.opts.isMore?(s=$("."+this.opts.otherBox).height(),a=$("."+this.opts.otherBox).outerWidth(),$("."+this.opts.otherBox).css({height:s,"margin-top":-s/2,"margin-left":-a/2})):$("."+this.opts.popupBox).css({height:s,"margin-top":-s/2,"margin-left":-a/2}),this.opts.completeRenderFun&&this.opts.completeRenderFun()},popupHtml:function(){var e=this.opts,t='<div class="'+this.popupBox+" "+this.opts.otherBox+'" style="width: '+e.width+"px;margin-left:-"+e.width/2+'px"><div class="innerBg"><span class="'+this.opts.close+'"><i class="icon"></i></span><article>'+this.opts.msg+'</article><div class="submitBox">';return e.isCancelBtn&&(t+='<button class="'+this.opts.cancel+'">'+this.opts.cancelText+"</button>"),t+='<button class="'+this.opts.ok+" "+this.opts.okOther+'">'+this.opts.okText+"</button></div>",e.bOhterMsg&&(t+='<div class="otherMsg">'+e.otherMsg+"</div>"),t+="</div></div>"},closeCallback:function(){$(".globalBg").hide(),$("."+this.popupBox).remove(),this.opts.closeFun&&this.opts.closeFun()},cancelCallback:function(){var e="";this.opts.isMore?e=this.opts.otherBox:($(".globalBg").hide(),e=this.popupBox),$("."+e).remove(),this.opts.cancelFun&&this.opts.cancelFun()}},r.prototype={init:function(){var e=this,t=e.options,a=t.effect;t.interTime;switch(a){case"fade":this.render(),$("."+e.mainCell).fadeIn()}},setHtml:function(){return'<div class="'+this.options.mainCell+" "+this.options.otherBox+'"></div>'},hideMsg:function(e){var t=this;setTimeout(function(){$("."+t.mainCell).hide(),"function"==typeof e&&e()},this.options.delayTime)},render:function(){var e=this.options,t=e.width,a=e.height;$("."+e.mainCell).length?$("."+e.mainCell).show():$("body").append(this.setHtml()),$("."+e.mainCell).html(this.options.title),e.otherBox||$("."+e.mainCell).css({width:t+"px",height:a+"px","line-height":a+"px","margin-left":-t/2,"margin-top":-a/2}).show()}},o(".tabBox .hd",".tabBox .con");var k=navigator.userAgent,D=(navigator.appVersion,{trident:k.indexOf("Trident")>-1,presto:k.indexOf("Presto")>-1,webKit:k.indexOf("AppleWebKit")>-1,gecko:k.indexOf("Gecko")>-1&&k.indexOf("KHTML")==-1,mobile:!!k.match(/AppleWebKit.*Mobile.*/),ios:!!k.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:k.indexOf("Android")>-1||k.indexOf("Linux")>-1,iPhone:k.indexOf("iPhone")>-1,iPad:k.indexOf("iPad")>-1,webApp:k.indexOf("Safari")==-1,ie:k.indexOf("MSIE")>-1});$.fn.placeholder=function(e){var t="placeholder"in document.createElement("input");if(!t)return this.each(function(){var e=$(this),t=e.attr("placeholder");if("password"==this.type){var a=e.wrap('<div class="placeholder" style="width:'+e.outerWidth(!0)+"px;height:"+e.outerHeight(!0)+'px"></div>').parent(),s=a.append('<div class="note phcolor" style="line-height:'+e.outerHeight(!0)+'px;top: 0px;left:5px; position: absolute;">'+t+"</div>").click(function(){a.find("div.note").hide(),e.focus()}).find("div.note");e.blur(function(){""==e.val()&&s.show()}).focus(function(){a.find("div.note").hide()})}else e.val(t).addClass("phcolor"),e.focus(function(){e.val()==t&&e.val("")}).blur(function(){""==e.val()&&$(this).val(t).addClass("phcolor")}).keydown(function(){$(this).removeClass("phcolor")})})},jQuery.fn.center=function(){return this.css("position","absolute"),this.css("top",($(window).height()-this.height())/2+$(window).scrollTop()+"px"),this.css("left",($(window).width()-this.width())/2+$(window).scrollLeft()+"px"),this},String.prototype.trim=function(){return this.replace(/(^\s*)|(\s*$)/g,"")},s.exports={Popup:i,MsgShow:r,CheckNull:d,browser:D,SendAjax:u,stringJSON:y,AlertTip:m,AddCookie:_,GetCookie:c,DeleteCookie:h,GetLoacalTimeString:p,GetLoacalDateString:f,CheckRadio:g,getLoacalDateAndTime:M,BuildSelect:Y,SetMinHeight:v,ShowComfirmDialog:L,check_tel:l,md5:n}}.call(t,a,t,e),!(void 0!==s&&(e.exports=s))},function(e,t,a){var s,n,i,n,i;!function(r){n=[a(3)],s=r,i="function"==typeof s?s.apply(t,n):s,!(void 0!==i&&(e.exports=i)),n=[a(3)],i=function(){return r(window.jQuery,void 0)}.apply(t,n),!(void 0!==i&&(e.exports=i))}(function(e,t){window.touchSlider=function(a){function s(e){w.removeClass(a.currentClass).eq(e).addClass(a.currentClass)}function n(e,a){var s=h.current;s!==e&&(e=e!==t?e:s+1,T.to(e,{complete:a}))}function i(e){T.to(h.current+1,{dirX:1,complete:e})}function r(e){T.to(h.current-1,{dirX:-1,complete:e})}function o(){H&&d()}function d(){return H=!0,x||(clearTimeout(S),S=setTimeout(function(){T.moving||x||i()},a.delay)),a.container}function l(){return clearTimeout(S),H=!1,a.container}function u(){var t,a,s,n,i,r,o,d,l,u,_,c,h,L=e(document),v=!1,w=function(e){if(!(e.which>1)){if(v&&L.triggerHandler(y+"."+m),v=!0,a=!1,t=e.timeStamp,o=c=0,s=[0,0,0,t],e.originalEvent.touches)return void L.one(f,k);e.preventDefault(),i=r=e.pageX,u=_=e.pageY,l=Y[0].offsetLeft,n=[0,0,0,i],L.bind(M,D),L.one(y+"."+m,S),T.moveStart(e)}},k=function(e){1===e.originalEvent.touches.length&&(i=r=e.pageX=e.originalEvent.touches[0].pageX,u=_=e.pageY=e.originalEvent.touches[0].pageY,d=h=0,l=new WebKitCSSMatrix(window.getComputedStyle(Y[0]).webkitTransform).e,n=[0,0,0,i],L.bind(M,D),L.one(y,S),T.moveStart(e))},D=function(e){var t,i;if(e.originalEvent.touches&&p){if(1!==e.originalEvent.touches.length)return;if(t=e.pageX=e.originalEvent.touches[0].pageX,i=e.pageY=e.originalEvent.touches[0].pageY,d+=Math.abs(t-r),h+=Math.abs(i-_),Math.abs(d-h)>50){var l=d;d=Math.min(100,Math.max(0,d-h)),h=Math.min(100,Math.max(0,h-l))}if(t===r)return;a||(d>h?(e.preventDefault(),a=!0):S(e))}else{if(t=e.pageX,i=e.pageY,t===r)return;/msie/.test(navigator.userAgent.toLowerCase())&&e.preventDefault()}o+=Math.abs(t-r),c+=Math.abs(i-_),s.shift(),s.push(e.timeStamp),n.shift(),n.push(t),T.move(e,r),r=t,_=i},S=function(e){v=!1,e.originalEvent&&!e.originalEvent.touches||(e.pageX=r,e.pageY=_),L.unbind(M,D);for(var a=s.length,i=0,d=0;--a>0;)if(s[a-1]){var l=n[a]-n[a-1];i+=Math.abs(l)/(s[a]-s[a-1]),0!==l&&(d=l>0?-1:1)}i/=s.length,T.moveEnd(e,i,d,t,o,c),b=!1,o+c>4&&g.one("click",function(e){e.preventDefault()})};g.bind(f,w)}a=a||{};var m=a.namespace||"touchslider",_=e(a.container);if(1!==_.length)return void _.each(function(){touchSlider({container:this})});var c=!!navigator.userAgent.match(/AppleWebKit.*Mobile.*/),a=e.extend({autoplay:!1,delay:3e3,margin:5,viewport:"."+m+"-viewport",prev:"."+m+"-prev",next:"."+m+"-next",pagination:"."+m+"-nav-item",currentClass:m+"-nav-item-current",duration:350,heightType:!1,mouseTouch:!0,mobile:c},a),h={current:0,step:n,next:i,prev:r,start:d,stop:l},p="ontouchstart"in window&&"WebKitCSSMatrix"in window,f="touchstart",M="touchmove",y="touchend",g=e(a.viewport,_),L=g.width(),Y=a.scroller?e(a.scroller,_):g.children(),v=Y.children(),w=e(a.pagination,_);if(w.first().addClass("on"),"absolute"!==Y.css("position")){var k=g.children().children().height();a.heightType,g.css({height:k,position:"relative"}),Y.css({position:"absolute",left:0,height:k,width:1e5})}p||(f="mousedown",M="mousemove",y="mouseup"),v.css({position:"absolute",width:L});var D=p?function(e,a,s){return a===t?new WebKitCSSMatrix(getComputedStyle(e.jquery?e[0]:e).webkitTransform).e:void e.css({webkitTransitionDuration:s?s+"ms":"0",webkitTransform:function(e){return"translate3d("+("number"==typeof a?a:a.call(this,e))+"px,0,0)"}})}:function(e,a){return a===t?parseInt((e.jquery?e[0]:e).style.left,10):void e.css("left",a)};p&&v.css({webkitTransitionProperty:"-webkit-transform",webkitTransitionTimingFunction:"cubic-bezier(0,0,0.25,1)"}),D(v.not(v[0]),1e4),D(v.eq(0),0);var T=function(){var n=[0],i=[0],r=e.noop;return{moving:!1,init:function(){Y.bind("webkitTransitionEnd",function(){r()})},to:function(d,l){l=l||{},d>=v.length?d=0:d<0&&(d=v.length-1);var u=a.duration,m=v.eq(d),_=e.inArray(d,n),c=0;if(Y.stop(),T.moving=!0,clearTimeout(S),_!==-1)c=i[_];else{var f,M=v.index(m);if(_=t,l.dirX===-1)i.unshift(0),n.unshift(M);else if(1===l.dirX)i.push(0),n.push(M);else{for(f=n.length-1;f>=0;f--)if(n[f]<M){i.splice(f+1,0,0),n.splice(f+1,0,M),_=0;break}_===t&&(i.unshift(i),n.unshift(M))}if(_=e.inArray(M,n),0===_)c=i[1]-(m.outerWidth()+a.margin),D(m,c),i[_]=c;else if(_===n.length-1)c=i[_-1]+v.eq(n[_-1]).outerWidth()+a.margin,D(m,c),i[_]=c;else{var y=m.outerWidth();m.css("opacity",0),c=i[_+1]-Math.round((y+a.margin)/2),i[_]=c,D(m,c);var g=c,L=n.length;for(f=_-1;f>=0;f--)g-=v.eq(n[f]).outerWidth()+a.margin,i[f]=g;var w=c;for(f=_+1;f<L;f++)w+=v.eq(n[f]).outerWidth()+a.margin,i[f]=w;for(f=0;f<L;f++)v.eq(n[f]).animate({left:i[f]},{duration:u,queue:!1,complete:function(){m.is(this)&&m.animate({opacity:1},u)}})}}l.pxInMs&&(u=Math.min(Math.max(Math.round(Math.abs(D(Y))/l.pxInMs),100),u)),r=function(){D(v.not(m),-1e4),n=[v.index(m)],i=[c],l.complete&&l.complete(),T.moving=!1,o()},p?D(Y,-c,u):Y.animate({left:-c},{duration:u,queue:!1,complete:r}),h.current=d,s(d)},stop:function(){p?D(Y,D(Y)):Y.stop()},moveStart:function(e){T.moving=!0,clearTimeout(S),Y.stop(),T.startPageX=e.pageX;var t,a=D(Y);T.leftCount=a,0===n[0]?i[0]+a>0&&(T.leftCount=a+3*(i[0]+a)):n[n.length-1]===v.length-1&&(t=i[n.length-1]+a,t<0&&(T.leftCount=a+3*t))},move:function(e,t){var s,r,o,d=e.pageX-t,l=D(Y),u=v.eq(n[0]),m=n.length-1,_=v.eq(n[m]);if(T.leftCount+=d,d>0)for(;0!==n[0]&&l+i[0]+d>a.margin;)s=v.eq(n[0]-1),r=i[0]-s.outerWidth()-a.margin,D(s,r),i.unshift(r),n.unshift(n[0]-1),m++,u=s;if((d>0&&l+i[0]+d>0||d<0&&l+i[0]>0)&&0===n[0]&&(o=Math.min(Math.round((T.leftCount+i[0])/4),g.innerWidth()/2),d=o-(l+i[0])),d<0)for(;!_.is(v.last())&&l+i[m]+d+_.outerWidth()+a.margin<g.innerWidth();)s=v.eq(n[m]+1),r=i[m]+_.outerWidth()+a.margin,D(s,r),i.push(r),n.push(n[m++]+1),_=s;(d>0&&l+i[m]<0||d<0&&l+i[m]+d<0)&&_.is(v.last())&&(o=Math.max(Math.round((T.leftCount+i[m])/4),-g.innerWidth()/2),d=o-(l+i[m])),D(Y,l+d)},moveEnd:function(e,t,a,s,r,o){var d,l=n.length,u=D(Y),m=l-1;if(i[0]+u>0)m=0;else if(i[n.length-1]+u<0);else{d={pxInMs:t};var _,c,h=l-1,p=g.innerWidth();for(_=0;_<l-1;_++)if(c=i[_]+v.eq(n[_]).outerWidth()+u,c>0&&c>p-(i[_+1]+u)){h=_;break}if(b)m=h;else{var f=l-1,M=Math.round(Y.offset().left);for(_=0;_<l;_++)if(i[_]+M>e.pageX){f=_-1;break}m=h,h===f&&e.timeStamp-s<1e3&&r+o>.05*Math.sqrt(Math.pow(g.height(),2)+Math.pow(p,2))&&(m=Math.max(0,Math.min(l-1,m+a)))}}m=n[m],T.to(m,d)}}}();if(T.init(),p){var b=!1;Y.bind("webkitTransitionStart",function(){b=!0}),Y.bind("webkitTransitionEnd",function(){b=!1})}var S,x=!1,H=!1;g.hover(function(){clearTimeout(S),x=!0},function(){x=!1,o()}),w.click(function(){n(w.index(this))}),e(a.prev,_).click(function(){r()}),e(a.next,_).click(function(){i()}),a.mouseTouch&&c&&u(),a.autoplay&&d(),_.data(m,h)},e.fn.touchSlider=function(e){return e=e||{},e.container=this,touchSlider(e),this}})},function(e,t){function a(e){return _(s(m(e),e.length*h))}function s(e,t){e[t>>5]|=128<<t%32,e[(t+64>>>9<<4)+14]=t;for(var a=1732584193,s=-271733879,n=-1732584194,u=271733878,m=0;m<e.length;m+=16){var _=a,c=s,h=n,p=u;a=i(a,s,n,u,e[m+0],7,-680876936),u=i(u,a,s,n,e[m+1],12,-389564586),n=i(n,u,a,s,e[m+2],17,606105819),s=i(s,n,u,a,e[m+3],22,-1044525330),a=i(a,s,n,u,e[m+4],7,-176418897),u=i(u,a,s,n,e[m+5],12,1200080426),n=i(n,u,a,s,e[m+6],17,-1473231341),s=i(s,n,u,a,e[m+7],22,-45705983),a=i(a,s,n,u,e[m+8],7,1770035416),u=i(u,a,s,n,e[m+9],12,-1958414417),n=i(n,u,a,s,e[m+10],17,-42063),s=i(s,n,u,a,e[m+11],22,-1990404162),a=i(a,s,n,u,e[m+12],7,1804603682),u=i(u,a,s,n,e[m+13],12,-40341101),n=i(n,u,a,s,e[m+14],17,-1502002290),s=i(s,n,u,a,e[m+15],22,1236535329),a=r(a,s,n,u,e[m+1],5,-165796510),u=r(u,a,s,n,e[m+6],9,-1069501632),n=r(n,u,a,s,e[m+11],14,643717713),s=r(s,n,u,a,e[m+0],20,-373897302),a=r(a,s,n,u,e[m+5],5,-701558691),u=r(u,a,s,n,e[m+10],9,38016083),n=r(n,u,a,s,e[m+15],14,-660478335),s=r(s,n,u,a,e[m+4],20,-405537848),a=r(a,s,n,u,e[m+9],5,568446438),u=r(u,a,s,n,e[m+14],9,-1019803690),n=r(n,u,a,s,e[m+3],14,-187363961),s=r(s,n,u,a,e[m+8],20,1163531501),a=r(a,s,n,u,e[m+13],5,-1444681467),u=r(u,a,s,n,e[m+2],9,-51403784),n=r(n,u,a,s,e[m+7],14,1735328473),s=r(s,n,u,a,e[m+12],20,-1926607734),a=o(a,s,n,u,e[m+5],4,-378558),u=o(u,a,s,n,e[m+8],11,-2022574463),n=o(n,u,a,s,e[m+11],16,1839030562),s=o(s,n,u,a,e[m+14],23,-35309556),a=o(a,s,n,u,e[m+1],4,-1530992060),u=o(u,a,s,n,e[m+4],11,1272893353),n=o(n,u,a,s,e[m+7],16,-155497632),s=o(s,n,u,a,e[m+10],23,-1094730640),a=o(a,s,n,u,e[m+13],4,681279174),u=o(u,a,s,n,e[m+0],11,-358537222),n=o(n,u,a,s,e[m+3],16,-722521979),s=o(s,n,u,a,e[m+6],23,76029189),a=o(a,s,n,u,e[m+9],4,-640364487),u=o(u,a,s,n,e[m+12],11,-421815835),n=o(n,u,a,s,e[m+15],16,530742520),s=o(s,n,u,a,e[m+2],23,-995338651),a=d(a,s,n,u,e[m+0],6,-198630844),u=d(u,a,s,n,e[m+7],10,1126891415),n=d(n,u,a,s,e[m+14],15,-1416354905),s=d(s,n,u,a,e[m+5],21,-57434055),a=d(a,s,n,u,e[m+12],6,1700485571),u=d(u,a,s,n,e[m+3],10,-1894986606),n=d(n,u,a,s,e[m+10],15,-1051523),s=d(s,n,u,a,e[m+1],21,-2054922799),a=d(a,s,n,u,e[m+8],6,1873313359),u=d(u,a,s,n,e[m+15],10,-30611744),n=d(n,u,a,s,e[m+6],15,-1560198380),s=d(s,n,u,a,e[m+13],21,1309151649),a=d(a,s,n,u,e[m+4],6,-145523070),u=d(u,a,s,n,e[m+11],10,-1120210379),n=d(n,u,a,s,e[m+2],15,718787259),s=d(s,n,u,a,e[m+9],21,-343485551),a=l(a,_),s=l(s,c),n=l(n,h),u=l(u,p)}return Array(a,s,n,u)}function n(e,t,a,s,n,i){return l(u(l(l(t,e),l(s,i)),n),a)}function i(e,t,a,s,i,r,o){return n(t&a|~t&s,e,t,i,r,o)}function r(e,t,a,s,i,r,o){return n(t&s|a&~s,e,t,i,r,o)}function o(e,t,a,s,i,r,o){return n(t^a^s,e,t,i,r,o)}function d(e,t,a,s,i,r,o){return n(a^(t|~s),e,t,i,r,o)}function l(e,t){var a=(65535&e)+(65535&t),s=(e>>16)+(t>>16)+(a>>16);return s<<16|65535&a}function u(e,t){return e<<t|e>>>32-t}function m(e){for(var t=Array(),a=(1<<h)-1,s=0;s<e.length*h;s+=h)t[s>>5]|=(e.charCodeAt(s/h)&a)<<s%32;return t}function _(e){for(var t=c?"0123456789ABCDEF":"0123456789abcdef",a="",s=0;s<4*e.length;s++)a+=t.charAt(e[s>>2]>>s%4*8+4&15)+t.charAt(e[s>>2]>>s%4*8&15);return a}var c=0,h=8;t.hex_md5=a},function(e,t,a){var s;s=function(e,t,s){function n(e,t){$.ajax({url:"/dic/list/typeAndLevel",data:{type:"district",level:"2",activeState:"1"},success:function(a){var s=JSON.parse(a),n=s.data;t&&(newArr=n.filter(function(t){return 1==t.isOnline&&t.name==e}),t&&t(newArr))}})}function i(e,t){var e=e||"";o.SendAjax({url:"/dic/list/typeAndLevel",param:{type:"district",level:"2",activeState:"1"},method:"GET",tipText:"获取城市",callback:function(a){for(var s=a.data,n="",i=$("#choosed-city-id").val(),o=0;o<s.length;o++){var d=s[o],l=1===parseInt(s[o].isOnline)?" ":" offline ",u=s[o].id==i?" on ":" ";n+='<a href="javascript:;" data-city="" class="city '+u+" "+l+'">'+d.name+"</a>"}$(".city-list").html(n);for(var m=$(".city-list .city"),o=0;o<m.length;o++){var d=m.eq(o);d.data("city",s[o]),d.hasClass("offline")||d.on("click",function(){r($(this))})}t&&(newArr=s.filter(function(t){return 1==t.isOnline&&t.name==e}),t&&t(newArr))},errorFun:function(e){}})}function r(e){var t=e.hasClass&&e.hasClass("city")&&e.data("city")||e;o.SendAjax({url:"/changeCity",param:{city:t},method:"GET",tipText:"切换城市",callback:function(e){window.location.reload()},errorFun:function(e){}})}a(3),a(8),a(9);var o=a(4),d=a(13);a(12),$(function(){function e(){function e(e){return i=e.name,t.setCenter(i),$.cookie("locals_city")||n(i,function(e){var t=$.cookie("locals_city");!t&&e.length&&o.SendAjax({url:"/changeCity",param:{city:e[0]},method:"GET",tipText:"切换城市",callback:function(t){$(".city-name em").html(i),$("#choosed-city-id").val(e[0].id)},errorFun:function(e){}}),e.length&&$.cookie("locals_city",e[0].parentId,{path:"/"})}),i}var t=new BMap.Map("choosed-city-id"),a=new BMap.Point(116.331398,39.897445);t.centerAndZoom(a,12);var s=new BMap.LocalCity,i=s.get(e)}var t=$("body");$.cookie("locals_city")||o.browser.ie?o.browser.ie:e();var a=window.location,s=a.pathname,r=$(".nav li a"),l="";o.BuildSelect($(".select-box")),$.each(r,function(e,t){l=$(t).attr("href"),s.search(l)!=-1&&$(t).parent().addClass("on").siblings().removeClass("on"),"/treat/regsource/list"==l&&"/treat/reg/doctorView"==s&&$(t).parent().addClass("on").siblings().removeClass("on")}),$(".city-name").hover(function(e){var t=$(this),a=t.find(".choose-city");a.stop(!1,!0).slideDown();var s=a.data("load");"first"===s&&(i(),a.data("load","non-first"))},function(e){e.stopPropagation();var t=$(this),a=t.find(".choose-city");a.stop(!1,!0).slideUp()}),$("section img").lazyload({effect:"fadeIn"});var u=$(window).height();$gotoTop=$(".gotoTop"),$gotoTop.click(function(){$("body,html").animate({scrollTop:0},600)}),$(window).scroll(function(){var e=$(window).scrollTop();e>u/2?$gotoTop.show():$gotoTop.fadeOut(700)});var m=$(window).width(),_=$(".nav").find(".wrapper");if(o.browser.mobile){var c=0;if(sessionStorage.getItem("index")&&(c=sessionStorage.getItem("index")),m<768){new d(".swiper-container",{nextButton:".swiper-button-next",prevButton:".swiper-button-prev",initialSlide:c,slidesPerView:4})}else _.removeClass().addClass("wrapper"),_.find("li").removeAttr("style");$(window).resize(function(){if(m=$(window).width(),m<768){new d(".swiper-container",{nextButton:".swiper-button-next",prevButton:".swiper-button-prev",initialSlide:c,slidesPerView:4})}else _.removeClass().addClass("wrapper"),_.find(".swiper-slide").removeAttr("style")}),t.on("click",".logo",function(){sessionStorage.getItem("index")&&sessionStorage.setItem("index",0)}),t.on("click",".nav ul li",function(){var e=$(this).index();sessionStorage.setItem("index",e)})}});var l=$(".nav_toggle"),u=$(".left-nav");l.click(function(){u.slideToggle(),$(this).parents("aside").toggleClass("active")});var m=$(".topBar_info aside");if($(".wapUser").click(function(){var e=$.cookie("accountId");e?m.slideToggle():window.location.href="/login"}),o.browser.ie){var _=$(window).width();$(".item_list .wrapper").width();_<=1366&&$(".rightNav").css({"margin-right":"-670px"})}if(o.browser.ios){var c=$(".footerWap");$("input,button").focus(function(){var e=this,t=$(window).height()-c.height(),a=$(document).height()-c.height();a=a>t?a:t,setTimeout(function(){var s=$(window).scrollTop(),n=$(e).offset().top-s,i=$(e).offset().top+n;i=i>a?a:i,c.css({display:"none"}),$(window).bind("scroll",function(){if(n!=t){var e=$(this).scrollTop()-s;afterScrollTopPos=t+e}})},100)}).blur(function(){$(".div-input").removeAttr("style"),c.css({display:"block"})})}!function(){var e=document.createElement("script");e.src="//hm.baidu.com/hm.js?69e663a638b780bb691f5753d29f2cec";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}();!function(){var e=document.createElement("script");e.src="//hm.baidu.com/hm.js?4f75a7ce9238ce942af56eece56e108a";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}()}.call(t,a,t,e),!(void 0!==s&&(e.exports=s))},function(e,t,a){var s,n,i,n,i;!function(r){n=[a(3)],s=r,i="function"==typeof s?s.apply(t,n):s,!(void 0!==i&&(e.exports=i)),n=[a(3)],i=function(){return r(window.jQuery,window,document,void 0)}.apply(t,n),!(void 0!==i&&(e.exports=i))}(function(e,t,a,s){var n=e(t);e.fn.lazyload=function(i){function r(){var t=0;d.each(function(){var a=e(this);if(!l.skip_invisible||a.is(":visible"))if(e.abovethetop(this,l)||e.leftofbegin(this,l));else if(e.belowthefold(this,l)||e.rightoffold(this,l)){if(++t>l.failure_limit)return!1}else a.trigger("appear"),t=0})}var o,d=this,l={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:t,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return i&&(s!==i.failurelimit&&(i.failure_limit=i.failurelimit,delete i.failurelimit),s!==i.effectspeed&&(i.effect_speed=i.effectspeed,delete i.effectspeed),e.extend(l,i)),o=l.container===s||l.container===t?n:e(l.container),0===l.event.indexOf("scroll")&&o.bind(l.event,function(){return r()}),this.each(function(){var t=this,a=e(t);t.loaded=!1,a.attr("src")!==s&&a.attr("src")!==!1||a.is("img")&&a.attr("src",l.placeholder),a.one("appear",function(){if(!this.loaded){if(l.appear){var s=d.length;l.appear.call(t,s,l)}e("<img />").bind("load",function(){var s=a.attr("data-"+l.data_attribute);a.hide(),a.is("img")?a.attr("src",s):a.css("background-image","url('"+s+"')"),a[l.effect](l.effect_speed),t.loaded=!0;var n=e.grep(d,function(e){return!e.loaded});if(d=e(n),l.load){var i=d.length;l.load.call(t,i,l)}}).attr("src",a.attr("data-"+l.data_attribute))}}),0!==l.event.indexOf("scroll")&&a.bind(l.event,function(){t.loaded||a.trigger("appear")})}),n.bind("resize",function(){r()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&n.bind("pageshow",function(t){t.originalEvent&&t.originalEvent.persisted&&d.each(function(){e(this).trigger("appear")})}),e(a).ready(function(){r()}),this},e.belowthefold=function(a,i){var r;return r=i.container===s||i.container===t?(t.innerHeight?t.innerHeight:n.height())+n.scrollTop():e(i.container).offset().top+e(i.container).height(),r<=e(a).offset().top-i.threshold},e.rightoffold=function(a,i){var r;return r=i.container===s||i.container===t?n.width()+n.scrollLeft():e(i.container).offset().left+e(i.container).width(),r<=e(a).offset().left-i.threshold},e.abovethetop=function(a,i){var r;return r=i.container===s||i.container===t?n.scrollTop():e(i.container).offset().top,r>=e(a).offset().top+i.threshold+e(a).height()},e.leftofbegin=function(a,i){var r;return r=i.container===s||i.container===t?n.scrollLeft():e(i.container).offset().left,r>=e(a).offset().left+i.threshold+e(a).width()},e.inviewport=function(t,a){return!(e.rightoffold(t,a)||e.leftofbegin(t,a)||e.belowthefold(t,a)||e.abovethetop(t,a))},e.extend(e.expr[":"],{"below-the-fold":function(t){return e.belowthefold(t,{threshold:0})},"above-the-top":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-screen":function(t){return e.rightoffold(t,{threshold:0})},"left-of-screen":function(t){return!e.rightoffold(t,{threshold:0})},"in-viewport":function(t){return e.inviewport(t,{threshold:0})},"above-the-fold":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-fold":function(t){return e.rightoffold(t,{threshold:0})},"left-of-fold":function(t){return!e.rightoffold(t,{threshold:0})}})})},function(e,t,a){var s;s=function(e,t,s){function n(){var e=$(".loginBox,.loginBox2,.registerBox,.rPasswordBox");return e}function i(e){var t=new w.Popup({msg:'<div class="slideLogin"><div class="tit"><span class="on">密码登录</span><span>验证码登录</span></div><div class="touchslider-viewport"><div class="bd"> <ul><li><input type="text" class="username" placeholder="请输入手机号码" value=""></li><li><input type="password" class="password" placeholder="请输入密码" value=""><span class="prompt"><i class="icon"></i><em>手机输入格式有误/验证码有误</em></span></li></ul><ul style="float: left"><li><input type="text" class="username" placeholder="请输入手机号码"></li><li><input type="text" class="password" placeholder="请输入短信验证码"><button class="getCode">获取短信验证码</button><span class="prompt"><i class="icon"></i><em>手机输入格式有误/验证码有误</em></span></li></ul></div></div></div>',otherMsg:'手机号码用来获取预约码和报告服务码<div class="operate"><a href="javascript:;" title="立即注册" class="registerBtn">立即注册</a><i>/</i> <a href="javascript:;" title="忘记密码" class="rPasswordBtn">忘记密码</a></div>',bOhterMsg:!0,callback:function(){$(".slideLogin").touchSlider({container:this,duration:350,delay:3e3,margin:5,mouseTouch:!0,namespace:"touchslider",next:".touchslider-next",pagination:".tit span",currentClass:"on",prev:".touchslider-prev",complete:function(){},autoplay:!1,viewport:".touchslider-viewport"}),$("input[placeholder]").placeholder()},okText:"登录",otherBox:"loginPopupCom loginBox",isHide:!1,okCallback:function(){var a=m();a&&(e&&e.afterLoginFun?h(a,t,"",e.afterLoginFun):h(a,t,"",null))}})}function r(e){new w.Popup({msg:'<div class="tit"><span class="on">新用户注册</span></div><div class="bd"> <ul><li><input type="text" class="username" placeholder="请输入手机号码" value=""></li><li><input type="text" class="verCode" placeholder="请输入短信验证码"><button class="getCode">获取短信验证码</button></li><li><input type="password" class="password" placeholder="请输入密码" value=""><span class="prompt"><i class="icon"></i><em></em></span></li><p><span class="checkbox checked"></span> 我已阅读并同意<a href="/userAgreement" target="_blank">《都安全用户协议》</a></p></ul></div>',otherMsg:"手机号码用来获取预约码和报告服务码",bOhterMsg:!0,callback:function(){$("input[placeholder]").placeholder()},okText:"注册",
otherBox:"loginPopupCom registerBox",isHide:!1,okCallback:function(){}})}function o(e){new w.Popup({msg:'<div class="tit"><span class="on">重置密码</span></div><div class="bd"> <ul><li><input type="text" class="username" placeholder="请输入手机号码" value=""></li><li><input type="text" class="verCode" placeholder="请输入短信验证码"><button class="getCode">获取短信验证码</button></li><li><input type="password" class="password" placeholder="请输入密码" value=""><span class="prompt"><i class="icon"></i><em></em></span></li></div>',otherMsg:"手机号码用来获取预约码和报告服务码",bOhterMsg:!0,okText:"确定",otherBox:"loginPopupCom rPasswordBox",isHide:!1,callback:function(){$("input[placeholder]").placeholder()},okCallback:function(){m()}})}function d(e){$.ajax({type:"post",url:"/register",data:e.data,dataType:"json",beforeSend:function(){$(this).html("正在提交注册……")},success:function(t){e.callback&&e.callback(t,e.type)}})}function l(e){$.ajax({type:"put",url:"/rPassword",data:e.data,dataType:"json",success:function(t){e.callback&&e.callback(t,e.type)}})}function u(e){$loginWrap=n(),S=$loginWrap.find(".tit span.on").index()||0,x=$loginWrap.find("ul").eq(S).find(".prompt");var t={password:$loginWrap.find("ul").eq(S).find(".password").val(),account:$loginWrap.find("ul").eq(S).find(".username").val(),verCode:$loginWrap.find(".verCode").val(),loginType:1};return t}function m(e){var t=u(),a={},s=/^[0-9a-zA-Z]{6,16}$/;if(0==S){if(a.loginType=1,!t.account)return void x.show().find("em").html("手机号码不能为空");if(t.account&&!w.check_tel(t.account))return void x.show().find("em").html("手机号码不正确");if(e){if(!t.verCode)return void x.show().find("em").html("短信验证码不能为空");a.verCode=t.verCode}if(!t.password)return void x.show().find("em").html("密码不能为空");if(!s.test(t.password))return void x.show().find("em").html("密码为6-16位的数字,字母");a.password=w.md5(t.password)}if(1==S){if(a.loginType=2,!t.account)return void x.show().find("em").html("手机号码不能为空");if(t.account&&!w.check_tel(t.account))return void x.show().find("em").html("手机号码不正确");if(!t.password)return void x.show().find("em").html("验证码不能为空");a.verCode=t.password}return a.account=t.account,a}function _(e){var t=u(),a=e.time||"60",s=e.$self,n={mobile:t.account,domain:e.domain};$.ajax({type:"post",url:"/getVerCode",data:n,dataType:"json",beforeSend:function(){s.html("正在获取验证码……")},success:function(e){e.success?c(s,a):(x.show().find("em").html(e.msg),s.html("重新获取"))}})}function c(e,t){e.addClass("disable").attr("disabled",!0);var a=setInterval(function(){t--,e.html(t+"秒后可重新获取"),0==t&&(clearInterval(a),e.html("重新获取"),validCode=!0,e.removeClass("disable").attr("disabled",!1))},1e3)}function h(e,t,a,s){var n=$(".loginBox,.loginBox2"),i=n.find(".tit span.on").index();x=n.find("ul").eq(i).find(".prompt"),$.ajax({type:"post",url:"/login",data:e,dataType:"json",success:function(e){if(e.success){L();var n=new w.MsgShow({delayTime:2e3,title:'<i class="icon"></i>登录成功!',otherBox:"successBox"}),i=e.data.userAllInfo;t?t.hideBox(function(){D.html(b),s&&s(i)}):a&&s&&s(i),n.hideMsg(1e3)}else{var r=e.code;300==r?x.show().find("em").html("登录失败:服务器异常"):x.show().find("em").html(e.msg)}}})}function p(){w.SendAjax({url:"/logout",param:{},method:"POST",tipText:"退出登录",callback:function(e){if(e.success){P.html("0");for(var t=0,a=H.length;t<a;t++)k.search(H[t])!=-1?window.location.href="/":D.html(T)}}})}function f(e){w.SendAjax({url:"/hasBindHis",param:{accountId:e.accountId,send:!0},method:"POST",tipText:"检查是否完善信息",callback:function(t){e.callback&&e.callback(t)}})}function M(e){w.SendAjax({url:"/checkLogin",param:{},method:"GET",tipText:"检查是否登录",callback:function(t){return t.login?void(e&&e()):(w.browser.mobile?window.location.href="/login":i({afterLoginFun:e}),!1)}})}function y(e){var t=new w.Popup({msg:'<div class="box-header">完善信息<i class="icon close closePopup"></i></div><div class="box-body"><ul class="tip-box"><li>为了能正常使用预约挂号服务,请及时补充以下材料。</li><li>以下信息为预约时所需项,一经填写不可更改,提交前请检查核对。</li><li>绑定已有客户编号,您可在病例中心中查看历史报告。</li></ul><form name="accInfoForm"><ul class="info-box"><li><label><i class="text-stress">* </i>姓名</label><input name="name"/></li><li><label><i class="text-stress">* </i>性别</label><div id="gender" class="select-box none"><div class="selected"><span class="text"><span class="text-sec">请选择</span></span><i class="icon pull-down"></i></div><ul class="options"><li class="option" data-value="1">男</li><li class="option" data-value="2">女</li></ul></div></li><li><label><i class="text-stress">* </i>出生年月</label><input id="birthday" name="birthday" readonly/></li><li><label><p>绑定已有</p><p>客户编码</p></label><input name="patientCode" placeholder="请输入已有客户编码"/></li><span class="prompt"><i class="icon"></i><em>客户编码有误</em></span></ul></form></div>',otherMsg:"confirm-btn",popupBox:"popupBox",okText:"提交",close:"closePopup",otherBox:"complete-dialog",isHide:!1,completeFun:function(){$("body").on("click",".tip-box",function(){})},closeFun:function(){var t=document.referrer;t=t?"/searchs/report"==k?"/":t:"/",e&&e.back&&e.back&&(window.location.href=t)},okCallback:function(){g(t,e)}})}function g(e,t){function a(){var n=$(".complete-dialog span.ok");n.addClass("disabled").off("click");var i=$("form[name=accInfoForm]").serialize()+"&gender="+o;$.ajax({url:"/users/account/complete",type:"POST",data:i,dataType:"json",success:function(i){if(i.success){var r=new w.MsgShow({delayTime:2e3,title:'<i class="icon"></i>完善成功!',otherBox:"successBox"});e.hideBox(),r.hideMsg(1e3),t.reload&&window.location.reload()}else"1001"===i.serverCode?new w.Popup({msg:'<aside>该客户编号不存在,您可取消重新输入!<div class="text-stress">或继续保存拥有新的客户编号</div></aside>',otherMsg:"confirm-btn",isMore:!0,okOther:"noneOkBtn",isCancelBtn:!0,otherBox:"complete-reOk",okText:"继续保存",cancelFun:function(){},okCallback:function(){s.find("[name=patientCode]").val(""),a()}}):(s.find(".prompt em").html(i.msg),s.find(".prompt").show()),n.removeClass("disabled").on("click",function(){return g(e),!1})},error:function(t){"404"==t.status?s.find(".prompt em").html("页面丢失，请稍后再试"):"500"==t.status?s.find(".prompt em").html("系统忙，请稍后再试"):s.find(".prompt em").html("网络错误"),s.find(".prompt").show(),n.removeClass("disabled").on("click",function(){return g(e),!1})}})}var s=$(".complete-dialog"),n=s.find("[name=name]").val().trim(),i=s.find("[name=birthday]").val().trim(),r=s.find("[name=patientCode]").val().trim(),o=s.find("#gender .option.active").attr("data-value");if(!(n&&i&&o))return s.find(".prompt em").html("必输项不能为空"),s.find(".prompt").show(),!1;if(r)a();else{new w.Popup({msg:'<aside>如果你已有客户编号，请绑定已有的客户编号，未绑定将不能查看以前的就诊报告。<div class="text-stress">您也可继续添加拥有新的客户编号</div></aside>',otherMsg:"confirm-btn",isMore:!0,isCancelBtn:!0,okOther:"blankOkBtn",otherBox:"complete-reOk",okText:"继续保存",cancelFun:function(){},okCallback:function(){a()}})}}function L(e){w.SendAjax({url:"/trade/cart/GetCartCount",param:{},method:"GET",tipText:"获取购物车数量",callback:function(t){if(t.success){var a=t.data||"0";P.html(a),$.cookie("cartNum",a,{path:"/"}),e&&e()}}})}function Y(){var e=parseInt(P.text())+1;$.cookie("cartNum",e,{path:"/"}),P.text(e)}function v(){var e=parseInt(P.text())-1;$.cookie("cartNum",e,{path:"/"}),P.text(e)}var w=a(4);a(10),a(11),a(12);var k=window.location.pathname;$("body");(w.mobile||"/login"!=k&&"/register"!=k&&"/rPassword"!=k)&&!$(".loginBox2").length||($(".topBar").css({height:0,overflow:"hidden"}),$(".header").css({margin:0}));var D=$(".topBar_info aside"),T='<a href="javascript:;" class="loginBtn">登录</a>',b='<a href="/trade/order/list" class="logout">个人中心</a><i class="icon devidel"></i><a href="javascript:;" class="logoutBtn">退出</a>',S="",x="";$("body").on("click",".getCode",function(){$loginWrap=n();var e=u(),t=$(this);if(!e.account)return void x.show().find("em").html("手机号码不能为空");if(e.account&&!w.check_tel(e.account))return void x.show().find("em").html("手机号码不正确");var a="DAQ-WEB-LOGIN",s=t.parents(".loginCom,.loginPopupCom");s.hasClass("registerBox")?a="DAQ-REG":s.hasClass("loginBox2")?a="DAQ-WEB-LOGIN":s.hasClass("rPasswordBox")&&(a="DAQ-FINDPWD"),e&&e.account&&_({$self:t,time:60,domain:a})}),$("body").on("click",".loginBox .tit span,.loginBox2 .tit span",function(){var e=n();e.find(".tit span.on").index()}),$("body").on("click","ul p",function(){var e=n(),t=e.find(".submitBox .ok"),a=($(this),e.find(".tit span.on").index()),s=e.find("ul").eq(a).find(".checkbox");s.toggleClass("checked"),s.hasClass("checked")?t.removeClass("disabled").attr("disabled",!1):t.addClass("disabled").attr("disabled",!0)}),$("body").on("click",".loginBtn",function(){i({afterLoginFun:function(e){f({accountId:e.accountCommon.id,callback:function(e){e.success&&(e.data||(y(),w.BuildSelect($("#gender")),$("#birthday").daterangepicker({singleDatePicker:!0,showDropdowns:!0,autoUpdateInput:!1,locale:{format:"YYYY-MM-DD",daysOfWeek:["日","一","二","三","四","五","六"],monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]}},function(e,t,a){$("#birthday").val(e.format("YYYY-MM-DD"))})))}})}})}),$("body").on("click",".logoutBtn",function(){p()}),$("body").on("click",".registerBtn",function(){r()}),$("body").on("click",".rPasswordBtn",function(){o()}),$("body").on("click keyup keydown change",".username,.password,.verCode",function(){var e=n(),t=e.find(".tit span.on").index();e.find("ul").eq(t).find(".prompt").hide()}),$(".loginBox2").length&&($("input[placeholder]").placeholder(),$(".loginBox2").touchSlider({container:this,duration:350,delay:3e3,margin:5,mouseTouch:!0,namespace:"touchslider",next:".touchslider-next",pagination:".tit span",currentClass:"on",prev:".touchslider-prev",autoplay:!1,viewport:".touchslider-viewport"})),$("body").on("click",".loginBox2 .ok",function(){var e=window.location.origin,t=m(),a=document.referrer;a=a?a==e+"/register"||a==e+"/rPassword"?"/":a:"/";var s=$("#redirectUrl").val()||a;t&&h(t,null,s,function(e){f({accountId:e.accountCommon.id,callback:function(e){e.success&&(e.data?window.location.href=s:window.location.href="/users/account/info")}})})}),$("body").on("click",".registerBox .ok",function(){var e=m(!0),t=$(this);e&&d({data:e,callback:function(e){var a=t.parents(".registerBox");a.hasClass("loginCom")?(console.log("页面级注册:",e),e.success?w.ShowComfirmDialog({tipText:e.msg+"<p>即将跳转登录……</p>",noConfirmBtn:!0,callback:function(){setTimeout(function(){window.location.href="/login"},2e3)}}):"账号已经注册"==e.msg&&"1003"==e.code?setTimeout(function(){window.location.href="/login"},2e3):x.show().find("em").html(e.msg)):(console.log("弹窗级注册"),e.success?w.ShowComfirmDialog({tipText:e.msg,noConfirmBtn:!0,callback:function(){setTimeout(function(){i()},2e3)}}):$(".prompt").show().find("em").html(e.msg))}})}),$("body").on("click",".rPasswordBox .ok",function(){var e=m(!0),t=$(this);e&&l({data:e,callback:function(e){var a=t.parents(".rPasswordBox");e.success?w.ShowComfirmDialog({tipText:"密码找回成功<p>即将跳转登录……</p>",noConfirmBtn:!0,callback:function(){setTimeout(function(){a.hasClass("loginCom")?window.location.href="/login":i()},2e3)}}):x.show().find("em").html(e.msg)}})}),$("input[placeholder]").placeholder();var H=["/trade/order","/trade/cart/list","/treats/reg/","/users/"],P=$(".cartNum");s.exports={showLogin:i,CheckLogin:M,getCartCount:L,cartCoutAddOne:Y,cartCoutDelOne:v,showAccountDialog:y}}.call(t,a,t,e),!(void 0!==s&&(e.exports=s))},function(e,t){!function(a,s){"object"==typeof t&&"undefined"!=typeof e?e.exports=s():"function"==typeof define&&define.amd?define(s):a.moment=s()}(this,function(){"use strict";function t(){return mn.apply(null,arguments)}function a(e){mn=e}function s(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function n(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function i(e){var t;for(t in e)return!1;return!0}function r(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function o(e,t){var a,s=[];for(a=0;a<e.length;++a)s.push(t(e[a],a));return s}function d(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function l(e,t){for(var a in t)d(t,a)&&(e[a]=t[a]);return d(t,"toString")&&(e.toString=t.toString),d(t,"valueOf")&&(e.valueOf=t.valueOf),e}function u(e,t,a,s){return Mt(e,t,a,s,!0).utc()}function m(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function _(e){return null==e._pf&&(e._pf=m()),e._pf}function c(e){if(null==e._isValid){var t=_(e),a=_n.call(t.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&a);if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function h(e){var t=u(NaN);return null!=e?l(_(t),e):_(t).userInvalidated=!0,t}function p(e){return void 0===e}function f(e,t){var a,s,n;if(p(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),p(t._i)||(e._i=t._i),p(t._f)||(e._f=t._f),p(t._l)||(e._l=t._l),p(t._strict)||(e._strict=t._strict),p(t._tzm)||(e._tzm=t._tzm),p(t._isUTC)||(e._isUTC=t._isUTC),p(t._offset)||(e._offset=t._offset),p(t._pf)||(e._pf=_(t)),p(t._locale)||(e._locale=t._locale),cn.length>0)for(a in cn)s=cn[a],n=t[s],p(n)||(e[s]=n);return e}function M(e){f(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),hn===!1&&(hn=!0,t.updateOffset(this),hn=!1)}function y(e){return e instanceof M||null!=e&&null!=e._isAMomentObject}function g(e){return 0>e?Math.ceil(e)||0:Math.floor(e)}function L(e){var t=+e,a=0;return 0!==t&&isFinite(t)&&(a=g(t)),a}function Y(e,t,a){var s,n=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),r=0;for(s=0;n>s;s++)(a&&e[s]!==t[s]||!a&&L(e[s])!==L(t[s]))&&r++;return r+i}function v(e){t.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function w(e,a){var s=!0;return l(function(){if(null!=t.deprecationHandler&&t.deprecationHandler(null,e),s){for(var n,i=[],r=0;r<arguments.length;r++){if(n="","object"==typeof arguments[r]){n+="\n["+r+"] ";for(var o in arguments[0])n+=o+": "+arguments[0][o]+", ";n=n.slice(0,-2)}else n=arguments[r];i.push(n)}v(e+"\nArguments: "+Array.prototype.slice.call(i).join("")+"\n"+(new Error).stack),s=!1}return a.apply(this,arguments)},a)}function k(e,a){null!=t.deprecationHandler&&t.deprecationHandler(e,a),pn[e]||(v(a),pn[e]=!0)}function D(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function T(e){var t,a;for(a in e)t=e[a],D(t)?this[a]=t:this["_"+a]=t;this._config=e,this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function b(e,t){var a,s=l({},e);for(a in t)d(t,a)&&(n(e[a])&&n(t[a])?(s[a]={},l(s[a],e[a]),l(s[a],t[a])):null!=t[a]?s[a]=t[a]:delete s[a]);for(a in e)d(e,a)&&!d(t,a)&&n(e[a])&&(s[a]=l({},s[a]));return s}function S(e){null!=e&&this.set(e)}function x(e,t,a){var s=this._calendar[e]||this._calendar.sameElse;return D(s)?s.call(t,a):s}function H(e){var t=this._longDateFormat[e],a=this._longDateFormat[e.toUpperCase()];return t||!a?t:(this._longDateFormat[e]=a.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])}function P(){return this._invalidDate}function C(e){return this._ordinal.replace("%d",e)}function j(e,t,a,s){var n=this._relativeTime[a];return D(n)?n(e,t,a,s):n.replace(/%d/i,e)}function A(e,t){var a=this._relativeTime[e>0?"future":"past"];return D(a)?a(t):a.replace(/%s/i,t)}function E(e,t){var a=e.toLowerCase();kn[a]=kn[a+"s"]=kn[t]=e}function W(e){return"string"==typeof e?kn[e]||kn[e.toLowerCase()]:void 0}function z(e){var t,a,s={};for(a in e)d(e,a)&&(t=W(a),t&&(s[t]=e[a]));return s}function I(e,t){Dn[e]=t}function B(e){var t=[];for(var a in e)t.push({unit:a,priority:Dn[a]});return t.sort(function(e,t){return e.priority-t.priority}),t}function O(e,a){return function(s){return null!=s?($(this,e,s),t.updateOffset(this,a),this):F(this,e)}}function F(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function $(e,t,a){e.isValid()&&e._d["set"+(e._isUTC?"UTC":"")+t](a)}function G(e){return e=W(e),D(this[e])?this[e]():this}function R(e,t){if("object"==typeof e){e=z(e);for(var a=B(e),s=0;s<a.length;s++)this[a[s].unit](e[a[s].unit])}else if(e=W(e),D(this[e]))return this[e](t);return this}function N(e,t,a){var s=""+Math.abs(e),n=t-s.length,i=e>=0;return(i?a?"+":"":"-")+Math.pow(10,Math.max(0,n)).toString().substr(1)+s}function J(e,t,a,s){var n=s;"string"==typeof s&&(n=function(){return this[s]()}),e&&(xn[e]=n),t&&(xn[t[0]]=function(){return N(n.apply(this,arguments),t[1],t[2])}),a&&(xn[a]=function(){return this.localeData().ordinal(n.apply(this,arguments),e)})}function V(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function U(e){var t,a,s=e.match(Tn);for(t=0,a=s.length;a>t;t++)xn[s[t]]?s[t]=xn[s[t]]:s[t]=V(s[t]);return function(t){var n,i="";for(n=0;a>n;n++)i+=s[n]instanceof Function?s[n].call(t,e):s[n];return i}}function q(e,t){return e.isValid()?(t=X(t,e.localeData()),Sn[t]=Sn[t]||U(t),Sn[t](e)):e.localeData().invalidDate()}function X(e,t){function a(e){return t.longDateFormat(e)||e}var s=5;for(bn.lastIndex=0;s>=0&&bn.test(e);)e=e.replace(bn,a),bn.lastIndex=0,s-=1;return e}function K(e,t,a){Vn[e]=D(t)?t:function(e,s){return e&&a?a:t}}function Z(e,t){return d(Vn,e)?Vn[e](t._strict,t._locale):new RegExp(Q(e))}function Q(e){return ee(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,a,s,n){return t||a||s||n}))}function ee(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function te(e,t){var a,s=t;for("string"==typeof e&&(e=[e]),"number"==typeof t&&(s=function(e,a){a[t]=L(e)}),a=0;a<e.length;a++)Un[e[a]]=s}function ae(e,t){te(e,function(e,a,s,n){s._w=s._w||{},t(e,s._w,s,n)})}function se(e,t,a){null!=t&&d(Un,e)&&Un[e](t,a._a,a,e)}function ne(e,t){return new Date(Date.UTC(e,t+1,0)).getUTCDate()}function ie(e,t){return e?s(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||ni).test(t)?"format":"standalone"][e.month()]:this._months}function re(e,t){return e?s(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[ni.test(t)?"format":"standalone"][e.month()]:this._monthsShort}function oe(e,t,a){var s,n,i,r=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;12>s;++s)i=u([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(i,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(i,"").toLocaleLowerCase();return a?"MMM"===t?(n=Mn.call(this._shortMonthsParse,r),-1!==n?n:null):(n=Mn.call(this._longMonthsParse,r),-1!==n?n:null):"MMM"===t?(n=Mn.call(this._shortMonthsParse,r),-1!==n?n:(n=Mn.call(this._longMonthsParse,r),-1!==n?n:null)):(n=Mn.call(this._longMonthsParse,r),-1!==n?n:(n=Mn.call(this._shortMonthsParse,r),-1!==n?n:null))}function de(e,t,a){var s,n,i;if(this._monthsParseExact)return oe.call(this,e,t,a);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;12>s;s++){if(n=u([2e3,s]),a&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(n,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(n,"").replace(".","")+"$","i")),a||this._monthsParse[s]||(i="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[s]=new RegExp(i.replace(".",""),"i")),a&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(a&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!a&&this._monthsParse[s].test(e))return s}}function le(e,t){var a;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=L(t);else if(t=e.localeData().monthsParse(t),"number"!=typeof t)return e;return a=Math.min(e.date(),ne(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,a),e}function ue(e){return null!=e?(le(this,e),t.updateOffset(this,!0),this):F(this,"Month")}function me(){return ne(this.year(),this.month())}function _e(e){return this._monthsParseExact?(d(this,"_monthsRegex")||he.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(d(this,"_monthsShortRegex")||(this._monthsShortRegex=oi),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function ce(e){return this._monthsParseExact?(d(this,"_monthsRegex")||he.call(this),e?this._monthsStrictRegex:this._monthsRegex):(d(this,"_monthsRegex")||(this._monthsRegex=di),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function he(){function e(e,t){return t.length-e.length}var t,a,s=[],n=[],i=[];for(t=0;12>t;t++)a=u([2e3,t]),s.push(this.monthsShort(a,"")),n.push(this.months(a,"")),i.push(this.months(a,"")),i.push(this.monthsShort(a,""));for(s.sort(e),n.sort(e),i.sort(e),t=0;12>t;t++)s[t]=ee(s[t]),n[t]=ee(n[t]);for(t=0;24>t;t++)i[t]=ee(i[t]);this._monthsRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function pe(e){return fe(e)?366:365}function fe(e){return e%4===0&&e%100!==0||e%400===0}function Me(){return fe(this.year())}function ye(e,t,a,s,n,i,r){var o=new Date(e,t,a,s,n,i,r);return 100>e&&e>=0&&isFinite(o.getFullYear())&&o.setFullYear(e),o}function ge(e){var t=new Date(Date.UTC.apply(null,arguments));return 100>e&&e>=0&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}function Le(e,t,a){var s=7+t-a,n=(7+ge(e,0,s).getUTCDay()-t)%7;return-n+s-1}function Ye(e,t,a,s,n){var i,r,o=(7+a-s)%7,d=Le(e,s,n),l=1+7*(t-1)+o+d;return 0>=l?(i=e-1,r=pe(i)+l):l>pe(e)?(i=e+1,r=l-pe(e)):(i=e,r=l),{year:i,dayOfYear:r}}function ve(e,t,a){var s,n,i=Le(e.year(),t,a),r=Math.floor((e.dayOfYear()-i-1)/7)+1;return 1>r?(n=e.year()-1,s=r+we(n,t,a)):r>we(e.year(),t,a)?(s=r-we(e.year(),t,a),n=e.year()+1):(n=e.year(),s=r),{week:s,year:n}}function we(e,t,a){var s=Le(e,t,a),n=Le(e+1,t,a);return(pe(e)-s+n)/7}function ke(e){return ve(e,this._week.dow,this._week.doy).week}function De(){return this._week.dow}function Te(){return this._week.doy}function be(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")}function Se(e){var t=ve(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")}function xe(e,t){return"string"!=typeof e?e:isNaN(e)?(e=t.weekdaysParse(e),"number"==typeof e?e:null):parseInt(e,10)}function He(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Pe(e,t){return e?s(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:this._weekdays}function Ce(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort}function je(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Ae(e,t,a){var s,n,i,r=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;7>s;++s)i=u([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(i,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(i,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(i,"").toLocaleLowerCase();return a?"dddd"===t?(n=Mn.call(this._weekdaysParse,r),-1!==n?n:null):"ddd"===t?(n=Mn.call(this._shortWeekdaysParse,r),-1!==n?n:null):(n=Mn.call(this._minWeekdaysParse,r),-1!==n?n:null):"dddd"===t?(n=Mn.call(this._weekdaysParse,r),-1!==n?n:(n=Mn.call(this._shortWeekdaysParse,r),-1!==n?n:(n=Mn.call(this._minWeekdaysParse,r),-1!==n?n:null))):"ddd"===t?(n=Mn.call(this._shortWeekdaysParse,r),-1!==n?n:(n=Mn.call(this._weekdaysParse,r),-1!==n?n:(n=Mn.call(this._minWeekdaysParse,r),-1!==n?n:null))):(n=Mn.call(this._minWeekdaysParse,r),-1!==n?n:(n=Mn.call(this._weekdaysParse,r),-1!==n?n:(n=Mn.call(this._shortWeekdaysParse,r),-1!==n?n:null)))}function Ee(e,t,a){var s,n,i;if(this._weekdaysParseExact)return Ae.call(this,e,t,a);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;7>s;s++){if(n=u([2e3,1]).day(s),a&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(n,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(n,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(n,"").replace(".",".?")+"$","i")),this._weekdaysParse[s]||(i="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[s]=new RegExp(i.replace(".",""),"i")),a&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(a&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(a&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!a&&this._weekdaysParse[s].test(e))return s}}function We(e){if(!this.isValid())return null!=e?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=xe(e,this.localeData()),this.add(e-t,"d")):t}function ze(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")}function Ie(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=He(e,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7}function Be(e){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||$e.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(d(this,"_weekdaysRegex")||(this._weekdaysRegex=hi),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Oe(e){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||$e.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(d(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=pi),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Fe(e){return this._weekdaysParseExact?(d(this,"_weekdaysRegex")||$e.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(d(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=fi),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function $e(){function e(e,t){return t.length-e.length}var t,a,s,n,i,r=[],o=[],d=[],l=[];for(t=0;7>t;t++)a=u([2e3,1]).day(t),s=this.weekdaysMin(a,""),n=this.weekdaysShort(a,""),i=this.weekdays(a,""),r.push(s),o.push(n),d.push(i),l.push(s),l.push(n),l.push(i);for(r.sort(e),o.sort(e),d.sort(e),l.sort(e),t=0;7>t;t++)o[t]=ee(o[t]),d[t]=ee(d[t]),l[t]=ee(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+d.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Ge(){return this.hours()%12||12}function Re(){return this.hours()||24}function Ne(e,t){J(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function Je(e,t){return t._meridiemParse}function Ve(e){return"p"===(e+"").toLowerCase().charAt(0)}function Ue(e,t,a){return e>11?a?"pm":"PM":a?"am":"AM"}function qe(e){return e?e.toLowerCase().replace("_","-"):e}function Xe(e){for(var t,a,s,n,i=0;i<e.length;){for(n=qe(e[i]).split("-"),t=n.length,a=qe(e[i+1]),a=a?a.split("-"):null;t>0;){if(s=Ke(n.slice(0,t).join("-")))return s;if(a&&a.length>=t&&Y(n,a,!0)>=t-1)break;t--}i++}return null}function Ke(t){var a=null;if(!Yi[t]&&"undefined"!=typeof e&&e&&e.exports)try{a=Mi._abbr,require("./locale/"+t),Ze(a)}catch(s){}return Yi[t]}function Ze(e,t){var a;return e&&(a=p(t)?tt(e):Qe(e,t),a&&(Mi=a)),Mi._abbr}function Qe(e,t){if(null!==t){var a=Li;return t.abbr=e,null!=Yi[e]?(k("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),a=Yi[e]._config):null!=t.parentLocale&&(null!=Yi[t.parentLocale]?a=Yi[t.parentLocale]._config:k("parentLocaleUndefined","specified parentLocale is not defined yet. See http://momentjs.com/guides/#/warnings/parent-locale/")),Yi[e]=new S(b(a,t)),Ze(e),Yi[e]}return delete Yi[e],null}function et(e,t){if(null!=t){var a,s=Li;null!=Yi[e]&&(s=Yi[e]._config),t=b(s,t),a=new S(t),a.parentLocale=Yi[e],Yi[e]=a,Ze(e)}else null!=Yi[e]&&(null!=Yi[e].parentLocale?Yi[e]=Yi[e].parentLocale:null!=Yi[e]&&delete Yi[e]);return Yi[e]}function tt(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Mi;if(!s(e)){if(t=Ke(e))return t;e=[e]}return Xe(e)}function at(){return fn(Yi)}function st(e){var t,a=e._a;return a&&-2===_(e).overflow&&(t=a[Xn]<0||a[Xn]>11?Xn:a[Kn]<1||a[Kn]>ne(a[qn],a[Xn])?Kn:a[Zn]<0||a[Zn]>24||24===a[Zn]&&(0!==a[Qn]||0!==a[ei]||0!==a[ti])?Zn:a[Qn]<0||a[Qn]>59?Qn:a[ei]<0||a[ei]>59?ei:a[ti]<0||a[ti]>999?ti:-1,_(e)._overflowDayOfYear&&(qn>t||t>Kn)&&(t=Kn),_(e)._overflowWeeks&&-1===t&&(t=ai),_(e)._overflowWeekday&&-1===t&&(t=si),_(e).overflow=t),e}function nt(e){var t,a,s,n,i,r,o=e._i,d=vi.exec(o)||wi.exec(o);if(d){for(_(e).iso=!0,t=0,a=Di.length;a>t;t++)if(Di[t][1].exec(d[1])){n=Di[t][0],s=Di[t][2]!==!1;break}if(null==n)return void(e._isValid=!1);if(d[3]){for(t=0,a=Ti.length;a>t;t++)if(Ti[t][1].exec(d[3])){i=(d[2]||" ")+Ti[t][0];break}if(null==i)return void(e._isValid=!1)}if(!s&&null!=i)return void(e._isValid=!1);if(d[4]){if(!ki.exec(d[4]))return void(e._isValid=!1);r="Z"}e._f=n+(i||"")+(r||""),ut(e)}else e._isValid=!1}function it(e){var a=bi.exec(e._i);return null!==a?void(e._d=new Date((+a[1]))):(nt(e),void(e._isValid===!1&&(delete e._isValid,t.createFromInputFallback(e))))}function rt(e,t,a){return null!=e?e:null!=t?t:a}function ot(e){var a=new Date(t.now());return e._useUTC?[a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate()]:[a.getFullYear(),a.getMonth(),a.getDate()]}function dt(e){var t,a,s,n,i=[];if(!e._d){for(s=ot(e),e._w&&null==e._a[Kn]&&null==e._a[Xn]&&lt(e),e._dayOfYear&&(n=rt(e._a[qn],s[qn]),e._dayOfYear>pe(n)&&(_(e)._overflowDayOfYear=!0),a=ge(n,0,e._dayOfYear),e._a[Xn]=a.getUTCMonth(),e._a[Kn]=a.getUTCDate()),t=0;3>t&&null==e._a[t];++t)e._a[t]=i[t]=s[t];for(;7>t;t++)e._a[t]=i[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[Zn]&&0===e._a[Qn]&&0===e._a[ei]&&0===e._a[ti]&&(e._nextDay=!0,e._a[Zn]=0),e._d=(e._useUTC?ge:ye).apply(null,i),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Zn]=24)}}function lt(e){var t,a,s,n,i,r,o,d;t=e._w,null!=t.GG||null!=t.W||null!=t.E?(i=1,r=4,a=rt(t.GG,e._a[qn],ve(yt(),1,4).year),s=rt(t.W,1),n=rt(t.E,1),(1>n||n>7)&&(d=!0)):(i=e._locale._week.dow,r=e._locale._week.doy,a=rt(t.gg,e._a[qn],ve(yt(),i,r).year),s=rt(t.w,1),null!=t.d?(n=t.d,(0>n||n>6)&&(d=!0)):null!=t.e?(n=t.e+i,(t.e<0||t.e>6)&&(d=!0)):n=i),1>s||s>we(a,i,r)?_(e)._overflowWeeks=!0:null!=d?_(e)._overflowWeekday=!0:(o=Ye(a,s,n,i,r),e._a[qn]=o.year,e._dayOfYear=o.dayOfYear)}function ut(e){if(e._f===t.ISO_8601)return void nt(e);e._a=[],_(e).empty=!0;var a,s,n,i,r,o=""+e._i,d=o.length,l=0;for(n=X(e._f,e._locale).match(Tn)||[],a=0;a<n.length;a++)i=n[a],s=(o.match(Z(i,e))||[])[0],s&&(r=o.substr(0,o.indexOf(s)),r.length>0&&_(e).unusedInput.push(r),o=o.slice(o.indexOf(s)+s.length),l+=s.length),xn[i]?(s?_(e).empty=!1:_(e).unusedTokens.push(i),se(i,s,e)):e._strict&&!s&&_(e).unusedTokens.push(i);_(e).charsLeftOver=d-l,o.length>0&&_(e).unusedInput.push(o),e._a[Zn]<=12&&_(e).bigHour===!0&&e._a[Zn]>0&&(_(e).bigHour=void 0),_(e).parsedDateParts=e._a.slice(0),_(e).meridiem=e._meridiem,e._a[Zn]=mt(e._locale,e._a[Zn],e._meridiem),dt(e),st(e)}function mt(e,t,a){var s;return null==a?t:null!=e.meridiemHour?e.meridiemHour(t,a):null!=e.isPM?(s=e.isPM(a),s&&12>t&&(t+=12),s||12!==t||(t=0),t):t}function _t(e){var t,a,s,n,i;if(0===e._f.length)return _(e).invalidFormat=!0,void(e._d=new Date(NaN));for(n=0;n<e._f.length;n++)i=0,t=f({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[n],ut(t),c(t)&&(i+=_(t).charsLeftOver,i+=10*_(t).unusedTokens.length,_(t).score=i,(null==s||s>i)&&(s=i,
a=t));l(e,a||t)}function ct(e){if(!e._d){var t=z(e._i);e._a=o([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),dt(e)}}function ht(e){var t=new M(st(pt(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function pt(e){var t=e._i,a=e._f;return e._locale=e._locale||tt(e._l),null===t||void 0===a&&""===t?h({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),y(t)?new M(st(t)):(s(a)?_t(e):r(t)?e._d=t:a?ut(e):ft(e),c(e)||(e._d=null),e))}function ft(e){var a=e._i;void 0===a?e._d=new Date(t.now()):r(a)?e._d=new Date(a.valueOf()):"string"==typeof a?it(e):s(a)?(e._a=o(a.slice(0),function(e){return parseInt(e,10)}),dt(e)):"object"==typeof a?ct(e):"number"==typeof a?e._d=new Date(a):t.createFromInputFallback(e)}function Mt(e,t,a,r,o){var d={};return"boolean"==typeof a&&(r=a,a=void 0),(n(e)&&i(e)||s(e)&&0===e.length)&&(e=void 0),d._isAMomentObject=!0,d._useUTC=d._isUTC=o,d._l=a,d._i=e,d._f=t,d._strict=r,ht(d)}function yt(e,t,a,s){return Mt(e,t,a,s,!1)}function gt(e,t){var a,n;if(1===t.length&&s(t[0])&&(t=t[0]),!t.length)return yt();for(a=t[0],n=1;n<t.length;++n)t[n].isValid()&&!t[n][e](a)||(a=t[n]);return a}function Lt(){var e=[].slice.call(arguments,0);return gt("isBefore",e)}function Yt(){var e=[].slice.call(arguments,0);return gt("isAfter",e)}function vt(e){var t=z(e),a=t.year||0,s=t.quarter||0,n=t.month||0,i=t.week||0,r=t.day||0,o=t.hour||0,d=t.minute||0,l=t.second||0,u=t.millisecond||0;this._milliseconds=+u+1e3*l+6e4*d+1e3*o*60*60,this._days=+r+7*i,this._months=+n+3*s+12*a,this._data={},this._locale=tt(),this._bubble()}function wt(e){return e instanceof vt}function kt(e){return 0>e?-1*Math.round(-1*e):Math.round(e)}function Dt(e,t){J(e,0,0,function(){var e=this.utcOffset(),a="+";return 0>e&&(e=-e,a="-"),a+N(~~(e/60),2)+t+N(~~e%60,2)})}function Tt(e,t){var a=(t||"").match(e)||[],s=a[a.length-1]||[],n=(s+"").match(Pi)||["-",0,0],i=+(60*n[1])+L(n[2]);return"+"===n[0]?i:-i}function bt(e,a){var s,n;return a._isUTC?(s=a.clone(),n=(y(e)||r(e)?e.valueOf():yt(e).valueOf())-s.valueOf(),s._d.setTime(s._d.valueOf()+n),t.updateOffset(s,!1),s):yt(e).local()}function St(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function xt(e,a){var s,n=this._offset||0;return this.isValid()?null!=e?("string"==typeof e?e=Tt(Rn,e):Math.abs(e)<16&&(e=60*e),!this._isUTC&&a&&(s=St(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),n!==e&&(!a||this._changeInProgress?Nt(this,Ot(e-n,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,t.updateOffset(this,!0),this._changeInProgress=null)),this):this._isUTC?n:St(this):null!=e?this:NaN}function Ht(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function Pt(e){return this.utcOffset(0,e)}function Ct(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(St(this),"m")),this}function jt(){if(this._tzm)this.utcOffset(this._tzm);else if("string"==typeof this._i){var e=Tt(Gn,this._i);0===e?this.utcOffset(0,!0):this.utcOffset(Tt(Gn,this._i))}return this}function At(e){return!!this.isValid()&&(e=e?yt(e).utcOffset():0,(this.utcOffset()-e)%60===0)}function Et(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Wt(){if(!p(this._isDSTShifted))return this._isDSTShifted;var e={};if(f(e,this),e=pt(e),e._a){var t=e._isUTC?u(e._a):yt(e._a);this._isDSTShifted=this.isValid()&&Y(e._a,t.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted}function zt(){return!!this.isValid()&&!this._isUTC}function It(){return!!this.isValid()&&this._isUTC}function Bt(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function Ot(e,t){var a,s,n,i=e,r=null;return wt(e)?i={ms:e._milliseconds,d:e._days,M:e._months}:"number"==typeof e?(i={},t?i[t]=e:i.milliseconds=e):(r=Ci.exec(e))?(a="-"===r[1]?-1:1,i={y:0,d:L(r[Kn])*a,h:L(r[Zn])*a,m:L(r[Qn])*a,s:L(r[ei])*a,ms:L(kt(1e3*r[ti]))*a}):(r=ji.exec(e))?(a="-"===r[1]?-1:1,i={y:Ft(r[2],a),M:Ft(r[3],a),w:Ft(r[4],a),d:Ft(r[5],a),h:Ft(r[6],a),m:Ft(r[7],a),s:Ft(r[8],a)}):null==i?i={}:"object"==typeof i&&("from"in i||"to"in i)&&(n=Gt(yt(i.from),yt(i.to)),i={},i.ms=n.milliseconds,i.M=n.months),s=new vt(i),wt(e)&&d(e,"_locale")&&(s._locale=e._locale),s}function Ft(e,t){var a=e&&parseFloat(e.replace(",","."));return(isNaN(a)?0:a)*t}function $t(e,t){var a={milliseconds:0,months:0};return a.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(a.months,"M").isAfter(t)&&--a.months,a.milliseconds=+t-+e.clone().add(a.months,"M"),a}function Gt(e,t){var a;return e.isValid()&&t.isValid()?(t=bt(t,e),e.isBefore(t)?a=$t(e,t):(a=$t(t,e),a.milliseconds=-a.milliseconds,a.months=-a.months),a):{milliseconds:0,months:0}}function Rt(e,t){return function(a,s){var n,i;return null===s||isNaN(+s)||(k(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=a,a=s,s=i),a="string"==typeof a?+a:a,n=Ot(a,s),Nt(this,n,e),this}}function Nt(e,a,s,n){var i=a._milliseconds,r=kt(a._days),o=kt(a._months);e.isValid()&&(n=null==n||n,i&&e._d.setTime(e._d.valueOf()+i*s),r&&$(e,"Date",F(e,"Date")+r*s),o&&le(e,F(e,"Month")+o*s),n&&t.updateOffset(e,r||o))}function Jt(e,t){var a=e.diff(t,"days",!0);return-6>a?"sameElse":-1>a?"lastWeek":0>a?"lastDay":1>a?"sameDay":2>a?"nextDay":7>a?"nextWeek":"sameElse"}function Vt(e,a){var s=e||yt(),n=bt(s,this).startOf("day"),i=t.calendarFormat(this,n)||"sameElse",r=a&&(D(a[i])?a[i].call(this,s):a[i]);return this.format(r||this.localeData().calendar(i,this,yt(s)))}function Ut(){return new M(this)}function qt(e,t){var a=y(e)?e:yt(e);return!(!this.isValid()||!a.isValid())&&(t=W(p(t)?"millisecond":t),"millisecond"===t?this.valueOf()>a.valueOf():a.valueOf()<this.clone().startOf(t).valueOf())}function Xt(e,t){var a=y(e)?e:yt(e);return!(!this.isValid()||!a.isValid())&&(t=W(p(t)?"millisecond":t),"millisecond"===t?this.valueOf()<a.valueOf():this.clone().endOf(t).valueOf()<a.valueOf())}function Kt(e,t,a,s){return s=s||"()",("("===s[0]?this.isAfter(e,a):!this.isBefore(e,a))&&(")"===s[1]?this.isBefore(t,a):!this.isAfter(t,a))}function Zt(e,t){var a,s=y(e)?e:yt(e);return!(!this.isValid()||!s.isValid())&&(t=W(t||"millisecond"),"millisecond"===t?this.valueOf()===s.valueOf():(a=s.valueOf(),this.clone().startOf(t).valueOf()<=a&&a<=this.clone().endOf(t).valueOf()))}function Qt(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function ea(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function ta(e,t,a){var s,n,i,r;return this.isValid()?(s=bt(e,this),s.isValid()?(n=6e4*(s.utcOffset()-this.utcOffset()),t=W(t),"year"===t||"month"===t||"quarter"===t?(r=aa(this,s),"quarter"===t?r/=3:"year"===t&&(r/=12)):(i=this-s,r="second"===t?i/1e3:"minute"===t?i/6e4:"hour"===t?i/36e5:"day"===t?(i-n)/864e5:"week"===t?(i-n)/6048e5:i),a?r:g(r)):NaN):NaN}function aa(e,t){var a,s,n=12*(t.year()-e.year())+(t.month()-e.month()),i=e.clone().add(n,"months");return 0>t-i?(a=e.clone().add(n-1,"months"),s=(t-i)/(i-a)):(a=e.clone().add(n+1,"months"),s=(t-i)/(a-i)),-(n+s)||0}function sa(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function na(){var e=this.clone().utc();return 0<e.year()&&e.year()<=9999?D(Date.prototype.toISOString)?this.toDate().toISOString():q(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):q(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function ia(e){e||(e=this.isUtc()?t.defaultFormatUtc:t.defaultFormat);var a=q(this,e);return this.localeData().postformat(a)}function ra(e,t){return this.isValid()&&(y(e)&&e.isValid()||yt(e).isValid())?Ot({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function oa(e){return this.from(yt(),e)}function da(e,t){return this.isValid()&&(y(e)&&e.isValid()||yt(e).isValid())?Ot({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function la(e){return this.to(yt(),e)}function ua(e){var t;return void 0===e?this._locale._abbr:(t=tt(e),null!=t&&(this._locale=t),this)}function ma(){return this._locale}function _a(e){switch(e=W(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this}function ca(e){return e=W(e),void 0===e||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))}function ha(){return this._d.valueOf()-6e4*(this._offset||0)}function pa(){return Math.floor(this.valueOf()/1e3)}function fa(){return new Date(this.valueOf())}function Ma(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function ya(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function ga(){return this.isValid()?this.toISOString():null}function La(){return c(this)}function Ya(){return l({},_(this))}function va(){return _(this).overflow}function wa(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function ka(e,t){J(0,[e,e.length],0,t)}function Da(e){return xa.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Ta(e){return xa.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function ba(){return we(this.year(),1,4)}function Sa(){var e=this.localeData()._week;return we(this.year(),e.dow,e.doy)}function xa(e,t,a,s,n){var i;return null==e?ve(this,s,n).year:(i=we(e,s,n),t>i&&(t=i),Ha.call(this,e,t,a,s,n))}function Ha(e,t,a,s,n){var i=Ye(e,t,a,s,n),r=ge(i.year,0,i.dayOfYear);return this.year(r.getUTCFullYear()),this.month(r.getUTCMonth()),this.date(r.getUTCDate()),this}function Pa(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)}function Ca(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")}function ja(e,t){t[ti]=L(1e3*("0."+e))}function Aa(){return this._isUTC?"UTC":""}function Ea(){return this._isUTC?"Coordinated Universal Time":""}function Wa(e){return yt(1e3*e)}function za(){return yt.apply(null,arguments).parseZone()}function Ia(e){return e}function Ba(e,t,a,s){var n=tt(),i=u().set(s,t);return n[a](i,e)}function Oa(e,t,a){if("number"==typeof e&&(t=e,e=void 0),e=e||"",null!=t)return Ba(e,t,a,"month");var s,n=[];for(s=0;12>s;s++)n[s]=Ba(e,s,a,"month");return n}function Fa(e,t,a,s){"boolean"==typeof e?("number"==typeof t&&(a=t,t=void 0),t=t||""):(t=e,a=t,e=!1,"number"==typeof t&&(a=t,t=void 0),t=t||"");var n=tt(),i=e?n._week.dow:0;if(null!=a)return Ba(t,(a+i)%7,s,"day");var r,o=[];for(r=0;7>r;r++)o[r]=Ba(t,(r+i)%7,s,"day");return o}function $a(e,t){return Oa(e,t,"months")}function Ga(e,t){return Oa(e,t,"monthsShort")}function Ra(e,t,a){return Fa(e,t,a,"weekdays")}function Na(e,t,a){return Fa(e,t,a,"weekdaysShort")}function Ja(e,t,a){return Fa(e,t,a,"weekdaysMin")}function Va(){var e=this._data;return this._milliseconds=Ni(this._milliseconds),this._days=Ni(this._days),this._months=Ni(this._months),e.milliseconds=Ni(e.milliseconds),e.seconds=Ni(e.seconds),e.minutes=Ni(e.minutes),e.hours=Ni(e.hours),e.months=Ni(e.months),e.years=Ni(e.years),this}function Ua(e,t,a,s){var n=Ot(t,a);return e._milliseconds+=s*n._milliseconds,e._days+=s*n._days,e._months+=s*n._months,e._bubble()}function qa(e,t){return Ua(this,e,t,1)}function Xa(e,t){return Ua(this,e,t,-1)}function Ka(e){return 0>e?Math.floor(e):Math.ceil(e)}function Za(){var e,t,a,s,n,i=this._milliseconds,r=this._days,o=this._months,d=this._data;return i>=0&&r>=0&&o>=0||0>=i&&0>=r&&0>=o||(i+=864e5*Ka(es(o)+r),r=0,o=0),d.milliseconds=i%1e3,e=g(i/1e3),d.seconds=e%60,t=g(e/60),d.minutes=t%60,a=g(t/60),d.hours=a%24,r+=g(a/24),n=g(Qa(r)),o+=n,r-=Ka(es(n)),s=g(o/12),o%=12,d.days=r,d.months=o,d.years=s,this}function Qa(e){return 4800*e/146097}function es(e){return 146097*e/4800}function ts(e){var t,a,s=this._milliseconds;if(e=W(e),"month"===e||"year"===e)return t=this._days+s/864e5,a=this._months+Qa(t),"month"===e?a:a/12;switch(t=this._days+Math.round(es(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}}function as(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*L(this._months/12)}function ss(e){return function(){return this.as(e)}}function ns(e){return e=W(e),this[e+"s"]()}function is(e){return function(){return this._data[e]}}function rs(){return g(this.days()/7)}function os(e,t,a,s,n){return n.relativeTime(t||1,!!a,e,s)}function ds(e,t,a){var s=Ot(e).abs(),n=or(s.as("s")),i=or(s.as("m")),r=or(s.as("h")),o=or(s.as("d")),d=or(s.as("M")),l=or(s.as("y")),u=n<dr.s&&["s",n]||1>=i&&["m"]||i<dr.m&&["mm",i]||1>=r&&["h"]||r<dr.h&&["hh",r]||1>=o&&["d"]||o<dr.d&&["dd",o]||1>=d&&["M"]||d<dr.M&&["MM",d]||1>=l&&["y"]||["yy",l];return u[2]=t,u[3]=+e>0,u[4]=a,os.apply(null,u)}function ls(e){return void 0===e?or:"function"==typeof e&&(or=e,!0)}function us(e,t){return void 0!==dr[e]&&(void 0===t?dr[e]:(dr[e]=t,!0))}function ms(e){var t=this.localeData(),a=ds(this,!e,t);return e&&(a=t.pastFuture(+this,a)),t.postformat(a)}function _s(){var e,t,a,s=lr(this._milliseconds)/1e3,n=lr(this._days),i=lr(this._months);e=g(s/60),t=g(e/60),s%=60,e%=60,a=g(i/12),i%=12;var r=a,o=i,d=n,l=t,u=e,m=s,_=this.asSeconds();return _?(0>_?"-":"")+"P"+(r?r+"Y":"")+(o?o+"M":"")+(d?d+"D":"")+(l||u||m?"T":"")+(l?l+"H":"")+(u?u+"M":"")+(m?m+"S":""):"P0D"}function cs(e,t){var a=e.split("_");return t%10===1&&t%100!==11?a[0]:t%10>=2&&4>=t%10&&(10>t%100||t%100>=20)?a[1]:a[2]}function hs(e,t,a){var s={mm:t?"хвіліна_хвіліны_хвілін":"хвіліну_хвіліны_хвілін",hh:t?"гадзіна_гадзіны_гадзін":"гадзіну_гадзіны_гадзін",dd:"дзень_дні_дзён",MM:"месяц_месяцы_месяцаў",yy:"год_гады_гадоў"};return"m"===a?t?"хвіліна":"хвіліну":"h"===a?t?"гадзіна":"гадзіну":e+" "+cs(s[a],+e)}function ps(e,t,a){var s={mm:"munutenn",MM:"miz",dd:"devezh"};return e+" "+ys(s[a],e)}function fs(e){switch(Ms(e)){case 1:case 3:case 4:case 5:case 9:return e+" bloaz";default:return e+" vloaz"}}function Ms(e){return e>9?Ms(e%10):e}function ys(e,t){return 2===t?gs(e):e}function gs(e){var t={m:"v",b:"v",d:"z"};return void 0===t[e.charAt(0)]?e:t[e.charAt(0)]+e.substring(1)}function Ls(e,t,a){var s=e+" ";switch(a){case"m":return t?"jedna minuta":"jedne minute";case"mm":return s+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return t?"jedan sat":"jednog sata";case"hh":return s+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return s+=1===e?"dan":"dana";case"MM":return s+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return s+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}function Ys(e){return e>1&&5>e&&1!==~~(e/10)}function vs(e,t,a,s){var n=e+" ";switch(a){case"s":return t||s?"pár sekund":"pár sekundami";case"m":return t?"minuta":s?"minutu":"minutou";case"mm":return t||s?n+(Ys(e)?"minuty":"minut"):n+"minutami";case"h":return t?"hodina":s?"hodinu":"hodinou";case"hh":return t||s?n+(Ys(e)?"hodiny":"hodin"):n+"hodinami";case"d":return t||s?"den":"dnem";case"dd":return t||s?n+(Ys(e)?"dny":"dní"):n+"dny";case"M":return t||s?"měsíc":"měsícem";case"MM":return t||s?n+(Ys(e)?"měsíce":"měsíců"):n+"měsíci";case"y":return t||s?"rok":"rokem";case"yy":return t||s?n+(Ys(e)?"roky":"let"):n+"lety"}}function ws(e,t,a,s){var n={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return t?n[a][0]:n[a][1]}function ks(e,t,a,s){var n={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return t?n[a][0]:n[a][1]}function Ds(e,t,a,s){var n={s:["mõne sekundi","mõni sekund","paar sekundit"],m:["ühe minuti","üks minut"],mm:[e+" minuti",e+" minutit"],h:["ühe tunni","tund aega","üks tund"],hh:[e+" tunni",e+" tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:[e+" kuu",e+" kuud"],y:["ühe aasta","aasta","üks aasta"],yy:[e+" aasta",e+" aastat"]};return t?n[a][2]?n[a][2]:n[a][1]:s?n[a][0]:n[a][1]}function Ts(e,t,a,s){var n="";switch(a){case"s":return s?"muutaman sekunnin":"muutama sekunti";case"m":return s?"minuutin":"minuutti";case"mm":n=s?"minuutin":"minuuttia";break;case"h":return s?"tunnin":"tunti";case"hh":n=s?"tunnin":"tuntia";break;case"d":return s?"päivän":"päivä";case"dd":n=s?"päivän":"päivää";break;case"M":return s?"kuukauden":"kuukausi";case"MM":n=s?"kuukauden":"kuukautta";break;case"y":return s?"vuoden":"vuosi";case"yy":n=s?"vuoden":"vuotta"}return n=bs(e,s)+" "+n}function bs(e,t){return 10>e?t?Fr[e]:Or[e]:e}function Ss(e,t,a){var s=e+" ";switch(a){case"m":return t?"jedna minuta":"jedne minute";case"mm":return s+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return t?"jedan sat":"jednog sata";case"hh":return s+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return s+=1===e?"dan":"dana";case"MM":return s+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return s+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}function xs(e,t,a,s){var n=e;switch(a){case"s":return s||t?"néhány másodperc":"néhány másodperce";case"m":return"egy"+(s||t?" perc":" perce");case"mm":return n+(s||t?" perc":" perce");case"h":return"egy"+(s||t?" óra":" órája");case"hh":return n+(s||t?" óra":" órája");case"d":return"egy"+(s||t?" nap":" napja");case"dd":return n+(s||t?" nap":" napja");case"M":return"egy"+(s||t?" hónap":" hónapja");case"MM":return n+(s||t?" hónap":" hónapja");case"y":return"egy"+(s||t?" év":" éve");case"yy":return n+(s||t?" év":" éve")}return""}function Hs(e){return(e?"":"[múlt] ")+"["+Kr[this.day()]+"] LT[-kor]"}function Ps(e){return e%100===11||e%10!==1}function Cs(e,t,a,s){var n=e+" ";switch(a){case"s":return t||s?"nokkrar sekúndur":"nokkrum sekúndum";case"m":return t?"mínúta":"mínútu";case"mm":return Ps(e)?n+(t||s?"mínútur":"mínútum"):t?n+"mínúta":n+"mínútu";case"hh":return Ps(e)?n+(t||s?"klukkustundir":"klukkustundum"):n+"klukkustund";case"d":return t?"dagur":s?"dag":"degi";case"dd":return Ps(e)?t?n+"dagar":n+(s?"daga":"dögum"):t?n+"dagur":n+(s?"dag":"degi");case"M":return t?"mánuður":s?"mánuð":"mánuði";case"MM":return Ps(e)?t?n+"mánuðir":n+(s?"mánuði":"mánuðum"):t?n+"mánuður":n+(s?"mánuð":"mánuði");case"y":return t||s?"ár":"ári";case"yy":return Ps(e)?n+(t||s?"ár":"árum"):n+(t||s?"ár":"ári")}}function js(e,t,a,s){var n={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};return t?n[a][0]:n[a][1]}function As(e){var t=e.substr(0,e.indexOf(" "));return Ws(t)?"a "+e:"an "+e}function Es(e){var t=e.substr(0,e.indexOf(" "));return Ws(t)?"viru "+e:"virun "+e}function Ws(e){if(e=parseInt(e,10),isNaN(e))return!1;if(0>e)return!0;if(10>e)return e>=4&&7>=e;if(100>e){var t=e%10,a=e/10;return Ws(0===t?a:t)}if(1e4>e){for(;e>=10;)e/=10;return Ws(e)}return e/=1e3,Ws(e)}function zs(e,t,a,s){return t?"kelios sekundės":s?"kelių sekundžių":"kelias sekundes"}function Is(e,t,a,s){return t?Os(a)[0]:s?Os(a)[1]:Os(a)[2]}function Bs(e){return e%10===0||e>10&&20>e}function Os(e){return eo[e].split("_")}function Fs(e,t,a,s){var n=e+" ";return 1===e?n+Is(e,t,a[0],s):t?n+(Bs(e)?Os(a)[1]:Os(a)[0]):s?n+Os(a)[1]:n+(Bs(e)?Os(a)[1]:Os(a)[2])}function $s(e,t,a){return a?t%10===1&&t%100!==11?e[2]:e[3]:t%10===1&&t%100!==11?e[0]:e[1]}function Gs(e,t,a){return e+" "+$s(to[a],e,t)}function Rs(e,t,a){return $s(to[a],e,t)}function Ns(e,t){return t?"dažas sekundes":"dažām sekundēm"}function Js(e,t,a,s){var n="";if(t)switch(a){case"s":n="काही सेकंद";break;case"m":n="एक मिनिट";break;case"mm":n="%d मिनिटे";break;case"h":n="एक तास";break;case"hh":n="%d तास";break;case"d":n="एक दिवस";break;case"dd":n="%d दिवस";break;case"M":n="एक महिना";break;case"MM":n="%d महिने";break;case"y":n="एक वर्ष";break;case"yy":n="%d वर्षे"}else switch(a){case"s":n="काही सेकंदां";break;case"m":n="एका मिनिटा";break;case"mm":n="%d मिनिटां";break;case"h":n="एका तासा";break;case"hh":n="%d तासां";break;case"d":n="एका दिवसा";break;case"dd":n="%d दिवसां";break;case"M":n="एका महिन्या";break;case"MM":n="%d महिन्यां";break;case"y":n="एका वर्षा";break;case"yy":n="%d वर्षां"}return n.replace(/%d/i,e)}function Vs(e){return 5>e%10&&e%10>1&&~~(e/10)%10!==1}function Us(e,t,a){var s=e+" ";switch(a){case"m":return t?"minuta":"minutę";case"mm":return s+(Vs(e)?"minuty":"minut");case"h":return t?"godzina":"godzinę";case"hh":return s+(Vs(e)?"godziny":"godzin");case"MM":return s+(Vs(e)?"miesiące":"miesięcy");case"yy":return s+(Vs(e)?"lata":"lat")}}function qs(e,t,a){var s={mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"},n=" ";return(e%100>=20||e>=100&&e%100===0)&&(n=" de "),e+n+s[a]}function Xs(e,t){var a=e.split("_");return t%10===1&&t%100!==11?a[0]:t%10>=2&&4>=t%10&&(10>t%100||t%100>=20)?a[1]:a[2]}function Ks(e,t,a){var s={mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return"m"===a?t?"минута":"минуту":e+" "+Xs(s[a],+e)}function Zs(e){return e>1&&5>e}function Qs(e,t,a,s){var n=e+" ";switch(a){case"s":return t||s?"pár sekúnd":"pár sekundami";case"m":return t?"minúta":s?"minútu":"minútou";case"mm":return t||s?n+(Zs(e)?"minúty":"minút"):n+"minútami";case"h":return t?"hodina":s?"hodinu":"hodinou";case"hh":return t||s?n+(Zs(e)?"hodiny":"hodín"):n+"hodinami";case"d":return t||s?"deň":"dňom";case"dd":return t||s?n+(Zs(e)?"dni":"dní"):n+"dňami";case"M":return t||s?"mesiac":"mesiacom";case"MM":return t||s?n+(Zs(e)?"mesiace":"mesiacov"):n+"mesiacmi";case"y":return t||s?"rok":"rokom";case"yy":return t||s?n+(Zs(e)?"roky":"rokov"):n+"rokmi"}}function en(e,t,a,s){var n=e+" ";switch(a){case"s":return t||s?"nekaj sekund":"nekaj sekundami";case"m":return t?"ena minuta":"eno minuto";case"mm":return n+=1===e?t?"minuta":"minuto":2===e?t||s?"minuti":"minutama":5>e?t||s?"minute":"minutami":t||s?"minut":"minutami";case"h":return t?"ena ura":"eno uro";case"hh":return n+=1===e?t?"ura":"uro":2===e?t||s?"uri":"urama":5>e?t||s?"ure":"urami":t||s?"ur":"urami";case"d":return t||s?"en dan":"enim dnem";case"dd":return n+=1===e?t||s?"dan":"dnem":2===e?t||s?"dni":"dnevoma":t||s?"dni":"dnevi";case"M":return t||s?"en mesec":"enim mesecem";case"MM":return n+=1===e?t||s?"mesec":"mesecem":2===e?t||s?"meseca":"mesecema":5>e?t||s?"mesece":"meseci":t||s?"mesecev":"meseci";case"y":return t||s?"eno leto":"enim letom";case"yy":return n+=1===e?t||s?"leto":"letom":2===e?t||s?"leti":"letoma":5>e?t||s?"leta":"leti":t||s?"let":"leti"}}function tn(e){var t=e;return t=-1!==e.indexOf("jaj")?t.slice(0,-3)+"leS":-1!==e.indexOf("jar")?t.slice(0,-3)+"waQ":-1!==e.indexOf("DIS")?t.slice(0,-3)+"nem":t+" pIq"}function an(e){var t=e;return t=-1!==e.indexOf("jaj")?t.slice(0,-3)+"Hu’":-1!==e.indexOf("jar")?t.slice(0,-3)+"wen":-1!==e.indexOf("DIS")?t.slice(0,-3)+"ben":t+" ret"}function sn(e,t,a,s){var n=nn(e);switch(a){case"mm":return n+" tup";case"hh":return n+" rep";case"dd":return n+" jaj";case"MM":return n+" jar";case"yy":return n+" DIS"}}function nn(e){var t=Math.floor(e%1e3/100),a=Math.floor(e%100/10),s=e%10,n="";return t>0&&(n+=Do[t]+"vatlh"),a>0&&(n+=(""!==n?" ":"")+Do[a]+"maH"),s>0&&(n+=(""!==n?" ":"")+Do[s]),""===n?"pagh":n}function rn(e,t,a,s){var n={s:["viensas secunds","'iensas secunds"],m:["'n míut","'iens míut"],mm:[e+" míuts",""+e+" míuts"],h:["'n þora","'iensa þora"],hh:[e+" þoras",""+e+" þoras"],d:["'n ziua","'iensa ziua"],dd:[e+" ziuas",""+e+" ziuas"],M:["'n mes","'iens mes"],MM:[e+" mesen",""+e+" mesen"],y:["'n ar","'iens ar"],yy:[e+" ars",""+e+" ars"]};return s?n[a][0]:t?n[a][0]:n[a][1]}function on(e,t){var a=e.split("_");return t%10===1&&t%100!==11?a[0]:t%10>=2&&4>=t%10&&(10>t%100||t%100>=20)?a[1]:a[2]}function dn(e,t,a){var s={mm:t?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:t?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"};return"m"===a?t?"хвилина":"хвилину":"h"===a?t?"година":"годину":e+" "+on(s[a],+e)}function ln(e,t){var a={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")},s=/(\[[ВвУу]\]) ?dddd/.test(t)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)?"genitive":"nominative";return a[s][e.day()]}function un(e){return function(){return e+"о"+(11===this.hours()?"б":"")+"] LT"}}var mn,_n;_n=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),a=t.length>>>0,s=0;a>s;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var cn=t.momentProperties=[],hn=!1,pn={};t.suppressDeprecationWarnings=!1,t.deprecationHandler=null;var fn;fn=Object.keys?Object.keys:function(e){var t,a=[];for(t in e)d(e,t)&&a.push(t);return a};var Mn,yn={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},gn={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Ln="Invalid date",Yn="%d",vn=/\d{1,2}/,wn={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},kn={},Dn={},Tn=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,bn=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Sn={},xn={},Hn=/\d/,Pn=/\d\d/,Cn=/\d{3}/,jn=/\d{4}/,An=/[+-]?\d{6}/,En=/\d\d?/,Wn=/\d\d\d\d?/,zn=/\d\d\d\d\d\d?/,In=/\d{1,3}/,Bn=/\d{1,4}/,On=/[+-]?\d{1,6}/,Fn=/\d+/,$n=/[+-]?\d+/,Gn=/Z|[+-]\d\d:?\d\d/gi,Rn=/Z|[+-]\d\d(?::?\d\d)?/gi,Nn=/[+-]?\d+(\.\d{1,3})?/,Jn=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Vn={},Un={},qn=0,Xn=1,Kn=2,Zn=3,Qn=4,ei=5,ti=6,ai=7,si=8;Mn=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},J("M",["MM",2],"Mo",function(){return this.month()+1}),J("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),J("MMMM",0,0,function(e){return this.localeData().months(this,e)}),E("month","M"),I("month",8),K("M",En),K("MM",En,Pn),K("MMM",function(e,t){return t.monthsShortRegex(e)}),K("MMMM",function(e,t){return t.monthsRegex(e)}),te(["M","MM"],function(e,t){t[Xn]=L(e)-1}),te(["MMM","MMMM"],function(e,t,a,s){var n=a._locale.monthsParse(e,s,a._strict);null!=n?t[Xn]=n:_(a).invalidMonth=e});var ni=/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,ii="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ri="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),oi=Jn,di=Jn;J("Y",0,0,function(){var e=this.year();return 9999>=e?""+e:"+"+e}),J(0,["YY",2],0,function(){return this.year()%100}),J(0,["YYYY",4],0,"year"),J(0,["YYYYY",5],0,"year"),J(0,["YYYYYY",6,!0],0,"year"),E("year","y"),I("year",1),K("Y",$n),K("YY",En,Pn),K("YYYY",Bn,jn),K("YYYYY",On,An),K("YYYYYY",On,An),te(["YYYYY","YYYYYY"],qn),te("YYYY",function(e,a){a[qn]=2===e.length?t.parseTwoDigitYear(e):L(e)}),te("YY",function(e,a){a[qn]=t.parseTwoDigitYear(e)}),te("Y",function(e,t){t[qn]=parseInt(e,10)}),t.parseTwoDigitYear=function(e){return L(e)+(L(e)>68?1900:2e3)};var li=O("FullYear",!0);J("w",["ww",2],"wo","week"),J("W",["WW",2],"Wo","isoWeek"),E("week","w"),E("isoWeek","W"),I("week",5),I("isoWeek",5),K("w",En),K("ww",En,Pn),K("W",En),K("WW",En,Pn),ae(["w","ww","W","WW"],function(e,t,a,s){t[s.substr(0,1)]=L(e)});var ui={dow:0,doy:6};J("d",0,"do","day"),J("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),J("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),J("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),J("e",0,0,"weekday"),J("E",0,0,"isoWeekday"),E("day","d"),E("weekday","e"),E("isoWeekday","E"),I("day",11),I("weekday",11),I("isoWeekday",11),K("d",En),K("e",En),K("E",En),K("dd",function(e,t){return t.weekdaysMinRegex(e)}),K("ddd",function(e,t){return t.weekdaysShortRegex(e)}),K("dddd",function(e,t){return t.weekdaysRegex(e)}),ae(["dd","ddd","dddd"],function(e,t,a,s){var n=a._locale.weekdaysParse(e,s,a._strict);null!=n?t.d=n:_(a).invalidWeekday=e}),ae(["d","e","E"],function(e,t,a,s){t[s]=L(e)});var mi="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),_i="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),ci="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),hi=Jn,pi=Jn,fi=Jn;J("H",["HH",2],0,"hour"),J("h",["hh",2],0,Ge),J("k",["kk",2],0,Re),J("hmm",0,0,function(){return""+Ge.apply(this)+N(this.minutes(),2)}),J("hmmss",0,0,function(){return""+Ge.apply(this)+N(this.minutes(),2)+N(this.seconds(),2)}),J("Hmm",0,0,function(){return""+this.hours()+N(this.minutes(),2)}),J("Hmmss",0,0,function(){return""+this.hours()+N(this.minutes(),2)+N(this.seconds(),2)}),Ne("a",!0),Ne("A",!1),E("hour","h"),I("hour",13),K("a",Je),K("A",Je),K("H",En),K("h",En),K("HH",En,Pn),K("hh",En,Pn),K("hmm",Wn),K("hmmss",zn),K("Hmm",Wn),K("Hmmss",zn),te(["H","HH"],Zn),te(["a","A"],function(e,t,a){a._isPm=a._locale.isPM(e),a._meridiem=e}),te(["h","hh"],function(e,t,a){t[Zn]=L(e),_(a).bigHour=!0}),te("hmm",function(e,t,a){var s=e.length-2;t[Zn]=L(e.substr(0,s)),t[Qn]=L(e.substr(s)),_(a).bigHour=!0}),te("hmmss",function(e,t,a){var s=e.length-4,n=e.length-2;t[Zn]=L(e.substr(0,s)),t[Qn]=L(e.substr(s,2)),t[ei]=L(e.substr(n)),_(a).bigHour=!0}),te("Hmm",function(e,t,a){var s=e.length-2;t[Zn]=L(e.substr(0,s)),t[Qn]=L(e.substr(s))}),te("Hmmss",function(e,t,a){var s=e.length-4,n=e.length-2;t[Zn]=L(e.substr(0,s)),t[Qn]=L(e.substr(s,2)),t[ei]=L(e.substr(n))});var Mi,yi=/[ap]\.?m?\.?/i,gi=O("Hours",!0),Li={calendar:yn,longDateFormat:gn,invalidDate:Ln,ordinal:Yn,ordinalParse:vn,relativeTime:wn,months:ii,monthsShort:ri,week:ui,weekdays:mi,weekdaysMin:ci,weekdaysShort:_i,meridiemParse:yi},Yi={},vi=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,wi=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,ki=/Z|[+-]\d\d(?::?\d\d)?/,Di=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Ti=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],bi=/^\/?Date\((\-?\d+)/i;t.createFromInputFallback=w("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),t.ISO_8601=function(){};var Si=w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){
var e=yt.apply(null,arguments);return this.isValid()&&e.isValid()?this>e?this:e:h()}),xi=w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=yt.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:h()}),Hi=function(){return Date.now?Date.now():+new Date};Dt("Z",":"),Dt("ZZ",""),K("Z",Rn),K("ZZ",Rn),te(["Z","ZZ"],function(e,t,a){a._useUTC=!0,a._tzm=Tt(Rn,e)});var Pi=/([\+\-]|\d\d)/gi;t.updateOffset=function(){};var Ci=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,ji=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;Ot.fn=vt.prototype;var Ai=Rt(1,"add"),Ei=Rt(-1,"subtract");t.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",t.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Wi=w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});J(0,["gg",2],0,function(){return this.weekYear()%100}),J(0,["GG",2],0,function(){return this.isoWeekYear()%100}),ka("gggg","weekYear"),ka("ggggg","weekYear"),ka("GGGG","isoWeekYear"),ka("GGGGG","isoWeekYear"),E("weekYear","gg"),E("isoWeekYear","GG"),I("weekYear",1),I("isoWeekYear",1),K("G",$n),K("g",$n),K("GG",En,Pn),K("gg",En,Pn),K("GGGG",Bn,jn),K("gggg",Bn,jn),K("GGGGG",On,An),K("ggggg",On,An),ae(["gggg","ggggg","GGGG","GGGGG"],function(e,t,a,s){t[s.substr(0,2)]=L(e)}),ae(["gg","GG"],function(e,a,s,n){a[n]=t.parseTwoDigitYear(e)}),J("Q",0,"Qo","quarter"),E("quarter","Q"),I("quarter",7),K("Q",Hn),te("Q",function(e,t){t[Xn]=3*(L(e)-1)}),J("D",["DD",2],"Do","date"),E("date","D"),I("date",9),K("D",En),K("DD",En,Pn),K("Do",function(e,t){return e?t._ordinalParse:t._ordinalParseLenient}),te(["D","DD"],Kn),te("Do",function(e,t){t[Kn]=L(e.match(En)[0],10)});var zi=O("Date",!0);J("DDD",["DDDD",3],"DDDo","dayOfYear"),E("dayOfYear","DDD"),I("dayOfYear",4),K("DDD",In),K("DDDD",Cn),te(["DDD","DDDD"],function(e,t,a){a._dayOfYear=L(e)}),J("m",["mm",2],0,"minute"),E("minute","m"),I("minute",14),K("m",En),K("mm",En,Pn),te(["m","mm"],Qn);var Ii=O("Minutes",!1);J("s",["ss",2],0,"second"),E("second","s"),I("second",15),K("s",En),K("ss",En,Pn),te(["s","ss"],ei);var Bi=O("Seconds",!1);J("S",0,0,function(){return~~(this.millisecond()/100)}),J(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),J(0,["SSS",3],0,"millisecond"),J(0,["SSSS",4],0,function(){return 10*this.millisecond()}),J(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),J(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),J(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),J(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),J(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),E("millisecond","ms"),I("millisecond",16),K("S",In,Hn),K("SS",In,Pn),K("SSS",In,Cn);var Oi;for(Oi="SSSS";Oi.length<=9;Oi+="S")K(Oi,Fn);for(Oi="S";Oi.length<=9;Oi+="S")te(Oi,ja);var Fi=O("Milliseconds",!1);J("z",0,0,"zoneAbbr"),J("zz",0,0,"zoneName");var $i=M.prototype;$i.add=Ai,$i.calendar=Vt,$i.clone=Ut,$i.diff=ta,$i.endOf=ca,$i.format=ia,$i.from=ra,$i.fromNow=oa,$i.to=da,$i.toNow=la,$i.get=G,$i.invalidAt=va,$i.isAfter=qt,$i.isBefore=Xt,$i.isBetween=Kt,$i.isSame=Zt,$i.isSameOrAfter=Qt,$i.isSameOrBefore=ea,$i.isValid=La,$i.lang=Wi,$i.locale=ua,$i.localeData=ma,$i.max=xi,$i.min=Si,$i.parsingFlags=Ya,$i.set=R,$i.startOf=_a,$i.subtract=Ei,$i.toArray=Ma,$i.toObject=ya,$i.toDate=fa,$i.toISOString=na,$i.toJSON=ga,$i.toString=sa,$i.unix=pa,$i.valueOf=ha,$i.creationData=wa,$i.year=li,$i.isLeapYear=Me,$i.weekYear=Da,$i.isoWeekYear=Ta,$i.quarter=$i.quarters=Pa,$i.month=ue,$i.daysInMonth=me,$i.week=$i.weeks=be,$i.isoWeek=$i.isoWeeks=Se,$i.weeksInYear=Sa,$i.isoWeeksInYear=ba,$i.date=zi,$i.day=$i.days=We,$i.weekday=ze,$i.isoWeekday=Ie,$i.dayOfYear=Ca,$i.hour=$i.hours=gi,$i.minute=$i.minutes=Ii,$i.second=$i.seconds=Bi,$i.millisecond=$i.milliseconds=Fi,$i.utcOffset=xt,$i.utc=Pt,$i.local=Ct,$i.parseZone=jt,$i.hasAlignedHourOffset=At,$i.isDST=Et,$i.isLocal=zt,$i.isUtcOffset=It,$i.isUtc=Bt,$i.isUTC=Bt,$i.zoneAbbr=Aa,$i.zoneName=Ea,$i.dates=w("dates accessor is deprecated. Use date instead.",zi),$i.months=w("months accessor is deprecated. Use month instead",ue),$i.years=w("years accessor is deprecated. Use year instead",li),$i.zone=w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Ht),$i.isDSTShifted=w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Wt);var Gi=$i,Ri=S.prototype;Ri.calendar=x,Ri.longDateFormat=H,Ri.invalidDate=P,Ri.ordinal=C,Ri.preparse=Ia,Ri.postformat=Ia,Ri.relativeTime=j,Ri.pastFuture=A,Ri.set=T,Ri.months=ie,Ri.monthsShort=re,Ri.monthsParse=de,Ri.monthsRegex=ce,Ri.monthsShortRegex=_e,Ri.week=ke,Ri.firstDayOfYear=Te,Ri.firstDayOfWeek=De,Ri.weekdays=Pe,Ri.weekdaysMin=je,Ri.weekdaysShort=Ce,Ri.weekdaysParse=Ee,Ri.weekdaysRegex=Be,Ri.weekdaysShortRegex=Oe,Ri.weekdaysMinRegex=Fe,Ri.isPM=Ve,Ri.meridiem=Ue,Ze("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,a=1===L(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+a}}),t.lang=w("moment.lang is deprecated. Use moment.locale instead.",Ze),t.langData=w("moment.langData is deprecated. Use moment.localeData instead.",tt);var Ni=Math.abs,Ji=ss("ms"),Vi=ss("s"),Ui=ss("m"),qi=ss("h"),Xi=ss("d"),Ki=ss("w"),Zi=ss("M"),Qi=ss("y"),er=is("milliseconds"),tr=is("seconds"),ar=is("minutes"),sr=is("hours"),nr=is("days"),ir=is("months"),rr=is("years"),or=Math.round,dr={s:45,m:45,h:22,d:26,M:11},lr=Math.abs,ur=vt.prototype;ur.abs=Va,ur.add=qa,ur.subtract=Xa,ur.as=ts,ur.asMilliseconds=Ji,ur.asSeconds=Vi,ur.asMinutes=Ui,ur.asHours=qi,ur.asDays=Xi,ur.asWeeks=Ki,ur.asMonths=Zi,ur.asYears=Qi,ur.valueOf=as,ur._bubble=Za,ur.get=ns,ur.milliseconds=er,ur.seconds=tr,ur.minutes=ar,ur.hours=sr,ur.days=nr,ur.weeks=rs,ur.months=ir,ur.years=rr,ur.humanize=ms,ur.toISOString=_s,ur.toString=_s,ur.toJSON=_s,ur.locale=ua,ur.localeData=ma,ur.toIsoString=w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",_s),ur.lang=Wi,J("X",0,0,"unix"),J("x",0,0,"valueOf"),K("x",$n),K("X",Nn),te("X",function(e,t,a){a._d=new Date(1e3*parseFloat(e,10))}),te("x",function(e,t,a){a._d=new Date(L(e))}),t.version="2.15.1",a(yt),t.fn=Gi,t.min=Lt,t.max=Yt,t.now=Hi,t.utc=u,t.unix=Wa,t.months=$a,t.isDate=r,t.locale=Ze,t.invalid=h,t.duration=Ot,t.isMoment=y,t.weekdays=Ra,t.parseZone=za,t.localeData=tt,t.isDuration=wt,t.monthsShort=Ga,t.weekdaysMin=Ja,t.defineLocale=Qe,t.updateLocale=et,t.locales=at,t.weekdaysShort=Na,t.normalizeUnits=W,t.relativeTimeRounding=ls,t.relativeTimeThreshold=us,t.calendarFormat=Jt,t.prototype=Gi;var mr=t,_r=(mr.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function(e){return/^nm$/i.test(e)},meridiem:function(e,t,a){return 12>e?a?"vm":"VM":a?"nm":"NM"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[Môre om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}}),{1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",0:"0"}),cr=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&10>=e%100?3:e%100>=11?4:5},hr={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},pr=function(e){return function(t,a,s,n){var i=cr(t),r=hr[e][cr(t)];return 2===i&&(r=r[a?0:1]),r.replace(/%d/i,t)}},fr=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],Mr=(mr.defineLocale("ar-ly",{months:fr,monthsShort:fr,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,t,a){return 12>e?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:pr("s"),m:pr("m"),mm:pr("m"),h:pr("h"),hh:pr("h"),d:pr("d"),dd:pr("d"),M:pr("M"),MM:pr("M"),y:pr("y"),yy:pr("y")},preparse:function(e){return e.replace(/\u200f/g,"").replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return _r[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}}),mr.defineLocale("ar-ma",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:6,doy:12}}),{1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"}),yr={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},gr=(mr.defineLocale("ar-sa",{months:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,t,a){return 12>e?"ص":"م"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return yr[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return Mr[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}}),mr.defineLocale("ar-tn",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:1,doy:4}}),{1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"}),Lr={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},Yr=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&10>=e%100?3:e%100>=11?4:5},vr={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},wr=function(e){return function(t,a,s,n){var i=Yr(t),r=vr[e][Yr(t)];return 2===i&&(r=r[a?0:1]),r.replace(/%d/i,t)}},kr=["كانون الثاني يناير","شباط فبراير","آذار مارس","نيسان أبريل","أيار مايو","حزيران يونيو","تموز يوليو","آب أغسطس","أيلول سبتمبر","تشرين الأول أكتوبر","تشرين الثاني نوفمبر","كانون الأول ديسمبر"],Dr=(mr.defineLocale("ar",{months:kr,monthsShort:kr,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,t,a){return 12>e?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:wr("s"),m:wr("m"),mm:wr("m"),h:wr("h"),hh:wr("h"),d:wr("d"),dd:wr("d"),M:wr("M"),MM:wr("M"),y:wr("y"),yy:wr("y")},preparse:function(e){return e.replace(/\u200f/g,"").replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return Lr[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return gr[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}}),{1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"}),Tr=(mr.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),weekdaysShort:"Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),weekdaysMin:"Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[gələn həftə] dddd [saat] LT",lastDay:"[dünən] LT",lastWeek:"[keçən həftə] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s əvvəl",s:"birneçə saniyyə",m:"bir dəqiqə",mm:"%d dəqiqə",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiemParse:/gecə|səhər|gündüz|axşam/,isPM:function(e){return/^(gündüz|axşam)$/.test(e)},meridiem:function(e,t,a){return 4>e?"gecə":12>e?"səhər":17>e?"gündüz":"axşam"},ordinalParse:/\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,ordinal:function(e){if(0===e)return e+"-ıncı";var t=e%10,a=e%100-t,s=e>=100?100:null;return e+(Dr[t]||Dr[a]||Dr[s])},week:{dow:1,doy:7}}),mr.defineLocale("be",{months:{format:"студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),standalone:"студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")},monthsShort:"студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),weekdays:{format:"нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),standalone:"нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),isFormat:/\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/},weekdaysShort:"нд_пн_ат_ср_чц_пт_сб".split("_"),weekdaysMin:"нд_пн_ат_ср_чц_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сёння ў] LT",nextDay:"[Заўтра ў] LT",lastDay:"[Учора ў] LT",nextWeek:function(){return"[У] dddd [ў] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[У мінулую] dddd [ў] LT";case 1:case 2:case 4:return"[У мінулы] dddd [ў] LT"}},sameElse:"L"},relativeTime:{future:"праз %s",past:"%s таму",s:"некалькі секунд",m:hs,mm:hs,h:hs,hh:hs,d:"дзень",dd:hs,M:"месяц",MM:hs,y:"год",yy:hs},meridiemParse:/ночы|раніцы|дня|вечара/,isPM:function(e){return/^(дня|вечара)$/.test(e)},meridiem:function(e,t,a){return 4>e?"ночы":12>e?"раніцы":17>e?"дня":"вечара"},ordinalParse:/\d{1,2}-(і|ы|га)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":case"w":case"W":return e%10!==2&&e%10!==3||e%100===12||e%100===13?e+"-ы":e+"-і";case"D":return e+"-га";default:return e}},week:{dow:1,doy:7}}),mr.defineLocale("bg",{months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Днес в] LT",nextDay:"[Утре в] LT",nextWeek:"dddd [в] LT",lastDay:"[Вчера в] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[В изминалата] dddd [в] LT";case 1:case 2:case 4:case 5:return"[В изминалия] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дни",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"},ordinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(e){var t=e%10,a=e%100;return 0===e?e+"-ев":0===a?e+"-ен":a>10&&20>a?e+"-ти":1===t?e+"-ви":2===t?e+"-ри":7===t||8===t?e+"-ми":e+"-ти"},week:{dow:1,doy:7}}),{1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"}),br={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"},Sr=(mr.defineLocale("bn",{months:"জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),monthsShort:"জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),weekdaysMin:"রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),longDateFormat:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm সময়",LLLL:"dddd, D MMMM YYYY, A h:mm সময়"},calendar:{sameDay:"[আজ] LT",nextDay:"[আগামীকাল] LT",nextWeek:"dddd, LT",lastDay:"[গতকাল] LT",lastWeek:"[গত] dddd, LT",sameElse:"L"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কয়েক সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"},preparse:function(e){return e.replace(/[১২৩৪৫৬৭৮৯০]/g,function(e){return br[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Tr[e]})},meridiemParse:/রাত|সকাল|দুপুর|বিকাল|রাত/,meridiemHour:function(e,t){return 12===e&&(e=0),"রাত"===t&&e>=4||"দুপুর"===t&&5>e||"বিকাল"===t?e+12:e},meridiem:function(e,t,a){return 4>e?"রাত":10>e?"সকাল":17>e?"দুপুর":20>e?"বিকাল":"রাত"},week:{dow:0,doy:6}}),{1:"༡",2:"༢",3:"༣",4:"༤",5:"༥",6:"༦",7:"༧",8:"༨",9:"༩",0:"༠"}),xr={"༡":"1","༢":"2","༣":"3","༤":"4","༥":"5","༦":"6","༧":"7","༨":"8","༩":"9","༠":"0"},Hr=(mr.defineLocale("bo",{months:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),monthsShort:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),weekdays:"གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),weekdaysShort:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),weekdaysMin:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[དི་རིང] LT",nextDay:"[སང་ཉིན] LT",nextWeek:"[བདུན་ཕྲག་རྗེས་མ], LT",lastDay:"[ཁ་སང] LT",lastWeek:"[བདུན་ཕྲག་མཐའ་མ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ལ་",past:"%s སྔན་ལ",s:"ལམ་སང",m:"སྐར་མ་གཅིག",mm:"%d སྐར་མ",h:"ཆུ་ཚོད་གཅིག",hh:"%d ཆུ་ཚོད",d:"ཉིན་གཅིག",dd:"%d ཉིན་",M:"ཟླ་བ་གཅིག",MM:"%d ཟླ་བ",y:"ལོ་གཅིག",yy:"%d ལོ"},preparse:function(e){return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g,function(e){return xr[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return Sr[e]})},meridiemParse:/མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,meridiemHour:function(e,t){return 12===e&&(e=0),"མཚན་མོ"===t&&e>=4||"ཉིན་གུང"===t&&5>e||"དགོང་དག"===t?e+12:e},meridiem:function(e,t,a){return 4>e?"མཚན་མོ":10>e?"ཞོགས་ཀས":17>e?"ཉིན་གུང":20>e?"དགོང་དག":"མཚན་མོ"},week:{dow:0,doy:6}}),mr.defineLocale("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY h[e]mm A",LLLL:"dddd, D [a viz] MMMM YYYY h[e]mm A"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondennoù",m:"ur vunutenn",mm:ps,h:"un eur",hh:"%d eur",d:"un devezh",dd:ps,M:"ur miz",MM:ps,y:"ur bloaz",yy:fs},ordinalParse:/\d{1,2}(añ|vet)/,ordinal:function(e){var t=1===e?"añ":"vet";return e+t},week:{dow:1,doy:4}}),mr.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:Ls,mm:Ls,h:Ls,hh:Ls,d:"dan",dd:Ls,M:"mjesec",MM:Ls,y:"godinu",yy:Ls},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),mr.defineLocale("ca",{months:"gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),monthsShort:"gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),monthsParseExact:!0,weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd D MMMM YYYY H:mm"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[demà a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"fa %s",s:"uns segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},ordinalParse:/\d{1,2}(r|n|t|è|a)/,ordinal:function(e,t){var a=1===e?"r":2===e?"n":3===e?"r":4===e?"t":"è";return"w"!==t&&"W"!==t||(a="a"),e+a},week:{dow:1,doy:4}}),"leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_")),Pr="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),Cr=(mr.defineLocale("cs",{months:Hr,monthsShort:Pr,monthsParse:function(e,t){var a,s=[];for(a=0;12>a;a++)s[a]=new RegExp("^"+e[a]+"$|^"+t[a]+"$","i");return s}(Hr,Pr),shortMonthsParse:function(e){var t,a=[];for(t=0;12>t;t++)a[t]=new RegExp("^"+e[t]+"$","i");return a}(Pr),longMonthsParse:function(e){var t,a=[];for(t=0;12>t;t++)a[t]=new RegExp("^"+e[t]+"$","i");return a}(Hr),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:vs,m:vs,mm:vs,h:vs,hh:vs,d:vs,dd:vs,M:vs,MM:vs,y:vs,yy:vs},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),mr.defineLocale("cv",{months:"кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),monthsShort:"кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),weekdays:"вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),weekdaysShort:"выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),weekdaysMin:"вр_тн_ыт_юн_кҫ_эр_шм".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",LLL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",LLLL:"dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"},calendar:{sameDay:"[Паян] LT [сехетре]",nextDay:"[Ыран] LT [сехетре]",lastDay:"[Ӗнер] LT [сехетре]",nextWeek:"[Ҫитес] dddd LT [сехетре]",lastWeek:"[Иртнӗ] dddd LT [сехетре]",sameElse:"L"},relativeTime:{future:function(e){var t=/сехет$/i.exec(e)?"рен":/ҫул$/i.exec(e)?"тан":"ран";return e+t},past:"%s каялла",s:"пӗр-ик ҫеккунт",m:"пӗр минут",mm:"%d минут",h:"пӗр сехет",hh:"%d сехет",d:"пӗр кун",dd:"%d кун",M:"пӗр уйӑх",MM:"%d уйӑх",y:"пӗр ҫул",yy:"%d ҫул"},ordinalParse:/\d{1,2}-мӗш/,ordinal:"%d-мӗш",week:{dow:1,doy:7}}),mr.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn ôl",s:"ychydig eiliadau",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},ordinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(e){var t=e,a="",s=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"];return t>20?a=40===t||50===t||60===t||80===t||100===t?"fed":"ain":t>0&&(a=s[t]),e+a},week:{dow:1,doy:4}}),mr.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tir_ons_tor_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY HH:mm"},calendar:{sameDay:"[I dag kl.] LT",nextDay:"[I morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[I går kl.] LT",lastWeek:"[sidste] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),mr.defineLocale("de-at",{months:"Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:ws,mm:"%d Minuten",h:ws,hh:"%d Stunden",d:ws,dd:ws,M:ws,MM:ws,y:ws,yy:ws},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),mr.defineLocale("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",m:ks,mm:"%d Minuten",h:ks,hh:"%d Stunden",d:ks,dd:ks,M:ks,MM:ks,y:ks,yy:ks},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),["ޖެނުއަރީ","ފެބްރުއަރީ","މާރިޗު","އޭޕްރީލު","މޭ","ޖޫން","ޖުލައި","އޯގަސްޓު","ސެޕްޓެމްބަރު","އޮކްޓޯބަރު","ނޮވެމްބަރު","ޑިސެމްބަރު"]),jr=["އާދިއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"],Ar=(mr.defineLocale("dv",{months:Cr,monthsShort:Cr,weekdays:jr,weekdaysShort:jr,weekdaysMin:"އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/M/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/މކ|މފ/,isPM:function(e){return"މފ"===e},meridiem:function(e,t,a){return 12>e?"މކ":"މފ"},calendar:{sameDay:"[މިއަދު] LT",nextDay:"[މާދަމާ] LT",nextWeek:"dddd LT",lastDay:"[އިއްޔެ] LT",lastWeek:"[ފާއިތުވި] dddd LT",sameElse:"L"},relativeTime:{future:"ތެރޭގައި %s",past:"ކުރިން %s",s:"ސިކުންތުކޮޅެއް",m:"މިނިޓެއް",mm:"މިނިޓު %d",h:"ގަޑިއިރެއް",hh:"ގަޑިއިރު %d",d:"ދުވަހެއް",dd:"ދުވަސް %d",M:"މަހެއް",MM:"މަސް %d",y:"އަހަރެއް",yy:"އަހަރު %d"},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/,/g,"،")},week:{dow:7,doy:12}}),mr.defineLocale("el",{monthsNominativeEl:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsGenitiveEl:"Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),months:function(e,t){return/D/.test(t.substring(0,t.indexOf("MMMM")))?this._monthsGenitiveEl[e.month()]:this._monthsNominativeEl[e.month()]},monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),meridiem:function(e,t,a){return e>11?a?"μμ":"ΜΜ":a?"πμ":"ΠΜ"},isPM:function(e){return"μ"===(e+"").toLowerCase()[0]},meridiemParse:/[ΠΜ]\.?Μ?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendarEl:{sameDay:"[Σήμερα {}] LT",nextDay:"[Αύριο {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[Χθες {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[το προηγούμενο] dddd [{}] LT";default:return"[την προηγούμενη] dddd [{}] LT"}},sameElse:"L"},calendar:function(e,t){var a=this._calendarEl[e],s=t&&t.hours();return D(a)&&(a=a.apply(t)),a.replace("{}",s%12===1?"στη":"στις")},relativeTime:{future:"σε %s",past:"%s πριν",s:"λίγα δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένας μήνας",MM:"%d μήνες",y:"ένας χρόνος",yy:"%d χρόνια"},ordinalParse:/\d{1,2}η/,ordinal:"%dη",week:{dow:1,doy:4}}),mr.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,a=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+a},week:{dow:1,doy:4}}),mr.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,a=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+a}}),mr.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,a=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+a},week:{dow:1,doy:4}}),mr.defineLocale("en-ie",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,a=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+a},week:{dow:1,doy:4}}),mr.defineLocale("en-nz",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},ordinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,a=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+a},week:{dow:1,doy:4}}),mr.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),weekdays:"Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),weekdaysShort:"Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D[-an de] MMMM, YYYY",LLL:"D[-an de] MMMM, YYYY HH:mm",LLLL:"dddd, [la] D[-an de] MMMM, YYYY HH:mm"},meridiemParse:/[ap]\.t\.m/i,isPM:function(e){return"p"===e.charAt(0).toLowerCase()},meridiem:function(e,t,a){return e>11?a?"p.t.m.":"P.T.M.":a?"a.t.m.":"A.T.M."},calendar:{sameDay:"[Hodiaŭ je] LT",nextDay:"[Morgaŭ je] LT",nextWeek:"dddd [je] LT",lastDay:"[Hieraŭ je] LT",lastWeek:"[pasinta] dddd [je] LT",sameElse:"L"},relativeTime:{future:"je %s",past:"antaŭ %s",s:"sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",dd:"%d tagoj",M:"monato",MM:"%d monatoj",y:"jaro",yy:"%d jaroj"},ordinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,doy:7}}),"ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")),Er="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),Wr=(mr.defineLocale("es-do",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,t){return/-MMM-/.test(t)?Er[e.month()]:Ar[e.month()]},monthsParseExact:!0,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}}),"ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")),zr="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),Ir=(mr.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,t){return/-MMM-/.test(t)?zr[e.month()]:Wr[e.month()]},monthsParseExact:!0,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}}),mr.defineLocale("et",{months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[Täna,] LT",nextDay:"[Homme,] LT",nextWeek:"[Järgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s pärast",past:"%s tagasi",s:Ds,m:Ds,mm:Ds,h:Ds,hh:Ds,d:Ds,dd:"%d päeva",M:Ds,MM:Ds,y:Ds,yy:Ds},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),mr.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),monthsParseExact:!0,weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] HH:mm",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] HH:mm",llll:"ddd, YYYY[ko] MMM D[a] HH:mm"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),{1:"۱",2:"۲",3:"۳",4:"۴",5:"۵",6:"۶",7:"۷",8:"۸",9:"۹",0:"۰"}),Br={"۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","۰":"0"},Or=(mr.defineLocale("fa",{months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),weekdays:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/قبل از ظهر|بعد از ظهر/,isPM:function(e){return/بعد از ظهر/.test(e)},meridiem:function(e,t,a){return 12>e?"قبل از ظهر":"بعد از ظهر"},calendar:{sameDay:"[امروز ساعت] LT",nextDay:"[فردا ساعت] LT",nextWeek:"dddd [ساعت] LT",lastDay:"[دیروز ساعت] LT",lastWeek:"dddd [پیش] [ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چندین ثانیه",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"},preparse:function(e){return e.replace(/[۰-۹]/g,function(e){return Br[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return Ir[e]}).replace(/,/g,"،")},ordinalParse:/\d{1,2}م/,ordinal:"%dم",week:{dow:6,doy:12}}),"nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ")),Fr=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",Or[7],Or[8],Or[9]],$r=(mr.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:Ts,m:Ts,mm:Ts,h:Ts,hh:Ts,d:Ts,dd:Ts,M:Ts,MM:Ts,y:Ts,yy:Ts},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),mr.defineLocale("fo",{months:"januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),weekdaysShort:"sun_mán_týs_mik_hós_frí_ley".split("_"),weekdaysMin:"su_má_tý_mi_hó_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D. MMMM, YYYY HH:mm"},calendar:{sameDay:"[Í dag kl.] LT",nextDay:"[Í morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[Í gjár kl.] LT",lastWeek:"[síðstu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s síðani",s:"fá sekund",m:"ein minutt",mm:"%d minuttir",h:"ein tími",hh:"%d tímar",d:"ein dagur",dd:"%d dagar",M:"ein mánaði",MM:"%d mánaðir",y:"eitt ár",yy:"%d ár"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),mr.defineLocale("fr-ca",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|e)/,ordinal:function(e){return e+(1===e?"er":"e")}}),mr.defineLocale("fr-ch",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|e)/,ordinal:function(e){return e+(1===e?"er":"e")},week:{dow:1,doy:4}}),mr.defineLocale("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd'hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},ordinalParse:/\d{1,2}(er|)/,ordinal:function(e){return e+(1===e?"er":"")},week:{dow:1,doy:4}}),"jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")),Gr="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),Rr=(mr.defineLocale("fy",{months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:function(e,t){return/-MMM-/.test(t)?Gr[e.month()]:$r[e.month()]},monthsParseExact:!0,weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[hjoed om] LT",nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[ôfrûne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",m:"ien minút",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}}),["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd"]),Nr=["Faoi","Gear","Màrt","Gibl","Cèit","Ògmh","Iuch","Lùn","Sult","Dàmh","Samh","Dùbh"],Jr=["Didòmhnaich","Diluain","Dimàirt","Diciadain","Diardaoin","Dihaoine","Disathairne"],Vr=["Did","Dil","Dim","Dic","Dia","Dih","Dis"],Ur=["Dò","Lu","Mà","Ci","Ar","Ha","Sa"],qr=(mr.defineLocale("gd",{months:Rr,monthsShort:Nr,monthsParseExact:!0,weekdays:Jr,weekdaysShort:Vr,weekdaysMin:Ur,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[An-diugh aig] LT",nextDay:"[A-màireach aig] LT",nextWeek:"dddd [aig] LT",lastDay:"[An-dè aig] LT",lastWeek:"dddd [seo chaidh] [aig] LT",sameElse:"L"},relativeTime:{future:"ann an %s",past:"bho chionn %s",s:"beagan diogan",m:"mionaid",mm:"%d mionaidean",h:"uair",hh:"%d uairean",d:"latha",dd:"%d latha",M:"mìos",MM:"%d mìosan",y:"bliadhna",yy:"%d bliadhna"},ordinalParse:/\d{1,2}(d|na|mh)/,ordinal:function(e){var t=1===e?"d":e%10===2?"na":"mh";return e+t},week:{dow:1,doy:4}}),mr.defineLocale("gl",{months:"xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),monthsShort:"xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),weekdaysShort:"dom._lun._mar._mér._xov._ven._sáb.".split("_"),weekdaysMin:"do_lu_ma_mé_xo_ve_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"ás":"á")+"] LT"},nextDay:function(){return"[mañá "+(1!==this.hours()?"ás":"á")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"ás":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"á":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"ás":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(e){return 0===e.indexOf("un")?"n"+e:"en "+e},past:"hai %s",s:"uns segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}}),mr.defineLocale("he",{months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א_ב_ג_ד_ה_ו_ש".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[היום ב־]LT",nextDay:"[מחר ב־]LT",nextWeek:"dddd [בשעה] LT",lastDay:"[אתמול ב־]LT",lastWeek:"[ביום] dddd [האחרון בשעה] LT",sameElse:"L"},relativeTime:{future:"בעוד %s",past:"לפני %s",s:"מספר שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:function(e){return 2===e?"שעתיים":e+" שעות"},d:"יום",dd:function(e){return 2===e?"יומיים":e+" ימים"},M:"חודש",MM:function(e){return 2===e?"חודשיים":e+" חודשים"},y:"שנה",yy:function(e){return 2===e?"שנתיים":e%10===0&&10!==e?e+" שנה":e+" שנים"}},meridiemParse:/אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,isPM:function(e){return/^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)},meridiem:function(e,t,a){return 5>e?"לפנות בוקר":10>e?"בבוקר":12>e?a?'לפנה"צ':"לפני הצהריים":18>e?a?'אחה"צ':"אחרי הצהריים":"בערב"}}),{1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"}),Xr={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"},Kr=(mr.defineLocale("hi",{months:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm बजे",LTS:"A h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm बजे",LLLL:"dddd, D MMMM YYYY, A h:mm बजे"},calendar:{sameDay:"[आज] LT",nextDay:"[कल] LT",nextWeek:"dddd, LT",lastDay:"[कल] LT",lastWeek:"[पिछले] dddd, LT",sameElse:"L"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return Xr[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return qr[e]})},meridiemParse:/रात|सुबह|दोपहर|शाम/,meridiemHour:function(e,t){return 12===e&&(e=0),"रात"===t?4>e?e:e+12:"सुबह"===t?e:"दोपहर"===t?e>=10?e:e+12:"शाम"===t?e+12:void 0},meridiem:function(e,t,a){return 4>e?"रात":10>e?"सुबह":17>e?"दोपहर":20>e?"शाम":"रात"},week:{dow:0,doy:6}}),mr.defineLocale("hr",{months:{format:"siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),standalone:"siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")},monthsShort:"sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",m:Ss,mm:Ss,h:Ss,hh:Ss,d:"dan",dd:Ss,M:"mjesec",MM:Ss,y:"godinu",yy:Ss},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),"vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ")),Zr=(mr.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,t,a){return 12>e?a===!0?"de":"DE":a===!0?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return Hs.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return Hs.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:xs,m:xs,mm:xs,h:xs,hh:xs,d:xs,dd:xs,M:xs,MM:xs,y:xs,yy:xs},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),mr.defineLocale("hy-am",{months:{format:"հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),standalone:"հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")},monthsShort:"հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),weekdays:"կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),weekdaysShort:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),weekdaysMin:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY թ.",LLL:"D MMMM YYYY թ., HH:mm",LLLL:"dddd, D MMMM YYYY թ., HH:mm"},calendar:{sameDay:"[այսօր] LT",nextDay:"[վաղը] LT",lastDay:"[երեկ] LT",nextWeek:function(){return"dddd [օրը ժամը] LT"},lastWeek:function(){return"[անցած] dddd [օրը ժամը] LT"},sameElse:"L"},relativeTime:{future:"%s հետո",past:"%s առաջ",s:"մի քանի վայրկյան",m:"րոպե",mm:"%d րոպե",h:"ժամ",hh:"%d ժամ",d:"օր",dd:"%d օր",M:"ամիս",MM:"%d ամիս",y:"տարի",yy:"%d տարի"},meridiemParse:/գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,isPM:function(e){return/^(ցերեկվա|երեկոյան)$/.test(e)},meridiem:function(e){return 4>e?"գիշերվա":12>e?"առավոտվա":17>e?"ցերեկվա":"երեկոյան"},ordinalParse:/\d{1,2}|\d{1,2}-(ին|րդ)/,ordinal:function(e,t){switch(t){case"DDD":case"w":case"W":case"DDDo":return 1===e?e+"-ին":e+"-րդ";default:return e}},week:{dow:1,doy:7}}),mr.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(e,t){return 12===e&&(e=0),"pagi"===t?e:"siang"===t?e>=11?e:e+12:"sore"===t||"malam"===t?e+12:void 0},meridiem:function(e,t,a){return 11>e?"pagi":15>e?"siang":19>e?"sore":"malam";
},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),mr.defineLocale("is",{months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},calendar:{sameDay:"[í dag kl.] LT",nextDay:"[á morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[í gær kl.] LT",lastWeek:"[síðasta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:Cs,m:Cs,mm:Cs,h:"klukkustund",hh:Cs,d:Cs,dd:Cs,M:Cs,MM:Cs,y:Cs,yy:Cs},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),mr.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),weekdaysShort:"Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),weekdaysMin:"Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT"}},sameElse:"L"},relativeTime:{future:function(e){return(/^[0-9].+$/.test(e)?"tra":"in")+" "+e},past:"%s fa",s:"alcuni secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}}),mr.defineLocale("ja",{months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"Ah時m分",LTS:"Ah時m分s秒",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah時m分",LLLL:"YYYY年M月D日Ah時m分 dddd"},meridiemParse:/午前|午後/i,isPM:function(e){return"午後"===e},meridiem:function(e,t,a){return 12>e?"午前":"午後"},calendar:{sameDay:"[今日] LT",nextDay:"[明日] LT",nextWeek:"[来週]dddd LT",lastDay:"[昨日] LT",lastWeek:"[前週]dddd LT",sameElse:"L"},ordinalParse:/\d{1,2}日/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";default:return e}},relativeTime:{future:"%s後",past:"%s前",s:"数秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}}),mr.defineLocale("jv",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),weekdays:"Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),weekdaysShort:"Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/enjing|siyang|sonten|ndalu/,meridiemHour:function(e,t){return 12===e&&(e=0),"enjing"===t?e:"siyang"===t?e>=11?e:e+12:"sonten"===t||"ndalu"===t?e+12:void 0},meridiem:function(e,t,a){return 11>e?"enjing":15>e?"siyang":19>e?"sonten":"ndalu"},calendar:{sameDay:"[Dinten puniko pukul] LT",nextDay:"[Mbenjang pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kala wingi pukul] LT",lastWeek:"dddd [kepengker pukul] LT",sameElse:"L"},relativeTime:{future:"wonten ing %s",past:"%s ingkang kepengker",s:"sawetawis detik",m:"setunggal menit",mm:"%d menit",h:"setunggal jam",hh:"%d jam",d:"sedinten",dd:"%d dinten",M:"sewulan",MM:"%d wulan",y:"setaun",yy:"%d taun"},week:{dow:1,doy:7}}),mr.defineLocale("ka",{months:{standalone:"იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),format:"იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")},monthsShort:"იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),weekdays:{standalone:"კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),format:"კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),isFormat:/(წინა|შემდეგ)/},weekdaysShort:"კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),weekdaysMin:"კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[დღეს] LT[-ზე]",nextDay:"[ხვალ] LT[-ზე]",lastDay:"[გუშინ] LT[-ზე]",nextWeek:"[შემდეგ] dddd LT[-ზე]",lastWeek:"[წინა] dddd LT-ზე",sameElse:"L"},relativeTime:{future:function(e){return/(წამი|წუთი|საათი|წელი)/.test(e)?e.replace(/ი$/,"ში"):e+"ში"},past:function(e){return/(წამი|წუთი|საათი|დღე|თვე)/.test(e)?e.replace(/(ი|ე)$/,"ის წინ"):/წელი/.test(e)?e.replace(/წელი$/,"წლის წინ"):void 0},s:"რამდენიმე წამი",m:"წუთი",mm:"%d წუთი",h:"საათი",hh:"%d საათი",d:"დღე",dd:"%d დღე",M:"თვე",MM:"%d თვე",y:"წელი",yy:"%d წელი"},ordinalParse:/0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,ordinal:function(e){return 0===e?e:1===e?e+"-ლი":20>e||100>=e&&e%20===0||e%100===0?"მე-"+e:e+"-ე"},week:{dow:1,doy:7}}),{0:"-ші",1:"-ші",2:"-ші",3:"-ші",4:"-ші",5:"-ші",6:"-шы",7:"-ші",8:"-ші",9:"-шы",10:"-шы",20:"-шы",30:"-шы",40:"-шы",50:"-ші",60:"-шы",70:"-ші",80:"-ші",90:"-шы",100:"-ші"}),Qr=(mr.defineLocale("kk",{months:"қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),monthsShort:"қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),weekdays:"жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),weekdaysShort:"жек_дүй_сей_сәр_бей_жұм_сен".split("_"),weekdaysMin:"жк_дй_сй_ср_бй_жм_сн".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгін сағат] LT",nextDay:"[Ертең сағат] LT",nextWeek:"dddd [сағат] LT",lastDay:"[Кеше сағат] LT",lastWeek:"[Өткен аптаның] dddd [сағат] LT",sameElse:"L"},relativeTime:{future:"%s ішінде",past:"%s бұрын",s:"бірнеше секунд",m:"бір минут",mm:"%d минут",h:"бір сағат",hh:"%d сағат",d:"бір күн",dd:"%d күн",M:"бір ай",MM:"%d ай",y:"бір жыл",yy:"%d жыл"},ordinalParse:/\d{1,2}-(ші|шы)/,ordinal:function(e){var t=e%10,a=e>=100?100:null;return e+(Zr[e]||Zr[t]||Zr[a])},week:{dow:1,doy:7}}),mr.defineLocale("km",{months:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),monthsShort:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),weekdays:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysShort:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysMin:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[ថ្ងៃនេះ ម៉ោង] LT",nextDay:"[ស្អែក ម៉ោង] LT",nextWeek:"dddd [ម៉ោង] LT",lastDay:"[ម្សិលមិញ ម៉ោង] LT",lastWeek:"dddd [សប្តាហ៍មុន] [ម៉ោង] LT",sameElse:"L"},relativeTime:{future:"%sទៀត",past:"%sមុន",s:"ប៉ុន្មានវិនាទី",m:"មួយនាទី",mm:"%d នាទី",h:"មួយម៉ោង",hh:"%d ម៉ោង",d:"មួយថ្ងៃ",dd:"%d ថ្ងៃ",M:"មួយខែ",MM:"%d ខែ",y:"មួយឆ្នាំ",yy:"%d ឆ្នាំ"},week:{dow:1,doy:4}}),mr.defineLocale("ko",{months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),longDateFormat:{LT:"A h시 m분",LTS:"A h시 m분 s초",L:"YYYY.MM.DD",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h시 m분",LLLL:"YYYY년 MMMM D일 dddd A h시 m분"},calendar:{sameDay:"오늘 LT",nextDay:"내일 LT",nextWeek:"dddd LT",lastDay:"어제 LT",lastWeek:"지난주 dddd LT",sameElse:"L"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",ss:"%d초",m:"일분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"},ordinalParse:/\d{1,2}일/,ordinal:"%d일",meridiemParse:/오전|오후/,isPM:function(e){return"오후"===e},meridiem:function(e,t,a){return 12>e?"오전":"오후"}}),{0:"-чү",1:"-чи",2:"-чи",3:"-чү",4:"-чү",5:"-чи",6:"-чы",7:"-чи",8:"-чи",9:"-чу",10:"-чу",20:"-чы",30:"-чу",40:"-чы",50:"-чү",60:"-чы",70:"-чи",80:"-чи",90:"-чу",100:"-чү"}),eo=(mr.defineLocale("ky",{months:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),monthsShort:"янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),weekdays:"Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),weekdaysShort:"Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),weekdaysMin:"Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгүн саат] LT",nextDay:"[Эртең саат] LT",nextWeek:"dddd [саат] LT",lastDay:"[Кече саат] LT",lastWeek:"[Өткен аптанын] dddd [күнү] [саат] LT",sameElse:"L"},relativeTime:{future:"%s ичинде",past:"%s мурун",s:"бирнече секунд",m:"бир мүнөт",mm:"%d мүнөт",h:"бир саат",hh:"%d саат",d:"бир күн",dd:"%d күн",M:"бир ай",MM:"%d ай",y:"бир жыл",yy:"%d жыл"},ordinalParse:/\d{1,2}-(чи|чы|чү|чу)/,ordinal:function(e){var t=e%10,a=e>=100?100:null;return e+(Qr[e]||Qr[t]||Qr[a])},week:{dow:1,doy:7}}),mr.defineLocale("lb",{months:"Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mé_Dë_Më_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm [Auer]",LLLL:"dddd, D. MMMM YYYY H:mm [Auer]"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gëschter um] LT",lastWeek:function(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";default:return"[Leschte] dddd [um] LT"}}},relativeTime:{future:As,past:Es,s:"e puer Sekonnen",m:js,mm:"%d Minutten",h:js,hh:"%d Stonnen",d:js,dd:"%d Deeg",M:js,MM:"%d Méint",y:js,yy:"%d Joer"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),mr.defineLocale("lo",{months:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),monthsShort:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),weekdays:"ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysShort:"ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysMin:"ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"ວັນdddd D MMMM YYYY HH:mm"},meridiemParse:/ຕອນເຊົ້າ|ຕອນແລງ/,isPM:function(e){return"ຕອນແລງ"===e},meridiem:function(e,t,a){return 12>e?"ຕອນເຊົ້າ":"ຕອນແລງ"},calendar:{sameDay:"[ມື້ນີ້ເວລາ] LT",nextDay:"[ມື້ອື່ນເວລາ] LT",nextWeek:"[ວັນ]dddd[ໜ້າເວລາ] LT",lastDay:"[ມື້ວານນີ້ເວລາ] LT",lastWeek:"[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",sameElse:"L"},relativeTime:{future:"ອີກ %s",past:"%sຜ່ານມາ",s:"ບໍ່ເທົ່າໃດວິນາທີ",m:"1 ນາທີ",mm:"%d ນາທີ",h:"1 ຊົ່ວໂມງ",hh:"%d ຊົ່ວໂມງ",d:"1 ມື້",dd:"%d ມື້",M:"1 ເດືອນ",MM:"%d ເດືອນ",y:"1 ປີ",yy:"%d ປີ"},ordinalParse:/(ທີ່)\d{1,2}/,ordinal:function(e){return"ທີ່"+e}}),{m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"}),to=(mr.defineLocale("lt",{months:{format:"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),standalone:"sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),isFormat:/D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?|MMMM?(\[[^\[\]]*\]|\s+)+D[oD]?/},monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:{format:"sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),standalone:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),isFormat:/dddd HH:mm/},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:zs,m:Is,mm:Fs,h:Is,hh:Fs,d:Is,dd:Fs,M:Is,MM:Fs,y:Is,yy:Fs},ordinalParse:/\d{1,2}-oji/,ordinal:function(e){return e+"-oji"},week:{dow:1,doy:4}}),{m:"minūtes_minūtēm_minūte_minūtes".split("_"),mm:"minūtes_minūtēm_minūte_minūtes".split("_"),h:"stundas_stundām_stunda_stundas".split("_"),hh:"stundas_stundām_stunda_stundas".split("_"),d:"dienas_dienām_diena_dienas".split("_"),dd:"dienas_dienām_diena_dienas".split("_"),M:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),MM:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),y:"gada_gadiem_gads_gadi".split("_"),yy:"gada_gadiem_gads_gadi".split("_")}),ao=(mr.defineLocale("lv",{months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, HH:mm",LLLL:"YYYY. [gada] D. MMMM, dddd, HH:mm"},calendar:{sameDay:"[Šodien pulksten] LT",nextDay:"[Rīt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pagājušā] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"pēc %s",past:"pirms %s",s:Ns,m:Rs,mm:Gs,h:Rs,hh:Gs,d:Rs,dd:Gs,M:Rs,MM:Gs,y:Rs,yy:Gs},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),{words:{m:["jedan minut","jednog minuta"],mm:["minut","minuta","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mjesec","mjeseca","mjeseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,t){return 1===e?t[0]:e>=2&&4>=e?t[1]:t[2]},translate:function(e,t,a){var s=ao.words[a];return 1===a.length?t?s[0]:s[1]:e+" "+ao.correctGrammaticalCase(e,s)}}),so=(mr.defineLocale("me",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sjutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){var e=["[prošle] [nedjelje] [u] LT","[prošlog] [ponedjeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srijede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"];return e[this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"nekoliko sekundi",m:ao.translate,mm:ao.translate,h:ao.translate,hh:ao.translate,d:"dan",dd:ao.translate,M:"mjesec",MM:ao.translate,y:"godinu",yy:ao.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),mr.defineLocale("mi",{months:"Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),monthsShort:"Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),monthsRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,weekdays:"Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),weekdaysShort:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),weekdaysMin:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [i] HH:mm",LLLL:"dddd, D MMMM YYYY [i] HH:mm"},calendar:{sameDay:"[i teie mahana, i] LT",nextDay:"[apopo i] LT",nextWeek:"dddd [i] LT",lastDay:"[inanahi i] LT",lastWeek:"dddd [whakamutunga i] LT",sameElse:"L"},relativeTime:{future:"i roto i %s",past:"%s i mua",s:"te hēkona ruarua",m:"he meneti",mm:"%d meneti",h:"te haora",hh:"%d haora",d:"he ra",dd:"%d ra",M:"he marama",MM:"%d marama",y:"he tau",yy:"%d tau"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}}),mr.defineLocale("mk",{months:"јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),weekdaysMin:"нe_пo_вт_ср_че_пе_сa".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Денес во] LT",nextDay:"[Утре во] LT",nextWeek:"[Во] dddd [во] LT",lastDay:"[Вчера во] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Изминатата] dddd [во] LT";case 1:case 2:case 4:case 5:return"[Изминатиот] dddd [во] LT"}},sameElse:"L"},relativeTime:{future:"после %s",past:"пред %s",s:"неколку секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеци",y:"година",yy:"%d години"},ordinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(e){var t=e%10,a=e%100;return 0===e?e+"-ев":0===a?e+"-ен":a>10&&20>a?e+"-ти":1===t?e+"-ви":2===t?e+"-ри":7===t||8===t?e+"-ми":e+"-ти"},week:{dow:1,doy:7}}),mr.defineLocale("ml",{months:"ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),monthsShort:"ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),monthsParseExact:!0,weekdays:"ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),weekdaysShort:"ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),weekdaysMin:"ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),longDateFormat:{LT:"A h:mm -നു",LTS:"A h:mm:ss -നു",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm -നു",LLLL:"dddd, D MMMM YYYY, A h:mm -നു"},calendar:{sameDay:"[ഇന്ന്] LT",nextDay:"[നാളെ] LT",nextWeek:"dddd, LT",lastDay:"[ഇന്നലെ] LT",lastWeek:"[കഴിഞ്ഞ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s കഴിഞ്ഞ്",past:"%s മുൻപ്",s:"അൽപ നിമിഷങ്ങൾ",m:"ഒരു മിനിറ്റ്",mm:"%d മിനിറ്റ്",h:"ഒരു മണിക്കൂർ",hh:"%d മണിക്കൂർ",d:"ഒരു ദിവസം",dd:"%d ദിവസം",M:"ഒരു മാസം",MM:"%d മാസം",y:"ഒരു വർഷം",yy:"%d വർഷം"},meridiemParse:/രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,meridiemHour:function(e,t){return 12===e&&(e=0),"രാത്രി"===t&&e>=4||"ഉച്ച കഴിഞ്ഞ്"===t||"വൈകുന്നേരം"===t?e+12:e},meridiem:function(e,t,a){return 4>e?"രാത്രി":12>e?"രാവിലെ":17>e?"ഉച്ച കഴിഞ്ഞ്":20>e?"വൈകുന്നേരം":"രാത്രി"}}),{1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"}),no={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"},io=(mr.defineLocale("mr",{months:"जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),monthsShort:"जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm वाजता",LTS:"A h:mm:ss वाजता",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm वाजता",LLLL:"dddd, D MMMM YYYY, A h:mm वाजता"},calendar:{sameDay:"[आज] LT",nextDay:"[उद्या] LT",nextWeek:"dddd, LT",lastDay:"[काल] LT",lastWeek:"[मागील] dddd, LT",sameElse:"L"},relativeTime:{future:"%sमध्ये",past:"%sपूर्वी",s:Js,m:Js,mm:Js,h:Js,hh:Js,d:Js,dd:Js,M:Js,MM:Js,y:Js,yy:Js},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return no[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return so[e]})},meridiemParse:/रात्री|सकाळी|दुपारी|सायंकाळी/,meridiemHour:function(e,t){return 12===e&&(e=0),"रात्री"===t?4>e?e:e+12:"सकाळी"===t?e:"दुपारी"===t?e>=10?e:e+12:"सायंकाळी"===t?e+12:void 0},meridiem:function(e,t,a){return 4>e?"रात्री":10>e?"सकाळी":17>e?"दुपारी":20>e?"सायंकाळी":"रात्री"},week:{dow:0,doy:6}}),mr.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,t){return 12===e&&(e=0),"pagi"===t?e:"tengahari"===t?e>=11?e:e+12:"petang"===t||"malam"===t?e+12:void 0},meridiem:function(e,t,a){return 11>e?"pagi":15>e?"tengahari":19>e?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),mr.defineLocale("ms",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,t){return 12===e&&(e=0),"pagi"===t?e:"tengahari"===t?e>=11?e:e+12:"petang"===t||"malam"===t?e+12:void 0},meridiem:function(e,t,a){return 11>e?"pagi":15>e?"tengahari":19>e?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}}),{1:"၁",2:"၂",3:"၃",4:"၄",5:"၅",6:"၆",7:"၇",8:"၈",9:"၉",0:"၀"}),ro={"၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","၀":"0"},oo=(mr.defineLocale("my",{months:"ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),monthsShort:"ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),weekdays:"တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),weekdaysShort:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),weekdaysMin:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ယနေ.] LT [မှာ]",nextDay:"[မနက်ဖြန်] LT [မှာ]",nextWeek:"dddd LT [မှာ]",lastDay:"[မနေ.က] LT [မှာ]",lastWeek:"[ပြီးခဲ့သော] dddd LT [မှာ]",sameElse:"L"},relativeTime:{future:"လာမည့် %s မှာ",past:"လွန်ခဲ့သော %s က",s:"စက္ကန်.အနည်းငယ်",m:"တစ်မိနစ်",mm:"%d မိနစ်",h:"တစ်နာရီ",hh:"%d နာရီ",d:"တစ်ရက်",dd:"%d ရက်",M:"တစ်လ",MM:"%d လ",y:"တစ်နှစ်",yy:"%d နှစ်"},preparse:function(e){return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g,function(e){return ro[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return io[e]})},week:{dow:1,doy:4}}),mr.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:!0,weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),{1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"}),lo={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"},uo=(mr.defineLocale("ne",{months:"जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),monthsShort:"जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),monthsParseExact:!0,weekdays:"आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),weekdaysShort:"आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),weekdaysMin:"आ._सो._मं._बु._बि._शु._श.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"Aको h:mm बजे",LTS:"Aको h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, Aको h:mm बजे",LLLL:"dddd, D MMMM YYYY, Aको h:mm बजे"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return lo[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return oo[e]})},meridiemParse:/राति|बिहान|दिउँसो|साँझ/,meridiemHour:function(e,t){return 12===e&&(e=0),"राति"===t?4>e?e:e+12:"बिहान"===t?e:"दिउँसो"===t?e>=10?e:e+12:"साँझ"===t?e+12:void 0},meridiem:function(e,t,a){return 3>e?"राति":12>e?"बिहान":16>e?"दिउँसो":20>e?"साँझ":"राति"},calendar:{sameDay:"[आज] LT",nextDay:"[भोलि] LT",nextWeek:"[आउँदो] dddd[,] LT",lastDay:"[हिजो] LT",lastWeek:"[गएको] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%sमा",past:"%s अगाडि",s:"केही क्षण",m:"एक मिनेट",mm:"%d मिनेट",h:"एक घण्टा",hh:"%d घण्टा",d:"एक दिन",dd:"%d दिन",M:"एक महिना",MM:"%d महिना",y:"एक बर्ष",yy:"%d बर्ष"},week:{dow:0,doy:6}}),"jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")),mo="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),_o=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],co=/^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,ho=(mr.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,t){return/-MMM-/.test(t)?mo[e.month()]:uo[e.month()]},monthsRegex:co,monthsShortRegex:co,monthsStrictRegex:/^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:_o,longMonthsParse:_o,shortMonthsParse:_o,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},ordinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}}),mr.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_mån_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_må_ty_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I går klokka] LT",lastWeek:"[Føregåande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s sidan",s:"nokre sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein månad",MM:"%d månader",y:"eit år",yy:"%d år"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),{1:"੧",2:"੨",3:"੩",4:"੪",5:"੫",6:"੬",7:"੭",8:"੮",9:"੯",0:"੦"}),po={"੧":"1","੨":"2","੩":"3","੪":"4","੫":"5","੬":"6","੭":"7","੮":"8","੯":"9","੦":"0"},fo=(mr.defineLocale("pa-in",{months:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),monthsShort:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),weekdays:"ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),weekdaysShort:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),weekdaysMin:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),longDateFormat:{LT:"A h:mm ਵਜੇ",LTS:"A h:mm:ss ਵਜੇ",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm ਵਜੇ",LLLL:"dddd, D MMMM YYYY, A h:mm ਵਜੇ"},calendar:{sameDay:"[ਅਜ] LT",nextDay:"[ਕਲ] LT",nextWeek:"dddd, LT",lastDay:"[ਕਲ] LT",lastWeek:"[ਪਿਛਲੇ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ਵਿੱਚ",past:"%s ਪਿਛਲੇ",s:"ਕੁਝ ਸਕਿੰਟ",m:"ਇਕ ਮਿੰਟ",mm:"%d ਮਿੰਟ",h:"ਇੱਕ ਘੰਟਾ",hh:"%d ਘੰਟੇ",d:"ਇੱਕ ਦਿਨ",dd:"%d ਦਿਨ",M:"ਇੱਕ ਮਹੀਨਾ",MM:"%d ਮਹੀਨੇ",y:"ਇੱਕ ਸਾਲ",yy:"%d ਸਾਲ"},preparse:function(e){return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g,function(e){return po[e];
})},postformat:function(e){return e.replace(/\d/g,function(e){return ho[e]})},meridiemParse:/ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,meridiemHour:function(e,t){return 12===e&&(e=0),"ਰਾਤ"===t?4>e?e:e+12:"ਸਵੇਰ"===t?e:"ਦੁਪਹਿਰ"===t?e>=10?e:e+12:"ਸ਼ਾਮ"===t?e+12:void 0},meridiem:function(e,t,a){return 4>e?"ਰਾਤ":10>e?"ਸਵੇਰ":17>e?"ਦੁਪਹਿਰ":20>e?"ਸ਼ਾਮ":"ਰਾਤ"},week:{dow:0,doy:6}}),"styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_")),Mo="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"),yo=(mr.defineLocale("pl",{months:function(e,t){return""===t?"("+Mo[e.month()]+"|"+fo[e.month()]+")":/D MMMM/.test(t)?Mo[e.month()]:fo[e.month()]},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"nie_pon_wt_śr_czw_pt_sb".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:"[W] dddd [o] LT",lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",m:Us,mm:Us,h:Us,hh:Us,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:Us,y:"rok",yy:Us},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),mr.defineLocale("pt-br",{months:"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"%s atrás",s:"poucos segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº"}),mr.defineLocale("pt",{months:"Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},ordinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}}),mr.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mâine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s în urmă",s:"câteva secunde",m:"un minut",mm:qs,h:"o oră",hh:qs,d:"o zi",dd:qs,M:"o lună",MM:qs,y:"un an",yy:qs},week:{dow:1,doy:7}}),[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i]),go=(mr.defineLocale("ru",{months:{format:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),standalone:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")},monthsShort:{format:"янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),standalone:"янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")},weekdays:{standalone:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),format:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),isFormat:/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/},weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:yo,longMonthsParse:yo,shortMonthsParse:yo,monthsRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsShortRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsStrictRegex:/^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,monthsShortStrictRegex:/^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сегодня в] LT",nextDay:"[Завтра в] LT",lastDay:"[Вчера в] LT",nextWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT";switch(this.day()){case 0:return"[В следующее] dddd [в] LT";case 1:case 2:case 4:return"[В следующий] dddd [в] LT";case 3:case 5:case 6:return"[В следующую] dddd [в] LT"}},lastWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd [в] LT":"[В] dddd [в] LT";switch(this.day()){case 0:return"[В прошлое] dddd [в] LT";case 1:case 2:case 4:return"[В прошлый] dddd [в] LT";case 3:case 5:case 6:return"[В прошлую] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:Ks,mm:Ks,h:"час",hh:Ks,d:"день",dd:Ks,M:"месяц",MM:Ks,y:"год",yy:Ks},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(e){return/^(дня|вечера)$/.test(e)},meridiem:function(e,t,a){return 4>e?"ночи":12>e?"утра":17>e?"дня":"вечера"},ordinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":return e+"-й";case"D":return e+"-го";case"w":case"W":return e+"-я";default:return e}},week:{dow:1,doy:7}}),mr.defineLocale("se",{months:"ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),monthsShort:"ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),weekdays:"sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),weekdaysShort:"sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),weekdaysMin:"s_v_m_g_d_b_L".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"MMMM D. [b.] YYYY",LLL:"MMMM D. [b.] YYYY [ti.] HH:mm",LLLL:"dddd, MMMM D. [b.] YYYY [ti.] HH:mm"},calendar:{sameDay:"[otne ti] LT",nextDay:"[ihttin ti] LT",nextWeek:"dddd [ti] LT",lastDay:"[ikte ti] LT",lastWeek:"[ovddit] dddd [ti] LT",sameElse:"L"},relativeTime:{future:"%s geažes",past:"maŋit %s",s:"moadde sekunddat",m:"okta minuhta",mm:"%d minuhtat",h:"okta diimmu",hh:"%d diimmut",d:"okta beaivi",dd:"%d beaivvit",M:"okta mánnu",MM:"%d mánut",y:"okta jahki",yy:"%d jagit"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),mr.defineLocale("si",{months:"ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),monthsShort:"ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),weekdays:"ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),weekdaysShort:"ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),weekdaysMin:"ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"a h:mm",LTS:"a h:mm:ss",L:"YYYY/MM/DD",LL:"YYYY MMMM D",LLL:"YYYY MMMM D, a h:mm",LLLL:"YYYY MMMM D [වැනි] dddd, a h:mm:ss"},calendar:{sameDay:"[අද] LT[ට]",nextDay:"[හෙට] LT[ට]",nextWeek:"dddd LT[ට]",lastDay:"[ඊයේ] LT[ට]",lastWeek:"[පසුගිය] dddd LT[ට]",sameElse:"L"},relativeTime:{future:"%sකින්",past:"%sකට පෙර",s:"තත්පර කිහිපය",m:"මිනිත්තුව",mm:"මිනිත්තු %d",h:"පැය",hh:"පැය %d",d:"දිනය",dd:"දින %d",M:"මාසය",MM:"මාස %d",y:"වසර",yy:"වසර %d"},ordinalParse:/\d{1,2} වැනි/,ordinal:function(e){return e+" වැනි"},meridiemParse:/පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,isPM:function(e){return"ප.ව."===e||"පස් වරු"===e},meridiem:function(e,t,a){return e>11?a?"ප.ව.":"පස් වරු":a?"පෙ.ව.":"පෙර වරු"}}),"január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_")),Lo="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),Yo=(mr.defineLocale("sk",{months:go,monthsShort:Lo,weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:Qs,m:Qs,mm:Qs,h:Qs,hh:Qs,d:Qs,dd:Qs,M:Qs,MM:Qs,y:Qs,yy:Qs},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),mr.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[včeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prejšnjo] [nedeljo] [ob] LT";case 3:return"[prejšnjo] [sredo] [ob] LT";case 6:return"[prejšnjo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"čez %s",past:"pred %s",s:en,m:en,mm:en,h:en,hh:en,d:en,dd:en,M:en,MM:en,y:en,yy:en},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),mr.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),weekdays:"E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),weekdaysShort:"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_Më_E_P_Sh".split("_"),weekdaysParseExact:!0,meridiemParse:/PD|MD/,isPM:function(e){return"M"===e.charAt(0)},meridiem:function(e,t,a){return 12>e?"PD":"MD"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Sot në] LT",nextDay:"[Nesër në] LT",nextWeek:"dddd [në] LT",lastDay:"[Dje në] LT",lastWeek:"dddd [e kaluar në] LT",sameElse:"L"},relativeTime:{future:"në %s",past:"%s më parë",s:"disa sekonda",m:"një minutë",mm:"%d minuta",h:"një orë",hh:"%d orë",d:"një ditë",dd:"%d ditë",M:"një muaj",MM:"%d muaj",y:"një vit",yy:"%d vite"},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),{words:{m:["један минут","једне минуте"],mm:["минут","минуте","минута"],h:["један сат","једног сата"],hh:["сат","сата","сати"],dd:["дан","дана","дана"],MM:["месец","месеца","месеци"],yy:["година","године","година"]},correctGrammaticalCase:function(e,t){return 1===e?t[0]:e>=2&&4>=e?t[1]:t[2]},translate:function(e,t,a){var s=Yo.words[a];return 1===a.length?t?s[0]:s[1]:e+" "+Yo.correctGrammaticalCase(e,s)}}),vo=(mr.defineLocale("sr-cyrl",{months:"јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),monthsShort:"јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),monthsParseExact:!0,weekdays:"недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),weekdaysShort:"нед._пон._уто._сре._чет._пет._суб.".split("_"),weekdaysMin:"не_по_ут_ср_че_пе_су".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[данас у] LT",nextDay:"[сутра у] LT",nextWeek:function(){switch(this.day()){case 0:return"[у] [недељу] [у] LT";case 3:return"[у] [среду] [у] LT";case 6:return"[у] [суботу] [у] LT";case 1:case 2:case 4:case 5:return"[у] dddd [у] LT"}},lastDay:"[јуче у] LT",lastWeek:function(){var e=["[прошле] [недеље] [у] LT","[прошлог] [понедељка] [у] LT","[прошлог] [уторка] [у] LT","[прошле] [среде] [у] LT","[прошлог] [четвртка] [у] LT","[прошлог] [петка] [у] LT","[прошле] [суботе] [у] LT"];return e[this.day()]},sameElse:"L"},relativeTime:{future:"за %s",past:"пре %s",s:"неколико секунди",m:Yo.translate,mm:Yo.translate,h:Yo.translate,hh:Yo.translate,d:"дан",dd:Yo.translate,M:"месец",MM:Yo.translate,y:"годину",yy:Yo.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),{words:{m:["jedan minut","jedne minute"],mm:["minut","minute","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,t){return 1===e?t[0]:e>=2&&4>=e?t[1]:t[2]},translate:function(e,t,a){var s=vo.words[a];return 1===a.length?t?s[0]:s[1]:e+" "+vo.correctGrammaticalCase(e,s)}}),wo=(mr.defineLocale("sr",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sre._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";case 3:return"[u] [sredu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){var e=["[prošle] [nedelje] [u] LT","[prošlog] [ponedeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"];return e[this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:vo.translate,mm:vo.translate,h:vo.translate,hh:vo.translate,d:"dan",dd:vo.translate,M:"mesec",MM:vo.translate,y:"godinu",yy:vo.translate},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}}),mr.defineLocale("ss",{months:"Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),monthsShort:"Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),weekdays:"Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),weekdaysShort:"Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),weekdaysMin:"Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Namuhla nga] LT",nextDay:"[Kusasa nga] LT",nextWeek:"dddd [nga] LT",lastDay:"[Itolo nga] LT",lastWeek:"dddd [leliphelile] [nga] LT",sameElse:"L"},relativeTime:{future:"nga %s",past:"wenteka nga %s",s:"emizuzwana lomcane",m:"umzuzu",mm:"%d emizuzu",h:"lihora",hh:"%d emahora",d:"lilanga",dd:"%d emalanga",M:"inyanga",MM:"%d tinyanga",y:"umnyaka",yy:"%d iminyaka"},meridiemParse:/ekuseni|emini|entsambama|ebusuku/,meridiem:function(e,t,a){return 11>e?"ekuseni":15>e?"emini":19>e?"entsambama":"ebusuku"},meridiemHour:function(e,t){return 12===e&&(e=0),"ekuseni"===t?e:"emini"===t?e>=11?e:e+12:"entsambama"===t||"ebusuku"===t?0===e?0:e+12:void 0},ordinalParse:/\d{1,2}/,ordinal:"%d",week:{dow:1,doy:4}}),mr.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Igår] LT",nextWeek:"[På] dddd LT",lastWeek:"[I] dddd[s] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"},ordinalParse:/\d{1,2}(e|a)/,ordinal:function(e){var t=e%10,a=1===~~(e%100/10)?"e":1===t?"a":2===t?"a":"e";return e+a},week:{dow:1,doy:4}}),mr.defineLocale("sw",{months:"Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),weekdays:"Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),weekdaysShort:"Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),weekdaysMin:"J2_J3_J4_J5_Al_Ij_J1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[leo saa] LT",nextDay:"[kesho saa] LT",nextWeek:"[wiki ijayo] dddd [saat] LT",lastDay:"[jana] LT",lastWeek:"[wiki iliyopita] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s baadaye",past:"tokea %s",s:"hivi punde",m:"dakika moja",mm:"dakika %d",h:"saa limoja",hh:"masaa %d",d:"siku moja",dd:"masiku %d",M:"mwezi mmoja",MM:"miezi %d",y:"mwaka mmoja",yy:"miaka %d"},week:{dow:1,doy:7}}),{1:"௧",2:"௨",3:"௩",4:"௪",5:"௫",6:"௬",7:"௭",8:"௮",9:"௯",0:"௦"}),ko={"௧":"1","௨":"2","௩":"3","௪":"4","௫":"5","௬":"6","௭":"7","௮":"8","௯":"9","௦":"0"},Do=(mr.defineLocale("ta",{months:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),monthsShort:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),weekdays:"ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),weekdaysShort:"ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),weekdaysMin:"ஞா_தி_செ_பு_வி_வெ_ச".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, HH:mm",LLLL:"dddd, D MMMM YYYY, HH:mm"},calendar:{sameDay:"[இன்று] LT",nextDay:"[நாளை] LT",nextWeek:"dddd, LT",lastDay:"[நேற்று] LT",lastWeek:"[கடந்த வாரம்] dddd, LT",sameElse:"L"},relativeTime:{future:"%s இல்",past:"%s முன்",s:"ஒரு சில விநாடிகள்",m:"ஒரு நிமிடம்",mm:"%d நிமிடங்கள்",h:"ஒரு மணி நேரம்",hh:"%d மணி நேரம்",d:"ஒரு நாள்",dd:"%d நாட்கள்",M:"ஒரு மாதம்",MM:"%d மாதங்கள்",y:"ஒரு வருடம்",yy:"%d ஆண்டுகள்"},ordinalParse:/\d{1,2}வது/,ordinal:function(e){return e+"வது"},preparse:function(e){return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g,function(e){return ko[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return wo[e]})},meridiemParse:/யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,meridiem:function(e,t,a){return 2>e?" யாமம்":6>e?" வைகறை":10>e?" காலை":14>e?" நண்பகல்":18>e?" எற்பாடு":22>e?" மாலை":" யாமம்"},meridiemHour:function(e,t){return 12===e&&(e=0),"யாமம்"===t?2>e?e:e+12:"வைகறை"===t||"காலை"===t?e:"நண்பகல்"===t&&e>=10?e:e+12},week:{dow:0,doy:6}}),mr.defineLocale("te",{months:"జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),monthsShort:"జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),monthsParseExact:!0,weekdays:"ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),weekdaysShort:"ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),weekdaysMin:"ఆ_సో_మం_బు_గు_శు_శ".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[నేడు] LT",nextDay:"[రేపు] LT",nextWeek:"dddd, LT",lastDay:"[నిన్న] LT",lastWeek:"[గత] dddd, LT",sameElse:"L"},relativeTime:{future:"%s లో",past:"%s క్రితం",s:"కొన్ని క్షణాలు",m:"ఒక నిమిషం",mm:"%d నిమిషాలు",h:"ఒక గంట",hh:"%d గంటలు",d:"ఒక రోజు",dd:"%d రోజులు",M:"ఒక నెల",MM:"%d నెలలు",y:"ఒక సంవత్సరం",yy:"%d సంవత్సరాలు"},ordinalParse:/\d{1,2}వ/,ordinal:"%dవ",meridiemParse:/రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,meridiemHour:function(e,t){return 12===e&&(e=0),"రాత్రి"===t?4>e?e:e+12:"ఉదయం"===t?e:"మధ్యాహ్నం"===t?e>=10?e:e+12:"సాయంత్రం"===t?e+12:void 0},meridiem:function(e,t,a){return 4>e?"రాత్రి":10>e?"ఉదయం":17>e?"మధ్యాహ్నం":20>e?"సాయంత్రం":"రాత్రి"},week:{dow:0,doy:6}}),mr.defineLocale("th",{months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),monthsParseExact:!0,weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY/MM/DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา H:mm",LLLL:"วันddddที่ D MMMM YYYY เวลา H:mm"},meridiemParse:/ก่อนเที่ยง|หลังเที่ยง/,isPM:function(e){return"หลังเที่ยง"===e},meridiem:function(e,t,a){return 12>e?"ก่อนเที่ยง":"หลังเที่ยง"},calendar:{sameDay:"[วันนี้ เวลา] LT",nextDay:"[พรุ่งนี้ เวลา] LT",nextWeek:"dddd[หน้า เวลา] LT",lastDay:"[เมื่อวานนี้ เวลา] LT",lastWeek:"[วัน]dddd[ที่แล้ว เวลา] LT",sameElse:"L"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"}}),mr.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY HH:mm",LLLL:"dddd, MMMM DD, YYYY HH:mm"},calendar:{sameDay:"[Ngayon sa] LT",nextDay:"[Bukas sa] LT",nextWeek:"dddd [sa] LT",lastDay:"[Kahapon sa] LT",lastWeek:"dddd [huling linggo] LT",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},ordinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}}),"pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_")),To=(mr.defineLocale("tlh",{months:"tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),monthsShort:"jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),monthsParseExact:!0,weekdays:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysShort:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysMin:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[DaHjaj] LT",nextDay:"[wa’leS] LT",nextWeek:"LLL",lastDay:"[wa’Hu’] LT",lastWeek:"LLL",sameElse:"L"},relativeTime:{future:tn,past:an,s:"puS lup",m:"wa’ tup",mm:sn,h:"wa’ rep",hh:sn,d:"wa’ jaj",dd:sn,M:"wa’ jar",MM:sn,y:"wa’ DIS",yy:sn},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),{1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'üncü",4:"'üncü",100:"'üncü",6:"'ncı",9:"'uncu",10:"'uncu",30:"'uncu",60:"'ıncı",90:"'ıncı"}),bo=(mr.defineLocale("tr",{months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[yarın saat] LT",nextWeek:"[haftaya] dddd [saat] LT",lastDay:"[dün] LT",lastWeek:"[geçen hafta] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},ordinalParse:/\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,ordinal:function(e){if(0===e)return e+"'ıncı";var t=e%10,a=e%100-t,s=e>=100?100:null;return e+(To[t]||To[a]||To[s])},week:{dow:1,doy:7}}),mr.defineLocale("tzl",{months:"Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),monthsShort:"Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),weekdays:"Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),weekdaysShort:"Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),weekdaysMin:"Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM [dallas] YYYY",LLL:"D. MMMM [dallas] YYYY HH.mm",LLLL:"dddd, [li] D. MMMM [dallas] YYYY HH.mm"},meridiemParse:/d\'o|d\'a/i,isPM:function(e){return"d'o"===e.toLowerCase()},meridiem:function(e,t,a){return e>11?a?"d'o":"D'O":a?"d'a":"D'A"},calendar:{sameDay:"[oxhi à] LT",nextDay:"[demà à] LT",nextWeek:"dddd [à] LT",lastDay:"[ieiri à] LT",lastWeek:"[sür el] dddd [lasteu à] LT",sameElse:"L"},relativeTime:{future:"osprei %s",past:"ja%s",s:rn,m:rn,mm:rn,h:rn,hh:rn,d:rn,dd:rn,M:rn,MM:rn,y:rn,yy:rn},ordinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}}),mr.defineLocale("tzm-latn",{months:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",m:"minuḍ",mm:"%d minuḍ",h:"saɛa",hh:"%d tassaɛin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,doy:12}}),mr.defineLocale("tzm",{months:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),monthsShort:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),weekdays:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysShort:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysMin:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ⴰⵙⴷⵅ ⴴ] LT",nextDay:"[ⴰⵙⴽⴰ ⴴ] LT",nextWeek:"dddd [ⴴ] LT",lastDay:"[ⴰⵚⴰⵏⵜ ⴴ] LT",lastWeek:"dddd [ⴴ] LT",sameElse:"L"},relativeTime:{future:"ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",past:"ⵢⴰⵏ %s",s:"ⵉⵎⵉⴽ",m:"ⵎⵉⵏⵓⴺ",mm:"%d ⵎⵉⵏⵓⴺ",h:"ⵙⴰⵄⴰ",hh:"%d ⵜⴰⵙⵙⴰⵄⵉⵏ",d:"ⴰⵙⵙ",dd:"%d oⵙⵙⴰⵏ",M:"ⴰⵢoⵓⵔ",MM:"%d ⵉⵢⵢⵉⵔⵏ",y:"ⴰⵙⴳⴰⵙ",yy:"%d ⵉⵙⴳⴰⵙⵏ"},week:{dow:6,doy:12}}),mr.defineLocale("uk",{months:{format:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),standalone:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")},monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:ln,weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"},calendar:{sameDay:un("[Сьогодні "),nextDay:un("[Завтра "),lastDay:un("[Вчора "),nextWeek:un("[У] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return un("[Минулої] dddd [").call(this);case 1:case 2:case 4:return un("[Минулого] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",m:dn,mm:dn,h:"годину",hh:dn,d:"день",dd:dn,M:"місяць",MM:dn,y:"рік",yy:dn},meridiemParse:/ночі|ранку|дня|вечора/,isPM:function(e){return/^(дня|вечора)$/.test(e)},meridiem:function(e,t,a){return 4>e?"ночі":12>e?"ранку":17>e?"дня":"вечора"},ordinalParse:/\d{1,2}-(й|го)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":case"w":case"W":return e+"-й";case"D":return e+"-го";default:return e}},week:{dow:1,doy:7}}),mr.defineLocale("uz",{months:"январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),weekdaysShort:"Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
weekdaysMin:"Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Бугун соат] LT [да]",nextDay:"[Эртага] LT [да]",nextWeek:"dddd [куни соат] LT [да]",lastDay:"[Кеча соат] LT [да]",lastWeek:"[Утган] dddd [куни соат] LT [да]",sameElse:"L"},relativeTime:{future:"Якин %s ичида",past:"Бир неча %s олдин",s:"фурсат",m:"бир дакика",mm:"%d дакика",h:"бир соат",hh:"%d соат",d:"бир кун",dd:"%d кун",M:"бир ой",MM:"%d ой",y:"бир йил",yy:"%d йил"},week:{dow:1,doy:7}}),mr.defineLocale("vi",{months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),monthsParseExact:!0,weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysParseExact:!0,meridiemParse:/sa|ch/i,isPM:function(e){return/^ch$/i.test(e)},meridiem:function(e,t,a){return 12>e?a?"sa":"SA":a?"ch":"CH"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd, D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[Hôm nay lúc] LT",nextDay:"[Ngày mai lúc] LT",nextWeek:"dddd [tuần tới lúc] LT",lastDay:"[Hôm qua lúc] LT",lastWeek:"dddd [tuần rồi lúc] LT",sameElse:"L"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"},ordinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}}),mr.defineLocale("x-pseudo",{months:"J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),monthsShort:"J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),monthsParseExact:!0,weekdays:"S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),weekdaysShort:"S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),weekdaysMin:"S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[T~ódá~ý át] LT",nextDay:"[T~ómó~rró~w át] LT",nextWeek:"dddd [át] LT",lastDay:"[Ý~ést~érdá~ý át] LT",lastWeek:"[L~ást] dddd [át] LT",sameElse:"L"},relativeTime:{future:"í~ñ %s",past:"%s á~gó",s:"á ~féw ~sécó~ñds",m:"á ~míñ~úté",mm:"%d m~íñú~tés",h:"á~ñ hó~úr",hh:"%d h~óúrs",d:"á ~dáý",dd:"%d d~áýs",M:"á ~móñ~th",MM:"%d m~óñt~hs",y:"á ~ýéár",yy:"%d ý~éárs"},ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,a=1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+a},week:{dow:1,doy:4}}),mr.defineLocale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah点mm分",LTS:"Ah点m分s秒",L:"YYYY-MM-DD",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日Ah点mm分",LLLL:"YYYY年MMMD日ddddAh点mm分",l:"YYYY-MM-DD",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日Ah点mm分",llll:"YYYY年MMMD日ddddAh点mm分"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"下午"===t||"晚上"===t?e+12:e>=11?e:e+12},meridiem:function(e,t,a){var s=100*e+t;return 600>s?"凌晨":900>s?"早上":1130>s?"上午":1230>s?"中午":1800>s?"下午":"晚上"},calendar:{sameDay:function(){return 0===this.minutes()?"[今天]Ah[点整]":"[今天]LT"},nextDay:function(){return 0===this.minutes()?"[明天]Ah[点整]":"[明天]LT"},lastDay:function(){return 0===this.minutes()?"[昨天]Ah[点整]":"[昨天]LT"},nextWeek:function(){var e,t;return e=mr().startOf("week"),t=this.diff(e,"days")>=7?"[下]":"[本]",0===this.minutes()?t+"dddAh点整":t+"dddAh点mm"},lastWeek:function(){var e,t;return e=mr().startOf("week"),t=this.unix()<e.unix()?"[上]":"[本]",0===this.minutes()?t+"dddAh点整":t+"dddAh点mm"},sameElse:"LL"},ordinalParse:/\d{1,2}(日|月|周)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"周";default:return e}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},week:{dow:1,doy:4}}),mr.defineLocale("zh-hk",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah點mm分",LTS:"Ah點m分s秒",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日Ah點mm分",LLLL:"YYYY年MMMD日ddddAh點mm分",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日Ah點mm分",llll:"YYYY年MMMD日ddddAh點mm分"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"中午"===t?e>=11?e:e+12:"下午"===t||"晚上"===t?e+12:void 0},meridiem:function(e,t,a){var s=100*e+t;return 600>s?"凌晨":900>s?"早上":1130>s?"上午":1230>s?"中午":1800>s?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},ordinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}}),mr.defineLocale("zh-tw",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah點mm分",LTS:"Ah點m分s秒",L:"YYYY年MMMD日",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日Ah點mm分",LLLL:"YYYY年MMMD日ddddAh點mm分",l:"YYYY年MMMD日",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日Ah點mm分",llll:"YYYY年MMMD日ddddAh點mm分"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"中午"===t?e>=11?e:e+12:"下午"===t||"晚上"===t?e+12:void 0},meridiem:function(e,t,a){var s=100*e+t;return 600>s?"凌晨":900>s?"早上":1130>s?"上午":1230>s?"中午":1800>s?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},ordinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}}),mr);return bo.locale("en"),bo})},function(e,t,a){var s,n;!function(i,r){s=[a(10),a(3),t],n=function(e,t,a){i.daterangepicker=r(i,a,e,t)}.apply(t,s),!(void 0!==n&&(e.exports=n))}(this||{},function(e,t,a,s){var n=function(e,t,n){if(this.parentEl="body",this.element=s(e),this.startDate=a().startOf("day"),this.endDate=a().endOf("day"),this.minDate=!1,this.maxDate=!1,this.dateLimit=!1,this.autoApply=!1,this.singleDatePicker=!1,this.showDropdowns=!1,this.showWeekNumbers=!1,this.timePicker=!1,this.timePicker24Hour=!1,this.timePickerIncrement=1,this.timePickerSeconds=!1,this.linkedCalendars=!0,this.autoUpdateInput=!0,this.ranges={},this.rangesHour=[],this.opens="right",this.element.hasClass("pull-right")&&(this.opens="left"),this.drops="down",this.element.hasClass("dropup")&&(this.drops="up"),this.buttonClasses="btn btn-sm",this.applyClass="btn-success",this.cancelClass="btn-default",this.locale={format:"MM/DD/YYYY",separator:" - ",applyLabel:"确定",cancelLabel:"取消",weekLabel:"W",customRangeLabel:"Custom Range",daysOfWeek:a.weekdaysMin(),monthNames:a.monthsShort(),firstDay:a.localeData().firstDayOfWeek()},this.callback=function(){},this.isShowing=!1,this.leftCalendar={},this.rightCalendar={},"object"==typeof t&&null!==t||(t={}),t=s.extend(this.element.data(),t),"string"!=typeof t.template&&(t.template='<div class="daterangepicker dropdown-menu"><div class="calendar left"><div class="daterangepicker_input"><input class="input-mini" type="text" name="daterangepicker_start" value="" /><i class="fa fa-calendar glyphicon glyphicon-calendar"></i><div class="calendar-time"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"></div></div><div class="calendar right"><div class="daterangepicker_input"><input class="input-mini" type="text" name="daterangepicker_end" value="" /><i class="fa fa-calendar glyphicon glyphicon-calendar"></i><div class="calendar-time"><div></div><i class="fa fa-clock-o glyphicon glyphicon-time"></i></div></div><div class="calendar-table"></div></div><div class="ranges"><div class="range_inputs"><button class="applyBtn" disabled="disabled" type="button"></button> <button class="cancelBtn" type="button"></button></div></div></div>'),this.parentEl=s(t.parentEl&&s(t.parentEl).length?t.parentEl:this.parentEl),this.container=s(t.template).appendTo(this.parentEl),"object"==typeof t.locale&&("string"==typeof t.locale.format&&(this.locale.format=t.locale.format),"string"==typeof t.locale.separator&&(this.locale.separator=t.locale.separator),"object"==typeof t.locale.daysOfWeek&&(this.locale.daysOfWeek=t.locale.daysOfWeek.slice()),"object"==typeof t.locale.monthNames&&(this.locale.monthNames=t.locale.monthNames.slice()),"number"==typeof t.locale.firstDay&&(this.locale.firstDay=t.locale.firstDay),"string"==typeof t.locale.applyLabel&&(this.locale.applyLabel=t.locale.applyLabel),"string"==typeof t.locale.cancelLabel&&(this.locale.cancelLabel=t.locale.cancelLabel),"string"==typeof t.locale.weekLabel&&(this.locale.weekLabel=t.locale.weekLabel),"string"==typeof t.locale.customRangeLabel&&(this.locale.customRangeLabel=t.locale.customRangeLabel)),"string"==typeof t.startDate&&(this.startDate=a(t.startDate,this.locale.format)),"string"==typeof t.endDate&&(this.endDate=a(t.endDate,this.locale.format)),"string"==typeof t.minDate&&(this.minDate=a(t.minDate,this.locale.format)),"string"==typeof t.maxDate&&(this.maxDate=a(t.maxDate,this.locale.format)),"object"==typeof t.startDate&&(this.startDate=a(t.startDate)),"object"==typeof t.endDate&&(this.endDate=a(t.endDate)),"object"==typeof t.minDate&&(this.minDate=a(t.minDate)),"object"==typeof t.maxDate&&(this.maxDate=a(t.maxDate)),this.minDate&&this.startDate.isBefore(this.minDate)&&(this.startDate=this.minDate.clone()),this.maxDate&&this.endDate.isAfter(this.maxDate)&&(this.endDate=this.maxDate.clone()),"string"==typeof t.applyClass&&(this.applyClass=t.applyClass),"string"==typeof t.cancelClass&&(this.cancelClass=t.cancelClass),"object"==typeof t.dateLimit&&(this.dateLimit=t.dateLimit),"string"==typeof t.opens&&(this.opens=t.opens),"string"==typeof t.drops&&(this.drops=t.drops),"boolean"==typeof t.showWeekNumbers&&(this.showWeekNumbers=t.showWeekNumbers),"string"==typeof t.buttonClasses&&(this.buttonClasses=t.buttonClasses),"object"==typeof t.buttonClasses&&(this.buttonClasses=t.buttonClasses.join(" ")),"boolean"==typeof t.showDropdowns&&(this.showDropdowns=t.showDropdowns),"boolean"==typeof t.singleDatePicker&&(this.singleDatePicker=t.singleDatePicker,this.singleDatePicker&&(this.endDate=this.startDate.clone())),"boolean"==typeof t.timePicker&&(this.timePicker=t.timePicker),"boolean"==typeof t.timePickerSeconds&&(this.timePickerSeconds=t.timePickerSeconds),"number"==typeof t.timePickerIncrement&&(this.timePickerIncrement=t.timePickerIncrement),"boolean"==typeof t.timePicker24Hour&&(this.timePicker24Hour=t.timePicker24Hour),"boolean"==typeof t.autoApply&&(this.autoApply=t.autoApply),"boolean"==typeof t.autoUpdateInput&&(this.autoUpdateInput=t.autoUpdateInput),"boolean"==typeof t.linkedCalendars&&(this.linkedCalendars=t.linkedCalendars),"function"==typeof t.isInvalidDate&&(this.isInvalidDate=t.isInvalidDate),0!=this.locale.firstDay)for(var i=this.locale.firstDay;i>0;)this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift()),i--;var r,o,d;if("undefined"==typeof t.startDate&&"undefined"==typeof t.endDate&&s(this.element).is("input[type=text]")){var l=s(this.element).val(),u=l.split(this.locale.separator);r=o=null,2==u.length?(r=a(u[0],this.locale.format),o=a(u[1],this.locale.format)):this.singleDatePicker&&""!==l&&(r=a(l,this.locale.format),o=a(l,this.locale.format)),null!==r&&null!==o&&(this.setStartDate(r),this.setEndDate(o))}if("object"==typeof t.ranges){for(d in t.ranges){r="string"==typeof t.ranges[d][0]?a(t.ranges[d][0],this.locale.format):a(t.ranges[d][0]),o="string"==typeof t.ranges[d][1]?a(t.ranges[d][1],this.locale.format):a(t.ranges[d][1]),this.minDate&&r.isBefore(this.minDate)&&(r=this.minDate.clone());var m=this.maxDate;if(this.dateLimit&&r.clone().add(this.dateLimit).isAfter(m)&&(m=r.clone().add(this.dateLimit)),m&&o.isAfter(m)&&(o=m.clone()),!(this.minDate&&o.isBefore(this.minDate)||m&&r.isAfter(m))){var _=document.createElement("textarea");_.innerHTML=d,rangeHtml=_.value,this.ranges[rangeHtml]=[r,o]}}var c="<ul>";for(d in this.ranges)c+="<li>"+d+"</li>";c+="<li>"+this.locale.customRangeLabel+"</li>",c+="</ul>",this.container.find(".ranges").prepend(c)}if("function"==typeof n&&(this.callback=n),this.timePicker||(this.startDate=this.startDate.startOf("day"),this.endDate=this.endDate.endOf("day"),this.container.find(".calendar-time").hide()),this.timePicker&&this.autoApply&&(this.autoApply=!1),this.autoApply&&"object"!=typeof t.ranges?this.container.find(".ranges").hide():this.autoApply&&this.container.find(".applyBtn, .cancelBtn").addClass("hide"),this.singleDatePicker&&(this.container.addClass("single"),this.container.find(".calendar.left").addClass("single"),this.container.find(".calendar.left").show(),this.container.find(".calendar.right").hide(),this.container.find(".daterangepicker_input input, .daterangepicker_input i").hide(),this.timePicker||this.container.find(".ranges").hide()),"undefined"!=typeof t.ranges||this.singleDatePicker||this.container.addClass("show-calendar"),this.container.addClass("opens"+this.opens),"undefined"!=typeof t.ranges&&"right"==this.opens){var h=this.container.find(".ranges"),p=h.clone();h.remove(),this.container.find(".calendar.left").parent().prepend(p)}this.container.find(".applyBtn, .cancelBtn").addClass(this.buttonClasses),this.applyClass.length&&this.container.find(".applyBtn").addClass(this.applyClass),this.cancelClass.length&&this.container.find(".cancelBtn").addClass(this.cancelClass),this.container.find(".applyBtn").html(this.locale.applyLabel),this.container.find(".cancelBtn").html(this.locale.cancelLabel),t.rangesHour&&2==t.rangesHour.length&&(this.rangesHour=t.rangesHour),this.container.find(".calendar").on("click.daterangepicker",".prev",s.proxy(this.clickPrev,this)).on("click.daterangepicker",".next",s.proxy(this.clickNext,this)).on("click.daterangepicker","td.available",s.proxy(this.clickDate,this)).on("mouseenter.daterangepicker","td.available",s.proxy(this.hoverDate,this)).on("mouseleave.daterangepicker","td.available",s.proxy(this.updateFormInputs,this)).on("change.daterangepicker","select.yearselect",s.proxy(this.monthOrYearChanged,this)).on("change.daterangepicker","select.monthselect",s.proxy(this.monthOrYearChanged,this)).on("change.daterangepicker","select.hourselect,select.minuteselect,select.secondselect,select.ampmselect",s.proxy(this.timeChanged,this)).on("click.daterangepicker",".daterangepicker_input input",s.proxy(this.showCalendars,this)).on("change.daterangepicker",".daterangepicker_input input",s.proxy(this.formInputsChanged,this)),this.container.find(".ranges").on("click.daterangepicker","button.applyBtn",s.proxy(this.clickApply,this)).on("click.daterangepicker","button.cancelBtn",s.proxy(this.clickCancel,this)).on("click.daterangepicker","li",s.proxy(this.clickRange,this)).on("mouseenter.daterangepicker","li",s.proxy(this.hoverRange,this)).on("mouseleave.daterangepicker","li",s.proxy(this.updateFormInputs,this)),this.element.is("input")?this.element.on({"click.daterangepicker":s.proxy(this.show,this),"focus.daterangepicker":s.proxy(this.show,this),"keyup.daterangepicker":s.proxy(this.elementChanged,this),"keydown.daterangepicker":s.proxy(this.keydown,this)}):this.element.on("click.daterangepicker",s.proxy(this.toggle,this)),this.element.is("input")&&!this.singleDatePicker&&this.autoUpdateInput?(this.element.val(this.startDate.format(this.locale.format)+this.locale.separator+this.endDate.format(this.locale.format)),this.element.trigger("change")):this.element.is("input")&&this.autoUpdateInput&&(this.element.val(this.startDate.format(this.locale.format)),this.element.trigger("change"))};n.prototype={constructor:n,setStartDate:function(e){"string"==typeof e&&(this.startDate=a(e,this.locale.format)),"object"==typeof e&&(this.startDate=a(e)),this.timePicker||(this.startDate=this.startDate.startOf("day")),this.timePicker&&this.timePickerIncrement&&this.startDate.minute(Math.round(this.startDate.minute()/this.timePickerIncrement)*this.timePickerIncrement),this.minDate&&this.startDate.isBefore(this.minDate)&&(this.startDate=this.minDate),this.maxDate&&this.startDate.isAfter(this.maxDate)&&(this.startDate=this.maxDate),this.isShowing||this.updateElement(),this.updateMonthsInView()},setEndDate:function(e){"string"==typeof e&&(this.endDate=a(e,this.locale.format)),"object"==typeof e&&(this.endDate=a(e)),this.timePicker||(this.endDate=this.endDate.endOf("day")),this.timePicker&&this.timePickerIncrement&&this.endDate.minute(Math.round(this.endDate.minute()/this.timePickerIncrement)*this.timePickerIncrement),this.endDate.isBefore(this.startDate)&&(this.endDate=this.startDate.clone()),this.maxDate&&this.endDate.isAfter(this.maxDate)&&(this.endDate=this.maxDate),this.dateLimit&&this.startDate.clone().add(this.dateLimit).isBefore(this.endDate)&&(this.endDate=this.startDate.clone().add(this.dateLimit)),this.isShowing||this.updateElement(),this.updateMonthsInView()},isInvalidDate:function(){return!1},updateView:function(){this.timePicker&&(this.renderTimePicker("left"),this.renderTimePicker("right"),this.endDate?this.container.find(".right .calendar-time select").removeAttr("disabled").removeClass("disabled"):this.container.find(".right .calendar-time select").attr("disabled","disabled").addClass("disabled")),this.endDate?(this.container.find('input[name="daterangepicker_end"]').removeClass("active"),this.container.find('input[name="daterangepicker_start"]').addClass("active")):(this.container.find('input[name="daterangepicker_end"]').addClass("active"),this.container.find('input[name="daterangepicker_start"]').removeClass("active")),this.updateMonthsInView(),this.updateCalendars(),this.updateFormInputs()},updateMonthsInView:function(){if(this.endDate){if(!this.singleDatePicker&&this.leftCalendar.month&&this.rightCalendar.month&&(this.startDate.format("YYYY-MM")==this.leftCalendar.month.format("YYYY-MM")||this.startDate.format("YYYY-MM")==this.rightCalendar.month.format("YYYY-MM"))&&(this.endDate.format("YYYY-MM")==this.leftCalendar.month.format("YYYY-MM")||this.endDate.format("YYYY-MM")==this.rightCalendar.month.format("YYYY-MM")))return;this.leftCalendar.month=this.startDate.clone().date(2),this.linkedCalendars||this.endDate.month()==this.startDate.month()&&this.endDate.year()==this.startDate.year()?this.rightCalendar.month=this.startDate.clone().date(2).add(1,"month"):this.rightCalendar.month=this.endDate.clone().date(2)}else this.leftCalendar.month.format("YYYY-MM")!=this.startDate.format("YYYY-MM")&&this.rightCalendar.month.format("YYYY-MM")!=this.startDate.format("YYYY-MM")&&(this.leftCalendar.month=this.startDate.clone().date(2),this.rightCalendar.month=this.startDate.clone().date(2).add(1,"month"))},updateCalendars:function(){if(this.timePicker){var e,t,a;if(this.endDate){if(e=parseInt(this.container.find(".left .hourselect").val(),10),t=parseInt(this.container.find(".left .minuteselect").val(),10),a=this.timePickerSeconds?parseInt(this.container.find(".left .secondselect").val(),10):0,!this.timePicker24Hour){var s=this.container.find(".left .ampmselect").val();"PM"===s&&e<12&&(e+=12),"AM"===s&&12===e&&(e=0)}}else if(e=parseInt(this.container.find(".right .hourselect").val(),10),t=parseInt(this.container.find(".right .minuteselect").val(),10),a=this.timePickerSeconds?parseInt(this.container.find(".right .secondselect").val(),10):0,!this.timePicker24Hour){var s=this.container.find(".right .ampmselect").val();"PM"===s&&e<12&&(e+=12),"AM"===s&&12===e&&(e=0)}this.leftCalendar.month.hour(e).minute(t).second(a),this.rightCalendar.month.hour(e).minute(t).second(a)}if(this.renderCalendar("left"),this.renderCalendar("right"),this.container.find(".ranges li").removeClass("active"),null!=this.endDate){var n=!0,i=0;for(var r in this.ranges){if(this.timePicker){if(this.startDate.isSame(this.ranges[r][0])&&this.endDate.isSame(this.ranges[r][1])){n=!1,this.chosenLabel=this.container.find(".ranges li:eq("+i+")").addClass("active").html();break}}else if(this.startDate.format("YYYY-MM-DD")==this.ranges[r][0].format("YYYY-MM-DD")&&this.endDate.format("YYYY-MM-DD")==this.ranges[r][1].format("YYYY-MM-DD")){n=!1,this.chosenLabel=this.container.find(".ranges li:eq("+i+")").addClass("active").html();break}i++}n&&(this.chosenLabel=this.container.find(".ranges li:last").addClass("active").html(),this.showCalendars())}},renderCalendar:function(e){var t="left"==e?this.leftCalendar:this.rightCalendar,n=t.month.month(),i=t.month.year(),r=t.month.hour(),o=t.month.minute(),d=t.month.second(),l=a([i,n]).daysInMonth(),u=a([i,n,1]),m=a([i,n,l]),_=a(u).subtract(1,"month").month(),c=a(u).subtract(1,"month").year(),h=a([c,_]).daysInMonth(),p=u.day(),t=[];t.firstDay=u,t.lastDay=m;for(var f=0;f<6;f++)t[f]=[];var M=h-p+this.locale.firstDay+1;M>h&&(M-=7),p==this.locale.firstDay&&(M=h-6);for(var y,g,L=a([c,_,M,12,o,d]),f=0,y=0,g=0;f<42;f++,y++,L=a(L).add(24,"hour"))f>0&&y%7===0&&(y=0,g++),t[g][y]=L.clone().hour(r).minute(o).second(d),L.hour(12),this.minDate&&t[g][y].format("YYYY-MM-DD")==this.minDate.format("YYYY-MM-DD")&&t[g][y].isBefore(this.minDate)&&"left"==e&&(t[g][y]=this.minDate.clone()),this.maxDate&&t[g][y].format("YYYY-MM-DD")==this.maxDate.format("YYYY-MM-DD")&&t[g][y].isAfter(this.maxDate)&&"right"==e&&(t[g][y]=this.maxDate.clone());"left"==e?this.leftCalendar.calendar=t:this.rightCalendar.calendar=t;var Y="left"==e?this.minDate:this.startDate,v=this.maxDate,w=("left"==e?this.startDate:this.endDate,'<table class="table-condensed">');w+="<thead>",w+="<tr>",this.showWeekNumbers&&(w+="<th></th>"),w+=Y&&!Y.isBefore(t.firstDay)||this.linkedCalendars&&"left"!=e?"<th></th>":'<th class="prev available"><i class="fa fa-chevron-left glyphicon glyphicon-chevron-left"></i></th>';var k=this.locale.monthNames[t[1][1].month()]+t[1][1].format(" YYYY");if(this.showDropdowns){for(var D=t[1][1].month(),T=t[1][1].year(),b=v&&v.year()||T+5,S=Y&&Y.year()||T-50,x=T==S,H=T==b,P='<select class="monthselect">',C=0;C<12;C++)P+=(!x||C>=Y.month())&&(!H||C<=v.month())?"<option value='"+C+"'"+(C===D?" selected='selected'":"")+">"+this.locale.monthNames[C]+"</option>":"<option value='"+C+"'"+(C===D?" selected='selected'":"")+" disabled='disabled'>"+this.locale.monthNames[C]+"</option>";P+="</select>";for(var j='<select class="yearselect">',A=S;A<=b;A++)j+='<option value="'+A+'"'+(A===T?' selected="selected"':"")+">"+A+"</option>";j+="</select>",k=P+j}if(w+='<th colspan="5" class="month">'+k+"</th>",w+=v&&!v.isAfter(t.lastDay)||this.linkedCalendars&&"right"!=e&&!this.singleDatePicker?"<th></th>":'<th class="next available"><i class="fa fa-chevron-right glyphicon glyphicon-chevron-right"></i></th>',w+="</tr>",w+="<tr>",this.showWeekNumbers&&(w+='<th class="week">'+this.locale.weekLabel+"</th>"),s.each(this.locale.daysOfWeek,function(e,t){w+="<th>"+t+"</th>"}),w+="</tr>",w+="</thead>",w+="<tbody>",null==this.endDate&&this.dateLimit){var E=this.startDate.clone().add(this.dateLimit).endOf("day");v&&!E.isBefore(v)||(v=E)}for(var g=0;g<6;g++){w+="<tr>",this.showWeekNumbers&&(w+='<td class="week">'+t[g][0].week()+"</td>");for(var y=0;y<7;y++){var W=[];t[g][y].isSame(new Date,"day")&&W.push("today"),t[g][y].isoWeekday()>5&&W.push("weekend"),t[g][y].month()!=t[1][1].month()&&W.push("off"),this.minDate&&t[g][y].isBefore(this.minDate,"day")&&W.push("off","disabled"),v&&t[g][y].isAfter(v,"day")&&W.push("off","disabled"),this.isInvalidDate(t[g][y])&&W.push("off","disabled"),t[g][y].format("YYYY-MM-DD")==this.startDate.format("YYYY-MM-DD")&&W.push("active","start-date"),null!=this.endDate&&t[g][y].format("YYYY-MM-DD")==this.endDate.format("YYYY-MM-DD")&&W.push("active","end-date"),null!=this.endDate&&t[g][y]>this.startDate&&t[g][y]<this.endDate&&W.push("in-range");for(var z="",I=!1,f=0;f<W.length;f++)z+=W[f]+" ","disabled"==W[f]&&(I=!0);I||(z+="available"),w+='<td class="'+z.replace(/^\s+|\s+$/g,"")+'" data-title="r'+g+"c"+y+'">'+t[g][y].date()+"</td>"}w+="</tr>"}w+="</tbody>",w+="</table>",this.container.find(".calendar."+e+" .calendar-table").html(w)},renderTimePicker:function(e){var t,a,s,n=this.maxDate;!this.dateLimit||this.maxDate&&!this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate)||(n=this.startDate.clone().add(this.dateLimit)),"left"==e?(a=this.startDate.clone(),s=this.minDate):"right"==e&&(a=this.endDate?this.endDate.clone():this.startDate.clone(),s=this.startDate),t='<select class="hourselect">';var i=this.timePicker24Hour?0:1,r=this.timePicker24Hour?23:12;this.rangesHour&&2==this.rangesHour.length&&(i=this.rangesHour[0],r=this.rangesHour[1]);for(var o=i;o<=r;o++){var d=o;this.timePicker24Hour||(d=a.hour()>=12?12==o?12:o+12:12==o?0:o);var l=a.clone().hour(d),u=!1;s&&l.minute(59).isBefore(s)&&(u=!0),n&&l.minute(0).isAfter(n)&&(u=!0),t+=d!=a.hour()||u?u?'<option value="'+o+'" disabled="disabled" class="disabled">'+o+"</option>":'<option value="'+o+'">'+o+"</option>":'<option value="'+o+'" selected="selected">'+o+"</option>"}t+="</select> ",t+=': <select class="minuteselect">';for(var o=0;o<60;o+=this.timePickerIncrement){var m=o<10?"0"+o:o,l=a.clone().minute(o),u=!1;s&&l.second(59).isBefore(s)&&(u=!0),n&&l.second(0).isAfter(n)&&(u=!0),console.log("time.minute(59):",l.minute(59)),t+=a.minute()!=o||u?u?'<option value="'+o+'" disabled="disabled" class="disabled">'+m+"</option>":'<option value="'+o+'">'+m+"</option>":'<option value="'+o+'" selected="selected">'+m+"</option>"}if(t+="</select> ",this.timePickerSeconds){t+=': <select class="secondselect">';for(var o=0;o<60;o++){var m=o<10?"0"+o:o,l=a.clone().second(o),u=!1;s&&l.isBefore(s)&&(u=!0),n&&l.isAfter(n)&&(u=!0),t+=a.second()!=o||u?u?'<option value="'+o+'" disabled="disabled" class="disabled">'+m+"</option>":'<option value="'+o+'">'+m+"</option>":'<option value="'+o+'" selected="selected">'+m+"</option>"}t+="</select> "}if(!this.timePicker24Hour){t+='<select class="ampmselect">';var _="",c="";s&&a.clone().hour(12).minute(0).second(0).isBefore(s)&&(_=' disabled="disabled" class="disabled"'),n&&a.clone().hour(0).minute(0).second(0).isAfter(n)&&(c=' disabled="disabled" class="disabled"'),t+=a.hour()>=12?'<option value="AM"'+_+'>AM</option><option value="PM" selected="selected"'+c+">PM</option>":'<option value="AM" selected="selected"'+_+'>AM</option><option value="PM"'+c+">PM</option>",t+="</select>"}this.container.find(".calendar."+e+" .calendar-time div").html(t)},updateFormInputs:function(){this.container.find("input[name=daterangepicker_start]").is(":focus")||this.container.find("input[name=daterangepicker_end]").is(":focus")||(this.container.find("input[name=daterangepicker_start]").val(this.startDate.format(this.locale.format)),this.endDate&&this.container.find("input[name=daterangepicker_end]").val(this.endDate.format(this.locale.format)),this.singleDatePicker||this.endDate&&(this.startDate.isBefore(this.endDate)||this.startDate.isSame(this.endDate))?this.container.find("button.applyBtn").removeAttr("disabled"):this.container.find("button.applyBtn").attr("disabled","disabled"))},move:function(){var e,t={top:0,left:0},a=s(window).width();this.parentEl.is("body")||(t={top:this.parentEl.offset().top-this.parentEl.scrollTop(),left:this.parentEl.offset().left-this.parentEl.scrollLeft()},a=this.parentEl[0].clientWidth+this.parentEl.offset().left),e="up"==this.drops?this.element.offset().top-this.container.outerHeight()-t.top:this.element.offset().top+this.element.outerHeight()-t.top,this.container["up"==this.drops?"addClass":"removeClass"]("dropup"),"left"==this.opens?(this.container.css({top:e,right:a-this.element.offset().left-this.element.outerWidth(),left:"auto"}),this.container.offset().left<0&&this.container.css({right:"auto",left:9})):"center"==this.opens?(this.container.css({top:e,left:this.element.offset().left-t.left+this.element.outerWidth()/2-this.container.outerWidth()/2,right:"auto"}),this.container.offset().left<0&&this.container.css({right:"auto",left:9})):(this.container.css({top:e,left:this.element.offset().left-t.left,right:"auto"}),this.container.offset().left+this.container.outerWidth()>s(window).width()&&this.container.css({left:"auto",right:0}))},show:function(e){this.isShowing||(this._outsideClickProxy=s.proxy(function(e){this.outsideClick(e)},this),s(document).on("mousedown.daterangepicker",this._outsideClickProxy).on("touchend.daterangepicker",this._outsideClickProxy).on("click.daterangepicker","[data-toggle=dropdown]",this._outsideClickProxy).on("focusin.daterangepicker",this._outsideClickProxy),s(window).on("resize.daterangepicker",s.proxy(function(e){this.move(e)},this)),this.oldStartDate=this.startDate.clone(),this.oldEndDate=this.endDate.clone(),this.updateView(),this.container.show(),this.move(),this.element.trigger("show.daterangepicker",this),this.isShowing=!0)},hide:function(e){this.isShowing&&(this.endDate||(this.startDate=this.oldStartDate.clone(),this.endDate=this.oldEndDate.clone()),this.startDate.isSame(this.oldStartDate)&&this.endDate.isSame(this.oldEndDate)||this.callback(this.startDate,this.endDate,this.chosenLabel),this.updateElement(),s(document).off(".daterangepicker"),s(window).off(".daterangepicker"),this.container.hide(),this.element.trigger("hide.daterangepicker",this),this.isShowing=!1)},toggle:function(e){this.isShowing?this.hide():this.show()},outsideClick:function(e){var t=s(e.target);"focusin"==e.type||t.closest(this.element).length||t.closest(this.container).length||t.closest(".calendar-table").length||this.hide()},showCalendars:function(){this.container.addClass("show-calendar"),this.move(),this.element.trigger("showCalendar.daterangepicker",this)},hideCalendars:function(){this.container.removeClass("show-calendar"),this.element.trigger("hideCalendar.daterangepicker",this)},hoverRange:function(e){if(!this.container.find("input[name=daterangepicker_start]").is(":focus")&&!this.container.find("input[name=daterangepicker_end]").is(":focus")){var t=e.target.innerHTML;if(t==this.locale.customRangeLabel)this.updateView();else{var a=this.ranges[t];this.container.find("input[name=daterangepicker_start]").val(a[0].format(this.locale.format)),this.container.find("input[name=daterangepicker_end]").val(a[1].format(this.locale.format))}}},clickRange:function(e){var t=e.target.innerHTML;if(this.chosenLabel=t,t==this.locale.customRangeLabel)this.showCalendars();else{var a=this.ranges[t];this.startDate=a[0],this.endDate=a[1],this.timePicker||(this.startDate.startOf("day"),this.endDate.endOf("day")),this.hideCalendars(),this.clickApply()}},clickPrev:function(e){var t=s(e.target).parents(".calendar");t.hasClass("left")?(this.leftCalendar.month.subtract(1,"month"),this.linkedCalendars&&this.rightCalendar.month.subtract(1,"month")):this.rightCalendar.month.subtract(1,"month"),this.updateCalendars()},clickNext:function(e){var t=s(e.target).parents(".calendar");t.hasClass("left")?this.leftCalendar.month.add(1,"month"):(this.rightCalendar.month.add(1,"month"),
this.linkedCalendars&&this.leftCalendar.month.add(1,"month")),this.updateCalendars()},hoverDate:function(e){if(!this.container.find("input[name=daterangepicker_start]").is(":focus")&&!this.container.find("input[name=daterangepicker_end]").is(":focus")&&s(e.target).hasClass("available")){var t=s(e.target).attr("data-title"),a=t.substr(1,1),n=t.substr(3,1),i=s(e.target).parents(".calendar"),r=i.hasClass("left")?this.leftCalendar.calendar[a][n]:this.rightCalendar.calendar[a][n];this.endDate?this.container.find("input[name=daterangepicker_start]").val(r.format(this.locale.format)):this.container.find("input[name=daterangepicker_end]").val(r.format(this.locale.format));var o=this.leftCalendar,d=this.rightCalendar,l=this.startDate;this.endDate||this.container.find(".calendar td").each(function(e,t){if(!s(t).hasClass("week")){var a=s(t).attr("data-title"),n=a.substr(1,1),i=a.substr(3,1),u=s(t).parents(".calendar"),m=u.hasClass("left")?o.calendar[n][i]:d.calendar[n][i];m.isAfter(l)&&m.isBefore(r)?s(t).addClass("in-range"):s(t).removeClass("in-range")}})}},clickDate:function(e){if(s(e.target).hasClass("available")){var t=s(e.target).attr("data-title"),a=t.substr(1,1),n=t.substr(3,1),i=s(e.target).parents(".calendar"),r=i.hasClass("left")?this.leftCalendar.calendar[a][n]:this.rightCalendar.calendar[a][n];if(this.endDate||r.isBefore(this.startDate)){if(this.timePicker){var o=parseInt(this.container.find(".left .hourselect").val(),10);if(!this.timePicker24Hour){var d=i.find(".ampmselect").val();"PM"===d&&o<12&&(o+=12),"AM"===d&&12===o&&(o=0)}var l=parseInt(this.container.find(".left .minuteselect").val(),10),u=this.timePickerSeconds?parseInt(this.container.find(".left .secondselect").val(),10):0;r=r.clone().hour(o).minute(l).second(u)}this.endDate=null,this.setStartDate(r.clone())}else{if(this.timePicker){var o=parseInt(this.container.find(".right .hourselect").val(),10);if(!this.timePicker24Hour){var d=this.container.find(".right .ampmselect").val();"PM"===d&&o<12&&(o+=12),"AM"===d&&12===o&&(o=0)}var l=parseInt(this.container.find(".right .minuteselect").val(),10),u=this.timePickerSeconds?parseInt(this.container.find(".right .secondselect").val(),10):0;r=r.clone().hour(o).minute(l).second(u)}this.setEndDate(r.clone()),this.autoApply&&this.clickApply()}this.singleDatePicker&&(this.setEndDate(this.startDate),this.timePicker||this.clickApply()),this.updateView()}},clickApply:function(e){this.hide(),this.element.trigger("apply.daterangepicker",this)},clickCancel:function(e){this.startDate=this.oldStartDate,this.endDate=this.oldEndDate,this.hide(),this.element.trigger("cancel.daterangepicker",this)},monthOrYearChanged:function(e){var t=s(e.target).closest(".calendar").hasClass("left"),a=t?"left":"right",n=this.container.find(".calendar."+a),i=parseInt(n.find(".monthselect").val(),10),r=n.find(".yearselect").val();t||(r<this.startDate.year()||r==this.startDate.year()&&i<this.startDate.month())&&(i=this.startDate.month(),r=this.startDate.year()),this.minDate&&(r<this.minDate.year()||r==this.minDate.year()&&i<this.minDate.month())&&(i=this.minDate.month(),r=this.minDate.year()),this.maxDate&&(r>this.maxDate.year()||r==this.maxDate.year()&&i>this.maxDate.month())&&(i=this.maxDate.month(),r=this.maxDate.year()),t?(this.leftCalendar.month.month(i).year(r),this.linkedCalendars&&(this.rightCalendar.month=this.leftCalendar.month.clone().add(1,"month"))):(this.rightCalendar.month.month(i).year(r),this.linkedCalendars&&(this.leftCalendar.month=this.rightCalendar.month.clone().subtract(1,"month"))),this.updateCalendars()},timeChanged:function(e){var t=s(e.target).closest(".calendar"),a=t.hasClass("left"),n=parseInt(t.find(".hourselect").val(),10),i=parseInt(t.find(".minuteselect").val(),10),r=this.timePickerSeconds?parseInt(t.find(".secondselect").val(),10):0;if(!this.timePicker24Hour){var o=t.find(".ampmselect").val();"PM"===o&&n<12&&(n+=12),"AM"===o&&12===n&&(n=0)}if(a){var d=this.startDate.clone();d.hour(n),d.minute(i),d.second(r),this.setStartDate(d),this.singleDatePicker?this.endDate=this.startDate.clone():this.endDate&&this.endDate.format("YYYY-MM-DD")==d.format("YYYY-MM-DD")&&this.endDate.isBefore(d)&&this.setEndDate(d.clone())}else if(this.endDate){var l=this.endDate.clone();l.hour(n),l.minute(i),l.second(r),this.setEndDate(l)}this.updateCalendars(),this.updateFormInputs(),this.renderTimePicker("left"),this.renderTimePicker("right")},formInputsChanged:function(e){var t=s(e.target).closest(".calendar").hasClass("right"),n=a(this.container.find('input[name="daterangepicker_start"]').val(),this.locale.format),i=a(this.container.find('input[name="daterangepicker_end"]').val(),this.locale.format);n.isValid()&&i.isValid()&&(t&&i.isBefore(n)&&(n=i.clone()),this.setStartDate(n),this.setEndDate(i),t?this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format)):this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format))),this.updateCalendars(),this.timePicker&&(this.renderTimePicker("left"),this.renderTimePicker("right"))},elementChanged:function(){if(this.element.is("input")&&this.element.val().length&&!(this.element.val().length<this.locale.format.length)){var e=this.element.val().split(this.locale.separator),t=null,s=null;2===e.length&&(t=a(e[0],this.locale.format),s=a(e[1],this.locale.format)),(this.singleDatePicker||null===t||null===s)&&(t=a(this.element.val(),this.locale.format),s=t),t.isValid()&&s.isValid()&&(this.setStartDate(t),this.setEndDate(s),this.updateView())}},keydown:function(e){9!==e.keyCode&&13!==e.keyCode||this.hide()},updateElement:function(){this.element.is("input")&&!this.singleDatePicker&&this.autoUpdateInput?(this.element.val(this.startDate.format(this.locale.format)+this.locale.separator+this.endDate.format(this.locale.format)),this.element.trigger("change")):this.element.is("input")&&this.autoUpdateInput&&(this.element.val(this.startDate.format(this.locale.format)),this.element.trigger("change"))},remove:function(){this.container.remove(),this.element.off(".daterangepicker"),this.element.removeData()}},s.fn.daterangepicker=function(e,t){return this.each(function(){var a=s(this);a.data("daterangepicker")&&a.data("daterangepicker").remove(),a.data("daterangepicker",new n(a,e,t))}),this}})},function(e,t,a){var s,n,i;!function(r){n=[a(3)],s=r,i="function"==typeof s?s.apply(t,n):s,!(void 0!==i&&(e.exports=i))}(function(e){function t(e){return o.raw?e:encodeURIComponent(e)}function a(e){return o.raw?e:decodeURIComponent(e)}function s(e){return t(o.json?JSON.stringify(e):String(e))}function n(e){0===e.indexOf('"')&&(e=e.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return e=decodeURIComponent(e.replace(r," ")),o.json?JSON.parse(e):e}catch(t){}}function i(t,a){var s=o.raw?t:n(t);return e.isFunction(a)?a(s):s}var r=/\+/g,o=e.cookie=function(n,r,d){if(arguments.length>1&&!e.isFunction(r)){if(d=e.extend({},o.defaults,d),"number"==typeof d.expires){var l=d.expires,u=d.expires=new Date;u.setMilliseconds(u.getMilliseconds()+864e5*l)}return document.cookie=[t(n),"=",s(r),d.expires?"; expires="+d.expires.toUTCString():"",d.path?"; path="+d.path:"",d.domain?"; domain="+d.domain:"",d.secure?"; secure":""].join("")}for(var m=n?void 0:{},_=document.cookie?document.cookie.split("; "):[],c=0,h=_.length;c<h;c++){var p=_[c].split("="),f=a(p.shift()),M=p.join("=");if(n===f){m=i(M,r);break}n||void 0===(M=i(M))||(m[f]=M)}return m};o.defaults={},e.removeCookie=function(t,a){return e.cookie(t,"",e.extend({},a,{expires:-1})),!e.cookie(t)}})},function(e,t,a){var s,n,i,n,i;!function(r,o){"use strict";n=[a(3)],s=o,i="function"==typeof s?s.apply(t,n):s,!(void 0!==i&&(e.exports=i)),n=[a(3)],i=function(){return o(jQuery)}.apply(t,n),!(void 0!==i&&(e.exports=i))}(this,function(e){"use strict";function t(e){e.fn.swiper=function(t){var s;return e(this).each(function(){var e=new a(this,t);s||(s=e)}),s}}var a=function(t,s){function n(e){return Math.floor(e)}function i(){g.autoplayTimeoutId=setTimeout(function(){g.params.loop?(g.fixLoop(),g._slideNext(),g.emit("onAutoplay",g)):g.isEnd?s.autoplayStopOnLast?g.stopAutoplay():(g._slideTo(0),g.emit("onAutoplay",g)):(g._slideNext(),g.emit("onAutoplay",g))},g.params.autoplay)}function r(t,a){var s=e(t.target);if(!s.is(a))if("string"==typeof a)s=s.parents(a);else if(a.nodeType){var n;return s.parents().each(function(e,t){t===a&&(n=a)}),n?a:void 0}if(0!==s.length)return s[0]}function o(e,t){t=t||{};var a=window.MutationObserver||window.WebkitMutationObserver,s=new a(function(e){e.forEach(function(e){g.onResize(!0),g.emit("onObserverUpdate",g,e)})});s.observe(e,{attributes:"undefined"==typeof t.attributes||t.attributes,childList:"undefined"==typeof t.childList||t.childList,characterData:"undefined"==typeof t.characterData||t.characterData}),g.observers.push(s)}function d(e){e.originalEvent&&(e=e.originalEvent);var t=e.keyCode||e.charCode;if(!g.params.allowSwipeToNext&&(g.isHorizontal()&&39===t||!g.isHorizontal()&&40===t))return!1;if(!g.params.allowSwipeToPrev&&(g.isHorizontal()&&37===t||!g.isHorizontal()&&38===t))return!1;if(!(e.shiftKey||e.altKey||e.ctrlKey||e.metaKey||document.activeElement&&document.activeElement.nodeName&&("input"===document.activeElement.nodeName.toLowerCase()||"textarea"===document.activeElement.nodeName.toLowerCase()))){if(37===t||39===t||38===t||40===t){var a=!1;if(g.container.parents(".swiper-slide").length>0&&0===g.container.parents(".swiper-slide-active").length)return;var s={left:window.pageXOffset,top:window.pageYOffset},n=window.innerWidth,i=window.innerHeight,r=g.container.offset();g.rtl&&(r.left=r.left-g.container[0].scrollLeft);for(var o=[[r.left,r.top],[r.left+g.width,r.top],[r.left,r.top+g.height],[r.left+g.width,r.top+g.height]],d=0;d<o.length;d++){var l=o[d];l[0]>=s.left&&l[0]<=s.left+n&&l[1]>=s.top&&l[1]<=s.top+i&&(a=!0)}if(!a)return}g.isHorizontal()?(37!==t&&39!==t||(e.preventDefault?e.preventDefault():e.returnValue=!1),(39===t&&!g.rtl||37===t&&g.rtl)&&g.slideNext(),(37===t&&!g.rtl||39===t&&g.rtl)&&g.slidePrev()):(38!==t&&40!==t||(e.preventDefault?e.preventDefault():e.returnValue=!1),40===t&&g.slideNext(),38===t&&g.slidePrev())}}function l(e){e.originalEvent&&(e=e.originalEvent);var t=g.mousewheel.event,a=0,s=g.rtl?-1:1;if("mousewheel"===t)if(g.params.mousewheelForceToAxis)if(g.isHorizontal()){if(!(Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)))return;a=e.wheelDeltaX*s}else{if(!(Math.abs(e.wheelDeltaY)>Math.abs(e.wheelDeltaX)))return;a=e.wheelDeltaY}else a=Math.abs(e.wheelDeltaX)>Math.abs(e.wheelDeltaY)?-e.wheelDeltaX*s:-e.wheelDeltaY;else if("DOMMouseScroll"===t)a=-e.detail;else if("wheel"===t)if(g.params.mousewheelForceToAxis)if(g.isHorizontal()){if(!(Math.abs(e.deltaX)>Math.abs(e.deltaY)))return;a=-e.deltaX*s}else{if(!(Math.abs(e.deltaY)>Math.abs(e.deltaX)))return;a=-e.deltaY}else a=Math.abs(e.deltaX)>Math.abs(e.deltaY)?-e.deltaX*s:-e.deltaY;if(0!==a){if(g.params.mousewheelInvert&&(a=-a),g.params.freeMode){var n=g.getWrapperTranslate()+a*g.params.mousewheelSensitivity,i=g.isBeginning,r=g.isEnd;if(n>=g.minTranslate()&&(n=g.minTranslate()),n<=g.maxTranslate()&&(n=g.maxTranslate()),g.setWrapperTransition(0),g.setWrapperTranslate(n),g.updateProgress(),g.updateActiveIndex(),(!i&&g.isBeginning||!r&&g.isEnd)&&g.updateClasses(),g.params.freeModeSticky?(clearTimeout(g.mousewheel.timeout),g.mousewheel.timeout=setTimeout(function(){g.slideReset()},300)):g.params.lazyLoading&&g.lazy&&g.lazy.load(),0===n||n===g.maxTranslate())return}else{if((new window.Date).getTime()-g.mousewheel.lastScrollTime>60)if(a<0)if(g.isEnd&&!g.params.loop||g.animating){if(g.params.mousewheelReleaseOnEdges)return!0}else g.slideNext();else if(g.isBeginning&&!g.params.loop||g.animating){if(g.params.mousewheelReleaseOnEdges)return!0}else g.slidePrev();g.mousewheel.lastScrollTime=(new window.Date).getTime()}return g.params.autoplay&&g.stopAutoplay(),e.preventDefault?e.preventDefault():e.returnValue=!1,!1}}function u(t,a){t=e(t);var s,n,i,r=g.rtl?-1:1;s=t.attr("data-swiper-parallax")||"0",n=t.attr("data-swiper-parallax-x"),i=t.attr("data-swiper-parallax-y"),n||i?(n=n||"0",i=i||"0"):g.isHorizontal()?(n=s,i="0"):(i=s,n="0"),n=n.indexOf("%")>=0?parseInt(n,10)*a*r+"%":n*a*r+"px",i=i.indexOf("%")>=0?parseInt(i,10)*a+"%":i*a+"px",t.transform("translate3d("+n+", "+i+",0px)")}function m(e){return 0!==e.indexOf("on")&&(e=e[0]!==e[0].toUpperCase()?"on"+e[0].toUpperCase()+e.substring(1):"on"+e),e}if(!(this instanceof a))return new a(t,s);var _={direction:"horizontal",touchEventsTarget:"container",initialSlide:0,speed:300,autoplay:!1,autoplayDisableOnInteraction:!0,autoplayStopOnLast:!1,iOSEdgeSwipeDetection:!1,iOSEdgeSwipeThreshold:20,freeMode:!1,freeModeMomentum:!0,freeModeMomentumRatio:1,freeModeMomentumBounce:!0,freeModeMomentumBounceRatio:1,freeModeSticky:!1,freeModeMinimumVelocity:.02,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",coverflow:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},flip:{slideShadows:!0,limitRotation:!0},cube:{slideShadows:!0,shadow:!0,shadowOffset:20,shadowScale:.94},fade:{crossFade:!1},parallax:!1,scrollbar:null,scrollbarHide:!0,scrollbarDraggable:!1,scrollbarSnapOnRelease:!1,keyboardControl:!1,mousewheelControl:!1,mousewheelReleaseOnEdges:!1,mousewheelInvert:!1,mousewheelForceToAxis:!1,mousewheelSensitivity:1,hashnav:!1,breakpoints:void 0,spaceBetween:0,slidesPerView:1,slidesPerColumn:1,slidesPerColumnFill:"column",slidesPerGroup:1,centeredSlides:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,onlyExternal:!1,threshold:0,touchMoveStopPropagation:!0,uniqueNavElements:!0,pagination:null,paginationElement:"span",paginationClickable:!1,paginationHide:!1,paginationBulletRender:null,paginationProgressRender:null,paginationFractionRender:null,paginationCustomRender:null,paginationType:"bullets",resistance:!0,resistanceRatio:.85,nextButton:null,prevButton:null,watchSlidesProgress:!1,watchSlidesVisibility:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,lazyLoading:!1,lazyLoadingInPrevNext:!1,lazyLoadingInPrevNextAmount:1,lazyLoadingOnTransitionStart:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,control:void 0,controlInverse:!1,controlBy:"slide",allowSwipeToPrev:!0,allowSwipeToNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",buttonDisabledClass:"swiper-button-disabled",paginationCurrentClass:"swiper-pagination-current",paginationTotalClass:"swiper-pagination-total",paginationHiddenClass:"swiper-pagination-hidden",paginationProgressbarClass:"swiper-pagination-progressbar",observer:!1,observeParents:!1,a11y:!1,prevSlideMessage:"Previous slide",nextSlideMessage:"Next slide",firstSlideMessage:"This is the first slide",lastSlideMessage:"This is the last slide",paginationBulletMessage:"Go to slide {{index}}",runCallbacksOnInit:!0},c=s&&s.virtualTranslate;s=s||{};var h={};for(var p in s)if("object"!=typeof s[p]||null===s[p]||(s[p].nodeType||s[p]===window||s[p]===document||"undefined"!=typeof Dom7&&s[p]instanceof Dom7||"undefined"!=typeof jQuery&&s[p]instanceof jQuery))h[p]=s[p];else{h[p]={};for(var f in s[p])h[p][f]=s[p][f]}for(var M in _)if("undefined"==typeof s[M])s[M]=_[M];else if("object"==typeof s[M])for(var y in _[M])"undefined"==typeof s[M][y]&&(s[M][y]=_[M][y]);var g=this;if(g.params=s,g.originalParams=h,g.classNames=[],"undefined"!=typeof e&&"undefined"!=typeof Dom7&&(e=Dom7),("undefined"!=typeof e||(e="undefined"==typeof Dom7?window.Dom7||window.Zepto||window.jQuery:Dom7))&&(g.$=e,g.currentBreakpoint=void 0,g.getActiveBreakpoint=function(){if(!g.params.breakpoints)return!1;var e,t=!1,a=[];for(e in g.params.breakpoints)g.params.breakpoints.hasOwnProperty(e)&&a.push(e);a.sort(function(e,t){return parseInt(e,10)>parseInt(t,10)});for(var s=0;s<a.length;s++)e=a[s],e>=window.innerWidth&&!t&&(t=e);return t||"max"},g.setBreakpoint=function(){var e=g.getActiveBreakpoint();if(e&&g.currentBreakpoint!==e){var t=e in g.params.breakpoints?g.params.breakpoints[e]:g.originalParams,a=g.params.loop&&t.slidesPerView!==g.params.slidesPerView;for(var s in t)g.params[s]=t[s];g.currentBreakpoint=e,a&&g.destroyLoop&&g.reLoop(!0)}},g.params.breakpoints&&g.setBreakpoint(),g.container=e(t),0!==g.container.length)){if(g.container.length>1){var L=[];return g.container.each(function(){L.push(new a(this,s))}),L}g.container[0].swiper=g,g.container.data("swiper",g),g.classNames.push("swiper-container-"+g.params.direction),g.params.freeMode&&g.classNames.push("swiper-container-free-mode"),g.support.flexbox||(g.classNames.push("swiper-container-no-flexbox"),g.params.slidesPerColumn=1),g.params.autoHeight&&g.classNames.push("swiper-container-autoheight"),(g.params.parallax||g.params.watchSlidesVisibility)&&(g.params.watchSlidesProgress=!0),["cube","coverflow","flip"].indexOf(g.params.effect)>=0&&(g.support.transforms3d?(g.params.watchSlidesProgress=!0,g.classNames.push("swiper-container-3d")):g.params.effect="slide"),"slide"!==g.params.effect&&g.classNames.push("swiper-container-"+g.params.effect),"cube"===g.params.effect&&(g.params.resistanceRatio=0,g.params.slidesPerView=1,g.params.slidesPerColumn=1,g.params.slidesPerGroup=1,g.params.centeredSlides=!1,g.params.spaceBetween=0,g.params.virtualTranslate=!0,g.params.setWrapperSize=!1),"fade"!==g.params.effect&&"flip"!==g.params.effect||(g.params.slidesPerView=1,g.params.slidesPerColumn=1,g.params.slidesPerGroup=1,g.params.watchSlidesProgress=!0,g.params.spaceBetween=0,g.params.setWrapperSize=!1,"undefined"==typeof c&&(g.params.virtualTranslate=!0)),g.params.grabCursor&&g.support.touch&&(g.params.grabCursor=!1),g.wrapper=g.container.children("."+g.params.wrapperClass),g.params.pagination&&(g.paginationContainer=e(g.params.pagination),g.params.uniqueNavElements&&"string"==typeof g.params.pagination&&g.paginationContainer.length>1&&1===g.container.find(g.params.pagination).length&&(g.paginationContainer=g.container.find(g.params.pagination)),"bullets"===g.params.paginationType&&g.params.paginationClickable?g.paginationContainer.addClass("swiper-pagination-clickable"):g.params.paginationClickable=!1,g.paginationContainer.addClass("swiper-pagination-"+g.params.paginationType)),(g.params.nextButton||g.params.prevButton)&&(g.params.nextButton&&(g.nextButton=e(g.params.nextButton),g.params.uniqueNavElements&&"string"==typeof g.params.nextButton&&g.nextButton.length>1&&1===g.container.find(g.params.nextButton).length&&(g.nextButton=g.container.find(g.params.nextButton))),g.params.prevButton&&(g.prevButton=e(g.params.prevButton),g.params.uniqueNavElements&&"string"==typeof g.params.prevButton&&g.prevButton.length>1&&1===g.container.find(g.params.prevButton).length&&(g.prevButton=g.container.find(g.params.prevButton)))),g.isHorizontal=function(){return"horizontal"===g.params.direction},g.rtl=g.isHorizontal()&&("rtl"===g.container[0].dir.toLowerCase()||"rtl"===g.container.css("direction")),g.rtl&&g.classNames.push("swiper-container-rtl"),g.rtl&&(g.wrongRTL="-webkit-box"===g.wrapper.css("display")),g.params.slidesPerColumn>1&&g.classNames.push("swiper-container-multirow"),g.device.android&&g.classNames.push("swiper-container-android"),g.container.addClass(g.classNames.join(" ")),g.translate=0,g.progress=0,g.velocity=0,g.lockSwipeToNext=function(){g.params.allowSwipeToNext=!1},g.lockSwipeToPrev=function(){g.params.allowSwipeToPrev=!1},g.lockSwipes=function(){g.params.allowSwipeToNext=g.params.allowSwipeToPrev=!1},g.unlockSwipeToNext=function(){g.params.allowSwipeToNext=!0},g.unlockSwipeToPrev=function(){g.params.allowSwipeToPrev=!0},g.unlockSwipes=function(){g.params.allowSwipeToNext=g.params.allowSwipeToPrev=!0},g.params.grabCursor&&(g.container[0].style.cursor="move",g.container[0].style.cursor="-webkit-grab",g.container[0].style.cursor="-moz-grab",g.container[0].style.cursor="grab"),g.imagesToLoad=[],g.imagesLoaded=0,g.loadImage=function(e,t,a,s,n){function i(){n&&n()}var r;e.complete&&s?i():t?(r=new window.Image,r.onload=i,r.onerror=i,a&&(r.srcset=a),t&&(r.src=t)):i()},g.preloadImages=function(){function e(){"undefined"!=typeof g&&null!==g&&(void 0!==g.imagesLoaded&&g.imagesLoaded++,g.imagesLoaded===g.imagesToLoad.length&&(g.params.updateOnImagesReady&&g.update(),g.emit("onImagesReady",g)))}g.imagesToLoad=g.container.find("img");for(var t=0;t<g.imagesToLoad.length;t++)g.loadImage(g.imagesToLoad[t],g.imagesToLoad[t].currentSrc||g.imagesToLoad[t].getAttribute("src"),g.imagesToLoad[t].srcset||g.imagesToLoad[t].getAttribute("srcset"),!0,e)},g.autoplayTimeoutId=void 0,g.autoplaying=!1,g.autoplayPaused=!1,g.startAutoplay=function(){return"undefined"==typeof g.autoplayTimeoutId&&(!!g.params.autoplay&&(!g.autoplaying&&(g.autoplaying=!0,g.emit("onAutoplayStart",g),void i())))},g.stopAutoplay=function(e){g.autoplayTimeoutId&&(g.autoplayTimeoutId&&clearTimeout(g.autoplayTimeoutId),g.autoplaying=!1,g.autoplayTimeoutId=void 0,g.emit("onAutoplayStop",g))},g.pauseAutoplay=function(e){g.autoplayPaused||(g.autoplayTimeoutId&&clearTimeout(g.autoplayTimeoutId),g.autoplayPaused=!0,0===e?(g.autoplayPaused=!1,i()):g.wrapper.transitionEnd(function(){g&&(g.autoplayPaused=!1,g.autoplaying?i():g.stopAutoplay())}))},g.minTranslate=function(){return-g.snapGrid[0]},g.maxTranslate=function(){return-g.snapGrid[g.snapGrid.length-1]},g.updateAutoHeight=function(){var e=g.slides.eq(g.activeIndex)[0];if("undefined"!=typeof e){var t=e.offsetHeight;t&&g.wrapper.css("height",t+"px")}},g.updateContainerSize=function(){var e,t;e="undefined"!=typeof g.params.width?g.params.width:g.container[0].clientWidth,t="undefined"!=typeof g.params.height?g.params.height:g.container[0].clientHeight,0===e&&g.isHorizontal()||0===t&&!g.isHorizontal()||(e=e-parseInt(g.container.css("padding-left"),10)-parseInt(g.container.css("padding-right"),10),t=t-parseInt(g.container.css("padding-top"),10)-parseInt(g.container.css("padding-bottom"),10),g.width=e,g.height=t,g.size=g.isHorizontal()?g.width:g.height)},g.updateSlidesSize=function(){g.slides=g.wrapper.children("."+g.params.slideClass),g.snapGrid=[],g.slidesGrid=[],g.slidesSizesGrid=[];var e,t=g.params.spaceBetween,a=-g.params.slidesOffsetBefore,s=0,i=0;if("undefined"!=typeof g.size){"string"==typeof t&&t.indexOf("%")>=0&&(t=parseFloat(t.replace("%",""))/100*g.size),g.virtualSize=-t,g.rtl?g.slides.css({marginLeft:"",marginTop:""}):g.slides.css({marginRight:"",marginBottom:""});var r;g.params.slidesPerColumn>1&&(r=Math.floor(g.slides.length/g.params.slidesPerColumn)===g.slides.length/g.params.slidesPerColumn?g.slides.length:Math.ceil(g.slides.length/g.params.slidesPerColumn)*g.params.slidesPerColumn,"auto"!==g.params.slidesPerView&&"row"===g.params.slidesPerColumnFill&&(r=Math.max(r,g.params.slidesPerView*g.params.slidesPerColumn)));var o,d=g.params.slidesPerColumn,l=r/d,u=l-(g.params.slidesPerColumn*l-g.slides.length);for(e=0;e<g.slides.length;e++){o=0;var m=g.slides.eq(e);if(g.params.slidesPerColumn>1){var _,c,h;"column"===g.params.slidesPerColumnFill?(c=Math.floor(e/d),h=e-c*d,(c>u||c===u&&h===d-1)&&++h>=d&&(h=0,c++),_=c+h*r/d,m.css({"-webkit-box-ordinal-group":_,"-moz-box-ordinal-group":_,"-ms-flex-order":_,"-webkit-order":_,order:_})):(h=Math.floor(e/l),c=e-h*l),m.css({"margin-top":0!==h&&g.params.spaceBetween&&g.params.spaceBetween+"px"}).attr("data-swiper-column",c).attr("data-swiper-row",h)}"none"!==m.css("display")&&("auto"===g.params.slidesPerView?(o=g.isHorizontal()?m.outerWidth(!0):m.outerHeight(!0),g.params.roundLengths&&(o=n(o))):(o=(g.size-(g.params.slidesPerView-1)*t)/g.params.slidesPerView,g.params.roundLengths&&(o=n(o)),g.isHorizontal()?g.slides[e].style.width=o+"px":g.slides[e].style.height=o+"px"),g.slides[e].swiperSlideSize=o,g.slidesSizesGrid.push(o),g.params.centeredSlides?(a=a+o/2+s/2+t,0===e&&(a=a-g.size/2-t),Math.abs(a)<.001&&(a=0),i%g.params.slidesPerGroup===0&&g.snapGrid.push(a),g.slidesGrid.push(a)):(i%g.params.slidesPerGroup===0&&g.snapGrid.push(a),g.slidesGrid.push(a),a=a+o+t),g.virtualSize+=o+t,s=o,i++)}g.virtualSize=Math.max(g.virtualSize,g.size)+g.params.slidesOffsetAfter;var p;if(g.rtl&&g.wrongRTL&&("slide"===g.params.effect||"coverflow"===g.params.effect)&&g.wrapper.css({width:g.virtualSize+g.params.spaceBetween+"px"}),g.support.flexbox&&!g.params.setWrapperSize||(g.isHorizontal()?g.wrapper.css({width:g.virtualSize+g.params.spaceBetween+"px"}):g.wrapper.css({height:g.virtualSize+g.params.spaceBetween+"px"})),g.params.slidesPerColumn>1&&(g.virtualSize=(o+g.params.spaceBetween)*r,g.virtualSize=Math.ceil(g.virtualSize/g.params.slidesPerColumn)-g.params.spaceBetween,g.wrapper.css({width:g.virtualSize+g.params.spaceBetween+"px"}),g.params.centeredSlides)){for(p=[],e=0;e<g.snapGrid.length;e++)g.snapGrid[e]<g.virtualSize+g.snapGrid[0]&&p.push(g.snapGrid[e]);g.snapGrid=p}if(!g.params.centeredSlides){for(p=[],e=0;e<g.snapGrid.length;e++)g.snapGrid[e]<=g.virtualSize-g.size&&p.push(g.snapGrid[e]);g.snapGrid=p,Math.floor(g.virtualSize-g.size)-Math.floor(g.snapGrid[g.snapGrid.length-1])>1&&g.snapGrid.push(g.virtualSize-g.size)}0===g.snapGrid.length&&(g.snapGrid=[0]),0!==g.params.spaceBetween&&(g.isHorizontal()?g.rtl?g.slides.css({marginLeft:t+"px"}):g.slides.css({marginRight:t+"px"}):g.slides.css({marginBottom:t+"px"})),g.params.watchSlidesProgress&&g.updateSlidesOffset()}},g.updateSlidesOffset=function(){for(var e=0;e<g.slides.length;e++)g.slides[e].swiperSlideOffset=g.isHorizontal()?g.slides[e].offsetLeft:g.slides[e].offsetTop},g.updateSlidesProgress=function(e){if("undefined"==typeof e&&(e=g.translate||0),0!==g.slides.length){"undefined"==typeof g.slides[0].swiperSlideOffset&&g.updateSlidesOffset();var t=-e;g.rtl&&(t=e),g.slides.removeClass(g.params.slideVisibleClass);for(var a=0;a<g.slides.length;a++){var s=g.slides[a],n=(t-s.swiperSlideOffset)/(s.swiperSlideSize+g.params.spaceBetween);if(g.params.watchSlidesVisibility){var i=-(t-s.swiperSlideOffset),r=i+g.slidesSizesGrid[a],o=i>=0&&i<g.size||r>0&&r<=g.size||i<=0&&r>=g.size;o&&g.slides.eq(a).addClass(g.params.slideVisibleClass)}s.progress=g.rtl?-n:n}}},g.updateProgress=function(e){"undefined"==typeof e&&(e=g.translate||0);var t=g.maxTranslate()-g.minTranslate(),a=g.isBeginning,s=g.isEnd;0===t?(g.progress=0,g.isBeginning=g.isEnd=!0):(g.progress=(e-g.minTranslate())/t,g.isBeginning=g.progress<=0,g.isEnd=g.progress>=1),g.isBeginning&&!a&&g.emit("onReachBeginning",g),g.isEnd&&!s&&g.emit("onReachEnd",g),g.params.watchSlidesProgress&&g.updateSlidesProgress(e),g.emit("onProgress",g,g.progress)},g.updateActiveIndex=function(){var e,t,a,s=g.rtl?g.translate:-g.translate;for(t=0;t<g.slidesGrid.length;t++)"undefined"!=typeof g.slidesGrid[t+1]?s>=g.slidesGrid[t]&&s<g.slidesGrid[t+1]-(g.slidesGrid[t+1]-g.slidesGrid[t])/2?e=t:s>=g.slidesGrid[t]&&s<g.slidesGrid[t+1]&&(e=t+1):s>=g.slidesGrid[t]&&(e=t);(e<0||"undefined"==typeof e)&&(e=0),a=Math.floor(e/g.params.slidesPerGroup),a>=g.snapGrid.length&&(a=g.snapGrid.length-1),e!==g.activeIndex&&(g.snapIndex=a,g.previousIndex=g.activeIndex,g.activeIndex=e,g.updateClasses())},g.updateClasses=function(){g.slides.removeClass(g.params.slideActiveClass+" "+g.params.slideNextClass+" "+g.params.slidePrevClass);var t=g.slides.eq(g.activeIndex);t.addClass(g.params.slideActiveClass);var a=t.next("."+g.params.slideClass).addClass(g.params.slideNextClass);g.params.loop&&0===a.length&&g.slides.eq(0).addClass(g.params.slideNextClass);var s=t.prev("."+g.params.slideClass).addClass(g.params.slidePrevClass);if(g.params.loop&&0===s.length&&g.slides.eq(-1).addClass(g.params.slidePrevClass),g.paginationContainer&&g.paginationContainer.length>0){var n,i=g.params.loop?Math.ceil((g.slides.length-2*g.loopedSlides)/g.params.slidesPerGroup):g.snapGrid.length;if(g.params.loop?(n=Math.ceil((g.activeIndex-g.loopedSlides)/g.params.slidesPerGroup),n>g.slides.length-1-2*g.loopedSlides&&(n-=g.slides.length-2*g.loopedSlides),n>i-1&&(n-=i),n<0&&"bullets"!==g.params.paginationType&&(n=i+n)):n="undefined"!=typeof g.snapIndex?g.snapIndex:g.activeIndex||0,"bullets"===g.params.paginationType&&g.bullets&&g.bullets.length>0&&(g.bullets.removeClass(g.params.bulletActiveClass),g.paginationContainer.length>1?g.bullets.each(function(){e(this).index()===n&&e(this).addClass(g.params.bulletActiveClass)}):g.bullets.eq(n).addClass(g.params.bulletActiveClass)),"fraction"===g.params.paginationType&&(g.paginationContainer.find("."+g.params.paginationCurrentClass).text(n+1),g.paginationContainer.find("."+g.params.paginationTotalClass).text(i)),"progress"===g.params.paginationType){var r=(n+1)/i,o=r,d=1;g.isHorizontal()||(d=r,o=1),g.paginationContainer.find("."+g.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX("+o+") scaleY("+d+")").transition(g.params.speed)}"custom"===g.params.paginationType&&g.params.paginationCustomRender&&(g.paginationContainer.html(g.params.paginationCustomRender(g,n+1,i)),g.emit("onPaginationRendered",g,g.paginationContainer[0]))}g.params.loop||(g.params.prevButton&&g.prevButton&&g.prevButton.length>0&&(g.isBeginning?(g.prevButton.addClass(g.params.buttonDisabledClass),g.params.a11y&&g.a11y&&g.a11y.disable(g.prevButton)):(g.prevButton.removeClass(g.params.buttonDisabledClass),g.params.a11y&&g.a11y&&g.a11y.enable(g.prevButton))),g.params.nextButton&&g.nextButton&&g.nextButton.length>0&&(g.isEnd?(g.nextButton.addClass(g.params.buttonDisabledClass),g.params.a11y&&g.a11y&&g.a11y.disable(g.nextButton)):(g.nextButton.removeClass(g.params.buttonDisabledClass),g.params.a11y&&g.a11y&&g.a11y.enable(g.nextButton))))},g.updatePagination=function(){if(g.params.pagination&&g.paginationContainer&&g.paginationContainer.length>0){var e="";if("bullets"===g.params.paginationType){for(var t=g.params.loop?Math.ceil((g.slides.length-2*g.loopedSlides)/g.params.slidesPerGroup):g.snapGrid.length,a=0;a<t;a++)e+=g.params.paginationBulletRender?g.params.paginationBulletRender(a,g.params.bulletClass):"<"+g.params.paginationElement+' class="'+g.params.bulletClass+'"></'+g.params.paginationElement+">";g.paginationContainer.html(e),g.bullets=g.paginationContainer.find("."+g.params.bulletClass),g.params.paginationClickable&&g.params.a11y&&g.a11y&&g.a11y.initPagination()}"fraction"===g.params.paginationType&&(e=g.params.paginationFractionRender?g.params.paginationFractionRender(g,g.params.paginationCurrentClass,g.params.paginationTotalClass):'<span class="'+g.params.paginationCurrentClass+'"></span> / <span class="'+g.params.paginationTotalClass+'"></span>',g.paginationContainer.html(e)),"progress"===g.params.paginationType&&(e=g.params.paginationProgressRender?g.params.paginationProgressRender(g,g.params.paginationProgressbarClass):'<span class="'+g.params.paginationProgressbarClass+'"></span>',g.paginationContainer.html(e)),"custom"!==g.params.paginationType&&g.emit("onPaginationRendered",g,g.paginationContainer[0])}},g.update=function(e){function t(){s=Math.min(Math.max(g.translate,g.maxTranslate()),g.minTranslate()),g.setWrapperTranslate(s),g.updateActiveIndex(),g.updateClasses()}if(g.updateContainerSize(),g.updateSlidesSize(),g.updateProgress(),g.updatePagination(),g.updateClasses(),g.params.scrollbar&&g.scrollbar&&g.scrollbar.set(),e){var a,s;g.controller&&g.controller.spline&&(g.controller.spline=void 0),g.params.freeMode?(t(),g.params.autoHeight&&g.updateAutoHeight()):(a=("auto"===g.params.slidesPerView||g.params.slidesPerView>1)&&g.isEnd&&!g.params.centeredSlides?g.slideTo(g.slides.length-1,0,!1,!0):g.slideTo(g.activeIndex,0,!1,!0),a||t())}else g.params.autoHeight&&g.updateAutoHeight()},g.onResize=function(e){g.params.breakpoints&&g.setBreakpoint();var t=g.params.allowSwipeToPrev,a=g.params.allowSwipeToNext;
g.params.allowSwipeToPrev=g.params.allowSwipeToNext=!0,g.updateContainerSize(),g.updateSlidesSize(),("auto"===g.params.slidesPerView||g.params.freeMode||e)&&g.updatePagination(),g.params.scrollbar&&g.scrollbar&&g.scrollbar.set(),g.controller&&g.controller.spline&&(g.controller.spline=void 0);var s=!1;if(g.params.freeMode){var n=Math.min(Math.max(g.translate,g.maxTranslate()),g.minTranslate());g.setWrapperTranslate(n),g.updateActiveIndex(),g.updateClasses(),g.params.autoHeight&&g.updateAutoHeight()}else g.updateClasses(),s=("auto"===g.params.slidesPerView||g.params.slidesPerView>1)&&g.isEnd&&!g.params.centeredSlides?g.slideTo(g.slides.length-1,0,!1,!0):g.slideTo(g.activeIndex,0,!1,!0);g.params.lazyLoading&&!s&&g.lazy&&g.lazy.load(),g.params.allowSwipeToPrev=t,g.params.allowSwipeToNext=a};var Y=["mousedown","mousemove","mouseup"];window.navigator.pointerEnabled?Y=["pointerdown","pointermove","pointerup"]:window.navigator.msPointerEnabled&&(Y=["MSPointerDown","MSPointerMove","MSPointerUp"]),g.touchEvents={start:g.support.touch||!g.params.simulateTouch?"touchstart":Y[0],move:g.support.touch||!g.params.simulateTouch?"touchmove":Y[1],end:g.support.touch||!g.params.simulateTouch?"touchend":Y[2]},(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&("container"===g.params.touchEventsTarget?g.container:g.wrapper).addClass("swiper-wp8-"+g.params.direction),g.initEvents=function(e){var t=e?"off":"on",a=e?"removeEventListener":"addEventListener",n="container"===g.params.touchEventsTarget?g.container[0]:g.wrapper[0],i=g.support.touch?n:document,r=!!g.params.nested;g.browser.ie?(n[a](g.touchEvents.start,g.onTouchStart,!1),i[a](g.touchEvents.move,g.onTouchMove,r),i[a](g.touchEvents.end,g.onTouchEnd,!1)):(g.support.touch&&(n[a](g.touchEvents.start,g.onTouchStart,!1),n[a](g.touchEvents.move,g.onTouchMove,r),n[a](g.touchEvents.end,g.onTouchEnd,!1)),!s.simulateTouch||g.device.ios||g.device.android||(n[a]("mousedown",g.onTouchStart,!1),document[a]("mousemove",g.onTouchMove,r),document[a]("mouseup",g.onTouchEnd,!1))),window[a]("resize",g.onResize),g.params.nextButton&&g.nextButton&&g.nextButton.length>0&&(g.nextButton[t]("click",g.onClickNext),g.params.a11y&&g.a11y&&g.nextButton[t]("keydown",g.a11y.onEnterKey)),g.params.prevButton&&g.prevButton&&g.prevButton.length>0&&(g.prevButton[t]("click",g.onClickPrev),g.params.a11y&&g.a11y&&g.prevButton[t]("keydown",g.a11y.onEnterKey)),g.params.pagination&&g.params.paginationClickable&&(g.paginationContainer[t]("click","."+g.params.bulletClass,g.onClickIndex),g.params.a11y&&g.a11y&&g.paginationContainer[t]("keydown","."+g.params.bulletClass,g.a11y.onEnterKey)),(g.params.preventClicks||g.params.preventClicksPropagation)&&n[a]("click",g.preventClicks,!0)},g.attachEvents=function(){g.initEvents()},g.detachEvents=function(){g.initEvents(!0)},g.allowClick=!0,g.preventClicks=function(e){g.allowClick||(g.params.preventClicks&&e.preventDefault(),g.params.preventClicksPropagation&&g.animating&&(e.stopPropagation(),e.stopImmediatePropagation()))},g.onClickNext=function(e){e.preventDefault(),g.isEnd&&!g.params.loop||g.slideNext()},g.onClickPrev=function(e){e.preventDefault(),g.isBeginning&&!g.params.loop||g.slidePrev()},g.onClickIndex=function(t){t.preventDefault();var a=e(this).index()*g.params.slidesPerGroup;g.params.loop&&(a+=g.loopedSlides),g.slideTo(a)},g.updateClickedSlide=function(t){var a=r(t,"."+g.params.slideClass),s=!1;if(a)for(var n=0;n<g.slides.length;n++)g.slides[n]===a&&(s=!0);if(!a||!s)return g.clickedSlide=void 0,void(g.clickedIndex=void 0);if(g.clickedSlide=a,g.clickedIndex=e(a).index(),g.params.slideToClickedSlide&&void 0!==g.clickedIndex&&g.clickedIndex!==g.activeIndex){var i,o=g.clickedIndex;if(g.params.loop){if(g.animating)return;i=e(g.clickedSlide).attr("data-swiper-slide-index"),g.params.centeredSlides?o<g.loopedSlides-g.params.slidesPerView/2||o>g.slides.length-g.loopedSlides+g.params.slidesPerView/2?(g.fixLoop(),o=g.wrapper.children("."+g.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){g.slideTo(o)},0)):g.slideTo(o):o>g.slides.length-g.params.slidesPerView?(g.fixLoop(),o=g.wrapper.children("."+g.params.slideClass+'[data-swiper-slide-index="'+i+'"]:not(.swiper-slide-duplicate)').eq(0).index(),setTimeout(function(){g.slideTo(o)},0)):g.slideTo(o)}else g.slideTo(o)}};var v,w,k,D,T,b,S,x,H,P,C="input, select, textarea, button",j=Date.now(),A=[];g.animating=!1,g.touches={startX:0,startY:0,currentX:0,currentY:0,diff:0};var E,W;if(g.onTouchStart=function(t){if(t.originalEvent&&(t=t.originalEvent),E="touchstart"===t.type,E||!("which"in t)||3!==t.which){if(g.params.noSwiping&&r(t,"."+g.params.noSwipingClass))return void(g.allowClick=!0);if(!g.params.swipeHandler||r(t,g.params.swipeHandler)){var a=g.touches.currentX="touchstart"===t.type?t.targetTouches[0].pageX:t.pageX,s=g.touches.currentY="touchstart"===t.type?t.targetTouches[0].pageY:t.pageY;if(!(g.device.ios&&g.params.iOSEdgeSwipeDetection&&a<=g.params.iOSEdgeSwipeThreshold)){if(v=!0,w=!1,k=!0,T=void 0,W=void 0,g.touches.startX=a,g.touches.startY=s,D=Date.now(),g.allowClick=!0,g.updateContainerSize(),g.swipeDirection=void 0,g.params.threshold>0&&(x=!1),"touchstart"!==t.type){var n=!0;e(t.target).is(C)&&(n=!1),document.activeElement&&e(document.activeElement).is(C)&&document.activeElement.blur(),n&&t.preventDefault()}g.emit("onTouchStart",g,t)}}}},g.onTouchMove=function(t){if(t.originalEvent&&(t=t.originalEvent),!E||"mousemove"!==t.type){if(t.preventedByNestedSwiper)return g.touches.startX="touchmove"===t.type?t.targetTouches[0].pageX:t.pageX,void(g.touches.startY="touchmove"===t.type?t.targetTouches[0].pageY:t.pageY);if(g.params.onlyExternal)return g.allowClick=!1,void(v&&(g.touches.startX=g.touches.currentX="touchmove"===t.type?t.targetTouches[0].pageX:t.pageX,g.touches.startY=g.touches.currentY="touchmove"===t.type?t.targetTouches[0].pageY:t.pageY,D=Date.now()));if(E&&document.activeElement&&t.target===document.activeElement&&e(t.target).is(C))return w=!0,void(g.allowClick=!1);if(k&&g.emit("onTouchMove",g,t),!(t.targetTouches&&t.targetTouches.length>1)){if(g.touches.currentX="touchmove"===t.type?t.targetTouches[0].pageX:t.pageX,g.touches.currentY="touchmove"===t.type?t.targetTouches[0].pageY:t.pageY,"undefined"==typeof T){var a=180*Math.atan2(Math.abs(g.touches.currentY-g.touches.startY),Math.abs(g.touches.currentX-g.touches.startX))/Math.PI;T=g.isHorizontal()?a>g.params.touchAngle:90-a>g.params.touchAngle}if(T&&g.emit("onTouchMoveOpposite",g,t),"undefined"==typeof W&&g.browser.ieTouch&&(g.touches.currentX===g.touches.startX&&g.touches.currentY===g.touches.startY||(W=!0)),v){if(T)return void(v=!1);if(W||!g.browser.ieTouch){g.allowClick=!1,g.emit("onSliderMove",g,t),t.preventDefault(),g.params.touchMoveStopPropagation&&!g.params.nested&&t.stopPropagation(),w||(s.loop&&g.fixLoop(),S=g.getWrapperTranslate(),g.setWrapperTransition(0),g.animating&&g.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),g.params.autoplay&&g.autoplaying&&(g.params.autoplayDisableOnInteraction?g.stopAutoplay():g.pauseAutoplay()),P=!1,g.params.grabCursor&&(g.container[0].style.cursor="move",g.container[0].style.cursor="-webkit-grabbing",g.container[0].style.cursor="-moz-grabbin",g.container[0].style.cursor="grabbing")),w=!0;var n=g.touches.diff=g.isHorizontal()?g.touches.currentX-g.touches.startX:g.touches.currentY-g.touches.startY;n*=g.params.touchRatio,g.rtl&&(n=-n),g.swipeDirection=n>0?"prev":"next",b=n+S;var i=!0;if(n>0&&b>g.minTranslate()?(i=!1,g.params.resistance&&(b=g.minTranslate()-1+Math.pow(-g.minTranslate()+S+n,g.params.resistanceRatio))):n<0&&b<g.maxTranslate()&&(i=!1,g.params.resistance&&(b=g.maxTranslate()+1-Math.pow(g.maxTranslate()-S-n,g.params.resistanceRatio))),i&&(t.preventedByNestedSwiper=!0),!g.params.allowSwipeToNext&&"next"===g.swipeDirection&&b<S&&(b=S),!g.params.allowSwipeToPrev&&"prev"===g.swipeDirection&&b>S&&(b=S),g.params.followFinger){if(g.params.threshold>0){if(!(Math.abs(n)>g.params.threshold||x))return void(b=S);if(!x)return x=!0,g.touches.startX=g.touches.currentX,g.touches.startY=g.touches.currentY,b=S,void(g.touches.diff=g.isHorizontal()?g.touches.currentX-g.touches.startX:g.touches.currentY-g.touches.startY)}(g.params.freeMode||g.params.watchSlidesProgress)&&g.updateActiveIndex(),g.params.freeMode&&(0===A.length&&A.push({position:g.touches[g.isHorizontal()?"startX":"startY"],time:D}),A.push({position:g.touches[g.isHorizontal()?"currentX":"currentY"],time:(new window.Date).getTime()})),g.updateProgress(b),g.setWrapperTranslate(b)}}}}}},g.onTouchEnd=function(t){if(t.originalEvent&&(t=t.originalEvent),k&&g.emit("onTouchEnd",g,t),k=!1,v){g.params.grabCursor&&w&&v&&(g.container[0].style.cursor="move",g.container[0].style.cursor="-webkit-grab",g.container[0].style.cursor="-moz-grab",g.container[0].style.cursor="grab");var a=Date.now(),s=a-D;if(g.allowClick&&(g.updateClickedSlide(t),g.emit("onTap",g,t),s<300&&a-j>300&&(H&&clearTimeout(H),H=setTimeout(function(){g&&(g.params.paginationHide&&g.paginationContainer.length>0&&!e(t.target).hasClass(g.params.bulletClass)&&g.paginationContainer.toggleClass(g.params.paginationHiddenClass),g.emit("onClick",g,t))},300)),s<300&&a-j<300&&(H&&clearTimeout(H),g.emit("onDoubleTap",g,t))),j=Date.now(),setTimeout(function(){g&&(g.allowClick=!0)},0),!v||!w||!g.swipeDirection||0===g.touches.diff||b===S)return void(v=w=!1);v=w=!1;var n;if(n=g.params.followFinger?g.rtl?g.translate:-g.translate:-b,g.params.freeMode){if(n<-g.minTranslate())return void g.slideTo(g.activeIndex);if(n>-g.maxTranslate())return void(g.slides.length<g.snapGrid.length?g.slideTo(g.snapGrid.length-1):g.slideTo(g.slides.length-1));if(g.params.freeModeMomentum){if(A.length>1){var i=A.pop(),r=A.pop(),o=i.position-r.position,d=i.time-r.time;g.velocity=o/d,g.velocity=g.velocity/2,Math.abs(g.velocity)<g.params.freeModeMinimumVelocity&&(g.velocity=0),(d>150||(new window.Date).getTime()-i.time>300)&&(g.velocity=0)}else g.velocity=0;A.length=0;var l=1e3*g.params.freeModeMomentumRatio,u=g.velocity*l,m=g.translate+u;g.rtl&&(m=-m);var _,c=!1,h=20*Math.abs(g.velocity)*g.params.freeModeMomentumBounceRatio;if(m<g.maxTranslate())g.params.freeModeMomentumBounce?(m+g.maxTranslate()<-h&&(m=g.maxTranslate()-h),_=g.maxTranslate(),c=!0,P=!0):m=g.maxTranslate();else if(m>g.minTranslate())g.params.freeModeMomentumBounce?(m-g.minTranslate()>h&&(m=g.minTranslate()+h),_=g.minTranslate(),c=!0,P=!0):m=g.minTranslate();else if(g.params.freeModeSticky){var p,f=0;for(f=0;f<g.snapGrid.length;f+=1)if(g.snapGrid[f]>-m){p=f;break}m=Math.abs(g.snapGrid[p]-m)<Math.abs(g.snapGrid[p-1]-m)||"next"===g.swipeDirection?g.snapGrid[p]:g.snapGrid[p-1],g.rtl||(m=-m)}if(0!==g.velocity)l=g.rtl?Math.abs((-m-g.translate)/g.velocity):Math.abs((m-g.translate)/g.velocity);else if(g.params.freeModeSticky)return void g.slideReset();g.params.freeModeMomentumBounce&&c?(g.updateProgress(_),g.setWrapperTransition(l),g.setWrapperTranslate(m),g.onTransitionStart(),g.animating=!0,g.wrapper.transitionEnd(function(){g&&P&&(g.emit("onMomentumBounce",g),g.setWrapperTransition(g.params.speed),g.setWrapperTranslate(_),g.wrapper.transitionEnd(function(){g&&g.onTransitionEnd()}))})):g.velocity?(g.updateProgress(m),g.setWrapperTransition(l),g.setWrapperTranslate(m),g.onTransitionStart(),g.animating||(g.animating=!0,g.wrapper.transitionEnd(function(){g&&g.onTransitionEnd()}))):g.updateProgress(m),g.updateActiveIndex()}return void((!g.params.freeModeMomentum||s>=g.params.longSwipesMs)&&(g.updateProgress(),g.updateActiveIndex()))}var M,y=0,L=g.slidesSizesGrid[0];for(M=0;M<g.slidesGrid.length;M+=g.params.slidesPerGroup)"undefined"!=typeof g.slidesGrid[M+g.params.slidesPerGroup]?n>=g.slidesGrid[M]&&n<g.slidesGrid[M+g.params.slidesPerGroup]&&(y=M,L=g.slidesGrid[M+g.params.slidesPerGroup]-g.slidesGrid[M]):n>=g.slidesGrid[M]&&(y=M,L=g.slidesGrid[g.slidesGrid.length-1]-g.slidesGrid[g.slidesGrid.length-2]);var Y=(n-g.slidesGrid[y])/L;if(s>g.params.longSwipesMs){if(!g.params.longSwipes)return void g.slideTo(g.activeIndex);"next"===g.swipeDirection&&(Y>=g.params.longSwipesRatio?g.slideTo(y+g.params.slidesPerGroup):g.slideTo(y)),"prev"===g.swipeDirection&&(Y>1-g.params.longSwipesRatio?g.slideTo(y+g.params.slidesPerGroup):g.slideTo(y))}else{if(!g.params.shortSwipes)return void g.slideTo(g.activeIndex);"next"===g.swipeDirection&&g.slideTo(y+g.params.slidesPerGroup),"prev"===g.swipeDirection&&g.slideTo(y)}}},g._slideTo=function(e,t){return g.slideTo(e,t,!0,!0)},g.slideTo=function(e,t,a,s){"undefined"==typeof a&&(a=!0),"undefined"==typeof e&&(e=0),e<0&&(e=0),g.snapIndex=Math.floor(e/g.params.slidesPerGroup),g.snapIndex>=g.snapGrid.length&&(g.snapIndex=g.snapGrid.length-1);var n=-g.snapGrid[g.snapIndex];g.params.autoplay&&g.autoplaying&&(s||!g.params.autoplayDisableOnInteraction?g.pauseAutoplay(t):g.stopAutoplay()),g.updateProgress(n);for(var i=0;i<g.slidesGrid.length;i++)-Math.floor(100*n)>=Math.floor(100*g.slidesGrid[i])&&(e=i);return!(!g.params.allowSwipeToNext&&n<g.translate&&n<g.minTranslate())&&(!(!g.params.allowSwipeToPrev&&n>g.translate&&n>g.maxTranslate()&&(g.activeIndex||0)!==e)&&("undefined"==typeof t&&(t=g.params.speed),g.previousIndex=g.activeIndex||0,g.activeIndex=e,g.rtl&&-n===g.translate||!g.rtl&&n===g.translate?(g.params.autoHeight&&g.updateAutoHeight(),g.updateClasses(),"slide"!==g.params.effect&&g.setWrapperTranslate(n),!1):(g.updateClasses(),g.onTransitionStart(a),0===t?(g.setWrapperTranslate(n),g.setWrapperTransition(0),g.onTransitionEnd(a)):(g.setWrapperTranslate(n),g.setWrapperTransition(t),g.animating||(g.animating=!0,g.wrapper.transitionEnd(function(){g&&g.onTransitionEnd(a)}))),!0)))},g.onTransitionStart=function(e){"undefined"==typeof e&&(e=!0),g.params.autoHeight&&g.updateAutoHeight(),g.lazy&&g.lazy.onTransitionStart(),e&&(g.emit("onTransitionStart",g),g.activeIndex!==g.previousIndex&&(g.emit("onSlideChangeStart",g),g.activeIndex>g.previousIndex?g.emit("onSlideNextStart",g):g.emit("onSlidePrevStart",g)))},g.onTransitionEnd=function(e){g.animating=!1,g.setWrapperTransition(0),"undefined"==typeof e&&(e=!0),g.lazy&&g.lazy.onTransitionEnd(),e&&(g.emit("onTransitionEnd",g),g.activeIndex!==g.previousIndex&&(g.emit("onSlideChangeEnd",g),g.activeIndex>g.previousIndex?g.emit("onSlideNextEnd",g):g.emit("onSlidePrevEnd",g))),g.params.hashnav&&g.hashnav&&g.hashnav.setHash()},g.slideNext=function(e,t,a){if(g.params.loop){if(g.animating)return!1;g.fixLoop();g.container[0].clientLeft;return g.slideTo(g.activeIndex+g.params.slidesPerGroup,t,e,a)}return g.slideTo(g.activeIndex+g.params.slidesPerGroup,t,e,a)},g._slideNext=function(e){return g.slideNext(!0,e,!0)},g.slidePrev=function(e,t,a){if(g.params.loop){if(g.animating)return!1;g.fixLoop();g.container[0].clientLeft;return g.slideTo(g.activeIndex-1,t,e,a)}return g.slideTo(g.activeIndex-1,t,e,a)},g._slidePrev=function(e){return g.slidePrev(!0,e,!0)},g.slideReset=function(e,t,a){return g.slideTo(g.activeIndex,t,e)},g.setWrapperTransition=function(e,t){g.wrapper.transition(e),"slide"!==g.params.effect&&g.effects[g.params.effect]&&g.effects[g.params.effect].setTransition(e),g.params.parallax&&g.parallax&&g.parallax.setTransition(e),g.params.scrollbar&&g.scrollbar&&g.scrollbar.setTransition(e),g.params.control&&g.controller&&g.controller.setTransition(e,t),g.emit("onSetTransition",g,e)},g.setWrapperTranslate=function(e,t,a){var s=0,i=0,r=0;g.isHorizontal()?s=g.rtl?-e:e:i=e,g.params.roundLengths&&(s=n(s),i=n(i)),g.params.virtualTranslate||(g.support.transforms3d?g.wrapper.transform("translate3d("+s+"px, "+i+"px, "+r+"px)"):g.wrapper.transform("translate("+s+"px, "+i+"px)")),g.translate=g.isHorizontal()?s:i;var o,d=g.maxTranslate()-g.minTranslate();o=0===d?0:(e-g.minTranslate())/d,o!==g.progress&&g.updateProgress(e),t&&g.updateActiveIndex(),"slide"!==g.params.effect&&g.effects[g.params.effect]&&g.effects[g.params.effect].setTranslate(g.translate),g.params.parallax&&g.parallax&&g.parallax.setTranslate(g.translate),g.params.scrollbar&&g.scrollbar&&g.scrollbar.setTranslate(g.translate),g.params.control&&g.controller&&g.controller.setTranslate(g.translate,a),g.emit("onSetTranslate",g,g.translate)},g.getTranslate=function(e,t){var a,s,n,i;return"undefined"==typeof t&&(t="x"),g.params.virtualTranslate?g.rtl?-g.translate:g.translate:(n=window.getComputedStyle(e,null),window.WebKitCSSMatrix?(s=n.transform||n.webkitTransform,s.split(",").length>6&&(s=s.split(", ").map(function(e){return e.replace(",",".")}).join(", ")),i=new window.WebKitCSSMatrix("none"===s?"":s)):(i=n.MozTransform||n.OTransform||n.MsTransform||n.msTransform||n.transform||n.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=i.toString().split(",")),"x"===t&&(s=window.WebKitCSSMatrix?i.m41:16===a.length?parseFloat(a[12]):parseFloat(a[4])),"y"===t&&(s=window.WebKitCSSMatrix?i.m42:16===a.length?parseFloat(a[13]):parseFloat(a[5])),g.rtl&&s&&(s=-s),s||0)},g.getWrapperTranslate=function(e){return"undefined"==typeof e&&(e=g.isHorizontal()?"x":"y"),g.getTranslate(g.wrapper[0],e)},g.observers=[],g.initObservers=function(){if(g.params.observeParents)for(var e=g.container.parents(),t=0;t<e.length;t++)o(e[t]);o(g.container[0],{childList:!1}),o(g.wrapper[0],{attributes:!1})},g.disconnectObservers=function(){for(var e=0;e<g.observers.length;e++)g.observers[e].disconnect();g.observers=[]},g.createLoop=function(){g.wrapper.children("."+g.params.slideClass+"."+g.params.slideDuplicateClass).remove();var t=g.wrapper.children("."+g.params.slideClass);"auto"!==g.params.slidesPerView||g.params.loopedSlides||(g.params.loopedSlides=t.length),g.loopedSlides=parseInt(g.params.loopedSlides||g.params.slidesPerView,10),g.loopedSlides=g.loopedSlides+g.params.loopAdditionalSlides,g.loopedSlides>t.length&&(g.loopedSlides=t.length);var a,s=[],n=[];for(t.each(function(a,i){var r=e(this);a<g.loopedSlides&&n.push(i),a<t.length&&a>=t.length-g.loopedSlides&&s.push(i),r.attr("data-swiper-slide-index",a)}),a=0;a<n.length;a++)g.wrapper.append(e(n[a].cloneNode(!0)).addClass(g.params.slideDuplicateClass));for(a=s.length-1;a>=0;a--)g.wrapper.prepend(e(s[a].cloneNode(!0)).addClass(g.params.slideDuplicateClass))},g.destroyLoop=function(){g.wrapper.children("."+g.params.slideClass+"."+g.params.slideDuplicateClass).remove(),g.slides.removeAttr("data-swiper-slide-index")},g.reLoop=function(e){var t=g.activeIndex-g.loopedSlides;g.destroyLoop(),g.createLoop(),g.updateSlidesSize(),e&&g.slideTo(t+g.loopedSlides,0,!1)},g.fixLoop=function(){var e;g.activeIndex<g.loopedSlides?(e=g.slides.length-3*g.loopedSlides+g.activeIndex,e+=g.loopedSlides,g.slideTo(e,0,!1,!0)):("auto"===g.params.slidesPerView&&g.activeIndex>=2*g.loopedSlides||g.activeIndex>g.slides.length-2*g.params.slidesPerView)&&(e=-g.slides.length+g.activeIndex+g.loopedSlides,e+=g.loopedSlides,g.slideTo(e,0,!1,!0))},g.appendSlide=function(e){if(g.params.loop&&g.destroyLoop(),"object"==typeof e&&e.length)for(var t=0;t<e.length;t++)e[t]&&g.wrapper.append(e[t]);else g.wrapper.append(e);g.params.loop&&g.createLoop(),g.params.observer&&g.support.observer||g.update(!0)},g.prependSlide=function(e){g.params.loop&&g.destroyLoop();var t=g.activeIndex+1;if("object"==typeof e&&e.length){for(var a=0;a<e.length;a++)e[a]&&g.wrapper.prepend(e[a]);t=g.activeIndex+e.length}else g.wrapper.prepend(e);g.params.loop&&g.createLoop(),g.params.observer&&g.support.observer||g.update(!0),g.slideTo(t,0,!1)},g.removeSlide=function(e){g.params.loop&&(g.destroyLoop(),g.slides=g.wrapper.children("."+g.params.slideClass));var t,a=g.activeIndex;if("object"==typeof e&&e.length){for(var s=0;s<e.length;s++)t=e[s],g.slides[t]&&g.slides.eq(t).remove(),t<a&&a--;a=Math.max(a,0)}else t=e,g.slides[t]&&g.slides.eq(t).remove(),t<a&&a--,a=Math.max(a,0);g.params.loop&&g.createLoop(),g.params.observer&&g.support.observer||g.update(!0),g.params.loop?g.slideTo(a+g.loopedSlides,0,!1):g.slideTo(a,0,!1)},g.removeAllSlides=function(){for(var e=[],t=0;t<g.slides.length;t++)e.push(t);g.removeSlide(e)},g.effects={fade:{setTranslate:function(){for(var e=0;e<g.slides.length;e++){var t=g.slides.eq(e),a=t[0].swiperSlideOffset,s=-a;g.params.virtualTranslate||(s-=g.translate);var n=0;g.isHorizontal()||(n=s,s=0);var i=g.params.fade.crossFade?Math.max(1-Math.abs(t[0].progress),0):1+Math.min(Math.max(t[0].progress,-1),0);t.css({opacity:i}).transform("translate3d("+s+"px, "+n+"px, 0px)")}},setTransition:function(e){if(g.slides.transition(e),g.params.virtualTranslate&&0!==e){var t=!1;g.slides.transitionEnd(function(){if(!t&&g){t=!0,g.animating=!1;for(var e=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],a=0;a<e.length;a++)g.wrapper.trigger(e[a])}})}}},flip:{setTranslate:function(){for(var t=0;t<g.slides.length;t++){var a=g.slides.eq(t),s=a[0].progress;g.params.flip.limitRotation&&(s=Math.max(Math.min(a[0].progress,1),-1));var n=a[0].swiperSlideOffset,i=-180*s,r=i,o=0,d=-n,l=0;if(g.isHorizontal()?g.rtl&&(r=-r):(l=d,d=0,o=-r,r=0),a[0].style.zIndex=-Math.abs(Math.round(s))+g.slides.length,g.params.flip.slideShadows){var u=g.isHorizontal()?a.find(".swiper-slide-shadow-left"):a.find(".swiper-slide-shadow-top"),m=g.isHorizontal()?a.find(".swiper-slide-shadow-right"):a.find(".swiper-slide-shadow-bottom");0===u.length&&(u=e('<div class="swiper-slide-shadow-'+(g.isHorizontal()?"left":"top")+'"></div>'),a.append(u)),0===m.length&&(m=e('<div class="swiper-slide-shadow-'+(g.isHorizontal()?"right":"bottom")+'"></div>'),a.append(m)),u.length&&(u[0].style.opacity=Math.max(-s,0)),m.length&&(m[0].style.opacity=Math.max(s,0))}a.transform("translate3d("+d+"px, "+l+"px, 0px) rotateX("+o+"deg) rotateY("+r+"deg)")}},setTransition:function(t){if(g.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t),g.params.virtualTranslate&&0!==t){var a=!1;g.slides.eq(g.activeIndex).transitionEnd(function(){if(!a&&g&&e(this).hasClass(g.params.slideActiveClass)){a=!0,g.animating=!1;for(var t=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s=0;s<t.length;s++)g.wrapper.trigger(t[s])}})}}},cube:{setTranslate:function(){var t,a=0;g.params.cube.shadow&&(g.isHorizontal()?(t=g.wrapper.find(".swiper-cube-shadow"),0===t.length&&(t=e('<div class="swiper-cube-shadow"></div>'),g.wrapper.append(t)),t.css({height:g.width+"px"})):(t=g.container.find(".swiper-cube-shadow"),0===t.length&&(t=e('<div class="swiper-cube-shadow"></div>'),g.container.append(t))));for(var s=0;s<g.slides.length;s++){var n=g.slides.eq(s),i=90*s,r=Math.floor(i/360);g.rtl&&(i=-i,r=Math.floor(-i/360));var o=Math.max(Math.min(n[0].progress,1),-1),d=0,l=0,u=0;s%4===0?(d=4*-r*g.size,u=0):(s-1)%4===0?(d=0,u=4*-r*g.size):(s-2)%4===0?(d=g.size+4*r*g.size,u=g.size):(s-3)%4===0&&(d=-g.size,u=3*g.size+4*g.size*r),g.rtl&&(d=-d),g.isHorizontal()||(l=d,d=0);var m="rotateX("+(g.isHorizontal()?0:-i)+"deg) rotateY("+(g.isHorizontal()?i:0)+"deg) translate3d("+d+"px, "+l+"px, "+u+"px)";if(o<=1&&o>-1&&(a=90*s+90*o,g.rtl&&(a=90*-s-90*o)),n.transform(m),g.params.cube.slideShadows){var _=g.isHorizontal()?n.find(".swiper-slide-shadow-left"):n.find(".swiper-slide-shadow-top"),c=g.isHorizontal()?n.find(".swiper-slide-shadow-right"):n.find(".swiper-slide-shadow-bottom");0===_.length&&(_=e('<div class="swiper-slide-shadow-'+(g.isHorizontal()?"left":"top")+'"></div>'),n.append(_)),0===c.length&&(c=e('<div class="swiper-slide-shadow-'+(g.isHorizontal()?"right":"bottom")+'"></div>'),n.append(c)),_.length&&(_[0].style.opacity=Math.max(-o,0)),c.length&&(c[0].style.opacity=Math.max(o,0))}}if(g.wrapper.css({"-webkit-transform-origin":"50% 50% -"+g.size/2+"px","-moz-transform-origin":"50% 50% -"+g.size/2+"px","-ms-transform-origin":"50% 50% -"+g.size/2+"px","transform-origin":"50% 50% -"+g.size/2+"px"}),g.params.cube.shadow)if(g.isHorizontal())t.transform("translate3d(0px, "+(g.width/2+g.params.cube.shadowOffset)+"px, "+-g.width/2+"px) rotateX(90deg) rotateZ(0deg) scale("+g.params.cube.shadowScale+")");else{var h=Math.abs(a)-90*Math.floor(Math.abs(a)/90),p=1.5-(Math.sin(2*h*Math.PI/360)/2+Math.cos(2*h*Math.PI/360)/2),f=g.params.cube.shadowScale,M=g.params.cube.shadowScale/p,y=g.params.cube.shadowOffset;t.transform("scale3d("+f+", 1, "+M+") translate3d(0px, "+(g.height/2+y)+"px, "+-g.height/2/M+"px) rotateX(-90deg)")}var L=g.isSafari||g.isUiWebView?-g.size/2:0;g.wrapper.transform("translate3d(0px,0,"+L+"px) rotateX("+(g.isHorizontal()?0:a)+"deg) rotateY("+(g.isHorizontal()?-a:0)+"deg)")},setTransition:function(e){g.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),g.params.cube.shadow&&!g.isHorizontal()&&g.container.find(".swiper-cube-shadow").transition(e)}},coverflow:{setTranslate:function(){for(var t=g.translate,a=g.isHorizontal()?-t+g.width/2:-t+g.height/2,s=g.isHorizontal()?g.params.coverflow.rotate:-g.params.coverflow.rotate,n=g.params.coverflow.depth,i=0,r=g.slides.length;i<r;i++){var o=g.slides.eq(i),d=g.slidesSizesGrid[i],l=o[0].swiperSlideOffset,u=(a-l-d/2)/d*g.params.coverflow.modifier,m=g.isHorizontal()?s*u:0,_=g.isHorizontal()?0:s*u,c=-n*Math.abs(u),h=g.isHorizontal()?0:g.params.coverflow.stretch*u,p=g.isHorizontal()?g.params.coverflow.stretch*u:0;Math.abs(p)<.001&&(p=0),Math.abs(h)<.001&&(h=0),Math.abs(c)<.001&&(c=0),Math.abs(m)<.001&&(m=0),Math.abs(_)<.001&&(_=0);var f="translate3d("+p+"px,"+h+"px,"+c+"px)  rotateX("+_+"deg) rotateY("+m+"deg)";if(o.transform(f),o[0].style.zIndex=-Math.abs(Math.round(u))+1,g.params.coverflow.slideShadows){var M=g.isHorizontal()?o.find(".swiper-slide-shadow-left"):o.find(".swiper-slide-shadow-top"),y=g.isHorizontal()?o.find(".swiper-slide-shadow-right"):o.find(".swiper-slide-shadow-bottom");0===M.length&&(M=e('<div class="swiper-slide-shadow-'+(g.isHorizontal()?"left":"top")+'"></div>'),o.append(M)),0===y.length&&(y=e('<div class="swiper-slide-shadow-'+(g.isHorizontal()?"right":"bottom")+'"></div>'),o.append(y)),M.length&&(M[0].style.opacity=u>0?u:0),y.length&&(y[0].style.opacity=-u>0?-u:0)}}if(g.browser.ie){var L=g.wrapper[0].style;L.perspectiveOrigin=a+"px 50%"}},setTransition:function(e){g.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)}}},g.lazy={initialImageLoaded:!1,loadImageInSlide:function(t,a){if("undefined"!=typeof t&&("undefined"==typeof a&&(a=!0),0!==g.slides.length)){var s=g.slides.eq(t),n=s.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");!s.hasClass("swiper-lazy")||s.hasClass("swiper-lazy-loaded")||s.hasClass("swiper-lazy-loading")||(n=n.add(s[0])),0!==n.length&&n.each(function(){var t=e(this);t.addClass("swiper-lazy-loading");var n=t.attr("data-background"),i=t.attr("data-src"),r=t.attr("data-srcset");g.loadImage(t[0],i||n,r,!1,function(){if(n?(t.css("background-image",'url("'+n+'")'),t.removeAttr("data-background")):(r&&(t.attr("srcset",r),t.removeAttr("data-srcset")),i&&(t.attr("src",i),t.removeAttr("data-src"))),t.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),s.find(".swiper-lazy-preloader, .preloader").remove(),g.params.loop&&a){var e=s.attr("data-swiper-slide-index");if(s.hasClass(g.params.slideDuplicateClass)){var o=g.wrapper.children('[data-swiper-slide-index="'+e+'"]:not(.'+g.params.slideDuplicateClass+")");g.lazy.loadImageInSlide(o.index(),!1)}else{var d=g.wrapper.children("."+g.params.slideDuplicateClass+'[data-swiper-slide-index="'+e+'"]');g.lazy.loadImageInSlide(d.index(),!1)}}g.emit("onLazyImageReady",g,s[0],t[0])}),g.emit("onLazyImageLoad",g,s[0],t[0])})}},load:function(){var t;if(g.params.watchSlidesVisibility)g.wrapper.children("."+g.params.slideVisibleClass).each(function(){g.lazy.loadImageInSlide(e(this).index())});else if(g.params.slidesPerView>1)for(t=g.activeIndex;t<g.activeIndex+g.params.slidesPerView;t++)g.slides[t]&&g.lazy.loadImageInSlide(t);else g.lazy.loadImageInSlide(g.activeIndex);if(g.params.lazyLoadingInPrevNext)if(g.params.slidesPerView>1||g.params.lazyLoadingInPrevNextAmount&&g.params.lazyLoadingInPrevNextAmount>1){var a=g.params.lazyLoadingInPrevNextAmount,s=g.params.slidesPerView,n=Math.min(g.activeIndex+s+Math.max(a,s),g.slides.length),i=Math.max(g.activeIndex-Math.max(s,a),0);for(t=g.activeIndex+g.params.slidesPerView;t<n;t++)g.slides[t]&&g.lazy.loadImageInSlide(t);for(t=i;t<g.activeIndex;t++)g.slides[t]&&g.lazy.loadImageInSlide(t)}else{var r=g.wrapper.children("."+g.params.slideNextClass);r.length>0&&g.lazy.loadImageInSlide(r.index());var o=g.wrapper.children("."+g.params.slidePrevClass);o.length>0&&g.lazy.loadImageInSlide(o.index())}},onTransitionStart:function(){g.params.lazyLoading&&(g.params.lazyLoadingOnTransitionStart||!g.params.lazyLoadingOnTransitionStart&&!g.lazy.initialImageLoaded)&&g.lazy.load()},onTransitionEnd:function(){g.params.lazyLoading&&!g.params.lazyLoadingOnTransitionStart&&g.lazy.load()}},g.scrollbar={isTouched:!1,setDragPosition:function(e){var t=g.scrollbar,a=g.isHorizontal()?"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageX:e.pageX||e.clientX:"touchstart"===e.type||"touchmove"===e.type?e.targetTouches[0].pageY:e.pageY||e.clientY,s=a-t.track.offset()[g.isHorizontal()?"left":"top"]-t.dragSize/2,n=-g.minTranslate()*t.moveDivider,i=-g.maxTranslate()*t.moveDivider;s<n?s=n:s>i&&(s=i),s=-s/t.moveDivider,g.updateProgress(s),g.setWrapperTranslate(s,!0)},dragStart:function(e){var t=g.scrollbar;t.isTouched=!0,e.preventDefault(),e.stopPropagation(),t.setDragPosition(e),clearTimeout(t.dragTimeout),t.track.transition(0),g.params.scrollbarHide&&t.track.css("opacity",1),g.wrapper.transition(100),t.drag.transition(100),g.emit("onScrollbarDragStart",g)},dragMove:function(e){var t=g.scrollbar;t.isTouched&&(e.preventDefault?e.preventDefault():e.returnValue=!1,t.setDragPosition(e),g.wrapper.transition(0),t.track.transition(0),t.drag.transition(0),g.emit("onScrollbarDragMove",g))},dragEnd:function(e){var t=g.scrollbar;t.isTouched&&(t.isTouched=!1,g.params.scrollbarHide&&(clearTimeout(t.dragTimeout),t.dragTimeout=setTimeout(function(){t.track.css("opacity",0),t.track.transition(400)},1e3)),g.emit("onScrollbarDragEnd",g),g.params.scrollbarSnapOnRelease&&g.slideReset())},enableDraggable:function(){var t=g.scrollbar,a=g.support.touch?t.track:document;e(t.track).on(g.touchEvents.start,t.dragStart),e(a).on(g.touchEvents.move,t.dragMove),e(a).on(g.touchEvents.end,t.dragEnd)},disableDraggable:function(){var t=g.scrollbar,a=g.support.touch?t.track:document;e(t.track).off(g.touchEvents.start,t.dragStart),e(a).off(g.touchEvents.move,t.dragMove),e(a).off(g.touchEvents.end,t.dragEnd)},set:function(){if(g.params.scrollbar){var t=g.scrollbar;t.track=e(g.params.scrollbar),g.params.uniqueNavElements&&"string"==typeof g.params.scrollbar&&t.track.length>1&&1===g.container.find(g.params.scrollbar).length&&(t.track=g.container.find(g.params.scrollbar)),t.drag=t.track.find(".swiper-scrollbar-drag"),0===t.drag.length&&(t.drag=e('<div class="swiper-scrollbar-drag"></div>'),t.track.append(t.drag)),t.drag[0].style.width="",t.drag[0].style.height="",t.trackSize=g.isHorizontal()?t.track[0].offsetWidth:t.track[0].offsetHeight,t.divider=g.size/g.virtualSize,t.moveDivider=t.divider*(t.trackSize/g.size),t.dragSize=t.trackSize*t.divider,g.isHorizontal()?t.drag[0].style.width=t.dragSize+"px":t.drag[0].style.height=t.dragSize+"px",t.divider>=1?t.track[0].style.display="none":t.track[0].style.display="",g.params.scrollbarHide&&(t.track[0].style.opacity=0)}},setTranslate:function(){if(g.params.scrollbar){var e,t=g.scrollbar,a=(g.translate||0,t.dragSize);e=(t.trackSize-t.dragSize)*g.progress,g.rtl&&g.isHorizontal()?(e=-e,e>0?(a=t.dragSize-e,e=0):-e+t.dragSize>t.trackSize&&(a=t.trackSize+e)):e<0?(a=t.dragSize+e,e=0):e+t.dragSize>t.trackSize&&(a=t.trackSize-e),g.isHorizontal()?(g.support.transforms3d?t.drag.transform("translate3d("+e+"px, 0, 0)"):t.drag.transform("translateX("+e+"px)"),
t.drag[0].style.width=a+"px"):(g.support.transforms3d?t.drag.transform("translate3d(0px, "+e+"px, 0)"):t.drag.transform("translateY("+e+"px)"),t.drag[0].style.height=a+"px"),g.params.scrollbarHide&&(clearTimeout(t.timeout),t.track[0].style.opacity=1,t.timeout=setTimeout(function(){t.track[0].style.opacity=0,t.track.transition(400)},1e3))}},setTransition:function(e){g.params.scrollbar&&g.scrollbar.drag.transition(e)}},g.controller={LinearSpline:function(e,t){this.x=e,this.y=t,this.lastIndex=e.length-1;var a,s;this.x.length;this.interpolate=function(e){return e?(s=n(this.x,e),a=s-1,(e-this.x[a])*(this.y[s]-this.y[a])/(this.x[s]-this.x[a])+this.y[a]):0};var n=function(){var e,t,a;return function(s,n){for(t=-1,e=s.length;e-t>1;)s[a=e+t>>1]<=n?t=a:e=a;return e}}()},getInterpolateFunction:function(e){g.controller.spline||(g.controller.spline=g.params.loop?new g.controller.LinearSpline(g.slidesGrid,e.slidesGrid):new g.controller.LinearSpline(g.snapGrid,e.snapGrid))},setTranslate:function(e,t){function s(t){e=t.rtl&&"horizontal"===t.params.direction?-g.translate:g.translate,"slide"===g.params.controlBy&&(g.controller.getInterpolateFunction(t),i=-g.controller.spline.interpolate(-e)),i&&"container"!==g.params.controlBy||(n=(t.maxTranslate()-t.minTranslate())/(g.maxTranslate()-g.minTranslate()),i=(e-g.minTranslate())*n+t.minTranslate()),g.params.controlInverse&&(i=t.maxTranslate()-i),t.updateProgress(i),t.setWrapperTranslate(i,!1,g),t.updateActiveIndex()}var n,i,r=g.params.control;if(g.isArray(r))for(var o=0;o<r.length;o++)r[o]!==t&&r[o]instanceof a&&s(r[o]);else r instanceof a&&t!==r&&s(r)},setTransition:function(e,t){function s(t){t.setWrapperTransition(e,g),0!==e&&(t.onTransitionStart(),t.wrapper.transitionEnd(function(){i&&(t.params.loop&&"slide"===g.params.controlBy&&t.fixLoop(),t.onTransitionEnd())}))}var n,i=g.params.control;if(g.isArray(i))for(n=0;n<i.length;n++)i[n]!==t&&i[n]instanceof a&&s(i[n]);else i instanceof a&&t!==i&&s(i)}},g.hashnav={init:function(){if(g.params.hashnav){g.hashnav.initialized=!0;var e=document.location.hash.replace("#","");if(e)for(var t=0,a=0,s=g.slides.length;a<s;a++){var n=g.slides.eq(a),i=n.attr("data-hash");if(i===e&&!n.hasClass(g.params.slideDuplicateClass)){var r=n.index();g.slideTo(r,t,g.params.runCallbacksOnInit,!0)}}}},setHash:function(){g.hashnav.initialized&&g.params.hashnav&&(document.location.hash=g.slides.eq(g.activeIndex).attr("data-hash")||"")}},g.disableKeyboardControl=function(){g.params.keyboardControl=!1,e(document).off("keydown",d)},g.enableKeyboardControl=function(){g.params.keyboardControl=!0,e(document).on("keydown",d)},g.mousewheel={event:!1,lastScrollTime:(new window.Date).getTime()},g.params.mousewheelControl){try{new window.WheelEvent("wheel"),g.mousewheel.event="wheel"}catch(z){(window.WheelEvent||g.container[0]&&"wheel"in g.container[0])&&(g.mousewheel.event="wheel")}!g.mousewheel.event&&window.WheelEvent,g.mousewheel.event||void 0===document.onmousewheel||(g.mousewheel.event="mousewheel"),g.mousewheel.event||(g.mousewheel.event="DOMMouseScroll")}g.disableMousewheelControl=function(){return!!g.mousewheel.event&&(g.container.off(g.mousewheel.event,l),!0)},g.enableMousewheelControl=function(){return!!g.mousewheel.event&&(g.container.on(g.mousewheel.event,l),!0)},g.parallax={setTranslate:function(){g.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){u(this,g.progress)}),g.slides.each(function(){var t=e(this);t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var e=Math.min(Math.max(t[0].progress,-1),1);u(this,e)})})},setTransition:function(t){"undefined"==typeof t&&(t=g.params.speed),g.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function(){var a=e(this),s=parseInt(a.attr("data-swiper-parallax-duration"),10)||t;0===t&&(s=0),a.transition(s)})}},g._plugins=[];for(var I in g.plugins){var B=g.plugins[I](g,g.params[I]);B&&g._plugins.push(B)}return g.callPlugins=function(e){for(var t=0;t<g._plugins.length;t++)e in g._plugins[t]&&g._plugins[t][e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},g.emitterEventListeners={},g.emit=function(e){g.params[e]&&g.params[e](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);var t;if(g.emitterEventListeners[e])for(t=0;t<g.emitterEventListeners[e].length;t++)g.emitterEventListeners[e][t](arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);g.callPlugins&&g.callPlugins(e,arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])},g.on=function(e,t){return e=m(e),g.emitterEventListeners[e]||(g.emitterEventListeners[e]=[]),g.emitterEventListeners[e].push(t),g},g.off=function(e,t){var a;if(e=m(e),"undefined"==typeof t)return g.emitterEventListeners[e]=[],g;if(g.emitterEventListeners[e]&&0!==g.emitterEventListeners[e].length){for(a=0;a<g.emitterEventListeners[e].length;a++)g.emitterEventListeners[e][a]===t&&g.emitterEventListeners[e].splice(a,1);return g}},g.once=function(e,t){e=m(e);var a=function(){t(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]),g.off(e,a)};return g.on(e,a),g},g.a11y={makeFocusable:function(e){return e.attr("tabIndex","0"),e},addRole:function(e,t){return e.attr("role",t),e},addLabel:function(e,t){return e.attr("aria-label",t),e},disable:function(e){return e.attr("aria-disabled",!0),e},enable:function(e){return e.attr("aria-disabled",!1),e},onEnterKey:function(t){13===t.keyCode&&(e(t.target).is(g.params.nextButton)?(g.onClickNext(t),g.isEnd?g.a11y.notify(g.params.lastSlideMessage):g.a11y.notify(g.params.nextSlideMessage)):e(t.target).is(g.params.prevButton)&&(g.onClickPrev(t),g.isBeginning?g.a11y.notify(g.params.firstSlideMessage):g.a11y.notify(g.params.prevSlideMessage)),e(t.target).is("."+g.params.bulletClass)&&e(t.target)[0].click())},liveRegion:e('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),notify:function(e){var t=g.a11y.liveRegion;0!==t.length&&(t.html(""),t.html(e))},init:function(){g.params.nextButton&&g.nextButton&&g.nextButton.length>0&&(g.a11y.makeFocusable(g.nextButton),g.a11y.addRole(g.nextButton,"button"),g.a11y.addLabel(g.nextButton,g.params.nextSlideMessage)),g.params.prevButton&&g.prevButton&&g.prevButton.length>0&&(g.a11y.makeFocusable(g.prevButton),g.a11y.addRole(g.prevButton,"button"),g.a11y.addLabel(g.prevButton,g.params.prevSlideMessage)),e(g.container).append(g.a11y.liveRegion)},initPagination:function(){g.params.pagination&&g.params.paginationClickable&&g.bullets&&g.bullets.length&&g.bullets.each(function(){var t=e(this);g.a11y.makeFocusable(t),g.a11y.addRole(t,"button"),g.a11y.addLabel(t,g.params.paginationBulletMessage.replace(/{{index}}/,t.index()+1))})},destroy:function(){g.a11y.liveRegion&&g.a11y.liveRegion.length>0&&g.a11y.liveRegion.remove()}},g.init=function(){g.params.loop&&g.createLoop(),g.updateContainerSize(),g.updateSlidesSize(),g.updatePagination(),g.params.scrollbar&&g.scrollbar&&(g.scrollbar.set(),g.params.scrollbarDraggable&&g.scrollbar.enableDraggable()),"slide"!==g.params.effect&&g.effects[g.params.effect]&&(g.params.loop||g.updateProgress(),g.effects[g.params.effect].setTranslate()),g.params.loop?g.slideTo(g.params.initialSlide+g.loopedSlides,0,g.params.runCallbacksOnInit):(g.slideTo(g.params.initialSlide,0,g.params.runCallbacksOnInit),0===g.params.initialSlide&&(g.parallax&&g.params.parallax&&g.parallax.setTranslate(),g.lazy&&g.params.lazyLoading&&(g.lazy.load(),g.lazy.initialImageLoaded=!0))),g.attachEvents(),g.params.observer&&g.support.observer&&g.initObservers(),g.params.preloadImages&&!g.params.lazyLoading&&g.preloadImages(),g.params.autoplay&&g.startAutoplay(),g.params.keyboardControl&&g.enableKeyboardControl&&g.enableKeyboardControl(),g.params.mousewheelControl&&g.enableMousewheelControl&&g.enableMousewheelControl(),g.params.hashnav&&g.hashnav&&g.hashnav.init(),g.params.a11y&&g.a11y&&g.a11y.init(),g.emit("onInit",g)},g.cleanupStyles=function(){g.container.removeClass(g.classNames.join(" ")).removeAttr("style"),g.wrapper.removeAttr("style"),g.slides&&g.slides.length&&g.slides.removeClass([g.params.slideVisibleClass,g.params.slideActiveClass,g.params.slideNextClass,g.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),g.paginationContainer&&g.paginationContainer.length&&g.paginationContainer.removeClass(g.params.paginationHiddenClass),g.bullets&&g.bullets.length&&g.bullets.removeClass(g.params.bulletActiveClass),g.params.prevButton&&e(g.params.prevButton).removeClass(g.params.buttonDisabledClass),g.params.nextButton&&e(g.params.nextButton).removeClass(g.params.buttonDisabledClass),g.params.scrollbar&&g.scrollbar&&(g.scrollbar.track&&g.scrollbar.track.length&&g.scrollbar.track.removeAttr("style"),g.scrollbar.drag&&g.scrollbar.drag.length&&g.scrollbar.drag.removeAttr("style"))},g.destroy=function(e,t){g.detachEvents(),g.stopAutoplay(),g.params.scrollbar&&g.scrollbar&&g.params.scrollbarDraggable&&g.scrollbar.disableDraggable(),g.params.loop&&g.destroyLoop(),t&&g.cleanupStyles(),g.disconnectObservers(),g.params.keyboardControl&&g.disableKeyboardControl&&g.disableKeyboardControl(),g.params.mousewheelControl&&g.disableMousewheelControl&&g.disableMousewheelControl(),g.params.a11y&&g.a11y&&g.a11y.destroy(),g.emit("onDestroy"),e!==!1&&(g=null)},g.init(),g}};a.prototype={isSafari:function(){var e=navigator.userAgent.toLowerCase();return e.indexOf("safari")>=0&&e.indexOf("chrome")<0&&e.indexOf("android")<0}(),isUiWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),isArray:function(e){return"[object Array]"===Object.prototype.toString.apply(e)},browser:{ie:window.navigator.pointerEnabled||window.navigator.msPointerEnabled,ieTouch:window.navigator.msPointerEnabled&&window.navigator.msMaxTouchPoints>1||window.navigator.pointerEnabled&&window.navigator.maxTouchPoints>1},device:function(){var e=navigator.userAgent,t=e.match(/(Android);?[\s\/]+([\d.]+)?/),a=e.match(/(iPad).*OS\s([\d_]+)/),s=e.match(/(iPod)(.*OS\s([\d_]+))?/),n=!a&&e.match(/(iPhone\sOS)\s([\d_]+)/);return{ios:a||n||s,android:t}}(),support:{touch:window.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&Modernizr.csstransforms3d===!0||function(){var e=document.createElement("div").style;return"webkitPerspective"in e||"MozPerspective"in e||"OPerspective"in e||"MsPerspective"in e||"perspective"in e}(),flexbox:function(){for(var e=document.createElement("div").style,t="alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "),a=0;a<t.length;a++)if(t[a]in e)return!0}(),observer:function(){return"MutationObserver"in window||"WebkitMutationObserver"in window}()},plugins:{}},t(e);var s=e;return s&&("transitionEnd"in s.fn||(s.fn.transitionEnd=function(e){function t(i){if(i.target===this)for(e.call(this,i),a=0;a<s.length;a++)n.off(s[a],t)}var a,s=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],n=this;if(e)for(a=0;a<s.length;a++)n.on(s[a],t);return this}),"transform"in s.fn||(s.fn.transform=function(e){for(var t=0;t<this.length;t++){var a=this[t].style;a.webkitTransform=a.MsTransform=a.msTransform=a.MozTransform=a.OTransform=a.transform=e}return this}),"transition"in s.fn||(s.fn.transition=function(e){"string"!=typeof e&&(e+="ms");for(var t=0;t<this.length;t++){var a=this[t].style;a.webkitTransitionDuration=a.MsTransitionDuration=a.msTransitionDuration=a.MozTransitionDuration=a.OTransitionDuration=a.transitionDuration=e}return this})),a})}]);number')
	                this.locale.firstDay = options.locale.firstDay;

	            if (typeof options.locale.applyLabel === 'string')
	                this.locale.applyLabel = options.locale.applyLabel;

	            if (typeof options.locale.cancelLabel === 'string')
	                this.locale.cancelLabel = options.locale.cancelLabel;

	            if (typeof options.locale.weekLabel === 'string')
	                this.locale.weekLabel = options.locale.weekLabel;

	            if (typeof options.locale.customRangeLabel === 'string')
	                this.locale.customRangeLabel = options.locale.customRangeLabel;

	        }

	        if (typeof options.startDate === 'string')
	            this.startDate = moment(options.startDate, this.locale.format);

	        if (typeof options.endDate === 'string')
	            this.endDate = moment(options.endDate, this.locale.format);

	        if (typeof options.minDate === 'string')
	            this.minDate = moment(options.minDate, this.locale.format);

	        if (typeof options.maxDate === 'string')
	            this.maxDate = moment(options.maxDate, this.locale.format);

	        if (typeof options.startDate === 'object')
	            this.startDate = moment(options.startDate);

	        if (typeof options.endDate === 'object')
	            this.endDate = moment(options.endDate);

	        if (typeof options.minDate === 'object')
	            this.minDate = moment(options.minDate);

	        if (typeof options.maxDate === 'object')
	            this.maxDate = moment(options.maxDate);

	        // sanity check for bad options
	        if (this.minDate && this.startDate.isBefore(this.minDate))
	            this.startDate = this.minDate.clone();

	        // sanity check for bad options
	        if (this.maxDate && this.endDate.isAfter(this.maxDate))
	            this.endDate = this.maxDate.clone();

	        if (typeof options.applyClass === 'string')
	            this.applyClass = options.applyClass;

	        if (typeof options.cancelClass === 'string')
	            this.cancelClass = options.cancelClass;

	        if (typeof options.dateLimit === 'object')
	            this.dateLimit = options.dateLimit;

	        if (typeof options.opens === 'string')
	            this.opens = options.opens;

	        if (typeof options.drops === 'string')
	            this.drops = options.drops;

	        if (typeof options.showWeekNumbers === 'boolean')
	            this.showWeekNumbers = options.showWeekNumbers;

	        if (typeof options.buttonClasses === 'string')
	            this.buttonClasses = options.buttonClasses;

	        if (typeof options.buttonClasses === 'object')
	            this.buttonClasses = options.buttonClasses.join(' ');

	        if (typeof options.showDropdowns === 'boolean')
	            this.showDropdowns = options.showDropdowns;

	        if (typeof options.singleDatePicker === 'boolean') {
	            this.singleDatePicker = options.singleDatePicker;
	            if (this.singleDatePicker)
	                this.endDate = this.startDate.clone();
	        }

	        if (typeof options.timePicker === 'boolean')
	            this.timePicker = options.timePicker;

	        if (typeof options.timePickerSeconds === 'boolean')
	            this.timePickerSeconds = options.timePickerSeconds;

	        if (typeof options.timePickerIncrement === 'number')
	            this.timePickerIncrement = options.timePickerIncrement;

	        if (typeof options.timePicker24Hour === 'boolean')
	            this.timePicker24Hour = options.timePicker24Hour;

	        if (typeof options.autoApply === 'boolean')
	            this.autoApply = options.autoApply;

	        if (typeof options.autoUpdateInput === 'boolean')
	            this.autoUpdateInput = options.autoUpdateInput;

	        if (typeof options.linkedCalendars === 'boolean')
	            this.linkedCalendars = options.linkedCalendars;

	        if (typeof options.isInvalidDate === 'function')
	            this.isInvalidDate = options.isInvalidDate;

	        // update day names order to firstDay
	        if (this.locale.firstDay != 0) {
	            var iterator = this.locale.firstDay;
	            while (iterator > 0) {
	                this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
	                iterator--;
	            }
	        }

	        var start, end, range;

	        //if no start/end dates set, check if an input element contains initial values
	        if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
	            if ($(this.element).is('input[type=text]')) {
	                var val = $(this.element).val(),
	                    split = val.split(this.locale.separator);

	                start = end = null;

	                if (split.length == 2) {
	                    start = moment(split[0], this.locale.format);
	                    end = moment(split[1], this.locale.format);
	                } else if (this.singleDatePicker && val !== "") {
	                    start = moment(val, this.locale.format);
	                    end = moment(val, this.locale.format);
	                }
	                if (start !== null && end !== null) {
	                    this.setStartDate(start);
	                    this.setEndDate(end);
	                }
	            }
	        }

	        if (typeof options.ranges === 'object') {
	            for (range in options.ranges) {

	                if (typeof options.ranges[range][0] === 'string')
	                    start = moment(options.ranges[range][0], this.locale.format);
	                else
	                    start = moment(options.ranges[range][0]);

	                if (typeof options.ranges[range][1] === 'string')
	                    end = moment(options.ranges[range][1], this.locale.format);
	                else
	                    end = moment(options.ranges[range][1]);

	                // If the start or end date exceed those allowed by the minDate or dateLimit
	                // options, shorten the range to the allowable period.
	                if (this.minDate && start.isBefore(this.minDate))
	                    start = this.minDate.clone();

	                var maxDate = this.maxDate;
	                if (this.dateLimit && start.clone().add(this.dateLimit).isAfter(maxDate))
	                    maxDate = start.clone().add(this.dateLimit);
	                if (maxDate && end.isAfter(maxDate))
	                    end = maxDate.clone();

	                // If the end of the range is before the minimum or the start of the range is
	                // after the maximum, don't display this range option at all.
	                if ((this.minDate && end.isBefore(this.minDate)) || (maxDate && start.isAfter(maxDate)))
	                    continue;

	                //Support unicode chars in the range names.
	                var elem = document.createElement('textarea');
	                elem.innerHTML = range;
	                rangeHtml = elem.value;

	                this.ranges[rangeHtml] = [start, end];
	            }

	            var list = '<ul>';
	            for (range in this.ranges) {
	                list += '<li>' + range + '</li>';
	            }
	            list += '<li>' + this.locale.customRangeLabel + '</li>';
	            list += '</ul>';
	            this.container.find('.ranges').prepend(list);
	        }

	        if (typeof cb === 'function') {
	            this.callback = cb;
	        }

	        if (!this.timePicker) {
	            this.startDate = this.startDate.startOf('day');
	            this.endDate = this.endDate.endOf('day');
	            this.container.find('.calendar-time').hide();
	        }

	        //can't be used together for now
	        if (this.timePicker && this.autoApply)
	            this.autoApply = false;

	        if (this.autoApply && typeof options.ranges !== 'object') {
	            this.container.find('.ranges').hide();
	        } else if (this.autoApply) {
	            this.container.find('.applyBtn, .cancelBtn').addClass('hide');
	        }

	        if (this.singleDatePicker) {
	            this.container.addClass('single');
	            this.container.find('.calendar.left').addClass('single');
	            this.container.find('.calendar.left').show();
	            this.container.find('.calendar.right').hide();
	            this.container.find('.daterangepicker_input input, .daterangepicker_input i').hide();
	            if (!this.timePicker) {
	                this.container.find('.ranges').hide();
	            }
	        }

	        if (typeof options.ranges === 'undefined' && !this.singleDatePicker) {
	            this.container.addClass('show-calendar');
	        }

	        this.container.addClass('opens' + this.opens);

	        //swap the position of the predefined ranges if opens right
	        if (typeof options.ranges !== 'undefined' && this.opens == 'right') {
	            var ranges = this.container.find('.ranges');
	            var html = ranges.clone();
	            ranges.remove();
	            this.container.find('.calendar.left').parent().prepend(html);
	        }

	        //apply CSS classes and labels to buttons
	        this.container.find('.applyBtn, .cancelBtn').addClass(this.buttonClasses);
	        if (this.applyClass.length)
	            this.container.find('.applyBtn').addClass(this.applyClass);
	        if (this.cancelClass.length)
	            this.container.find('.cancelBtn').addClass(this.cancelClass);
	        this.container.find('.applyBtn').html(this.locale.applyLabel);
	        this.container.find('.cancelBtn').html(this.locale.cancelLabel);

	        //自定义部分
	        if(options.rangesHour&&options.rangesHour.length==2){
	            this.rangesHour = options.rangesHour;
	        }

	        //
	        // event listeners
	        //

	        this.container.find('.calendar')
	            .on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this))
	            .on('click.daterangepicker', '.next', $.proxy(this.clickNext, this))
	            .on('click.daterangepicker', 'td.available', $.proxy(this.clickDate, this))
	            .on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this))
	            .on('mouseleave.daterangepicker', 'td.available', $.proxy(this.updateFormInputs, this))
	            .on('change.daterangepicker', 'select.yearselect', $.proxy(this.monthOrYearChanged, this))
	            .on('change.daterangepicker', 'select.monthselect', $.proxy(this.monthOrYearChanged, this))
	            .on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.secondselect,select.ampmselect', $.proxy(this.timeChanged, this))
	            .on('click.daterangepicker', '.daterangepicker_input input', $.proxy(this.showCalendars, this))
	            //.on('keyup.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsChanged, this))
	            .on('change.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsChanged, this));

	        this.container.find('.ranges')
	            .on('click.daterangepicker', 'button.applyBtn', $.proxy(this.clickApply, this))
	            .on('click.daterangepicker', 'button.cancelBtn', $.proxy(this.clickCancel, this))
	            .on('click.daterangepicker', 'li', $.proxy(this.clickRange, this))
	            .on('mouseenter.daterangepicker', 'li', $.proxy(this.hoverRange, this))
	            .on('mouseleave.daterangepicker', 'li', $.proxy(this.updateFormInputs, this));

	        if (this.element.is('input')) {
	            this.element.on({
	                'click.daterangepicker': $.proxy(this.show, this),
	                'focus.daterangepicker': $.proxy(this.show, this),
	                'keyup.daterangepicker': $.proxy(this.elementChanged, this),
	                'keydown.daterangepicker': $.proxy(this.keydown, this)
	            });
	        } else {
	            this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
	        }

	        //
	        // if attached to a text input, set the initial value
	        //

	        if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
	            this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
	            this.element.trigger('change');
	        } else if (this.element.is('input') && this.autoUpdateInput) {
	            this.element.val(this.startDate.format(this.locale.format));
	            this.element.trigger('change');
	        }

	    };

	    DateRangePicker.prototype = {

	        constructor: DateRangePicker,

	        setStartDate: function(startDate) {
	            if (typeof startDate === 'string')
	                this.startDate = moment(startDate, this.locale.format);

	            if (typeof startDate === 'object')
	                this.startDate = moment(startDate);

	            if (!this.timePicker)
	                this.startDate = this.startDate.startOf('day');

	            if (this.timePicker && this.timePickerIncrement)
	                this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

	            if (this.minDate && this.startDate.isBefore(this.minDate))
	                this.startDate = this.minDate;

	            if (this.maxDate && this.startDate.isAfter(this.maxDate))
	                this.startDate = this.maxDate;

	            if (!this.isShowing)
	                this.updateElement();

	            this.updateMonthsInView();
	        },

	        setEndDate: function(endDate) {
	            if (typeof endDate === 'string')
	                this.endDate = moment(endDate, this.locale.format);

	            if (typeof endDate === 'object')
	                this.endDate = moment(endDate);

	            if (!this.timePicker)
	                this.endDate = this.endDate.endOf('day');

	            if (this.timePicker && this.timePickerIncrement)
	                this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

	            if (this.endDate.isBefore(this.startDate))
	                this.endDate = this.startDate.clone();

	            if (this.maxDate && this.endDate.isAfter(this.maxDate))
	                this.endDate = this.maxDate;

	            if (this.dateLimit && this.startDate.clone().add(this.dateLimit).isBefore(this.endDate))
	                this.endDate = this.startDate.clone().add(this.dateLimit);

	            if (!this.isShowing)
	                this.updateElement();

	            this.updateMonthsInView();
	        },

	        isInvalidDate: function() {
	            return false;
	        },

	        updateView: function() {
	            if (this.timePicker) {
	                this.renderTimePicker('left');
	                this.renderTimePicker('right');
	                if (!this.endDate) {
	                    this.container.find('.right .calendar-time select').attr('disabled', 'disabled').addClass('disabled');
	                } else {
	                    this.container.find('.right .calendar-time select').removeAttr('disabled').removeClass('disabled');
	                }
	            }
	            // console.log("this.endDate",this.endDate)
	            if (this.endDate) {
	                this.container.find('input[name="daterangepicker_end"]').removeClass('active');
	                this.container.find('input[name="daterangepicker_start"]').addClass('active');
	            } else {
	                this.container.find('input[name="daterangepicker_end"]').addClass('active');
	                this.container.find('input[name="daterangepicker_start"]').removeClass('active');
	            }
	            this.updateMonthsInView();
	            this.updateCalendars();
	            this.updateFormInputs();
	        },

	        updateMonthsInView: function() {
	            if (this.endDate) {

	                //if both dates are visible already, do nothing
	                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month &&
	                    (this.startDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.startDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
	                    &&
	                    (this.endDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
	                ) {
	                    return;
	                }

	                this.leftCalendar.month = this.startDate.clone().date(2);
	                if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {
	                    this.rightCalendar.month = this.endDate.clone().date(2);
	                } else {
	                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
	                }

	            } else {
	                if (this.leftCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM')) {
	                    this.leftCalendar.month = this.startDate.clone().date(2);
	                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
	                }
	            }
	        },

	        updateCalendars: function() {

	            if (this.timePicker) {
	                var hour, minute, second;
	                if (this.endDate) {
	                    hour = parseInt(this.container.find('.left .hourselect').val(), 10);
	                    minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
	                    second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
	                    if (!this.timePicker24Hour) {
	                        var ampm = this.container.find('.left .ampmselect').val();
	                        if (ampm === 'PM' && hour < 12)
	                            hour += 12;
	                        if (ampm === 'AM' && hour === 12)
	                            hour = 0;
	                    }
	                } else {
	                    hour = parseInt(this.container.find('.right .hourselect').val(), 10);
	                    minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
	                    second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
	                    if (!this.timePicker24Hour) {
	                        var ampm = this.container.find('.right .ampmselect').val();
	                        if (ampm === 'PM' && hour < 12)
	                            hour += 12;
	                        if (ampm === 'AM' && hour === 12)
	                            hour = 0;
	                    }
	                }
	                this.leftCalendar.month.hour(hour).minute(minute).second(second);
	                this.rightCalendar.month.hour(hour).minute(minute).second(second);
	            }

	            this.renderCalendar('left');
	            this.renderCalendar('right');

	            //highlight any predefined range matching the current start and end dates
	            this.container.find('.ranges li').removeClass('active');
	            if (this.endDate == null) return;

	            var customRange = true;
	            var i = 0;
	            for (var range in this.ranges) {
	                if (this.timePicker) {
	                    if (this.startDate.isSame(this.ranges[range][0]) && this.endDate.isSame(this.ranges[range][1])) {
	                        customRange = false;
	                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
	                        break;
	                    }
	                } else {
	                    //ignore times when comparing dates if time picker is not enabled
	                    if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
	                        customRange = false;
	                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
	                        break;
	                    }
	                }
	                i++;
	            }
	            if (customRange) {
	                this.chosenLabel = this.container.find('.ranges li:last').addClass('active').html();
	                this.showCalendars();
	            }

	        },

	        renderCalendar: function(side) {

	            //
	            // Build the matrix of dates that will populate the calendar
	            //

	            var calendar = side == 'left' ? this.leftCalendar : this.rightCalendar;
	            var month = calendar.month.month();
	            var year = calendar.month.year();
	            var hour = calendar.month.hour();
	            var minute = calendar.month.minute();
	            var second = calendar.month.second();
	            var daysInMonth = moment([year, month]).daysInMonth();
	            var firstDay = moment([year, month, 1]);
	            var lastDay = moment([year, month, daysInMonth]);
	            var lastMonth = moment(firstDay).subtract(1, 'month').month();
	            var lastYear = moment(firstDay).subtract(1, 'month').year();
	            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
	            var dayOfWeek = firstDay.day();

	            //initialize a 6 rows x 7 columns array for the calendar
	            var calendar = [];
	            calendar.firstDay = firstDay;
	            calendar.lastDay = lastDay;

	            for (var i = 0; i < 6; i++) {
	                calendar[i] = [];
	            }

	            //populate the calendar with date objects
	            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
	            if (startDay > daysInLastMonth)
	                startDay -= 7;

	            if (dayOfWeek == this.locale.firstDay)
	                startDay = daysInLastMonth - 6;

	            var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);

	            var col, row;
	            for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
	                if (i > 0 && col % 7 === 0) {
	                    col = 0;
	                    row++;
	                }
	                calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
	                curDate.hour(12);

	                if (this.minDate && calendar[row][col].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side == 'left') {
	                    calendar[row][col] = this.minDate.clone();
	                }

	                if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side == 'right') {
	                    calendar[row][col] = this.maxDate.clone();
	                }

	            }

	            //make the calendar object available to hoverDate/clickDate
	            if (side == 'left') {
	                this.leftCalendar.calendar = calendar;
	            } else {
	                this.rightCalendar.calendar = calendar;
	            }

	            //
	            // Display the calendar
	            //

	            var minDate = side == 'left' ? this.minDate : this.startDate;
	            var maxDate = this.maxDate;
	            var selected = side == 'left' ? this.startDate : this.endDate;

	            var html = '<table class="table-condensed">';
	            html += '<thead>';
	            html += '<tr>';

	            // add empty cell for week number
	            if (this.showWeekNumbers)
	                html += '<th></th>';

	            if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == 'left')) {
	                html += '<th class="prev available"><i class="fa fa-chevron-left glyphicon glyphicon-chevron-left"></i></th>';
	            } else {
	                html += '<th></th>';
	            }

	            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

	            if (this.showDropdowns) {
	                var currentMonth = calendar[1][1].month();
	                var currentYear = calendar[1][1].year();
	                var maxYear = (maxDate && maxDate.year()) || (currentYear + 5);
	                var minYear = (minDate && minDate.year()) || (currentYear - 50);
	                var inMinYear = currentYear == minYear;
	                var inMaxYear = currentYear == maxYear;

	                var monthHtml = '<select class="monthselect">';
	                for (var m = 0; m < 12; m++) {
	                    if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
	                        monthHtml += "<option value='" + m + "'" +
	                            (m === currentMonth ? " selected='selected'" : "") +
	                            ">" + this.locale.monthNames[m] + "</option>";
	                    } else {
	                        monthHtml += "<option value='" + m + "'" +
	                            (m === currentMonth ? " selected='selected'" : "") +
	                            " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
	                    }
	                }
	                monthHtml += "</select>";

	                var yearHtml = '<select class="yearselect">';
	                for (var y = minYear; y <= maxYear; y++) {
	                    yearHtml += '<option value="' + y + '"' +
	                        (y === currentYear ? ' selected="selected"' : '') +
	                        '>' + y + '</option>';
	                }
	                yearHtml += '</select>';

	                dateHtml = monthHtml + yearHtml;
	            }

	            html += '<th colspan="5" class="month">' + dateHtml + '</th>';
	            if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == 'right' || this.singleDatePicker)) {
	                html += '<th class="next available"><i class="fa fa-chevron-right glyphicon glyphicon-chevron-right"></i></th>';
	            } else {
	                html += '<th></th>';
	            }

	            html += '</tr>';
	            html += '<tr>';

	            // add week number label
	            if (this.showWeekNumbers)
	                html += '<th class="week">' + this.locale.weekLabel + '</th>';

	            $.each(this.locale.daysOfWeek, function(index, dayOfWeek) {
	                html += '<th>' + dayOfWeek + '</th>';
	            });

	            html += '</tr>';
	            html += '</thead>';
	            html += '<tbody>';

	            //adjust maxDate to reflect the dateLimit setting in order to
	            //grey out end dates beyond the dateLimit
	            if (this.endDate == null && this.dateLimit) {
	                var maxLimit = this.startDate.clone().add(this.dateLimit).endOf('day');
	                if (!maxDate || maxLimit.isBefore(maxDate)) {
	                    maxDate = maxLimit;
	                }
	            }

	            for (var row = 0; row < 6; row++) {
	                html += '<tr>';

	                // add week number
	                if (this.showWeekNumbers)
	                    html += '<td class="week">' + calendar[row][0].week() + '</td>';

	                for (var col = 0; col < 7; col++) {

	                    var classes = [];

	                    //highlight today's date
	                    if (calendar[row][col].isSame(new Date(), "day"))
	                        classes.push('today');

	                    //highlight weekends
	                    if (calendar[row][col].isoWeekday() > 5)
	                        classes.push('weekend');

	                    //grey out the dates in other months displayed at beginning and end of this calendar
	                    if (calendar[row][col].month() != calendar[1][1].month())
	                        classes.push('off');

	                    //don't allow selection of dates before the minimum date
	                    if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day'))
	                        classes.push('off', 'disabled');

	                    //don't allow selection of dates after the maximum date
	                    if (maxDate && calendar[row][col].isAfter(maxDate, 'day'))
	                        classes.push('off', 'disabled');

	                    //don't allow selection of date if a custom function decides it's invalid
	                    if (this.isInvalidDate(calendar[row][col]))
	                        classes.push('off', 'disabled');

	                    //highlight the currently selected start date
	                    if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD'))
	                        classes.push('active', 'start-date');

	                    //highlight the currently selected end date
	                    if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD'))
	                        classes.push('active', 'end-date');

	                    //highlight dates in-between the selected dates
	                    if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate)
	                        classes.push('in-range');

	                    var cname = '', disabled = false;
	                    for (var i = 0; i < classes.length; i++) {
	                        cname += classes[i] + ' ';
	                        if (classes[i] == 'disabled')
	                            disabled = true;
	                    }
	                    if (!disabled)
	                        cname += 'available';

	                    html += '<td class="' + cname.replace(/^\s+|\s+$/g, '') + '" data-title="' + 'r' + row + 'c' + col + '">' + calendar[row][col].date() + '</td>';

	                }
	                html += '</tr>';
	            }

	            html += '</tbody>';
	            html += '</table>';

	            this.container.find('.calendar.' + side + ' .calendar-table').html(html);

	        },

	        renderTimePicker: function(side) {

	            var html, selected, minDate, maxDate = this.maxDate;

	            if (this.dateLimit && (!this.maxDate || this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate)))
	                maxDate = this.startDate.clone().add(this.dateLimit);

	            if (side == 'left') {
	                selected = this.startDate.clone();
	                minDate = this.minDate;
	            } else if (side == 'right') {
	                selected = this.endDate ? this.endDate.clone() : this.startDate.clone();
	                minDate = this.startDate;
	            }

	            //
	            // hours
	            //

	            html = '<select class="hourselect">';

	            var start = this.timePicker24Hour ? 0 : 1;
	            var end = this.timePicker24Hour ? 23 : 12;

	            //自定义部分修改
	            if(this.rangesHour && this.rangesHour.length==2){
	                start=this.rangesHour[0];
	                end=this.rangesHour[1];
	            }
	            for (var i = start; i <= end; i++) {
	                var i_in_24 = i;
	                if (!this.timePicker24Hour)
	                    i_in_24 = selected.hour() >= 12 ? (i == 12 ? 12 : i + 12) : (i == 12 ? 0 : i);

	                var time = selected.clone().hour(i_in_24);
	                var disabled = false;
	                if (minDate && time.minute(59).isBefore(minDate))
	                    disabled = true;
	                if (maxDate && time.minute(0).isAfter(maxDate))
	                    disabled = true;


	                if (i_in_24 == selected.hour() && !disabled) {
	                    html += '<option value="' + i + '" selected="selected">' + i + '</option>';
	                } else if (disabled) {
	                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + '</option>';
	                } else {
	                    html += '<option value="' + i + '">' + i + '</option>';
	                }
	            }

	            html += '</select> ';

	            //
	            // minutes
	            //

	            html += ': <select class="minuteselect">';

	            for (var i = 0; i < 60; i += this.timePickerIncrement) {
	                var padded = i < 10 ? '0' + i : i;
	                var time = selected.clone().minute(i);

	                var disabled = false;
	                if (minDate && time.second(59).isBefore(minDate))
	                    disabled = true;
	                if (maxDate && time.second(0).isAfter(maxDate))
	                    disabled = true;
	                console.log("time.minute(59):",time.minute(59))
	                if (selected.minute() == i && !disabled) {
	                    html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
	                } else if (disabled) {
	                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
	                } else {
	                    html += '<option value="' + i + '">' + padded + '</option>';
	                }
	            }

	            html += '</select> ';

	            //
	            // seconds
	            //

	            if (this.timePickerSeconds) {
	                html += ': <select class="secondselect">';

	                for (var i = 0; i < 60; i++) {
	                    var padded = i < 10 ? '0' + i : i;
	                    var time = selected.clone().second(i);

	                    var disabled = false;
	                    if (minDate && time.isBefore(minDate))
	                        disabled = true;
	                    if (maxDate && time.isAfter(maxDate))
	                        disabled = true;

	                    if (selected.second() == i && !disabled) {
	                        html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
	                    } else if (disabled) {
	                        html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
	                    } else {
	                        html += '<option value="' + i + '">' + padded + '</option>';
	                    }
	                }

	                html += '</select> ';
	            }

	            //
	            // AM/PM
	            //

	            if (!this.timePicker24Hour) {
	                html += '<select class="ampmselect">';

	                var am_html = '';
	                var pm_html = '';

	                if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate))
	                    am_html = ' disabled="disabled" class="disabled"';

	                if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate))
	                    pm_html = ' disabled="disabled" class="disabled"';

	                if (selected.hour() >= 12) {
	                    html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + '>PM</option>';
	                } else {
	                    html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + '>PM</option>';
	                }

	                html += '</select>';
	            }

	            this.container.find('.calendar.' + side + ' .calendar-time div').html(html);

	        },

	        updateFormInputs: function() {

	            //ignore mouse movements while an above-calendar text input has focus
	            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
	                return;

	            this.container.find('input[name=daterangepicker_start]').val(this.startDate.format(this.locale.format));
	            if (this.endDate)
	                this.container.find('input[name=daterangepicker_end]').val(this.endDate.format(this.locale.format));

	            if (this.singleDatePicker || (this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)))) {
	                this.container.find('button.applyBtn').removeAttr('disabled');
	            } else {
	                this.container.find('button.applyBtn').attr('disabled', 'disabled');
	            }

	        },

	        move: function() {
	            var parentOffset = { top: 0, left: 0 },
	                containerTop;
	            var parentRightEdge = $(window).width();
	            if (!this.parentEl.is('body')) {
	                parentOffset = {
	                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
	                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
	                };
	                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
	            }

	            if (this.drops == 'up')
	                containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;
	            else
	                containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;
	            this.container[this.drops == 'up' ? 'addClass' : 'removeClass']('dropup');

	            if (this.opens == 'left') {
	                this.container.css({
	                    top: containerTop,
	                    right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
	                    left: 'auto'
	                });
	                if (this.container.offset().left < 0) {
	                    this.container.css({
	                        right: 'auto',
	                        left: 9
	                    });
	                }
	            } else if (this.opens == 'center') {
	                this.container.css({
	                    top: containerTop,
	                    left: this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2
	                    - this.container.outerWidth() / 2,
	                    right: 'auto'
	                });
	                if (this.container.offset().left < 0) {
	                    this.container.css({
	                        right: 'auto',
	                        left: 9
	                    });
	                }
	            } else {
	                this.container.css({
	                    top: containerTop,
	                    left: this.element.offset().left - parentOffset.left,
	                    right: 'auto'
	                });
	                if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
	                    this.container.css({
	                        left: 'auto',
	                        right: 0
	                    });
	                }
	            }
	        },

	        show: function(e) {
	            if (this.isShowing) return;

	            // Create a click proxy that is private to this instance of datepicker, for unbinding
	            this._outsideClickProxy = $.proxy(function(e) { this.outsideClick(e); }, this);

	            // Bind global datepicker mousedown for hiding and
	            $(document)
	                .on('mousedown.daterangepicker', this._outsideClickProxy)
	                // also support mobile devices
	                .on('touchend.daterangepicker', this._outsideClickProxy)
	                // also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them
	                .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy)
	                // and also close when focus changes to outside the picker (eg. tabbing between controls)
	                .on('focusin.daterangepicker', this._outsideClickProxy);

	            // Reposition the picker if the window is resized while it's open
	            $(window).on('resize.daterangepicker', $.proxy(function(e) { this.move(e); }, this));

	            this.oldStartDate = this.startDate.clone();
	            this.oldEndDate = this.endDate.clone();

	            this.updateView();
	            this.container.show();
	            this.move();
	            this.element.trigger('show.daterangepicker', this);
	            this.isShowing = true;
	        },

	        hide: function(e) {
	            if (!this.isShowing) return;

	            //incomplete date selection, revert to last values
	            if (!this.endDate) {
	                this.startDate = this.oldStartDate.clone();
	                this.endDate = this.oldEndDate.clone();
	            }

	            //if a new date range was selected, invoke the user callback function
	            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate))
	                this.callback(this.startDate, this.endDate, this.chosenLabel);

	            //if picker is attached to a text input, update it
	            this.updateElement();

	            $(document).off('.daterangepicker');
	            $(window).off('.daterangepicker');
	            this.container.hide();
	            this.element.trigger('hide.daterangepicker', this);
	            this.isShowing = false;
	        },

	        toggle: function(e) {
	            if (this.isShowing) {
	                this.hide();
	            } else {
	                this.show();
	            }
	        },

	        outsideClick: function(e) {
	            var target = $(e.target);
	            // if the page is clicked anywhere except within the daterangerpicker/button
	            // itself then call this.hide()
	            if (
	                // ie modal dialog fix
	            e.type == "focusin" ||
	            target.closest(this.element).length ||
	            target.closest(this.container).length ||
	            target.closest('.calendar-table').length
	            ) return;
	            this.hide();
	        },

	        showCalendars: function() {
	            this.container.addClass('show-calendar');
	            this.move();
	            this.element.trigger('showCalendar.daterangepicker', this);
	        },

	        hideCalendars: function() {
	            this.container.removeClass('show-calendar');
	            this.element.trigger('hideCalendar.daterangepicker', this);
	        },

	        hoverRange: function(e) {

	            //ignore mouse movements while an above-calendar text input has focus
	            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
	                return;

	            var label = e.target.innerHTML;
	            if (label == this.locale.customRangeLabel) {
	                this.updateView();
	            } else {
	                var dates = this.ranges[label];
	                this.container.find('input[name=daterangepicker_start]').val(dates[0].format(this.locale.format));
	                this.container.find('input[name=daterangepicker_end]').val(dates[1].format(this.locale.format));
	            }

	        },

	        clickRange: function(e) {
	            var label = e.target.innerHTML;
	            this.chosenLabel = label;
	            if (label == this.locale.customRangeLabel) {
	                this.showCalendars();
	            } else {
	                var dates = this.ranges[label];
	                this.startDate = dates[0];
	                this.endDate = dates[1];

	                if (!this.timePicker) {
	                    this.startDate.startOf('day');
	                    this.endDate.endOf('day');
	                }

	                this.hideCalendars();
	                this.clickApply();
	            }
	        },

	        clickPrev: function(e) {
	            var cal = $(e.target).parents('.calendar');
	            if (cal.hasClass('left')) {
	                this.leftCalendar.month.subtract(1, 'month');
	                if (this.linkedCalendars)
	                    this.rightCalendar.month.subtract(1, 'month');
	            } else {
	                this.rightCalendar.month.subtract(1, 'month');
	            }
	            this.updateCalendars();
	        },

	        clickNext: function(e) {
	            var cal = $(e.target).parents('.calendar');
	            if (cal.hasClass('left')) {
	                this.leftCalendar.month.add(1, 'month');
	            } else {
	                this.rightCalendar.month.add(1, 'month');
	                if (this.linkedCalendars)
	                    this.leftCalendar.month.add(1, 'month');
	            }
	            this.updateCalendars();
	        },

	        hoverDate: function(e) {

	            //ignore mouse movements while an above-calendar text input has focus
	            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
	                return;

	            //ignore dates that can't be selected
	            if (!$(e.target).hasClass('available')) return;

	            //have the text inputs above calendars reflect the date being hovered over
	            var title = $(e.target).attr('data-title');
	            var row = title.substr(1, 1);
	            var col = title.substr(3, 1);
	            var cal = $(e.target).parents('.calendar');
	            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

	            if (this.endDate) {
	                this.container.find('input[name=daterangepicker_start]').val(date.format(this.locale.format));
	            } else {
	                this.container.find('input[name=daterangepicker_end]').val(date.format(this.locale.format));
	            }
	            //highlight the dates between the start date and the date being hovered as a potential end date
	            var leftCalendar = this.leftCalendar;
	            var rightCalendar = this.rightCalendar;
	            var startDate = this.startDate;
	            if (!this.endDate) {
	                this.container.find('.calendar td').each(function(index, el) {

	                    //skip week numbers, only look at dates
	                    if ($(el).hasClass('week')) return;

	                    var title = $(el).attr('data-title');
	                    var row = title.substr(1, 1);
	                    var col = title.substr(3, 1);
	                    var cal = $(el).parents('.calendar');
	                    var dt = cal.hasClass('left') ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col];

	                    if (dt.isAfter(startDate) && dt.isBefore(date)) {
	                        $(el).addClass('in-range');
	                    } else {
	                        $(el).removeClass('in-range');
	                    }

	                });
	            }

	        },

	        clickDate: function(e) {
	            if (!$(e.target).hasClass('available')) return;

	            var title = $(e.target).attr('data-title');
	            var row = title.substr(1, 1);
	            var col = title.substr(3, 1);
	            var cal = $(e.target).parents('.calendar');
	            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

	            //
	            // this function needs to do a few things:
	            // * alternate between selecting a start and end date for the range,
	            // * if the time picker is enabled, apply the hour/minute/second from the select boxes to the clicked date
	            // * if autoapply is enabled, and an end date was chosen, apply the selection
	            // * if single date picker mode, and time picker isn't enabled, apply the selection immediately
	            //

	            // console.log('e',e)
	            if (this.endDate || date.isBefore(this.startDate)) {
	                if (this.timePicker) {
	                    var hour = parseInt(this.container.find('.left .hourselect').val(), 10);
	                    if (!this.timePicker24Hour) {
	                        var ampm = cal.find('.ampmselect').val();
	                        if (ampm === 'PM' && hour < 12)
	                            hour += 12;
	                        if (ampm === 'AM' && hour === 12)
	                            hour = 0;
	                    }
	                    var minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
	                    var second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
	                    date = date.clone().hour(hour).minute(minute).second(second);
	                }
	                this.endDate = null;
	                this.setStartDate(date.clone());
	            } else {
	                if (this.timePicker) {
	                    var hour = parseInt(this.container.find('.right .hourselect').val(), 10);
	                    if (!this.timePicker24Hour) {
	                        var ampm = this.container.find('.right .ampmselect').val();
	                        if (ampm === 'PM' && hour < 12)
	                            hour += 12;
	                        if (ampm === 'AM' && hour === 12)
	                            hour = 0;
	                    }
	                    var minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
	                    var second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
	                    date = date.clone().hour(hour).minute(minute).second(second);
	                }
	                this.setEndDate(date.clone());
	                if (this.autoApply)
	                    this.clickApply();
	            }

	            if (this.singleDatePicker) {
	                this.setEndDate(this.startDate);
	                if (!this.timePicker)
	                    this.clickApply();
	            }

	            this.updateView();

	        },

	        clickApply: function(e) {
	            this.hide();
	            this.element.trigger('apply.daterangepicker', this);
	        },

	        clickCancel: function(e) {
	            this.startDate = this.oldStartDate;
	            this.endDate = this.oldEndDate;
	            this.hide();
	            this.element.trigger('cancel.daterangepicker', this);
	        },

	        monthOrYearChanged: function(e) {
	            var isLeft = $(e.target).closest('.calendar').hasClass('left'),
	                leftOrRight = isLeft ? 'left' : 'right',
	                cal = this.container.find('.calendar.'+leftOrRight);

	            // Month must be Number for new moment versions
	            var month = parseInt(cal.find('.monthselect').val(), 10);
	            var year = cal.find('.yearselect').val();

	            if (!isLeft) {
	                if (year < this.startDate.year() || (year == this.startDate.year() && month < this.startDate.month())) {
	                    month = this.startDate.month();
	                    year = this.startDate.year();
	                }
	            }

	            if (this.minDate) {
	                if (year < this.minDate.year() || (year == this.minDate.year() && month < this.minDate.month())) {
	                    month = this.minDate.month();
	                    year = this.minDate.year();
	                }
	            }

	            if (this.maxDate) {
	                if (year > this.maxDate.year() || (year == this.maxDate.year() && month > this.maxDate.month())) {
	                    month = this.maxDate.month();
	                    year = this.maxDate.year();
	                }
	            }

	            if (isLeft) {
	                this.leftCalendar.month.month(month).year(year);
	                if (this.linkedCalendars)
	                    this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
	            } else {
	                this.rightCalendar.month.month(month).year(year);
	                if (this.linkedCalendars)
	                    this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
	            }
	            this.updateCalendars();
	        },

	        timeChanged: function(e) {

	            var cal = $(e.target).closest('.calendar'),
	                isLeft = cal.hasClass('left');

	            var hour = parseInt(cal.find('.hourselect').val(), 10);
	            var minute = parseInt(cal.find('.minuteselect').val(), 10);
	            var second = this.timePickerSeconds ? parseInt(cal.find('.secondselect').val(), 10) : 0;

	            if (!this.timePicker24Hour) {
	                var ampm = cal.find('.ampmselect').val();
	                if (ampm === 'PM' && hour < 12)
	                    hour += 12;
	                if (ampm === 'AM' && hour === 12)
	                    hour = 0;
	            }

	            if (isLeft) {
	                var start = this.startDate.clone();
	                start.hour(hour);
	                start.minute(minute);
	                start.second(second);
	                this.setStartDate(start);
	                if (this.singleDatePicker) {
	                    this.endDate = this.startDate.clone();
	                } else if (this.endDate && this.endDate.format('YYYY-MM-DD') == start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
	                    this.setEndDate(start.clone());
	                }
	            } else if (this.endDate) {
	                var end = this.endDate.clone();
	                end.hour(hour);
	                end.minute(minute);
	                end.second(second);
	                this.setEndDate(end);
	            }

	            //update the calendars so all clickable dates reflect the new time component
	            this.updateCalendars();

	            //update the form inputs above the calendars with the new time
	            this.updateFormInputs();

	            //re-render the time pickers because changing one selection can affect what's enabled in another
	            this.renderTimePicker('left');
	            this.renderTimePicker('right');

	        },

	        formInputsChanged: function(e) {
	            var isRight = $(e.target).closest('.calendar').hasClass('right');
	            var start = moment(this.container.find('input[name="daterangepicker_start"]').val(), this.locale.format);
	            var end = moment(this.container.find('input[name="daterangepicker_end"]').val(), this.locale.format);

	            if (start.isValid() && end.isValid()) {

	                if (isRight && end.isBefore(start))
	                    start = end.clone();

	                this.setStartDate(start);
	                this.setEndDate(end);

	                if (isRight) {
	                    this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format));
	                } else {
	                    this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format));
	                }

	            }

	            this.updateCalendars();
	            if (this.timePicker) {
	                this.renderTimePicker('left');
	                this.renderTimePicker('right');
	            }
	        },

	        elementChanged: function() {
	            if (!this.element.is('input')) return;
	            if (!this.element.val().length) return;
	            if (this.element.val().length < this.locale.format.length) return;

	            var dateString = this.element.val().split(this.locale.separator),
	                start = null,
	                end = null;

	            if (dateString.length === 2) {
	                start = moment(dateString[0], this.locale.format);
	                end = moment(dateString[1], this.locale.format);
	            }

	            if (this.singleDatePicker || start === null || end === null) {
	                start = moment(this.element.val(), this.locale.format);
	                end = start;
	            }

	            if (!start.isValid() || !end.isValid()) return;

	            this.setStartDate(start);
	            this.setEndDate(end);
	            this.updateView();
	        },

	        keydown: function(e) {
	            //hide on tab or enter
	            if ((e.keyCode === 9) || (e.keyCode === 13)) {
	                this.hide();
	            }
	        },

	        updateElement: function() {
	            if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
	                this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
	                this.element.trigger('change');
	            } else if (this.element.is('input') && this.autoUpdateInput) {
	                this.element.val(this.startDate.format(this.locale.format));
	                this.element.trigger('change');
	            }
	        },

	        remove: function() {
	            this.container.remove();
	            this.element.off('.daterangepicker');
	            this.element.removeData();
	        }

	    };

	    $.fn.daterangepicker = function(options, callback) {
	        this.each(function() {
	            var el = $(this);
	            if (el.data('daterangepicker'))
	                el.data('daterangepicker').remove();
	            el.data('daterangepicker', new DateRangePicker(el, options, callback));
	        });
	        return this;
	    };

	}));


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery Cookie Plugin v1.4.1
	 * https://github.com/carhartl/jquery-cookie
	 *
	 * Copyright 2006, 2014 Klaus Hartl
	 * Released under the MIT license
	 */
	(function (factory) {
	    if (true) {
	        // AMD (Register as an anonymous module)
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if(typeof define === 'function') {
	        // Node/CommonJS
	        // console.log('CommonJS')
	        define(['jquery'], function(){
	            return factory(jQuery);
	        })

	    } else {
	        // Browser globals
	        factory(jQuery);
	    }
	}(function ($) {
	    var pluses = /\+/g;

	    function encode(s) {
	        return config.raw ? s : encodeURIComponent(s);
	    }

	    function decode(s) {
	        return config.raw ? s : decodeURIComponent(s);
	    }

	    function stringifyCookieValue(value) {
	        return encode(config.json ? JSON.stringify(value) : String(value));
	    }

	    function parseCookieValue(s) {
	        if (s.indexOf('"') === 0) {
	            // This is a quoted cookie as according to RFC2068, unescape...
	            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
	        }

	        try {
	            // Replace server-side written pluses with spaces.
	            // If we can't decode the cookie, ignore it, it's unusable.
	            // If we can't parse the cookie, ignore it, it's unusable.
	            s = decodeURIComponent(s.replace(pluses, ' '));
	            return config.json ? JSON.parse(s) : s;
	        } catch(e) {}
	    }

	    function read(s, converter) {
	        var value = config.raw ? s : parseCookieValue(s);
	        return $.isFunction(converter) ? converter(value) : value;
	    }

	    var config = $.cookie = function (key, value, options) {

	        // Write

	        if (arguments.length > 1 && !$.isFunction(value)) {
	            options = $.extend({}, config.defaults, options);

	            if (typeof options.expires === 'number') {
	                var days = options.expires, t = options.expires = new Date();
	                t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
	            }

	            return (document.cookie = [
	                encode(key), '=', stringifyCookieValue(value),
	                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
	                options.path    ? '; path=' + options.path : '',
	                options.domain  ? '; domain=' + options.domain : '',
	                options.secure  ? '; secure' : ''
	            ].join(''));
	        }

	        // Read

	        var result = key ? undefined : {},
	        // To prevent the for loop in the first place assign an empty array
	        // in case there are no cookies at all. Also prevents odd result when
	        // calling $.cookie().
	            cookies = document.cookie ? document.cookie.split('; ') : [],
	            i = 0,
	            l = cookies.length;

	        for (; i < l; i++) {
	            var parts = cookies[i].split('='),
	                name = decode(parts.shift()),
	                cookie = parts.join('=');

	            if (key === name) {
	                // If second argument (value) is a function it's a converter...
	                result = read(cookie, value);
	                break;
	            }

	            // Prevent storing a cookie that we couldn't decode.
	            if (!key && (cookie = read(cookie)) !== undefined) {
	                result[name] = cookie;
	            }
	        }

	        return result;
	    };

	    config.defaults = {};

	    $.removeCookie = function (key, options) {
	        // Must not alter options, thus extending a fresh object...
	        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
	        return !$.cookie(key);
	    };

	}));

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Swiper 3.3.1
	 * Most modern mobile touch slider and framework with hardware accelerated transitions
	 * 
	 * http://www.idangero.us/swiper/
	 * 
	 * Copyright 2016, Vladimir Kharlampidi
	 * The iDangero.us
	 * http://www.idangero.us/
	 * 
	 * Licensed under MIT
	 * 
	 * Released on: February 7, 2016
	 */
	(function (root, factory) {
		'use strict';

		if (true) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}if (true) {
	        // 如果define已被定义，模块化代码
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
	            return factory(jQuery);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }else if (typeof exports === 'object') {
			// Node. Does not work with strict CommonJS, but
			// only CommonJS-like environments that support module.exports,
			// like Node.
			module.exports = factory(require('jquery'));
		} else {
			// Browser globals (root is window)
			root.Swiper = factory(root.jQuery);
		}
	}(this, function ($) {
		'use strict';

	    /*===========================
	    Swiper
	    ===========================*/
	    var Swiper = function (container, params) {
	        if (!(this instanceof Swiper)) return new Swiper(container, params);

	        var defaults = {
	            direction: 'horizontal',
	            touchEventsTarget: 'container',
	            initialSlide: 0,
	            speed: 300,
	            // autoplay
	            autoplay: false,
	            autoplayDisableOnInteraction: true,
	            autoplayStopOnLast: false,
	            // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
	            iOSEdgeSwipeDetection: false,
	            iOSEdgeSwipeThreshold: 20,
	            // Free mode
	            freeMode: false,
	            freeModeMomentum: true,
	            freeModeMomentumRatio: 1,
	            freeModeMomentumBounce: true,
	            freeModeMomentumBounceRatio: 1,
	            freeModeSticky: false,
	            freeModeMinimumVelocity: 0.02,
	            // Autoheight
	            autoHeight: false,
	            // Set wrapper width
	            setWrapperSize: false,
	            // Virtual Translate
	            virtualTranslate: false,
	            // Effects
	            effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
	            coverflow: {
	                rotate: 50,
	                stretch: 0,
	                depth: 100,
	                modifier: 1,
	                slideShadows : true
	            },
	            flip: {
	                slideShadows : true,
	                limitRotation: true
	            },
	            cube: {
	                slideShadows: true,
	                shadow: true,
	                shadowOffset: 20,
	                shadowScale: 0.94
	            },
	            fade: {
	                crossFade: false
	            },
	            // Parallax
	            parallax: false,
	            // Scrollbar
	            scrollbar: null,
	            scrollbarHide: true,
	            scrollbarDraggable: false,
	            scrollbarSnapOnRelease: false,
	            // Keyboard Mousewheel
	            keyboardControl: false,
	            mousewheelControl: false,
	            mousewheelReleaseOnEdges: false,
	            mousewheelInvert: false,
	            mousewheelForceToAxis: false,
	            mousewheelSensitivity: 1,
	            // Hash Navigation
	            hashnav: false,
	            // Breakpoints
	            breakpoints: undefined,
	            // Slides grid
	            spaceBetween: 0,
	            slidesPerView: 1,
	            slidesPerColumn: 1,
	            slidesPerColumnFill: 'column',
	            slidesPerGroup: 1,
	            centeredSlides: false,
	            slidesOffsetBefore: 0, // in px
	            slidesOffsetAfter: 0, // in px
	            // Round length
	            roundLengths: false,
	            // Touches
	            touchRatio: 1,
	            touchAngle: 45,
	            simulateTouch: true,
	            shortSwipes: true,
	            longSwipes: true,
	            longSwipesRatio: 0.5,
	            longSwipesMs: 300,
	            followFinger: true,
	            onlyExternal: false,
	            threshold: 0,
	            touchMoveStopPropagation: true,
	            // Unique Navigation Elements
	            uniqueNavElements: true,
	            // Pagination
	            pagination: null,
	            paginationElement: 'span',
	            paginationClickable: false,
	            paginationHide: false,
	            paginationBulletRender: null,
	            paginationProgressRender: null,
	            paginationFractionRender: null,
	            paginationCustomRender: null,
	            paginationType: 'bullets', // 'bullets' or 'progress' or 'fraction' or 'custom'
	            // Resistance
	            resistance: true,
	            resistanceRatio: 0.85,
	            // Next/prev buttons
	            nextButton: null,
	            prevButton: null,
	            // Progress
	            watchSlidesProgress: false,
	            watchSlidesVisibility: false,
	            // Cursor
	            grabCursor: false,
	            // Clicks
	            preventClicks: true,
	            preventClicksPropagation: true,
	            slideToClickedSlide: false,
	            // Lazy Loading
	            lazyLoading: false,
	            lazyLoadingInPrevNext: false,
	            lazyLoadingInPrevNextAmount: 1,
	            lazyLoadingOnTransitionStart: false,
	            // Images
	            preloadImages: true,
	            updateOnImagesReady: true,
	            // loop
	            loop: false,
	            loopAdditionalSlides: 0,
	            loopedSlides: null,
	            // Control
	            control: undefined,
	            controlInverse: false,
	            controlBy: 'slide', //or 'container'
	            // Swiping/no swiping
	            allowSwipeToPrev: true,
	            allowSwipeToNext: true,
	            swipeHandler: null, //'.swipe-handler',
	            noSwiping: true,
	            noSwipingClass: 'swiper-no-swiping',
	            // NS
	            slideClass: 'swiper-slide',
	            slideActiveClass: 'swiper-slide-active',
	            slideVisibleClass: 'swiper-slide-visible',
	            slideDuplicateClass: 'swiper-slide-duplicate',
	            slideNextClass: 'swiper-slide-next',
	            slidePrevClass: 'swiper-slide-prev',
	            wrapperClass: 'swiper-wrapper',
	            bulletClass: 'swiper-pagination-bullet',
	            bulletActiveClass: 'swiper-pagination-bullet-active',
	            buttonDisabledClass: 'swiper-button-disabled',
	            paginationCurrentClass: 'swiper-pagination-current',
	            paginationTotalClass: 'swiper-pagination-total',
	            paginationHiddenClass: 'swiper-pagination-hidden',
	            paginationProgressbarClass: 'swiper-pagination-progressbar',
	            // Observer
	            observer: false,
	            observeParents: false,
	            // Accessibility
	            a11y: false,
	            prevSlideMessage: 'Previous slide',
	            nextSlideMessage: 'Next slide',
	            firstSlideMessage: 'This is the first slide',
	            lastSlideMessage: 'This is the last slide',
	            paginationBulletMessage: 'Go to slide {{index}}',
	            // Callbacks
	            runCallbacksOnInit: true
	            /*
	            Callbacks:
	            onInit: function (swiper)
	            onDestroy: function (swiper)
	            onClick: function (swiper, e)
	            onTap: function (swiper, e)
	            onDoubleTap: function (swiper, e)
	            onSliderMove: function (swiper, e)
	            onSlideChangeStart: function (swiper)
	            onSlideChangeEnd: function (swiper)
	            onTransitionStart: function (swiper)
	            onTransitionEnd: function (swiper)
	            onImagesReady: function (swiper)
	            onProgress: function (swiper, progress)
	            onTouchStart: function (swiper, e)
	            onTouchMove: function (swiper, e)
	            onTouchMoveOpposite: function (swiper, e)
	            onTouchEnd: function (swiper, e)
	            onReachBeginning: function (swiper)
	            onReachEnd: function (swiper)
	            onSetTransition: function (swiper, duration)
	            onSetTranslate: function (swiper, translate)
	            onAutoplayStart: function (swiper)
	            onAutoplayStop: function (swiper),
	            onLazyImageLoad: function (swiper, slide, image)
	            onLazyImageReady: function (swiper, slide, image)
	            */
	        
	        };
	        var initialVirtualTranslate = params && params.virtualTranslate;
	        
	        params = params || {};
	        var originalParams = {};
	        for (var param in params) {
	            if (typeof params[param] === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || (typeof Dom7 !== 'undefined' && params[param] instanceof Dom7) || (typeof jQuery !== 'undefined' && params[param] instanceof jQuery))) {
	                originalParams[param] = {};
	                for (var deepParam in params[param]) {
	                    originalParams[param][deepParam] = params[param][deepParam];
	                }
	            }
	            else {
	                originalParams[param] = params[param];
	            }
	        }
	        for (var def in defaults) {
	            if (typeof params[def] === 'undefined') {
	                params[def] = defaults[def];
	            }
	            else if (typeof params[def] === 'object') {
	                for (var deepDef in defaults[def]) {
	                    if (typeof params[def][deepDef] === 'undefined') {
	                        params[def][deepDef] = defaults[def][deepDef];
	                    }
	                }
	            }
	        }
	        
	        // Swiper
	        var s = this;
	        
	        // Params
	        s.params = params;
	        s.originalParams = originalParams;
	        
	        // Classname
	        s.classNames = [];
	        /*=========================
	          Dom Library and plugins
	          ===========================*/
	        if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined'){
	            $ = Dom7;
	        }
	        if (typeof $ === 'undefined') {
	            if (typeof Dom7 === 'undefined') {
	                $ = window.Dom7 || window.Zepto || window.jQuery;
	            }
	            else {
	                $ = Dom7;
	            }
	            if (!$) return;
	        }
	        // Export it to Swiper instance
	        s.$ = $;
	        
	        /*=========================
	          Breakpoints
	          ===========================*/
	        s.currentBreakpoint = undefined;
	        s.getActiveBreakpoint = function () {
	            //Get breakpoint for window width
	            if (!s.params.breakpoints) return false;
	            var breakpoint = false;
	            var points = [], point;
	            for ( point in s.params.breakpoints ) {
	                if (s.params.breakpoints.hasOwnProperty(point)) {
	                    points.push(point);
	                }
	            }
	            points.sort(function (a, b) {
	                return parseInt(a, 10) > parseInt(b, 10);
	            });
	            for (var i = 0; i < points.length; i++) {
	                point = points[i];
	                if (point >= window.innerWidth && !breakpoint) {
	                    breakpoint = point;
	                }
	            }
	            return breakpoint || 'max';
	        };
	        s.setBreakpoint = function () {
	            //Set breakpoint for window width and update parameters
	            var breakpoint = s.getActiveBreakpoint();
	            if (breakpoint && s.currentBreakpoint !== breakpoint) {
	                var breakPointsParams = breakpoint in s.params.breakpoints ? s.params.breakpoints[breakpoint] : s.originalParams;
	                var needsReLoop = s.params.loop && (breakPointsParams.slidesPerView !== s.params.slidesPerView);
	                for ( var param in breakPointsParams ) {
	                    s.params[param] = breakPointsParams[param];
	                }
	                s.currentBreakpoint = breakpoint;
	                if(needsReLoop && s.destroyLoop) {
	                    s.reLoop(true);
	                }
	            }
	        };
	        // Set breakpoint on load
	        if (s.params.breakpoints) {
	            s.setBreakpoint();
	        }
	        
	        /*=========================
	          Preparation - Define Container, Wrapper and Pagination
	          ===========================*/
	        s.container = $(container);
	        if (s.container.length === 0) return;
	        if (s.container.length > 1) {
	            var swipers = [];
	            s.container.each(function () {
	                var container = this;
	                swipers.push(new Swiper(this, params));
	            });
	            return swipers;
	        }
	        
	        // Save instance in container HTML Element and in data
	        s.container[0].swiper = s;
	        s.container.data('swiper', s);
	        
	        s.classNames.push('swiper-container-' + s.params.direction);
	        
	        if (s.params.freeMode) {
	            s.classNames.push('swiper-container-free-mode');
	        }
	        if (!s.support.flexbox) {
	            s.classNames.push('swiper-container-no-flexbox');
	            s.params.slidesPerColumn = 1;
	        }
	        if (s.params.autoHeight) {
	            s.classNames.push('swiper-container-autoheight');
	        }
	        // Enable slides progress when required
	        if (s.params.parallax || s.params.watchSlidesVisibility) {
	            s.params.watchSlidesProgress = true;
	        }
	        // Coverflow / 3D
	        if (['cube', 'coverflow', 'flip'].indexOf(s.params.effect) >= 0) {
	            if (s.support.transforms3d) {
	                s.params.watchSlidesProgress = true;
	                s.classNames.push('swiper-container-3d');
	            }
	            else {
	                s.params.effect = 'slide';
	            }
	        }
	        if (s.params.effect !== 'slide') {
	            s.classNames.push('swiper-container-' + s.params.effect);
	        }
	        if (s.params.effect === 'cube') {
	            s.params.resistanceRatio = 0;
	            s.params.slidesPerView = 1;
	            s.params.slidesPerColumn = 1;
	            s.params.slidesPerGroup = 1;
	            s.params.centeredSlides = false;
	            s.params.spaceBetween = 0;
	            s.params.virtualTranslate = true;
	            s.params.setWrapperSize = false;
	        }
	        if (s.params.effect === 'fade' || s.params.effect === 'flip') {
	            s.params.slidesPerView = 1;
	            s.params.slidesPerColumn = 1;
	            s.params.slidesPerGroup = 1;
	            s.params.watchSlidesProgress = true;
	            s.params.spaceBetween = 0;
	            s.params.setWrapperSize = false;
	            if (typeof initialVirtualTranslate === 'undefined') {
	                s.params.virtualTranslate = true;
	            }
	        }
	        
	        // Grab Cursor
	        if (s.params.grabCursor && s.support.touch) {
	            s.params.grabCursor = false;
	        }
	        
	        // Wrapper
	        s.wrapper = s.container.children('.' + s.params.wrapperClass);
	        
	        // Pagination
	        if (s.params.pagination) {
	            s.paginationContainer = $(s.params.pagination);
	            if (s.params.uniqueNavElements && typeof s.params.pagination === 'string' && s.paginationContainer.length > 1 && s.container.find(s.params.pagination).length === 1) {
	                s.paginationContainer = s.container.find(s.params.pagination);
	            }
	        
	            if (s.params.paginationType === 'bullets' && s.params.paginationClickable) {
	                s.paginationContainer.addClass('swiper-pagination-clickable');
	            }
	            else {
	                s.params.paginationClickable = false;
	            }
	            s.paginationContainer.addClass('swiper-pagination-' + s.params.paginationType);
	        }
	        // Next/Prev Buttons
	        if (s.params.nextButton || s.params.prevButton) {
	            if (s.params.nextButton) {
	                s.nextButton = $(s.params.nextButton);
	                if (s.params.uniqueNavElements && typeof s.params.nextButton === 'string' && s.nextButton.length > 1 && s.container.find(s.params.nextButton).length === 1) {
	                    s.nextButton = s.container.find(s.params.nextButton);
	                }
	            }
	            if (s.params.prevButton) {
	                s.prevButton = $(s.params.prevButton);
	                if (s.params.uniqueNavElements && typeof s.params.prevButton === 'string' && s.prevButton.length > 1 && s.container.find(s.params.prevButton).length === 1) {
	                    s.prevButton = s.container.find(s.params.prevButton);
	                }
	            }
	        }
	        
	        // Is Horizontal
	        s.isHorizontal = function () {
	            return s.params.direction === 'horizontal';
	        };
	        // s.isH = isH;
	        
	        // RTL
	        s.rtl = s.isHorizontal() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');
	        if (s.rtl) {
	            s.classNames.push('swiper-container-rtl');
	        }
	        
	        // Wrong RTL support
	        if (s.rtl) {
	            s.wrongRTL = s.wrapper.css('display') === '-webkit-box';
	        }
	        
	        // Columns
	        if (s.params.slidesPerColumn > 1) {
	            s.classNames.push('swiper-container-multirow');
	        }
	        
	        // Check for Android
	        if (s.device.android) {
	            s.classNames.push('swiper-container-android');
	        }
	        
	        // Add classes
	        s.container.addClass(s.classNames.join(' '));
	        
	        // Translate
	        s.translate = 0;
	        
	        // Progress
	        s.progress = 0;
	        
	        // Velocity
	        s.velocity = 0;
	        
	        /*=========================
	          Locks, unlocks
	          ===========================*/
	        s.lockSwipeToNext = function () {
	            s.params.allowSwipeToNext = false;
	        };
	        s.lockSwipeToPrev = function () {
	            s.params.allowSwipeToPrev = false;
	        };
	        s.lockSwipes = function () {
	            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;
	        };
	        s.unlockSwipeToNext = function () {
	            s.params.allowSwipeToNext = true;
	        };
	        s.unlockSwipeToPrev = function () {
	            s.params.allowSwipeToPrev = true;
	        };
	        s.unlockSwipes = function () {
	            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;
	        };
	        
	        /*=========================
	          Round helper
	          ===========================*/
	        function round(a) {
	            return Math.floor(a);
	        }
	        /*=========================
	          Set grab cursor
	          ===========================*/
	        if (s.params.grabCursor) {
	            s.container[0].style.cursor = 'move';
	            s.container[0].style.cursor = '-webkit-grab';
	            s.container[0].style.cursor = '-moz-grab';
	            s.container[0].style.cursor = 'grab';
	        }
	        /*=========================
	          Update on Images Ready
	          ===========================*/
	        s.imagesToLoad = [];
	        s.imagesLoaded = 0;
	        
	        s.loadImage = function (imgElement, src, srcset, checkForComplete, callback) {
	            var image;
	            function onReady () {
	                if (callback) callback();
	            }
	            if (!imgElement.complete || !checkForComplete) {
	                if (src) {
	                    image = new window.Image();
	                    image.onload = onReady;
	                    image.onerror = onReady;
	                    if (srcset) {
	                        image.srcset = srcset;
	                    }
	                    if (src) {
	                        image.src = src;
	                    }
	                } else {
	                    onReady();
	                }
	        
	            } else {//image already loaded...
	                onReady();
	            }
	        };
	        s.preloadImages = function () {
	            s.imagesToLoad = s.container.find('img');
	            function _onReady() {
	                if (typeof s === 'undefined' || s === null) return;
	                if (s.imagesLoaded !== undefined) s.imagesLoaded++;
	                if (s.imagesLoaded === s.imagesToLoad.length) {
	                    if (s.params.updateOnImagesReady) s.update();
	                    s.emit('onImagesReady', s);
	                }
	            }
	            for (var i = 0; i < s.imagesToLoad.length; i++) {
	                s.loadImage(s.imagesToLoad[i], (s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src')), (s.imagesToLoad[i].srcset || s.imagesToLoad[i].getAttribute('srcset')), true, _onReady);
	            }
	        };
	        
	        /*=========================
	          Autoplay
	          ===========================*/
	        s.autoplayTimeoutId = undefined;
	        s.autoplaying = false;
	        s.autoplayPaused = false;
	        function autoplay() {
	            s.autoplayTimeoutId = setTimeout(function () {
	                if (s.params.loop) {
	                    s.fixLoop();
	                    s._slideNext();
	                    s.emit('onAutoplay', s);
	                }
	                else {
	                    if (!s.isEnd) {
	                        s._slideNext();
	                        s.emit('onAutoplay', s);
	                    }
	                    else {
	                        if (!params.autoplayStopOnLast) {
	                            s._slideTo(0);
	                            s.emit('onAutoplay', s);
	                        }
	                        else {
	                            s.stopAutoplay();
	                        }
	                    }
	                }
	            }, s.params.autoplay);
	        }
	        s.startAutoplay = function () {
	            if (typeof s.autoplayTimeoutId !== 'undefined') return false;
	            if (!s.params.autoplay) return false;
	            if (s.autoplaying) return false;
	            s.autoplaying = true;
	            s.emit('onAutoplayStart', s);
	            autoplay();
	        };
	        s.stopAutoplay = function (internal) {
	            if (!s.autoplayTimeoutId) return;
	            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
	            s.autoplaying = false;
	            s.autoplayTimeoutId = undefined;
	            s.emit('onAutoplayStop', s);
	        };
	        s.pauseAutoplay = function (speed) {
	            if (s.autoplayPaused) return;
	            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
	            s.autoplayPaused = true;
	            if (speed === 0) {
	                s.autoplayPaused = false;
	                autoplay();
	            }
	            else {
	                s.wrapper.transitionEnd(function () {
	                    if (!s) return;
	                    s.autoplayPaused = false;
	                    if (!s.autoplaying) {
	                        s.stopAutoplay();
	                    }
	                    else {
	                        autoplay();
	                    }
	                });
	            }
	        };
	        /*=========================
	          Min/Max Translate
	          ===========================*/
	        s.minTranslate = function () {
	            return (-s.snapGrid[0]);
	        };
	        s.maxTranslate = function () {
	            return (-s.snapGrid[s.snapGrid.length - 1]);
	        };
	        /*=========================
	          Slider/slides sizes
	          ===========================*/
	        s.updateAutoHeight = function () {
	            // Update Height
	            var slide = s.slides.eq(s.activeIndex)[0];
	            if (typeof slide !== 'undefined') {
	                var newHeight = slide.offsetHeight;
	                if (newHeight) s.wrapper.css('height', newHeight + 'px');
	            }
	        };
	        s.updateContainerSize = function () {
	            var width, height;
	            if (typeof s.params.width !== 'undefined') {
	                width = s.params.width;
	            }
	            else {
	                width = s.container[0].clientWidth;
	            }
	            if (typeof s.params.height !== 'undefined') {
	                height = s.params.height;
	            }
	            else {
	                height = s.container[0].clientHeight;
	            }
	            if (width === 0 && s.isHorizontal() || height === 0 && !s.isHorizontal()) {
	                return;
	            }
	        
	            //Subtract paddings
	            width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
	            height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10);
	        
	            // Store values
	            s.width = width;
	            s.height = height;
	            s.size = s.isHorizontal() ? s.width : s.height;
	        };
	        
	        s.updateSlidesSize = function () {
	            s.slides = s.wrapper.children('.' + s.params.slideClass);
	            s.snapGrid = [];
	            s.slidesGrid = [];
	            s.slidesSizesGrid = [];
	        
	            var spaceBetween = s.params.spaceBetween,
	                slidePosition = -s.params.slidesOffsetBefore,
	                i,
	                prevSlideSize = 0,
	                index = 0;
	            if (typeof s.size === 'undefined') return;
	            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
	                spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;
	            }
	        
	            s.virtualSize = -spaceBetween;
	            // reset margins
	            if (s.rtl) s.slides.css({marginLeft: '', marginTop: ''});
	            else s.slides.css({marginRight: '', marginBottom: ''});
	        
	            var slidesNumberEvenToRows;
	            if (s.params.slidesPerColumn > 1) {
	                if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
	                    slidesNumberEvenToRows = s.slides.length;
	                }
	                else {
	                    slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
	                }
	                if (s.params.slidesPerView !== 'auto' && s.params.slidesPerColumnFill === 'row') {
	                    slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, s.params.slidesPerView * s.params.slidesPerColumn);
	                }
	            }
	        
	            // Calc slides
	            var slideSize;
	            var slidesPerColumn = s.params.slidesPerColumn;
	            var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
	            var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);
	            for (i = 0; i < s.slides.length; i++) {
	                slideSize = 0;
	                var slide = s.slides.eq(i);
	                if (s.params.slidesPerColumn > 1) {
	                    // Set slides order
	                    var newSlideOrderIndex;
	                    var column, row;
	                    if (s.params.slidesPerColumnFill === 'column') {
	                        column = Math.floor(i / slidesPerColumn);
	                        row = i - column * slidesPerColumn;
	                        if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn-1)) {
	                            if (++row >= slidesPerColumn) {
	                                row = 0;
	                                column++;
	                            }
	                        }
	                        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
	                        slide
	                            .css({
	                                '-webkit-box-ordinal-group': newSlideOrderIndex,
	                                '-moz-box-ordinal-group': newSlideOrderIndex,
	                                '-ms-flex-order': newSlideOrderIndex,
	                                '-webkit-order': newSlideOrderIndex,
	                                'order': newSlideOrderIndex
	                            });
	                    }
	                    else {
	                        row = Math.floor(i / slidesPerRow);
	                        column = i - row * slidesPerRow;
	                    }
	                    slide
	                        .css({
	                            'margin-top': (row !== 0 && s.params.spaceBetween) && (s.params.spaceBetween + 'px')
	                        })
	                        .attr('data-swiper-column', column)
	                        .attr('data-swiper-row', row);
	        
	                }
	                if (slide.css('display') === 'none') continue;
	                if (s.params.slidesPerView === 'auto') {
	                    slideSize = s.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
	                    if (s.params.roundLengths) slideSize = round(slideSize);
	                }
	                else {
	                    slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;
	                    if (s.params.roundLengths) slideSize = round(slideSize);
	        
	                    if (s.isHorizontal()) {
	                        s.slides[i].style.width = slideSize + 'px';
	                    }
	                    else {
	                        s.slides[i].style.height = slideSize + 'px';
	                    }
	                }
	                s.slides[i].swiperSlideSize = slideSize;
	                s.slidesSizesGrid.push(slideSize);
	        
	        
	                if (s.params.centeredSlides) {
	                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
	                    if (i === 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
	                    if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
	                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
	                    s.slidesGrid.push(slidePosition);
	                }
	                else {
	                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
	                    s.slidesGrid.push(slidePosition);
	                    slidePosition = slidePosition + slideSize + spaceBetween;
	                }
	        
	                s.virtualSize += slideSize + spaceBetween;
	        
	                prevSlideSize = slideSize;
	        
	                index ++;
	            }
	            s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;
	            var newSlidesGrid;
	        
	            if (
	                s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {
	                s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
	            }
	            if (!s.support.flexbox || s.params.setWrapperSize) {
	                if (s.isHorizontal()) s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
	                else s.wrapper.css({height: s.virtualSize + s.params.spaceBetween + 'px'});
	            }
	        
	            if (s.params.slidesPerColumn > 1) {
	                s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;
	                s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;
	                s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
	                if (s.params.centeredSlides) {
	                    newSlidesGrid = [];
	                    for (i = 0; i < s.snapGrid.length; i++) {
	                        if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0]) newSlidesGrid.push(s.snapGrid[i]);
	                    }
	                    s.snapGrid = newSlidesGrid;
	                }
	            }
	        
	            // Remove last grid elements depending on width
	            if (!s.params.centeredSlides) {
	                newSlidesGrid = [];
	                for (i = 0; i < s.snapGrid.length; i++) {
	                    if (s.snapGrid[i] <= s.virtualSize - s.size) {
	                        newSlidesGrid.push(s.snapGrid[i]);
	                    }
	                }
	                s.snapGrid = newSlidesGrid;
	                if (Math.floor(s.virtualSize - s.size) - Math.floor(s.snapGrid[s.snapGrid.length - 1]) > 1) {
	                    s.snapGrid.push(s.virtualSize - s.size);
	                }
	            }
	            if (s.snapGrid.length === 0) s.snapGrid = [0];
	        
	            if (s.params.spaceBetween !== 0) {
	                if (s.isHorizontal()) {
	                    if (s.rtl) s.slides.css({marginLeft: spaceBetween + 'px'});
	                    else s.slides.css({marginRight: spaceBetween + 'px'});
	                }
	                else s.slides.css({marginBottom: spaceBetween + 'px'});
	            }
	            if (s.params.watchSlidesProgress) {
	                s.updateSlidesOffset();
	            }
	        };
	        s.updateSlidesOffset = function () {
	            for (var i = 0; i < s.slides.length; i++) {
	                s.slides[i].swiperSlideOffset = s.isHorizontal() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;
	            }
	        };
	        
	        /*=========================
	          Slider/slides progress
	          ===========================*/
	        s.updateSlidesProgress = function (translate) {
	            if (typeof translate === 'undefined') {
	                translate = s.translate || 0;
	            }
	            if (s.slides.length === 0) return;
	            if (typeof s.slides[0].swiperSlideOffset === 'undefined') s.updateSlidesOffset();
	        
	            var offsetCenter = -translate;
	            if (s.rtl) offsetCenter = translate;
	        
	            // Visible Slides
	            s.slides.removeClass(s.params.slideVisibleClass);
	            for (var i = 0; i < s.slides.length; i++) {
	                var slide = s.slides[i];
	                var slideProgress = (offsetCenter - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);
	                if (s.params.watchSlidesVisibility) {
	                    var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
	                    var slideAfter = slideBefore + s.slidesSizesGrid[i];
	                    var isVisible =
	                        (slideBefore >= 0 && slideBefore < s.size) ||
	                        (slideAfter > 0 && slideAfter <= s.size) ||
	                        (slideBefore <= 0 && slideAfter >= s.size);
	                    if (isVisible) {
	                        s.slides.eq(i).addClass(s.params.slideVisibleClass);
	                    }
	                }
	                slide.progress = s.rtl ? -slideProgress : slideProgress;
	            }
	        };
	        s.updateProgress = function (translate) {
	            if (typeof translate === 'undefined') {
	                translate = s.translate || 0;
	            }
	            var translatesDiff = s.maxTranslate() - s.minTranslate();
	            var wasBeginning = s.isBeginning;
	            var wasEnd = s.isEnd;
	            if (translatesDiff === 0) {
	                s.progress = 0;
	                s.isBeginning = s.isEnd = true;
	            }
	            else {
	                s.progress = (translate - s.minTranslate()) / (translatesDiff);
	                s.isBeginning = s.progress <= 0;
	                s.isEnd = s.progress >= 1;
	            }
	            if (s.isBeginning && !wasBeginning) s.emit('onReachBeginning', s);
	            if (s.isEnd && !wasEnd) s.emit('onReachEnd', s);
	        
	            if (s.params.watchSlidesProgress) s.updateSlidesProgress(translate);
	            s.emit('onProgress', s, s.progress);
	        };
	        s.updateActiveIndex = function () {
	            var translate = s.rtl ? s.translate : -s.translate;
	            var newActiveIndex, i, snapIndex;
	            for (i = 0; i < s.slidesGrid.length; i ++) {
	                if (typeof s.slidesGrid[i + 1] !== 'undefined') {
	                    if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
	                        newActiveIndex = i;
	                    }
	                    else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {
	                        newActiveIndex = i + 1;
	                    }
	                }
	                else {
	                    if (translate >= s.slidesGrid[i]) {
	                        newActiveIndex = i;
	                    }
	                }
	            }
	            // Normalize slideIndex
	            if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined') newActiveIndex = 0;
	            // for (i = 0; i < s.slidesGrid.length; i++) {
	                // if (- translate >= s.slidesGrid[i]) {
	                    // newActiveIndex = i;
	                // }
	            // }
	            snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);
	            if (snapIndex >= s.snapGrid.length) snapIndex = s.snapGrid.length - 1;
	        
	            if (newActiveIndex === s.activeIndex) {
	                return;
	            }
	            s.snapIndex = snapIndex;
	            s.previousIndex = s.activeIndex;
	            s.activeIndex = newActiveIndex;
	            s.updateClasses();
	        };
	        
	        /*=========================
	          Classes
	          ===========================*/
	        s.updateClasses = function () {
	            s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass);
	            var activeSlide = s.slides.eq(s.activeIndex);
	            // Active classes
	            activeSlide.addClass(s.params.slideActiveClass);
	            // Next Slide
	            var nextSlide = activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);
	            if (s.params.loop && nextSlide.length === 0) {
	                s.slides.eq(0).addClass(s.params.slideNextClass);
	            }
	            // Prev Slide
	            var prevSlide = activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);
	            if (s.params.loop && prevSlide.length === 0) {
	                s.slides.eq(-1).addClass(s.params.slidePrevClass);
	            }
	        
	            // Pagination
	            if (s.paginationContainer && s.paginationContainer.length > 0) {
	                // Current/Total
	                var current,
	                    total = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
	                if (s.params.loop) {
	                    current = Math.ceil((s.activeIndex - s.loopedSlides)/s.params.slidesPerGroup);
	                    if (current > s.slides.length - 1 - s.loopedSlides * 2) {
	                        current = current - (s.slides.length - s.loopedSlides * 2);
	                    }
	                    if (current > total - 1) current = current - total;
	                    if (current < 0 && s.params.paginationType !== 'bullets') current = total + current;
	                }
	                else {
	                    if (typeof s.snapIndex !== 'undefined') {
	                        current = s.snapIndex;
	                    }
	                    else {
	                        current = s.activeIndex || 0;
	                    }
	                }
	                // Types
	                if (s.params.paginationType === 'bullets' && s.bullets && s.bullets.length > 0) {
	                    s.bullets.removeClass(s.params.bulletActiveClass);
	                    if (s.paginationContainer.length > 1) {
	                        s.bullets.each(function () {
	                            if ($(this).index() === current) $(this).addClass(s.params.bulletActiveClass);
	                        });
	                    }
	                    else {
	                        s.bullets.eq(current).addClass(s.params.bulletActiveClass);
	                    }
	                }
	                if (s.params.paginationType === 'fraction') {
	                    s.paginationContainer.find('.' + s.params.paginationCurrentClass).text(current + 1);
	                    s.paginationContainer.find('.' + s.params.paginationTotalClass).text(total);
	                }
	                if (s.params.paginationType === 'progress') {
	                    var scale = (current + 1) / total,
	                        scaleX = scale,
	                        scaleY = 1;
	                    if (!s.isHorizontal()) {
	                        scaleY = scale;
	                        scaleX = 1;
	                    }
	                    s.paginationContainer.find('.' + s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(s.params.speed);
	                }
	                if (s.params.paginationType === 'custom' && s.params.paginationCustomRender) {
	                    s.paginationContainer.html(s.params.paginationCustomRender(s, current + 1, total));
	                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
	                }
	            }
	        
	            // Next/active buttons
	            if (!s.params.loop) {
	                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
	                    if (s.isBeginning) {
	                        s.prevButton.addClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.disable(s.prevButton);
	                    }
	                    else {
	                        s.prevButton.removeClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.enable(s.prevButton);
	                    }
	                }
	                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
	                    if (s.isEnd) {
	                        s.nextButton.addClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.disable(s.nextButton);
	                    }
	                    else {
	                        s.nextButton.removeClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.enable(s.nextButton);
	                    }
	                }
	            }
	        };
	        
	        /*=========================
	          Pagination
	          ===========================*/
	        s.updatePagination = function () {
	            if (!s.params.pagination) return;
	            if (s.paginationContainer && s.paginationContainer.length > 0) {
	                var paginationHTML = '';
	                if (s.params.paginationType === 'bullets') {
	                    var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
	                    for (var i = 0; i < numberOfBullets; i++) {
	                        if (s.params.paginationBulletRender) {
	                            paginationHTML += s.params.paginationBulletRender(i, s.params.bulletClass);
	                        }
	                        else {
	                            paginationHTML += '<' + s.params.paginationElement+' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
	                        }
	                    }
	                    s.paginationContainer.html(paginationHTML);
	                    s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);
	                    if (s.params.paginationClickable && s.params.a11y && s.a11y) {
	                        s.a11y.initPagination();
	                    }
	                }
	                if (s.params.paginationType === 'fraction') {
	                    if (s.params.paginationFractionRender) {
	                        paginationHTML = s.params.paginationFractionRender(s, s.params.paginationCurrentClass, s.params.paginationTotalClass);
	                    }
	                    else {
	                        paginationHTML =
	                            '<span class="' + s.params.paginationCurrentClass + '"></span>' +
	                            ' / ' +
	                            '<span class="' + s.params.paginationTotalClass+'"></span>';
	                    }
	                    s.paginationContainer.html(paginationHTML);
	                }
	                if (s.params.paginationType === 'progress') {
	                    if (s.params.paginationProgressRender) {
	                        paginationHTML = s.params.paginationProgressRender(s, s.params.paginationProgressbarClass);
	                    }
	                    else {
	                        paginationHTML = '<span class="' + s.params.paginationProgressbarClass + '"></span>';
	                    }
	                    s.paginationContainer.html(paginationHTML);
	                }
	                if (s.params.paginationType !== 'custom') {
	                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
	                }
	            }
	        };
	        /*=========================
	          Common update method
	          ===========================*/
	        s.update = function (updateTranslate) {
	            s.updateContainerSize();
	            s.updateSlidesSize();
	            s.updateProgress();
	            s.updatePagination();
	            s.updateClasses();
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.set();
	            }
	            function forceSetTranslate() {
	                newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
	                s.setWrapperTranslate(newTranslate);
	                s.updateActiveIndex();
	                s.updateClasses();
	            }
	            if (updateTranslate) {
	                var translated, newTranslate;
	                if (s.controller && s.controller.spline) {
	                    s.controller.spline = undefined;
	                }
	                if (s.params.freeMode) {
	                    forceSetTranslate();
	                    if (s.params.autoHeight) {
	                        s.updateAutoHeight();
	                    }
	                }
	                else {
	                    if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
	                        translated = s.slideTo(s.slides.length - 1, 0, false, true);
	                    }
	                    else {
	                        translated = s.slideTo(s.activeIndex, 0, false, true);
	                    }
	                    if (!translated) {
	                        forceSetTranslate();
	                    }
	                }
	            }
	            else if (s.params.autoHeight) {
	                s.updateAutoHeight();
	            }
	        };
	        
	        /*=========================
	          Resize Handler
	          ===========================*/
	        s.onResize = function (forceUpdatePagination) {
	            //Breakpoints
	            if (s.params.breakpoints) {
	                s.setBreakpoint();
	            }
	        
	            // Disable locks on resize
	            var allowSwipeToPrev = s.params.allowSwipeToPrev;
	            var allowSwipeToNext = s.params.allowSwipeToNext;
	            s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;
	        
	            s.updateContainerSize();
	            s.updateSlidesSize();
	            if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination) s.updatePagination();
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.set();
	            }
	            if (s.controller && s.controller.spline) {
	                s.controller.spline = undefined;
	            }
	            var slideChangedBySlideTo = false;
	            if (s.params.freeMode) {
	                var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
	                s.setWrapperTranslate(newTranslate);
	                s.updateActiveIndex();
	                s.updateClasses();
	        
	                if (s.params.autoHeight) {
	                    s.updateAutoHeight();
	                }
	            }
	            else {
	                s.updateClasses();
	                if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
	                    slideChangedBySlideTo = s.slideTo(s.slides.length - 1, 0, false, true);
	                }
	                else {
	                    slideChangedBySlideTo = s.slideTo(s.activeIndex, 0, false, true);
	                }
	            }
	            if (s.params.lazyLoading && !slideChangedBySlideTo && s.lazy) {
	                s.lazy.load();
	            }
	            // Return locks after resize
	            s.params.allowSwipeToPrev = allowSwipeToPrev;
	            s.params.allowSwipeToNext = allowSwipeToNext;
	        };
	        
	        /*=========================
	          Events
	          ===========================*/
	        
	        //Define Touch Events
	        var desktopEvents = ['mousedown', 'mousemove', 'mouseup'];
	        if (window.navigator.pointerEnabled) desktopEvents = ['pointerdown', 'pointermove', 'pointerup'];
	        else if (window.navigator.msPointerEnabled) desktopEvents = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
	        s.touchEvents = {
	            start : s.support.touch || !s.params.simulateTouch  ? 'touchstart' : desktopEvents[0],
	            move : s.support.touch || !s.params.simulateTouch ? 'touchmove' : desktopEvents[1],
	            end : s.support.touch || !s.params.simulateTouch ? 'touchend' : desktopEvents[2]
	        };
	        
	        
	        // WP8 Touch Events Fix
	        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
	            (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
	        }
	        
	        // Attach/detach events
	        s.initEvents = function (detach) {
	            var actionDom = detach ? 'off' : 'on';
	            var action = detach ? 'removeEventListener' : 'addEventListener';
	            var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];
	            var target = s.support.touch ? touchEventsTarget : document;
	        
	            var moveCapture = s.params.nested ? true : false;
	        
	            //Touch Events
	            if (s.browser.ie) {
	                touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
	                target[action](s.touchEvents.move, s.onTouchMove, moveCapture);
	                target[action](s.touchEvents.end, s.onTouchEnd, false);
	            }
	            else {
	                if (s.support.touch) {
	                    touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
	                    touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);
	                    touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, false);
	                }
	                if (params.simulateTouch && !s.device.ios && !s.device.android) {
	                    touchEventsTarget[action]('mousedown', s.onTouchStart, false);
	                    document[action]('mousemove', s.onTouchMove, moveCapture);
	                    document[action]('mouseup', s.onTouchEnd, false);
	                }
	            }
	            window[action]('resize', s.onResize);
	        
	            // Next, Prev, Index
	            if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
	                s.nextButton[actionDom]('click', s.onClickNext);
	                if (s.params.a11y && s.a11y) s.nextButton[actionDom]('keydown', s.a11y.onEnterKey);
	            }
	            if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
	                s.prevButton[actionDom]('click', s.onClickPrev);
	                if (s.params.a11y && s.a11y) s.prevButton[actionDom]('keydown', s.a11y.onEnterKey);
	            }
	            if (s.params.pagination && s.params.paginationClickable) {
	                s.paginationContainer[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
	                if (s.params.a11y && s.a11y) s.paginationContainer[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
	            }
	        
	            // Prevent Links Clicks
	            if (s.params.preventClicks || s.params.preventClicksPropagation) touchEventsTarget[action]('click', s.preventClicks, true);
	        };
	        s.attachEvents = function () {
	            s.initEvents();
	        };
	        s.detachEvents = function () {
	            s.initEvents(true);
	        };
	        
	        /*=========================
	          Handle Clicks
	          ===========================*/
	        // Prevent Clicks
	        s.allowClick = true;
	        s.preventClicks = function (e) {
	            if (!s.allowClick) {
	                if (s.params.preventClicks) e.preventDefault();
	                if (s.params.preventClicksPropagation && s.animating) {
	                    e.stopPropagation();
	                    e.stopImmediatePropagation();
	                }
	            }
	        };
	        // Clicks
	        s.onClickNext = function (e) {
	            e.preventDefault();
	            if (s.isEnd && !s.params.loop) return;
	            s.slideNext();
	        };
	        s.onClickPrev = function (e) {
	            e.preventDefault();
	            if (s.isBeginning && !s.params.loop) return;
	            s.slidePrev();
	        };
	        s.onClickIndex = function (e) {
	            e.preventDefault();
	            var index = $(this).index() * s.params.slidesPerGroup;
	            if (s.params.loop) index = index + s.loopedSlides;
	            s.slideTo(index);
	        };
	        
	        /*=========================
	          Handle Touches
	          ===========================*/
	        function findElementInEvent(e, selector) {
	            var el = $(e.target);
	            if (!el.is(selector)) {
	                if (typeof selector === 'string') {
	                    el = el.parents(selector);
	                }
	                else if (selector.nodeType) {
	                    var found;
	                    el.parents().each(function (index, _el) {
	                        if (_el === selector) found = selector;
	                    });
	                    if (!found) return undefined;
	                    else return selector;
	                }
	            }
	            if (el.length === 0) {
	                return undefined;
	            }
	            return el[0];
	        }
	        s.updateClickedSlide = function (e) {
	            var slide = findElementInEvent(e, '.' + s.params.slideClass);
	            var slideFound = false;
	            if (slide) {
	                for (var i = 0; i < s.slides.length; i++) {
	                    if (s.slides[i] === slide) slideFound = true;
	                }
	            }
	        
	            if (slide && slideFound) {
	                s.clickedSlide = slide;
	                s.clickedIndex = $(slide).index();
	            }
	            else {
	                s.clickedSlide = undefined;
	                s.clickedIndex = undefined;
	                return;
	            }
	            if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {
	                var slideToIndex = s.clickedIndex,
	                    realIndex,
	                    duplicatedSlides;
	                if (s.params.loop) {
	                    if (s.animating) return;
	                    realIndex = $(s.clickedSlide).attr('data-swiper-slide-index');
	                    if (s.params.centeredSlides) {
	                        if ((slideToIndex < s.loopedSlides - s.params.slidesPerView/2) || (slideToIndex > s.slides.length - s.loopedSlides + s.params.slidesPerView/2)) {
	                            s.fixLoop();
	                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.swiper-slide-duplicate)').eq(0).index();
	                            setTimeout(function () {
	                                s.slideTo(slideToIndex);
	                            }, 0);
	                        }
	                        else {
	                            s.slideTo(slideToIndex);
	                        }
	                    }
	                    else {
	                        if (slideToIndex > s.slides.length - s.params.slidesPerView) {
	                            s.fixLoop();
	                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.swiper-slide-duplicate)').eq(0).index();
	                            setTimeout(function () {
	                                s.slideTo(slideToIndex);
	                            }, 0);
	                        }
	                        else {
	                            s.slideTo(slideToIndex);
	                        }
	                    }
	                }
	                else {
	                    s.slideTo(slideToIndex);
	                }
	            }
	        };
	        
	        var isTouched,
	            isMoved,
	            allowTouchCallbacks,
	            touchStartTime,
	            isScrolling,
	            currentTranslate,
	            startTranslate,
	            allowThresholdMove,
	            // Form elements to match
	            formElements = 'input, select, textarea, button',
	            // Last click time
	            lastClickTime = Date.now(), clickTimeout,
	            //Velocities
	            velocities = [],
	            allowMomentumBounce;
	        
	        // Animating Flag
	        s.animating = false;
	        
	        // Touches information
	        s.touches = {
	            startX: 0,
	            startY: 0,
	            currentX: 0,
	            currentY: 0,
	            diff: 0
	        };
	        
	        // Touch handlers
	        var isTouchEvent, startMoving;
	        s.onTouchStart = function (e) {
	            if (e.originalEvent) e = e.originalEvent;
	            isTouchEvent = e.type === 'touchstart';
	            if (!isTouchEvent && 'which' in e && e.which === 3) return;
	            if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {
	                s.allowClick = true;
	                return;
	            }
	            if (s.params.swipeHandler) {
	                if (!findElementInEvent(e, s.params.swipeHandler)) return;
	            }
	        
	            var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
	            var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
	        
	            // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
	            if(s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {
	                return;
	            }
	        
	            isTouched = true;
	            isMoved = false;
	            allowTouchCallbacks = true;
	            isScrolling = undefined;
	            startMoving = undefined;
	            s.touches.startX = startX;
	            s.touches.startY = startY;
	            touchStartTime = Date.now();
	            s.allowClick = true;
	            s.updateContainerSize();
	            s.swipeDirection = undefined;
	            if (s.params.threshold > 0) allowThresholdMove = false;
	            if (e.type !== 'touchstart') {
	                var preventDefault = true;
	                if ($(e.target).is(formElements)) preventDefault = false;
	                if (document.activeElement && $(document.activeElement).is(formElements)) {
	                    document.activeElement.blur();
	                }
	                if (preventDefault) {
	                    e.preventDefault();
	                }
	            }
	            s.emit('onTouchStart', s, e);
	        };
	        
	        s.onTouchMove = function (e) {
	            if (e.originalEvent) e = e.originalEvent;
	            if (isTouchEvent && e.type === 'mousemove') return;
	            if (e.preventedByNestedSwiper) {
	                s.touches.startX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	                s.touches.startY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	                return;
	            }
	            if (s.params.onlyExternal) {
	                // isMoved = true;
	                s.allowClick = false;
	                if (isTouched) {
	                    s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	                    s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	                    touchStartTime = Date.now();
	                }
	                return;
	            }
	            if (isTouchEvent && document.activeElement) {
	                if (e.target === document.activeElement && $(e.target).is(formElements)) {
	                    isMoved = true;
	                    s.allowClick = false;
	                    return;
	                }
	            }
	            if (allowTouchCallbacks) {
	                s.emit('onTouchMove', s, e);
	            }
	            if (e.targetTouches && e.targetTouches.length > 1) return;
	        
	            s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	            s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	        
	            if (typeof isScrolling === 'undefined') {
	                var touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
	                isScrolling = s.isHorizontal() ? touchAngle > s.params.touchAngle : (90 - touchAngle > s.params.touchAngle);
	            }
	            if (isScrolling) {
	                s.emit('onTouchMoveOpposite', s, e);
	            }
	            if (typeof startMoving === 'undefined' && s.browser.ieTouch) {
	                if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {
	                    startMoving = true;
	                }
	            }
	            if (!isTouched) return;
	            if (isScrolling)  {
	                isTouched = false;
	                return;
	            }
	            if (!startMoving && s.browser.ieTouch) {
	                return;
	            }
	            s.allowClick = false;
	            s.emit('onSliderMove', s, e);
	            e.preventDefault();
	            if (s.params.touchMoveStopPropagation && !s.params.nested) {
	                e.stopPropagation();
	            }
	        
	            if (!isMoved) {
	                if (params.loop) {
	                    s.fixLoop();
	                }
	                startTranslate = s.getWrapperTranslate();
	                s.setWrapperTransition(0);
	                if (s.animating) {
	                    s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
	                }
	                if (s.params.autoplay && s.autoplaying) {
	                    if (s.params.autoplayDisableOnInteraction) {
	                        s.stopAutoplay();
	                    }
	                    else {
	                        s.pauseAutoplay();
	                    }
	                }
	                allowMomentumBounce = false;
	                //Grab Cursor
	                if (s.params.grabCursor) {
	                    s.container[0].style.cursor = 'move';
	                    s.container[0].style.cursor = '-webkit-grabbing';
	                    s.container[0].style.cursor = '-moz-grabbin';
	                    s.container[0].style.cursor = 'grabbing';
	                }
	            }
	            isMoved = true;
	        
	            var diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
	        
	            diff = diff * s.params.touchRatio;
	            if (s.rtl) diff = -diff;
	        
	            s.swipeDirection = diff > 0 ? 'prev' : 'next';
	            currentTranslate = diff + startTranslate;
	        
	            var disableParentSwiper = true;
	            if ((diff > 0 && currentTranslate > s.minTranslate())) {
	                disableParentSwiper = false;
	                if (s.params.resistance) currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
	            }
	            else if (diff < 0 && currentTranslate < s.maxTranslate()) {
	                disableParentSwiper = false;
	                if (s.params.resistance) currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
	            }
	        
	            if (disableParentSwiper) {
	                e.preventedByNestedSwiper = true;
	            }
	        
	            // Directions locks
	            if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {
	                currentTranslate = startTranslate;
	            }
	            if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {
	                currentTranslate = startTranslate;
	            }
	        
	            if (!s.params.followFinger) return;
	        
	            // Threshold
	            if (s.params.threshold > 0) {
	                if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {
	                    if (!allowThresholdMove) {
	                        allowThresholdMove = true;
	                        s.touches.startX = s.touches.currentX;
	                        s.touches.startY = s.touches.currentY;
	                        currentTranslate = startTranslate;
	                        s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
	                        return;
	                    }
	                }
	                else {
	                    currentTranslate = startTranslate;
	                    return;
	                }
	            }
	            // Update active index in free mode
	            if (s.params.freeMode || s.params.watchSlidesProgress) {
	                s.updateActiveIndex();
	            }
	            if (s.params.freeMode) {
	                //Velocity
	                if (velocities.length === 0) {
	                    velocities.push({
	                        position: s.touches[s.isHorizontal() ? 'startX' : 'startY'],
	                        time: touchStartTime
	                    });
	                }
	                velocities.push({
	                    position: s.touches[s.isHorizontal() ? 'currentX' : 'currentY'],
	                    time: (new window.Date()).getTime()
	                });
	            }
	            // Update progress
	            s.updateProgress(currentTranslate);
	            // Update translate
	            s.setWrapperTranslate(currentTranslate);
	        };
	        s.onTouchEnd = function (e) {
	            if (e.originalEvent) e = e.originalEvent;
	            if (allowTouchCallbacks) {
	                s.emit('onTouchEnd', s, e);
	            }
	            allowTouchCallbacks = false;
	            if (!isTouched) return;
	            //Return Grab Cursor
	            if (s.params.grabCursor && isMoved && isTouched) {
	                s.container[0].style.cursor = 'move';
	                s.container[0].style.cursor = '-webkit-grab';
	                s.container[0].style.cursor = '-moz-grab';
	                s.container[0].style.cursor = 'grab';
	            }
	        
	            // Time diff
	            var touchEndTime = Date.now();
	            var timeDiff = touchEndTime - touchStartTime;
	        
	            // Tap, doubleTap, Click
	            if (s.allowClick) {
	                s.updateClickedSlide(e);
	                s.emit('onTap', s, e);
	                if (timeDiff < 300 && (touchEndTime - lastClickTime) > 300) {
	                    if (clickTimeout) clearTimeout(clickTimeout);
	                    clickTimeout = setTimeout(function () {
	                        if (!s) return;
	                        if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
	                            s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
	                        }
	                        s.emit('onClick', s, e);
	                    }, 300);
	        
	                }
	                if (timeDiff < 300 && (touchEndTime - lastClickTime) < 300) {
	                    if (clickTimeout) clearTimeout(clickTimeout);
	                    s.emit('onDoubleTap', s, e);
	                }
	            }
	        
	            lastClickTime = Date.now();
	            setTimeout(function () {
	                if (s) s.allowClick = true;
	            }, 0);
	        
	            if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
	                isTouched = isMoved = false;
	                return;
	            }
	            isTouched = isMoved = false;
	        
	            var currentPos;
	            if (s.params.followFinger) {
	                currentPos = s.rtl ? s.translate : -s.translate;
	            }
	            else {
	                currentPos = -currentTranslate;
	            }
	            if (s.params.freeMode) {
	                if (currentPos < -s.minTranslate()) {
	                    s.slideTo(s.activeIndex);
	                    return;
	                }
	                else if (currentPos > -s.maxTranslate()) {
	                    if (s.slides.length < s.snapGrid.length) {
	                        s.slideTo(s.snapGrid.length - 1);
	                    }
	                    else {
	                        s.slideTo(s.slides.length - 1);
	                    }
	                    return;
	                }
	        
	                if (s.params.freeModeMomentum) {
	                    if (velocities.length > 1) {
	                        var lastMoveEvent = velocities.pop(), velocityEvent = velocities.pop();
	        
	                        var distance = lastMoveEvent.position - velocityEvent.position;
	                        var time = lastMoveEvent.time - velocityEvent.time;
	                        s.velocity = distance / time;
	                        s.velocity = s.velocity / 2;
	                        if (Math.abs(s.velocity) < s.params.freeModeMinimumVelocity) {
	                            s.velocity = 0;
	                        }
	                        // this implies that the user stopped moving a finger then released.
	                        // There would be no events with distance zero, so the last event is stale.
	                        if (time > 150 || (new window.Date().getTime() - lastMoveEvent.time) > 300) {
	                            s.velocity = 0;
	                        }
	                    } else {
	                        s.velocity = 0;
	                    }
	        
	                    velocities.length = 0;
	                    var momentumDuration = 1000 * s.params.freeModeMomentumRatio;
	                    var momentumDistance = s.velocity * momentumDuration;
	        
	                    var newPosition = s.translate + momentumDistance;
	                    if (s.rtl) newPosition = - newPosition;
	                    var doBounce = false;
	                    var afterBouncePosition;
	                    var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;
	                    if (newPosition < s.maxTranslate()) {
	                        if (s.params.freeModeMomentumBounce) {
	                            if (newPosition + s.maxTranslate() < -bounceAmount) {
	                                newPosition = s.maxTranslate() - bounceAmount;
	                            }
	                            afterBouncePosition = s.maxTranslate();
	                            doBounce = true;
	                            allowMomentumBounce = true;
	                        }
	                        else {
	                            newPosition = s.maxTranslate();
	                        }
	                    }
	                    else if (newPosition > s.minTranslate()) {
	                        if (s.params.freeModeMomentumBounce) {
	                            if (newPosition - s.minTranslate() > bounceAmount) {
	                                newPosition = s.minTranslate() + bounceAmount;
	                            }
	                            afterBouncePosition = s.minTranslate();
	                            doBounce = true;
	                            allowMomentumBounce = true;
	                        }
	                        else {
	                            newPosition = s.minTranslate();
	                        }
	                    }
	                    else if (s.params.freeModeSticky) {
	                        var j = 0,
	                            nextSlide;
	                        for (j = 0; j < s.snapGrid.length; j += 1) {
	                            if (s.snapGrid[j] > -newPosition) {
	                                nextSlide = j;
	                                break;
	                            }
	        
	                        }
	                        if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
	                            newPosition = s.snapGrid[nextSlide];
	                        } else {
	                            newPosition = s.snapGrid[nextSlide - 1];
	                        }
	                        if (!s.rtl) newPosition = - newPosition;
	                    }
	                    //Fix duration
	                    if (s.velocity !== 0) {
	                        if (s.rtl) {
	                            momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);
	                        }
	                        else {
	                            momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);
	                        }
	                    }
	                    else if (s.params.freeModeSticky) {
	                        s.slideReset();
	                        return;
	                    }
	        
	                    if (s.params.freeModeMomentumBounce && doBounce) {
	                        s.updateProgress(afterBouncePosition);
	                        s.setWrapperTransition(momentumDuration);
	                        s.setWrapperTranslate(newPosition);
	                        s.onTransitionStart();
	                        s.animating = true;
	                        s.wrapper.transitionEnd(function () {
	                            if (!s || !allowMomentumBounce) return;
	                            s.emit('onMomentumBounce', s);
	        
	                            s.setWrapperTransition(s.params.speed);
	                            s.setWrapperTranslate(afterBouncePosition);
	                            s.wrapper.transitionEnd(function () {
	                                if (!s) return;
	                                s.onTransitionEnd();
	                            });
	                        });
	                    } else if (s.velocity) {
	                        s.updateProgress(newPosition);
	                        s.setWrapperTransition(momentumDuration);
	                        s.setWrapperTranslate(newPosition);
	                        s.onTransitionStart();
	                        if (!s.animating) {
	                            s.animating = true;
	                            s.wrapper.transitionEnd(function () {
	                                if (!s) return;
	                                s.onTransitionEnd();
	                            });
	                        }
	        
	                    } else {
	                        s.updateProgress(newPosition);
	                    }
	        
	                    s.updateActiveIndex();
	                }
	                if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {
	                    s.updateProgress();
	                    s.updateActiveIndex();
	                }
	                return;
	            }
	        
	            // Find current slide
	            var i, stopIndex = 0, groupSize = s.slidesSizesGrid[0];
	            for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {
	                if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {
	                    if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {
	                        stopIndex = i;
	                        groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];
	                    }
	                }
	                else {
	                    if (currentPos >= s.slidesGrid[i]) {
	                        stopIndex = i;
	                        groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];
	                    }
	                }
	            }
	        
	            // Find current slide size
	            var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;
	        
	            if (timeDiff > s.params.longSwipesMs) {
	                // Long touches
	                if (!s.params.longSwipes) {
	                    s.slideTo(s.activeIndex);
	                    return;
	                }
	                if (s.swipeDirection === 'next') {
	                    if (ratio >= s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);
	                    else s.slideTo(stopIndex);
	        
	                }
	                if (s.swipeDirection === 'prev') {
	                    if (ratio > (1 - s.params.longSwipesRatio)) s.slideTo(stopIndex + s.params.slidesPerGroup);
	                    else s.slideTo(stopIndex);
	                }
	            }
	            else {
	                // Short swipes
	                if (!s.params.shortSwipes) {
	                    s.slideTo(s.activeIndex);
	                    return;
	                }
	                if (s.swipeDirection === 'next') {
	                    s.slideTo(stopIndex + s.params.slidesPerGroup);
	        
	                }
	                if (s.swipeDirection === 'prev') {
	                    s.slideTo(stopIndex);
	                }
	            }
	        };
	        /*=========================
	          Transitions
	          ===========================*/
	        s._slideTo = function (slideIndex, speed) {
	            return s.slideTo(slideIndex, speed, true, true);
	        };
	        s.slideTo = function (slideIndex, speed, runCallbacks, internal) {
	            if (typeof runCallbacks === 'undefined') runCallbacks = true;
	            if (typeof slideIndex === 'undefined') slideIndex = 0;
	            if (slideIndex < 0) slideIndex = 0;
	            s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);
	            if (s.snapIndex >= s.snapGrid.length) s.snapIndex = s.snapGrid.length - 1;
	        
	            var translate = - s.snapGrid[s.snapIndex];
	            // Stop autoplay
	            if (s.params.autoplay && s.autoplaying) {
	                if (internal || !s.params.autoplayDisableOnInteraction) {
	                    s.pauseAutoplay(speed);
	                }
	                else {
	                    s.stopAutoplay();
	                }
	            }
	            // Update progress
	            s.updateProgress(translate);
	        
	            // Normalize slideIndex
	            for (var i = 0; i < s.slidesGrid.length; i++) {
	                if (- Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {
	                    slideIndex = i;
	                }
	            }
	        
	            // Directions locks
	            if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {
	                return false;
	            }
	            if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {
	                if ((s.activeIndex || 0) !== slideIndex ) return false;
	            }
	        
	            // Update Index
	            if (typeof speed === 'undefined') speed = s.params.speed;
	            s.previousIndex = s.activeIndex || 0;
	            s.activeIndex = slideIndex;
	        
	            if ((s.rtl && -translate === s.translate) || (!s.rtl && translate === s.translate)) {
	                // Update Height
	                if (s.params.autoHeight) {
	                    s.updateAutoHeight();
	                }
	                s.updateClasses();
	                if (s.params.effect !== 'slide') {
	                    s.setWrapperTranslate(translate);
	                }
	                return false;
	            }
	            s.updateClasses();
	            s.onTransitionStart(runCallbacks);
	        
	            if (speed === 0) {
	                s.setWrapperTranslate(translate);
	                s.setWrapperTransition(0);
	                s.onTransitionEnd(runCallbacks);
	            }
	            else {
	                s.setWrapperTranslate(translate);
	                s.setWrapperTransition(speed);
	                if (!s.animating) {
	                    s.animating = true;
	                    s.wrapper.transitionEnd(function () {
	                        if (!s) return;
	                        s.onTransitionEnd(runCallbacks);
	                    });
	                }
	        
	            }
	        
	            return true;
	        };
	        
	        s.onTransitionStart = function (runCallbacks) {
	            if (typeof runCallbacks === 'undefined') runCallbacks = true;
	            if (s.params.autoHeight) {
	                s.updateAutoHeight();
	            }
	            if (s.lazy) s.lazy.onTransitionStart();
	            if (runCallbacks) {
	                s.emit('onTransitionStart', s);
	                if (s.activeIndex !== s.previousIndex) {
	                    s.emit('onSlideChangeStart', s);
	                    if (s.activeIndex > s.previousIndex) {
	                        s.emit('onSlideNextStart', s);
	                    }
	                    else {
	                        s.emit('onSlidePrevStart', s);
	                    }
	                }
	        
	            }
	        };
	        s.onTransitionEnd = function (runCallbacks) {
	            s.animating = false;
	            s.setWrapperTransition(0);
	            if (typeof runCallbacks === 'undefined') runCallbacks = true;
	            if (s.lazy) s.lazy.onTransitionEnd();
	            if (runCallbacks) {
	                s.emit('onTransitionEnd', s);
	                if (s.activeIndex !== s.previousIndex) {
	                    s.emit('onSlideChangeEnd', s);
	                    if (s.activeIndex > s.previousIndex) {
	                        s.emit('onSlideNextEnd', s);
	                    }
	                    else {
	                        s.emit('onSlidePrevEnd', s);
	                    }
	                }
	            }
	            if (s.params.hashnav && s.hashnav) {
	                s.hashnav.setHash();
	            }
	        
	        };
	        s.slideNext = function (runCallbacks, speed, internal) {
	            if (s.params.loop) {
	                if (s.animating) return false;
	                s.fixLoop();
	                var clientLeft = s.container[0].clientLeft;
	                return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
	            }
	            else return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
	        };
	        s._slideNext = function (speed) {
	            return s.slideNext(true, speed, true);
	        };
	        s.slidePrev = function (runCallbacks, speed, internal) {
	            if (s.params.loop) {
	                if (s.animating) return false;
	                s.fixLoop();
	                var clientLeft = s.container[0].clientLeft;
	                return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
	            }
	            else return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
	        };
	        s._slidePrev = function (speed) {
	            return s.slidePrev(true, speed, true);
	        };
	        s.slideReset = function (runCallbacks, speed, internal) {
	            return s.slideTo(s.activeIndex, speed, runCallbacks);
	        };
	        
	        /*=========================
	          Translate/transition helpers
	          ===========================*/
	        s.setWrapperTransition = function (duration, byController) {
	            s.wrapper.transition(duration);
	            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
	                s.effects[s.params.effect].setTransition(duration);
	            }
	            if (s.params.parallax && s.parallax) {
	                s.parallax.setTransition(duration);
	            }
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.setTransition(duration);
	            }
	            if (s.params.control && s.controller) {
	                s.controller.setTransition(duration, byController);
	            }
	            s.emit('onSetTransition', s, duration);
	        };
	        s.setWrapperTranslate = function (translate, updateActiveIndex, byController) {
	            var x = 0, y = 0, z = 0;
	            if (s.isHorizontal()) {
	                x = s.rtl ? -translate : translate;
	            }
	            else {
	                y = translate;
	            }
	        
	            if (s.params.roundLengths) {
	                x = round(x);
	                y = round(y);
	            }
	        
	            if (!s.params.virtualTranslate) {
	                if (s.support.transforms3d) s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');
	                else s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');
	            }
	        
	            s.translate = s.isHorizontal() ? x : y;
	        
	            // Check if we need to update progress
	            var progress;
	            var translatesDiff = s.maxTranslate() - s.minTranslate();
	            if (translatesDiff === 0) {
	                progress = 0;
	            }
	            else {
	                progress = (translate - s.minTranslate()) / (translatesDiff);
	            }
	            if (progress !== s.progress) {
	                s.updateProgress(translate);
	            }
	        
	            if (updateActiveIndex) s.updateActiveIndex();
	            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
	                s.effects[s.params.effect].setTranslate(s.translate);
	            }
	            if (s.params.parallax && s.parallax) {
	                s.parallax.setTranslate(s.translate);
	            }
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.setTranslate(s.translate);
	            }
	            if (s.params.control && s.controller) {
	                s.controller.setTranslate(s.translate, byController);
	            }
	            s.emit('onSetTranslate', s, s.translate);
	        };
	        
	        s.getTranslate = function (el, axis) {
	            var matrix, curTransform, curStyle, transformMatrix;
	        
	            // automatic axis detection
	            if (typeof axis === 'undefined') {
	                axis = 'x';
	            }
	        
	            if (s.params.virtualTranslate) {
	                return s.rtl ? -s.translate : s.translate;
	            }
	        
	            curStyle = window.getComputedStyle(el, null);
	            if (window.WebKitCSSMatrix) {
	                curTransform = curStyle.transform || curStyle.webkitTransform;
	                if (curTransform.split(',').length > 6) {
	                    curTransform = curTransform.split(', ').map(function(a){
	                        return a.replace(',','.');
	                    }).join(', ');
	                }
	                // Some old versions of Webkit choke when 'none' is passed; pass
	                // empty string instead in this case
	                transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
	            }
	            else {
	                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform  || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
	                matrix = transformMatrix.toString().split(',');
	            }
	        
	            if (axis === 'x') {
	                //Latest Chrome and webkits Fix
	                if (window.WebKitCSSMatrix)
	                    curTransform = transformMatrix.m41;
	                //Crazy IE10 Matrix
	                else if (matrix.length === 16)
	                    curTransform = parseFloat(matrix[12]);
	                //Normal Browsers
	                else
	                    curTransform = parseFloat(matrix[4]);
	            }
	            if (axis === 'y') {
	                //Latest Chrome and webkits Fix
	                if (window.WebKitCSSMatrix)
	                    curTransform = transformMatrix.m42;
	                //Crazy IE10 Matrix
	                else if (matrix.length === 16)
	                    curTransform = parseFloat(matrix[13]);
	                //Normal Browsers
	                else
	                    curTransform = parseFloat(matrix[5]);
	            }
	            if (s.rtl && curTransform) curTransform = -curTransform;
	            return curTransform || 0;
	        };
	        s.getWrapperTranslate = function (axis) {
	            if (typeof axis === 'undefined') {
	                axis = s.isHorizontal() ? 'x' : 'y';
	            }
	            return s.getTranslate(s.wrapper[0], axis);
	        };
	        
	        /*=========================
	          Observer
	          ===========================*/
	        s.observers = [];
	        function initObserver(target, options) {
	            options = options || {};
	            // create an observer instance
	            var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
	            var observer = new ObserverFunc(function (mutations) {
	                mutations.forEach(function (mutation) {
	                    s.onResize(true);
	                    s.emit('onObserverUpdate', s, mutation);
	                });
	            });
	        
	            observer.observe(target, {
	                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
	                childList: typeof options.childList === 'undefined' ? true : options.childList,
	                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
	            });
	        
	            s.observers.push(observer);
	        }
	        s.initObservers = function () {
	            if (s.params.observeParents) {
	                var containerParents = s.container.parents();
	                for (var i = 0; i < containerParents.length; i++) {
	                    initObserver(containerParents[i]);
	                }
	            }
	        
	            // Observe container
	            initObserver(s.container[0], {childList: false});
	        
	            // Observe wrapper
	            initObserver(s.wrapper[0], {attributes: false});
	        };
	        s.disconnectObservers = function () {
	            for (var i = 0; i < s.observers.length; i++) {
	                s.observers[i].disconnect();
	            }
	            s.observers = [];
	        };
	        /*=========================
	          Loop
	          ===========================*/
	        // Create looped slides
	        s.createLoop = function () {
	            // Remove duplicated slides
	            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
	        
	            var slides = s.wrapper.children('.' + s.params.slideClass);
	        
	            if(s.params.slidesPerView === 'auto' && !s.params.loopedSlides) s.params.loopedSlides = slides.length;
	        
	            s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);
	            s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;
	            if (s.loopedSlides > slides.length) {
	                s.loopedSlides = slides.length;
	            }
	        
	            var prependSlides = [], appendSlides = [], i;
	            slides.each(function (index, el) {
	                var slide = $(this);
	                if (index < s.loopedSlides) appendSlides.push(el);
	                if (index < slides.length && index >= slides.length - s.loopedSlides) prependSlides.push(el);
	                slide.attr('data-swiper-slide-index', index);
	            });
	            for (i = 0; i < appendSlides.length; i++) {
	                s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
	            }
	            for (i = prependSlides.length - 1; i >= 0; i--) {
	                s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
	            }
	        };
	        s.destroyLoop = function () {
	            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
	            s.slides.removeAttr('data-swiper-slide-index');
	        };
	        s.reLoop = function (updatePosition) {
	            var oldIndex = s.activeIndex - s.loopedSlides;
	            s.destroyLoop();
	            s.createLoop();
	            s.updateSlidesSize();
	            if (updatePosition) {
	                s.slideTo(oldIndex + s.loopedSlides, 0, false);
	            }
	        
	        };
	        s.fixLoop = function () {
	            var newIndex;
	            //Fix For Negative Oversliding
	            if (s.activeIndex < s.loopedSlides) {
	                newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;
	                newIndex = newIndex + s.loopedSlides;
	                s.slideTo(newIndex, 0, false, true);
	            }
	            //Fix For Positive Oversliding
	            else if ((s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2) || (s.activeIndex > s.slides.length - s.params.slidesPerView * 2)) {
	                newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;
	                newIndex = newIndex + s.loopedSlides;
	                s.slideTo(newIndex, 0, false, true);
	            }
	        };
	        /*=========================
	          Append/Prepend/Remove Slides
	          ===========================*/
	        s.appendSlide = function (slides) {
	            if (s.params.loop) {
	                s.destroyLoop();
	            }
	            if (typeof slides === 'object' && slides.length) {
	                for (var i = 0; i < slides.length; i++) {
	                    if (slides[i]) s.wrapper.append(slides[i]);
	                }
	            }
	            else {
	                s.wrapper.append(slides);
	            }
	            if (s.params.loop) {
	                s.createLoop();
	            }
	            if (!(s.params.observer && s.support.observer)) {
	                s.update(true);
	            }
	        };
	        s.prependSlide = function (slides) {
	            if (s.params.loop) {
	                s.destroyLoop();
	            }
	            var newActiveIndex = s.activeIndex + 1;
	            if (typeof slides === 'object' && slides.length) {
	                for (var i = 0; i < slides.length; i++) {
	                    if (slides[i]) s.wrapper.prepend(slides[i]);
	                }
	                newActiveIndex = s.activeIndex + slides.length;
	            }
	            else {
	                s.wrapper.prepend(slides);
	            }
	            if (s.params.loop) {
	                s.createLoop();
	            }
	            if (!(s.params.observer && s.support.observer)) {
	                s.update(true);
	            }
	            s.slideTo(newActiveIndex, 0, false);
	        };
	        s.removeSlide = function (slidesIndexes) {
	            if (s.params.loop) {
	                s.destroyLoop();
	                s.slides = s.wrapper.children('.' + s.params.slideClass);
	            }
	            var newActiveIndex = s.activeIndex,
	                indexToRemove;
	            if (typeof slidesIndexes === 'object' && slidesIndexes.length) {
	                for (var i = 0; i < slidesIndexes.length; i++) {
	                    indexToRemove = slidesIndexes[i];
	                    if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
	                    if (indexToRemove < newActiveIndex) newActiveIndex--;
	                }
	                newActiveIndex = Math.max(newActiveIndex, 0);
	            }
	            else {
	                indexToRemove = slidesIndexes;
	                if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
	                if (indexToRemove < newActiveIndex) newActiveIndex--;
	                newActiveIndex = Math.max(newActiveIndex, 0);
	            }
	        
	            if (s.params.loop) {
	                s.createLoop();
	            }
	        
	            if (!(s.params.observer && s.support.observer)) {
	                s.update(true);
	            }
	            if (s.params.loop) {
	                s.slideTo(newActiveIndex + s.loopedSlides, 0, false);
	            }
	            else {
	                s.slideTo(newActiveIndex, 0, false);
	            }
	        
	        };
	        s.removeAllSlides = function () {
	            var slidesIndexes = [];
	            for (var i = 0; i < s.slides.length; i++) {
	                slidesIndexes.push(i);
	            }
	            s.removeSlide(slidesIndexes);
	        };
	        

	        /*=========================
	          Effects
	          ===========================*/
	        s.effects = {
	            fade: {
	                setTranslate: function () {
	                    for (var i = 0; i < s.slides.length; i++) {
	                        var slide = s.slides.eq(i);
	                        var offset = slide[0].swiperSlideOffset;
	                        var tx = -offset;
	                        if (!s.params.virtualTranslate) tx = tx - s.translate;
	                        var ty = 0;
	                        if (!s.isHorizontal()) {
	                            ty = tx;
	                            tx = 0;
	                        }
	                        var slideOpacity = s.params.fade.crossFade ?
	                                Math.max(1 - Math.abs(slide[0].progress), 0) :
	                                1 + Math.min(Math.max(slide[0].progress, -1), 0);
	                        slide
	                            .css({
	                                opacity: slideOpacity
	                            })
	                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
	        
	                    }
	        
	                },
	                setTransition: function (duration) {
	                    s.slides.transition(duration);
	                    if (s.params.virtualTranslate && duration !== 0) {
	                        var eventTriggered = false;
	                        s.slides.transitionEnd(function () {
	                            if (eventTriggered) return;
	                            if (!s) return;
	                            eventTriggered = true;
	                            s.animating = false;
	                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
	                            for (var i = 0; i < triggerEvents.length; i++) {
	                                s.wrapper.trigger(triggerEvents[i]);
	                            }
	                        });
	                    }
	                }
	            },
	            flip: {
	                setTranslate: function () {
	                    for (var i = 0; i < s.slides.length; i++) {
	                        var slide = s.slides.eq(i);
	                        var progress = slide[0].progress;
	                        if (s.params.flip.limitRotation) {
	                            progress = Math.max(Math.min(slide[0].progress, 1), -1);
	                        }
	                        var offset = slide[0].swiperSlideOffset;
	                        var rotate = -180 * progress,
	                            rotateY = rotate,
	                            rotateX = 0,
	                            tx = -offset,
	                            ty = 0;
	                        if (!s.isHorizontal()) {
	                            ty = tx;
	                            tx = 0;
	                            rotateX = -rotateY;
	                            rotateY = 0;
	                        }
	                        else if (s.rtl) {
	                            rotateY = -rotateY;
	                        }
	        
	                        slide[0].style.zIndex = -Math.abs(Math.round(progress)) + s.slides.length;
	        
	                        if (s.params.flip.slideShadows) {
	                            //Set shadows
	                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
	                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
	                            if (shadowBefore.length === 0) {
	                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
	                                slide.append(shadowBefore);
	                            }
	                            if (shadowAfter.length === 0) {
	                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
	                                slide.append(shadowAfter);
	                            }
	                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
	                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
	                        }
	        
	                        slide
	                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
	                    }
	                },
	                setTransition: function (duration) {
	                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
	                    if (s.params.virtualTranslate && duration !== 0) {
	                        var eventTriggered = false;
	                        s.slides.eq(s.activeIndex).transitionEnd(function () {
	                            if (eventTriggered) return;
	                            if (!s) return;
	                            if (!$(this).hasClass(s.params.slideActiveClass)) return;
	                            eventTriggered = true;
	                            s.animating = false;
	                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
	                            for (var i = 0; i < triggerEvents.length; i++) {
	                                s.wrapper.trigger(triggerEvents[i]);
	                            }
	                        });
	                    }
	                }
	            },
	            cube: {
	                setTranslate: function () {
	                    var wrapperRotate = 0, cubeShadow;
	                    if (s.params.cube.shadow) {
	                        if (s.isHorizontal()) {
	                            cubeShadow = s.wrapper.find('.swiper-cube-shadow');
	                            if (cubeShadow.length === 0) {
	                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
	                                s.wrapper.append(cubeShadow);
	                            }
	                            cubeShadow.css({height: s.width + 'px'});
	                        }
	                        else {
	                            cubeShadow = s.container.find('.swiper-cube-shadow');
	                            if (cubeShadow.length === 0) {
	                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
	                                s.container.append(cubeShadow);
	                            }
	                        }
	                    }
	                    for (var i = 0; i < s.slides.length; i++) {
	                        var slide = s.slides.eq(i);
	                        var slideAngle = i * 90;
	                        var round = Math.floor(slideAngle / 360);
	                        if (s.rtl) {
	                            slideAngle = -slideAngle;
	                            round = Math.floor(-slideAngle / 360);
	                        }
	                        var progress = Math.max(Math.min(slide[0].progress, 1), -1);
	                        var tx = 0, ty = 0, tz = 0;
	                        if (i % 4 === 0) {
	                            tx = - round * 4 * s.size;
	                            tz = 0;
	                        }
	                        else if ((i - 1) % 4 === 0) {
	                            tx = 0;
	                            tz = - round * 4 * s.size;
	                        }
	                        else if ((i - 2) % 4 === 0) {
	                            tx = s.size + round * 4 * s.size;
	                            tz = s.size;
	                        }
	                        else if ((i - 3) % 4 === 0) {
	                            tx = - s.size;
	                            tz = 3 * s.size + s.size * 4 * round;
	                        }
	                        if (s.rtl) {
	                            tx = -tx;
	                        }
	        
	                        if (!s.isHorizontal()) {
	                            ty = tx;
	                            tx = 0;
	                        }
	        
	                        var transform = 'rotateX(' + (s.isHorizontal() ? 0 : -slideAngle) + 'deg) rotateY(' + (s.isHorizontal() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
	                        if (progress <= 1 && progress > -1) {
	                            wrapperRotate = i * 90 + progress * 90;
	                            if (s.rtl) wrapperRotate = -i * 90 - progress * 90;
	                        }
	                        slide.transform(transform);
	                        if (s.params.cube.slideShadows) {
	                            //Set shadows
	                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
	                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
	                            if (shadowBefore.length === 0) {
	                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
	                                slide.append(shadowBefore);
	                            }
	                            if (shadowAfter.length === 0) {
	                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
	                                slide.append(shadowAfter);
	                            }
	                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
	                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
	                        }
	                    }
	                    s.wrapper.css({
	                        '-webkit-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
	                        '-moz-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
	                        '-ms-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
	                        'transform-origin': '50% 50% -' + (s.size / 2) + 'px'
	                    });
	        
	                    if (s.params.cube.shadow) {
	                        if (s.isHorizontal()) {
	                            cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + (-s.width / 2) + 'px) rotateX(90deg) rotateZ(0deg) scale(' + (s.params.cube.shadowScale) + ')');
	                        }
	                        else {
	                            var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
	                            var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
	                            var scale1 = s.params.cube.shadowScale,
	                                scale2 = s.params.cube.shadowScale / multiplier,
	                                offset = s.params.cube.shadowOffset;
	                            cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + (-s.height / 2 / scale2) + 'px) rotateX(-90deg)');
	                        }
	                    }
	                    var zFactor = (s.isSafari || s.isUiWebView) ? (-s.size / 2) : 0;
	                    s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (s.isHorizontal() ? 0 : wrapperRotate) + 'deg) rotateY(' + (s.isHorizontal() ? -wrapperRotate : 0) + 'deg)');
	                },
	                setTransition: function (duration) {
	                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
	                    if (s.params.cube.shadow && !s.isHorizontal()) {
	                        s.container.find('.swiper-cube-shadow').transition(duration);
	                    }
	                }
	            },
	            coverflow: {
	                setTranslate: function () {
	                    var transform = s.translate;
	                    var center = s.isHorizontal() ? -transform + s.width / 2 : -transform + s.height / 2;
	                    var rotate = s.isHorizontal() ? s.params.coverflow.rotate: -s.params.coverflow.rotate;
	                    var translate = s.params.coverflow.depth;
	                    //Each slide offset from center
	                    for (var i = 0, length = s.slides.length; i < length; i++) {
	                        var slide = s.slides.eq(i);
	                        var slideSize = s.slidesSizesGrid[i];
	                        var slideOffset = slide[0].swiperSlideOffset;
	                        var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;
	        
	                        var rotateY = s.isHorizontal() ? rotate * offsetMultiplier : 0;
	                        var rotateX = s.isHorizontal() ? 0 : rotate * offsetMultiplier;
	                        // var rotateZ = 0
	                        var translateZ = -translate * Math.abs(offsetMultiplier);
	        
	                        var translateY = s.isHorizontal() ? 0 : s.params.coverflow.stretch * (offsetMultiplier);
	                        var translateX = s.isHorizontal() ? s.params.coverflow.stretch * (offsetMultiplier) : 0;
	        
	                        //Fix for ultra small values
	                        if (Math.abs(translateX) < 0.001) translateX = 0;
	                        if (Math.abs(translateY) < 0.001) translateY = 0;
	                        if (Math.abs(translateZ) < 0.001) translateZ = 0;
	                        if (Math.abs(rotateY) < 0.001) rotateY = 0;
	                        if (Math.abs(rotateX) < 0.001) rotateX = 0;
	        
	                        var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
	        
	                        slide.transform(slideTransform);
	                        slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
	                        if (s.params.coverflow.slideShadows) {
	                            //Set shadows
	                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
	                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
	                            if (shadowBefore.length === 0) {
	                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
	                                slide.append(shadowBefore);
	                            }
	                            if (shadowAfter.length === 0) {
	                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
	                                slide.append(shadowAfter);
	                            }
	                            if (shadowBefore.length) shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
	                            if (shadowAfter.length) shadowAfter[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
	                        }
	                    }
	        
	                    //Set correct perspective for IE10
	                    if (s.browser.ie) {
	                        var ws = s.wrapper[0].style;
	                        ws.perspectiveOrigin = center + 'px 50%';
	                    }
	                },
	                setTransition: function (duration) {
	                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
	                }
	            }
	        };

	        /*=========================
	          Images Lazy Loading
	          ===========================*/
	        s.lazy = {
	            initialImageLoaded: false,
	            loadImageInSlide: function (index, loadInDuplicate) {
	                if (typeof index === 'undefined') return;
	                if (typeof loadInDuplicate === 'undefined') loadInDuplicate = true;
	                if (s.slides.length === 0) return;
	        
	                var slide = s.slides.eq(index);
	                var img = slide.find('.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)');
	                if (slide.hasClass('swiper-lazy') && !slide.hasClass('swiper-lazy-loaded') && !slide.hasClass('swiper-lazy-loading')) {
	                    img = img.add(slide[0]);
	                }
	                if (img.length === 0) return;
	        
	                img.each(function () {
	                    var _img = $(this);
	                    _img.addClass('swiper-lazy-loading');
	                    var background = _img.attr('data-background');
	                    var src = _img.attr('data-src'),
	                        srcset = _img.attr('data-srcset');
	                    s.loadImage(_img[0], (src || background), srcset, false, function () {
	                        if (background) {
	                            _img.css('background-image', 'url("' + background + '")');
	                            _img.removeAttr('data-background');
	                        }
	                        else {
	                            if (srcset) {
	                                _img.attr('srcset', srcset);
	                                _img.removeAttr('data-srcset');
	                            }
	                            if (src) {
	                                _img.attr('src', src);
	                                _img.removeAttr('data-src');
	                            }
	        
	                        }
	        
	                        _img.addClass('swiper-lazy-loaded').removeClass('swiper-lazy-loading');
	                        slide.find('.swiper-lazy-preloader, .preloader').remove();
	                        if (s.params.loop && loadInDuplicate) {
	                            var slideOriginalIndex = slide.attr('data-swiper-slide-index');
	                            if (slide.hasClass(s.params.slideDuplicateClass)) {
	                                var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
	                                s.lazy.loadImageInSlide(originalSlide.index(), false);
	                            }
	                            else {
	                                var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
	                                s.lazy.loadImageInSlide(duplicatedSlide.index(), false);
	                            }
	                        }
	                        s.emit('onLazyImageReady', s, slide[0], _img[0]);
	                    });
	        
	                    s.emit('onLazyImageLoad', s, slide[0], _img[0]);
	                });
	        
	            },
	            load: function () {
	                var i;
	                if (s.params.watchSlidesVisibility) {
	                    s.wrapper.children('.' + s.params.slideVisibleClass).each(function () {
	                        s.lazy.loadImageInSlide($(this).index());
	                    });
	                }
	                else {
	                    if (s.params.slidesPerView > 1) {
	                        for (i = s.activeIndex; i < s.activeIndex + s.params.slidesPerView ; i++) {
	                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
	                        }
	                    }
	                    else {
	                        s.lazy.loadImageInSlide(s.activeIndex);
	                    }
	                }
	                if (s.params.lazyLoadingInPrevNext) {
	                    if (s.params.slidesPerView > 1 || (s.params.lazyLoadingInPrevNextAmount && s.params.lazyLoadingInPrevNextAmount > 1)) {
	                        var amount = s.params.lazyLoadingInPrevNextAmount;
	                        var spv = s.params.slidesPerView;
	                        var maxIndex = Math.min(s.activeIndex + spv + Math.max(amount, spv), s.slides.length);
	                        var minIndex = Math.max(s.activeIndex - Math.max(spv, amount), 0);
	                        // Next Slides
	                        for (i = s.activeIndex + s.params.slidesPerView; i < maxIndex; i++) {
	                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
	                        }
	                        // Prev Slides
	                        for (i = minIndex; i < s.activeIndex ; i++) {
	                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
	                        }
	                    }
	                    else {
	                        var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);
	                        if (nextSlide.length > 0) s.lazy.loadImageInSlide(nextSlide.index());
	        
	                        var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);
	                        if (prevSlide.length > 0) s.lazy.loadImageInSlide(prevSlide.index());
	                    }
	                }
	            },
	            onTransitionStart: function () {
	                if (s.params.lazyLoading) {
	                    if (s.params.lazyLoadingOnTransitionStart || (!s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded)) {
	                        s.lazy.load();
	                    }
	                }
	            },
	            onTransitionEnd: function () {
	                if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {
	                    s.lazy.load();
	                }
	            }
	        };
	        

	        /*=========================
	          Scrollbar
	          ===========================*/
	        s.scrollbar = {
	            isTouched: false,
	            setDragPosition: function (e) {
	                var sb = s.scrollbar;
	                var x = 0, y = 0;
	                var translate;
	                var pointerPosition = s.isHorizontal() ?
	                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX) :
	                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY) ;
	                var position = (pointerPosition) - sb.track.offset()[s.isHorizontal() ? 'left' : 'top'] - sb.dragSize / 2;
	                var positionMin = -s.minTranslate() * sb.moveDivider;
	                var positionMax = -s.maxTranslate() * sb.moveDivider;
	                if (position < positionMin) {
	                    position = positionMin;
	                }
	                else if (position > positionMax) {
	                    position = positionMax;
	                }
	                position = -position / sb.moveDivider;
	                s.updateProgress(position);
	                s.setWrapperTranslate(position, true);
	            },
	            dragStart: function (e) {
	                var sb = s.scrollbar;
	                sb.isTouched = true;
	                e.preventDefault();
	                e.stopPropagation();
	        
	                sb.setDragPosition(e);
	                clearTimeout(sb.dragTimeout);
	        
	                sb.track.transition(0);
	                if (s.params.scrollbarHide) {
	                    sb.track.css('opacity', 1);
	                }
	                s.wrapper.transition(100);
	                sb.drag.transition(100);
	                s.emit('onScrollbarDragStart', s);
	            },
	            dragMove: function (e) {
	                var sb = s.scrollbar;
	                if (!sb.isTouched) return;
	                if (e.preventDefault) e.preventDefault();
	                else e.returnValue = false;
	                sb.setDragPosition(e);
	                s.wrapper.transition(0);
	                sb.track.transition(0);
	                sb.drag.transition(0);
	                s.emit('onScrollbarDragMove', s);
	            },
	            dragEnd: function (e) {
	                var sb = s.scrollbar;
	                if (!sb.isTouched) return;
	                sb.isTouched = false;
	                if (s.params.scrollbarHide) {
	                    clearTimeout(sb.dragTimeout);
	                    sb.dragTimeout = setTimeout(function () {
	                        sb.track.css('opacity', 0);
	                        sb.track.transition(400);
	                    }, 1000);
	        
	                }
	                s.emit('onScrollbarDragEnd', s);
	                if (s.params.scrollbarSnapOnRelease) {
	                    s.slideReset();
	                }
	            },
	            enableDraggable: function () {
	                var sb = s.scrollbar;
	                var target = s.support.touch ? sb.track : document;
	                $(sb.track).on(s.touchEvents.start, sb.dragStart);
	                $(target).on(s.touchEvents.move, sb.dragMove);
	                $(target).on(s.touchEvents.end, sb.dragEnd);
	            },
	            disableDraggable: function () {
	                var sb = s.scrollbar;
	                var target = s.support.touch ? sb.track : document;
	                $(sb.track).off(s.touchEvents.start, sb.dragStart);
	                $(target).off(s.touchEvents.move, sb.dragMove);
	                $(target).off(s.touchEvents.end, sb.dragEnd);
	            },
	            set: function () {
	                if (!s.params.scrollbar) return;
	                var sb = s.scrollbar;
	                sb.track = $(s.params.scrollbar);
	                if (s.params.uniqueNavElements && typeof s.params.scrollbar === 'string' && sb.track.length > 1 && s.container.find(s.params.scrollbar).length === 1) {
	                    sb.track = s.container.find(s.params.scrollbar);
	                }
	                sb.drag = sb.track.find('.swiper-scrollbar-drag');
	                if (sb.drag.length === 0) {
	                    sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
	                    sb.track.append(sb.drag);
	                }
	                sb.drag[0].style.width = '';
	                sb.drag[0].style.height = '';
	                sb.trackSize = s.isHorizontal() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;
	        
	                sb.divider = s.size / s.virtualSize;
	                sb.moveDivider = sb.divider * (sb.trackSize / s.size);
	                sb.dragSize = sb.trackSize * sb.divider;
	        
	                if (s.isHorizontal()) {
	                    sb.drag[0].style.width = sb.dragSize + 'px';
	                }
	                else {
	                    sb.drag[0].style.height = sb.dragSize + 'px';
	                }
	        
	                if (sb.divider >= 1) {
	                    sb.track[0].style.display = 'none';
	                }
	                else {
	                    sb.track[0].style.display = '';
	                }
	                if (s.params.scrollbarHide) {
	                    sb.track[0].style.opacity = 0;
	                }
	            },
	            setTranslate: function () {
	                if (!s.params.scrollbar) return;
	                var diff;
	                var sb = s.scrollbar;
	                var translate = s.translate || 0;
	                var newPos;
	        
	                var newSize = sb.dragSize;
	                newPos = (sb.trackSize - sb.dragSize) * s.progress;
	                if (s.rtl && s.isHorizontal()) {
	                    newPos = -newPos;
	                    if (newPos > 0) {
	                        newSize = sb.dragSize - newPos;
	                        newPos = 0;
	                    }
	                    else if (-newPos + sb.dragSize > sb.trackSize) {
	                        newSize = sb.trackSize + newPos;
	                    }
	                }
	                else {
	                    if (newPos < 0) {
	                        newSize = sb.dragSize + newPos;
	                        newPos = 0;
	                    }
	                    else if (newPos + sb.dragSize > sb.trackSize) {
	                        newSize = sb.trackSize - newPos;
	                    }
	                }
	                if (s.isHorizontal()) {
	                    if (s.support.transforms3d) {
	                        sb.drag.transform('translate3d(' + (newPos) + 'px, 0, 0)');
	                    }
	                    else {
	                        sb.drag.transform('translateX(' + (newPos) + 'px)');
	                    }
	                    sb.drag[0].style.width = newSize + 'px';
	                }
	                else {
	                    if (s.support.transforms3d) {
	                        sb.drag.transform('translate3d(0px, ' + (newPos) + 'px, 0)');
	                    }
	                    else {
	                        sb.drag.transform('translateY(' + (newPos) + 'px)');
	                    }
	                    sb.drag[0].style.height = newSize + 'px';
	                }
	                if (s.params.scrollbarHide) {
	                    clearTimeout(sb.timeout);
	                    sb.track[0].style.opacity = 1;
	                    sb.timeout = setTimeout(function () {
	                        sb.track[0].style.opacity = 0;
	                        sb.track.transition(400);
	                    }, 1000);
	                }
	            },
	            setTransition: function (duration) {
	                if (!s.params.scrollbar) return;
	                s.scrollbar.drag.transition(duration);
	            }
	        };

	        /*=========================
	          Controller
	          ===========================*/
	        s.controller = {
	            LinearSpline: function (x, y) {
	                this.x = x;
	                this.y = y;
	                this.lastIndex = x.length - 1;
	                // Given an x value (x2), return the expected y2 value:
	                // (x1,y1) is the known point before given value,
	                // (x3,y3) is the known point after given value.
	                var i1, i3;
	                var l = this.x.length;
	        
	                this.interpolate = function (x2) {
	                    if (!x2) return 0;
	        
	                    // Get the indexes of x1 and x3 (the array indexes before and after given x2):
	                    i3 = binarySearch(this.x, x2);
	                    i1 = i3 - 1;
	        
	                    // We have our indexes i1 & i3, so we can calculate already:
	                    // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
	                    return ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1];
	                };
	        
	                var binarySearch = (function() {
	                    var maxIndex, minIndex, guess;
	                    return function(array, val) {
	                        minIndex = -1;
	                        maxIndex = array.length;
	                        while (maxIndex - minIndex > 1)
	                            if (array[guess = maxIndex + minIndex >> 1] <= val) {
	                                minIndex = guess;
	                            } else {
	                                maxIndex = guess;
	                            }
	                        return maxIndex;
	                    };
	                })();
	            },
	            //xxx: for now i will just save one spline function to to
	            getInterpolateFunction: function(c){
	                if(!s.controller.spline) s.controller.spline = s.params.loop ?
	                    new s.controller.LinearSpline(s.slidesGrid, c.slidesGrid) :
	                    new s.controller.LinearSpline(s.snapGrid, c.snapGrid);
	            },
	            setTranslate: function (translate, byController) {
	               var controlled = s.params.control;
	               var multiplier, controlledTranslate;
	               function setControlledTranslate(c) {
	                    // this will create an Interpolate function based on the snapGrids
	                    // x is the Grid of the scrolled scroller and y will be the controlled scroller
	                    // it makes sense to create this only once and recall it for the interpolation
	                    // the function does a lot of value caching for performance
	                    translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;
	                    if (s.params.controlBy === 'slide') {
	                        s.controller.getInterpolateFunction(c);
	                        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
	                        // but it did not work out
	                        controlledTranslate = -s.controller.spline.interpolate(-translate);
	                    }
	        
	                    if(!controlledTranslate || s.params.controlBy === 'container'){
	                        multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());
	                        controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();
	                    }
	        
	                    if (s.params.controlInverse) {
	                        controlledTranslate = c.maxTranslate() - controlledTranslate;
	                    }
	                    c.updateProgress(controlledTranslate);
	                    c.setWrapperTranslate(controlledTranslate, false, s);
	                    c.updateActiveIndex();
	               }
	               if (s.isArray(controlled)) {
	                   for (var i = 0; i < controlled.length; i++) {
	                       if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
	                           setControlledTranslate(controlled[i]);
	                       }
	                   }
	               }
	               else if (controlled instanceof Swiper && byController !== controlled) {
	        
	                   setControlledTranslate(controlled);
	               }
	            },
	            setTransition: function (duration, byController) {
	                var controlled = s.params.control;
	                var i;
	                function setControlledTransition(c) {
	                    c.setWrapperTransition(duration, s);
	                    if (duration !== 0) {
	                        c.onTransitionStart();
	                        c.wrapper.transitionEnd(function(){
	                            if (!controlled) return;
	                            if (c.params.loop && s.params.controlBy === 'slide') {
	                                c.fixLoop();
	                            }
	                            c.onTransitionEnd();
	        
	                        });
	                    }
	                }
	                if (s.isArray(controlled)) {
	                    for (i = 0; i < controlled.length; i++) {
	                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
	                            setControlledTransition(controlled[i]);
	                        }
	                    }
	                }
	                else if (controlled instanceof Swiper && byController !== controlled) {
	                    setControlledTransition(controlled);
	                }
	            }
	        };

	        /*=========================
	          Hash Navigation
	          ===========================*/
	        s.hashnav = {
	            init: function () {
	                if (!s.params.hashnav) return;
	                s.hashnav.initialized = true;
	                var hash = document.location.hash.replace('#', '');
	                if (!hash) return;
	                var speed = 0;
	                for (var i = 0, length = s.slides.length; i < length; i++) {
	                    var slide = s.slides.eq(i);
	                    var slideHash = slide.attr('data-hash');
	                    if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
	                        var index = slide.index();
	                        s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
	                    }
	                }
	            },
	            setHash: function () {
	                if (!s.hashnav.initialized || !s.params.hashnav) return;
	                document.location.hash = s.slides.eq(s.activeIndex).attr('data-hash') || '';
	            }
	        };

	        /*=========================
	          Keyboard Control
	          ===========================*/
	        function handleKeyboard(e) {
	            if (e.originalEvent) e = e.originalEvent; //jquery fix
	            var kc = e.keyCode || e.charCode;
	            // Directions locks
	            if (!s.params.allowSwipeToNext && (s.isHorizontal() && kc === 39 || !s.isHorizontal() && kc === 40)) {
	                return false;
	            }
	            if (!s.params.allowSwipeToPrev && (s.isHorizontal() && kc === 37 || !s.isHorizontal() && kc === 38)) {
	                return false;
	            }
	            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
	                return;
	            }
	            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
	                return;
	            }
	            if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
	                var inView = false;
	                //Check that swiper should be inside of visible area of window
	                if (s.container.parents('.swiper-slide').length > 0 && s.container.parents('.swiper-slide-active').length === 0) {
	                    return;
	                }
	                var windowScroll = {
	                    left: window.pageXOffset,
	                    top: window.pageYOffset
	                };
	                var windowWidth = window.innerWidth;
	                var windowHeight = window.innerHeight;
	                var swiperOffset = s.container.offset();
	                if (s.rtl) swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;
	                var swiperCoord = [
	                    [swiperOffset.left, swiperOffset.top],
	                    [swiperOffset.left + s.width, swiperOffset.top],
	                    [swiperOffset.left, swiperOffset.top + s.height],
	                    [swiperOffset.left + s.width, swiperOffset.top + s.height]
	                ];
	                for (var i = 0; i < swiperCoord.length; i++) {
	                    var point = swiperCoord[i];
	                    if (
	                        point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth &&
	                        point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight
	                    ) {
	                        inView = true;
	                    }
	        
	                }
	                if (!inView) return;
	            }
	            if (s.isHorizontal()) {
	                if (kc === 37 || kc === 39) {
	                    if (e.preventDefault) e.preventDefault();
	                    else e.returnValue = false;
	                }
	                if ((kc === 39 && !s.rtl) || (kc === 37 && s.rtl)) s.slideNext();
	                if ((kc === 37 && !s.rtl) || (kc === 39 && s.rtl)) s.slidePrev();
	            }
	            else {
	                if (kc === 38 || kc === 40) {
	                    if (e.preventDefault) e.preventDefault();
	                    else e.returnValue = false;
	                }
	                if (kc === 40) s.slideNext();
	                if (kc === 38) s.slidePrev();
	            }
	        }
	        s.disableKeyboardControl = function () {
	            s.params.keyboardControl = false;
	            $(document).off('keydown', handleKeyboard);
	        };
	        s.enableKeyboardControl = function () {
	            s.params.keyboardControl = true;
	            $(document).on('keydown', handleKeyboard);
	        };
	        

	        /*=========================
	          Mousewheel Control
	          ===========================*/
	        s.mousewheel = {
	            event: false,
	            lastScrollTime: (new window.Date()).getTime()
	        };
	        if (s.params.mousewheelControl) {
	            try {
	                new window.WheelEvent('wheel');
	                s.mousewheel.event = 'wheel';
	            } catch (e) {
	                if (window.WheelEvent || (s.container[0] && 'wheel' in s.container[0])) {
	                    s.mousewheel.event = 'wheel';
	                }
	            }
	            if (!s.mousewheel.event && window.WheelEvent) {
	        
	            }
	            if (!s.mousewheel.event && document.onmousewheel !== undefined) {
	                s.mousewheel.event = 'mousewheel';
	            }
	            if (!s.mousewheel.event) {
	                s.mousewheel.event = 'DOMMouseScroll';
	            }
	        }
	        function handleMousewheel(e) {
	            if (e.originalEvent) e = e.originalEvent; //jquery fix
	            var we = s.mousewheel.event;
	            var delta = 0;
	            var rtlFactor = s.rtl ? -1 : 1;
	        
	            //WebKits
	            if (we === 'mousewheel') {
	                if (s.params.mousewheelForceToAxis) {
	                    if (s.isHorizontal()) {
	                        if (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)) delta = e.wheelDeltaX * rtlFactor;
	                        else return;
	                    }
	                    else {
	                        if (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)) delta = e.wheelDeltaY;
	                        else return;
	                    }
	                }
	                else {
	                    delta = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? - e.wheelDeltaX * rtlFactor : - e.wheelDeltaY;
	                }
	            }
	            //Old FireFox
	            else if (we === 'DOMMouseScroll') delta = -e.detail;
	            //New FireFox
	            else if (we === 'wheel') {
	                if (s.params.mousewheelForceToAxis) {
	                    if (s.isHorizontal()) {
	                        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) delta = -e.deltaX * rtlFactor;
	                        else return;
	                    }
	                    else {
	                        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) delta = -e.deltaY;
	                        else return;
	                    }
	                }
	                else {
	                    delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? - e.deltaX * rtlFactor : - e.deltaY;
	                }
	            }
	            if (delta === 0) return;
	        
	            if (s.params.mousewheelInvert) delta = -delta;
	        
	            if (!s.params.freeMode) {
	                if ((new window.Date()).getTime() - s.mousewheel.lastScrollTime > 60) {
	                    if (delta < 0) {
	                        if ((!s.isEnd || s.params.loop) && !s.animating) s.slideNext();
	                        else if (s.params.mousewheelReleaseOnEdges) return true;
	                    }
	                    else {
	                        if ((!s.isBeginning || s.params.loop) && !s.animating) s.slidePrev();
	                        else if (s.params.mousewheelReleaseOnEdges) return true;
	                    }
	                }
	                s.mousewheel.lastScrollTime = (new window.Date()).getTime();
	        
	            }
	            else {
	                //Freemode or scrollContainer:
	                var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;
	                var wasBeginning = s.isBeginning,
	                    wasEnd = s.isEnd;
	        
	                if (position >= s.minTranslate()) position = s.minTranslate();
	                if (position <= s.maxTranslate()) position = s.maxTranslate();
	        
	                s.setWrapperTransition(0);
	                s.setWrapperTranslate(position);
	                s.updateProgress();
	                s.updateActiveIndex();
	        
	                if (!wasBeginning && s.isBeginning || !wasEnd && s.isEnd) {
	                    s.updateClasses();
	                }
	        
	                if (s.params.freeModeSticky) {
	                    clearTimeout(s.mousewheel.timeout);
	                    s.mousewheel.timeout = setTimeout(function () {
	                        s.slideReset();
	                    }, 300);
	                }
	                else {
	                    if (s.params.lazyLoading && s.lazy) {
	                        s.lazy.load();
	                    }
	                }
	        
	                // Return page scroll on edge positions
	                if (position === 0 || position === s.maxTranslate()) return;
	            }
	            if (s.params.autoplay) s.stopAutoplay();
	        
	            if (e.preventDefault) e.preventDefault();
	            else e.returnValue = false;
	            return false;
	        }
	        s.disableMousewheelControl = function () {
	            if (!s.mousewheel.event) return false;
	            s.container.off(s.mousewheel.event, handleMousewheel);
	            return true;
	        };
	        
	        s.enableMousewheelControl = function () {
	            if (!s.mousewheel.event) return false;
	            s.container.on(s.mousewheel.event, handleMousewheel);
	            return true;
	        };
	        

	        /*=========================
	          Parallax
	          ===========================*/
	        function setParallaxTransform(el, progress) {
	            el = $(el);
	            var p, pX, pY;
	            var rtlFactor = s.rtl ? -1 : 1;
	        
	            p = el.attr('data-swiper-parallax') || '0';
	            pX = el.attr('data-swiper-parallax-x');
	            pY = el.attr('data-swiper-parallax-y');
	            if (pX || pY) {
	                pX = pX || '0';
	                pY = pY || '0';
	            }
	            else {
	                if (s.isHorizontal()) {
	                    pX = p;
	                    pY = '0';
	                }
	                else {
	                    pY = p;
	                    pX = '0';
	                }
	            }
	        
	            if ((pX).indexOf('%') >= 0) {
	                pX = parseInt(pX, 10) * progress * rtlFactor + '%';
	            }
	            else {
	                pX = pX * progress * rtlFactor + 'px' ;
	            }
	            if ((pY).indexOf('%') >= 0) {
	                pY = parseInt(pY, 10) * progress + '%';
	            }
	            else {
	                pY = pY * progress + 'px' ;
	            }
	        
	            el.transform('translate3d(' + pX + ', ' + pY + ',0px)');
	        }
	        s.parallax = {
	            setTranslate: function () {
	                s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
	                    setParallaxTransform(this, s.progress);
	        
	                });
	                s.slides.each(function () {
	                    var slide = $(this);
	                    slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
	                        var progress = Math.min(Math.max(slide[0].progress, -1), 1);
	                        setParallaxTransform(this, progress);
	                    });
	                });
	            },
	            setTransition: function (duration) {
	                if (typeof duration === 'undefined') duration = s.params.speed;
	                s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
	                    var el = $(this);
	                    var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
	                    if (duration === 0) parallaxDuration = 0;
	                    el.transition(parallaxDuration);
	                });
	            }
	        };
	        

	        /*=========================
	          Plugins API. Collect all and init all plugins
	          ===========================*/
	        s._plugins = [];
	        for (var plugin in s.plugins) {
	            var p = s.plugins[plugin](s, s.params[plugin]);
	            if (p) s._plugins.push(p);
	        }
	        // Method to call all plugins event/method
	        s.callPlugins = function (eventName) {
	            for (var i = 0; i < s._plugins.length; i++) {
	                if (eventName in s._plugins[i]) {
	                    s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	                }
	            }
	        };

	        /*=========================
	          Events/Callbacks/Plugins Emitter
	          ===========================*/
	        function normalizeEventName (eventName) {
	            if (eventName.indexOf('on') !== 0) {
	                if (eventName[0] !== eventName[0].toUpperCase()) {
	                    eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
	                }
	                else {
	                    eventName = 'on' + eventName;
	                }
	            }
	            return eventName;
	        }
	        s.emitterEventListeners = {
	        
	        };
	        s.emit = function (eventName) {
	            // Trigger callbacks
	            if (s.params[eventName]) {
	                s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	            }
	            var i;
	            // Trigger events
	            if (s.emitterEventListeners[eventName]) {
	                for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
	                    s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	                }
	            }
	            // Trigger plugins
	            if (s.callPlugins) s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	        };
	        s.on = function (eventName, handler) {
	            eventName = normalizeEventName(eventName);
	            if (!s.emitterEventListeners[eventName]) s.emitterEventListeners[eventName] = [];
	            s.emitterEventListeners[eventName].push(handler);
	            return s;
	        };
	        s.off = function (eventName, handler) {
	            var i;
	            eventName = normalizeEventName(eventName);
	            if (typeof handler === 'undefined') {
	                // Remove all handlers for such event
	                s.emitterEventListeners[eventName] = [];
	                return s;
	            }
	            if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0) return;
	            for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
	                if(s.emitterEventListeners[eventName][i] === handler) s.emitterEventListeners[eventName].splice(i, 1);
	            }
	            return s;
	        };
	        s.once = function (eventName, handler) {
	            eventName = normalizeEventName(eventName);
	            var _handler = function () {
	                handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
	                s.off(eventName, _handler);
	            };
	            s.on(eventName, _handler);
	            return s;
	        };

	        // Accessibility tools
	        s.a11y = {
	            makeFocusable: function ($el) {
	                $el.attr('tabIndex', '0');
	                return $el;
	            },
	            addRole: function ($el, role) {
	                $el.attr('role', role);
	                return $el;
	            },
	        
	            addLabel: function ($el, label) {
	                $el.attr('aria-label', label);
	                return $el;
	            },
	        
	            disable: function ($el) {
	                $el.attr('aria-disabled', true);
	                return $el;
	            },
	        
	            enable: function ($el) {
	                $el.attr('aria-disabled', false);
	                return $el;
	            },
	        
	            onEnterKey: function (event) {
	                if (event.keyCode !== 13) return;
	                if ($(event.target).is(s.params.nextButton)) {
	                    s.onClickNext(event);
	                    if (s.isEnd) {
	                        s.a11y.notify(s.params.lastSlideMessage);
	                    }
	                    else {
	                        s.a11y.notify(s.params.nextSlideMessage);
	                    }
	                }
	                else if ($(event.target).is(s.params.prevButton)) {
	                    s.onClickPrev(event);
	                    if (s.isBeginning) {
	                        s.a11y.notify(s.params.firstSlideMessage);
	                    }
	                    else {
	                        s.a11y.notify(s.params.prevSlideMessage);
	                    }
	                }
	                if ($(event.target).is('.' + s.params.bulletClass)) {
	                    $(event.target)[0].click();
	                }
	            },
	        
	            liveRegion: $('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
	        
	            notify: function (message) {
	                var notification = s.a11y.liveRegion;
	                if (notification.length === 0) return;
	                notification.html('');
	                notification.html(message);
	            },
	            init: function () {
	                // Setup accessibility
	                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
	                    s.a11y.makeFocusable(s.nextButton);
	                    s.a11y.addRole(s.nextButton, 'button');
	                    s.a11y.addLabel(s.nextButton, s.params.nextSlideMessage);
	                }
	                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
	                    s.a11y.makeFocusable(s.prevButton);
	                    s.a11y.addRole(s.prevButton, 'button');
	                    s.a11y.addLabel(s.prevButton, s.params.prevSlideMessage);
	                }
	        
	                $(s.container).append(s.a11y.liveRegion);
	            },
	            initPagination: function () {
	                if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {
	                    s.bullets.each(function () {
	                        var bullet = $(this);
	                        s.a11y.makeFocusable(bullet);
	                        s.a11y.addRole(bullet, 'button');
	                        s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
	                    });
	                }
	            },
	            destroy: function () {
	                if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0) s.a11y.liveRegion.remove();
	            }
	        };
	        

	        /*=========================
	          Init/Destroy
	          ===========================*/
	        s.init = function () {
	            if (s.params.loop) s.createLoop();
	            s.updateContainerSize();
	            s.updateSlidesSize();
	            s.updatePagination();
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.set();
	                if (s.params.scrollbarDraggable) {
	                    s.scrollbar.enableDraggable();
	                }
	            }
	            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
	                if (!s.params.loop) s.updateProgress();
	                s.effects[s.params.effect].setTranslate();
	            }
	            if (s.params.loop) {
	                s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);
	            }
	            else {
	                s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);
	                if (s.params.initialSlide === 0) {
	                    if (s.parallax && s.params.parallax) s.parallax.setTranslate();
	                    if (s.lazy && s.params.lazyLoading) {
	                        s.lazy.load();
	                        s.lazy.initialImageLoaded = true;
	                    }
	                }
	            }
	            s.attachEvents();
	            if (s.params.observer && s.support.observer) {
	                s.initObservers();
	            }
	            if (s.params.preloadImages && !s.params.lazyLoading) {
	                s.preloadImages();
	            }
	            if (s.params.autoplay) {
	                s.startAutoplay();
	            }
	            if (s.params.keyboardControl) {
	                if (s.enableKeyboardControl) s.enableKeyboardControl();
	            }
	            if (s.params.mousewheelControl) {
	                if (s.enableMousewheelControl) s.enableMousewheelControl();
	            }
	            if (s.params.hashnav) {
	                if (s.hashnav) s.hashnav.init();
	            }
	            if (s.params.a11y && s.a11y) s.a11y.init();
	            s.emit('onInit', s);
	        };
	        
	        // Cleanup dynamic styles
	        s.cleanupStyles = function () {
	            // Container
	            s.container.removeClass(s.classNames.join(' ')).removeAttr('style');
	        
	            // Wrapper
	            s.wrapper.removeAttr('style');
	        
	            // Slides
	            if (s.slides && s.slides.length) {
	                s.slides
	                    .removeClass([
	                      s.params.slideVisibleClass,
	                      s.params.slideActiveClass,
	                      s.params.slideNextClass,
	                      s.params.slidePrevClass
	                    ].join(' '))
	                    .removeAttr('style')
	                    .removeAttr('data-swiper-column')
	                    .removeAttr('data-swiper-row');
	            }
	        
	            // Pagination/Bullets
	            if (s.paginationContainer && s.paginationContainer.length) {
	                s.paginationContainer.removeClass(s.params.paginationHiddenClass);
	            }
	            if (s.bullets && s.bullets.length) {
	                s.bullets.removeClass(s.params.bulletActiveClass);
	            }
	        
	            // Buttons
	            if (s.params.prevButton) $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
	            if (s.params.nextButton) $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);
	        
	            // Scrollbar
	            if (s.params.scrollbar && s.scrollbar) {
	                if (s.scrollbar.track && s.scrollbar.track.length) s.scrollbar.track.removeAttr('style');
	                if (s.scrollbar.drag && s.scrollbar.drag.length) s.scrollbar.drag.removeAttr('style');
	            }
	        };
	        
	        // Destroy
	        s.destroy = function (deleteInstance, cleanupStyles) {
	            // Detach evebts
	            s.detachEvents();
	            // Stop autoplay
	            s.stopAutoplay();
	            // Disable draggable
	            if (s.params.scrollbar && s.scrollbar) {
	                if (s.params.scrollbarDraggable) {
	                    s.scrollbar.disableDraggable();
	                }
	            }
	            // Destroy loop
	            if (s.params.loop) {
	                s.destroyLoop();
	            }
	            // Cleanup styles
	            if (cleanupStyles) {
	                s.cleanupStyles();
	            }
	            // Disconnect observer
	            s.disconnectObservers();
	            // Disable keyboard/mousewheel
	            if (s.params.keyboardControl) {
	                if (s.disableKeyboardControl) s.disableKeyboardControl();
	            }
	            if (s.params.mousewheelControl) {
	                if (s.disableMousewheelControl) s.disableMousewheelControl();
	            }
	            // Disable a11y
	            if (s.params.a11y && s.a11y) s.a11y.destroy();
	            // Destroy callback
	            s.emit('onDestroy');
	            // Delete instance
	            if (deleteInstance !== false) s = null;
	        };
	        
	        s.init();
	        

	    
	        // Return swiper instance
	        return s;
	    };
	    

	    /*==================================================
	        Prototype
	    ====================================================*/
	    Swiper.prototype = {
	        isSafari: (function () {
	            var ua = navigator.userAgent.toLowerCase();
	            return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
	        })(),
	        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
	        isArray: function (arr) {
	            return Object.prototype.toString.apply(arr) === '[object Array]';
	        },
	        /*==================================================
	        Browser
	        ====================================================*/
	        browser: {
	            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
	            ieTouch: (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) || (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1)
	        },
	        /*==================================================
	        Devices
	        ====================================================*/
	        device: (function () {
	            var ua = navigator.userAgent;
	            var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
	            var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
	            var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
	            var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
	            return {
	                ios: ipad || iphone || ipod,
	                android: android
	            };
	        })(),
	        /*==================================================
	        Feature Detection
	        ====================================================*/
	        support: {
	            touch : (window.Modernizr && Modernizr.touch === true) || (function () {
	                return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
	            })(),
	    
	            transforms3d : (window.Modernizr && Modernizr.csstransforms3d === true) || (function () {
	                var div = document.createElement('div').style;
	                return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
	            })(),
	    
	            flexbox: (function () {
	                var div = document.createElement('div').style;
	                var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
	                for (var i = 0; i < styles.length; i++) {
	                    if (styles[i] in div) return true;
	                }
	            })(),
	    
	            observer: (function () {
	                return ('MutationObserver' in window || 'WebkitMutationObserver' in window);
	            })()
	        },
	        /*==================================================
	        Plugins
	        ====================================================*/
	        plugins: {}
	    };
	    

	    /*===========================
	     Get jQuery
	     ===========================*/
	    
	    addLibraryPlugin($);
	    
	    var domLib = $;

	    /*===========================
	    Add .swiper plugin from Dom libraries
	    ===========================*/
	    function addLibraryPlugin(lib) {
	        lib.fn.swiper = function (params) {
	            var firstInstance;
	            lib(this).each(function () {
	                var s = new Swiper(this, params);
	                if (!firstInstance) firstInstance = s;
	            });
	            return firstInstance;
	        };
	    }
	    
	    if (domLib) {
	        if (!('transitionEnd' in domLib.fn)) {
	            domLib.fn.transitionEnd = function (callback) {
	                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
	                    i, j, dom = this;
	                function fireCallBack(e) {
	                    /*jshint validthis:true */
	                    if (e.target !== this) return;
	                    callback.call(this, e);
	                    for (i = 0; i < events.length; i++) {
	                        dom.off(events[i], fireCallBack);
	                    }
	                }
	                if (callback) {
	                    for (i = 0; i < events.length; i++) {
	                        dom.on(events[i], fireCallBack);
	                    }
	                }
	                return this;
	            };
	        }
	        if (!('transform' in domLib.fn)) {
	            domLib.fn.transform = function (transform) {
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
	                }
	                return this;
	            };
	        }
	        if (!('transition' in domLib.fn)) {
	            domLib.fn.transition = function (duration) {
	                if (typeof duration !== 'string') {
	                    duration = duration + 'ms';
	                }
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
	                }
	                return this;
	            };
	        }
	    }

		return Swiper;
	}));



/***/ }
/******/ ]);