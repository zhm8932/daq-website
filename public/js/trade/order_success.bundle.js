webpackJsonp([22],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(312);
	module.exports = __webpack_require__(7);


/***/ },

/***/ 312:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	    var utils = __webpack_require__(4);
	    var login = __webpack_require__(9);

	    queryOrderState(function(result) {
	        //订单状态,UNPAID(1,"未支付"),PAID(2,"已支付"),CANCELED(3,"已取消"),REFUNDING(4,"退款中"),REFUND(5,"已退款")
	        var orderState = result.data.orderState;
	        if (orderState != 1) {
	            window.location.href = '/screenings/goods';
	        }
	    });



	    var timer = __webpack_require__(313);

	    var href = window.location.href;
	    var domain = href.substr(0,href.indexOf('/',href.indexOf('/',href.indexOf('/')+1)+1));
	    $(function(){
	        timer.updateTime({
	            totalTime:30*60*1000,
	            outdatedFun:function(){
	                window.location.href = '/trade/order/list';
	            }
	        });

	        $('.alipay').on('click',function(){
	            var paynum = $(this).attr('data-paynum');
	            getPayId(alipay,paynum);
	        });

	        $('.wechat-pay').on('click',function(){
	            getPayId(wechatPay,6);
	        });
	    });




	    function getPayId(fun,payWay){
	        login.CheckLogin(function() {
	            var id = $('#order-detail').data('id');
	            utils.SendAjax({
	                url: '/trade/pay/payid',
	                param: {orderId: id},
	                method: 'POST',
	                tipText: '获取支付ID',
	                callback: function (result) {
	                    fun && fun(result.data.id, payWay);
	                },
	                errorFun: function (result) {

	                }
	            });
	        });
	    }

	    function alipay(id,payWay){
	        var order_no = $('#order-detail').data('id');
	        var href = window.location.href;
	        var domain = href.substr(0,href.indexOf('/',href.indexOf('/',href.indexOf('/')+1)+1));
	        login.CheckLogin(function() {
	            utils.SendAjax({
	                url: '/trade/order/pay',
	                param: {id: id, payWay: payWay,ext:domain+'/trade/order/paySuccess?order_no='+order_no},
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
	                        var id = $('#order-detail').data('id');
	                        //订单状态,UNPAID(1,"未支付"),PAID(2,"已支付"),CANCELED(3,"已取消"),REFUNDING(4,"退款中"),REFUND(5,"已退款")
	                        var orderState = result.data.orderState;
	                        if (orderState == 2) {
	                            window.location.href = '/trade/order/paySuccess?order_no=' + id;
	                        }else if(orderState!=1){
	                            window.location.href ='/trade/order/list';
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
	            '<span class="scan-tip">请使用微信"扫一扫"扫描二维码支付</span></div><div class="price text-stress">￥'+(result.data.tradeDTO.amount/100).toFixed(2)+'</div></div>'+
	            '<div class="right-box"><img src="/public/images/wxsm_img.png"/></div><div>',
	            otherMsg:'',
	            bOhterMsg:true,
	            callback:function () {
	                stateTimer = setInterval(function(){
	                    queryOrderState(function(result){
	                        var id = $('#order-detail').data('id');
	                        //订单状态,UNPAID(1,"未支付"),PAID(2,"已支付"),CANCELED(3,"已取消"),REFUNDING(4,"退款中"),REFUND(5,"已退款")
	                        var orderState = result.data.orderState;
	                        if (orderState == 2) {
	                            window.location.href = '/trade/order/paySuccess?order_no=' + id;
	                        }else if(orderState!=1){
	                            window.location.href ='/trade/order/list';
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
	        var id = $('#order-detail').data('id');
	        utils.SendAjax({
	            url: '/trade/order/state',
	            param: {id: id},
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

/***/ },

/***/ 313:
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

/***/ }

});