define(function(require,exports,module) {
    var utils = require('./libs/utils');
    // var TouchSlide = require('./libs/TouchSlide.1.1.source')
    var pathname = window.location.pathname;
    console.log(pathname);
    console.log(utils);

    if(!utils.mobile&&pathname=='/login'||$('.loginBox2').length){
        $('.topBar').css({'height':0,'overflow':'hidden'});
        $('.header').css({'margin':0});
    }
    var $topBarAside = $('.topBar_info aside');
    var loginHtml = '<a href="javascript:;" class="loginBtn">登录</a>';
    var logoutHtml = '<a href="/trade/order/list" class="logout">个人中心</a><i class="icon devidel"></i><a href="javascript:;" class="logoutBtn">退出</a>';

    var index = '';
    var $prompt = '';

    //显示登陆页面
    function showLogin(options) {
        var popup = new utils.Popup({
            msg:'<div class="slideLogin"><div class="tit"><span class="on">密码登录</span><span>验证码登录</span></div>' +
            '<div class="touchslider-viewport"><div class="bd"> ' +
            '<ul><li><input type="text" class="username" placeholder="请输入手机号码" value="13689557622"></li><li><input type="password" class="password" placeholder="请输入密码" value="zhm123456"><span class="prompt"><i class="icon"></i><em>手机输入格式有误/验证码有误</em></span></li></ul>' +
            '<ul style="float: left"><li><input type="text" class="username" placeholder="请输入手机号码"></li><li><input type="text" class="password" placeholder="请输入短信验证码"><button class="getCode">获取短信验证码</button><span class="prompt"><i class="icon"></i><em>手机输入格式有误/验证码有误</em></span></li></ul>' +
            '</div></div></div>',
            otherMsg:'手机号码用来获取预约码和报告服务码',
            bOhterMsg:true,
            callback:function () {
                //TouchSlide({ slideCell:"#slideLogin",titCell:".tit span", mainCell:".bd"});
                $(".slideLogin").touchSlider({
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
            isHide:false,
            okCallback:function(){
                var data = validateLogin();
                // console.log('data::',data);
                if(data){
                    if(options && options.afterLoginFun){
                        login(data,popup,'',options.afterLoginFun);
                    }else{
                        login(data,popup,'',null);
                    }
                }
            }
        })
    }

    //获取短信验证码
    $('body').on('click','.getCode',function () {
        // var $loginWrap = $('.loginBox,.loginBox2')
        $loginWrap = getLoginWrap();
        var data = getLoginData();
        var $self = $(this);
        console.log("data:",data);
        if(!data.account){
            console.log('输入手机号');
            $prompt.show().find('em').html('手机号码不能为空');
            return
        }
        if(data.account && !utils.check_tel(data.account)){
            $prompt.show().find('em').html('手机号码不正确');
            return
        }
        if(data&&data.account){
            getVerCode($self,60)

        }


    });
    function getLoginWrap() {
         var $loginWrap = $('.loginBox,.loginBox2');
        return $loginWrap
    }
    // var $loginWrap = $('.loginBox,.loginBox2');
    //获取登陆数据
    function getLoginData() {
        $loginWrap = getLoginWrap();
        index = $loginWrap.find('.tit span.on').index();
        $prompt = $loginWrap.find('ul').eq(index).find('.prompt');
        console.log('index::',index);
        var data = {
            "password":$loginWrap.find('ul').eq(index).find(".password").val(),
            "account":$loginWrap.find('ul').eq(index).find(".username").val(),
            "loginType":1
        }
        // console.log('data::',data)
        return data
    }
    //登陆数据验证
    function validateLogin() {
        var data = getLoginData();
        var requestData = {};
        // console.log('data::',data)
        if(index==0){
            // console.log('密码')
            requestData.loginType=1;
            if(!data.account){
                $prompt.show().find('em').html('手机号码不能为空');
                return
            }else if(data.account && !utils.check_tel(data.account)){
                $prompt.show().find('em').html('手机号码不正确');
                return
            }
            if(!data.password){
                $prompt.show().find('em').html('密码不能为空');
                return
            }
            requestData.password =data.password;
        }
        if(index==1){
            // console.log('验证码',data.account,utils.check_tel(data.account))
            requestData.loginType=2;
            if(!data.account){
                $prompt.show().find('em').html('手机号码不能为空');
                return
            }else if(data.account && !utils.check_tel(data.account)){
                // console.log("手机号码：",utils.check_tel(data.account));
                $prompt.show().find('em').html('手机号码不正确');
                return
            }
            if(!data.password){
                $prompt.show().find('em').html('验证码不能为空');
                return
            }
            requestData.verCode=data.password;

        }

        requestData.account =data.account;
        // console.log("requestData:",requestData)
        return requestData;
    }
    //获取短信验证码
    function getVerCode($self,time) {
        var data = getLoginData();
        var requestData = {
            "mobile":data.account,
            "domain":"DAQ-WEB-LOGIN"
            // "deviceUid":""
        };
        $.ajax({
            type:'post',
            url:'/getVerCode',
            data:requestData,
            success:function(json){
                console.log(json);
                var json = JSON.parse(json);
                if(json.success){
                    // console.log('验证码获取成功')
                    timer($self,time)
                }else{
                    // console.log(json.msg)
                    $prompt.show().find('em').html(json.msg)
                }
            }
        })
    }
    //定时器
    function timer($self,time) {
        $self.addClass("disable").attr('disabled',true);
        var t=setInterval(function  () {
            time--;
            $self.html(time+"秒后可重新获取");
            if (time==0) {
                clearInterval(t);
                $self.html("重新获取");
                validCode=true;
                $self.removeClass("disable").attr('disabled',false);

            }
        },1000)
    }
    //redirectUrl用于同步登录后继续跳转,afterLoginFun用于异步登录后继续执行
    //登陆
    function login(data,popup,redirectUrl,afterLoginFun) {
        $loginWrap = $('.loginBox,.loginBox2');
        var index = $loginWrap.find('.tit span.on').index();
        $prompt = $loginWrap.find('ul').eq(index).find('.prompt');
        $.ajax({
            type:'post',
            url:'/login',
            data:data,
            success:function(json){
                var json = JSON.parse(json);
                if(json.success){
                    var myMsg = new utils.MsgShow({
                        delayTime:2000,
                        title:'<i class="icon"></i>登录成功!',
                        otherBox:'successBox'
                    });
                    if(popup){
                        popup.hideBox(function () {
                            $topBarAside.html(logoutHtml);
                            afterLoginFun && afterLoginFun();
                        });
                    }else if(redirectUrl){
                        window.location.href = redirectUrl;
                    }
                    myMsg.hideMsg(1000);

                }else{
                    // console.log('登录失败')
                    // console.log($prompt.html())
                    // $('.loginBox2 .prompt').show()
                    $prompt.show().find('em').html(json.msg)
                }


            }
        })
    }

    //退出登陆
    function logout() {
        $.ajax({
            type:'post',
            url:'/logout',
            //data:data,
            success:function(json){
                // console.log(json)
                var json = JSON.parse(json);
                if(json.success){
                    $topBarAside.html(loginHtml);
                }
            }
        })
    }

    $('body').on('click','.loginBtn',function () {
        showLogin()
    })
    $('body').on('click','.logoutBtn',function () {
        logout()
    });

    $('body').on('click keyup keydown change','.username,.password',function () {
        var $loginWrap = getLoginWrap();
        var index =$loginWrap.find('.tit span.on').index();
        $loginWrap.find('ul').eq(index).find('.prompt').hide()
    })

    $(".loginBox2").touchSlider({
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

    $('body').on('click','.loginBox2 .ok',function () {
        var data = validateLogin();
        var redirectUrl = $('#redirectUrl').val();
        if(data) login(data,null,redirectUrl);
    })

});