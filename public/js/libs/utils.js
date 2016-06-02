//define(['jquery'],function(require,exports,module) {
define(function(require,exports,module) {
    //弹出框
    require('jquery')
    require('touchslider')

    function Popup(options){
        var defaults = {
            ok:'ok',
            cancel:'cancel',
            globalBg:'globalBg',
            popupBox:'popupBox',
            otherBox:'',
            isHide:true,
            otherMsg:'其他提示信息',
            bOhterMsg:false,
            msg:'请输入内容',
            delayTime:2000,
            okText:'确定',
            okCallback:null,
            callback:null,
        }
        this.opts = $.extend({},defaults,options)
        this.popupBox = this.opts.popupBox
        this.$body = $('body')
        this.init()
    }
    Popup.prototype = {
        init:function(){
            var self = this;
            self.render();
            $('.'+self.popupBox).show();
            //事件解绑
            self.$body.off('click','.'+self.opts.ok)
            self.$body.on('click','.'+self.opts.ok,function(){
                self.opts.okCallback()
                if(self.opts.isHide){
                    self.hideBox()
                }
            })

            //点击取消
            this.$body.on('click','.'+this.opts.cancel,function(){
                self.cancelCallback();


            })

        },
        hideBox:function(cb){
            var self = this
            setTimeout(function(){
                $('.'+self.popupBox).hide();
                //console.log(self.opts)
                $('.'+self.opts.globalBg).hide();
                cb&&cb()
            },self.opts.delayTime)
        },
        globalBgFn:function(){
            var globalBgHtml = '<div class="globalBg"></div>'
            if($('.globalBg').length){
                $('.globalBg').show();
            }else{
                this.$body.append(globalBgHtml)
            }
        },
        render:function(){
            var self = this;
            self.globalBgFn();
            if($('.'+self.popupBox).length){
                $('.'+self.popupBox).remove()
                self.$body.append(this.popupHtml())

            }else{
                this.$body.append(this.popupHtml())
            }

            self.opts.callback()
            
            var height = $('.'+this.opts.popupBox).height();
            $('.'+self.popupBox).css({'height':height,'margin-top':-height/2})


        },
        popupHtml:function(){
            var opts = this.opts;
            var ConfimHtml = '<div class="'+this.popupBox+' '+this.opts.otherBox+'" style="width: '+opts.width+'px;margin-left:-'+opts.width/2+'px">' +
                                '<div class="innerBg"><span class="'+this.opts.cancel+'"><i class="icon"></i></span><article>'+this.opts.msg+'</article>' +
                                '<div class="submitBox"><span class="'+this.opts.ok+'">'+this.opts.okText+'</span></div>'
            if(opts.bOhterMsg){
                ConfimHtml+='<div class="otherMsg">'+opts.otherMsg+'</div>'
            }
            ConfimHtml+='</div></div>'
            return ConfimHtml
        },
        cancelCallback:function(){   //关闭弹窗
            $('.globalBg').hide();
            $('.'+this.popupBox).remove();

        }
    }

    //信息提示框
    function MsgShow(options){
        var defaults = {
            closeBtn:'.closeBtn',
            mainCell:'msgBox',
            otherBox:'',
            title:'提示语',
            delayTime:1500,
            interTime:1500,
            width:300,
            height:50,
            effect:'fade',
        }


        this.options = $.extend({},defaults,options);
        this.mainCell = this.options.mainCell;

        this.init();
    }
    MsgShow.prototype = {
        init:function(){
            var self = this,
                opts = self.options,
                effect = opts.effect,
                interTime = opts.interTime;
            //console.log(effect)
            switch (effect){
                case 'fade':
                    this.render();
                    $('.'+self.mainCell).fadeIn()
                    break;

            }

        },
        setHtml:function(){
            return '<div class="'+this.options.mainCell+' '+this.options.otherBox+'"></div>'
        },
        hideMsg:function(cb){
            var self = this;
            setTimeout(function(){
                $('.'+self.mainCell).hide();
                if(typeof  cb=='function'){
                    cb();
                }

            },this.options.delayTime)
        },
        render:function(){
            var boxHtml = '';
            var opts = this.options,
                width=opts.width,
                height=opts.height;

            console.log('99999999')

            if(!$('.'+opts.mainCell).length){
                $('body').append(this.setHtml());
            }else{
                $('.'+opts.mainCell).show();
            }
            $('.'+opts.mainCell).html(this.options.title)
            if(!opts.otherBox){
                $('.'+opts.mainCell).css({width:width+'px',height:height+'px','line-height':height+'px','margin-left':-width/2,'margin-top':-height/2}).show()
            }



        }
    }
    function tab(hd,con){
        var $hdeles = $(hd).children()
        var $coneles = $(con).children()
        if(!$hdeles.hasClass('on')){
            $hdeles.first().addClass('on')
        }
        $coneles.first().show()
        var index = $('.tabBox .hd .on').index()
        $coneles.eq(index).show().siblings().hide()
        $hdeles.click(function(){
            index = $(this).index()
            $(this).addClass('on').siblings().removeClass()
            $coneles.eq(index).show().siblings().hide()
        })
    }

    tab('.tabBox .hd','.tabBox .con')

    var u = navigator.userAgent,
        app = navigator.appVersion;
    console.log('userAgent:',u)
    var browser = {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            ie: u.indexOf('MSIE') > -1 //

    }
    function CheckNull(id){
        var value = $('#'+id).val();
        if(value.trim() == ''){
            $('#'+id).parent().find('.tip').html('不能为空');
            return false;
        }
        return true;
    }

    var $topBarAside = $('.topBar_info aside')
    var loginHtml = '<a href="javascript:;" class="loginBtn">登录</a>'
    var logoutHtml = '<a href="/users/orders" class="logout">个人中心</a><i class="icon devidel"></i><a href="javascript:;" class="logoutBtn">退出</a>';

    var index = '';
    var $prompt = ''
    function showLogin() {
        var popup = new Popup({
            msg:'<div id="slideLogin"><div class="tit"><span class="on">密码登录</span><span>验证码登录</span></div>' +
            '<div class="touchslider-viewport"><div class="bd"> ' +
            '<ul><li><input type="text" class="username" placeholder="请输入手机号码" value="13689557622"></li><li><input type="password" class="password" placeholder="请输入密码" value="zhm123456"><span class="prompt"><i class="icon"></i><em>手机输入格式有误/验证码有误</em></span></li></ul>' +
            '<ul><li><input type="text" class="username" placeholder="请输入手机号码"></li><li><input type="text" class="password" placeholder="请输入短信验证码"><span class="getCode">获取短信验证码</span><span class="prompt"><i class="icon"></i><em>手机输入格式有误/验证码有误</em></span></li></ul>' +
            '</div></div></div>',
            otherMsg:'手机号码用来获取预约码和报告服务码',
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
            width:'360',
            otherBox:'loginBox',
            isHide:false,
            okCallback:function(){
                index = $('.popupBox article .tit span.on').index()
                $prompt = $('.popupBox article').find('ul').eq(index).find('.prompt')
                console.log('index::',index)
                var data = {
                    "password":$('.popupBox article .bd ul').eq(index).find(".password").val(),
                    "account":$('.popupBox article .bd ul').eq(index).find(".username").val(),
                    "loginType":1
                }

                if(index==0){
                    if(!data.account){
                        $prompt.show().find('em').html('手机号码不能为空')
                        return
                    }
                    if(!data.password){
                        $prompt.show().find('em').html('密码不能为空')
                        return
                    }
                }
                if(index==1){
                    data.loginType=2
                    if(!data.account){
                        $prompt.show().find('em').html('手机号码不能为空')
                        return
                    }
                    if(!data.password){
                        $prompt.show().find('em').html('验证码不能为空')
                        return
                    }
                }


                console.log('data::',data)
                login(data,popup,index)
            }
        })

    }

    function login(data,popup,index) {
        var index = $('.popupBox article .tit span.on').index();
        $prompt = $('.popupBox article').find('ul').eq(index).find('.prompt');
        $.ajax({
            type:'post',
            url:'/login',
            data:data,
            success:function(json){
                console.log(json)
                //var json = JSON.parse(json)
                console.log(typeof json)
                if(json.success){
                    var myMsg = new MsgShow({
                        delayTime:2000,
                        title:'<i class="icon"></i>登录成功!',
                        otherBox:'successBox'
                    })

                    popup.hideBox(function () {
                        $('.msgBox').hide()
                        $topBarAside.html(logoutHtml)
                    });
                }else{
                    // var myMsg = new utils.MsgShow({
                    //     delayTime:2000,
                    //     title:json.msg
                    // }).hideMsg()
                    $prompt.show().find('em').html(json.msg)
                }


            }
        })
    }

    function logout() {
        $.ajax({
            type:'post',
            url:'/logout',
            //data:data,
            success:function(json){
                console.log(json)
                if(json.success){
                    $topBarAside.html(loginHtml)
                }
            }
        })
    }
    module.exports={
        Popup:Popup,
        MsgShow:MsgShow,
        CheckNull:CheckNull,
        browser:browser,
        showLogin:showLogin,
        login:login,
        logout:logout
    }

})