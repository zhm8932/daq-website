!function(e){"function"==typeof define&&define.amd&&define(["jquery"],e),"function"==typeof define?define(["jquery"],function(){return e(window.jQuery,window,document,void 0)}):e(window.jQuery||window.Zepto)}(function($){$.fn.ellipsis=function(e){var t={row:1,onlyFullWords:!1,"char":"...",callback:function(){},position:"tail"};return e=$.extend(t,e),this.each(function(){var t=$(this),i=t.text(),o=i,l=o.length,a=t.height();t.text("a");var n=parseFloat(t.css("lineHeight"),10),c=t.height(),r=n>c?n-c:0,h=r*(e.row-1)+c*e.row;if(h>=a)return t.text(i),void e.callback.call(this);var f=1,u=0,s=i.length;if("tail"===e.position){for(;s>f;)u=Math.ceil((f+s)/2),t.text(i.slice(0,u)+e["char"]),t.height()<=h?f=u:s=u-1;i=i.slice(0,f),e.onlyFullWords&&(i=i.replace(/[\u00AD\w\uac00-\ud7af]+$/,"")),i+=e["char"]}else if("middle"===e.position){for(var d=0;s>f;)u=Math.ceil((f+s)/2),d=Math.max(l-u,0),t.text(o.slice(0,Math.floor((l-d)/2))+e["char"]+o.slice(Math.floor((l+d)/2),l)),t.height()<=h?f=u:s=u-1;d=Math.max(l-f,0);var w=o.slice(0,Math.floor((l-d)/2)),p=o.slice(Math.floor((l+d)/2),l);e.onlyFullWords&&(w=w.replace(/[\u00AD\w\uac00-\ud7af]+$/,"")),i=w+e["char"]+p}t.text(i),e.callback.call(this)}),this}});