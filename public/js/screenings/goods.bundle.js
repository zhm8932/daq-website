webpackJsonp([15],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(200);
	module.exports = __webpack_require__(7);


/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery ellipsis - v1.1.1 - 2014-02-23
	* https://github.com/STAR-ZERO/jquery-ellipsis
	* Copyright (c) 2014 Kenji Abe; Licensed MIT */
	(function (factory) {
	    if(true){ // AMD
	        // you may need to change `define([------>'jquery'<------], factory)`
	        // if you use zepto, change it rely name, such as `define(['zepto'], factory)`
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	        // define(['zepto'], factory)
	    }if (true) {
	        // 如果define已被定义，模块化代码
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
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


/***/ },

/***/ 193:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require,exports,module) {
	    module.exports = {
	        "host": "localhost",
	        "port":"8080",
	        "hostname": "http://120.76.24.129",
	        "appKey": "T-OPF-02191317",
	        "secret":"themis-opf-test",
	        "v":"1.0.0",
	        "format":"json"
	    }
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 196:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	    $(function () {
	        var $article = $('.health_detail article,.goods_detail article');
	        var articleWidth = $article.width();
	        $.each($article.find('img'),function (index,item) {
	            var img = $(this);
	            var realWidth;//真实的宽度
	            var realHeight;//真实的高度
	            //这里做下说明，$("<img/>")这里是创建一个临时的img标签，类似js创建一个new Image()对象！

	            $("<img/>").attr("src", $(img).attr("src")).load(function () {
	                realWidth = this.width;
	                realHeight = this.height;
	                // console.log('realWidth:',realWidth);
	                //如果真实的宽度大于浏览器的宽度就按照100%显示
	                if (realWidth >= articleWidth) {
	                    $(img).css("width", "100%").css("height", "auto");
	                }
	                else {//如果小于浏览器的宽度按照原尺寸显示
	                    $(img).css("width", realWidth + 'px').css("height", realHeight + 'px');
	                }



	            })
	        })
	    })
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require){
	    __webpack_require__(3);
	    var config = __webpack_require__(193);
	    var utils = __webpack_require__(4);
	    // require('../libs/jquery.waterfall');
	    __webpack_require__(16);
	    var tabFn = __webpack_require__(201);
	    $(document).ready(function() {
	        __webpack_require__(196);

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
	        }else if(utils.browser.mobile){
	            // console.log("手机端")
	            // $('.ellips').ellipsis({
	            //     row:1,
	            //     char:'…',
	            //     callback: function() {
	            //         console.log($(this).text());
	            //     }
	            // });
	        }


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
	                        // console.log("json:",json)
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
	            $.ajax({
	                url: '/screenings/goods',
	                data: data,
	                success: function (result) {
	                    // console.log(json)
	                    var json = JSON.parse(result);
	                    var html = '';
	                    // console.log('data:', typeof json)
	                    if(json.success){
	                        var data = json.data.data;
	                        var imgUrl = '';
	                        pageCount = json.data.pageCount;
	                        $.each(data,function (index,arr) {
	                            var fit_people_html = '';
	                            var discountPrice='';
	                            var price='';
	                            discountPrice=transferUnit(arr.discountPrice);
	                            price=transferUnit(arr.price);
	                            if(utils.browser.mobile){
	                                imgUrl = arr.mobileCoverImages[0]
	                            }else{
	                                imgUrl = arr.pcCoverImages[0]
	                            }
	                            html += '<li class="box"><a href="/screenings/goods/detail/'+arr.id+'"><img data-original="'+imgUrl+'"/><h4><a href="/screenings/goods/detail/'+arr.id+'">'+arr.goodsName+'</a></h4><p>'+arr.fitPeople+'</p>' +
	                                '<div class="price"><span class="new"><em>￥</em>'+discountPrice+'</span><span class="old">原价'+price+'</span></div></div></li>'
	                        });
	                        $(html).appendTo($("#waterfal"));
	                        $(".goods_list img").lazyload({
	                            effect: "fadeIn"
	                        });
	                        // if(pageIndex<=pageCount){
	                        //     // pageIndex +=1;
	                        //
	                        // }else{
	                        //     console.log('没有下一页了')
	                        // }

	                    }
	                }
	            });

	            return {
	                pageCount:pageCount,
	                data:data
	            }
	        }
	        var pageIndex = 1;
	        var pageCount = $("#waterfal").attr('data-pageCount')||'';

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

	            pageIndex +=1;
	            var data = {
	                pageIndex:pageIndex,
	                send:true,
	                "categoryId":$('.tab ul li.on').attr('data-id')
	            }
	            // console.log("pageIndex:",pageIndex+'--pageCount:',pageCount)
	            // console.log("pageCount:",pageCount)
	            if(pageCount&&pageIndex<=pageCount){


	                getListData(data)
	            }else{
	                // console.log('没有下一页了')
	            }
	        }

	        // initData();

	        var winHeight = $(window).height();
	        var footerHeight = $('.footer').outerHeight()+$('.copyright').outerHeight();
	        // console.log("winHeight:",winHeight);
	        // console.log("footerHeight:",footerHeight);
	        if(utils.browser.mobile){
	            footerHeight+=$('.footerWap').height()
	        }
	        // console.log("footerHeight:",footerHeight);
	        $(window).scroll(function () {
	            var scrollTop = $(document).scrollTop();
	            if(scrollTop>=winHeight-footerHeight-50){
	                winHeight = $(document).height();
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
	                    // console.log("pageIndex:",pageIndex+'--pageCount:',pageCount)
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

/***/ 201:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require,exports,module) {
	    function tab(ele) {
	        var curPathname = location.pathname;
	        // console.log("curPathname:",curPathname)
	        // var $tab_Li = $('.tab li')
	        var $tab_Li = $(ele)
	        var nav_on_href =$('.nav ul li.on a').attr('href');
	        // console.log("nav_on_href:",nav_on_href)
	        for(var i= 0,len=$tab_Li.length;i<len;i++){
	            var sUrl = $($tab_Li[i]).find('a').attr('href');
	            // console.log("sUrl:",sUrl)
	            // if(sUrl.search(curPathname)!=-1&&nav_on_href!=curPathname){
	            if(sUrl.search(curPathname)!=-1&&curPathname!='/screenings/goods'){
	                $($tab_Li[i]).addClass('on')
	            }else if(sUrl.search(curPathname)!=-1){
	                $($tab_Li[0]).addClass('on')
	            }
	            // if(sUrl==curPathname){
	            //     $($tab_Li[i]).addClass('on')
	            // }else{
	            //     // $($tab_Li[0]).addClass('on')
	            // }

	        }

	    }
	    // exports.tab = tab
	    module.exports = tab

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ }

});