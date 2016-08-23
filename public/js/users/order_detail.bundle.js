webpackJsonp([22],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(142);
	module.exports = __webpack_require__(7);


/***/ },

/***/ 136:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Created by chenlu on 16/7/12.
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	    __webpack_require__(3);
	    function updateTime(options) {
	        var defaults = {
	            minuteUnit: '分',
	            secondUnit: '秒',
	            outdatedFun: function () {
	                window.location.reload();
	            }
	        };
	        var isMobile = $('#browser-mobile').val() === 'true';
	        if(isMobile){
	            defaults.minuteUnit = ' : ';
	            defaults.secondUnit = '';
	        }
	        options = $.extend({}, defaults, options);

	        var timerList = $('.timer');
	        timerList.each(function (index, ele) {
	            var $this = $(ele);
	            var payTime = parseInt($this.attr('data-paytime'));
	            var currentTime = parseInt($this.attr('data-currenttime'));
	            //剩余支付时间 = 总共支付时间 - (当前时间 - 下单时间),单位:秒
	            var restTime = parseInt((options.totalTime - (currentTime - payTime)) / 1000);

	            // var a = new Date(payTime).toLocaleTimeString();
	            // var b = new Date(now).toLocaleTimeString();
	            //
	            // console.log('==='+ a + '==' + b);
	            // console.log(now-payTime);
	            // console.log(restTime);
	            countTime(restTime, $this);
	        });

	        function countTime(restTime, $this) {
	            if (restTime < 0) {
	                options.outdatedFun && options.outdatedFun();
	                return false;
	            }
	            $this.attr('data-restTime',restTime*1000);
	            var minutes = parseInt(restTime / 60) < 10 ? '0' + parseInt(restTime / 60) : parseInt(restTime / 60);
	            var seconds = parseInt(restTime % 60) < 10 ? '0' + parseInt(restTime % 60) : parseInt(restTime % 60);
	            $this.html(minutes + options.minuteUnit + seconds + options.secondUnit);
	            restTime--;
	            setTimeout(function () {
	                countTime(restTime, $this);
	            }, 1000);
	        }
	    }

	    exports.updateTime = updateTime;
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 142:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	    var timer = __webpack_require__(136);
	    __webpack_require__(3);
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

});