define(function(require,exports,module) {
    var utils = require('./libs/utils');
    require("moment");
    require("daterangepicker");
    require('cookie');
    // var TouchSlide = require('./libs/TouchSlide.1.1.source')
    var pathname = window.location.pathname;
    var $body = $('body');

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
                        // login(data,popup,'',options.afterLoginFun);
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
                    getCartCount();
                    var myMsg = new utils.MsgShow({
                        delayTime:2000,
                        title:'<i class="icon"></i>登录成功!',
                        otherBox:'successBox'
                    });
                    if(popup){
                        popup.hideBox(function () {
                            $topBarAside.html(logoutHtml);
                            var userAllInfo = json.data.userAllInfo
                            afterLoginFun && afterLoginFun(userAllInfo);

                        });
                    }else if(redirectUrl){
                        window.location.href = redirectUrl;
                    }
                    myMsg.hideMsg(1000);

                }else{
                    // console.log('登录失败')
                    $prompt.show().find('em').html(json.msg)
                }


            }
        })
    }
    var loginRequiredArr = ['/trade/order','/trade/cart/list','/treats/reg/','/users/'];

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
                    $cartNum.html('(0)');
                    loginRequiredArr.forEach(function (item) {
                        if(pathname.search(item)!=-1){
                            console.log('页面跳转');
                            window.location.href='/';
                        }else{
                            $topBarAside.html(loginHtml);
                        }
                    })

                }
            }
        })
    }
    //检查信息完善 hasBindHis
    function hasBindHis(obj) {
        $.ajax({
            type:'post',
            url:'/hasBindHis',
            data:{
                accountId:obj.accountId,
                send:true
            },
            success:function(json){
                console.log(json);
                obj.callback&&obj.callback(json)
            }

        })
    }

    $('body').on('click','.loginBtn',function () {
        showLogin({
            afterLoginFun:function (userAllInfo) {
                hasBindHis({
                    accountId:userAllInfo.accountCommon.id,
                    callback:function (json) {
                        var json=JSON.parse(json);
                        if(json.success){
                            if(!json.data){
                                showAccountDialog();
                                utils.BuildSelect($('#gender'));
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
                            }else{
                                // console.log("用户信息已完善")
                            }

                        }

                    }

                })

            }
        })
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
        var redirectUrl = $('#redirectUrl').val()||'/';
        if(data) login(data,null,redirectUrl);
    })
    //检查登录:已经登录则继续执行callback,没有登录则把callback传到登录函数中去,登录后继续执行
    function checkLogin(callBack){
        utils.SendAjax({
            url: '/checkLogin',
            param: {},
            method: 'GET',
            tipText: '检查是否登录',
            callback: function (result) {
                if(!result.login){
                    showLogin({
                        afterLoginFun:callBack
                    });
                    return false;
                }else{
                    callBack && callBack();
                }
            }
        });
    }


    function showAccountDialog() {
        var popup = new utils.Popup({
            msg: '<div class="box-header">完善信息<i class="icon close closePopup"></i></div><div class="box-body">' +
            '<ul class="tip-box"><li>为了能正常使用预约挂号服务,请及时补充以下材料。</li><li>以下信息为预约时所需项,一经填写不可更改,提交前请检查核对。</li><li>绑定已有客户编号,您可在病例中心中查看历史报告。</li></ul>' +
            '<form name="accInfoForm"><ul class="info-box"><li><label><i class="text-stress">* </i>姓名</label><input name="name"/></li>'+
            '<li><label><i class="text-stress">* </i>性别</label><div id="gender" class="select-box none"><div class="selected"><span class="text"><span class="text-sec">请选择</span></span><i class="icon pull-down"></i></div>'+
            '<ul class="options"><li class="option" data-value="1">男</li><li class="option" data-value="2">女</li></ul></div></li>'+
            '<li><label><i class="text-stress">* </i>出生年月</label><input id="birthday" name="birthday" readonly/></li><li><label></label><input name="patientCode" placeholder="请输入已有客户编码"/></li><span class="prompt"><i class="icon"></i><em>客户编码有误</em></span>' +
            '</ul></form></div>',
            otherMsg: 'confirm-btn',
            popupBox: 'popupBox',
            okText: '提交',
            cancel: 'closePopup',
            otherBox: 'complete-dialog',
            width: '475',
            isHide:false,
            cancelFun: function () {
                //window.location.href = "/treat/regsource/list";
            },
            okCallback: function () {
                console.log("提交用户完善信息")
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
                console.log("result:",result);
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
    var $cartNum = $('.cartNum');
    //获取购物车数量
    function getCartCount(accountId) {
        $.ajax({
            type:'get',
            url:'/trade/cart/GetCartCount',
            // data:data,
            success:function(json){
                var json = JSON.parse(json);
                console.log(json);
                if(json.success){
                    var cartCout = json.data.length||'0';
                    $cartNum.html('('+cartCout+')')
                }

            }
        })
    }


    module.exports={
        showLogin:showLogin,
        CheckLogin:checkLogin,
        getCartCount:getCartCount
    }

});