webpackJsonp([50,62],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	    var utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../libs/utils.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"ellipsis\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	    $(function () {
	        $('.goods-detail h5').ellipsis({
	            row:2,
	            char:'……',
	            callback: function() {
	                console.log($(this).text());
	            }
	        })
	    })

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
]);