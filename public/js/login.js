define(function(require,exports,module) {
    var utils = require('./libs/utils')
    var TouchSlide = require('./libs/TouchSlide.1.1.source')
    // require('./libs/jquery.touchslider')
    // require('touchslider')
    // console.log(TouchSlide)
    // var $topBarAside = $('.topBar_info aside')
    // var loginHtml = '<a href="javascript:;" class="loginBtn">登录</a>'
    // var logoutHtml = '<a href="/users/orders" class="logout">个人中心</a><i class="icon devidel"></i><a href="javascript:;" class="logoutBtn">退出</a>';
    //
    // var index = '';
    //
    // function login(data,popup,index) {
    //     var index = $('.popupBox article .tit span.on').index()
    //     var $prompt = $('.popupBox article').find('ul').eq(index).find('.prompt')
    //     $.ajax({
    //         type:'post',
    //         url:'/login',
    //         data:data,
    //         success:function(json){
    //             console.log(json)
    //             //var json = JSON.parse(json)
    //             console.log(typeof json)
    //             if(json.success){
    //                 var myMsg = new utils.MsgShow({
    //                     delayTime:2000,
    //                     title:'<i class="icon"></i>登录成功!',
    //                     otherBox:'successBox'
    //                 })
    //
    //                 popup.hideBox(function () {
    //                     $('.msgBox').hide()
    //                     $topBarAside.html(logoutHtml)
    //                 });
    //             }else{
    //                 // var myMsg = new utils.MsgShow({
    //                 //     delayTime:2000,
    //                 //     title:json.msg
    //                 // }).hideMsg()
    //                 $prompt.show().find('em').html(json.msg)
    //             }
    //
    //
    //         }
    //     })
    // }
    // function logout() {
    //     $.ajax({
    //         type:'post',
    //         url:'/logout',
    //         //data:data,
    //         success:function(json){
    //             console.log(json)
    //             if(json.success){
    //                 $topBarAside.html(loginHtml)
    //             }
    //         }
    //     })
    // }
    // function showLogin() {
    //     var popup = new utils.Popup({
    //         msg:'<div id="slideLogin"><div class="tit"><span class="on">密码登录</span><span>验证码登录</span></div>' +
    //         '<div class="touchslider-viewport"><div class="bd"> ' +
    //         '<ul><li><input type="text" class="username" placeholder="请输入手机号码" value="13689557622"></li><li><input type="password" class="password" placeholder="请输入密码" value="zhm123456"><span class="prompt"><i class="icon"></i><em>手机输入格式有误/验证码有误</em></span></li></ul>' +
    //         '<ul><li><input type="text" class="username" placeholder="请输入手机号码"></li><li><input type="text" class="code" placeholder="请输入短信验证码"><span class="getCode">获取短信验证码</span><span class="prompt"><i class="icon"></i><em>手机输入格式有误/验证码有误</em></span></li></ul>' +
    //         '</div></div></div>',
    //         otherMsg:'手机号码用来获取预约码和报告服务码',
    //         bOhterMsg:true,
    //         callback:function () {
    //             //TouchSlide({ slideCell:"#slideLogin",titCell:".tit span", mainCell:".bd"});
    //
    //             $("#slideLogin").touchSlider({
    //                 container: this,
    //                 duration: 350, // 动画速度
    //                 delay: 3000, // 动画时间间隔
    //                 margin: 5,
    //                 mouseTouch: true,
    //                 namespace: "touchslider",
    //                 next: ".touchslider-next", // next 样式指定
    //                 pagination: ".tit span",
    //                 currentClass: "on", // current 样式指定
    //                 prev: ".touchslider-prev", // prev 样式指定
    //                 // scroller: viewport.children(),
    //                 autoplay: false, // 自动播放
    //                 viewport: ".touchslider-viewport"  //内容区域
    //             });
    //
    //
    //         },
    //         okText:'登录',
    //         width:'360',
    //         otherBox:'loginBox',
    //         isHide:false,
    //         okCallback:function(){
    //             console.log('222222')
    //             var data = {
    //                 "password":$(".password").val(),
    //                 "account":$(".username").val()
    //             }
    //             index = $('.popupBox article .tit span.on').index()
    //             console.log('index::',index)
    //             login(data,popup,index)
    //         }
    //     })
    //
    // }


    $('body').on('click','.loginBtn',function () {
        utils.showLogin()
    })
    $('body').on('click','.logoutBtn',function () {
        utils.logout()
    })

    $('body').on('click keyup keydown change','.username,.password',function () {
        var index = $('.popupBox article .tit span.on').index()
        $('.popupBox article').find('ul').eq(index).find('.prompt').hide()
    })

})