!function(t){"function"==typeof define&&define.amd&&define(["jquery"],t),"function"==typeof define?define(["jquery"],function(){return t(jQuery,window,document,void 0)}):t(window.jQuery||window.Zepto)}(function($){function t(t,i){this.$element=$(t),this.options=$.extend(!0,{},n,i),this.ajaxLoading=!1,this.colHeightArray=[],this._init()}var i=$(window),o="waterfall",n={itemClass:"waterfall-item",spacingWidth:10,spacingHeight:10,OtherHeight:10,minColCount:2,resizeable:!1,itemAlign:"center",isFadeIn:!0,ajaxCallback:null};t.prototype={constructor:t,_init:function(){var t=this;console.log("开始"),i.on("load",function(){console.log("load事件"),t._positionAll()}),this.options.resizeable&&i.on("resize",function(){console.log("resize事件"),t._positionAll()}),t._positionAll(),this._doScroll()},_getColumnCount:function(){var t=this.$element.width(),i=$(this.options.itemClass),o=i.eq(0).outerWidth(),n=Math.floor(t/(o+this.options.spacingWidth)),e=0,s=0;n=n>this.options.minColCount?n:this.options.minColCount,e=n*o,t>e&&(s=Math.floor((t-e-n*this.options.spacingWidth)/2)),this.itemWidth=o,this.cols=n,this.leftOffset="center"==this.options.itemAlign?s:0},_positionAll:function(){var t,i,o=this,n=$(this.options.itemClass),e=$(".item_list .wrapper").width(),s=$(window).width();console.log("wrapperW:",e),console.log("winW:",s),console.log("winW:",$(".wrapper")),this._getColumnCount(),this.colHeightArray=[],n.each(function(l){$(this).css("position","absolute"),l<o.cols?($(this).css("top",0),$(this).css("left",o.leftOffset+l*o.itemWidth+l*o.options.spacingWidth),o.colHeightArray.push($(this).outerHeight())):(console.log("left:",n.eq(i).offset()&&n.eq(i).offset().left),console.log("left:",n.eq(i).offset()&&n.eq(i).offset().left-(s-e)/2),t=Math.min.apply(null,o.colHeightArray),i=$.inArray(t,o.colHeightArray),console.log("minHeight:",t),$(this).css("top",t+o.options.spacingHeight),$(this).css("left",0),o.colHeightArray[i]+=$(this).outerHeight()+o.options.spacingHeight),o.options.isFadeIn&&$(this).animate({opacity:1},300)}),this.$element.css("height",Math.max.apply(null,o.colHeightArray))},_doScroll:function(){var t,o=this;i.on("scroll",function(){t&&clearTimeout(t),t=setTimeout(function(){var t=$(o.options.itemClass).last(),n=i.scrollTop()+i.height()-o.options.OtherHeight;!o.ajaxLoading&&n>t.offset().top+t.outerHeight()/2&&(o.ajaxLoading=!0,o.options.ajaxCallback&&o.options.ajaxCallback(function(){o._positionAll()},function(){o.ajaxLoading=!1}))},100)})}},$.fn[o]=function(i){return this.each(function(){$.data(this,"plugin_"+o)||$.data(this,"plugin_"+o,new t(this,i))}),this}});