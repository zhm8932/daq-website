webpackJsonp([24],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(144);
	module.exports = __webpack_require__(7);


/***/ },

/***/ 137:
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

/***/ 144:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	    var utils = __webpack_require__(4);
	    var timer = __webpack_require__(137);
	    var login = __webpack_require__(9);

	    $(function(){
	        timer.updateTime({
	            totalTime:30*60*1000,
	            outdatedFun:function(){
	                window.location.href = '/trade/order/list';
	            }
	        });

	        $('.del-order').on('click',function(){
	            delItem($(this));
	        });

	        $('.cancel-order').on('click',function(){
	            cancelItem($(this));
	        });

	        // $('.topay').on('click',function(){
	        //     var tr = $(this).closest('dl.order');
	        //     var timer = tr.find('.timer');
	        //     var payTime = timer.attr('data-paytime');
	        //     var currentTime = parseInt(payTime) + (30*60*1000 - parseInt(timer.attr('data-restTime')));
	        //     var cost = tr.attr('data-cost');
	        //     var id = tr.attr('data-id');
	        //     window.location.href = '/treats/reg/topay?payTime='+payTime+'&id='+id+'&totalCost='+cost+'&orderId='+id+'&currentTime='+currentTime;
	        // });
	    });

	    function delItem($this){
	        login.CheckLogin(function() {
	            utils.ShowComfirmDialog({
	                tipText:'确定删除吗?',
	                okCallback:function(){
	                    $this.addClass('disabled').off('click');
	                    var tr = $this.closest('dl.order');
	                    var id = tr.attr('data-id');
	                    utils.SendAjax({
	                        url: '/trade/order/delete',
	                        param: {id: id},
	                        method: 'POST',
	                        tipText: '删除订单',
	                        callback: function (result) {
	                            window.location.reload();
	                        },
	                        errorFun: function (result) {
	                            $this.removeClass('disabled').on('click', function () {
	                                delItem($this);
	                            });
	                        }
	                    });
	                }
	            });
	        });
	    }

	    function cancelItem($this){
	        login.CheckLogin(function() {
	            utils.ShowComfirmDialog({
	                tipText:'确定取消吗?',
	                okCallback:function(){
	                    $this.addClass('disabled').off('click');
	                    var tr = $this.closest('dl.order');
	                    var id = tr.attr('data-id');
	                    utils.SendAjax({
	                        url: '/trade/order/cancel',
	                        param: {id: id},
	                        method: 'POST',
	                        tipText: '取消订单',
	                        callback: function (result) {
	                            window.location.reload();
	                        },
	                        errorFun: function (result) {
	                            $this.removeClass('disabled').on('click', function () {
	                                cancelItem($this);
	                            });
	                        }
	                    });
	                }
	            });
	        });
	    }

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }

});