//define(['jquery'],function(require,exports,module) {
define(function(require,exports,module) {
    //弹出框
    require('jquery');
    require('touchslider');
    var md5lib = require('./md5');

    function md5(str) {
        return md5lib.hex_md5(str).toUpperCase();
    }
    function Popup(options){
        var defaults = {
            ok:'ok',
            cancel:'cancel',
            close:'close',
            globalBg:'globalBg',
            popupBox:'popupBox',
            otherBox:'',
            isHide:true,     //是否自动隐藏弹框
            isMore:false,   //是否同时出现多个弹框
            isCancelBtn:false,  //是否有取消按钮
            otherMsg:'其他提示信息',
            bOhterMsg:false,
            msg:'请输入内容',
            delayTime:2000,
            okText:'确定',
            cancelText:'取消',
            okCallback:null,        //确定
            cancelFun:null,         //取消
            closeFun:null,          //关闭
            callback:null,          //页面渲染需要的js执行完后执行，此处为计算弹框宽和高
            completeRenderFun:null  //渲染完成执行
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
            self.$body.off('click','.'+self.opts.cancel);
            self.$body.on('click','.'+self.opts.ok,function(){
                self.opts.okCallback();
                self.$body.off('click','.'+self.opts.ok);
                self.$body.off('click','.'+self.opts.cancel);
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

            var close = '.'+this.opts.close;
            //点击关闭
            this.$body.on('click',close,function(){
                // self.cancelCallback();
                self.closeCallback();
            })

            var cancelBtn = '.'+self.opts.cancel;
            //点击取消
            this.$body.on('click',cancelBtn,function(){
                self.cancelCallback();
            })

        },
        hideBox:function(cb){
            var self = this;
            setTimeout(function(){
                $('.'+self.getPopupBox()).hide();
                //console.log(self.opts)
                if(!self.opts.isMore){
                    $('.'+self.opts.globalBg).hide();
                }
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
        getPopupBox:function () {
            var popupBox = this.popupBox;
            if(this.opts.isMore){
                popupBox = this.opts.otherBox;
            }
            return popupBox;
        },
        render:function(completeFun){
            var self = this;
            self.globalBgFn();
            if(!self.opts.isMore){
                if($('.'+self.popupBox).length){
                    $('.'+self.popupBox).remove();
                    self.$body.append(self.popupHtml())

                }else{
                    self.$body.append(self.popupHtml())
                }
            }else{
                self.$body.append(self.popupHtml())
            }

            self.opts.callback && self.opts.callback();
            var width = $('.'+this.opts.popupBox).outerWidth();
            var height = $('.'+this.opts.popupBox).height();

            if(self.opts.isMore){
                height = $('.'+this.opts.otherBox).height();
                width = $('.'+this.opts.otherBox).outerWidth();
                $('.'+this.opts.otherBox).css({'height':height,'margin-top':-height/2,'margin-left':-width/2});
            }else{
                $('.'+this.opts.popupBox).css({'height':height,'margin-top':-height/2,'margin-left':-width/2});
            }
            this.opts.completeRenderFun&&this.opts.completeRenderFun();
            
        },
        popupHtml:function(){
            var opts = this.opts;
            var ConfimHtml = '<div class="'+this.popupBox+' '+this.opts.otherBox+'" style="width: '+opts.width+'px;margin-left:-'+opts.width/2+'px">' +
                '<div class="innerBg"><span class="'+this.opts.close+'"><i class="icon"></i></span><article>'+this.opts.msg+'</article>' +
                '<div class="submitBox">';

            if(opts.isCancelBtn){
                ConfimHtml+='<button class="'+this.opts.cancel+'">'+this.opts.cancelText+'</button>';
            }
            ConfimHtml+='<button class="'+this.opts.ok+'">'+this.opts.okText+'</button></div>';
            if(opts.bOhterMsg){
                ConfimHtml+='<div class="otherMsg">'+opts.otherMsg+'</div>'
            }
            ConfimHtml+='</div></div>';
            return ConfimHtml
        },
        closeCallback:function(){   //关闭弹窗
            $('.globalBg').hide();
            $('.'+this.popupBox).remove();
            this.opts.closeFun && this.opts.closeFun();
        },
        cancelCallback:function(){   //取消
            var popupBox = '';
            if(!this.opts.isMore){
                $('.globalBg').hide();
                popupBox = this.popupBox;
            }else{
                popupBox = this.opts.otherBox;
            }
            $('.'+popupBox).remove();
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
            dataType:options.dataType || 'json',
            // contentType: options.contentType || 'application/x-www-form-urlencoded;charset=UTF-8;',
            success: function (result) {
                if (result.success) {
                    options.callback && options.callback(result);
                } else {
                    //弹框提示失败
                    showComfirmDialog({tipText:options.tipText + '失败,原因是:' + result.msg,noConfirmBtn:true});
                    options.errorFun && options.errorFun(result);
                }
            },
            error: function (data) {
                if (data.status == '404') {
                    showComfirmDialog({tipText:'页面丢失，请稍后再试',noConfirmBtn:true});
                } else if (data.status == '500') {
                    showComfirmDialog({tipText:'系统忙，请稍后再试',noConfirmBtn:true});
                } else {
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
        var confirmBtnText = options.confirmBtnText || '确定';
        var cancelBtnText = options.cancelBtnText || '取消';

        var msg = '';
        if(options.noConfirmBtn){
            msg = '<div class="box-header">提示<i class="icon close closePopup"></i></div><div class="box-body">'+
                '<p class="confim-tip">'+options.tipText+'</p><div class="btn-box"><button class="cancelBtn closePopup">'+confirmBtnText+'</button></div></div>';
        }else{
            msg = '<div class="box-header">提示<i class="icon close closePopup"></i></div><div class="box-body">'+
                '<p class="confim-tip">'+options.tipText+'</p><div class="btn-box"><button class="cancelBtn closePopup">'+cancelBtnText+'</button><button class="submitBtn confirm-btn">'+confirmBtnText+'</button></div></div>';
        }

        var popup = new Popup({
            msg:msg,
            otherMsg:'confirm-btn',
            popupBox:'popupBox',
            ok:'confirm-btn',
            close:'closePopup',
            // okText:'保存并新增',
            // bOhterMsg:true,
            callback:function () {
                options.callback&&options.callback()
            },
            // okText:'登录',
            // width:'324',
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
                // e.stopPropagation();
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
                var target = $(e.target);
                if(target.is('li')){
                    target.siblings().removeClass('active');
                    target.addClass('active');
                    var selectBox = $this.closest('.select-box');
                    var selectedText = selectBox.find('.selected .text');
                    selectedText.html(target.html());
                    selectBox.removeClass('open');
                }
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

        // console.log($('body>.topBar').outerHeight(true)+'----'+$('body>.header').outerHeight(true)+'----'+$('body>.nav').outerHeight(true)+'----'+$('body>.positon').outerHeight(true)+'----'+$('body>.footer').outerHeight(true)+'----'+$('body>.copyright').outerHeight(true));
        var minHeight = windowHeight - domHeight + $('body>.topBar').outerHeight(true);
        $('.main-box').css('min-Height',minHeight + 'px');
        // console.log(windowHeight+'----'+domHeight+'----'+minHeight);
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
        check_tel:check_tel,
        md5:md5
    }

})