!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"function"==typeof define?define(["jquery"],function(){return e(window.jQuery,window,document,void 0)}):e(jQuery)}(function(e,t,i,s){e.swipebox=function(o,n){var a,r,l={useCSS:!0,useSVG:!0,initialIndexOnArray:0,removeBarsOnMobile:!0,hideCloseButtonOnMobile:!1,hideBarsDelay:3e3,videoMaxWidth:1140,vimeoColor:"cccccc",beforeOpen:null,afterOpen:null,afterClose:null,afterMedia:null,nextSlide:null,prevSlide:null,loopAtEnd:!1,autoplayVideos:!1,queryStringData:{},toggleClassOnLoad:""},d=this,p=[],c=o.selector,b=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),u=null!==b||i.createTouch!==s||"ontouchstart"in t||"onmsgesturechange"in t||navigator.msMaxTouchPoints,h=!!i.createElementNS&&!!i.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,f=t.innerWidth?t.innerWidth:e(t).width(),g=t.innerHeight?t.innerHeight:e(t).height(),w=0,m='<div id="swipebox-overlay">\t\t\t\t\t<div id="swipebox-container">\t\t\t\t\t\t<div id="swipebox-slider"></div>\t\t\t\t\t\t<div id="swipebox-top-bar">\t\t\t\t\t\t\t<div id="swipebox-title"></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div id="swipebox-bottom-bar">\t\t\t\t\t\t\t<div id="swipebox-arrows">\t\t\t\t\t\t\t\t<a id="swipebox-prev"></a>\t\t\t\t\t\t\t\t<a id="swipebox-next"></a>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<a id="swipebox-close"></a>\t\t\t\t\t</div>\t\t\t</div>';d.settings={},e.swipebox.close=function(){a.closeSlide()},e.swipebox.extend=function(){return a},d.init=function(){d.settings=e.extend({},l,n),e.isArray(o)?(p=o,a.target=e(t),a.init(d.settings.initialIndexOnArray)):e(i).on("click",c,function(t){if("slide current"===t.target.parentNode.className)return!1;e.isArray(o)||(a.destroy(),r=e(c),a.actions()),p=[];var i,s,n;n||(s="data-rel",n=e(this).attr(s)),n||(s="rel",n=e(this).attr(s)),r=n&&""!==n&&"nofollow"!==n?e(c).filter("["+s+'="'+n+'"]'):e(c),r.each(function(){var t=null,i=null;e(this).attr("title")&&(t=e(this).attr("title")),e(this).attr("href")&&(i=e(this).attr("href")),p.push({href:i,title:t})}),i=r.index(e(this)),t.preventDefault(),t.stopPropagation(),a.target=e(t.target),a.init(i)})},a={init:function(t){d.settings.beforeOpen&&d.settings.beforeOpen(),this.target.trigger("swipebox-start"),e.swipebox.isOpen=!0,this.build(),this.openSlide(t),this.openMedia(t),this.preloadMedia(t+1),this.preloadMedia(t-1),d.settings.afterOpen&&d.settings.afterOpen(t)},build:function(){var t,i=this;e("body").append(m),h&&d.settings.useSVG===!0&&(t=e("#swipebox-close").css("background-image"),t=t.replace("png","svg"),e("#swipebox-prev, #swipebox-next, #swipebox-close").css({"background-image":t})),b&&d.settings.removeBarsOnMobile&&e("#swipebox-bottom-bar, #swipebox-top-bar").remove(),e.each(p,function(){e("#swipebox-slider").append('<div class="slide"></div>')}),i.setDim(),i.actions(),u&&i.gesture(),i.keyboard(),i.animBars(),i.resize()},setDim:function(){var i,s,o={};"onorientationchange"in t?t.addEventListener("orientationchange",function(){0===t.orientation?(i=f,s=g):90!==t.orientation&&-90!==t.orientation||(i=g,s=f)},!1):(i=t.innerWidth?t.innerWidth:e(t).width(),s=t.innerHeight?t.innerHeight:e(t).height()),o={width:i,height:s},e("#swipebox-overlay").css(o)},resize:function(){var i=this;e(t).resize(function(){i.setDim()}).resize()},supportTransition:function(){var e,t="transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" ");for(e=0;e<t.length;e++)if(i.createElement("div").style[t[e]]!==s)return t[e];return!1},doCssTrans:function(){return!(!d.settings.useCSS||!this.supportTransition())||void 0},gesture:function(){var t,i,s,o,n,a,r=this,l=!1,d=!1,c=10,b=50,u={},h={},g=e("#swipebox-top-bar, #swipebox-bottom-bar"),m=e("#swipebox-slider");g.addClass("visible-bars"),r.setTimeout(),e("body").bind("touchstart",function(r){return e(this).addClass("touching"),t=e("#swipebox-slider .slide").index(e("#swipebox-slider .slide.current")),h=r.originalEvent.targetTouches[0],u.pageX=r.originalEvent.targetTouches[0].pageX,u.pageY=r.originalEvent.targetTouches[0].pageY,e("#swipebox-slider").css({"-webkit-transform":"translate3d("+w+"%, 0, 0)",transform:"translate3d("+w+"%, 0, 0)"}),e(".touching").bind("touchmove",function(r){if(r.preventDefault(),r.stopPropagation(),h=r.originalEvent.targetTouches[0],!d&&(n=s,s=h.pageY-u.pageY,Math.abs(s)>=b||l)){var g=.75-Math.abs(s)/m.height();m.css({top:s+"px"}),m.css({opacity:g}),l=!0}o=i,i=h.pageX-u.pageX,a=100*i/f,!d&&!l&&Math.abs(i)>=c&&(e("#swipebox-slider").css({"-webkit-transition":"",transition:""}),d=!0),d&&(i>0?0===t?e("#swipebox-overlay").addClass("leftSpringTouch"):(e("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),e("#swipebox-slider").css({"-webkit-transform":"translate3d("+(w+a)+"%, 0, 0)",transform:"translate3d("+(w+a)+"%, 0, 0)"})):0>i&&(p.length===t+1?e("#swipebox-overlay").addClass("rightSpringTouch"):(e("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),e("#swipebox-slider").css({"-webkit-transform":"translate3d("+(w+a)+"%, 0, 0)",transform:"translate3d("+(w+a)+"%, 0, 0)"}))))}),!1}).bind("touchend",function(t){if(t.preventDefault(),t.stopPropagation(),e("#swipebox-slider").css({"-webkit-transition":"-webkit-transform 0.4s ease",transition:"transform 0.4s ease"}),s=h.pageY-u.pageY,i=h.pageX-u.pageX,a=100*i/f,l)if(l=!1,Math.abs(s)>=2*b&&Math.abs(s)>Math.abs(n)){var p=s>0?m.height():-m.height();m.animate({top:p+"px",opacity:0},300,function(){r.closeSlide()})}else m.animate({top:0,opacity:1},300);else d?(d=!1,i>=c&&i>=o?r.getPrev():-c>=i&&o>=i&&r.getNext()):g.hasClass("visible-bars")?(r.clearTimeout(),r.hideBars()):(r.showBars(),r.setTimeout());e("#swipebox-slider").css({"-webkit-transform":"translate3d("+w+"%, 0, 0)",transform:"translate3d("+w+"%, 0, 0)"}),e("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),e(".touching").off("touchmove").removeClass("touching")})},setTimeout:function(){if(d.settings.hideBarsDelay>0){var e=this;e.clearTimeout(),e.timeout=t.setTimeout(function(){e.hideBars()},d.settings.hideBarsDelay)}},clearTimeout:function(){t.clearTimeout(this.timeout),this.timeout=null},showBars:function(){var t=e("#swipebox-top-bar, #swipebox-bottom-bar");this.doCssTrans()?t.addClass("visible-bars"):(e("#swipebox-top-bar").animate({top:0},500),e("#swipebox-bottom-bar").animate({bottom:0},500),setTimeout(function(){t.addClass("visible-bars")},1e3))},hideBars:function(){var t=e("#swipebox-top-bar, #swipebox-bottom-bar");this.doCssTrans()?t.removeClass("visible-bars"):(e("#swipebox-top-bar").animate({top:"-50px"},500),e("#swipebox-bottom-bar").animate({bottom:"-50px"},500),setTimeout(function(){t.removeClass("visible-bars")},1e3))},animBars:function(){var t=this,i=e("#swipebox-top-bar, #swipebox-bottom-bar");i.addClass("visible-bars"),t.setTimeout(),e("#swipebox-slider").click(function(){i.hasClass("visible-bars")||(t.showBars(),t.setTimeout())}),e("#swipebox-bottom-bar").hover(function(){t.showBars(),i.addClass("visible-bars"),t.clearTimeout()},function(){d.settings.hideBarsDelay>0&&(i.removeClass("visible-bars"),t.setTimeout())})},keyboard:function(){var i=this;e(t).bind("keyup",function(e){e.preventDefault(),e.stopPropagation(),37===e.keyCode?i.getPrev():39===e.keyCode?i.getNext():27===e.keyCode&&i.closeSlide()})},actions:function(){var t=this,i="touchend click";p.length<2?(e("#swipebox-bottom-bar").hide(),s===p[1]&&e("#swipebox-top-bar").hide()):(e("#swipebox-prev").bind(i,function(e){e.preventDefault(),e.stopPropagation(),t.getPrev(),t.setTimeout()}),e("#swipebox-next").bind(i,function(e){e.preventDefault(),e.stopPropagation(),t.getNext(),t.setTimeout()})),e("#swipebox-close").bind(i,function(){t.closeSlide()})},setSlide:function(t,i){i=i||!1;var s=e("#swipebox-slider");w=100*-t,this.doCssTrans()?s.css({"-webkit-transform":"translate3d("+100*-t+"%, 0, 0)",transform:"translate3d("+100*-t+"%, 0, 0)"}):s.animate({left:100*-t+"%"}),e("#swipebox-slider .slide").removeClass("current"),e("#swipebox-slider .slide").eq(t).addClass("current"),this.setTitle(t),i&&s.fadeIn(),e("#swipebox-prev, #swipebox-next").removeClass("disabled"),0===t?e("#swipebox-prev").addClass("disabled"):t===p.length-1&&d.settings.loopAtEnd!==!0&&e("#swipebox-next").addClass("disabled")},openSlide:function(i){e("html").addClass("swipebox-html"),u?(e("html").addClass("swipebox-touch"),d.settings.hideCloseButtonOnMobile&&e("html").addClass("swipebox-no-close-button")):e("html").addClass("swipebox-no-touch"),e(t).trigger("resize"),this.setSlide(i,!0)},preloadMedia:function(e){var t=this,i=null;p[e]!==s&&(i=p[e].href),t.isVideo(i)?t.openMedia(e):setTimeout(function(){t.openMedia(e)},1e3)},openMedia:function(t){var i,o,n=this;return p[t]!==s&&(i=p[t].href),!(0>t||t>=p.length)&&(o=e("#swipebox-slider .slide").eq(t),void(n.isVideo(i)?(o.html(n.getVideo(i)),d.settings.afterMedia&&d.settings.afterMedia(t)):(o.addClass("slide-loading"),n.loadMedia(i,function(){o.removeClass("slide-loading"),o.html(this),d.settings.afterMedia&&d.settings.afterMedia(t)}))))},setTitle:function(t){var i=null;e("#swipebox-title").empty(),p[t]!==s&&(i=p[t].title),i?(e("#swipebox-top-bar").show(),e("#swipebox-title").append(i)):e("#swipebox-top-bar").hide()},isVideo:function(e){if(e){if(e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||e.match(/vimeo\.com\/([0-9]*)/)||e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/))return!0;if(e.toLowerCase().indexOf("swipeboxvideo=1")>=0)return!0}},parseUri:function(t,s){var o=i.createElement("a"),n={};return o.href=decodeURIComponent(t),o.search&&(n=JSON.parse('{"'+o.search.toLowerCase().replace("?","").replace(/&/g,'","').replace(/=/g,'":"')+'"}')),e.isPlainObject(s)&&(n=e.extend(n,s,d.settings.queryStringData)),e.map(n,function(e,t){return e&&e>""?encodeURIComponent(t)+"="+encodeURIComponent(e):void 0}).join("&")},getVideo:function(e){var t="",i=e.match(/((?:www\.)?youtube\.com|(?:www\.)?youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/),s=e.match(/(?:www\.)?youtu\.be\/([a-zA-Z0-9\-_]+)/),o=e.match(/(?:www\.)?vimeo\.com\/([0-9]*)/),n="";return i||s?(s&&(i=s),n=a.parseUri(e,{autoplay:d.settings.autoplayVideos?"1":"0",v:""}),t='<iframe width="560" height="315" src="//'+i[1]+"/embed/"+i[2]+"?"+n+'" frameborder="0" allowfullscreen></iframe>'):o?(n=a.parseUri(e,{autoplay:d.settings.autoplayVideos?"1":"0",byline:"0",portrait:"0",color:d.settings.vimeoColor}),t='<iframe width="560" height="315"  src="//player.vimeo.com/video/'+o[1]+"?"+n+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'):t='<iframe width="560" height="315" src="'+e+'" frameborder="0" allowfullscreen></iframe>','<div class="swipebox-video-container" style="max-width:'+d.settings.videoMaxWidth+'px"><div class="swipebox-video">'+t+"</div></div>"},loadMedia:function(t,i){if(0===t.trim().indexOf("#"))i.call(e("<div>",{"class":"swipebox-inline-container"}).append(e(t).clone().toggleClass(d.settings.toggleClassOnLoad)));else if(!this.isVideo(t)){var s=e("<img>").on("load",function(){i.call(s)});s.attr("src",t)}},getNext:function(){var t,i=this,s=e("#swipebox-slider .slide").index(e("#swipebox-slider .slide.current"));s+1<p.length?(t=e("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src"),e("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src",t),s++,i.setSlide(s),i.preloadMedia(s+1),d.settings.nextSlide&&d.settings.nextSlide(s)):d.settings.loopAtEnd===!0?(t=e("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src"),e("#swipebox-slider .slide").eq(s).contents().find("iframe").attr("src",t),s=0,i.preloadMedia(s),i.setSlide(s),i.preloadMedia(s+1),d.settings.nextSlide&&d.settings.nextSlide(s)):(e("#swipebox-overlay").addClass("rightSpring"),setTimeout(function(){e("#swipebox-overlay").removeClass("rightSpring")},500))},getPrev:function(){var t,i=e("#swipebox-slider .slide").index(e("#swipebox-slider .slide.current"));i>0?(t=e("#swipebox-slider .slide").eq(i).contents().find("iframe").attr("src"),e("#swipebox-slider .slide").eq(i).contents().find("iframe").attr("src",t),i--,this.setSlide(i),this.preloadMedia(i-1),d.settings.prevSlide&&d.settings.prevSlide(i)):(e("#swipebox-overlay").addClass("leftSpring"),setTimeout(function(){e("#swipebox-overlay").removeClass("leftSpring")},500))},nextSlide:function(e){},prevSlide:function(e){},closeSlide:function(){e("html").removeClass("swipebox-html"),e("html").removeClass("swipebox-touch"),e(t).trigger("resize"),this.destroy()},destroy:function(){e(t).unbind("keyup"),e("body").unbind("touchstart"),e("body").unbind("touchmove"),e("body").unbind("touchend"),e("#swipebox-slider").unbind(),e("#swipebox-overlay").remove(),e.isArray(o)||o.removeData("_swipebox"),this.target&&this.target.trigger("swipebox-destroy"),e.swipebox.isOpen=!1,d.settings.afterClose&&d.settings.afterClose()}},d.init()},e.fn.swipebox=function(t){if(!e.data(this,"_swipebox")){var i=new e.swipebox(this,t);this.data("_swipebox",i)}return this.data("_swipebox")}});