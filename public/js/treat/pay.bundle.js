webpackJsonp([22],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(315);
	module.exports = __webpack_require__(7);


/***/ },

/***/ 314:
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

/***/ 315:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	    var utils = __webpack_require__(4);
	    var login = __webpack_require__(9);
	    queryOrderState(function (result) {
	        if (result.data.reservationStatus != 0) {
	            window.location.href = '/treat/regsource/list';
	        }
	    });
	    var timer = __webpack_require__(314);

	    var payId = $('#payId').val();

	    $(function(){
	        //预约订单状态。0：未支付、1:待就诊(未登记)、2:已完成(已登记)、3:已过期、4:已取消、5：退款中、6：已退款
	        timer.updateTime({
	            totalTime:30*60*1000,
	            outdatedFun:function(){
	                window.location.href = '/users/register/list';
	            }
	        });

	        $('.alipay').on('click',function(){
	            var $this = $(this);
	            queryOrderState(function(result){
	                if (result.data.reservationStatus == 0) {
	                    var paynum = $this.attr('data-paynum');
	                    alipay(payId,paynum);
	                }else{
	                    utils.ShowComfirmDialog({tipText:'不是未支付状态的订单不允许支付！',noConfirmBtn:true});
	                }
	            });

	        });

	        $('.wechat-pay').on('click',function(){
	            queryOrderState(function(result) {
	                if (result.data.reservationStatus == 0) {
	                    wechatPay(payId, 6);
	                } else {
	                    utils.ShowComfirmDialog({tipText: '不是未支付状态的订单不允许支付！', noConfirmBtn: true});
	                }
	            });
	        });


	    });




	    function alipay(id,payWay){
	        var href = window.location.href;
	        var domain = href.substr(0,href.indexOf('/',href.indexOf('/',href.indexOf('/')+1)+1));
	        console.log(domain);
	        login.CheckLogin(function() {
	            utils.SendAjax({
	                url: '/trade/order/pay',
	                param: {id: id, payWay: payWay,ext:domain+'/users/register/list'},
	                method: 'POST',
	                tipText: '前往支付页面',
	                callback: function (result) {
	                    window.location.href = result.data.credentia.order_info;
	                },
	                errorFun: function (result) {

	                }
	            });
	        });
	    }

	    function wechatPay(id,payWay){
	        login.CheckLogin(function() {
	            utils.SendAjax({
	                url: '/trade/order/pay',
	                param: {id: id, payWay: payWay},
	                method: 'POST',
	                tipText: '前往支付页面',
	                callback: function (result) {
	                    var isMobile = $('#isMobile').val() === 'true';
	                    if(isMobile){
	                        showMobileDialog(result);
	                    }else{
	                        showDialog(result);
	                    }
	                },
	                errorFun: function (result) {

	                }
	            });
	        });
	    }

	    function showMobileDialog(result) {
	        var stateTimer = null;
	        var popup = new utils.Popup({
	            msg: '<div class="wechat-pay-dialog"><div class="left-box"><img src="data:image/png;base64,'+result.data.credentia.orderInfo+'"/><div class="wechat-tip"><i class="icon scan"></i>'+
	            '<span class="scan-tip">请使用微信"扫一扫"扫描二维码支付</span></div><div class="price text-stress">￥'+result.data.tradeDTO.amount/100+'</div></div>'+
	            '<div>',
	            otherMsg:'',
	            bOhterMsg:true,
	            callback:function () {
	                stateTimer = setInterval(function(){
	                    queryOrderState(function(result){
	                        if (result.data.reservationStatus != 0) {
	                            window.location.href = '/users/register/list';
	                        }
	                    });
	                },3000);
	            },
	            okText:'登录',
	            width:'300',
	            otherBox:'wechat-box',
	            isHide:false,
	            okCallback:function(){

	            },
	            cancelFun:function(){
	                clearInterval(stateTimer);
	            }
	        })

	    }


	    function showDialog(result) {
	        var stateTimer = null;
	        var popup = new utils.Popup({
	            msg: '<div class="wechat-pay-dialog"><div class="left-box"><img src="data:image/png;base64,'+result.data.credentia.orderInfo+'"/><div class="wechat-tip"><i class="icon scan"></i>'+
	            '<span class="scan-tip">请使用微信"扫一扫"扫描二维码支付</span></div><div class="price text-stress">￥'+result.data.tradeDTO.amount/100+'</div></div>'+
	            '<div class="right-box"><img src="/public/images/wxsm_img.png"/></div><div>',
	            otherMsg:'',
	            bOhterMsg:true,
	            callback:function () {
	                stateTimer = setInterval(function(){
	                    queryOrderState(function(result){
	                        if (result.data.reservationStatus != 0) {
	                            window.location.href = '/users/register/list';
	                        }
	                    });
	                },3000);
	            },
	            okText:'登录',
	            width:'730',
	            otherBox:'wechat-box',
	            isHide:false,
	            okCallback:function(){

	            },
	            cancelFun:function(){
	                clearInterval(stateTimer);
	            }
	        })

	    }


	    function queryOrderState(fun){
	        var orderId = $('#orderId').val();
	        utils.SendAjax({
	            url: '/treats/order/state',
	            param: {reservationId: orderId},
	            method: 'GET',
	            tipText: '查询订单状态',
	            callback: function (result) {
	                fun && fun(result);
	            },
	            errorFun: function (result) {

	            }
	        });
	    }
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }

});