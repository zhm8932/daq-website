webpackJsonp([10],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(26);
	module.exports = __webpack_require__(7);


/***/ },

/***/ 17:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require,exports,module) {
	    module.exports = {
	        "host": "localhost",
	        "port":"8080",
	        "hostname": "http://120.76.24.129",
	        "appKey": "T-OPF-02191317",
	        "secret":"themis-opf-test",
	        "v":"1.0.0",
	        "format":"json"
	    }
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require){
	    var config = __webpack_require__(17);
	    var login = __webpack_require__(9);
	    var utils = __webpack_require__(4);
	    __webpack_require__(10);
	    __webpack_require__(12);

	    $(function () {
	        $('.time').daterangepicker({
	            singleDatePicker: true,
	            showDropdowns: true,
	            autoUpdateInput: false,   //默认为空
	            locale : {
	                format : 'YYYY-MM-DD',
	                daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],
	                monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月',
	                    '七月', '八月', '九月', '十月', '十一月', '十二月' ]
	            }
	        }, function(start, end, label) {
	            $('.time').val(start.format('YYYY-MM-DD'));
	        });

	        console.log(config);

	        // var code = document.querySelector('#code');
	        // console.log("code:",code);
	        // code.oninput=function(){
	        //
	        //     code.setCustomValidity("");
	        // };
	        // code.oninvalid=function(){
	        //     console.log(code);
	        //     code.setCustomValidity("请输入服务条形码？");
	        // };

	        var hasBind = $('#hasBind').val();
	        if (hasBind != 'true') {
	            console.log("未完善");
	            if(utils.browser.mobile){
	                window.location.href='/users/account/info';
	            }else{
	                login.showAccountDialog({
	                    back:true
	                });
	                $('#birthday').daterangepicker({
	                    singleDatePicker: true,
	                    showDropdowns: true,
	                    autoUpdateInput: false,   //默认为空
	                    locale : {
	                        format : 'YYYY-MM-DD',
	                        daysOfWeek : [ '日', '一', '二', '三', '四', '五', '六' ],
	                        monthNames : [ '一月', '二月', '三月', '四月', '五月', '六月',
	                            '七月', '八月', '九月', '十月', '十一月', '十二月' ]
	                    }
	                }, function(start, end, label) {
	                    $('#birthday').val(start.format('YYYY-MM-DD'));
	                });
	            }

	        }
	    })

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }

});