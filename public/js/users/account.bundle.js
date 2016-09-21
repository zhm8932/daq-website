webpackJsonp([26],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(215);
	module.exports = __webpack_require__(7);


/***/ },

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require, exports, module) {
	    var utils = __webpack_require__(4);
	    __webpack_require__(10);
	    __webpack_require__(11);

	    $(function () {
	        var hasBind = $('#hasBind').val();
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

	        $('#complete-acc').on('click',function(){
	            completeInfo($(this));
	            return false;
	        });

	    });


	    function completeInfo($this){
	        var form = $('form[name=accInfoForm]');
	        var name = form.find('[name=name]').val().trim();
	        var birthday = form.find('[name=birthday]').val().trim();
	        var patientCode = form.find('[name=patientCode]').val().trim();
	        var gender = form.find('#gender .option.active').attr('data-value');
	        if(!(name && birthday && gender)){
	            form.find('.prompt em').html('必输项不能为空');
	            form.find('.prompt').show();
	            return false;
	        }
	        if(!patientCode){
	            utils.ShowComfirmDialog({
	                tipText:'如果你已有客户编号，请绑定已有的客户编号，未绑定将不能查看以前的就诊报告。<div class="text-stress">您也可继续添加拥有新的客户编号</div>',
	                okCallback:function(){
	                    commitInfo();
	                }
	            });
	        }else{
	            commitInfo();
	        }

	        function commitInfo(){
	            $this.addClass('disabled').off('click');
	            var param = {
	                name:name,
	                birthday:birthday,
	                gender:gender,
	                patientCode:form.find('[name=patientCode]').val().trim()
	            };
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
	                        myMsg.hideMsg(1000);
	                        window.location.reload();
	                    } else {
	                        if(result.serverCode === '1001') {
	                            utils.ShowComfirmDialog({
	                                tipText:'该客户编号不存在,您可取消重新输入!<div class="text-stress">您也可继续添加拥有新的客户编号</div>',
	                                okCallback:function(){
	                                    form.find('[name=patientCode]').val('');
	                                    commitInfo();
	                                }
	                            });
	                        }else{
	                            form.find('.prompt em').html(result.msg);
	                            form.find('.prompt').show();
	                        }
	                        $this.removeClass('disabled').on('click', function () {
	                            completeInfo($this);
	                            return false;
	                        });
	                    }
	                },
	                error:function(data){
	                    if (data.status == '404') {
	                        form.find('.prompt em').html('页面丢失，请稍后再试');
	                    } else if (data.status == '500') {
	                        form.find('.prompt em').html('系统忙，请稍后再试');
	                    } else {
	                        form.find('.prompt em').html('网络错误');
	                    }
	                    form.find('.prompt').show();
	                    $this.removeClass('disabled').on('click', function () {
	                        completeInfo($this);
	                        return false;
	                    });
	                }
	            });
	        }

	    }

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }

});