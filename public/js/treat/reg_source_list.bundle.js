webpackJsonp([25],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(214);
	module.exports = __webpack_require__(7);


/***/ },

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	    __webpack_require__(3);
	    var utils = __webpack_require__(4);
	    var login = __webpack_require__(9);

	    $(function(){
	        $('.register').on('click',function(){
	            var $this = $(this);
	            var doctorInfo = $this.closest('.doctor-info-detail');
	            var form = $('#regByDocForm');
	            form.find('input[name=date]').val($this.data('date'));
	            form.find('input[name=doctorId]').val(doctorInfo.attr('data-accountid'));
	            form.find('input[name=docName]').val(doctorInfo.attr('data-docName'));
	            form.find('input[name=docTitle]').val(doctorInfo.attr('data-docTitle'));
	            form.find('input[name=need]').val(doctorInfo.attr('data-need'));
	            form.submit();
	        });
	    });
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }

});