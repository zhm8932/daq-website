webpackJsonp([24],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(316);
	module.exports = __webpack_require__(7);


/***/ },

/***/ 316:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require){
	    var utils = __webpack_require__(4);
	    var login = __webpack_require__(9);
	    __webpack_require__(10);
	    __webpack_require__(114);

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
	        if(utils.browser.mobile){
	            window.location.href = "/users/account/info/";
	        }else{
	            showAccountDialog({});
	        }
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
	                    var needPay =result.data.needPay;
	                    if (!needPay) {
	                        window.location.href = "/users/register/list";
	                    }else{
	                        window.location.href = "/treats/reg/topay?reservationId="+result.data.id;
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
	        $.ajax({
	            url:'/users/account/complete',
	            type:'POST',
	            data:param,
	            dataType:'json',
	            success:function(result){
	                if (result.success) {
	                    var myMsg = new utils.MsgShow({
	                        delayTime: 2000,
	                        title: '<i class="icon"></i>完善成功!',
	                        otherBox: 'successBox'
	                    });
	                    popup.hideBox();
	                    myMsg.hideMsg(1000);
	                } else {
	                    completeDialog.find('.prompt em').html(result.msg);
	                    completeDialog.find('.prompt').show();
	                    $this.removeClass('disabled').on('click', function () {
	                        completeInfo($this);
	                        return false;
	                    });
	                }
	            },
	            error:function(data){
	                if (data.status == '404') {
	                    completeDialog.find('.prompt em').html('页面丢失，请稍后再试');
	                } else if (data.status == '500') {
	                    completeDialog.find('.prompt em').html('系统忙，请稍后再试');
	                } else {
	                    completeDialog.find('.prompt em').html('网络错误');
	                }
	                completeDialog.find('.prompt').show();
	                $this.removeClass('disabled').on('click', function () {
	                    completeInfo($this);
	                    return false;
	                });
	            }
	        });
	    }

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }

});