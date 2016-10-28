webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(15);
	module.exports = __webpack_require__(7);


/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	    __webpack_require__(3);
	    __webpack_require__(16);
	    var utils = __webpack_require__(4);

	    $(function () {
	        // var BMap = require('../libs/BMap.js');
	        // console.log(BMap);


	        function initBMap() {
	            var map = new BMap.Map("allmap"); // 创建地图实例

	            // var point = new BMap.Point(116.404, 39.915);  // 创建点坐标
	            var point = new BMap.Point(113.302569, 23.140314); // 创建点坐标
	            map.centerAndZoom(point, 20); // 初始化地图，设置中心点坐标和地图级别

	            map.enableScrollWheelZoom(); //启用滚轮放大缩小，默认禁用
	            map.enableContinuousZoom(); //启用地图惯性拖拽，默认禁用


	            var top_left_control = new BMap.ScaleControl({ anchor: BMAP_ANCHOR_TOP_LEFT }); // 左上角，添加比例尺
	            // var top_left_navigation = new BMap.NavigationControl();  //左上角，添加默认缩放平移控件
	            var top_right_navigation = new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL }); //右上角，仅包含平移和缩放按钮
	            map.addControl(top_left_control);
	            // map.addControl(top_left_navigation);

	            var options = {
	                renderOptions: { map: map, panel: "r-result" },
	                onSearchComplete: function (results) {
	                    // console.log(results);
	                    //document.getElementById("log").innerHTML = JSON.stringify(results)
	                    if (local.getStatus() == BMAP_STATUS_SUCCESS) {
	                        // 判断状态是否正确
	                        var s = [];
	                        for (var i = 0; i < results.getCurrentNumPois(); i++) {
	                            s.push(results.getPoi(i).title + ", " + results.getPoi(i).address);
	                        }
	                        // console.log(s);
	                        //document.getElementById("log").innerHTML = s.join("<br>");
	                    }
	                }
	            };
	            var local = new BMap.LocalSearch(map, options);
	            // local.search('大族激光科技中心');
	            local.search('广州市越秀区环市东路422号区庄地铁站A出口星程酒店2楼');
	        }

	        initBMap();

	        var winWidth = $('.wrapper').width();
	        $(window).resize(function () {
	            var wrapperWidth = $('.wrapper').width();
	            if (wrapperWidth == winWidth) {
	                winWidth = wrapperWidth;
	                // console.log(winWidth);
	                initBMap();
	            }
	        });

	        if (utils.browser.ie) {
	            $('.ellips').ellipsis({
	                row: 2,
	                char: '……',
	                callback: function () {
	                    // console.log($(this).text());
	                }
	            });
	        } else if (utils.browser.mobile) {
	            // console.log('mobile')
	            $('.ellips').ellipsis({
	                row: 2,
	                char: '…',
	                callback: function () {
	                    // console.log($(this).text());
	                }
	            });
	        } else {
	            $('.ellips').ellipsis({
	                row: 3,
	                char: '……',
	                callback: function () {
	                    // console.log($(this).text());
	                }
	            });
	        }
	    });
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 16:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery ellipsis - v1.1.1 - 2014-02-23
	* https://github.com/STAR-ZERO/jquery-ellipsis
	* Copyright (c) 2014 Kenji Abe; Licensed MIT */
	(function (factory) {
	    if (true) {
	        // AMD
	        // you may need to change `define([------>'jquery'<------], factory)`
	        // if you use zepto, change it rely name, such as `define(['zepto'], factory)`
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	        // define(['zepto'], factory)
	    }if (true) {
	        // 如果define已被定义，模块化代码
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	            // 返回构造函数 CommonJS
	            // console.log('CommonJS')
	            return factory(window.jQuery, window, document, undefined);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else {
	        // Global
	        factory(window.jQuery || window.Zepto);
	    }
	})(function ($) {
	    $.fn.ellipsis = function (options) {

	        // default option
	        var defaults = {
	            'row': 1, // show rows
	            'onlyFullWords': false, // set to true to avoid cutting the text in the middle of a word
	            'char': '...', // ellipsis
	            'callback': function () {},
	            'position': 'tail' // middle, tail
	        };

	        options = $.extend(defaults, options);

	        this.each(function () {
	            // get element text
	            var $this = $(this);
	            var text = $this.text();
	            var origText = text;
	            var origLength = origText.length;
	            var origHeight = $this.height();

	            // get height
	            $this.text('a');
	            var lineHeight = parseFloat($this.css("lineHeight"), 10);
	            var rowHeight = $this.height();
	            var gapHeight = lineHeight > rowHeight ? lineHeight - rowHeight : 0;
	            var targetHeight = gapHeight * (options.row - 1) + rowHeight * options.row;

	            if (origHeight <= targetHeight) {
	                $this.text(text);
	                options.callback.call(this);
	                return;
	            }

	            var start = 1,
	                length = 0;
	            var end = text.length;

	            if (options.position === 'tail') {
	                while (start < end) {
	                    // Binary search for max length
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
	            } else if (options.position === 'middle') {

	                var sliceLength = 0;
	                while (start < end) {
	                    // Binary search for max length
	                    length = Math.ceil((start + end) / 2);
	                    sliceLength = Math.max(origLength - length, 0);

	                    $this.text(origText.slice(0, Math.floor((origLength - sliceLength) / 2)) + options['char'] + origText.slice(Math.floor((origLength + sliceLength) / 2), origLength));

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