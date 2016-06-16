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
            msg:'<div id="add-patient-dialog" class="add-patient-dialog text-sec"><div class="dialog-header">添加就诊人</div><div class="dialog-body">'+
            '<form><ul><li><label>就诊人姓名</label><input/></li><li><label>就诊人姓名</label><input/></li><li><label>就诊人姓名</label><select/></li>'+
            '<li><span class="prompt"><i class="icon"></i><em>手机输入格式有误/验证码有误</em></span></li></ul></form></div></div>',
            otherMsg:'',
            popupBox:'add-patient-box',
            okText:'保存并新增',
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
            width:'492',
            otherBox:'loginBox',
            isHide:false,
            okCallback:function(){

            }
        })

    }

});