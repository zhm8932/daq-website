//define(['jquery'],function(require,exports,module) {
define(function(require,exports,module) {
    //弹出框
    require('jquery');
    require('touchslider');

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
            cancelFun:null,
            callback:null
        };
        this.opts = $.extend({},defaults,options);
        this.popupBox = this.opts.popupBox;
        this.$body = $('body');
        this.init()
    }
    Popup.prototype = {
        init:function(){
            var self = this;
            self.render();
            $('.'+self.popupBox).show();
            //事件解绑
            self.$body.off('click','.'+self.opts.ok);
            self.$body.on('click','.'+self.opts.ok,function(){
                self.opts.okCallback();
                if(self.opts.isHide){
                    self.hideBox()
                }
            });
            $(window).on('keydown',function(e){
                if(e.keyCode =='13'){
                    self.opts.okCallback();
                    if(self.opts.isHide){
                        self.hideBox()
                    }
                }
            });

            var cancel = '.'+this.opts.cancel;
            //点击取消
            this.$body.on('click',cancel,function(){
                self.cancelCallback();
            })

        },
        hideBox:function(cb){
            var self = this;
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
                $('.'+self.popupBox).remove();
                self.$body.append(this.popupHtml())

            }else{
                this.$body.append(this.popupHtml())
            }

            self.opts.callback && self.opts.callback();
            var height = $('.'+this.opts.popupBox).height();
            var width = $('.'+this.opts.popupBox).outerWidth();
            $('.'+self.popupBox).css({'height':height,'margin-top':-height/2,'margin-left':-width/2});
            
        },
        popupHtml:function(){
            var opts = this.opts;
            var ConfimHtml = '<div class="'+this.popupBox+' '+this.opts.otherBox+'" style="width: '+opts.width+'px;margin-left:-'+opts.width/2+'px">' +
                '<div class="innerBg"><span class="'+this.opts.cancel+'"><i class="icon"></i></span><article>'+this.opts.msg+'</article>' +
                '<div class="submitBox"><span class="'+this.opts.ok+'">'+this.opts.okText+'</span></div>';
            if(opts.bOhterMsg){
                ConfimHtml+='<div class="otherMsg">'+opts.otherMsg+'</div>'
            }
            ConfimHtml+='</div></div>';
            return ConfimHtml
        },
        cancelCallback:function(){   //关闭弹窗
            $('.globalBg').hide();
            $('.'+this.popupBox).remove();
            this.opts.cancelFun && this.opts.cancelFun();
        }
    };

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
        };


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
                    $('.'+self.mainCell).fadeIn();
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


            if(!$('.'+opts.mainCell).length){
                $('body').append(this.setHtml());
            }else{
                $('.'+opts.mainCell).show();
            }
            $('.'+opts.mainCell).html(this.options.title);
            if(!opts.otherBox){
                $('.'+opts.mainCell).css({width:width+'px',height:height+'px','line-height':height+'px','margin-left':-width/2,'margin-top':-height/2}).show()
            }
        }
    };
    function tab(hd,con){
        var $hdeles = $(hd).children();
        var $coneles = $(con).children();
        if(!$hdeles.hasClass('on')){
            $hdeles.first().addClass('on')
        }
        $coneles.first().show();
        var index = $('.tabBox .hd .on').index();
        $coneles.eq(index).show().siblings().hide();
        $hdeles.click(function(){
            index = $(this).index();
            $(this).addClass('on').siblings().removeClass();
            $coneles.eq(index).show().siblings().hide();
        })
    }

    tab('.tabBox .hd','.tabBox .con');

    var u = navigator.userAgent,
        app = navigator.appVersion;
    // console.log('userAgent:',u);
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

    };
    function CheckNull(id){
        var value = $('#'+id).val();
        if(value.trim() == ''){
            $('#'+id).parent().find('.tip').html('不能为空');
            return false;
        }
        return true;
    }

    function check_tel(tel){
        var reg = /^(13[0-9]|15[012356789]|18[0-9]|14[57]|17[678])[0-9]{8}$/;
        return  reg.test(tel)
    }

    function sendAjax(options) {
        $.ajax({
            url: options.url,
            type: options.method || 'GET',
            data: options.param || {},
            // contentType: options.contentType || 'application/x-www-form-urlencoded;charset=UTF-8;',
            success: function (data) {
                var result = JSON.parse(data);
                if (result.success) {
                    options.callback && options.callback(result);
                } else {
                    //弹框提示失败
                    // alertTip('fail', options.tipText + '失败,原因是:' + result.msg);
                    showComfirmDialog({tipText:options.tipText + '失败,原因是:' + result.msg,noConfirmBtn:true});
                    options.errorFun && options.errorFun(result);
                }
            },
            error: function (data) {
                if (data.status == '404') {
                    // alertTip('fail', '页面丢失，稍后再试');
                    showComfirmDialog({tipText:'页面丢失，请稍后再试',noConfirmBtn:true});
                } else if (data.status == '500') {
                    // alertTip('fail', '系统忙，稍后再试');
                    showComfirmDialog({tipText:'系统忙，请稍后再试',noConfirmBtn:true});
                } else {
                    // alertTip('fail', '出错了,响应码是' + data.status + ',请联系管理员');
                    showComfirmDialog({tipText:'出错了,响应码是' + data.status + ',请联系管理员',noConfirmBtn:true});
                }
                options.errorFun && options.errorFun();
            }
        });
    }

    jQuery.fn.center = function () {
        this.css('position', 'absolute');
        this.css('top', ( $(window).height() - this.height() ) / 2 + $(window).scrollTop() + 'px');
        this.css('left', ( $(window).width() - this.width() ) / 2 + $(window).scrollLeft() + 'px');
        return this;
    };

    function alertTip(success, tipText, fun) {
        if (success == 'success') {
            var html = '<div id="alertTip" class="alert-tip alert-success ">' + tipText + '</div>';
        } else {
            var html = '<div id="alertTip" class="alert-tip alert-fail">' + tipText + '</div>';
        }
        $(html).appendTo($("body").eq(0));
        $('#alertTip').center();
        $('#alertTip').show(1000);
        setTimeout(function () {
            $('#alertTip').hide(1000);
            $('#alertTip').remove();
            fun && fun();
        }, 2500);
    }

    function addCookie(name, value, path, expireHours) {
        var cookieString = name + "=" + encodeURIComponent(value);
        //判断是否设置过期时间
        if (expireHours > 0) {
            var date = new Date();
            date.setTime(date.getTime + expireHours * 3600 * 1000);
            cookieString = cookieString + ";expires=" + date.toGMTString();
        }
        cookieString += ';path=' + path;
        document.cookie = cookieString;
    }

    function getCookie(name) {
        var strCookie = document.cookie;
        var arrCookie = strCookie.split("; ");
        for (var i = 0; i < arrCookie.length; i++) {
            var arr = arrCookie[i].split("=");
            if (arr[0] == name)return decodeURIComponent(arr[1]);
        }
        return "";
    }

    function deleteCookie(name) {
        var date = new Date();
        date.setTime(date.getTime() - 10000);
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }


    function getLoacalTimeString(timestamp) {
        if(timestamp){
            var date = new Date(timestamp);
        }else{
            var date = new Date();
        }
        var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        var time = hours + ':' + minutes + ':' + seconds;
        return time;
    }

    function getLoacalDateString(timestamp) {
        if(timestamp){
            var date = new Date(timestamp);
        }else{
            var date = new Date();
        }
        var year = date.getFullYear();
        var m = parseInt(date.getMonth()) + 1;
        var month = m < 10 ? '0' + m : m;
        var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var time = year + '-' + month + '-' + d;
        return time;
    }

    function getLoacalDateAndTime(timestamp) {
        if(timestamp){
            var date = new Date(timestamp);
        }else{
            var date = new Date();
        }
        var year = date.getFullYear();
        var m = parseInt(date.getMonth()) + 1;
        var month = m < 10 ? '0' + m : m;
        var d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
        var hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        var minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
        var seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();
        var time = year + '-' + month + '-' + d + '&nbsp;' +hours + ':' + minutes + ':' + seconds;
        return time;
    }

    String.prototype.trim = function () {

        return this.replace(/(^\s*)|(\s*$)/g, '');
    }

    function stringJSON(serialize) {
        var serialize = serialize.replace(/\+/g, " ").split('&');
        var serializeObj = {},
            str = '';
        for (var i = 0, len = serialize.length; i < len; i++) {
            str = serialize[i].split('=');
            serializeObj[str[0]] = decodeURIComponent(decodeURI(str[1])).trim()
            //serializeObj[str[0]] = unescape(str[1])
        }
        return serializeObj
    }

    function checkRadio($this, selector,fun) {
        if ($this.hasClass('disabled')) {
            return;
        }
        if($this.hasClass('checked')){
            $this.removeClass('checked');
        }else{
            $(selector).removeClass('checked');
            $this.addClass('checked');
        }
        fun && fun();
    }


    //确认弹框:showComfirmDialog({tipText:"确定删除吗?",noConfirmBtn:true)
    function showComfirmDialog(options){
        var msg = '';
        if(options.noConfirmBtn){
            msg = '<div class="box-header">提示<i class="icon close closePopup"></i></div><div class="box-body">'+
                '<p class="confim-tip">'+options.tipText+'</p><div class="btn-box"><button class="cancelBtn closePopup">确定</button></div></div>';
        }else{
            msg = '<div class="box-header">提示<i class="icon close closePopup"></i></div><div class="box-body">'+
            '<p class="confim-tip">'+options.tipText+'</p><div class="btn-box"><button class="submitBtn confirm-btn">确定</button><button class="cancelBtn closePopup">取消</button></div></div>';
        }
        var popup = new Popup({
            msg:msg,
            otherMsg:'confirm-btn',
            popupBox:'popupBox',
            ok:'confirm-btn',
            cancel:'closePopup',
            // okText:'保存并新增',
            // bOhterMsg:true,
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
            // okText:'登录',
            width:'324',
            otherBox:'confirm-box',
            okCallback:function(){
                options.okCallback && options.okCallback();
            }
        })
    }

    function buildSelect(objs){
        objs.each(function(index,ele){
            var $this = $(ele);
            $this.on('click',function(e){
                e.stopPropagation();
                $('.select-box').not($(this)).removeClass('open');
                if($this.hasClass('open')){
                    $this.removeClass('open');
                }else{
                    $this.addClass('open');
                }
                // return false;
            });
            $this.find('.options').on('click',function(e){
                e.stopPropagation();
                var $this = $(this);
                var t = $(e.target);
                t.siblings().removeClass('active');
                t.addClass('active');
                var selectBox = $this.closest('.select-box');
                var selectedText = selectBox.find('.selected .text');
                selectedText.html(t.html());
                selectBox.removeClass('open');
                // return false;
            });
        });

        // $('body').on('click',function(){
        //     objs.removeClass('open');
        // })
    }

    function setMinHeight(){
        var windowHeight = $(window).height();
        var domHeight = $('body>.topBar').outerHeight(true) + $('body>.header').outerHeight(true) + $('body>.nav').outerHeight(true) + $('body>.positon').outerHeight(true) + $('body>.footer').outerHeight(true) + $('body>.copyright').outerHeight(true);

        console.log($('body>.topBar').outerHeight(true)+'----'+$('body>.header').outerHeight(true)+'----'+$('body>.nav').outerHeight(true)+'----'+$('body>.positon').outerHeight(true)+'----'+$('body>.footer').outerHeight(true)+'----'+$('body>.copyright').outerHeight(true));
        var minHeight = windowHeight - domHeight + $('body>.topBar').outerHeight(true);
        $('.main-box').css('min-Height',minHeight + 'px');
        console.log(windowHeight+'----'+domHeight+'----'+minHeight);
        return minHeight;
    }
    module.exports={
        Popup:Popup,
        MsgShow:MsgShow,
        CheckNull:CheckNull,
        browser:browser,
        SendAjax: sendAjax,
        stringJSON: stringJSON,
        AlertTip: alertTip,
        AddCookie: addCookie,
        GetCookie: getCookie,
        DeleteCookie: deleteCookie,
        GetLoacalTimeString: getLoacalTimeString,
        GetLoacalDateString:getLoacalDateString,
        CheckRadio:checkRadio,
        // showLogin:showLogin,
        // login:login,
        // validateLogin:validateLogin,
        // logout:logout,
        getLoacalDateAndTime:getLoacalDateAndTime,
        // CheckLogin:checkLogin,
        BuildSelect:buildSelect,
        SetMinHeight:setMinHeight,
        ShowComfirmDialog:showComfirmDialog,
        check_tel:check_tel
    }

})