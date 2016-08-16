webpackJsonp([19,62],[
/* 0 */
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



	            console.log("textOriginal:",text)

	            if (origHeight <= targetHeight) {
	                $this.text(text);
	                options.callback.call(this);
	                return;
	            }

	            var start = 1, length = 0;
	            var end = text.length;

	            if(options.position === 'tail') {

	                console.log("origHeight:",origHeight);
	                console.log("targetHeight:",targetHeight);

	                console.log("start:",start)
	                console.log("end:",end)


	                while (start < end) { // Binary search for max length
	                    console.log("2222222")
	                    length = Math.ceil((start + end) / 2);
	                    console.log("length:",length)
	                    $this.text(text.slice(0, length) + options['char']);
	                    // console.log("$this.height():",$this.height())

	                    if ($this.height() <= targetHeight) {
	                        start = length;
	                    } else {
	                        end = length - 1;
	                    }
	                }

	                console.log("start2:",start)
	                text = text.slice(0, start);


	                if (options.onlyFullWords) {
	                    text = text.replace(/[\u00AD\w\uac00-\ud7af]+$/, ''); // remove fragment of the last word together with possible soft-hyphen characters
	                }
	                text += options['char'];
	                console.log("text:",text)

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
]);