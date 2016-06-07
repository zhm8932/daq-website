define(function (require, exports, module) {
    var utils = require('../libs/utils.js');

    $(function(){
        $('.add-patient').on('click',function(){
            showDialog();
        });
    });


    var index = '';
    var $prompt = '';
    function showDialog(options) {
        var popup = new utils.Popup({
            msg:'<div id="add-patient-dialog" class="add-patient-dialog text-sec"> <div class="dialog-header">添加就诊人</div> <div class="dialog-body">'+
            '<form><ul><li><label>就诊人姓名</label><input/> </li> <li><label>就诊人姓名</label> <input/></li> <li><label>就诊人姓名</label> <select/></li>'+
            '<li><span class="prompt"><i class="icon"></i><em>手机输入格式有误/验证码有误</em></span> </li><li> <button class="submitBtn">确认提交</button></li></ul></form> </div></div>',
            otherMsg:'',
            // popupBox:'add-box',
            // okText:'保存并新增',
            bOhterMsg:true,
            callback:function () {
                //TouchSlide({ slideCell:"#slideLogin",titCell:".tit span", mainCell:".bd"});
                $("#slideLogin").touchSlider({
                    container: this,
                    duration: 350, // 动画速度
                    delay: 3000, // 动画时间间隔
                    margin: 5,
                    mouseTouch: true,
                    namespace: "touchslider",
                    next: ".touchslider-next", // next 样式指定
                    pagination: ".tit span",
                    currentClass: "on", // current 样式指定
                    prev: ".touchslider-prev", // prev 样式指定
                    // scroller: viewport.children(),
                    autoplay: false, // 自动播放
                    viewport: ".touchslider-viewport"  //内容区域
                });
            },
            okText:'登录',
            width:'475',
            otherBox:'loginBox',
            isHide:false,
            okCallback:function(){
                index = $('.popupBox article .tit span.on').index();
                $prompt = $('.popupBox article').find('ul').eq(index).find('.prompt');
                console.log('index::',index)
                var data = {
                    "password":$('.popupBox article .bd ul').eq(index).find(".password").val(),
                    "account":$('.popupBox article .bd ul').eq(index).find(".username").val(),
                    "loginType":1
                };

                if(index==0){
                    if(!data.account){
                        $prompt.show().find('em').html('手机号码不能为空');
                        return
                    }
                    if(!data.password){
                        $prompt.show().find('em').html('密码不能为空');
                        return
                    }
                }
                if(index==1){
                    data.loginType=2
                    if(!data.account){
                        $prompt.show().find('em').html('手机号码不能为空');
                        return
                    }
                    if(!data.password){
                        $prompt.show().find('em').html('验证码不能为空');
                        return
                    }
                }

                console.log('data::',data);
                // login(data,popup,index,options)
            }
        })

    }

});