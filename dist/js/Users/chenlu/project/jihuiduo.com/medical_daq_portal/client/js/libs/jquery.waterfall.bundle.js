webpackJsonp([26,62],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * jquery waterfall
	 * @author richard chen
	 * @update 2014-10-07
	 * @version 1.0
	 * @parameters
	 *     itemClass: the brick element class
	 *     spacingWidth: the brick element horizontal spacing
	 *     spacingHeight: the brick element vertical spacing
	 *     minColCount: min columns
	 *     resizeable: trigger positionAll() when browser window is resized
	 *     itemAlign: the alignment of the brick element ( e.q. [center|left] )
	 *     isFadeIn: fadeIn effect on loading
	 *     ajaxCallback: callback when ajax loaded, two parameters ( success, end )
	 */
	(function (factory) {
	    if(true){ // AMD
	        // you may need to change `define([------>'jquery'<------], factory)`
	        // if you use zepto, change it rely name, such as `define(['zepto'], factory)`
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	        // define(['zepto'], factory)
	    }if (true) {
	        // 如果define已被定义，模块化代码
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
	            // 返回构造函数 CommonJS
	            // console.log('CommonJS')
	            return factory(jQuery,window, document, undefined);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }  else{ // Global
	        factory(window.jQuery || window.Zepto)
	    }
	})(function($) {
	    var $window = $(window),
	        pluginName = 'waterfall',
	        defaults = {
	            itemClass: "waterfall-item", // the brick element class
	            spacingWidth: 10, // the brick element horizontal spacing
	            spacingHeight: 10, // the brick element vertical spacing
	            OtherHeight: 0, // the brick element vertical spacing
	            minColCount: 2, // min columns
	            resizeable: false, // trigger positionAll() when browser window is resized
	            itemAlign: "center", // the alignment of the brick element ( e.q. [center|left] )
	            isFadeIn: true, // fadeIn effect on loading
	            ajaxCallback: null // callback when ajax loaded, two parameters ( success, end )
	        };

	    function Waterfall(element, options) {
	        this.$element = $(element);
	        this.options = $.extend(true, {}, defaults, options);
	        this.ajaxLoading = false; // is ajax loading
	        this.colHeightArray = []; // height of each columns

	        this._init();
	    }

	    Waterfall.prototype = {
	        constructor: Waterfall,

	        _init: function () {
	            var $this = this;

	            $window.on("load", function() {
	                console.log('瀑布流初始执行一次啦')
	                $this._positionAll();
	            });

	            if(this.options.resizeable) {
	                $window.on("resize", function() {
	                    console.log('改变尺寸瀑布流初始执行一次啦')
	                    $this._positionAll();
	                });
	            }

	            this._doScroll();
	        },
	        _getColumnCount: function () {
	            var parentWidth = this.$element.width(),
	                $item = $(this.options.itemClass),
	                itemWidth = $item.eq(0).outerWidth(),
	                iCol = Math.floor(parentWidth / (itemWidth + this.options.spacingWidth)),
	                realWidth = 0,
	                leftOffset = 0;

	            iCol = iCol > this.options.minColCount ? iCol : this.options.minColCount;
	            realWidth = iCol * itemWidth;

	            if(parentWidth > realWidth) {
	                leftOffset = Math.floor((parentWidth - realWidth - iCol * this.options.spacingWidth) / 2);
	            }
	            this.itemWidth = itemWidth;
	            this.cols = iCol;
	            this.leftOffset = this.options.itemAlign == "center" ? leftOffset : 0;
	        },
	        _positionAll: function () {
	            var $this = this,
	                $item = $(this.options.itemClass),
	                minHeight,
	                minIndex;

	            this._getColumnCount();
	            this.colHeightArray = [];
	            // console.log('99999999999')
	            var left  = '';
	            var wrapperW = $('.wrapper').width()
	            var winW = $(window).width();
	            $item.each(function(index) {
	                $(this).css("position", "absolute");
	                // console.log('index:',index)
	                // console.log('$this.cols:',$this.cols)

	                if(index < $this.cols) {
	                    // console.log('8888')
	                    $(this).css("top", 0);
	                    $(this).css("left", $this.leftOffset + index * $this.itemWidth + index * $this.options.spacingWidth);
	                    $this.colHeightArray.push($(this).outerHeight());
	                } else {

	                    minHeight = Math.min.apply(null, $this.colHeightArray);
	                    minIndex = $.inArray(minHeight, $this.colHeightArray);

	                    $(this).css("top", minHeight + $this.options.spacingHeight);
	                    $(this).css("left", $item.eq(minIndex).offset().left-(winW-wrapperW)/2);
	                    $this.colHeightArray[minIndex] += $(this).outerHeight() + $this.options.spacingHeight;

	                    // console.log('7777:',$item.eq(minIndex).offset().left-(winW-wrapperW)/2)
	                    // console.log('otherW:',(winW-wrapperW)/2)
	                }

	                if($this.options.isFadeIn) {
	                    $(this).animate({"opacity": 1}, 300);
	                }
	                
	            });

	            this.$element.css("height", Math.max.apply(null, $this.colHeightArray));
	        },
	        _doScroll: function () {
	            var $this = this,
	                scrollTimer;

	            $window.on("scroll", function() {
	                if(scrollTimer) {
	                    clearTimeout(scrollTimer);
	                }

	                scrollTimer = setTimeout(function() {
	                    var $last = $($this.options.itemClass).last(),
	                        scrollTop = $window.scrollTop() + $window.height()-$this.options.OtherHeight;
	                        // scrollTop = $window.scrollTop()

	                    // console.log("scrollTop:",scrollTop)
	                    // console.log("$last.offset().top:",$last.offset().top+$last.outerHeight() / 2)
	                    if(!$this.ajaxLoading && scrollTop > $last.offset().top + $last.outerHeight() / 2) {
	                        $this.ajaxLoading = true;
	                        $this.options.ajaxCallback && $this.options.ajaxCallback(
	                            // reposition all the brick element after successful load ajax data
	                            function() {
	                                $this._positionAll();
	                            },
	                            function() {
	                                $this.ajaxLoading = false;
	                            }
	                        );
	                    }
	                }, 100);
	            });
	        }
	    }

	    $.fn[pluginName] = function (options) {
	        this.each(function() {
	            if(!$.data(this, "plugin_" + pluginName)) {
	                $.data(this, "plugin_" + pluginName, new Waterfall(this, options));
	            }
	        });

	        return this;
	    }
	})

/***/ }
]);