webpackJsonp([17],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(34);
	module.exports = __webpack_require__(7);


/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	    console.log('进入了');
	    var utils = __webpack_require__(4);
	    console.log('引入1');
	    var login = __webpack_require__(9);
	    console.log('引入2');
	    __webpack_require__(10);
	    console.log('引入3');
	    __webpack_require__(12);

	    console.log('DOM加载完成执行了');
	    $('#scheduleId-select .option').click(function () {
	        var $this = $(this);
	        $('#scheduleId').val($this.data('value'));
	        var cost = parseFloat($this.data('cost'));
	        $('#cost').html((cost / 100).toFixed(2) + '元');
	        var scheduleSelect = $("#scheduleId-select");
	        if(scheduleSelect.attr('data-load') == 'first'){
	            scheduleSelect.attr('data-load','non-first');
	            $('#commit-reg').removeClass('disabled').off('click').on('click', function () {
	                commitReg($(this));
	            });
	        }
	    });

	    var hasBind = $('#hasBind').val();
	    if (hasBind != 'true') {
	        showAccountDialog({});
	        // utils.BuildSelect($('#gender'));

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

	        // completeDialog.find('input').on('blur',function(){
	        //     validateInput(completeDialog);
	        // });
	        // completeDialog.find('#gender .option').on('click',function(){
	        //     validateInput(completeDialog);
	        // })


	    }




	    // function validateInput(completeDialog){
	    //     var name = completeDialog.find('[name=name]').val().trim();
	    //     var birthday = completeDialog.find('[name=birthday]').val().trim();
	    //     var gender = completeDialog.find('#gender .option.active').attr('data-value');
	    //     if(name && birthday && gender){
	    //         completeDialog.find('span.ok').removeClass('disabled');
	    //     }
	    // }

	    function commitReg($this) {
	        $this.addClass('disabled').off('click');
	        login.CheckLogin(function () {
	            var scheduleId = $('#scheduleId').val();
	            var param = {scheduleId:scheduleId};
	            utils.SendAjax({
	                url: '/treats/reg/byDoc',
	                param: param,
	                method: 'POST',
	                tipText: '挂号',
	                callback: function (result) {
	                    var needPay = $('#needPay').val();
	                    var json = result.data.tradeDTO;
	                    if (needPay != 'true' || json.amount <= 0) {
	                        window.location.href = "/users/register/list";
	                    }else{
	                        window.location.href = "/treats/reg/topay?id="+json.id+'&cost='+json.amount+'&orderId='+result.data.id;
	                    }
	                },
	                errorFun: function (result) {
	                    $this.removeClass('disabled').on('click', function () {
	                        commitReg($(this));
	                    });
	                }
	            });
	        });
	    }

	    function showAccountDialog() {
	        var popup = new utils.Popup({
	            msg: '<div class="box-header">完善信息<i class="icon close closePopup"></i></div><div class="box-body">' +
	            '<ul class="tip-box"><li>为了能正常使用预约挂号服务,请及时补充以下材料。</li><li>以下信息为预约时所需项,一经填写不可更改,提交前请检查核对。</li><li>绑定已有客户编号,您可在病例中心中查看历史报告。</li></ul>' +
	            '<form name="accInfoForm"><ul class="info-box"><li><label><i class="text-stress">* </i>姓名</label><input name="name"/></li>'+
	            '<li><label><i class="text-stress">* </i>性别</label><div id="gender" class="select-box none"><div class="selected"><span class="text"><span class="text-sec">请选择</span></span><i class="icon pull-down"></i></div>'+
	            '<ul class="options"><li class="option" data-value="1">男</li><li class="option" data-value="2">女</li></ul></div></li>'+
	            '<li><label><i class="text-stress">* </i>出生年月</label><input id="birthday" name="birthday" readonly/></li><li><label>绑定已有客户编码</label><input name="patientCode" placeholder="请输入已有客户编码"/></li><span class="prompt"><i class="icon"></i><em>客户编码有误</em></span>' +
	            '</ul></form></div>',
	            otherMsg: 'confirm-btn',
	            popupBox: 'popupBox',
	            okText: '提交',
	            cancel: 'closePopup',
	            otherBox: 'complete-dialog',
	            width: '475',
	            isHide:false,
	            cancelFun: function () {
	                window.location.href = "/treat/regsource/list";
	            },
	            okCallback: function () {
	                completeInfo(popup);
	            }
	        })
	    }


	    function completeInfo(popup){
	        var completeDialog = $('.complete-dialog');
	        var name = completeDialog.find('[name=name]').val().trim();
	        var birthday = completeDialog.find('[name=birthday]').val().trim();
	        var gender = completeDialog.find('#gender .option.active').attr('data-value');
	        if(!(name && birthday && gender)){
	            completeDialog.find('.prompt em').html('必输项不能为空');
	            completeDialog.find('.prompt').show();
	            return false;
	        }

	        var $this = $('.complete-dialog span.ok');
	        $this.addClass('disabled').off('click');
	        var param = $('form[name=accInfoForm]').serialize()+'&gender='+gender;
	        utils.SendAjax({
	            url: '/users/account/complete',
	            param: param,
	            method: 'POST',
	            tipText: '完善信息',
	            callback: function (result) {
	                var myMsg = new utils.MsgShow({
	                    delayTime: 2000,
	                    title: '<i class="icon"></i>完善成功!',
	                    otherBox: 'successBox'
	                });
	                popup.hideBox();
	                myMsg.hideMsg(1000);
	            },
	            errorFun: function (result) {
	                if(result.data){
	                    completeDialog.find('.prompt em').html('客户编码有误');
	                    completeDialog.find('.prompt').show();
	                }
	                $this.removeClass('disabled').on('click', function () {
	                    completeInfo(popup);
	                });
	            }
	        });
	    }

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }

});