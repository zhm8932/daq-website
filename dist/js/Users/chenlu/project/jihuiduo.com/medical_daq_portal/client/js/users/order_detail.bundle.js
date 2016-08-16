webpackJsonp([58,62],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	    var timer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../libs/timer.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"jquery\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    timer.updateTime({
	        totalTime:30*60*1000,
	        minuteUnit:' : ',
	        secondUnit:'',
	        outdatedFun:function(){
	            window.location.reload();
	        }
	    });
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }
]);