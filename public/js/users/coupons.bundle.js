webpackJsonp([27],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(319);
	module.exports = __webpack_require__(7);


/***/ },

/***/ 319:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	    var utils = __webpack_require__(4);
	    var login = __webpack_require__(9);

	    $('.date').each(function(index,ele){
	        var $this = $(ele);
	        var timestamp = parseInt($this.html());
	        var time = utils.GetLoacalDateString(timestamp);
	        $this.html(time);
	    });

	    $('.add-coupon').on('click',function(){
	        addCoupon($(this));
	    });


	    $('.coupon-state .unuse').on('click',function(){
	        getCouponList($(this),'1');
	    });
	    $('.coupon-state .used').on('click',function(){
	        getCouponList($(this),'2');
	    });
	    $('.coupon-state .overdue').on('click',function(){
	        getCouponList($(this),'3');
	    });

	    function getCouponList($this,useState){
	        var param = {
	            pageSize: 100,
	            useState: useState,
	            pageIndex: 1
	        };
	        utils.SendAjax({
	            url: '/users/coupon/list',
	            param: param,
	            method: 'GET',
	            tipText: '获取优惠券',
	            callback: function (result) {
	                var data = result.data;
	                var tableArr = [];
	                if (data.length <= 0) {
	                    $('#coupon-table tbody').html('<tr class="text-center"><td colspan="5">暂无优惠券记录</td></tr>');
	                } else {
	                    for (var i = 0; i < data.length; i++) {
	                        tableArr.push(buildCouponTableTr(data[i]));
	                    }
	                    $('#coupon-table tbody').html(tableArr.join(''));
	                }
	                $('.coupon-state li.on').removeClass('on');
	                $this.addClass('on');
	            },
	            errorFun: function (result) {

	            }
	        });

	    }

	    function addCoupon($this) {
	        var inviteCode = $('#coupon-code').val().trim();
	        if(!inviteCode){
	            utils.ShowComfirmDialog({tipText:'请输入优惠码',noConfirmBtn:true});
	            return false;
	        }
	        $this.addClass('disabled').off('click');
	        utils.SendAjax({
	            url: '/users/coupon/addByInvite',
	            param: {inviteCode: inviteCode},
	            method: 'POST',
	            tipText: '添加优惠券',
	            callback: function (result) {
	                utils.ShowComfirmDialog({tipText:'领取成功!',noConfirmBtn:true});
	                $('#coupon-code').val('');
	                var tr = $(buildCouponTableTr(result.data));
	                $('#coupon-table tbody tr').eq(0).before(tr);
	                $('#coupon-table tbody tr.no-record').remove();

	                $this.removeClass('disabled').on('click', function () {
	                    addCoupon($this);
	                });
	            },
	            errorFun: function () {
	                $this.removeClass('disabled').on('click', function () {
	                    addCoupon($this);
	                });
	            }
	        });
	    }


	    function buildCouponTableTr(data) {
	        var trArr = [];
	        var enoughMoney;
	        var fitAreaArr = JSON.parse(data.fitArea);
	        var j;
	        var hospitalNameList = [];
	        var hospitalCodeList = [];
	        for (j = 0; j < fitAreaArr.length; j++) {
	            hospitalNameList.push(fitAreaArr[j].hospitalName);
	            hospitalCodeList.push(fitAreaArr[j].hospitalCode);
	        }

	        if (data.ftype == 'cash') {
	            enoughMoney = parseInt(data.enoughMoney);
	            trArr.push('<tr>');
	            trArr.push('<td>' + (parseFloat(data.faceValue) / 100).toFixed(2) + '元</td>');

	            if (enoughMoney == 0) {
	                trArr.push('<td>无门槛</td>');
	            } else {
	                trArr.push('<td>满' + (enoughMoney / 100).toFixed(2) + '元使用</td>');
	            }
	        } else if (data.ftype == 'discount') {
	            trArr.push('<tr>');
	            trArr.push('<td>' + data.discount + '折</td>');
	            trArr.push('<td>最多可抵' + (parseFloat(data.mostDeduction) / 100).toFixed(2) + '元</td>');
	        }

	        trArr.push('<td>限' + hospitalNameList.join('、') + '</td>');

	        trArr.push('<td >' + utils.GetLoacalDateString(data.beginTime) + ' 至 ' + utils.GetLoacalDateString(data.endTime) + '</td></tr>');

	        return trArr.join('');

	    }
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }

});