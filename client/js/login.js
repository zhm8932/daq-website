define(function(require,exports,module) {
    var utils = require('./libs/utils');
    require("moment");
    require("daterangepicker");
    require('cookie');

    // var TouchSlide = require('./libs/TouchSlide.1.1.source')
    var pathname = window.location.pathname;
    var $body = $('body');

    if(!utils.mobile&&(pathname=='/login'||pathname=='/register'||pathname=='/rPassword')||$('.loginBox2').length){
        $('.topBar').css({'height':0,'overflow':'hidden'});
        $('.header').css({'margin':0});
    }
    var $topBarAside = $('.topBar_info aside');
    var loginHtml = '<a href="javascript:;" class="loginBtn">登录</a>';
    var logoutHtml = '<a href="/trade/order/list" class="logout">个人中心</a><i class="icon devidel"></i><a href="javascript:;" class="logoutBtn">退出</a>';

    var index = '';
    var $prompt = '';




    //获取短信验证码
    $('body').on('click','.getCode',function () {
        // var $loginWrap = $('.loginBox,.loginBox2')
        $loginWrap = getLoginWrap();
        var data = getLoginData();
        var $self = $(this);
        //console.log("data:",data);
        if(!data.account){
            //console.log('输入手机号');
            $prompt.show().find('em').html('手机号码不能为空');
            return
        }
        if(data.account && !utils.check_tel(data.account)){
            $prompt.show().find('em').html('手机号码不正确');
            return
        }
        var domain = 'DAQ-WEB-LOGIN';
        var $parents = $self.parents('.loginCom,.loginPopupCom');

        if($parents.hasClass('registerBox')){
            // console.log("这里是注册")
            domain ='DAQ-REG';
        }else if($parents.hasClass('loginBox2')){
            // console.log("这里是验证码登录")
            domain ='DAQ-WEB-LOGIN';
        }else if($parents.hasClass('rPasswordBox')){
            // console.log("这里是重置密码")
            domain ='DAQ-FINDPWD';
        }


        if(data&&data.account){
            //console.log("data::",data)
            getVerCode({   //获取验证码
                $self:$self,
                time:60,
                domain:domain    //都安全注册 DAQ-REG  都安全找回密码:DAQ-FINDPWD  都安全官网手机号验证码登录:DAQ-WEB-LOGIN
            })

        }


    });
    function getLoginWrap() {
         var $loginWrap = $('.loginBox,.loginBox2,.registerBox,.rPasswordBox');
        return $loginWrap
    }

    $('body').on('click','.loginBox .tit span,.loginBox2 .tit span',function () {
        var $loginWrap = getLoginWrap();
        var index = $loginWrap.find('.tit span.on').index();
        // var $ok = $loginWrap.find('.submitBox .ok');
        // if($loginWrap.find('ul').eq(index).find('.checkbox').hasClass('checked')){
        //     $ok.removeClass('disabled').attr('disabled',false)
        // }else{
        //     $ok.addClass('disabled').attr('disabled',true)
        // }
    })
    $('body').on('click','ul p',function () {
        var $loginWrap = getLoginWrap();
        var $ok = $loginWrap.find('.submitBox .ok');
        var $self = $(this);
        var index = $loginWrap.find('.tit span.on').index();
        var $checkbox = $loginWrap.find('ul').eq(index).find('.checkbox')
        $checkbox.toggleClass('checked');
        if($checkbox.hasClass('checked')){
            $ok.removeClass('disabled').attr('disabled',false)
        }else{
            $ok.addClass('disabled').attr('disabled',true)
        }
    })

    // var $loginWrap = $('.loginBox,.loginBox2');



    $('body').on('click','.loginBtn',function () {
        showLogin({
            afterLoginFun:function (userAllInfo) {
                hasBindHis({
                    accountId:userAllInfo.accountCommon.id,
                    callback:function (json) {
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
                                // //console.log("用户信息已完善")
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

    $('body').on('click','.registerBtn',function () {
        showRegister()
    });
    $('body').on('click','.rPasswordBtn',function () {
        showRPassword()
    });


    $('body').on('click keyup keydown change','.username,.password,.verCode',function () {
        var $loginWrap = getLoginWrap();
        var index =$loginWrap.find('.tit span.on').index();
        $loginWrap.find('ul').eq(index).find('.prompt').hide()
    })

    if($(".loginBox2").length){
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

    }

    $('body').on('click','.loginBox2 .ok',function () {
        var data = validateLogin();
        console.log("data:",data)
        var redirectUrl = $('#redirectUrl').val()||'/';
        if(data) login(data,null,redirectUrl,function (userAllInfo) {
            //console.log("单页登录成功")
            hasBindHis({
                accountId:userAllInfo.accountCommon.id,
                callback:function (json) {
                    if(json.success){
                        if(!json.data){
                            window.location.href = "/users/account/info";
                        }else{
                            // //console.log("用户信息已完善")
                            window.location.href = redirectUrl
                        }

                    }

                }

            })

        });
    })



    //注册
    $('body').on('click','.registerBox .ok',function () {
        var data = validateLogin(true);
        var $self = $(this);
        // console.log("注册：",data)
        if(!data){
            return
        }
        register({
            data:data,
            callback:function (json) {
                var json = JSON.parse(json);
                var $parents =$self.parents('.registerBox');
                if(!$parents.hasClass('loginCom')){
                    // console.log('弹窗级注册')
                    if(json.success){
                        utils.ShowComfirmDialog({
                            tipText:json.msg,
                            noConfirmBtn:true,
                            callback:function () {
                                setTimeout(function () {
                                    showLogin()
                                },2000)
                            }
                        })
                    }else{
                        console.log('json.msg:',json.msg)
                        $('.prompt').show().find('em').html(json.msg)
                    }


                }else{
                    // console.log('页面级注册')
                    if(json.success){
                        console.log(json.msg)
                        utils.ShowComfirmDialog({
                            tipText:json.msg+'<p>即将跳转登录……</p>',
                            noConfirmBtn:true,
                            callback:function () {
                                console.log("弹框开始渲染")
                                setTimeout(function () {
                                    window.location.href = '/login'
                                },2000)
                            }
                        })
                    }else if(json.msg=='账号已注册，请直接登录'||json.code=='99999999'){
                        setTimeout(function () {
                            window.location.href = '/login'
                        },2000)
                    }else{
                        // console.log(json.msg)
                        $prompt.show().find('em').html(json.msg)
                    }
                }

            }
        })


    })

    //重置密码
    $('body').on('click','.rPasswordBox .ok',function () {
        var data = validateLogin(true);
        var $self = $(this);
        // console.log("找回密码：",data)
        if(!data){
            return
        }
        rPassword({
            data:data,
            callback:function (json) {
                var json = JSON.parse(json);
                var $parents =$self.parents('.rPasswordBox');
                if(json.success){
                    utils.ShowComfirmDialog({
                        tipText:'密码找回成功'+'<p>即将跳转登录……</p>',
                        noConfirmBtn:true,
                        callback:function () {
                            setTimeout(function () {
                                if(!$parents.hasClass('loginCom')){
                                    showLogin()
                                }else{
                                    window.location.href = '/login';
                                }

                            },2000)
                        }
                    })

                }else{
                    $prompt.show().find('em').html(json.msg)
                }
            }
        })


    })


    //显示登陆页面
    function showLogin(options) {

        //<p><span class="checkbox checked"></span> 我已阅读并同意<a href="/userAgreement" target="_blank">《都安全用户协议》</a></p>
        var popup = new utils.Popup({
            msg:'<div class="slideLogin"><div class="tit"><span class="on">密码登录</span><span>验证码登录</span></div>' +
            '<div class="touchslider-viewport"><div class="bd"> ' +
            '<ul><li><input type="text" class="username" placeholder="请输入手机号码" value=""></li><li><input type="password" class="password" placeholder="请输入密码" value=""><span class="prompt"><i class="icon"></i><em>手机输入格式有误/验证码有误</em></span></li></ul>' +
            '<ul style="float: left"><li><input type="text" class="username" placeholder="请输入手机号码"></li><li><input type="text" class="password" placeholder="请输入短信验证码"><button class="getCode">获取短信验证码</button><span class="prompt"><i class="icon"></i><em>手机输入格式有误/验证码有误</em></span></li></ul>' +

            '</div></div></div>',
            otherMsg:'手机号码用来获取预约码和报告服务码'+'<div class="operate"><a href="javascript:;" title="立即注册" class="registerBtn">立即注册</a><i>/</i> <a href="javascript:;" title="忘记密码" class="rPasswordBtn">忘记密码</a></div>',
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
                    complete:function () {
                        //console.log("hahahh")
                    },
                    autoplay: false, // 自动播放
                    viewport: ".touchslider-viewport"  //内容区域
                });
            },
            okText:'登录',
            // width:'360',
            otherBox:'loginPopupCom loginBox',
            isHide:false,
            okCallback:function(){
                var data = validateLogin();
                // //console.log('data::',data);
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

    function showRegister(options) {
        var popup = new utils.Popup({
            msg:'<div class="tit"><span class="on">新用户注册</span></div>' +
            '<div class="bd"> ' +
            '<ul>' +
            '<li><input type="text" class="username" placeholder="请输入手机号码" value=""></li>' +
            '<li><input type="text" class="verCode" placeholder="请输入短信验证码"><button class="getCode">获取短信验证码</button></li>'+
            '<li><input type="password" class="password" placeholder="请输入密码" value=""><span class="prompt"><i class="icon"></i><em></em></span></li>' +
            '<p><span class="checkbox checked"></span> 我已阅读并同意<a href="/userAgreement" target="_blank">《都安全用户协议》</a></p></ul>' +
            '</div>',
            otherMsg:'手机号码用来获取预约码和报告服务码',
            bOhterMsg:true,
            callback:function () {

            },
            okText:'注册',
            // width:'360',
            otherBox:'loginPopupCom registerBox',
            isHide:false,
            okCallback:function(){
                // var data = validateLogin();
                // console.log('data::',data);
                // if(data){
                //
                // }
            }
        })
    }
    function showRPassword(options) {
        var popup = new utils.Popup({
            msg:'<div class="tit"><span class="on">重置密码</span></div>' +
            '<div class="bd"> ' +
            '<ul>' +
            '<li><input type="text" class="username" placeholder="请输入手机号码" value=""></li>' +
            '<li><input type="text" class="verCode" placeholder="请输入短信验证码"><button class="getCode">获取短信验证码</button></li>'+
            '<li><input type="password" class="password" placeholder="请输入密码" value=""><span class="prompt"><i class="icon"></i><em></em></span></li>' +
            '</div>',
            otherMsg:'手机号码用来获取预约码和报告服务码',
            bOhterMsg:true,
            okText:'确定',
            // width:'360',
            otherBox:'loginPopupCom rPasswordBox',
            isHide:false,
            okCallback:function(){
                var data = validateLogin();
                console.log('data::',data);
                if(data){

                }
            }
        })
    }

    function register(obj) {
        $.ajax({
            type:'post',
            url:'/register',
            data:obj.data,
            beforeSend:function () {
                $(this).html('正在提交注册……')
            },
            success:function(json){
                obj.callback&&obj.callback(json,obj.type)

            }
        })
    }

    function rPassword(obj) {
        $.ajax({
            type:'put',
            url:'/rPassword',
            data:obj.data,
            success:function(json){
                obj.callback&&obj.callback(json,obj.type)
            }
        })
    }

    //获取数据
    function getLoginData(bType) {
        $loginWrap = getLoginWrap();
        index = $loginWrap.find('.tit span.on').index()||0;
        $prompt = $loginWrap.find('ul').eq(index).find('.prompt');
        //console.log('index::',index);
        var data = {
            // "password":utils.md5($loginWrap.find('ul').eq(index).find(".password").val()),
            "password":$loginWrap.find('ul').eq(index).find(".password").val(),
            "account":$loginWrap.find('ul').eq(index).find(".username").val(),
            "verCode":$loginWrap.find(".verCode").val(),
            "loginType":1
        }
        return data
    }
    //登陆数据验证
    function validateLogin(bType) {
        var data = getLoginData();
        var requestData = {};
        if(index==0){
            // //console.log('密码')
            requestData.loginType=1;

            if(!data.account){
                $prompt.show().find('em').html('手机号码不能为空');
                return
            }else if(data.account && !utils.check_tel(data.account)){
                $prompt.show().find('em').html('手机号码不正确');
                return
            }
            if(bType){
                if(!data.verCode){
                    $prompt.show().find('em').html('短信验证码不能为空');
                    return
                }else{
                    requestData.verCode =data.verCode;
                }
            }
            if(!data.password){
                $prompt.show().find('em').html('密码不能为空');
                return
            }

            requestData.password =utils.md5(data.password);
        }
        if(index==1){
            // //console.log('验证码',data.account,utils.check_tel(data.account))
            requestData.loginType=2;
            if(!data.account){
                $prompt.show().find('em').html('手机号码不能为空');
                return
            }else if(data.account && !utils.check_tel(data.account)){
                // //console.log("手机号码：",utils.check_tel(data.account));
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
    // function getVerCode($self,time) {
    function getVerCode(obj) {
        var data = getLoginData();
        var time = obj.time||'60';
        var $self =obj.$self;
        var requestData = {
            "mobile":data.account,
            // "domain":"DAQ-WEB-LOGIN"
            "domain":obj.domain
            // "deviceUid":""
        };
        $.ajax({
            type:'post',
            url:'/getVerCode',
            data:requestData,
            beforeSend:function () {
                $self.html('正在获取验证码……')
            },
            success:function(json){
                // console.log(json);
                // console.log(typeof json);
                var json = JSON.parse(json);
                if(json.success){
                    // console.log('验证码获取成功')
                    timer($self,time)
                }else{
                    // console.log(json.msg)
                    $prompt.show().find('em').html(json.msg)
                    $self.html('重新获取')
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
        var $loginWrap = $('.loginBox,.loginBox2');
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
                    var userAllInfo = json.data.userAllInfo;
                    if(popup){
                        popup.hideBox(function () {
                            $topBarAside.html(logoutHtml);
                            afterLoginFun && afterLoginFun(userAllInfo);

                        });
                    }else if(redirectUrl){
                        //window.location.href = redirectUrl;
                        afterLoginFun&&afterLoginFun(userAllInfo);
                    }
                    myMsg.hideMsg(1000);

                }else{
                    // $prompt.show().find('em').html(json.msg)
                    var code = json.code;
                    if(code==300){
                        $prompt.show().find('em').html("登录失败:服务器异常")
                    }else{
                        $prompt.show().find('em').html(json.msg)
                    }

                }

            }
        })
    }
    var loginRequiredArr = ['/trade/order','/trade/cart/list','/treats/reg/','/users/'];

    //退出登陆
    function logout() {
        utils.SendAjax({
            url: '/logout',
            param: {},
            method: 'POST',
            tipText: '退出登录',
            callback: function (result) {
                if(result.success){
                    $cartNum.html('0');
                    loginRequiredArr.forEach(function (item) {
                        if(pathname.search(item)!=-1){
                            //console.log('页面跳转');
                            window.location.href='/';
                        }else{
                            $topBarAside.html(loginHtml);
                        }
                    })

                }
            }
        });
    }
    //检查信息完善 hasBindHis
    function hasBindHis(obj) {
        utils.SendAjax({
            url: '/hasBindHis',
            param: {
                accountId:obj.accountId,
                send:true
            },
            method: 'POST',
            tipText: '检查是否完善信息',
            callback: function (result) {
                obj.callback&&obj.callback(result);
            }
        });
    }

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


    function showAccountDialog(obj) {
        var popup = new utils.Popup({
            msg: '<div class="box-header">完善信息<i class="icon close closePopup"></i></div><div class="box-body">' +
            '<ul class="tip-box"><li>为了能正常使用预约挂号服务,请及时补充以下材料。</li><li>以下信息为预约时所需项,一经填写不可更改,提交前请检查核对。</li><li>绑定已有客户编号,您可在病例中心中查看历史报告。</li></ul>' +
            '<form name="accInfoForm"><ul class="info-box"><li><label><i class="text-stress">* </i>姓名</label><input name="name"/></li>'+
            '<li><label><i class="text-stress">* </i>性别</label><div id="gender" class="select-box none"><div class="selected"><span class="text"><span class="text-sec">请选择</span></span><i class="icon pull-down"></i></div>'+
            '<ul class="options"><li class="option" data-value="1">男</li><li class="option" data-value="2">女</li></ul></div></li>'+
            '<li><label><i class="text-stress">* </i>出生年月</label><input id="birthday" name="birthday" readonly/></li>' +
            '<li><label><p>绑定已有</p><p>客户编码</p></label><input name="patientCode" placeholder="请输入已有客户编码"/></li><span class="prompt"><i class="icon"></i><em>客户编码有误</em></span>' +
            '</ul></form></div>',
            otherMsg: 'confirm-btn',
            popupBox: 'popupBox',
            okText: '提交',
            cancel: 'closePopup',
            otherBox: 'complete-dialog',
            isHide:false,
            cancelFun: function () {
                //window.location.href = "/treat/regsource/list";
                var referrer = document.referrer;
                referrer = referrer?pathname=='/searchs/report'?'/':referrer:'/';
                if(obj && obj.back&&obj.back){
                    window.location.href=referrer;
                }
            },
            okCallback: function () {
                //console.log("提交用户完善信息");
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
                //console.log("result:",result);
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
        utils.SendAjax({
            url: '/trade/cart/GetCartCount',
            param: {},
            method: 'GET',
            tipText: '获取购物车数量',
            callback: function (result) {
                if(result.success){
                    var cartCout = result.data||'0';
                    $cartNum.html(cartCout)
                }
            }
        });
    }
    function cartCoutAddOne() {
        var cartNum = parseInt($cartNum.text())+1;
        $.cookie('cartNum', cartNum,{path:"/"});
        $cartNum.text(cartNum);
    }
    function cartCoutDelOne() {
        var cartNum = parseInt($cartNum.text())-1;
        $.cookie('cartNum', cartNum,{path:"/"});
        $cartNum.text(cartNum);
    }


    module.exports={
        showLogin:showLogin,
        CheckLogin:checkLogin,
        getCartCount:getCartCount,
        cartCoutAddOne:cartCoutAddOne,
        cartCoutDelOne:cartCoutDelOne,
        showAccountDialog:showAccountDialog
    }

});