webpackJsonp([51,62],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	    var utils = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../libs/utils.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	    var login = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../login\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	    queryOrderState(function(result) {
	        //订单状态,UNPAID(1,"未支付"),PAID(2,"已支付"),CANCELED(3,"已取消"),REFUNDING(4,"退款中"),REFUND(5,"已退款")
	        var orderState = result.data.orderState;
	        if (orderState != 1) {
	            window.location.href = '/screenings/goods';
	        }
	    });



	    var timer = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../libs/timer.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	    var href = window.location.href;
	    var domain = href.substr(0,href.indexOf('/',href.indexOf('/',href.indexOf('/')+1)+1));
	    console.log(domain);
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
	        console.log(domain);
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
	            '<div class="right-box"><img src="/images/wxsm_img.png"/></div><div>',
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

/***/ }
]);