webpackJsonp([2],{0:function(o,e,t){t(15),o.exports=t(7)},15:function(o,e,t){var a;a=function(o){t(3),t(16);var e=t(4);$(function(){function o(){var o=new BMap.Map("allmap"),e=new BMap.Point(113.94212,22.546162);o.centerAndZoom(e,20),o.enableScrollWheelZoom(),o.enableContinuousZoom();var t=new BMap.ScaleControl({anchor:BMAP_ANCHOR_TOP_LEFT});new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_RIGHT,type:BMAP_NAVIGATION_CONTROL_SMALL});o.addControl(t);var a={renderOptions:{map:o,panel:"r-result"},onSearchComplete:function(o){if(l.getStatus()==BMAP_STATUS_SUCCESS)for(var e=[],t=0;t<o.getCurrentNumPois();t++)e.push(o.getPoi(t).title+", "+o.getPoi(t).address)}},l=new BMap.LocalSearch(o,a);l.search("广州市越秀区环市东路422号2楼")}o();var t=$(".wrapper").width();$(window).resize(function(){var e=$(".wrapper").width();e==t&&(t=e,o())}),e.browser.ie?$(".ellips").ellipsis({row:2,"char":"……",callback:function(){}}):e.browser.mobile?(console.log("mobile"),$(".ellips").ellipsis({row:2,"char":"…",callback:function(){console.log($(this).text())}})):$(".ellips").ellipsis({row:3,"char":"……",callback:function(){console.log($(this).text())}})})}.call(e,t,e,o),!(void 0!==a&&(o.exports=a))},16:function(o,e,t){var a,l,i,l,i;!function(n){l=[t(3)],a=n,i="function"==typeof a?a.apply(e,l):a,!(void 0!==i&&(o.exports=i)),l=[t(3)],i=function(){return n(window.jQuery,window,document,void 0)}.apply(e,l),!(void 0!==i&&(o.exports=i))}(function(o){o.fn.ellipsis=function(e){var t={row:1,onlyFullWords:!1,"char":"...",callback:function(){},position:"tail"};return e=o.extend(t,e),this.each(function(){var t=o(this),a=t.text(),l=a,i=l.length,n=t.height();t.text("a");var r=parseFloat(t.css("lineHeight"),10),c=t.height(),s=r>c?r-c:0,h=s*(e.row-1)+c*e.row;if(n<=h)return t.text(a),void e.callback.call(this);var p=1,u=0,f=a.length;if("tail"===e.position){for(;p<f;)u=Math.ceil((p+f)/2),t.text(a.slice(0,u)+e["char"]),t.height()<=h?p=u:f=u-1;a=a.slice(0,p),e.onlyFullWords&&(a=a.replace(/[\u00AD\w\uac00-\ud7af]+$/,"")),a+=e["char"]}else if("middle"===e.position){for(var w=0;p<f;)u=Math.ceil((p+f)/2),w=Math.max(i-u,0),t.text(l.slice(0,Math.floor((i-w)/2))+e["char"]+l.slice(Math.floor((i+w)/2),i)),t.height()<=h?p=u:f=u-1;w=Math.max(i-p,0);var d=l.slice(0,Math.floor((i-w)/2)),v=l.slice(Math.floor((i+w)/2),i);e.onlyFullWords&&(d=d.replace(/[\u00AD\w\uac00-\ud7af]+$/,"")),a=d+e["char"]+v}t.text(a),e.callback.call(this)}),this}})}});