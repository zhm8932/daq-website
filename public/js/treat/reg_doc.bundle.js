webpackJsonp([24],{0:function(e,o,a){a(212),e.exports=a(7)},212:function(e,o,a){var t;t=function(e){function o(e){e.addClass("disabled").off("click"),l.CheckLogin(function(){var a=$("#scheduleId").val(),t={scheduleId:a};s.SendAjax({url:"/treats/reg/byDoc",param:t,method:"POST",tipText:"挂号",callback:function(e){var o=e.data.needPay;o?window.location.href="/treats/reg/topay?reservationId="+e.data.id:window.location.href="/users/register/list"},errorFun:function(a){e.removeClass("disabled").on("click",function(){o($(this))})}})})}function t(){var e=new s.Popup({msg:'<div class="box-header">完善信息<i class="icon close closePopup"></i></div><div class="box-body"><ul class="tip-box"><li>为了能正常使用预约挂号服务，请及时补充以下材料。</li><li>以下信息为预约时所需项，一经填写不可更改，提交前请检查核对。</li><li>绑定已有客户编号，您可在病例中心中查看历史报告。</li></ul><form name="accInfoForm"><ul class="info-box"><li><label><i class="text-stress">* </i>姓名</label><input name="name"/></li><li><label><i class="text-stress">* </i>性别</label><div id="gender" class="select-box none"><div class="selected"><span class="text"><span class="text-sec">请选择</span></span><i class="icon pull-down"></i></div><ul class="options"><li class="option" data-value="1">男</li><li class="option" data-value="2">女</li></ul></div></li><li><label><i class="text-stress">* </i>出生年月</label><input id="birthday" name="birthday" readonly/></li><li><label>绑定已有客户编码</label><input name="patientCode" placeholder="请输入已有客户编码"/></li><span class="prompt"><i class="icon"></i><em>客户编码有误</em></span></ul></form></div>',otherMsg:"confirm-btn",okText:"提交",isMore:!0,close:"closePopup",otherBox:"complete-dialog",width:"475",isHide:!1,closeFun:function(){window.location.href="/treat/regsource/list"},okCallback:function(){console.log("提交:",e),console.log("提交:",e.opts.okText),i(e)}})}function i(e){function o(){var t=$(".complete-dialog span.ok");t.addClass("disabled").off("click");var l=$("form[name=accInfoForm]").serialize()+"&gender="+c;console.log("param:",l),$.ajax({url:"/users/account/complete",type:"POST",data:l,dataType:"json",success:function(l){if(l.success){var n=new s.MsgShow({delayTime:2e3,title:'<i class="icon"></i>完善成功!',otherBox:"successBox"});e.closeCallback(),n.hideMsg(1e3)}else"1001"===l.serverCode?new s.Popup({msg:'<aside>该客户编号不存在,您可取消重新输入!<div class="text-stress">或继续保存拥有新的客户编号</div></aside>',otherMsg:"confirm-btn",isMore:!0,okOther:"noneOkBtn",isCancelBtn:!0,otherBox:"complete-reOk",okText:"继续保存",cancelFun:function(){},okCallback:function(){a.find("[name=patientCode]").val(""),o()}}):(a.find(".prompt em").html(l.msg),a.find(".prompt").show()),t.removeClass("disabled").on("click",function(){return i(t),!1})},error:function(e){"404"==e.status?a.find(".prompt em").html("页面丢失，请稍后再试"):"500"==e.status?a.find(".prompt em").html("系统忙，请稍后再试"):a.find(".prompt em").html("网络错误"),a.find(".prompt").show(),t.removeClass("disabled").on("click",function(){return i(t),!1})}})}console.log("检测编码:",e);var a=$(".complete-dialog"),t=a.find("[name=name]").val().trim(),l=a.find("[name=birthday]").val().trim(),n=a.find("[name=patientCode]").val().trim(),c=a.find("#gender .option.active").attr("data-value");if(!(t&&l&&c))return a.find(".prompt em").html("必输项不能为空"),a.find(".prompt").show(),!1;if(n)o();else{new s.Popup({msg:'<aside>如果你已有客户编号，请绑定已有的客户编号，未绑定将不能查看以前的就诊报告。<div class="text-stress">您也可继续添加拥有新的客户编号</div></aside>',otherMsg:"confirm-btn",isMore:!0,isCancelBtn:!0,okOther:"blankOkBtn",otherBox:"complete-reOk",okText:"继续保存",cancelFun:function(){},okCallback:function(){o()}})}}var s=a(4),l=a(9);a(10),a(11),$("#scheduleId-select .option").click(function(){var e=$(this);$("#scheduleId").val(e.data("value"));var a=parseFloat(e.data("cost"));$("#cost").html((a/100).toFixed(2)+"元");var t=$("#scheduleId-select");"first"==t.attr("data-load")&&(t.attr("data-load","non-first"),$("#commit-reg").removeClass("disabled").off("click").on("click",function(){o($(this))}))});var n=$("#hasBind").val();"true"!=n&&(s.browser.mobile?window.location.href="/users/account/info/":t({}),$("#birthday").daterangepicker({singleDatePicker:!0,showDropdowns:!0,autoUpdateInput:!1,locale:{format:"YYYY-MM-DD",daysOfWeek:["日","一","二","三","四","五","六"],monthNames:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]}},function(e,o,a){$("#birthday").val(e.format("YYYY-MM-DD"))}))}.call(o,a,o,e),!(void 0!==t&&(e.exports=t))}});