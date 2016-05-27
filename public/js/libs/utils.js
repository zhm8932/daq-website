//define(['jquery'],function(require,exports,module) {
define(function(require,exports,module) {
    //弹出框
    require('jquery')

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

    module.exports={
        Popup:Popup,
        MsgShow:MsgShow,
        CheckNull:CheckNull,
        browser:browser
    }

})