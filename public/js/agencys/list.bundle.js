webpackJsonp([4],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(121);
	module.exports = __webpack_require__(7);


/***/ },

/***/ 121:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3)

	$(function () {

	    var location = window.location;
	        curPathname = location.pathname,
	        $agency_nav = $('.agency_nav'),
	        $agency_a = $agency_nav.find('a');
	    $.each($agency_a,function (index,item) {
	        console.log($(item).text(),":",$(item).attr('href'))
	        if($(item).attr('href')==curPathname){
	            $(item).addClass('on').siblings().removeClass('on');
	        }
	    })
	})

/***/ }

});