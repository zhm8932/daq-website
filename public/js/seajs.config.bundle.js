webpackJsonp([17],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(204);
	module.exports = __webpack_require__(7);


/***/ },

/***/ 204:
/***/ function(module, exports) {

	seajs.config({
	    // Sea.js 的基础路径
	    base: "js",
	    // 别名配置
	    //路径配置
	    paths: {
	        //'main': './js',  //顶级标识，基于 base 路径
	        'libs':'libs',
	        'js':'js'
	    },
	    alias: {
	        //"jquery": "./libs/jquery.js",
	        'jquery': '/js/libs/1.8.3/jquery.js',
	        //'lazyload':'./libs/lazyload.js',
	        'lazyload':'./libs/jquery.lazyload.js',
	        // 'touchslider':'./libs/jquery.touchslider.js',
	        'touchslider':'/js/libs/jquery.touchslider.js',
	        'moment':'/js/libs/moment.js',
	        'daterangepicker':'/js/libs/daterangepicker.js',
	        'swipebox':'/js/libs/jquery.swipebox',
	        'cookie':'/js/libs/jquery.cookie',
	        'swiper':'/js/libs/swiper.jquery.umd',
	        'ellipsis':'/js/libs/jquery.ellipsis',
	        'utils': 'libs/utils.js'
	        //"bootstrap":"../libs/bootstrap/dist/js/bootstrap.js",
	        //"moment":'./libs/moment',
	        //"daterangepicker":'./libs/daterangepicker'
	    }
	});

/***/ }

});