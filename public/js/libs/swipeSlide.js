!function(t){"function"==typeof define&&define.cmd?define(["jquery"],function(){return console.log("CommonJS"),t(jQuery,window,document,void 0)}):"function"==typeof define&&define.amd?(define(["$"],t),console.log("555")):"object"==typeof exports?(console.log("666"),module.exports=t()):(console.log("777"),t(window.jQuery||window.Zepto))}(function($,t){"use strict";function n(t,n,e){n.css({"-webkit-transition":"all "+e+"s "+t.opts.transitionType,transition:"all "+e+"s "+t.opts.transitionType})}function e(t,n,e){var o=t.opts.axisX?e+"px,0,0":"0,"+e+"px,0";n.css({"-webkit-transform":"translate3d("+o+")",transform:"translate3d("+o+")"})}function o(t,n){var e=t.opts.ul.children(),o=e.eq(n).find("[data-src]");o&&o.each(function(t){var n=$(this);n.is("img")?(n.attr("src",n.data("src")),n.removeAttr("data-src")):(n.css({"background-image":"url("+n.data("src")+")"}),n.removeAttr("data-src"))})}function i(t){h.touch&&!t.touches&&(t.touches=t.originalEvent.touches)}function c(t,n){n.isScrolling=void 0,n._startX=h.touch?t.touches[0].pageX:t.pageX||t.clientX,n._startY=h.touch?t.touches[0].pageY:t.pageY||t.clientY}function s(t,o){o._moveDistance=o._moveDistanceIE=0,o.opts.autoSwipe&&u(o),o.allowSlideClick=!1,o._curX=h.touch?t.touches[0].pageX:t.pageX||t.clientX,o._curY=h.touch?t.touches[0].pageY:t.pageY||t.clientY,o._moveX=o._curX-o._startX,o._moveY=o._curY-o._startY,"undefined"==typeof o.isScrolling&&(o.opts.axisX?o.isScrolling=!!(Math.abs(o._moveX)>=Math.abs(o._moveY)):o.isScrolling=!!(Math.abs(o._moveY)>=Math.abs(o._moveX))),o.isScrolling&&(t.preventDefault?t.preventDefault():t.returnValue=!1,n(o,o.opts.ul,0),o._moveDistance=o._moveDistanceIE=o.opts.axisX?o._moveX:o._moveY),o.opts.continuousScroll||(0==o._index&&o._moveDistance>0||o._index+1>=o._liLength&&o._moveDistance<0)&&(o._moveDistance=0),e(o,o.opts.ul,-(o._slideDistance*o._index-o._moveDistance))}function l(t){t.isScrolling||a(t),(p.ie10||p.ie11)&&(Math.abs(t._moveDistanceIE)<5&&(t.allowSlideClick=!0),setTimeout(function(){t.allowSlideClick=!0},100)),Math.abs(t._moveDistance)<=t._distance?r(t,"",".3"):t._moveDistance>t._distance?r(t,"prev",".3"):r(t,"next",".3")}function a(t){t.opts.autoSwipe&&(u(t),t.autoSlide=setInterval(function(){r(t,"next",".3")},t.opts.speed))}function u(t){clearInterval(t.autoSlide)}function r(t,n,e){"number"==typeof n?(t._index=n,t.opts.lazyLoad&&(t.opts.continuousScroll?(o(t,t._index),o(t,t._index+1),o(t,t._index+2)):(o(t,t._index-1),o(t,t._index),o(t,t._index+1)))):"next"==n?(t._index++,t.opts.lazyLoad&&(t.opts.continuousScroll?o(t,t._index+2):o(t,t._index+1))):"prev"==n&&(t._index--,t.opts.lazyLoad&&(t._index<0?o(t,t._liLength-1):t.opts.continuousScroll?o(t,t._index):o(t,t._index-1))),t.opts.continuousScroll?t._index>=t._liLength?(d(t,e),t._index=0,setTimeout(function(){d(t,0),t.opts.callback(t._index,t._liLength)},300)):t._index<0?(d(t,e),t._index=t._liLength-1,setTimeout(function(){d(t,0),t.opts.callback(t._index,t._liLength)},300)):d(t,e):(t._index>=t._liLength?t._index=0:t._index<0&&(t._index=t._liLength-1),d(t,e)),t.opts.callback(t._index,t._liLength)}function d(t,o){n(t,t.opts.ul,o),e(t,t.opts.ul,-t._index*t._slideDistance)}var t=window,p={ie10:t.navigator.msPointerEnabled,ie11:t.navigator.pointerEnabled},_=["touchstart","touchmove","touchend"],h={touch:t.Modernizr&&Modernizr.touch===!0||function(){return!!("ontouchstart"in t||t.DocumentTouch&&document instanceof DocumentTouch)}()};p.ie10&&(_=["MSPointerDown","MSPointerMove","MSPointerUp"]),p.ie11&&(_=["pointerdown","pointermove","pointerup"]);var f={touchStart:_[0],touchMove:_[1],touchEnd:_[2]};$.fn.swipeSlide=function(t){return new v(this,t)};var v=function(t,n){var e=this;e.$el=$(t),e._index=0,e._distance=50,e.allowSlideClick=!0,e.init(n)};v.prototype.init=function(u){function r(){var t=d.opts.ul.children();d._slideDistance=d.opts.axisX?d.opts.li.width():d.opts.li.height(),n(d,d.opts.ul,0),e(d,d.opts.ul,-d._slideDistance*d._index),n(d,t,0);var o=d.opts.continuousScroll?-1:0;t.each(function(t){e(d,$(this),d._slideDistance*(t+o))})}var d=this;if(d.opts=$.extend({},{ul:d.$el.children("ul"),li:d.$el.children().children("li"),continuousScroll:!1,autoSwipe:!0,speed:4e3,axisX:!0,transitionType:"ease",lazyLoad:!1,callback:function(){}},u),d._liLength=d.opts.li.length,d.isScrolling,d._liLength<=1)return!1;if(d.opts.lazyLoad&&(o(d,"0"),o(d,"1"),d.opts.continuousScroll&&o(d,d._liLength-1)),d.opts.continuousScroll&&d.opts.ul.prepend(d.opts.li.last().clone()).append(d.opts.li.first().clone()),r(),p.ie10||p.ie11){var _="";_=d.opts.axisX?"pan-y":"none",d.$el.css({"-ms-touch-action":_,"touch-action":_}),d.$el.on("click",function(){return d.allowSlideClick})}a(d),d.opts.callback(d._index,d._liLength),d.$el.on(f.touchStart,function(t){i(t),c(t,d)}),d.$el.on(f.touchMove,function(t){i(t),s(t,d)}),d.$el.on(f.touchEnd,function(){l(d)}),d.opts.ul.on("webkitTransitionEnd MSTransitionEnd transitionend",function(){a(d)}),$(t).on("onorientationchange"in t?"orientationchange":"resize",function(){clearTimeout(d.timer),d.timer=setTimeout(r,150)})},v.prototype.goTo=function(t){var n=this;r(n,t,".3")}});