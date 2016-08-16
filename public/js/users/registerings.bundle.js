webpackJsonp([25],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(41);
	module.exports = __webpack_require__(7);


/***/ },

/***/ 30:
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

/***/ 41:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	    var utils = __webpack_require__(4);
	    var timer = __webpack_require__(30);
	    var login = __webpack_require__(9);

	    $(function(){
	        timer.updateTime({
	            totalTime:30*60*1000,
	            outdatedFun:function(){
	                window.location.href = '/users/register/list';
	            }
	        });

	        $('.del-reg').on('click',function(){
	            delItem($(this));
	        });

	        $('.cancel-reg').on('click',function(){
	            cancelItem($(this));
	        });

	        // $('.to-pay').on('click',function(){
	        //     var item = $(this).closest('.item');
	        //     var timer = item.find('.timer');
	        //     var payTime = timer.attr('data-paytime');
	        //     var currentTime = parseInt(payTime) + (30*60*1000 - parseInt(timer.attr('data-restTime')));
	        //     var id = item.attr('data-payid');
	        //     var cost = item.attr('data-cost');
	        //     var orderId = item.attr('data-id');
	        //     window.location.href = '/treats/reg/topay?payTime='+payTime+'&id='+id+'&totalCost='+cost+'&orderId='+id+'&currentTime='+currentTime;
	        // });
	        
	    });

	    function delItem($this){
	        login.CheckLogin(function() {
	            utils.ShowComfirmDialog({
	                tipText:'确定删除吗?',
	                okCallback:function(){
	                    $this.addClass('disabled').off('click');
	                    var tr = $this.closest('tr,dl');
	                    var reservationId = tr.attr('data-id');
	                    utils.SendAjax({
	                        url: '/users/register/del',
	                        param: {reservationId: reservationId},
	                        method: 'POST',
	                        tipText: '删除挂号',
	                        callback: function (result) {
	                            tr.hide(500);
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
	                    var tr = $this.closest('tr,dl');
	                    var registrationId = tr.attr('data-id');
	                    utils.SendAjax({
	                        url: '/users/register/cancel',
	                        param: {registrationId: registrationId},
	                        method: 'POST',
	                        tipText: '取消挂号',
	                        callback: function (result) {
	                            window.location.reload();
	                            // var td = $this.closest('td,p');
	                            // console.log("td:",td)
	                            // // td.prev().prev().html('已取消').removeClass('text-stress').addClass('text-sec');
	                            // tr.find('.status').html('已取消').removeClass('text-stress').addClass('text-sec');
	                            // td.html('<a href="javascript:void(0)" class="del-reg">删除</a>');
	                            // td.find('.del-reg').on('click',function(){
	                            //     delItem($(this));
	                            // });
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