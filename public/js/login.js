define(function(require,exports,module) {
    var utils = require('./libs/utils')
    var TouchSlide = require('./libs/TouchSlide.1.1.source')
    // require('./libs/jquery.touchslider')
    require('touchslider')
    console.log('登录页')
    // console.log(TouchSlide)
    console.log(utils)
    console.log($())

    function login() {





        $('.loginBtn').click(function () {
            console.log($(this).html())
            var popup = new utils.Popup({
                msg:'<div id="slideLogin"><div class="tit"><span class="on">密码登录</span><span>验证码登录</span></div>' +
                '<div class="touchslider-viewport"><div class="bd"> ' +
                '<ul><li><input type="text" placeholder="请输入手机号码"></li><li><input type="text" placeholder="请输入密码"><em class="prompt"><i class="icon"></i>手机输入格式有误/验证码有误</em></li></ul>' +
                '<ul><li><input type="text" placeholder="请输入手机号码"></li><li><input type="text" placeholder="请输入短信验证码"><span class="getCode">获取短信验证码</span><em class="prompt"><i class="icon"></i>手机输入格式有误/验证码有误</em></li></ul>' +
                '</div></div></div>',
                otherMsg:'手机号码用来获取预约码和报告服务码',
                bOhterMsg:true,
                callback:function () {
                    console.log('数据插入了吗')
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
                width:'360',
                otherBox:'loginBox',
                okCallback:function(){


                }
            })



            // var slideTab = $('.innerBg .bd').swipeSlide({
            //     continuousScroll:true,
            //     autoSwipe : false,
            //     lazyLoad : true,
            //     callback : function(i){
            //         console.log(i)
            //         $('.innerBg .tit span').eq(1).addClass('on').siblings().removeClass('on');
            //     }
            // });
            //
            // $('body').on('click','.tit span',function(i){
            //     console.log('999999')
            //     slideTab.goTo($(this).index());
            // });
            // $('.innerBg .btn_left').on('click',function(i){
            //     slideTab.goTo('prev');
            // });
            // $('.innerBg .btn_right').on('click',function(i){
            //     slideTab.goTo('next');
            // });








        })
    }
    login()
})