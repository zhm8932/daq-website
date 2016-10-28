webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(14);
	module.exports = __webpack_require__(7);


/***/ },

/***/ 14:
/***/ function(module, exports) {

	// require('jquery');


	$(function () {
	    $('body').on('click', '.history', function () {

	        var referrer = document.referrer;
	        referrer = referrer ? referrer : '/agencys/detail/2';

	        // console.log('referrer:',referrer);
	        window.location.href = referrer;
	    });
	});

/***/ }

});