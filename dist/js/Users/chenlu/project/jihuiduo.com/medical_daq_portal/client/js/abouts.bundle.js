webpackJsonp([0,62],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	    __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"swipebox\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./libs/utils.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    $(function () {

	        var imgsArr = [],
	            original = '';
	        var imgs = $('.abouts article img');
	        $.each(imgs,function (index,item) {
	            original = $(item).attr('data-original');
	            imgsArr.push({href:original});
	        });
	        $('body').on('click','.abouts img',function () {
	            console.log("关于都安全");
	            if(imgsArr.length&&utils.browser.mobile){
	                $.swipebox(imgsArr)
	            }
	        })



	    })
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ }
]);