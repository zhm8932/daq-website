webpackJsonp([44,62],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require){
	    __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var config = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../config\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../libs/utils\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    __webpack_require__(107);
	    __webpack_require__(108);
	    var tabFn = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../libs/tab\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    $(document).ready(function() {
	        __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../imgAuto\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	        //tab切换
	        tabFn('.tab li');
	        var $tab = $('.tab');
	        var selfId = $tab.find('.on').attr('data-id');
	        var imgs = $tab.find('img');

	        $.each(imgs,function (index,item) {
	            // console.log(item)
	            if(selfId==$(item).attr('data-id')){
	                $(item).show()
	            }
	        });


	        if(utils.browser.ie){
	            $('.ellips').ellipsis({
	                row:2,
	                char:'……',
	                callback: function() {
	                    // console.log($(this).text());
	                }
	            });
	        }else{
	            $('.ellips').ellipsis({
	                row:1,
	                char:'……',
	                callback: function() {
	                    // console.log($(this).text());
	                }
	            });
	        }

	        // $.each($('.ellips'),function (index,item) {
	        //     // console.log(item)
	        //     $(item).ellipsis({
	        //         row:1,
	        //         char:'……',
	        //         callback: function() {
	        //             console.log($(this).text());
	        //         }
	        //     })
	        // })

	        $('.pages').on('click','.prev,.next',function () {
	            var page = $(this).attr('data-page'),
	                $self =$(this);
	            // console.log(page);
	            var data = {
	                pageIndex:page
	            };
	            if(!$self.hasClass('disable')){
	                utils.SendAjax({
	                    url: '/healths/list/list_ask_web',
	                    param: data,
	                    method: 'POST',
	                    tipText: '请求问答数据',
	                    callback: function (result) {
	                        var json = result;
	                        console.log("json:",json)
	                        var $list = $('#list_ask ul');
	                        if(json.success){
	                            var data = json.data.data,
	                                html = '',
	                                currentPage = json.data.currentPage,
	                            //currentPage = json.data.currentPageDirectly,
	                                pageCount = json.data.pageCount;

	                            // console.log(currentPage);
	                            $.each(data,function (index,item) {
	                                html +='<li><a href="/healths/list/article/'+item.id+'" title="'+item.title+'"><i class="icon"></i>'+item.title+'</a></li>'
	                            });
	                            if($self.hasClass('next')){
	                                if(currentPage==pageCount){
	                                    $self.addClass('disable');
	                                    $self.siblings().removeClass('disable')
	                                }else if(currentPage!=1){
	                                    $self.attr('data-page',currentPage+1);
	                                    $self.siblings().removeClass('disable').attr('data-page',currentPage-1)
	                                }else{
	                                    $self.attr('data-page',currentPage+1);
	                                    $self.siblings().attr('data-page',currentPage-1)
	                                }
	                            }else{
	                                if(currentPage==1){
	                                    $self.addClass('disable');
	                                    $self.siblings().removeClass('disable')
	                                }else if(currentPage!=1){
	                                    $self.attr('data-page',currentPage-1);
	                                    $self.siblings().removeClass('disable').attr('data-page',currentPage+1)
	                                }else{
	                                    $self.attr('data-page',currentPage-1);
	                                    $self.siblings().attr('data-page',currentPage+1)
	                                }

	                            }

	                            $list.html(html);

	                        }
	                    }
	                });
	            }

	        });

	        function transferUnit(arr) {
	            if(parseFloat(arr)/100%1!=0){
	                return parseFloat(arr)/100
	            }
	            else{
	                return (parseFloat(arr)/100)+'.00'
	            }

	        }
	        //获取数据
	        function getListData(data) {
	            utils.SendAjax({
	                url: '/screenings/goods',
	                param: data,
	                tipText: '获取套餐列表',
	                callback: function (result) {
	                    // console.log(json)
	                    var json = result;
	                    var html = '';
	                    // console.log('data:',json)
	                    if(json.success){
	                        var data = json.data.data;
	                        pageCount = json.data.pageCount;

	                        $.each(data,function (index,arr) {
	                            var fit_people_html = '';
	                            var discountPrice='';
	                            var price='';
	                            if(arr.productKeyAttributeList){
	                                arr.productKeyAttributeList.forEach(function (item,index) {
	                                    // console.log('item:',item)
	                                    if(item.attributeName=='fit_people'){
	                                        fit_people_html =item.value;
	                                    }
	                                })
	                            }
	                            discountPrice=transferUnit(arr.discountPrice);
	                            price=transferUnit(arr.price);

	                            html += '<li class="box" style="opacity:0;filter:alpha(opacity=0);"><a href="/screenings/goods/detail/'+arr.id+'"><img src="'+arr.goodsImages[0].imageUrl+'"/><h4>'+arr.goodsName+'</h4></a><p>'+fit_people_html+'</p>' +
	                                '<div class="price"><span class="new"><em>￥</em>'+discountPrice+'</span><span class="old">原价'+price+'</span></div></div></li>'
	                        })
	                        if(pageIndex<=pageCount){
	                            pageIndex +=1;
	                            $(html).appendTo($("#waterfal"));
	                        }else{
	                            // console.log('没有下一页了')
	                        }
	                        // console.log("数据请求渲染完成:",pageIndex)

	                    }
	                }
	            });

	            return {
	                pageCount:pageCount,
	                data:data
	            }
	        }
	        var pageIndex = 2;
	        var pageCount = '';
	        // console.log("初始化的pageCount：",pageCount)

	        // waterfall();

	        //瀑布流加载
	        function initWaterfall() {
	            $("#waterfal").waterfall({
	                itemClass: ".box",
	                minColCount: 2,
	                spacingHeight: 20,
	                // OtherHeight:$('.footer').height(),
	                spacingWidth: 17,
	                resizeable: true,
	                ajaxCallback: function(success, end) {
	                    success();
	                    // console.log('初始化执行一次');
	                    end();
	                }
	            })
	        }

	        function initData() {
	            var html = '';
	            var data = {
	                pageIndex:pageIndex,
	                send:true,
	                // "categoryId":2140010959154488028,
	                "categoryId":$('.tab ul li.on').attr('data-id')
	            }
	            var listData = '';
	            // console.log("pageIndex:",pageIndex+'--pageCount:',pageCount)
	            if(!pageCount){
	                listData = getListData(data)
	            }else if(pageIndex<=pageCount){
	                getListData(data)
	            }else{
	                // console.log('不再加载')
	            }
	        }

	        initData();

	        var winHeight = $(document).height();
	        var footerHeight = $('.footer').outerHeight()+$('.copyright').outerHeight();
	        // console.log("winHeight:",winHeight)
	        // console.log("footerHeight:",footerHeight);
	        $(window).scroll(function () {
	            var scrollTop = $(document).scrollTop();
	            if(scrollTop>=winHeight-footerHeight){
	                initData();
	            }
	        })
	        function waterfall() {
	            // console.log('再执行')
	            $("#waterfal").waterfall({
	                itemClass: ".box",
	                minColCount: 2,
	                spacingHeight: 20,
	                // OtherHeight:$('.footer').height(),
	                spacingWidth: 17,
	                resizeable: true,
	                ajaxCallback: function(success, end) {

	                    var html = '';
	                    var data = {
	                        pageIndex:pageIndex,
	                        send:true,
	                        // "categoryId":2140010959154488028,
	                        "categoryId":$('.tab ul li.on').attr('data-id')
	                    }
	                    var listData = '';
	                    console.log("pageIndex:",pageIndex+'--pageCount:',pageCount)
	                    if(!pageCount){
	                        listData = getListData(data)
	                    }else if(pageIndex<=pageCount){
	                        getListData(data)
	                    }else{
	                        // console.log('不再加载')
	                    }

	                    // console.log("pageIndex:",pageIndex)
	                    // console.log("pageCount:",pageCount)

	                    success();

	                    // console.log('这里什么时候执行')
	                    end();
	                }
	            });
	        }






	    })

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },

/***/ 107:
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
	            OtherHeight: 10, // the brick element vertical spacing
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
	            console.log('开始')

	            $window.on("load", function() {
	                console.log('load事件')
	                $this._positionAll();
	            });

	            if(this.options.resizeable) {
	                $window.on("resize", function() {
	                    console.log('resize事件')
	                    $this._positionAll();
	                });
	            }

	            $this._positionAll();
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
	            // console.log("开始遍历图片")
	            var $this = this,
	                $item = $(this.options.itemClass),
	                minHeight,
	                minIndex;
	            var wrapperW = $('.item_list .wrapper').width();
	            var winW = $(window).width();
	            console.log("wrapperW:",wrapperW);
	            console.log("winW:",winW)
	            console.log("winW:",$('.wrapper'))
	            this._getColumnCount();
	            this.colHeightArray = [];

	            $item.each(function(index) {
	                $(this).css("position", "absolute");
	                if(index < $this.cols) {
	                    $(this).css("top", 0);
	                    $(this).css("left", $this.leftOffset + index * $this.itemWidth + index * $this.options.spacingWidth);
	                    $this.colHeightArray.push($(this).outerHeight());
	                    // console.log("$(this).():",$(this))
	                    // console.log("$(this).outerHeight():",$(this).outerHeight())
	                    // console.log("$(this).offsetHeightoffsetHeight:",$(this)[0].offsetHeight)
	                } else {
	                    // console.log("2222222222222222222222222")
	                    // console.log("$(this).():",$(this))
	                    // console.log("$(this).outerHeight():",$(this).outerHeight())
	                    console.log("left:",$item.eq(minIndex).offset()&&$item.eq(minIndex).offset().left);
	                    console.log("left:",$item.eq(minIndex).offset()&&$item.eq(minIndex).offset().left-(winW-wrapperW)/2);
	                    // console.log("left:",$item.eq(minIndex).offset());


	                    minHeight = Math.min.apply(null, $this.colHeightArray);
	                    minIndex = $.inArray(minHeight, $this.colHeightArray);

	                    console.log("minHeight:",minHeight)


	                    $(this).css("top", minHeight + $this.options.spacingHeight);
	                    // $(this).css("left", $item.eq(minIndex).offset().left);
	                    // $(this).css("left", $item.eq(minIndex).offset().left-(winW-wrapperW)/2);
	                    $(this).css("left", 0);
	                    $this.colHeightArray[minIndex] += $(this).outerHeight() + $this.options.spacingHeight;
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

/***/ },

/***/ 108:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery ellipsis - v1.1.1 - 2014-02-23
	* https://github.com/STAR-ZERO/jquery-ellipsis
	* Copyright (c) 2014 Kenji Abe; Licensed MIT */
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
	            return factory(window.jQuery,window, document, undefined);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }  else{ // Global
	        factory(window.jQuery || window.Zepto)
	    }
	})(function($) {
	    $.fn.ellipsis = function(options) {

	        // default option
	        var defaults = {
	            'row' : 1, // show rows
	            'onlyFullWords': false, // set to true to avoid cutting the text in the middle of a word
	            'char' : '...', // ellipsis
	            'callback': function() {},
	            'position': 'tail' // middle, tail
	        };

	        options = $.extend(defaults, options);

	        this.each(function() {
	            // get element text
	            var $this = $(this);
	            var text = $this.text();
	            var origText = text;
	            var origLength = origText.length;
	            var origHeight = $this.height();

	            // get height
	            $this.text('a');
	            var lineHeight =  parseFloat($this.css("lineHeight"), 10);
	            var rowHeight = $this.height();
	            var gapHeight = lineHeight > rowHeight ? (lineHeight - rowHeight) : 0;
	            var targetHeight = gapHeight * (options.row - 1) + rowHeight * options.row;

	            if (origHeight <= targetHeight) {
	                $this.text(text);
	                options.callback.call(this);
	                return;
	            }

	            var start = 1, length = 0;
	            var end = text.length;

	            if(options.position === 'tail') {
	                while (start < end) { // Binary search for max length
	                    length = Math.ceil((start + end) / 2);

	                    $this.text(text.slice(0, length) + options['char']);

	                    if ($this.height() <= targetHeight) {
	                        start = length;
	                    } else {
	                        end = length - 1;
	                    }
	                }

	                text = text.slice(0, start);

	                if (options.onlyFullWords) {
	                    text = text.replace(/[\u00AD\w\uac00-\ud7af]+$/, ''); // remove fragment of the last word together with possible soft-hyphen characters
	                }
	                text += options['char'];

	            }else if(options.position === 'middle') {

	                var sliceLength = 0;
	                while (start < end) { // Binary search for max length
	                    length = Math.ceil((start + end) / 2);
	                    sliceLength = Math.max(origLength - length, 0);

	                    $this.text(
	                        origText.slice(0, Math.floor((origLength - sliceLength) / 2)) +
	                        options['char'] +
	                        origText.slice(Math.floor((origLength + sliceLength) / 2), origLength)
	                    );

	                    if ($this.height() <= targetHeight) {
	                        start = length;
	                    } else {
	                        end = length - 1;
	                    }
	                }

	                sliceLength = Math.max(origLength - start, 0);
	                var head = origText.slice(0, Math.floor((origLength - sliceLength) / 2));
	                var tail = origText.slice(Math.floor((origLength + sliceLength) / 2), origLength);

	                if (options.onlyFullWords) {
	                    // remove fragment of the last or first word together with possible soft-hyphen characters
	                    head = head.replace(/[\u00AD\w\uac00-\ud7af]+$/, '');
	                }

	                text = head + options['char'] + tail;
	            }

	            $this.text(text);

	            options.callback.call(this);
	        });

	        return this;
	    };
	});


/***/ }

});