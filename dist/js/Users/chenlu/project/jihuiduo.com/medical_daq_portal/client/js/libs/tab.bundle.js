webpackJsonp([39,62],[
/* 0 */
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
]);