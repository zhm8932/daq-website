/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, callbacks = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules);
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, __webpack_require__);
/******/ 		if(moreModules[0]) {
/******/ 			installedModules[0] = 0;
/******/ 			return __webpack_require__(0);
/******/ 		}
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {
/******/ 		25:0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, __webpack_require__);

/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.async = true;

/******/ 			script.src = __webpack_require__.p + "" + chunkId + "." + ({"0":"abouts","1":"agencys/infos","2":"common","3":"config","4":"imgAuto","5":"index","6":"login","7":"screenings/goods","8":"screenings/goods_detail","9":"seajs.config","10":"searchs/search_report","11":"trade/cart","12":"trade/order_confirm","13":"trade/order_list","14":"trade/order_success","15":"treat/pay","16":"treat/reg_doc","17":"treat/reg_doc2","18":"treat/reg_source_list","19":"users/account","20":"users/coupons","21":"users/order_detail","22":"users/orders","23":"users/patients","24":"users/registerings"}[chunkId]||chunkId) + ".bundle.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	module.exports = jQuery;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;//define(['jquery'],function(require,exports,module) {
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require,exports,module) {
	    //弹出框
	    __webpack_require__(3);
	    __webpack_require__(5);
	    var md5lib = __webpack_require__(6);

	    function md5(str) {
	        return md5lib.hex_md5(str).toUpperCase();
	    }
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
	                '<div class="submitBox"><button class="'+this.opts.ok+'">'+this.opts.okText+'</button></div>';
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
	        check_tel:check_tel,
	        md5:md5
	    }

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	TouchSlider 0.95
	Licensed under the MIT license.
	http://touchslider.com
	*/
	/*jslint browser: true, undef: true, sloppy: true, vars: true, white: true, nomen: true, plusplus: true, maxerr: 50, indent: 4 */
	/*global WebKitCSSMatrix: false, jQuery: false, getComputedStyle: false */

	(function (factory) {
		if(true){ // AMD
			// you may need to change `define([------>'jquery'<------], factory)`
			// if you use zepto, change it rely name, such as `define(['zepto'], factory)`
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
			// define(['zepto'], factory)
		}if (true) {
			// 如果define已被定义，模块化代码
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
				// 返回构造函数 CommonJS
				// console.log('CommonJS')
				return factory(window.jQuery, undefined);
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}  else{ // Global
			factory(window.jQuery || window.Zepto)
		}
	})(function($, undefined) {
		window.touchSlider = function(options) {
			options = options || {};
			var namespace = options.namespace || "touchslider",
				container = $(options.container);

			if (container.length !== 1) { // 0 or >1
				container.each(function() {
					touchSlider({container: this});
				});
				return;
			}
			var mobile= !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
			options = $.extend({
					autoplay: false,
					delay: 3000,
					margin: 5,
					viewport: "." + namespace + "-viewport",
					prev: "." + namespace + "-prev",
					next: "." + namespace + "-next",
					pagination: "." + namespace + "-nav-item",
					currentClass: namespace + "-nav-item-current",
					duration: 350,
					heightType:false,
					mouseTouch: true,
					mobile:mobile
					// [container, scroller]
				}, options);

			var ret = {
					current: 0,
					step: step,
					next: next,
					prev: prev,
					start: start,
					stop: stop
				},
				isTouchWebkit = "ontouchstart" in window && "WebKitCSSMatrix" in window,
				touchstart = "touchstart", touchmove = "touchmove", touchend = "touchend",
				viewport = $(options.viewport, container),
				viewportWidth = viewport.width(),
				scroller = options.scroller ? $(options.scroller, container) : viewport.children(),
				slides = scroller.children(),
				pagination = $(options.pagination, container);

			pagination.first().addClass('on');

			if (scroller.css("position") !== "absolute") {
				var viewportHeight = viewport.children().children().height();
				if(options.heightType){
					viewportHeight = viewport.height();
				}

				// console.log(viewport)
				// console.log(viewportHeight)
				viewport.css({
					height: viewportHeight,
					position: "relative"
				});
				scroller.css({
					position: "absolute",
					left: 0,
					height: viewportHeight,
					width: 100000
				});
			}

			if (!isTouchWebkit) {
				touchstart = "mousedown";
				touchmove = "mousemove";
				touchend = "mouseup";
			}

			slides.css({"position":"absolute","width":viewportWidth});

			// crossLeft( element )
			// crossLeft( element, pixels, [duration] )
			// crossLeft( element, function(index), [duration] )
			var crossLeft = isTouchWebkit
					? function(elem, px, duration) {
						if (px === undefined) {
							return new WebKitCSSMatrix(getComputedStyle(elem.jquery ? elem[0] : elem).webkitTransform).e;
						}
						elem.css({
							webkitTransitionDuration: duration ? duration + "ms" : "0",
							// http://jsperf.com/typeof-function-vs-instanceof/3
							webkitTransform: function(i){
								return "translate3d(" + (typeof px === "number" ? px : px.call(this, i)) + "px,0,0)";
							}
						});
					}
					: function(elem, px) {
						if (px === undefined) {
							return parseInt((elem.jquery ? elem[0] : elem).style.left, 10);
						}

						elem.css("left", px);
					};

			if (isTouchWebkit) {
				slides
					.css({
						webkitTransitionProperty: "-webkit-transform",
						webkitTransitionTimingFunction: "cubic-bezier(0,0,0.25,1)"
					});
			}
			crossLeft(slides.not(slides[0]), 10000);
			crossLeft(slides.eq(0), 0);

			var switching = (function() {
				var inViewport = [0],
					endCoords = [0], // for calc when an animation
					toComplete = $.noop;

				return {
					moving: false,
					init: function() {
						scroller.bind("webkitTransitionEnd", function() {
							toComplete();
						});
					},
					to: function(toIndex, opt) {
						opt = opt || {};
						if (toIndex >= slides.length) {
							toIndex = 0;
						} else if (toIndex < 0){
							toIndex = slides.length - 1;
						}
						var duration = options.duration,
							node = slides.eq(toIndex),
							indexInViewport = $.inArray(toIndex, inViewport),
							nodeLeft = 0;

						// http://bugs.jquery.com/ticket/10364
						scroller.stop();

						switching.moving = true;
						clearTimeout(autoPlayTimeout);

						if (indexInViewport !== -1) {
							nodeLeft = endCoords[indexInViewport];
						// add node if not exist
						} else {
							var i, nodeIndex = slides.index(node);
							// set position in viewport
							indexInViewport = undefined;

							if (opt.dirX === -1) {
								endCoords.unshift(0);
								inViewport.unshift(nodeIndex);
							} else if (opt.dirX === 1) {
								endCoords.push(0);
								inViewport.push(nodeIndex);
							} else {
								for (i = inViewport.length - 1; i >= 0; i--){
									if (inViewport[i] < nodeIndex) {
										endCoords.splice(i + 1, 0, 0);
										inViewport.splice(i + 1, 0, nodeIndex);
										indexInViewport = 0; // temp
										break;
									}
								}
								if (indexInViewport === undefined) {
									endCoords.unshift(endCoords);
									inViewport.unshift(nodeIndex);
								}
							}
							indexInViewport = $.inArray(nodeIndex, inViewport);

							// set start coordinates
							if (indexInViewport === 0) {
								nodeLeft = endCoords[1] - (node.outerWidth() + options.margin);
								crossLeft(node, nodeLeft);
								endCoords[indexInViewport] = nodeLeft;
							} else if (indexInViewport === inViewport.length - 1) {
								nodeLeft = endCoords[indexInViewport - 1] + slides.eq(inViewport[indexInViewport - 1]).outerWidth() + options.margin;
								crossLeft(node, nodeLeft);
								endCoords[indexInViewport] = nodeLeft;
							} else {
								var nodeWidth = node.outerWidth();
								node.css("opacity", 0);
								// for example: inViewport = [0,1,2,3,4] and indexInViewport = 2
								// center, [2]
								nodeLeft = endCoords[indexInViewport+1] - Math.round((nodeWidth + options.margin) / 2);
								endCoords[indexInViewport] = nodeLeft;
								crossLeft(node, nodeLeft);

								// left calc, [0,1]
								var leftInL = nodeLeft, l = inViewport.length;
								for (i = indexInViewport - 1; i >= 0; i--) {
									leftInL -= slides.eq(inViewport[i]).outerWidth() + options.margin;
									endCoords[i] = leftInL;
								}

								// right calc, [3,4]
								var leftInR = nodeLeft;
								
								for (i = indexInViewport + 1; i < l; i++) {
									leftInR += slides.eq(inViewport[i]).outerWidth() + options.margin;
									endCoords[i] = leftInR;
								}

								for (i = 0; i < l; i++) {
									slides.eq(inViewport[i])
										.animate({ left: endCoords[i] }, {
											duration: duration,
											queue: false,
											complete: function() {
												if (node.is(this)) {
													node.animate({ opacity: 1 }, duration);
												}
											}
										});
								}
							}
						}

						if (opt.pxInMs) {
							duration = Math.min(Math.max(Math.round(Math.abs(crossLeft(scroller)) / opt.pxInMs), 100), duration);
						}

						toComplete = function() {
							crossLeft(slides.not(node), -10000);
							inViewport = [slides.index(node)];
							endCoords = [nodeLeft];
							if (opt.complete) {
								opt.complete();
							}
							switching.moving = false;
							autoPlay();
						};

						// go!
						if (!isTouchWebkit) {
							scroller.animate(
								{
									left: - nodeLeft
								}, {
									duration: duration,
									queue: false,
									complete: toComplete
							});
						} else {
							crossLeft(scroller, - nodeLeft, duration);
						}

						ret.current = toIndex;
						changedView(toIndex);
					},

					stop: function() {
						if (isTouchWebkit) {
							crossLeft(scroller, crossLeft(scroller));
						} else {
							scroller.stop();
						}
					},

					moveStart: function(e) {
						switching.moving = true;
						clearTimeout(autoPlayTimeout);
						scroller.stop();

						switching.startPageX = e.pageX;
						// if deceleration in progress
						var scrollerLeft = crossLeft(scroller),
							lastLeft;

						switching.leftCount = scrollerLeft;
						if (inViewport[0] === 0) {
							if (endCoords[0] + scrollerLeft > 0) {
								switching.leftCount = scrollerLeft + (endCoords[0] + scrollerLeft) * 3;
							}
						} else if (inViewport[inViewport.length - 1] === slides.length - 1) {
							lastLeft = endCoords[inViewport.length - 1] + scrollerLeft;
							if (lastLeft < 0) {
								switching.leftCount = scrollerLeft + lastLeft * 3;
							}
						}
					},

					move: function(e, previousPageX) {
						var diffX = e.pageX - previousPageX,
							scrollerLeft = crossLeft(scroller),
							first = slides.eq(inViewport[0]),
							lastIndex = inViewport.length - 1,
							last = slides.eq(inViewport[lastIndex]),
							add, addLeft, deceleration;

						switching.leftCount += diffX;
						// add slide to left
						if (diffX > 0) {
							// while is used in case of fast moving
							while (inViewport[0] !== 0 && scrollerLeft + endCoords[0] + diffX > options.margin) {
								add = slides.eq(inViewport[0] - 1); // or "first.index() - 1"
								addLeft = endCoords[0] - add.outerWidth() - options.margin;
								crossLeft(add, addLeft);
								endCoords.unshift(addLeft);
								inViewport.unshift(inViewport[0] - 1);
								lastIndex++;
								first = add;
							}
						}
						// deceleration in left
						if ((
							    (diffX > 0 && scrollerLeft + endCoords[0] + diffX > 0)
							 || (diffX < 0 && scrollerLeft + endCoords[0] > 0)
							) && inViewport[0] === 0
						) {
							deceleration = Math.min(Math.round((switching.leftCount + endCoords[0]) / 4), viewport.innerWidth() / 2);
							diffX = deceleration - (scrollerLeft + endCoords[0]);
						}

						// add slide to right
						if (diffX < 0) {
							while (!last.is(slides.last()) && scrollerLeft + endCoords[lastIndex] + diffX + last.outerWidth() + options.margin < viewport.innerWidth()) {
								add = slides.eq(inViewport[lastIndex] + 1);
								addLeft = endCoords[lastIndex] + last.outerWidth() + options.margin;
								crossLeft(add, addLeft);
								endCoords.push(addLeft);
								inViewport.push(inViewport[lastIndex++] + 1);
								last = add;
							}
						}
						// deceleration in right
						if ((
							    (diffX > 0 && scrollerLeft + endCoords[lastIndex] < 0)
							 || (diffX < 0 && scrollerLeft + endCoords[lastIndex] + diffX < 0)
							) && last.is(slides.last())
						) {
							deceleration = Math.max(Math.round((switching.leftCount + endCoords[lastIndex]) / 4), - viewport.innerWidth() / 2);
							diffX = deceleration - (scrollerLeft + endCoords[lastIndex]);
						}

						crossLeft(scroller, scrollerLeft + diffX);
					},

					moveEnd: function(e, pxInMs, directionX, startTime, distX, distY) {
						// TODO clear inViewport
						var inViewportLength = inViewport.length,
							scrollerLeft = crossLeft(scroller),
							toIndex = inViewportLength - 1,
							opt;
						if (endCoords[0] + scrollerLeft > 0) { // space in left
							toIndex = 0;
						} else if (endCoords[inViewport.length - 1] + scrollerLeft < 0) { // space in right
							/* nothing */
						} else {
							opt = {pxInMs: pxInMs};
							// maximum area
							var i, right,
								maximumInViewport = inViewportLength - 1,
								viewportWidth = viewport.innerWidth();
							for (i = 0 ; i < inViewportLength - 1; i++ ) { // no need check last
								right = endCoords[i] + slides.eq(inViewport[i]).outerWidth() + scrollerLeft;
								if (right > 0 && right > viewportWidth - (endCoords[i+1] + scrollerLeft)) {
									maximumInViewport = i;
									break;
								}
							}

							if (onFly) {
								toIndex = maximumInViewport;
							} else {
								var touched = inViewportLength - 1,
									scrollerOffsetLeft = Math.round(scroller.offset().left); // cast
								for (i = 0; i < inViewportLength; i++ ) {
									if (endCoords[i] + scrollerOffsetLeft > e.pageX) {
										touched = i - 1;
										break;
									}
								}
								toIndex = maximumInViewport;
								// 5% of diagonal
								if (maximumInViewport === touched &&
									e.timeStamp - startTime < 1000 &&
									distX + distY > Math.sqrt(Math.pow(viewport.height(), 2) + Math.pow(viewportWidth, 2)) * 0.05)
								{
									toIndex = Math.max(0, Math.min(inViewportLength - 1, toIndex + directionX));
								}
							}
						}

						toIndex = inViewport[toIndex];
						switching.to(toIndex, opt);
					}
				};
			}());

			switching.init();

			if (isTouchWebkit) {
				var onFly = false;
				scroller.bind("webkitTransitionStart", function() {
					onFly = true;
				});
				scroller.bind("webkitTransitionEnd", function() {
					onFly = false;
				});
			}

			function changedView(index) {
				pagination.removeClass(options.currentClass)
					.eq(index).addClass(options.currentClass);
			}

			// set item or next
			function step(toIndex, complete) {
				var currentIndex = ret.current;
				if (currentIndex !== toIndex) {
					toIndex = toIndex !== undefined ? toIndex : currentIndex + 1;

					switching.to(toIndex, { complete: complete });
				}
			}

			function next(complete) {
				switching.to(ret.current + 1, { dirX: 1, complete: complete });
			}

			function prev(complete) {
				switching.to(ret.current - 1, { dirX: -1, complete: complete });
			}

			/* Autoplay */
			var mouseInViewport = false,
				isPlay = false,
				autoPlayTimeout;

			viewport.hover(function() {
					clearTimeout(autoPlayTimeout);
					mouseInViewport = true;
				}, function() {
					mouseInViewport = false;
					autoPlay();
			});

			function autoPlay() {
				if (isPlay) {
					start();
				}
			}

			function start() {
				isPlay = true;
				if (!mouseInViewport) {
					clearTimeout(autoPlayTimeout);
					autoPlayTimeout = setTimeout(function() {
						if (!switching.moving && !mouseInViewport) {
							next();
						}
					}, options.delay);
				}
				return options.container;
			}

			function stop() {
				clearTimeout(autoPlayTimeout);
				isPlay = false;
				return options.container;
			}

			/* Navigation */
			// not use delegate(), for correct selection in mobile webkit
			pagination.click(function() {
				step(pagination.index(this));
			});

			// left/right button
			$(options.prev, container).click(function() {
				prev();
			});

			$(options.next, container).click(function() {
				next();
			});

			function initTouch() {
				var doc = $(document), startTime, defaultPrevented,
					moving = false, // if mouseup in stopPropogation area
					times, coords, // for accelerate
					startPageX, previousPageX, distX, absDistX, startLeft,
					startPageY, previousPageY, distY, absDistY,
					start = function(e) {
						if (e.which > 1) {
							return;
						}

						if (moving) {
							doc.triggerHandler(touchend + "." + namespace);
						}

						moving = true;
						defaultPrevented = false,
						startTime = e.timeStamp;
						distX = distY = 0;

						times = [0, 0, 0, startTime];

						// delegate to document for coorect touches length
						if (e.originalEvent.touches) {
							doc.one(touchstart, touchStart);
							return;
						}

						// no drag images
						e.preventDefault();

						startPageX = previousPageX = e.pageX;
						startPageY = previousPageY = e.pageY;
						startLeft = scroller[0].offsetLeft;

						coords = [0, 0, 0, startPageX];

						doc.bind(touchmove, move);
						doc.one(touchend + "." + namespace, end);

						switching.moveStart(e);
					},
					touchStart = function(e) {
						if (e.originalEvent.touches.length !== 1) {
							return;
						}

						startPageX = previousPageX = e.pageX = e.originalEvent.touches[0].pageX;
						startPageY = previousPageY = e.pageY = e.originalEvent.touches[0].pageY;
						absDistX = absDistY = 0;

						startLeft = new WebKitCSSMatrix(window.getComputedStyle(scroller[0]).webkitTransform).e;

						coords = [0, 0, 0, startPageX];

						doc.bind(touchmove, move);
						doc.one(touchend, end);

						switching.moveStart(e);
					},
					move = function(e) {
						var pageX, pageY;
						if (e.originalEvent.touches && isTouchWebkit) {
							if (e.originalEvent.touches.length !== 1) {
								return;
							}
							pageX = e.pageX = e.originalEvent.touches[0].pageX;
							pageY = e.pageY = e.originalEvent.touches[0].pageY;

							// iphone allow scrolling page
							absDistX += Math.abs(pageX - previousPageX);
							absDistY += Math.abs(pageY - previousPageY);

							// when long touching in one direction and then want to switch
							if (Math.abs(absDistX - absDistY) > 50) {
								var absDistXOld = absDistX;
								absDistX = Math.min(100, Math.max(0, absDistX - absDistY));
								absDistY = Math.min(100, Math.max(0, absDistY - absDistXOld));
							}

							if (pageX === previousPageX) {
								return;
							}

							// to scroll in a single direction
							if (!defaultPrevented) {
								if (absDistX > absDistY) {
									e.preventDefault();
									defaultPrevented = true;
								} else {
									end(e);
								}
							}
						} else {
							pageX = e.pageX;
							pageY = e.pageY;

							if (pageX === previousPageX) {
								return;
							}

							if (/msie/.test(navigator.userAgent.toLowerCase())) {
								e.preventDefault();
							}
						}

						distX += Math.abs(pageX - previousPageX);
						distY += Math.abs(pageY - previousPageY);
						times.shift();
						times.push(e.timeStamp);

						coords.shift();
						coords.push(pageX);

						switching.move(e, previousPageX);

						previousPageX = pageX;
						previousPageY = pageY;

					},
					end = function(e) {
						moving = false;
						// mobile webkit browser fix
						if (!e.originalEvent || e.originalEvent.touches) {
							e.pageX = previousPageX;
							e.pageY = previousPageY;
						}
						doc.unbind(touchmove, move);

						var i = times.length, pxInMs = 0, directionX = 0; // accelerate
						while (--i > 0) {
							if (times[i-1]) {
								var diffCoords = coords[i] - coords[i - 1];
								pxInMs += Math.abs(diffCoords)/(times[i] - times[i - 1]);
								if (diffCoords !== 0) {
									directionX = diffCoords > 0 ? -1 : 1;
								}
							}
						}
						pxInMs = pxInMs/times.length;

						switching.moveEnd(e, pxInMs, directionX, startTime, distX, distY);
						onFly = false;

						if (distX + distY > 4) {
							viewport.one("click", function(e) {
								e.preventDefault();
							});
						}
					};
				viewport.bind(touchstart, start);
			}
			if (options.mouseTouch&&mobile) {
				initTouch();
			}

			if (options.autoplay) {
				start();
			}

			container.data(namespace, ret);
		};

		$.fn.touchSlider = function(options) {
			options = options || {};
			options.container = this;
			touchSlider(options);
			return this;
		};
	});


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
	 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
	 * Digest Algorithm, as defined in RFC 1321.
	 * Version 2.1 Copyright (C) Paul Johnston 1999 - 2002.
	 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
	 * Distributed under the BSD License
	 * See http://pajhome.org.uk/crypt/md5 for more info.
	 */

	/*
	 * Configurable variables. You may need to tweak these to be compatible with
	 * the server-side, but the defaults work in most cases.
	 */
	var hexcase = 0;  /* hex output format. 0 - lowercase; 1 - uppercase        */
	var b64pad  = ""; /* base-64 pad character. "=" for strict RFC compliance   */
	var chrsz   = 8;  /* bits per input character. 8 - ASCII; 16 - Unicode      */

	/*
	 * These are the functions you'll usually want to call
	 * They take string arguments and return either hex or base-64 encoded strings
	 */
	function hex_md5(s){ return binl2hex(core_md5(str2binl(s), s.length * chrsz));}
	function b64_md5(s){ return binl2b64(core_md5(str2binl(s), s.length * chrsz));}
	function str_md5(s){ return binl2str(core_md5(str2binl(s), s.length * chrsz));}
	function hex_hmac_md5(key, data) { return binl2hex(core_hmac_md5(key, data)); }
	function b64_hmac_md5(key, data) { return binl2b64(core_hmac_md5(key, data)); }
	function str_hmac_md5(key, data) { return binl2str(core_hmac_md5(key, data)); }

	/*
	 * Perform a simple self-test to see if the VM is working
	 */
	function md5_vm_test()
	{
	  return hex_md5("abc") == "900150983cd24fb0d6963f7d28e17f72";
	}

	/*
	 * Calculate the MD5 of an array of little-endian words, and a bit length
	 */
	function core_md5(x, len)
	{
	  /* append padding */
	  x[len >> 5] |= 0x80 << ((len) % 32);
	  x[(((len + 64) >>> 9) << 4) + 14] = len;

	  var a =  1732584193;
	  var b = -271733879;
	  var c = -1732584194;
	  var d =  271733878;

	  for(var i = 0; i < x.length; i += 16)
	  {
	    var olda = a;
	    var oldb = b;
	    var oldc = c;
	    var oldd = d;

	    a = md5_ff(a, b, c, d, x[i+ 0], 7 , -680876936);
	    d = md5_ff(d, a, b, c, x[i+ 1], 12, -389564586);
	    c = md5_ff(c, d, a, b, x[i+ 2], 17,  606105819);
	    b = md5_ff(b, c, d, a, x[i+ 3], 22, -1044525330);
	    a = md5_ff(a, b, c, d, x[i+ 4], 7 , -176418897);
	    d = md5_ff(d, a, b, c, x[i+ 5], 12,  1200080426);
	    c = md5_ff(c, d, a, b, x[i+ 6], 17, -1473231341);
	    b = md5_ff(b, c, d, a, x[i+ 7], 22, -45705983);
	    a = md5_ff(a, b, c, d, x[i+ 8], 7 ,  1770035416);
	    d = md5_ff(d, a, b, c, x[i+ 9], 12, -1958414417);
	    c = md5_ff(c, d, a, b, x[i+10], 17, -42063);
	    b = md5_ff(b, c, d, a, x[i+11], 22, -1990404162);
	    a = md5_ff(a, b, c, d, x[i+12], 7 ,  1804603682);
	    d = md5_ff(d, a, b, c, x[i+13], 12, -40341101);
	    c = md5_ff(c, d, a, b, x[i+14], 17, -1502002290);
	    b = md5_ff(b, c, d, a, x[i+15], 22,  1236535329);

	    a = md5_gg(a, b, c, d, x[i+ 1], 5 , -165796510);
	    d = md5_gg(d, a, b, c, x[i+ 6], 9 , -1069501632);
	    c = md5_gg(c, d, a, b, x[i+11], 14,  643717713);
	    b = md5_gg(b, c, d, a, x[i+ 0], 20, -373897302);
	    a = md5_gg(a, b, c, d, x[i+ 5], 5 , -701558691);
	    d = md5_gg(d, a, b, c, x[i+10], 9 ,  38016083);
	    c = md5_gg(c, d, a, b, x[i+15], 14, -660478335);
	    b = md5_gg(b, c, d, a, x[i+ 4], 20, -405537848);
	    a = md5_gg(a, b, c, d, x[i+ 9], 5 ,  568446438);
	    d = md5_gg(d, a, b, c, x[i+14], 9 , -1019803690);
	    c = md5_gg(c, d, a, b, x[i+ 3], 14, -187363961);
	    b = md5_gg(b, c, d, a, x[i+ 8], 20,  1163531501);
	    a = md5_gg(a, b, c, d, x[i+13], 5 , -1444681467);
	    d = md5_gg(d, a, b, c, x[i+ 2], 9 , -51403784);
	    c = md5_gg(c, d, a, b, x[i+ 7], 14,  1735328473);
	    b = md5_gg(b, c, d, a, x[i+12], 20, -1926607734);

	    a = md5_hh(a, b, c, d, x[i+ 5], 4 , -378558);
	    d = md5_hh(d, a, b, c, x[i+ 8], 11, -2022574463);
	    c = md5_hh(c, d, a, b, x[i+11], 16,  1839030562);
	    b = md5_hh(b, c, d, a, x[i+14], 23, -35309556);
	    a = md5_hh(a, b, c, d, x[i+ 1], 4 , -1530992060);
	    d = md5_hh(d, a, b, c, x[i+ 4], 11,  1272893353);
	    c = md5_hh(c, d, a, b, x[i+ 7], 16, -155497632);
	    b = md5_hh(b, c, d, a, x[i+10], 23, -1094730640);
	    a = md5_hh(a, b, c, d, x[i+13], 4 ,  681279174);
	    d = md5_hh(d, a, b, c, x[i+ 0], 11, -358537222);
	    c = md5_hh(c, d, a, b, x[i+ 3], 16, -722521979);
	    b = md5_hh(b, c, d, a, x[i+ 6], 23,  76029189);
	    a = md5_hh(a, b, c, d, x[i+ 9], 4 , -640364487);
	    d = md5_hh(d, a, b, c, x[i+12], 11, -421815835);
	    c = md5_hh(c, d, a, b, x[i+15], 16,  530742520);
	    b = md5_hh(b, c, d, a, x[i+ 2], 23, -995338651);

	    a = md5_ii(a, b, c, d, x[i+ 0], 6 , -198630844);
	    d = md5_ii(d, a, b, c, x[i+ 7], 10,  1126891415);
	    c = md5_ii(c, d, a, b, x[i+14], 15, -1416354905);
	    b = md5_ii(b, c, d, a, x[i+ 5], 21, -57434055);
	    a = md5_ii(a, b, c, d, x[i+12], 6 ,  1700485571);
	    d = md5_ii(d, a, b, c, x[i+ 3], 10, -1894986606);
	    c = md5_ii(c, d, a, b, x[i+10], 15, -1051523);
	    b = md5_ii(b, c, d, a, x[i+ 1], 21, -2054922799);
	    a = md5_ii(a, b, c, d, x[i+ 8], 6 ,  1873313359);
	    d = md5_ii(d, a, b, c, x[i+15], 10, -30611744);
	    c = md5_ii(c, d, a, b, x[i+ 6], 15, -1560198380);
	    b = md5_ii(b, c, d, a, x[i+13], 21,  1309151649);
	    a = md5_ii(a, b, c, d, x[i+ 4], 6 , -145523070);
	    d = md5_ii(d, a, b, c, x[i+11], 10, -1120210379);
	    c = md5_ii(c, d, a, b, x[i+ 2], 15,  718787259);
	    b = md5_ii(b, c, d, a, x[i+ 9], 21, -343485551);

	    a = safe_add(a, olda);
	    b = safe_add(b, oldb);
	    c = safe_add(c, oldc);
	    d = safe_add(d, oldd);
	  }
	  return Array(a, b, c, d);

	}

	/*
	 * These functions implement the four basic operations the algorithm uses.
	 */
	function md5_cmn(q, a, b, x, s, t)
	{
	  return safe_add(bit_rol(safe_add(safe_add(a, q), safe_add(x, t)), s),b);
	}
	function md5_ff(a, b, c, d, x, s, t)
	{
	  return md5_cmn((b & c) | ((~b) & d), a, b, x, s, t);
	}
	function md5_gg(a, b, c, d, x, s, t)
	{
	  return md5_cmn((b & d) | (c & (~d)), a, b, x, s, t);
	}
	function md5_hh(a, b, c, d, x, s, t)
	{
	  return md5_cmn(b ^ c ^ d, a, b, x, s, t);
	}
	function md5_ii(a, b, c, d, x, s, t)
	{
	  return md5_cmn(c ^ (b | (~d)), a, b, x, s, t);
	}

	/*
	 * Calculate the HMAC-MD5, of a key and some data
	 */
	function core_hmac_md5(key, data)
	{
	  var bkey = str2binl(key);
	  if(bkey.length > 16) bkey = core_md5(bkey, key.length * chrsz);

	  var ipad = Array(16), opad = Array(16);
	  for(var i = 0; i < 16; i++)
	  {
	    ipad[i] = bkey[i] ^ 0x36363636;
	    opad[i] = bkey[i] ^ 0x5C5C5C5C;
	  }

	  var hash = core_md5(ipad.concat(str2binl(data)), 512 + data.length * chrsz);
	  return core_md5(opad.concat(hash), 512 + 128);
	}

	/*
	 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
	 * to work around bugs in some JS interpreters.
	 */
	function safe_add(x, y)
	{
	  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
	  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	  return (msw << 16) | (lsw & 0xFFFF);
	}

	/*
	 * Bitwise rotate a 32-bit number to the left.
	 */
	function bit_rol(num, cnt)
	{
	  return (num << cnt) | (num >>> (32 - cnt));
	}

	/*
	 * Convert a string to an array of little-endian words
	 * If chrsz is ASCII, characters >255 have their hi-byte silently ignored.
	 */
	function str2binl(str)
	{
	  var bin = Array();
	  var mask = (1 << chrsz) - 1;
	  for(var i = 0; i < str.length * chrsz; i += chrsz)
	    bin[i>>5] |= (str.charCodeAt(i / chrsz) & mask) << (i%32);
	  return bin;
	}

	/*
	 * Convert an array of little-endian words to a string
	 */
	function binl2str(bin)
	{
	  var str = "";
	  var mask = (1 << chrsz) - 1;
	  for(var i = 0; i < bin.length * 32; i += chrsz)
	    str += String.fromCharCode((bin[i>>5] >>> (i % 32)) & mask);
	  return str;
	}

	/*
	 * Convert an array of little-endian words to a hex string.
	 */
	function binl2hex(binarray)
	{
	  var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
	  var str = "";
	  for(var i = 0; i < binarray.length * 4; i++)
	  {
	    str += hex_tab.charAt((binarray[i>>2] >> ((i%4)*8+4)) & 0xF) +
	           hex_tab.charAt((binarray[i>>2] >> ((i%4)*8  )) & 0xF);
	  }
	  return str;
	}

	/*
	 * Convert an array of little-endian words to a base-64 string
	 */
	function binl2b64(binarray)
	{
	  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	  var str = "";
	  for(var i = 0; i < binarray.length * 4; i += 3)
	  {
	    var triplet = (((binarray[i   >> 2] >> 8 * ( i   %4)) & 0xFF) << 16)
	                | (((binarray[i+1 >> 2] >> 8 * ((i+1)%4)) & 0xFF) << 8 )
	                |  ((binarray[i+2 >> 2] >> 8 * ((i+2)%4)) & 0xFF);
	    for(var j = 0; j < 4; j++)
	    {
	      if(i * 8 + j * 6 > binarray.length * 32) str += b64pad;
	      else str += tab.charAt((triplet >> 6*(3-j)) & 0x3F);
	    }
	  }
	  return str;
	}


	exports.hex_md5 = hex_md5;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require, exports, module){
	    __webpack_require__(3);
	    __webpack_require__(8);
	    __webpack_require__(9);
	    var utils = __webpack_require__(4);
	    var Swiper = __webpack_require__(13);
	    // var Swiper = require('./libs/swiper.jquery.umd');
	    __webpack_require__(14);
	    // //console.log(BMap)

	    $(function () {
	        var $body = $('body');
	        // 百度地图API功能
	        function getLocalCity() {
	            var map = new BMap.Map('choosed-city-id');
	            var point = new BMap.Point(116.331398,39.897445);
	            map.centerAndZoom(point,12);

	            function myFun(result){
	                // //console.log("result:",result)
	                cityName = result.name;
	                map.setCenter(cityName);
	                // //console.log("当前定位城市:"+cityName);
	                if(!$.cookie('locals_city')){
	                    getCityList(cityName,function (newArr) {
	                        // //console.log("newArr:",newArr)
	                        var is_locals_city= $.cookie('locals_city');
	                        // //console.log("is_locals_city:",is_locals_city)
	                        if(!is_locals_city&&newArr.length){
	                            // //console.log("初始化定位城市:",newArr[0]);
	                            changeCity(newArr[0])
	                        }
	                        if(newArr.length){
	                            $.cookie('locals_city', newArr[0].parentId,{path:"/"}); // 存储 cookie
	                        }

	                    })
	                }

	                // changeCity(cityName)
	                return cityName
	            }
	            var myCity = new BMap.LocalCity();
	            var cityName = myCity.get(myFun);
	        }
	        if(!$.cookie('locals_city')&&!utils.browser.ie){
	            getLocalCity();
	        }else if(utils.browser.ie){
	            alert('IE')
	        }


	        var location = window.location;
	        var curPathname = location.pathname;
	        var $nav_A = $('.nav li a');
	        var href = '';

	        //下拉框的构造
	        utils.BuildSelect($('.select-box'));

	        $.each($nav_A,function (index,arr) {
	            href = $(arr).attr('href');
	            if(curPathname.search(href)!=-1){
	                $(arr).parent().addClass('on').siblings().removeClass('on')
	            }
	            if(href=='/treat/regsource/list'&&curPathname=='/treat/reg/doctorView'){
	                $(arr).parent().addClass('on').siblings().removeClass('on')
	            }


	        });

	        // $('.city-name').on('click',function(e){
	        //     e.stopPropagation();
	        //     var $this = $(this);
	        //     var OChooseCity = $this.find('.choose-city');
	        //     if(OChooseCity.css('display') == 'none'){
	        //         OChooseCity.fadeIn();
	        //         //console.log(OChooseCity.data('load'));
	        //         var data = OChooseCity.data('load')
	        //         if(data === 'first'){
	        //             getCityList();
	        //             OChooseCity.data('load','non-first');
	        //         }
	        //     }
	        // });
	        $('.city-name').hover(function (e) {
	            // e.stopPropagation();
	            var $this = $(this);
	            var OChooseCity = $this.find('.choose-city');
	            OChooseCity.stop(false,true).slideDown();
	            // OChooseCity.stop(false,true).fadeIn();
	            var data = OChooseCity.data('load');
	            if(data === 'first'){
	                getCityList();
	                OChooseCity.data('load','non-first');
	            }

	        },function (e) {
	            e.stopPropagation();
	            var $this = $(this);
	            var OChooseCity = $this.find('.choose-city');
	            OChooseCity.stop(false,true).slideUp();
	            // OChooseCity.stop(false,true).fadeOut();
	        });
	        // $(window).on('click',function(){
	        //     var OChooseCity = $('.city-name .choose-city');
	        //     if(OChooseCity.css('display') != 'none') {
	        //         OChooseCity.fadeOut();
	        //     }
	        // });


	        $("section img").lazyload({
	            effect : "fadeIn"
	        });
	        var winHeight = $(window).height();
	        $gotoTop = $('.gotoTop');

	        $gotoTop.click(function () {
	            $('body,html').animate({scrollTop:0},600)
	        })
	        // $body.on('click','.gotoTop',function () {
	        //     // $(window).scrollTop(0);
	        //     alert("返回顶部")
	        //     if(utils.browser.ios){
	        //         alert('ios端')
	        //     }else if(utils.browser.android){
	        //         alert('android端')
	        //     }else{
	        //         //console.log("电脑端")
	        //     }
	        //     $('body,html').animate({scrollTop:0},600)
	        // });

	        $(window).scroll(function () {
	            var scrollTop = $(window).scrollTop();
	            if(scrollTop>winHeight/2){
	                $gotoTop.show()
	            }else{
	                $gotoTop.fadeOut(700)
	            }
	        });
	        
	        var winWidth = $(window).width();
	        var $nav = $('.nav').find('.wrapper');
	        if(winWidth<768){
	            //导航滑动
	            $nav.addClass('swiper-container');
	            var swiper = new Swiper('.swiper-container', {
	                nextButton: '.swiper-button-next',
	                prevButton: '.swiper-button-prev',
	                slidesPerView: 4
	                // spaceBetween: 30
	            });
	        }else{
	            $nav.removeClass().addClass('wrapper');
	            $nav.find('li').removeAttr("style");
	        }
	        $(window).resize(function () {
	            winWidth = $(window).width();
	            //console.log("winWidth:",winWidth)
	            if(winWidth<768){
	                //导航滑动
	                $nav.addClass('swiper-container');
	                var swiper = new Swiper('.swiper-container', {
	                    nextButton: '.swiper-button-next',
	                    prevButton: '.swiper-button-prev',
	                    slidesPerView: 4
	                    // spaceBetween: 30
	                });
	                //console.log("111")
	            }else{
	                //console.log("222:",swiper)
	                $nav.removeClass().addClass('wrapper');
	                $nav.find('.swiper-slide').addClass('3333333333333').removeAttr("style")
	            }
	        })
	    })

	    var curCityArr = '';
	    function getCityList(cityName,callback){
	        var cityName = cityName||'';
	        utils.SendAjax({
	            url: '/dic/list/typeAndLevel',
	            param: {type:"district",level:"2",activeState:'1'},
	            method: 'GET',
	            tipText: '获取城市',
	            callback: function (result) {
	                var data = result.data;
	                var cityHtml = '';
	                var choosedCityId = $('#choosed-city-id').val();
	                for(var i = 0; i < data.length; i++){
	                    var city = data[i];
	                    if(data[i].id == choosedCityId){
	                        cityHtml += '<a href="javascript:;" class="city on">'+city.name+'</a>';
	                    }else{
	                        cityHtml += '<a href="javascript:;" class="city">'+city.name+'</a>';
	                    }
	                }
	                $('.city-list').html(cityHtml);
	                var citys = $('.city-list .city');
	                for(var i = 0; i < data.length; i++){
	                    citys.eq(i).data('city',data[i]).on('click',function(){
	                        changeCity($(this));
	                    });
	                }

	                if(callback){
	                    newArr= data.filter(function (item) {
	                        // return item.name == '南京'
	                        return item.name == cityName
	                    })
	                    // //console.log("过滤后的data：",newArr)
	                    callback&&callback(newArr)
	                }

	            },
	            errorFun: function (result) {

	            }
	        });
	    }

	    function changeCity($this){
	        // var city = $this=='string'? $this: $this.data&&$this.data('city');
	        var city =$this.hasClass&&$this.hasClass('city')&&$this.data('city')||$this;
	        // //console.log('city:',city)
	        utils.SendAjax({
	            url: '/changeCity',
	            param: {city:city},
	            method: 'GET',
	            tipText: '切换城市',
	            callback: function (result) {

	                window.location.reload();
	                // //console.log("$(this).text():",city.name)
	                // $('.city-name em').html(city.name)
	            },
	            errorFun: function (result) {

	            }
	        });
	    }

	    //移动端
	    
	    var $nav_toggle = $('.nav_toggle');
	    var $left_nav = $('.left-nav');
	    $nav_toggle.click(function () {
	        $left_nav.slideToggle();
	        $(this).parents('aside').toggleClass('active');
	    })

	    var $topBar_info_aside=$('.topBar_info aside');
	    $('.wapUser').click(function () {
	        var accountId = $.cookie('accountId');
	        // //console.log("accountId:",accountId)
	        if(accountId){
	            $topBar_info_aside.slideToggle();
	        }else{
	            window.location.href = '/login';
	        }


	    })
	    if(utils.browser.ios){
	        var $footerWap = $('.footerWap');
	        // $('input').focus(function () {
	        //     $footerWap.addClass('footer_fixed');
	        //     //console.log("进入")
	        // }).blur(function () {
	        //     // $footerWap.removeClass('footer_fixed');
	        //     //console.log("失去焦点")
	        // })

	        //只作用于输入框获得焦点时
	        $('input').focus(function(){
	            var _this = this;
	            //无键盘时输入框到浏览器窗口顶部距离
	            var noInputViewHeight = $(window).height() - $footerWap.height();
	            // //console.log("noInputViewHeight:",noInputViewHeight)
	            //网页正文内容高度
	            var contentHeight = $(document).height() - $footerWap.height();
	            //控制正文内容高度大于一屏，保证输入框固定底部
	            contentHeight = contentHeight > noInputViewHeight ? contentHeight : noInputViewHeight;
	            //因为弹出输入法需要时间，需延时处理
	            setTimeout(function(){
	                //弹出输入法时滚动条的起始滚动距离
	                var startScrollY = $(window).scrollTop();
	                // //console.log("startScrollY:",startScrollY)
	                //弹出输入法时输入框到窗口顶部的距离，即到软键盘顶部的起始距离
	                var inputTopHeight = $(_this).offset().top - startScrollY;
	                //弹出输入法时输入框预期位置，即紧贴软键盘时的位置。因输入框此时处于居中状态，所以其到窗口顶部距离即为需往下移动的距离。
	                var inputTopPos = $(_this).offset().top + inputTopHeight;
	                //控制div不超出正文范围
	                inputTopPos = inputTopPos > contentHeight ? contentHeight : inputTopPos;
	                //设置输入框位置使其紧贴输入框
	                // $(_this).css({'position':'absolute', 'top':inputTopPos });
	                // $footerWap.css({'position':'absolute', 'top':inputTopPos });
	                $footerWap.css({'position':'absolute', 'top':noInputViewHeight });
	                //给窗口对象绑定滚动事件，保证页面滚动时div能吸附软键盘
	                $(window).bind('scroll', function(){
	                    //表示此时有软键盘存在，输入框浮在页面上了
	                    if (inputTopHeight != noInputViewHeight) {
	                        //页面滑动后，输入框需跟随移动的距离
	                        var offset = $(this).scrollTop() - startScrollY;
	                        // //console.log("offset:",offset);
	                        //输入框移动后位置
	                        // afterScrollTopPos = inputTopPos + offset;
	                        afterScrollTopPos = noInputViewHeight + offset;
	                        //设置输入框位置使其紧贴输入框
	                        // $(_this).css({'position':'absolute', 'top':afterScrollTopPos });
	                        $footerWap.css({'position':'absolute', 'top':afterScrollTopPos });
	                    }
	                });
	            }, 100);
	        }).blur(function(){//输入框失焦后还原初始状态
	            $(".div-input").removeAttr('style');
	            $(window).unbind('scroll');
	        });

	    }

	    // $nav_toggle.hover(
	    //     function () {
	    //         $left_nav.slideDown();
	    //         $(this).parents('aside').addClass('active');
	    //     },
	    //     function () {
	    //         // $left_nav.slideUp()
	    //     }
	    // )



	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
	 * Lazy Load - jQuery plugin for lazy loading images
	 *
	 * Copyright (c) 2007-2013 Mika Tuupola
	 *
	 * Licensed under the MIT license:
	 *   http://www.opensource.org/licenses/mit-license.php
	 *
	 * Project home:
	 *   http://www.appelsiini.net/projects/lazyload
	 *
	 * Version:  1.9.3
	 *
	 */

	(function (factory) {
	    if(true){ // AMD
	        // you may need to change `define([------>'jquery'<------], factory)`
	        // if you use zepto, change it rely name, such as `define(['zepto'], factory)`
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	        // define(['zepto'], factory)
	    }if (true) {
	        // 如果define已被定义，模块化代码
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
	            // 返回构造函数 CommonJS
	            // console.log('CommonJS')
	            return factory(window.jQuery,window, document, undefined);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }  else{ // Global
	        factory(window.jQuery || window.Zepto)
	    }
	})(function($, window, document, undefined) {
	    var $window = $(window);

	    $.fn.lazyload = function(options) {
	        var elements = this;
	        var $container;
	        var settings = {
	            threshold       : 0,
	            failure_limit   : 0,
	            event           : "scroll",
	            effect          : "show",
	            container       : window,
	            data_attribute  : "original",
	            skip_invisible  : true,
	            appear          : null,
	            load            : null,
	            placeholder     : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
	        };

	        function update() {
	            var counter = 0;

	            elements.each(function() {
	                var $this = $(this);
	                if (settings.skip_invisible && !$this.is(":visible")) {
	                    return;
	                }
	                if ($.abovethetop(this, settings) ||
	                    $.leftofbegin(this, settings)) {
	                    /* Nothing. */
	                } else if (!$.belowthefold(this, settings) &&
	                    !$.rightoffold(this, settings)) {
	                    $this.trigger("appear");
	                    /* if we found an image we'll load, reset the counter */
	                    counter = 0;
	                } else {
	                    if (++counter > settings.failure_limit) {
	                        return false;
	                    }
	                }
	            });

	        }

	        if(options) {
	            /* Maintain BC for a couple of versions. */
	            if (undefined !== options.failurelimit) {
	                options.failure_limit = options.failurelimit;
	                delete options.failurelimit;
	            }
	            if (undefined !== options.effectspeed) {
	                options.effect_speed = options.effectspeed;
	                delete options.effectspeed;
	            }

	            $.extend(settings, options);
	        }

	        /* Cache container as jQuery as object. */
	        $container = (settings.container === undefined ||
	        settings.container === window) ? $window : $(settings.container);

	        /* Fire one scroll event per scroll. Not one scroll event per image. */
	        if (0 === settings.event.indexOf("scroll")) {
	            $container.bind(settings.event, function() {
	                return update();
	            });
	        }

	        this.each(function() {
	            var self = this;
	            var $self = $(self);

	            self.loaded = false;

	            /* If no src attribute given use data:uri. */
	            if ($self.attr("src") === undefined || $self.attr("src") === false) {
	                if ($self.is("img")) {
	                    $self.attr("src", settings.placeholder);
	                }
	            }

	            /* When appear is triggered load original image. */
	            $self.one("appear", function() {
	                if (!this.loaded) {
	                    if (settings.appear) {
	                        var elements_left = elements.length;
	                        settings.appear.call(self, elements_left, settings);
	                    }
	                    $("<img />")
	                        .bind("load", function() {

	                            var original = $self.attr("data-" + settings.data_attribute);
	                            $self.hide();
	                            if ($self.is("img")) {
	                                $self.attr("src", original);
	                            } else {
	                                $self.css("background-image", "url('" + original + "')");
	                            }
	                            $self[settings.effect](settings.effect_speed);

	                            self.loaded = true;

	                            /* Remove image from array so it is not looped next time. */
	                            var temp = $.grep(elements, function(element) {
	                                return !element.loaded;
	                            });
	                            elements = $(temp);

	                            if (settings.load) {
	                                var elements_left = elements.length;
	                                settings.load.call(self, elements_left, settings);
	                            }
	                        })
	                        .attr("src", $self.attr("data-" + settings.data_attribute));
	                }
	            });

	            /* When wanted event is triggered load original image */
	            /* by triggering appear.                              */
	            if (0 !== settings.event.indexOf("scroll")) {
	                $self.bind(settings.event, function() {
	                    if (!self.loaded) {
	                        $self.trigger("appear");
	                    }
	                });
	            }
	        });

	        /* Check if something appears when window is resized. */
	        $window.bind("resize", function() {
	            update();
	        });

	        /* With IOS5 force loading images when navigating with back button. */
	        /* Non optimal workaround. */
	        if ((/(?:iphone|ipod|ipad).*os 5/gi).test(navigator.appVersion)) {
	            $window.bind("pageshow", function(event) {
	                if (event.originalEvent && event.originalEvent.persisted) {
	                    elements.each(function() {
	                        $(this).trigger("appear");
	                    });
	                }
	            });
	        }

	        /* Force initial check if images should appear. */
	        $(document).ready(function() {
	            update();
	        });

	        return this;
	    };

	    /* Convenience methods in jQuery namespace.           */
	    /* Use as  $.belowthefold(element, {threshold : 100, container : window}) */

	    $.belowthefold = function(element, settings) {
	        var fold;

	        if (settings.container === undefined || settings.container === window) {
	            fold = (window.innerHeight ? window.innerHeight : $window.height()) + $window.scrollTop();
	        } else {
	            fold = $(settings.container).offset().top + $(settings.container).height();
	        }

	        return fold <= $(element).offset().top - settings.threshold;
	    };

	    $.rightoffold = function(element, settings) {
	        var fold;

	        if (settings.container === undefined || settings.container === window) {
	            fold = $window.width() + $window.scrollLeft();
	        } else {
	            fold = $(settings.container).offset().left + $(settings.container).width();
	        }

	        return fold <= $(element).offset().left - settings.threshold;
	    };

	    $.abovethetop = function(element, settings) {
	        var fold;

	        if (settings.container === undefined || settings.container === window) {
	            fold = $window.scrollTop();
	        } else {
	            fold = $(settings.container).offset().top;
	        }

	        return fold >= $(element).offset().top + settings.threshold  + $(element).height();
	    };

	    $.leftofbegin = function(element, settings) {
	        var fold;

	        if (settings.container === undefined || settings.container === window) {
	            fold = $window.scrollLeft();
	        } else {
	            fold = $(settings.container).offset().left;
	        }

	        return fold >= $(element).offset().left + settings.threshold + $(element).width();
	    };

	    $.inviewport = function(element, settings) {
	        return !$.rightoffold(element, settings) && !$.leftofbegin(element, settings) &&
	            !$.belowthefold(element, settings) && !$.abovethetop(element, settings);
	    };

	    /* Custom selectors for your convenience.   */
	    /* Use as $("img:below-the-fold").something() or */
	    /* $("img").filter(":below-the-fold").something() which is faster */

	    $.extend($.expr[":"], {
	        "below-the-fold" : function(a) { return $.belowthefold(a, {threshold : 0}); },
	        "above-the-top"  : function(a) { return !$.belowthefold(a, {threshold : 0}); },
	        "right-of-screen": function(a) { return $.rightoffold(a, {threshold : 0}); },
	        "left-of-screen" : function(a) { return !$.rightoffold(a, {threshold : 0}); },
	        "in-viewport"    : function(a) { return $.inviewport(a, {threshold : 0}); },
	        /* Maintain BC for couple of versions. */
	        "above-the-fold" : function(a) { return !$.belowthefold(a, {threshold : 0}); },
	        "right-of-fold"  : function(a) { return $.rightoffold(a, {threshold : 0}); },
	        "left-of-fold"   : function(a) { return !$.rightoffold(a, {threshold : 0}); }
	    });

	});

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require,exports,module) {
	    var utils = __webpack_require__(4);
	    __webpack_require__(10);
	    __webpack_require__(12);
	    // require('cookie');

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
	        $cartNum.text(cartNum);
	    }
	    function cartCoutDelOne() {
	        var cartNum = parseInt($cartNum.text())-1;
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

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {//! moment.js
	//! version : 2.10.3
	//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
	//! license : MIT
	//! momentjs.com

	(function (global, factory) {
	     true ? module.exports = factory() :
	    typeof define === 'function' && define.amd ? define(factory) :
	    global.moment = factory()
	}(this, function () { 'use strict';

	    var hookCallback;

	    function utils_hooks__hooks () {
	        return hookCallback.apply(null, arguments);
	    }

	    // This is done to register the method called with moment()
	    // without creating circular dependencies.
	    function setHookCallback (callback) {
	        hookCallback = callback;
	    }

	    function isArray(input) {
	        return Object.prototype.toString.call(input) === '[object Array]';
	    }

	    function isDate(input) {
	        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
	    }

	    function map(arr, fn) {
	        var res = [], i;
	        for (i = 0; i < arr.length; ++i) {
	            res.push(fn(arr[i], i));
	        }
	        return res;
	    }

	    function hasOwnProp(a, b) {
	        return Object.prototype.hasOwnProperty.call(a, b);
	    }

	    function extend(a, b) {
	        for (var i in b) {
	            if (hasOwnProp(b, i)) {
	                a[i] = b[i];
	            }
	        }

	        if (hasOwnProp(b, 'toString')) {
	            a.toString = b.toString;
	        }

	        if (hasOwnProp(b, 'valueOf')) {
	            a.valueOf = b.valueOf;
	        }

	        return a;
	    }

	    function create_utc__createUTC (input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, true).utc();
	    }

	    function defaultParsingFlags() {
	        // We need to deep clone this object.
	        return {
	            empty           : false,
	            unusedTokens    : [],
	            unusedInput     : [],
	            overflow        : -2,
	            charsLeftOver   : 0,
	            nullInput       : false,
	            invalidMonth    : null,
	            invalidFormat   : false,
	            userInvalidated : false,
	            iso             : false
	        };
	    }

	    function getParsingFlags(m) {
	        if (m._pf == null) {
	            m._pf = defaultParsingFlags();
	        }
	        return m._pf;
	    }

	    function valid__isValid(m) {
	        if (m._isValid == null) {
	            var flags = getParsingFlags(m);
	            m._isValid = !isNaN(m._d.getTime()) &&
	                flags.overflow < 0 &&
	                !flags.empty &&
	                !flags.invalidMonth &&
	                !flags.nullInput &&
	                !flags.invalidFormat &&
	                !flags.userInvalidated;

	            if (m._strict) {
	                m._isValid = m._isValid &&
	                    flags.charsLeftOver === 0 &&
	                    flags.unusedTokens.length === 0 &&
	                    flags.bigHour === undefined;
	            }
	        }
	        return m._isValid;
	    }

	    function valid__createInvalid (flags) {
	        var m = create_utc__createUTC(NaN);
	        if (flags != null) {
	            extend(getParsingFlags(m), flags);
	        }
	        else {
	            getParsingFlags(m).userInvalidated = true;
	        }

	        return m;
	    }

	    var momentProperties = utils_hooks__hooks.momentProperties = [];

	    function copyConfig(to, from) {
	        var i, prop, val;

	        if (typeof from._isAMomentObject !== 'undefined') {
	            to._isAMomentObject = from._isAMomentObject;
	        }
	        if (typeof from._i !== 'undefined') {
	            to._i = from._i;
	        }
	        if (typeof from._f !== 'undefined') {
	            to._f = from._f;
	        }
	        if (typeof from._l !== 'undefined') {
	            to._l = from._l;
	        }
	        if (typeof from._strict !== 'undefined') {
	            to._strict = from._strict;
	        }
	        if (typeof from._tzm !== 'undefined') {
	            to._tzm = from._tzm;
	        }
	        if (typeof from._isUTC !== 'undefined') {
	            to._isUTC = from._isUTC;
	        }
	        if (typeof from._offset !== 'undefined') {
	            to._offset = from._offset;
	        }
	        if (typeof from._pf !== 'undefined') {
	            to._pf = getParsingFlags(from);
	        }
	        if (typeof from._locale !== 'undefined') {
	            to._locale = from._locale;
	        }

	        if (momentProperties.length > 0) {
	            for (i in momentProperties) {
	                prop = momentProperties[i];
	                val = from[prop];
	                if (typeof val !== 'undefined') {
	                    to[prop] = val;
	                }
	            }
	        }

	        return to;
	    }

	    var updateInProgress = false;

	    // Moment prototype object
	    function Moment(config) {
	        copyConfig(this, config);
	        this._d = new Date(+config._d);
	        // Prevent infinite loop in case updateOffset creates new moment
	        // objects.
	        if (updateInProgress === false) {
	            updateInProgress = true;
	            utils_hooks__hooks.updateOffset(this);
	            updateInProgress = false;
	        }
	    }

	    function isMoment (obj) {
	        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
	    }

	    function toInt(argumentForCoercion) {
	        var coercedNumber = +argumentForCoercion,
	            value = 0;

	        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
	            if (coercedNumber >= 0) {
	                value = Math.floor(coercedNumber);
	            } else {
	                value = Math.ceil(coercedNumber);
	            }
	        }

	        return value;
	    }

	    function compareArrays(array1, array2, dontConvert) {
	        var len = Math.min(array1.length, array2.length),
	            lengthDiff = Math.abs(array1.length - array2.length),
	            diffs = 0,
	            i;
	        for (i = 0; i < len; i++) {
	            if ((dontConvert && array1[i] !== array2[i]) ||
	                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
	                diffs++;
	            }
	        }
	        return diffs + lengthDiff;
	    }

	    function Locale() {
	    }

	    var locales = {};
	    var globalLocale;

	    function normalizeLocale(key) {
	        return key ? key.toLowerCase().replace('_', '-') : key;
	    }

	    // pick the locale from the array
	    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	    function chooseLocale(names) {
	        var i = 0, j, next, locale, split;

	        while (i < names.length) {
	            split = normalizeLocale(names[i]).split('-');
	            j = split.length;
	            next = normalizeLocale(names[i + 1]);
	            next = next ? next.split('-') : null;
	            while (j > 0) {
	                locale = loadLocale(split.slice(0, j).join('-'));
	                if (locale) {
	                    return locale;
	                }
	                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
	                    //the next array item is better than a shallower substring of this one
	                    break;
	                }
	                j--;
	            }
	            i++;
	        }
	        return null;
	    }

	    function loadLocale(name) {
	        var oldLocale = null;
	        // TODO: Find a better way to register and load all the locales in Node
	        if (!locales[name] && typeof module !== 'undefined' &&
	                module && module.exports) {
	            try {
	                oldLocale = globalLocale._abbr;
	                !(function webpackMissingModule() { var e = new Error("Cannot find module \"./locale\""); e.code = 'MODULE_NOT_FOUND'; throw e; }());
	                // because defineLocale currently also sets the global locale, we
	                // want to undo that for lazy loaded locales
	                locale_locales__getSetGlobalLocale(oldLocale);
	            } catch (e) { }
	        }
	        return locales[name];
	    }

	    // This function will load locale and then set the global locale.  If
	    // no arguments are passed in, it will simply return the current global
	    // locale key.
	    function locale_locales__getSetGlobalLocale (key, values) {
	        var data;
	        if (key) {
	            if (typeof values === 'undefined') {
	                data = locale_locales__getLocale(key);
	            }
	            else {
	                data = defineLocale(key, values);
	            }

	            if (data) {
	                // moment.duration._locale = moment._locale = data;
	                globalLocale = data;
	            }
	        }

	        return globalLocale._abbr;
	    }

	    function defineLocale (name, values) {
	        if (values !== null) {
	            values.abbr = name;
	            if (!locales[name]) {
	                locales[name] = new Locale();
	            }
	            locales[name].set(values);

	            // backwards compat for now: also set the locale
	            locale_locales__getSetGlobalLocale(name);

	            return locales[name];
	        } else {
	            // useful for testing
	            delete locales[name];
	            return null;
	        }
	    }

	    // returns locale data
	    function locale_locales__getLocale (key) {
	        var locale;

	        if (key && key._locale && key._locale._abbr) {
	            key = key._locale._abbr;
	        }

	        if (!key) {
	            return globalLocale;
	        }

	        if (!isArray(key)) {
	            //short-circuit everything else
	            locale = loadLocale(key);
	            if (locale) {
	                return locale;
	            }
	            key = [key];
	        }

	        return chooseLocale(key);
	    }

	    var aliases = {};

	    function addUnitAlias (unit, shorthand) {
	        var lowerCase = unit.toLowerCase();
	        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
	    }

	    function normalizeUnits(units) {
	        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
	    }

	    function normalizeObjectUnits(inputObject) {
	        var normalizedInput = {},
	            normalizedProp,
	            prop;

	        for (prop in inputObject) {
	            if (hasOwnProp(inputObject, prop)) {
	                normalizedProp = normalizeUnits(prop);
	                if (normalizedProp) {
	                    normalizedInput[normalizedProp] = inputObject[prop];
	                }
	            }
	        }

	        return normalizedInput;
	    }

	    function makeGetSet (unit, keepTime) {
	        return function (value) {
	            if (value != null) {
	                get_set__set(this, unit, value);
	                utils_hooks__hooks.updateOffset(this, keepTime);
	                return this;
	            } else {
	                return get_set__get(this, unit);
	            }
	        };
	    }

	    function get_set__get (mom, unit) {
	        return mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]();
	    }

	    function get_set__set (mom, unit, value) {
	        return mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
	    }

	    // MOMENTS

	    function getSet (units, value) {
	        var unit;
	        if (typeof units === 'object') {
	            for (unit in units) {
	                this.set(unit, units[unit]);
	            }
	        } else {
	            units = normalizeUnits(units);
	            if (typeof this[units] === 'function') {
	                return this[units](value);
	            }
	        }
	        return this;
	    }

	    function zeroFill(number, targetLength, forceSign) {
	        var output = '' + Math.abs(number),
	            sign = number >= 0;

	        while (output.length < targetLength) {
	            output = '0' + output;
	        }
	        return (sign ? (forceSign ? '+' : '') : '-') + output;
	    }

	    var formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g;

	    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;

	    var formatFunctions = {};

	    var formatTokenFunctions = {};

	    // token:    'M'
	    // padded:   ['MM', 2]
	    // ordinal:  'Mo'
	    // callback: function () { this.month() + 1 }
	    function addFormatToken (token, padded, ordinal, callback) {
	        var func = callback;
	        if (typeof callback === 'string') {
	            func = function () {
	                return this[callback]();
	            };
	        }
	        if (token) {
	            formatTokenFunctions[token] = func;
	        }
	        if (padded) {
	            formatTokenFunctions[padded[0]] = function () {
	                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
	            };
	        }
	        if (ordinal) {
	            formatTokenFunctions[ordinal] = function () {
	                return this.localeData().ordinal(func.apply(this, arguments), token);
	            };
	        }
	    }

	    function removeFormattingTokens(input) {
	        if (input.match(/\[[\s\S]/)) {
	            return input.replace(/^\[|\]$/g, '');
	        }
	        return input.replace(/\\/g, '');
	    }

	    function makeFormatFunction(format) {
	        var array = format.match(formattingTokens), i, length;

	        for (i = 0, length = array.length; i < length; i++) {
	            if (formatTokenFunctions[array[i]]) {
	                array[i] = formatTokenFunctions[array[i]];
	            } else {
	                array[i] = removeFormattingTokens(array[i]);
	            }
	        }

	        return function (mom) {
	            var output = '';
	            for (i = 0; i < length; i++) {
	                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
	            }
	            return output;
	        };
	    }

	    // format date using native date object
	    function formatMoment(m, format) {
	        if (!m.isValid()) {
	            return m.localeData().invalidDate();
	        }

	        format = expandFormat(format, m.localeData());

	        if (!formatFunctions[format]) {
	            formatFunctions[format] = makeFormatFunction(format);
	        }

	        return formatFunctions[format](m);
	    }

	    function expandFormat(format, locale) {
	        var i = 5;

	        function replaceLongDateFormatTokens(input) {
	            return locale.longDateFormat(input) || input;
	        }

	        localFormattingTokens.lastIndex = 0;
	        while (i >= 0 && localFormattingTokens.test(format)) {
	            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
	            localFormattingTokens.lastIndex = 0;
	            i -= 1;
	        }

	        return format;
	    }

	    var match1         = /\d/;            //       0 - 9
	    var match2         = /\d\d/;          //      00 - 99
	    var match3         = /\d{3}/;         //     000 - 999
	    var match4         = /\d{4}/;         //    0000 - 9999
	    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
	    var match1to2      = /\d\d?/;         //       0 - 99
	    var match1to3      = /\d{1,3}/;       //       0 - 999
	    var match1to4      = /\d{1,4}/;       //       0 - 9999
	    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999

	    var matchUnsigned  = /\d+/;           //       0 - inf
	    var matchSigned    = /[+-]?\d+/;      //    -inf - inf

	    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z

	    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123

	    // any word (or two) characters or numbers including two/three word month in arabic.
	    var matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i;

	    var regexes = {};

	    function addRegexToken (token, regex, strictRegex) {
	        regexes[token] = typeof regex === 'function' ? regex : function (isStrict) {
	            return (isStrict && strictRegex) ? strictRegex : regex;
	        };
	    }

	    function getParseRegexForToken (token, config) {
	        if (!hasOwnProp(regexes, token)) {
	            return new RegExp(unescapeFormat(token));
	        }

	        return regexes[token](config._strict, config._locale);
	    }

	    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	    function unescapeFormat(s) {
	        return s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
	            return p1 || p2 || p3 || p4;
	        }).replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	    }

	    var tokens = {};

	    function addParseToken (token, callback) {
	        var i, func = callback;
	        if (typeof token === 'string') {
	            token = [token];
	        }
	        if (typeof callback === 'number') {
	            func = function (input, array) {
	                array[callback] = toInt(input);
	            };
	        }
	        for (i = 0; i < token.length; i++) {
	            tokens[token[i]] = func;
	        }
	    }

	    function addWeekParseToken (token, callback) {
	        addParseToken(token, function (input, array, config, token) {
	            config._w = config._w || {};
	            callback(input, config._w, config, token);
	        });
	    }

	    function addTimeToArrayFromToken(token, input, config) {
	        if (input != null && hasOwnProp(tokens, token)) {
	            tokens[token](input, config._a, config, token);
	        }
	    }

	    var YEAR = 0;
	    var MONTH = 1;
	    var DATE = 2;
	    var HOUR = 3;
	    var MINUTE = 4;
	    var SECOND = 5;
	    var MILLISECOND = 6;

	    function daysInMonth(year, month) {
	        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
	    }

	    // FORMATTING

	    addFormatToken('M', ['MM', 2], 'Mo', function () {
	        return this.month() + 1;
	    });

	    addFormatToken('MMM', 0, 0, function (format) {
	        return this.localeData().monthsShort(this, format);
	    });

	    addFormatToken('MMMM', 0, 0, function (format) {
	        return this.localeData().months(this, format);
	    });

	    // ALIASES

	    addUnitAlias('month', 'M');

	    // PARSING

	    addRegexToken('M',    match1to2);
	    addRegexToken('MM',   match1to2, match2);
	    addRegexToken('MMM',  matchWord);
	    addRegexToken('MMMM', matchWord);

	    addParseToken(['M', 'MM'], function (input, array) {
	        array[MONTH] = toInt(input) - 1;
	    });

	    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
	        var month = config._locale.monthsParse(input, token, config._strict);
	        // if we didn't find a month name, mark the date as invalid.
	        if (month != null) {
	            array[MONTH] = month;
	        } else {
	            getParsingFlags(config).invalidMonth = input;
	        }
	    });

	    // LOCALES

	    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
	    function localeMonths (m) {
	        return this._months[m.month()];
	    }

	    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
	    function localeMonthsShort (m) {
	        return this._monthsShort[m.month()];
	    }

	    function localeMonthsParse (monthName, format, strict) {
	        var i, mom, regex;

	        if (!this._monthsParse) {
	            this._monthsParse = [];
	            this._longMonthsParse = [];
	            this._shortMonthsParse = [];
	        }

	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = create_utc__createUTC([2000, i]);
	            if (strict && !this._longMonthsParse[i]) {
	                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
	                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
	            }
	            if (!strict && !this._monthsParse[i]) {
	                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
	                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
	                return i;
	            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
	                return i;
	            } else if (!strict && this._monthsParse[i].test(monthName)) {
	                return i;
	            }
	        }
	    }

	    // MOMENTS

	    function setMonth (mom, value) {
	        var dayOfMonth;

	        // TODO: Move this out of here!
	        if (typeof value === 'string') {
	            value = mom.localeData().monthsParse(value);
	            // TODO: Another silent failure?
	            if (typeof value !== 'number') {
	                return mom;
	            }
	        }

	        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
	        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
	        return mom;
	    }

	    function getSetMonth (value) {
	        if (value != null) {
	            setMonth(this, value);
	            utils_hooks__hooks.updateOffset(this, true);
	            return this;
	        } else {
	            return get_set__get(this, 'Month');
	        }
	    }

	    function getDaysInMonth () {
	        return daysInMonth(this.year(), this.month());
	    }

	    function checkOverflow (m) {
	        var overflow;
	        var a = m._a;

	        if (a && getParsingFlags(m).overflow === -2) {
	            overflow =
	                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
	                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
	                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
	                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
	                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
	                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
	                -1;

	            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
	                overflow = DATE;
	            }

	            getParsingFlags(m).overflow = overflow;
	        }

	        return m;
	    }

	    function warn(msg) {
	        if (utils_hooks__hooks.suppressDeprecationWarnings === false && typeof console !== 'undefined' && console.warn) {
	            //console.warn('Deprecation warning: ' + msg);
	        }
	    }

	    function deprecate(msg, fn) {
	        var firstTime = true,
	            msgWithStack = msg + '\n' + (new Error()).stack;

	        return extend(function () {
	            if (firstTime) {
	                warn(msgWithStack);
	                firstTime = false;
	            }
	            return fn.apply(this, arguments);
	        }, fn);
	    }

	    var deprecations = {};

	    function deprecateSimple(name, msg) {
	        if (!deprecations[name]) {
	            warn(msg);
	            deprecations[name] = true;
	        }
	    }

	    utils_hooks__hooks.suppressDeprecationWarnings = false;

	    var from_string__isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;

	    var isoDates = [
	        ['YYYYYY-MM-DD', /[+-]\d{6}-\d{2}-\d{2}/],
	        ['YYYY-MM-DD', /\d{4}-\d{2}-\d{2}/],
	        ['GGGG-[W]WW-E', /\d{4}-W\d{2}-\d/],
	        ['GGGG-[W]WW', /\d{4}-W\d{2}/],
	        ['YYYY-DDD', /\d{4}-\d{3}/]
	    ];

	    // iso time formats and regexes
	    var isoTimes = [
	        ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d+/],
	        ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
	        ['HH:mm', /(T| )\d\d:\d\d/],
	        ['HH', /(T| )\d\d/]
	    ];

	    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;

	    // date from iso format
	    function configFromISO(config) {
	        var i, l,
	            string = config._i,
	            match = from_string__isoRegex.exec(string);

	        if (match) {
	            getParsingFlags(config).iso = true;
	            for (i = 0, l = isoDates.length; i < l; i++) {
	                if (isoDates[i][1].exec(string)) {
	                    // match[5] should be 'T' or undefined
	                    config._f = isoDates[i][0] + (match[6] || ' ');
	                    break;
	                }
	            }
	            for (i = 0, l = isoTimes.length; i < l; i++) {
	                if (isoTimes[i][1].exec(string)) {
	                    config._f += isoTimes[i][0];
	                    break;
	                }
	            }
	            if (string.match(matchOffset)) {
	                config._f += 'Z';
	            }
	            configFromStringAndFormat(config);
	        } else {
	            config._isValid = false;
	        }
	    }

	    // date from iso format or fallback
	    function configFromString(config) {
	        var matched = aspNetJsonRegex.exec(config._i);

	        if (matched !== null) {
	            config._d = new Date(+matched[1]);
	            return;
	        }

	        configFromISO(config);
	        if (config._isValid === false) {
	            delete config._isValid;
	            utils_hooks__hooks.createFromInputFallback(config);
	        }
	    }

	    utils_hooks__hooks.createFromInputFallback = deprecate(
	        'moment construction falls back to js Date. This is ' +
	        'discouraged and will be removed in upcoming major ' +
	        'release. Please refer to ' +
	        'https://github.com/moment/moment/issues/1407 for more info.',
	        function (config) {
	            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
	        }
	    );

	    function createDate (y, m, d, h, M, s, ms) {
	        //can't just apply() to create a date:
	        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
	        var date = new Date(y, m, d, h, M, s, ms);

	        //the date constructor doesn't accept years < 1970
	        if (y < 1970) {
	            date.setFullYear(y);
	        }
	        return date;
	    }

	    function createUTCDate (y) {
	        var date = new Date(Date.UTC.apply(null, arguments));
	        if (y < 1970) {
	            date.setUTCFullYear(y);
	        }
	        return date;
	    }

	    addFormatToken(0, ['YY', 2], 0, function () {
	        return this.year() % 100;
	    });

	    addFormatToken(0, ['YYYY',   4],       0, 'year');
	    addFormatToken(0, ['YYYYY',  5],       0, 'year');
	    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');

	    // ALIASES

	    addUnitAlias('year', 'y');

	    // PARSING

	    addRegexToken('Y',      matchSigned);
	    addRegexToken('YY',     match1to2, match2);
	    addRegexToken('YYYY',   match1to4, match4);
	    addRegexToken('YYYYY',  match1to6, match6);
	    addRegexToken('YYYYYY', match1to6, match6);

	    addParseToken(['YYYY', 'YYYYY', 'YYYYYY'], YEAR);
	    addParseToken('YY', function (input, array) {
	        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input);
	    });

	    // HELPERS

	    function daysInYear(year) {
	        return isLeapYear(year) ? 366 : 365;
	    }

	    function isLeapYear(year) {
	        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	    }

	    // HOOKS

	    utils_hooks__hooks.parseTwoDigitYear = function (input) {
	        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	    };

	    // MOMENTS

	    var getSetYear = makeGetSet('FullYear', false);

	    function getIsLeapYear () {
	        return isLeapYear(this.year());
	    }

	    addFormatToken('w', ['ww', 2], 'wo', 'week');
	    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');

	    // ALIASES

	    addUnitAlias('week', 'w');
	    addUnitAlias('isoWeek', 'W');

	    // PARSING

	    addRegexToken('w',  match1to2);
	    addRegexToken('ww', match1to2, match2);
	    addRegexToken('W',  match1to2);
	    addRegexToken('WW', match1to2, match2);

	    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
	        week[token.substr(0, 1)] = toInt(input);
	    });

	    // HELPERS

	    // firstDayOfWeek       0 = sun, 6 = sat
	    //                      the day of the week that starts the week
	    //                      (usually sunday or monday)
	    // firstDayOfWeekOfYear 0 = sun, 6 = sat
	    //                      the first week is the week that contains the first
	    //                      of this day of the week
	    //                      (eg. ISO weeks use thursday (4))
	    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
	        var end = firstDayOfWeekOfYear - firstDayOfWeek,
	            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
	            adjustedMoment;


	        if (daysToDayOfWeek > end) {
	            daysToDayOfWeek -= 7;
	        }

	        if (daysToDayOfWeek < end - 7) {
	            daysToDayOfWeek += 7;
	        }

	        adjustedMoment = local__createLocal(mom).add(daysToDayOfWeek, 'd');
	        return {
	            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
	            year: adjustedMoment.year()
	        };
	    }

	    // LOCALES

	    function localeWeek (mom) {
	        return weekOfYear(mom, this._week.dow, this._week.doy).week;
	    }

	    var defaultLocaleWeek = {
	        dow : 0, // Sunday is the first day of the week.
	        doy : 6  // The week that contains Jan 1st is the first week of the year.
	    };

	    function localeFirstDayOfWeek () {
	        return this._week.dow;
	    }

	    function localeFirstDayOfYear () {
	        return this._week.doy;
	    }

	    // MOMENTS

	    function getSetWeek (input) {
	        var week = this.localeData().week(this);
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }

	    function getSetISOWeek (input) {
	        var week = weekOfYear(this, 1, 4).week;
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }

	    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');

	    // ALIASES

	    addUnitAlias('dayOfYear', 'DDD');

	    // PARSING

	    addRegexToken('DDD',  match1to3);
	    addRegexToken('DDDD', match3);
	    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
	        config._dayOfYear = toInt(input);
	    });

	    // HELPERS

	    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
	        var d = createUTCDate(year, 0, 1).getUTCDay();
	        var daysToAdd;
	        var dayOfYear;

	        d = d === 0 ? 7 : d;
	        weekday = weekday != null ? weekday : firstDayOfWeek;
	        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0) - (d < firstDayOfWeek ? 7 : 0);
	        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;

	        return {
	            year      : dayOfYear > 0 ? year      : year - 1,
	            dayOfYear : dayOfYear > 0 ? dayOfYear : daysInYear(year - 1) + dayOfYear
	        };
	    }

	    // MOMENTS

	    function getSetDayOfYear (input) {
	        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
	        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
	    }

	    // Pick the first defined of two or three arguments.
	    function defaults(a, b, c) {
	        if (a != null) {
	            return a;
	        }
	        if (b != null) {
	            return b;
	        }
	        return c;
	    }

	    function currentDateArray(config) {
	        var now = new Date();
	        if (config._useUTC) {
	            return [now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()];
	        }
	        return [now.getFullYear(), now.getMonth(), now.getDate()];
	    }

	    // convert an array to a date.
	    // the array should mirror the parameters below
	    // note: all values past the year are optional and will default to the lowest possible value.
	    // [year, month, day , hour, minute, second, millisecond]
	    function configFromArray (config) {
	        var i, date, input = [], currentDate, yearToUse;

	        if (config._d) {
	            return;
	        }

	        currentDate = currentDateArray(config);

	        //compute day of the year from weeks and weekdays
	        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
	            dayOfYearFromWeekInfo(config);
	        }

	        //if the day of the year is set, figure out what it is
	        if (config._dayOfYear) {
	            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);

	            if (config._dayOfYear > daysInYear(yearToUse)) {
	                getParsingFlags(config)._overflowDayOfYear = true;
	            }

	            date = createUTCDate(yearToUse, 0, config._dayOfYear);
	            config._a[MONTH] = date.getUTCMonth();
	            config._a[DATE] = date.getUTCDate();
	        }

	        // Default to current date.
	        // * if no year, month, day of month are given, default to today
	        // * if day of month is given, default month and year
	        // * if month is given, default only year
	        // * if year is given, don't default anything
	        for (i = 0; i < 3 && config._a[i] == null; ++i) {
	            config._a[i] = input[i] = currentDate[i];
	        }

	        // Zero out whatever was not defaulted, including time
	        for (; i < 7; i++) {
	            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
	        }

	        // Check for 24:00:00.000
	        if (config._a[HOUR] === 24 &&
	                config._a[MINUTE] === 0 &&
	                config._a[SECOND] === 0 &&
	                config._a[MILLISECOND] === 0) {
	            config._nextDay = true;
	            config._a[HOUR] = 0;
	        }

	        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
	        // Apply timezone offset from input. The actual utcOffset can be changed
	        // with parseZone.
	        if (config._tzm != null) {
	            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
	        }

	        if (config._nextDay) {
	            config._a[HOUR] = 24;
	        }
	    }

	    function dayOfYearFromWeekInfo(config) {
	        var w, weekYear, week, weekday, dow, doy, temp;

	        w = config._w;
	        if (w.GG != null || w.W != null || w.E != null) {
	            dow = 1;
	            doy = 4;

	            // TODO: We need to take the current isoWeekYear, but that depends on
	            // how we interpret now (local, utc, fixed offset). So create
	            // a now version of current config (take local/utc/offset flags, and
	            // create now).
	            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year);
	            week = defaults(w.W, 1);
	            weekday = defaults(w.E, 1);
	        } else {
	            dow = config._locale._week.dow;
	            doy = config._locale._week.doy;

	            weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year);
	            week = defaults(w.w, 1);

	            if (w.d != null) {
	                // weekday -- low day numbers are considered next week
	                weekday = w.d;
	                if (weekday < dow) {
	                    ++week;
	                }
	            } else if (w.e != null) {
	                // local weekday -- counting starts from begining of week
	                weekday = w.e + dow;
	            } else {
	                // default to begining of week
	                weekday = dow;
	            }
	        }
	        temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow);

	        config._a[YEAR] = temp.year;
	        config._dayOfYear = temp.dayOfYear;
	    }

	    utils_hooks__hooks.ISO_8601 = function () {};

	    // date from string and format string
	    function configFromStringAndFormat(config) {
	        // TODO: Move this to another part of the creation flow to prevent circular deps
	        if (config._f === utils_hooks__hooks.ISO_8601) {
	            configFromISO(config);
	            return;
	        }

	        config._a = [];
	        getParsingFlags(config).empty = true;

	        // This array is used to make a Date, either with `new Date` or `Date.UTC`
	        var string = '' + config._i,
	            i, parsedInput, tokens, token, skipped,
	            stringLength = string.length,
	            totalParsedInputLength = 0;

	        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];

	        for (i = 0; i < tokens.length; i++) {
	            token = tokens[i];
	            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
	            if (parsedInput) {
	                skipped = string.substr(0, string.indexOf(parsedInput));
	                if (skipped.length > 0) {
	                    getParsingFlags(config).unusedInput.push(skipped);
	                }
	                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
	                totalParsedInputLength += parsedInput.length;
	            }
	            // don't parse if it's not a known token
	            if (formatTokenFunctions[token]) {
	                if (parsedInput) {
	                    getParsingFlags(config).empty = false;
	                }
	                else {
	                    getParsingFlags(config).unusedTokens.push(token);
	                }
	                addTimeToArrayFromToken(token, parsedInput, config);
	            }
	            else if (config._strict && !parsedInput) {
	                getParsingFlags(config).unusedTokens.push(token);
	            }
	        }

	        // add remaining unparsed input length to the string
	        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
	        if (string.length > 0) {
	            getParsingFlags(config).unusedInput.push(string);
	        }

	        // clear _12h flag if hour is <= 12
	        if (getParsingFlags(config).bigHour === true &&
	                config._a[HOUR] <= 12 &&
	                config._a[HOUR] > 0) {
	            getParsingFlags(config).bigHour = undefined;
	        }
	        // handle meridiem
	        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);

	        configFromArray(config);
	        checkOverflow(config);
	    }


	    function meridiemFixWrap (locale, hour, meridiem) {
	        var isPm;

	        if (meridiem == null) {
	            // nothing to do
	            return hour;
	        }
	        if (locale.meridiemHour != null) {
	            return locale.meridiemHour(hour, meridiem);
	        } else if (locale.isPM != null) {
	            // Fallback
	            isPm = locale.isPM(meridiem);
	            if (isPm && hour < 12) {
	                hour += 12;
	            }
	            if (!isPm && hour === 12) {
	                hour = 0;
	            }
	            return hour;
	        } else {
	            // this is not supposed to happen
	            return hour;
	        }
	    }

	    function configFromStringAndArray(config) {
	        var tempConfig,
	            bestMoment,

	            scoreToBeat,
	            i,
	            currentScore;

	        if (config._f.length === 0) {
	            getParsingFlags(config).invalidFormat = true;
	            config._d = new Date(NaN);
	            return;
	        }

	        for (i = 0; i < config._f.length; i++) {
	            currentScore = 0;
	            tempConfig = copyConfig({}, config);
	            if (config._useUTC != null) {
	                tempConfig._useUTC = config._useUTC;
	            }
	            tempConfig._f = config._f[i];
	            configFromStringAndFormat(tempConfig);

	            if (!valid__isValid(tempConfig)) {
	                continue;
	            }

	            // if there is any input that was not parsed add a penalty for that format
	            currentScore += getParsingFlags(tempConfig).charsLeftOver;

	            //or tokens
	            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;

	            getParsingFlags(tempConfig).score = currentScore;

	            if (scoreToBeat == null || currentScore < scoreToBeat) {
	                scoreToBeat = currentScore;
	                bestMoment = tempConfig;
	            }
	        }

	        extend(config, bestMoment || tempConfig);
	    }

	    function configFromObject(config) {
	        if (config._d) {
	            return;
	        }

	        var i = normalizeObjectUnits(config._i);
	        config._a = [i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond];

	        configFromArray(config);
	    }

	    function createFromConfig (config) {
	        var input = config._i,
	            format = config._f,
	            res;

	        config._locale = config._locale || locale_locales__getLocale(config._l);

	        if (input === null || (format === undefined && input === '')) {
	            return valid__createInvalid({nullInput: true});
	        }

	        if (typeof input === 'string') {
	            config._i = input = config._locale.preparse(input);
	        }

	        if (isMoment(input)) {
	            return new Moment(checkOverflow(input));
	        } else if (isArray(format)) {
	            configFromStringAndArray(config);
	        } else if (format) {
	            configFromStringAndFormat(config);
	        } else if (isDate(input)) {
	            config._d = input;
	        } else {
	            configFromInput(config);
	        }

	        res = new Moment(checkOverflow(config));
	        if (res._nextDay) {
	            // Adding is smart enough around DST
	            res.add(1, 'd');
	            res._nextDay = undefined;
	        }

	        return res;
	    }

	    function configFromInput(config) {
	        var input = config._i;
	        if (input === undefined) {
	            config._d = new Date();
	        } else if (isDate(input)) {
	            config._d = new Date(+input);
	        } else if (typeof input === 'string') {
	            configFromString(config);
	        } else if (isArray(input)) {
	            config._a = map(input.slice(0), function (obj) {
	                return parseInt(obj, 10);
	            });
	            configFromArray(config);
	        } else if (typeof(input) === 'object') {
	            configFromObject(config);
	        } else if (typeof(input) === 'number') {
	            // from milliseconds
	            config._d = new Date(input);
	        } else {
	            utils_hooks__hooks.createFromInputFallback(config);
	        }
	    }

	    function createLocalOrUTC (input, format, locale, strict, isUTC) {
	        var c = {};

	        if (typeof(locale) === 'boolean') {
	            strict = locale;
	            locale = undefined;
	        }
	        // object construction must be done this way.
	        // https://github.com/moment/moment/issues/1423
	        c._isAMomentObject = true;
	        c._useUTC = c._isUTC = isUTC;
	        c._l = locale;
	        c._i = input;
	        c._f = format;
	        c._strict = strict;

	        return createFromConfig(c);
	    }

	    function local__createLocal (input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, false);
	    }

	    var prototypeMin = deprecate(
	         'moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548',
	         function () {
	             var other = local__createLocal.apply(null, arguments);
	             return other < this ? this : other;
	         }
	     );

	    var prototypeMax = deprecate(
	        'moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548',
	        function () {
	            var other = local__createLocal.apply(null, arguments);
	            return other > this ? this : other;
	        }
	    );

	    // Pick a moment m from moments so that m[fn](other) is true for all
	    // other. This relies on the function fn to be transitive.
	    //
	    // moments should either be an array of moment objects or an array, whose
	    // first element is an array of moment objects.
	    function pickBy(fn, moments) {
	        var res, i;
	        if (moments.length === 1 && isArray(moments[0])) {
	            moments = moments[0];
	        }
	        if (!moments.length) {
	            return local__createLocal();
	        }
	        res = moments[0];
	        for (i = 1; i < moments.length; ++i) {
	            if (moments[i][fn](res)) {
	                res = moments[i];
	            }
	        }
	        return res;
	    }

	    // TODO: Use [].sort instead?
	    function min () {
	        var args = [].slice.call(arguments, 0);

	        return pickBy('isBefore', args);
	    }

	    function max () {
	        var args = [].slice.call(arguments, 0);

	        return pickBy('isAfter', args);
	    }

	    function Duration (duration) {
	        var normalizedInput = normalizeObjectUnits(duration),
	            years = normalizedInput.year || 0,
	            quarters = normalizedInput.quarter || 0,
	            months = normalizedInput.month || 0,
	            weeks = normalizedInput.week || 0,
	            days = normalizedInput.day || 0,
	            hours = normalizedInput.hour || 0,
	            minutes = normalizedInput.minute || 0,
	            seconds = normalizedInput.second || 0,
	            milliseconds = normalizedInput.millisecond || 0;

	        // representation for dateAddRemove
	        this._milliseconds = +milliseconds +
	            seconds * 1e3 + // 1000
	            minutes * 6e4 + // 1000 * 60
	            hours * 36e5; // 1000 * 60 * 60
	        // Because of dateAddRemove treats 24 hours as different from a
	        // day when working around DST, we need to store them separately
	        this._days = +days +
	            weeks * 7;
	        // It is impossible translate months into days without knowing
	        // which months you are are talking about, so we have to store
	        // it separately.
	        this._months = +months +
	            quarters * 3 +
	            years * 12;

	        this._data = {};

	        this._locale = locale_locales__getLocale();

	        this._bubble();
	    }

	    function isDuration (obj) {
	        return obj instanceof Duration;
	    }

	    function offset (token, separator) {
	        addFormatToken(token, 0, 0, function () {
	            var offset = this.utcOffset();
	            var sign = '+';
	            if (offset < 0) {
	                offset = -offset;
	                sign = '-';
	            }
	            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
	        });
	    }

	    offset('Z', ':');
	    offset('ZZ', '');

	    // PARSING

	    addRegexToken('Z',  matchOffset);
	    addRegexToken('ZZ', matchOffset);
	    addParseToken(['Z', 'ZZ'], function (input, array, config) {
	        config._useUTC = true;
	        config._tzm = offsetFromString(input);
	    });

	    // HELPERS

	    // timezone chunker
	    // '+10:00' > ['10',  '00']
	    // '-1530'  > ['-15', '30']
	    var chunkOffset = /([\+\-]|\d\d)/gi;

	    function offsetFromString(string) {
	        var matches = ((string || '').match(matchOffset) || []);
	        var chunk   = matches[matches.length - 1] || [];
	        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
	        var minutes = +(parts[1] * 60) + toInt(parts[2]);

	        return parts[0] === '+' ? minutes : -minutes;
	    }

	    // Return a moment from input, that is local/utc/zone equivalent to model.
	    function cloneWithOffset(input, model) {
	        var res, diff;
	        if (model._isUTC) {
	            res = model.clone();
	            diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - (+res);
	            // Use low-level api, because this fn is low-level api.
	            res._d.setTime(+res._d + diff);
	            utils_hooks__hooks.updateOffset(res, false);
	            return res;
	        } else {
	            return local__createLocal(input).local();
	        }
	        return model._isUTC ? local__createLocal(input).zone(model._offset || 0) : local__createLocal(input).local();
	    }

	    function getDateOffset (m) {
	        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
	        // https://github.com/moment/moment/pull/1871
	        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
	    }

	    // HOOKS

	    // This function will be called whenever a moment is mutated.
	    // It is intended to keep the offset in sync with the timezone.
	    utils_hooks__hooks.updateOffset = function () {};

	    // MOMENTS

	    // keepLocalTime = true means only change the timezone, without
	    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
	    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
	    // +0200, so we adjust the time as needed, to be valid.
	    //
	    // Keeping the time actually adds/subtracts (one hour)
	    // from the actual represented time. That is why we call updateOffset
	    // a second time. In case it wants us to change the offset again
	    // _changeInProgress == true case, then we have to adjust, because
	    // there is no such time in the given timezone.
	    function getSetOffset (input, keepLocalTime) {
	        var offset = this._offset || 0,
	            localAdjust;
	        if (input != null) {
	            if (typeof input === 'string') {
	                input = offsetFromString(input);
	            }
	            if (Math.abs(input) < 16) {
	                input = input * 60;
	            }
	            if (!this._isUTC && keepLocalTime) {
	                localAdjust = getDateOffset(this);
	            }
	            this._offset = input;
	            this._isUTC = true;
	            if (localAdjust != null) {
	                this.add(localAdjust, 'm');
	            }
	            if (offset !== input) {
	                if (!keepLocalTime || this._changeInProgress) {
	                    add_subtract__addSubtract(this, create__createDuration(input - offset, 'm'), 1, false);
	                } else if (!this._changeInProgress) {
	                    this._changeInProgress = true;
	                    utils_hooks__hooks.updateOffset(this, true);
	                    this._changeInProgress = null;
	                }
	            }
	            return this;
	        } else {
	            return this._isUTC ? offset : getDateOffset(this);
	        }
	    }

	    function getSetZone (input, keepLocalTime) {
	        if (input != null) {
	            if (typeof input !== 'string') {
	                input = -input;
	            }

	            this.utcOffset(input, keepLocalTime);

	            return this;
	        } else {
	            return -this.utcOffset();
	        }
	    }

	    function setOffsetToUTC (keepLocalTime) {
	        return this.utcOffset(0, keepLocalTime);
	    }

	    function setOffsetToLocal (keepLocalTime) {
	        if (this._isUTC) {
	            this.utcOffset(0, keepLocalTime);
	            this._isUTC = false;

	            if (keepLocalTime) {
	                this.subtract(getDateOffset(this), 'm');
	            }
	        }
	        return this;
	    }

	    function setOffsetToParsedOffset () {
	        if (this._tzm) {
	            this.utcOffset(this._tzm);
	        } else if (typeof this._i === 'string') {
	            this.utcOffset(offsetFromString(this._i));
	        }
	        return this;
	    }

	    function hasAlignedHourOffset (input) {
	        if (!input) {
	            input = 0;
	        }
	        else {
	            input = local__createLocal(input).utcOffset();
	        }

	        return (this.utcOffset() - input) % 60 === 0;
	    }

	    function isDaylightSavingTime () {
	        return (
	            this.utcOffset() > this.clone().month(0).utcOffset() ||
	            this.utcOffset() > this.clone().month(5).utcOffset()
	        );
	    }

	    function isDaylightSavingTimeShifted () {
	        if (this._a) {
	            var other = this._isUTC ? create_utc__createUTC(this._a) : local__createLocal(this._a);
	            return this.isValid() && compareArrays(this._a, other.toArray()) > 0;
	        }

	        return false;
	    }

	    function isLocal () {
	        return !this._isUTC;
	    }

	    function isUtcOffset () {
	        return this._isUTC;
	    }

	    function isUtc () {
	        return this._isUTC && this._offset === 0;
	    }

	    var aspNetRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/;

	    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	    var create__isoRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;

	    function create__createDuration (input, key) {
	        var duration = input,
	            // matching against regexp is expensive, do it on demand
	            match = null,
	            sign,
	            ret,
	            diffRes;

	        if (isDuration(input)) {
	            duration = {
	                ms : input._milliseconds,
	                d  : input._days,
	                M  : input._months
	            };
	        } else if (typeof input === 'number') {
	            duration = {};
	            if (key) {
	                duration[key] = input;
	            } else {
	                duration.milliseconds = input;
	            }
	        } else if (!!(match = aspNetRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y  : 0,
	                d  : toInt(match[DATE])        * sign,
	                h  : toInt(match[HOUR])        * sign,
	                m  : toInt(match[MINUTE])      * sign,
	                s  : toInt(match[SECOND])      * sign,
	                ms : toInt(match[MILLISECOND]) * sign
	            };
	        } else if (!!(match = create__isoRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y : parseIso(match[2], sign),
	                M : parseIso(match[3], sign),
	                d : parseIso(match[4], sign),
	                h : parseIso(match[5], sign),
	                m : parseIso(match[6], sign),
	                s : parseIso(match[7], sign),
	                w : parseIso(match[8], sign)
	            };
	        } else if (duration == null) {// checks for null or undefined
	            duration = {};
	        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
	            diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to));

	            duration = {};
	            duration.ms = diffRes.milliseconds;
	            duration.M = diffRes.months;
	        }

	        ret = new Duration(duration);

	        if (isDuration(input) && hasOwnProp(input, '_locale')) {
	            ret._locale = input._locale;
	        }

	        return ret;
	    }

	    create__createDuration.fn = Duration.prototype;

	    function parseIso (inp, sign) {
	        // We'd normally use ~~inp for this, but unfortunately it also
	        // converts floats to ints.
	        // inp may be undefined, so careful calling replace on it.
	        var res = inp && parseFloat(inp.replace(',', '.'));
	        // apply sign while we're at it
	        return (isNaN(res) ? 0 : res) * sign;
	    }

	    function positiveMomentsDifference(base, other) {
	        var res = {milliseconds: 0, months: 0};

	        res.months = other.month() - base.month() +
	            (other.year() - base.year()) * 12;
	        if (base.clone().add(res.months, 'M').isAfter(other)) {
	            --res.months;
	        }

	        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));

	        return res;
	    }

	    function momentsDifference(base, other) {
	        var res;
	        other = cloneWithOffset(other, base);
	        if (base.isBefore(other)) {
	            res = positiveMomentsDifference(base, other);
	        } else {
	            res = positiveMomentsDifference(other, base);
	            res.milliseconds = -res.milliseconds;
	            res.months = -res.months;
	        }

	        return res;
	    }

	    function createAdder(direction, name) {
	        return function (val, period) {
	            var dur, tmp;
	            //invert the arguments, but complain about it
	            if (period !== null && !isNaN(+period)) {
	                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period).');
	                tmp = val; val = period; period = tmp;
	            }

	            val = typeof val === 'string' ? +val : val;
	            dur = create__createDuration(val, period);
	            add_subtract__addSubtract(this, dur, direction);
	            return this;
	        };
	    }

	    function add_subtract__addSubtract (mom, duration, isAdding, updateOffset) {
	        var milliseconds = duration._milliseconds,
	            days = duration._days,
	            months = duration._months;
	        updateOffset = updateOffset == null ? true : updateOffset;

	        if (milliseconds) {
	            mom._d.setTime(+mom._d + milliseconds * isAdding);
	        }
	        if (days) {
	            get_set__set(mom, 'Date', get_set__get(mom, 'Date') + days * isAdding);
	        }
	        if (months) {
	            setMonth(mom, get_set__get(mom, 'Month') + months * isAdding);
	        }
	        if (updateOffset) {
	            utils_hooks__hooks.updateOffset(mom, days || months);
	        }
	    }

	    var add_subtract__add      = createAdder(1, 'add');
	    var add_subtract__subtract = createAdder(-1, 'subtract');

	    function moment_calendar__calendar (time) {
	        // We want to compare the start of today, vs this.
	        // Getting start-of-today depends on whether we're local/utc/offset or not.
	        var now = time || local__createLocal(),
	            sod = cloneWithOffset(now, this).startOf('day'),
	            diff = this.diff(sod, 'days', true),
	            format = diff < -6 ? 'sameElse' :
	                diff < -1 ? 'lastWeek' :
	                diff < 0 ? 'lastDay' :
	                diff < 1 ? 'sameDay' :
	                diff < 2 ? 'nextDay' :
	                diff < 7 ? 'nextWeek' : 'sameElse';
	        return this.format(this.localeData().calendar(format, this, local__createLocal(now)));
	    }

	    function clone () {
	        return new Moment(this);
	    }

	    function isAfter (input, units) {
	        var inputMs;
	        units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
	        if (units === 'millisecond') {
	            input = isMoment(input) ? input : local__createLocal(input);
	            return +this > +input;
	        } else {
	            inputMs = isMoment(input) ? +input : +local__createLocal(input);
	            return inputMs < +this.clone().startOf(units);
	        }
	    }

	    function isBefore (input, units) {
	        var inputMs;
	        units = normalizeUnits(typeof units !== 'undefined' ? units : 'millisecond');
	        if (units === 'millisecond') {
	            input = isMoment(input) ? input : local__createLocal(input);
	            return +this < +input;
	        } else {
	            inputMs = isMoment(input) ? +input : +local__createLocal(input);
	            return +this.clone().endOf(units) < inputMs;
	        }
	    }

	    function isBetween (from, to, units) {
	        return this.isAfter(from, units) && this.isBefore(to, units);
	    }

	    function isSame (input, units) {
	        var inputMs;
	        units = normalizeUnits(units || 'millisecond');
	        if (units === 'millisecond') {
	            input = isMoment(input) ? input : local__createLocal(input);
	            return +this === +input;
	        } else {
	            inputMs = +local__createLocal(input);
	            return +(this.clone().startOf(units)) <= inputMs && inputMs <= +(this.clone().endOf(units));
	        }
	    }

	    function absFloor (number) {
	        if (number < 0) {
	            return Math.ceil(number);
	        } else {
	            return Math.floor(number);
	        }
	    }

	    function diff (input, units, asFloat) {
	        var that = cloneWithOffset(input, this),
	            zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4,
	            delta, output;

	        units = normalizeUnits(units);

	        if (units === 'year' || units === 'month' || units === 'quarter') {
	            output = monthDiff(this, that);
	            if (units === 'quarter') {
	                output = output / 3;
	            } else if (units === 'year') {
	                output = output / 12;
	            }
	        } else {
	            delta = this - that;
	            output = units === 'second' ? delta / 1e3 : // 1000
	                units === 'minute' ? delta / 6e4 : // 1000 * 60
	                units === 'hour' ? delta / 36e5 : // 1000 * 60 * 60
	                units === 'day' ? (delta - zoneDelta) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
	                units === 'week' ? (delta - zoneDelta) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
	                delta;
	        }
	        return asFloat ? output : absFloor(output);
	    }

	    function monthDiff (a, b) {
	        // difference in months
	        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
	            // b is in (anchor - 1 month, anchor + 1 month)
	            anchor = a.clone().add(wholeMonthDiff, 'months'),
	            anchor2, adjust;

	        if (b - anchor < 0) {
	            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor - anchor2);
	        } else {
	            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor2 - anchor);
	        }

	        return -(wholeMonthDiff + adjust);
	    }

	    utils_hooks__hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';

	    function toString () {
	        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
	    }

	    function moment_format__toISOString () {
	        var m = this.clone().utc();
	        if (0 < m.year() && m.year() <= 9999) {
	            if ('function' === typeof Date.prototype.toISOString) {
	                // native implementation is ~50x faster, use it when we can
	                return this.toDate().toISOString();
	            } else {
	                return formatMoment(m, 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	            }
	        } else {
	            return formatMoment(m, 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
	        }
	    }

	    function format (inputString) {
	        var output = formatMoment(this, inputString || utils_hooks__hooks.defaultFormat);
	        return this.localeData().postformat(output);
	    }

	    function from (time, withoutSuffix) {
	        if (!this.isValid()) {
	            return this.localeData().invalidDate();
	        }
	        return create__createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
	    }

	    function fromNow (withoutSuffix) {
	        return this.from(local__createLocal(), withoutSuffix);
	    }

	    function to (time, withoutSuffix) {
	        if (!this.isValid()) {
	            return this.localeData().invalidDate();
	        }
	        return create__createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
	    }

	    function toNow (withoutSuffix) {
	        return this.to(local__createLocal(), withoutSuffix);
	    }

	    function locale (key) {
	        var newLocaleData;

	        if (key === undefined) {
	            return this._locale._abbr;
	        } else {
	            newLocaleData = locale_locales__getLocale(key);
	            if (newLocaleData != null) {
	                this._locale = newLocaleData;
	            }
	            return this;
	        }
	    }

	    var lang = deprecate(
	        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
	        function (key) {
	            if (key === undefined) {
	                return this.localeData();
	            } else {
	                return this.locale(key);
	            }
	        }
	    );

	    function localeData () {
	        return this._locale;
	    }

	    function startOf (units) {
	        units = normalizeUnits(units);
	        // the following switch intentionally omits break keywords
	        // to utilize falling through the cases.
	        switch (units) {
	        case 'year':
	            this.month(0);
	            /* falls through */
	        case 'quarter':
	        case 'month':
	            this.date(1);
	            /* falls through */
	        case 'week':
	        case 'isoWeek':
	        case 'day':
	            this.hours(0);
	            /* falls through */
	        case 'hour':
	            this.minutes(0);
	            /* falls through */
	        case 'minute':
	            this.seconds(0);
	            /* falls through */
	        case 'second':
	            this.milliseconds(0);
	        }

	        // weeks are a special case
	        if (units === 'week') {
	            this.weekday(0);
	        }
	        if (units === 'isoWeek') {
	            this.isoWeekday(1);
	        }

	        // quarters are also special
	        if (units === 'quarter') {
	            this.month(Math.floor(this.month() / 3) * 3);
	        }

	        return this;
	    }

	    function endOf (units) {
	        units = normalizeUnits(units);
	        if (units === undefined || units === 'millisecond') {
	            return this;
	        }
	        return this.startOf(units).add(1, (units === 'isoWeek' ? 'week' : units)).subtract(1, 'ms');
	    }

	    function to_type__valueOf () {
	        return +this._d - ((this._offset || 0) * 60000);
	    }

	    function unix () {
	        return Math.floor(+this / 1000);
	    }

	    function toDate () {
	        return this._offset ? new Date(+this) : this._d;
	    }

	    function toArray () {
	        var m = this;
	        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
	    }

	    function moment_valid__isValid () {
	        return valid__isValid(this);
	    }

	    function parsingFlags () {
	        return extend({}, getParsingFlags(this));
	    }

	    function invalidAt () {
	        return getParsingFlags(this).overflow;
	    }

	    addFormatToken(0, ['gg', 2], 0, function () {
	        return this.weekYear() % 100;
	    });

	    addFormatToken(0, ['GG', 2], 0, function () {
	        return this.isoWeekYear() % 100;
	    });

	    function addWeekYearFormatToken (token, getter) {
	        addFormatToken(0, [token, token.length], 0, getter);
	    }

	    addWeekYearFormatToken('gggg',     'weekYear');
	    addWeekYearFormatToken('ggggg',    'weekYear');
	    addWeekYearFormatToken('GGGG',  'isoWeekYear');
	    addWeekYearFormatToken('GGGGG', 'isoWeekYear');

	    // ALIASES

	    addUnitAlias('weekYear', 'gg');
	    addUnitAlias('isoWeekYear', 'GG');

	    // PARSING

	    addRegexToken('G',      matchSigned);
	    addRegexToken('g',      matchSigned);
	    addRegexToken('GG',     match1to2, match2);
	    addRegexToken('gg',     match1to2, match2);
	    addRegexToken('GGGG',   match1to4, match4);
	    addRegexToken('gggg',   match1to4, match4);
	    addRegexToken('GGGGG',  match1to6, match6);
	    addRegexToken('ggggg',  match1to6, match6);

	    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
	        week[token.substr(0, 2)] = toInt(input);
	    });

	    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
	        week[token] = utils_hooks__hooks.parseTwoDigitYear(input);
	    });

	    // HELPERS

	    function weeksInYear(year, dow, doy) {
	        return weekOfYear(local__createLocal([year, 11, 31 + dow - doy]), dow, doy).week;
	    }

	    // MOMENTS

	    function getSetWeekYear (input) {
	        var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
	        return input == null ? year : this.add((input - year), 'y');
	    }

	    function getSetISOWeekYear (input) {
	        var year = weekOfYear(this, 1, 4).year;
	        return input == null ? year : this.add((input - year), 'y');
	    }

	    function getISOWeeksInYear () {
	        return weeksInYear(this.year(), 1, 4);
	    }

	    function getWeeksInYear () {
	        var weekInfo = this.localeData()._week;
	        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
	    }

	    addFormatToken('Q', 0, 0, 'quarter');

	    // ALIASES

	    addUnitAlias('quarter', 'Q');

	    // PARSING

	    addRegexToken('Q', match1);
	    addParseToken('Q', function (input, array) {
	        array[MONTH] = (toInt(input) - 1) * 3;
	    });

	    // MOMENTS

	    function getSetQuarter (input) {
	        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
	    }

	    addFormatToken('D', ['DD', 2], 'Do', 'date');

	    // ALIASES

	    addUnitAlias('date', 'D');

	    // PARSING

	    addRegexToken('D',  match1to2);
	    addRegexToken('DD', match1to2, match2);
	    addRegexToken('Do', function (isStrict, locale) {
	        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient;
	    });

	    addParseToken(['D', 'DD'], DATE);
	    addParseToken('Do', function (input, array) {
	        array[DATE] = toInt(input.match(match1to2)[0], 10);
	    });

	    // MOMENTS

	    var getSetDayOfMonth = makeGetSet('Date', true);

	    addFormatToken('d', 0, 'do', 'day');

	    addFormatToken('dd', 0, 0, function (format) {
	        return this.localeData().weekdaysMin(this, format);
	    });

	    addFormatToken('ddd', 0, 0, function (format) {
	        return this.localeData().weekdaysShort(this, format);
	    });

	    addFormatToken('dddd', 0, 0, function (format) {
	        return this.localeData().weekdays(this, format);
	    });

	    addFormatToken('e', 0, 0, 'weekday');
	    addFormatToken('E', 0, 0, 'isoWeekday');

	    // ALIASES

	    addUnitAlias('day', 'd');
	    addUnitAlias('weekday', 'e');
	    addUnitAlias('isoWeekday', 'E');

	    // PARSING

	    addRegexToken('d',    match1to2);
	    addRegexToken('e',    match1to2);
	    addRegexToken('E',    match1to2);
	    addRegexToken('dd',   matchWord);
	    addRegexToken('ddd',  matchWord);
	    addRegexToken('dddd', matchWord);

	    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config) {
	        var weekday = config._locale.weekdaysParse(input);
	        // if we didn't get a weekday name, mark the date as invalid
	        if (weekday != null) {
	            week.d = weekday;
	        } else {
	            getParsingFlags(config).invalidWeekday = input;
	        }
	    });

	    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
	        week[token] = toInt(input);
	    });

	    // HELPERS

	    function parseWeekday(input, locale) {
	        if (typeof input === 'string') {
	            if (!isNaN(input)) {
	                input = parseInt(input, 10);
	            }
	            else {
	                input = locale.weekdaysParse(input);
	                if (typeof input !== 'number') {
	                    return null;
	                }
	            }
	        }
	        return input;
	    }

	    // LOCALES

	    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
	    function localeWeekdays (m) {
	        return this._weekdays[m.day()];
	    }

	    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
	    function localeWeekdaysShort (m) {
	        return this._weekdaysShort[m.day()];
	    }

	    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
	    function localeWeekdaysMin (m) {
	        return this._weekdaysMin[m.day()];
	    }

	    function localeWeekdaysParse (weekdayName) {
	        var i, mom, regex;

	        if (!this._weekdaysParse) {
	            this._weekdaysParse = [];
	        }

	        for (i = 0; i < 7; i++) {
	            // make the regex if we don't have it already
	            if (!this._weekdaysParse[i]) {
	                mom = local__createLocal([2000, 1]).day(i);
	                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
	                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (this._weekdaysParse[i].test(weekdayName)) {
	                return i;
	            }
	        }
	    }

	    // MOMENTS

	    function getSetDayOfWeek (input) {
	        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
	        if (input != null) {
	            input = parseWeekday(input, this.localeData());
	            return this.add(input - day, 'd');
	        } else {
	            return day;
	        }
	    }

	    function getSetLocaleDayOfWeek (input) {
	        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
	        return input == null ? weekday : this.add(input - weekday, 'd');
	    }

	    function getSetISODayOfWeek (input) {
	        // behaves the same as moment#day except
	        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
	        // as a setter, sunday should belong to the previous week.
	        return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
	    }

	    addFormatToken('H', ['HH', 2], 0, 'hour');
	    addFormatToken('h', ['hh', 2], 0, function () {
	        return this.hours() % 12 || 12;
	    });

	    function meridiem (token, lowercase) {
	        addFormatToken(token, 0, 0, function () {
	            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
	        });
	    }

	    meridiem('a', true);
	    meridiem('A', false);

	    // ALIASES

	    addUnitAlias('hour', 'h');

	    // PARSING

	    function matchMeridiem (isStrict, locale) {
	        return locale._meridiemParse;
	    }

	    addRegexToken('a',  matchMeridiem);
	    addRegexToken('A',  matchMeridiem);
	    addRegexToken('H',  match1to2);
	    addRegexToken('h',  match1to2);
	    addRegexToken('HH', match1to2, match2);
	    addRegexToken('hh', match1to2, match2);

	    addParseToken(['H', 'HH'], HOUR);
	    addParseToken(['a', 'A'], function (input, array, config) {
	        config._isPm = config._locale.isPM(input);
	        config._meridiem = input;
	    });
	    addParseToken(['h', 'hh'], function (input, array, config) {
	        array[HOUR] = toInt(input);
	        getParsingFlags(config).bigHour = true;
	    });

	    // LOCALES

	    function localeIsPM (input) {
	        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
	        // Using charAt should be more compatible.
	        return ((input + '').toLowerCase().charAt(0) === 'p');
	    }

	    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
	    function localeMeridiem (hours, minutes, isLower) {
	        if (hours > 11) {
	            return isLower ? 'pm' : 'PM';
	        } else {
	            return isLower ? 'am' : 'AM';
	        }
	    }


	    // MOMENTS

	    // Setting the hour should keep the time, because the user explicitly
	    // specified which hour he wants. So trying to maintain the same hour (in
	    // a new timezone) makes sense. Adding/subtracting hours does not follow
	    // this rule.
	    var getSetHour = makeGetSet('Hours', true);

	    addFormatToken('m', ['mm', 2], 0, 'minute');

	    // ALIASES

	    addUnitAlias('minute', 'm');

	    // PARSING

	    addRegexToken('m',  match1to2);
	    addRegexToken('mm', match1to2, match2);
	    addParseToken(['m', 'mm'], MINUTE);

	    // MOMENTS

	    var getSetMinute = makeGetSet('Minutes', false);

	    addFormatToken('s', ['ss', 2], 0, 'second');

	    // ALIASES

	    addUnitAlias('second', 's');

	    // PARSING

	    addRegexToken('s',  match1to2);
	    addRegexToken('ss', match1to2, match2);
	    addParseToken(['s', 'ss'], SECOND);

	    // MOMENTS

	    var getSetSecond = makeGetSet('Seconds', false);

	    addFormatToken('S', 0, 0, function () {
	        return ~~(this.millisecond() / 100);
	    });

	    addFormatToken(0, ['SS', 2], 0, function () {
	        return ~~(this.millisecond() / 10);
	    });

	    function millisecond__milliseconds (token) {
	        addFormatToken(0, [token, 3], 0, 'millisecond');
	    }

	    millisecond__milliseconds('SSS');
	    millisecond__milliseconds('SSSS');

	    // ALIASES

	    addUnitAlias('millisecond', 'ms');

	    // PARSING

	    addRegexToken('S',    match1to3, match1);
	    addRegexToken('SS',   match1to3, match2);
	    addRegexToken('SSS',  match1to3, match3);
	    addRegexToken('SSSS', matchUnsigned);
	    addParseToken(['S', 'SS', 'SSS', 'SSSS'], function (input, array) {
	        array[MILLISECOND] = toInt(('0.' + input) * 1000);
	    });

	    // MOMENTS

	    var getSetMillisecond = makeGetSet('Milliseconds', false);

	    addFormatToken('z',  0, 0, 'zoneAbbr');
	    addFormatToken('zz', 0, 0, 'zoneName');

	    // MOMENTS

	    function getZoneAbbr () {
	        return this._isUTC ? 'UTC' : '';
	    }

	    function getZoneName () {
	        return this._isUTC ? 'Coordinated Universal Time' : '';
	    }

	    var momentPrototype__proto = Moment.prototype;

	    momentPrototype__proto.add          = add_subtract__add;
	    momentPrototype__proto.calendar     = moment_calendar__calendar;
	    momentPrototype__proto.clone        = clone;
	    momentPrototype__proto.diff         = diff;
	    momentPrototype__proto.endOf        = endOf;
	    momentPrototype__proto.format       = format;
	    momentPrototype__proto.from         = from;
	    momentPrototype__proto.fromNow      = fromNow;
	    momentPrototype__proto.to           = to;
	    momentPrototype__proto.toNow        = toNow;
	    momentPrototype__proto.get          = getSet;
	    momentPrototype__proto.invalidAt    = invalidAt;
	    momentPrototype__proto.isAfter      = isAfter;
	    momentPrototype__proto.isBefore     = isBefore;
	    momentPrototype__proto.isBetween    = isBetween;
	    momentPrototype__proto.isSame       = isSame;
	    momentPrototype__proto.isValid      = moment_valid__isValid;
	    momentPrototype__proto.lang         = lang;
	    momentPrototype__proto.locale       = locale;
	    momentPrototype__proto.localeData   = localeData;
	    momentPrototype__proto.max          = prototypeMax;
	    momentPrototype__proto.min          = prototypeMin;
	    momentPrototype__proto.parsingFlags = parsingFlags;
	    momentPrototype__proto.set          = getSet;
	    momentPrototype__proto.startOf      = startOf;
	    momentPrototype__proto.subtract     = add_subtract__subtract;
	    momentPrototype__proto.toArray      = toArray;
	    momentPrototype__proto.toDate       = toDate;
	    momentPrototype__proto.toISOString  = moment_format__toISOString;
	    momentPrototype__proto.toJSON       = moment_format__toISOString;
	    momentPrototype__proto.toString     = toString;
	    momentPrototype__proto.unix         = unix;
	    momentPrototype__proto.valueOf      = to_type__valueOf;

	    // Year
	    momentPrototype__proto.year       = getSetYear;
	    momentPrototype__proto.isLeapYear = getIsLeapYear;

	    // Week Year
	    momentPrototype__proto.weekYear    = getSetWeekYear;
	    momentPrototype__proto.isoWeekYear = getSetISOWeekYear;

	    // Quarter
	    momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter;

	    // Month
	    momentPrototype__proto.month       = getSetMonth;
	    momentPrototype__proto.daysInMonth = getDaysInMonth;

	    // Week
	    momentPrototype__proto.week           = momentPrototype__proto.weeks        = getSetWeek;
	    momentPrototype__proto.isoWeek        = momentPrototype__proto.isoWeeks     = getSetISOWeek;
	    momentPrototype__proto.weeksInYear    = getWeeksInYear;
	    momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear;

	    // Day
	    momentPrototype__proto.date       = getSetDayOfMonth;
	    momentPrototype__proto.day        = momentPrototype__proto.days             = getSetDayOfWeek;
	    momentPrototype__proto.weekday    = getSetLocaleDayOfWeek;
	    momentPrototype__proto.isoWeekday = getSetISODayOfWeek;
	    momentPrototype__proto.dayOfYear  = getSetDayOfYear;

	    // Hour
	    momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour;

	    // Minute
	    momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute;

	    // Second
	    momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond;

	    // Millisecond
	    momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond;

	    // Offset
	    momentPrototype__proto.utcOffset            = getSetOffset;
	    momentPrototype__proto.utc                  = setOffsetToUTC;
	    momentPrototype__proto.local                = setOffsetToLocal;
	    momentPrototype__proto.parseZone            = setOffsetToParsedOffset;
	    momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset;
	    momentPrototype__proto.isDST                = isDaylightSavingTime;
	    momentPrototype__proto.isDSTShifted         = isDaylightSavingTimeShifted;
	    momentPrototype__proto.isLocal              = isLocal;
	    momentPrototype__proto.isUtcOffset          = isUtcOffset;
	    momentPrototype__proto.isUtc                = isUtc;
	    momentPrototype__proto.isUTC                = isUtc;

	    // Timezone
	    momentPrototype__proto.zoneAbbr = getZoneAbbr;
	    momentPrototype__proto.zoneName = getZoneName;

	    // Deprecations
	    momentPrototype__proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
	    momentPrototype__proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
	    momentPrototype__proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
	    momentPrototype__proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779', getSetZone);

	    var momentPrototype = momentPrototype__proto;

	    function moment__createUnix (input) {
	        return local__createLocal(input * 1000);
	    }

	    function moment__createInZone () {
	        return local__createLocal.apply(null, arguments).parseZone();
	    }

	    var defaultCalendar = {
	        sameDay : '[Today at] LT',
	        nextDay : '[Tomorrow at] LT',
	        nextWeek : 'dddd [at] LT',
	        lastDay : '[Yesterday at] LT',
	        lastWeek : '[Last] dddd [at] LT',
	        sameElse : 'L'
	    };

	    function locale_calendar__calendar (key, mom, now) {
	        var output = this._calendar[key];
	        return typeof output === 'function' ? output.call(mom, now) : output;
	    }

	    var defaultLongDateFormat = {
	        LTS  : 'h:mm:ss A',
	        LT   : 'h:mm A',
	        L    : 'MM/DD/YYYY',
	        LL   : 'MMMM D, YYYY',
	        LLL  : 'MMMM D, YYYY LT',
	        LLLL : 'dddd, MMMM D, YYYY LT'
	    };

	    function longDateFormat (key) {
	        var output = this._longDateFormat[key];
	        if (!output && this._longDateFormat[key.toUpperCase()]) {
	            output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
	                return val.slice(1);
	            });
	            this._longDateFormat[key] = output;
	        }
	        return output;
	    }

	    var defaultInvalidDate = 'Invalid date';

	    function invalidDate () {
	        return this._invalidDate;
	    }

	    var defaultOrdinal = '%d';
	    var defaultOrdinalParse = /\d{1,2}/;

	    function ordinal (number) {
	        return this._ordinal.replace('%d', number);
	    }

	    function preParsePostFormat (string) {
	        return string;
	    }

	    var defaultRelativeTime = {
	        future : 'in %s',
	        past   : '%s ago',
	        s  : 'a few seconds',
	        m  : 'a minute',
	        mm : '%d minutes',
	        h  : 'an hour',
	        hh : '%d hours',
	        d  : 'a day',
	        dd : '%d days',
	        M  : 'a month',
	        MM : '%d months',
	        y  : 'a year',
	        yy : '%d years'
	    };

	    function relative__relativeTime (number, withoutSuffix, string, isFuture) {
	        var output = this._relativeTime[string];
	        return (typeof output === 'function') ?
	            output(number, withoutSuffix, string, isFuture) :
	            output.replace(/%d/i, number);
	    }

	    function pastFuture (diff, output) {
	        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
	        return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
	    }

	    function locale_set__set (config) {
	        var prop, i;
	        for (i in config) {
	            prop = config[i];
	            if (typeof prop === 'function') {
	                this[i] = prop;
	            } else {
	                this['_' + i] = prop;
	            }
	        }
	        // Lenient ordinal parsing accepts just a number in addition to
	        // number + (possibly) stuff coming from _ordinalParseLenient.
	        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + '|' + (/\d{1,2}/).source);
	    }

	    var prototype__proto = Locale.prototype;

	    prototype__proto._calendar       = defaultCalendar;
	    prototype__proto.calendar        = locale_calendar__calendar;
	    prototype__proto._longDateFormat = defaultLongDateFormat;
	    prototype__proto.longDateFormat  = longDateFormat;
	    prototype__proto._invalidDate    = defaultInvalidDate;
	    prototype__proto.invalidDate     = invalidDate;
	    prototype__proto._ordinal        = defaultOrdinal;
	    prototype__proto.ordinal         = ordinal;
	    prototype__proto._ordinalParse   = defaultOrdinalParse;
	    prototype__proto.preparse        = preParsePostFormat;
	    prototype__proto.postformat      = preParsePostFormat;
	    prototype__proto._relativeTime   = defaultRelativeTime;
	    prototype__proto.relativeTime    = relative__relativeTime;
	    prototype__proto.pastFuture      = pastFuture;
	    prototype__proto.set             = locale_set__set;

	    // Month
	    prototype__proto.months       =        localeMonths;
	    prototype__proto._months      = defaultLocaleMonths;
	    prototype__proto.monthsShort  =        localeMonthsShort;
	    prototype__proto._monthsShort = defaultLocaleMonthsShort;
	    prototype__proto.monthsParse  =        localeMonthsParse;

	    // Week
	    prototype__proto.week = localeWeek;
	    prototype__proto._week = defaultLocaleWeek;
	    prototype__proto.firstDayOfYear = localeFirstDayOfYear;
	    prototype__proto.firstDayOfWeek = localeFirstDayOfWeek;

	    // Day of Week
	    prototype__proto.weekdays       =        localeWeekdays;
	    prototype__proto._weekdays      = defaultLocaleWeekdays;
	    prototype__proto.weekdaysMin    =        localeWeekdaysMin;
	    prototype__proto._weekdaysMin   = defaultLocaleWeekdaysMin;
	    prototype__proto.weekdaysShort  =        localeWeekdaysShort;
	    prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort;
	    prototype__proto.weekdaysParse  =        localeWeekdaysParse;

	    // Hours
	    prototype__proto.isPM = localeIsPM;
	    prototype__proto._meridiemParse = defaultLocaleMeridiemParse;
	    prototype__proto.meridiem = localeMeridiem;

	    function lists__get (format, index, field, setter) {
	        var locale = locale_locales__getLocale();
	        var utc = create_utc__createUTC().set(setter, index);
	        return locale[field](utc, format);
	    }

	    function list (format, index, field, count, setter) {
	        if (typeof format === 'number') {
	            index = format;
	            format = undefined;
	        }

	        format = format || '';

	        if (index != null) {
	            return lists__get(format, index, field, setter);
	        }

	        var i;
	        var out = [];
	        for (i = 0; i < count; i++) {
	            out[i] = lists__get(format, i, field, setter);
	        }
	        return out;
	    }

	    function lists__listMonths (format, index) {
	        return list(format, index, 'months', 12, 'month');
	    }

	    function lists__listMonthsShort (format, index) {
	        return list(format, index, 'monthsShort', 12, 'month');
	    }

	    function lists__listWeekdays (format, index) {
	        return list(format, index, 'weekdays', 7, 'day');
	    }

	    function lists__listWeekdaysShort (format, index) {
	        return list(format, index, 'weekdaysShort', 7, 'day');
	    }

	    function lists__listWeekdaysMin (format, index) {
	        return list(format, index, 'weekdaysMin', 7, 'day');
	    }

	    locale_locales__getSetGlobalLocale('en', {
	        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (toInt(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        }
	    });

	    // Side effect imports
	    utils_hooks__hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', locale_locales__getSetGlobalLocale);
	    utils_hooks__hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', locale_locales__getLocale);

	    var mathAbs = Math.abs;

	    function duration_abs__abs () {
	        var data           = this._data;

	        this._milliseconds = mathAbs(this._milliseconds);
	        this._days         = mathAbs(this._days);
	        this._months       = mathAbs(this._months);

	        data.milliseconds  = mathAbs(data.milliseconds);
	        data.seconds       = mathAbs(data.seconds);
	        data.minutes       = mathAbs(data.minutes);
	        data.hours         = mathAbs(data.hours);
	        data.months        = mathAbs(data.months);
	        data.years         = mathAbs(data.years);

	        return this;
	    }

	    function duration_add_subtract__addSubtract (duration, input, value, direction) {
	        var other = create__createDuration(input, value);

	        duration._milliseconds += direction * other._milliseconds;
	        duration._days         += direction * other._days;
	        duration._months       += direction * other._months;

	        return duration._bubble();
	    }

	    // supports only 2.0-style add(1, 's') or add(duration)
	    function duration_add_subtract__add (input, value) {
	        return duration_add_subtract__addSubtract(this, input, value, 1);
	    }

	    // supports only 2.0-style subtract(1, 's') or subtract(duration)
	    function duration_add_subtract__subtract (input, value) {
	        return duration_add_subtract__addSubtract(this, input, value, -1);
	    }

	    function bubble () {
	        var milliseconds = this._milliseconds;
	        var days         = this._days;
	        var months       = this._months;
	        var data         = this._data;
	        var seconds, minutes, hours, years = 0;

	        // The following code bubbles up values, see the tests for
	        // examples of what that means.
	        data.milliseconds = milliseconds % 1000;

	        seconds           = absFloor(milliseconds / 1000);
	        data.seconds      = seconds % 60;

	        minutes           = absFloor(seconds / 60);
	        data.minutes      = minutes % 60;

	        hours             = absFloor(minutes / 60);
	        data.hours        = hours % 24;

	        days += absFloor(hours / 24);

	        // Accurately convert days to years, assume start from year 0.
	        years = absFloor(daysToYears(days));
	        days -= absFloor(yearsToDays(years));

	        // 30 days to a month
	        // TODO (iskren): Use anchor date (like 1st Jan) to compute this.
	        months += absFloor(days / 30);
	        days   %= 30;

	        // 12 months -> 1 year
	        years  += absFloor(months / 12);
	        months %= 12;

	        data.days   = days;
	        data.months = months;
	        data.years  = years;

	        return this;
	    }

	    function daysToYears (days) {
	        // 400 years have 146097 days (taking into account leap year rules)
	        return days * 400 / 146097;
	    }

	    function yearsToDays (years) {
	        // years * 365 + absFloor(years / 4) -
	        //     absFloor(years / 100) + absFloor(years / 400);
	        return years * 146097 / 400;
	    }

	    function as (units) {
	        var days;
	        var months;
	        var milliseconds = this._milliseconds;

	        units = normalizeUnits(units);

	        if (units === 'month' || units === 'year') {
	            days   = this._days   + milliseconds / 864e5;
	            months = this._months + daysToYears(days) * 12;
	            return units === 'month' ? months : months / 12;
	        } else {
	            // handle milliseconds separately because of floating point math errors (issue #1867)
	            days = this._days + Math.round(yearsToDays(this._months / 12));
	            switch (units) {
	                case 'week'   : return days / 7     + milliseconds / 6048e5;
	                case 'day'    : return days         + milliseconds / 864e5;
	                case 'hour'   : return days * 24    + milliseconds / 36e5;
	                case 'minute' : return days * 1440  + milliseconds / 6e4;
	                case 'second' : return days * 86400 + milliseconds / 1000;
	                // Math.floor prevents floating point math errors here
	                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
	                default: throw new Error('Unknown unit ' + units);
	            }
	        }
	    }

	    // TODO: Use this.as('ms')?
	    function duration_as__valueOf () {
	        return (
	            this._milliseconds +
	            this._days * 864e5 +
	            (this._months % 12) * 2592e6 +
	            toInt(this._months / 12) * 31536e6
	        );
	    }

	    function makeAs (alias) {
	        return function () {
	            return this.as(alias);
	        };
	    }

	    var asMilliseconds = makeAs('ms');
	    var asSeconds      = makeAs('s');
	    var asMinutes      = makeAs('m');
	    var asHours        = makeAs('h');
	    var asDays         = makeAs('d');
	    var asWeeks        = makeAs('w');
	    var asMonths       = makeAs('M');
	    var asYears        = makeAs('y');

	    function duration_get__get (units) {
	        units = normalizeUnits(units);
	        return this[units + 's']();
	    }

	    function makeGetter(name) {
	        return function () {
	            return this._data[name];
	        };
	    }

	    var duration_get__milliseconds = makeGetter('milliseconds');
	    var seconds      = makeGetter('seconds');
	    var minutes      = makeGetter('minutes');
	    var hours        = makeGetter('hours');
	    var days         = makeGetter('days');
	    var months       = makeGetter('months');
	    var years        = makeGetter('years');

	    function weeks () {
	        return absFloor(this.days() / 7);
	    }

	    var round = Math.round;
	    var thresholds = {
	        s: 45,  // seconds to minute
	        m: 45,  // minutes to hour
	        h: 22,  // hours to day
	        d: 26,  // days to month
	        M: 11   // months to year
	    };

	    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
	        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	    }

	    function duration_humanize__relativeTime (posNegDuration, withoutSuffix, locale) {
	        var duration = create__createDuration(posNegDuration).abs();
	        var seconds  = round(duration.as('s'));
	        var minutes  = round(duration.as('m'));
	        var hours    = round(duration.as('h'));
	        var days     = round(duration.as('d'));
	        var months   = round(duration.as('M'));
	        var years    = round(duration.as('y'));

	        var a = seconds < thresholds.s && ['s', seconds]  ||
	                minutes === 1          && ['m']           ||
	                minutes < thresholds.m && ['mm', minutes] ||
	                hours   === 1          && ['h']           ||
	                hours   < thresholds.h && ['hh', hours]   ||
	                days    === 1          && ['d']           ||
	                days    < thresholds.d && ['dd', days]    ||
	                months  === 1          && ['M']           ||
	                months  < thresholds.M && ['MM', months]  ||
	                years   === 1          && ['y']           || ['yy', years];

	        a[2] = withoutSuffix;
	        a[3] = +posNegDuration > 0;
	        a[4] = locale;
	        return substituteTimeAgo.apply(null, a);
	    }

	    // This function allows you to set a threshold for relative time strings
	    function duration_humanize__getSetRelativeTimeThreshold (threshold, limit) {
	        if (thresholds[threshold] === undefined) {
	            return false;
	        }
	        if (limit === undefined) {
	            return thresholds[threshold];
	        }
	        thresholds[threshold] = limit;
	        return true;
	    }

	    function humanize (withSuffix) {
	        var locale = this.localeData();
	        var output = duration_humanize__relativeTime(this, !withSuffix, locale);

	        if (withSuffix) {
	            output = locale.pastFuture(+this, output);
	        }

	        return locale.postformat(output);
	    }

	    var iso_string__abs = Math.abs;

	    function iso_string__toISOString() {
	        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
	        var Y = iso_string__abs(this.years());
	        var M = iso_string__abs(this.months());
	        var D = iso_string__abs(this.days());
	        var h = iso_string__abs(this.hours());
	        var m = iso_string__abs(this.minutes());
	        var s = iso_string__abs(this.seconds() + this.milliseconds() / 1000);
	        var total = this.asSeconds();

	        if (!total) {
	            // this is the same as C#'s (Noda) and python (isodate)...
	            // but not other JS (goog.date)
	            return 'P0D';
	        }

	        return (total < 0 ? '-' : '') +
	            'P' +
	            (Y ? Y + 'Y' : '') +
	            (M ? M + 'M' : '') +
	            (D ? D + 'D' : '') +
	            ((h || m || s) ? 'T' : '') +
	            (h ? h + 'H' : '') +
	            (m ? m + 'M' : '') +
	            (s ? s + 'S' : '');
	    }

	    var duration_prototype__proto = Duration.prototype;

	    duration_prototype__proto.abs            = duration_abs__abs;
	    duration_prototype__proto.add            = duration_add_subtract__add;
	    duration_prototype__proto.subtract       = duration_add_subtract__subtract;
	    duration_prototype__proto.as             = as;
	    duration_prototype__proto.asMilliseconds = asMilliseconds;
	    duration_prototype__proto.asSeconds      = asSeconds;
	    duration_prototype__proto.asMinutes      = asMinutes;
	    duration_prototype__proto.asHours        = asHours;
	    duration_prototype__proto.asDays         = asDays;
	    duration_prototype__proto.asWeeks        = asWeeks;
	    duration_prototype__proto.asMonths       = asMonths;
	    duration_prototype__proto.asYears        = asYears;
	    duration_prototype__proto.valueOf        = duration_as__valueOf;
	    duration_prototype__proto._bubble        = bubble;
	    duration_prototype__proto.get            = duration_get__get;
	    duration_prototype__proto.milliseconds   = duration_get__milliseconds;
	    duration_prototype__proto.seconds        = seconds;
	    duration_prototype__proto.minutes        = minutes;
	    duration_prototype__proto.hours          = hours;
	    duration_prototype__proto.days           = days;
	    duration_prototype__proto.weeks          = weeks;
	    duration_prototype__proto.months         = months;
	    duration_prototype__proto.years          = years;
	    duration_prototype__proto.humanize       = humanize;
	    duration_prototype__proto.toISOString    = iso_string__toISOString;
	    duration_prototype__proto.toString       = iso_string__toISOString;
	    duration_prototype__proto.toJSON         = iso_string__toISOString;
	    duration_prototype__proto.locale         = locale;
	    duration_prototype__proto.localeData     = localeData;

	    // Deprecations
	    duration_prototype__proto.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', iso_string__toISOString);
	    duration_prototype__proto.lang = lang;

	    // Side effect imports

	    addFormatToken('X', 0, 0, 'unix');
	    addFormatToken('x', 0, 0, 'valueOf');

	    // PARSING

	    addRegexToken('x', matchSigned);
	    addRegexToken('X', matchTimestamp);
	    addParseToken('X', function (input, array, config) {
	        config._d = new Date(parseFloat(input, 10) * 1000);
	    });
	    addParseToken('x', function (input, array, config) {
	        config._d = new Date(toInt(input));
	    });

	    // Side effect imports


	    utils_hooks__hooks.version = '2.10.3';

	    setHookCallback(local__createLocal);

	    utils_hooks__hooks.fn                    = momentPrototype;
	    utils_hooks__hooks.min                   = min;
	    utils_hooks__hooks.max                   = max;
	    utils_hooks__hooks.utc                   = create_utc__createUTC;
	    utils_hooks__hooks.unix                  = moment__createUnix;
	    utils_hooks__hooks.months                = lists__listMonths;
	    utils_hooks__hooks.isDate                = isDate;
	    utils_hooks__hooks.locale                = locale_locales__getSetGlobalLocale;
	    utils_hooks__hooks.invalid               = valid__createInvalid;
	    utils_hooks__hooks.duration              = create__createDuration;
	    utils_hooks__hooks.isMoment              = isMoment;
	    utils_hooks__hooks.weekdays              = lists__listWeekdays;
	    utils_hooks__hooks.parseZone             = moment__createInZone;
	    utils_hooks__hooks.localeData            = locale_locales__getLocale;
	    utils_hooks__hooks.isDuration            = isDuration;
	    utils_hooks__hooks.monthsShort           = lists__listMonthsShort;
	    utils_hooks__hooks.weekdaysMin           = lists__listWeekdaysMin;
	    utils_hooks__hooks.defineLocale          = defineLocale;
	    utils_hooks__hooks.weekdaysShort         = lists__listWeekdaysShort;
	    utils_hooks__hooks.normalizeUnits        = normalizeUnits;
	    utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;

	    var _moment = utils_hooks__hooks;

	    return _moment;

	}));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @version: 2.1.13
	 * @author: Dan Grossman http://www.dangrossman.info/
	 * @copyright: Copyright (c) 2012-2015 Dan Grossman. All rights reserved.
	 * @license: Licensed under the MIT license. See http://www.opensource.org/licenses/mit-license.php
	 * @website: https://www.improvely.com/
	 */

	(function(root, factory) {

	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(10), __webpack_require__(3), exports], __WEBPACK_AMD_DEFINE_RESULT__ = function(momentjs, $, exports) {
	            root.daterangepicker = factory(root, exports, momentjs, $);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

	        // console.log('amd')
	    } else if (typeof exports !== 'undefined') {
	        // console.log('cmd')
	        var momentjs = require('moment');
	        var jQuery = (typeof window != 'undefined') ? window.jQuery : undefined;  //isomorphic issue
	        if (!jQuery) {
	            try {
	                jQuery = require('jquery');
	                if (!jQuery.fn) jQuery.fn = {}; //isomorphic issue
	            } catch (err) {
	                if (!jQuery) throw new Error('jQuery dependency not found');
	            }
	        }

	        factory(root, exports, momentjs, jQuery);

	        // Finally, as a browser global.
	    } else {
	        // console.log('cmd___amd')
	        define(['./moment','jquery'], function(){
	            root.daterangepicker = factory(root, {}, root.moment || moment, (root.jQuery || root.Zepto || root.ender || root.$));
	        });
	        // root.daterangepicker = factory(root, {}, root.moment || moment, (root.jQuery || root.Zepto || root.ender || root.$));
	    }

	}(this || {}, function(root, daterangepicker, moment, $) { // 'this' doesn't exist on a server

	    var DateRangePicker = function(element, options, cb) {

	        //default settings for options
	        this.parentEl = 'body';
	        this.element = $(element);
	        this.startDate = moment().startOf('day');
	        this.endDate = moment().endOf('day');
	        this.minDate = false;
	        this.maxDate = false;
	        this.dateLimit = false;
	        this.autoApply = false;
	        this.singleDatePicker = false;
	        this.showDropdowns = false;
	        this.showWeekNumbers = false;
	        this.timePicker = false;
	        this.timePicker24Hour = false;
	        this.timePickerIncrement = 1;
	        this.timePickerSeconds = false;
	        this.linkedCalendars = true;
	        this.autoUpdateInput = true;
	        this.ranges = {};
	        this.rangesHour = [];

	        this.opens = 'right';
	        if (this.element.hasClass('pull-right'))
	            this.opens = 'left';

	        this.drops = 'down';
	        if (this.element.hasClass('dropup'))
	            this.drops = 'up';

	        this.buttonClasses = 'btn btn-sm';
	        this.applyClass = 'btn-success';
	        this.cancelClass = 'btn-default';

	        this.locale = {
	            format: 'MM/DD/YYYY',
	            separator: ' - ',
	            applyLabel: '确定',
	            cancelLabel: '取消',
	            weekLabel: 'W',
	            customRangeLabel: 'Custom Range',
	            daysOfWeek: moment.weekdaysMin(),
	            monthNames: moment.monthsShort(),
	            firstDay: moment.localeData().firstDayOfWeek()
	        };

	        this.callback = function() { };

	        //some state information
	        this.isShowing = false;
	        this.leftCalendar = {};
	        this.rightCalendar = {};

	        //custom options from user
	        if (typeof options !== 'object' || options === null)
	            options = {};

	        //allow setting options with data attributes
	        //data-api options will be overwritten with custom javascript options
	        options = $.extend(this.element.data(), options);

	        //html template for the picker UI
	        if (typeof options.template !== 'string')
	            options.template = '<div class="daterangepicker dropdown-menu">' +
	                '<div class="calendar left">' +
	                '<div class="daterangepicker_input">' +
	                '<input class="input-mini" type="text" name="daterangepicker_start" value="" />' +
	                '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' +
	                '<div class="calendar-time">' +
	                '<div></div>' +
	                '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' +
	                '</div>' +
	                '</div>' +
	                '<div class="calendar-table"></div>' +
	                '</div>' +
	                '<div class="calendar right">' +
	                '<div class="daterangepicker_input">' +
	                '<input class="input-mini" type="text" name="daterangepicker_end" value="" />' +
	                '<i class="fa fa-calendar glyphicon glyphicon-calendar"></i>' +
	                '<div class="calendar-time">' +
	                '<div></div>' +
	                '<i class="fa fa-clock-o glyphicon glyphicon-time"></i>' +
	                '</div>' +
	                '</div>' +
	                '<div class="calendar-table"></div>' +
	                '</div>' +
	                '<div class="ranges">' +
	                '<div class="range_inputs">' +
	                '<button class="applyBtn" disabled="disabled" type="button"></button> ' +
	                '<button class="cancelBtn" type="button"></button>' +
	                '</div>' +
	                '</div>' +
	                '</div>';

	        this.parentEl = (options.parentEl && $(options.parentEl).length) ? $(options.parentEl) : $(this.parentEl);
	        this.container = $(options.template).appendTo(this.parentEl);

	        //
	        // handle all the possible options overriding defaults
	        //

	        if (typeof options.locale === 'object') {

	            if (typeof options.locale.format === 'string')
	                this.locale.format = options.locale.format;

	            if (typeof options.locale.separator === 'string')
	                this.locale.separator = options.locale.separator;

	            if (typeof options.locale.daysOfWeek === 'object')
	                this.locale.daysOfWeek = options.locale.daysOfWeek.slice();

	            if (typeof options.locale.monthNames === 'object')
	                this.locale.monthNames = options.locale.monthNames.slice();

	            if (typeof options.locale.firstDay === 'number')
	                this.locale.firstDay = options.locale.firstDay;

	            if (typeof options.locale.applyLabel === 'string')
	                this.locale.applyLabel = options.locale.applyLabel;

	            if (typeof options.locale.cancelLabel === 'string')
	                this.locale.cancelLabel = options.locale.cancelLabel;

	            if (typeof options.locale.weekLabel === 'string')
	                this.locale.weekLabel = options.locale.weekLabel;

	            if (typeof options.locale.customRangeLabel === 'string')
	                this.locale.customRangeLabel = options.locale.customRangeLabel;

	        }

	        if (typeof options.startDate === 'string')
	            this.startDate = moment(options.startDate, this.locale.format);

	        if (typeof options.endDate === 'string')
	            this.endDate = moment(options.endDate, this.locale.format);

	        if (typeof options.minDate === 'string')
	            this.minDate = moment(options.minDate, this.locale.format);

	        if (typeof options.maxDate === 'string')
	            this.maxDate = moment(options.maxDate, this.locale.format);

	        if (typeof options.startDate === 'object')
	            this.startDate = moment(options.startDate);

	        if (typeof options.endDate === 'object')
	            this.endDate = moment(options.endDate);

	        if (typeof options.minDate === 'object')
	            this.minDate = moment(options.minDate);

	        if (typeof options.maxDate === 'object')
	            this.maxDate = moment(options.maxDate);

	        // sanity check for bad options
	        if (this.minDate && this.startDate.isBefore(this.minDate))
	            this.startDate = this.minDate.clone();

	        // sanity check for bad options
	        if (this.maxDate && this.endDate.isAfter(this.maxDate))
	            this.endDate = this.maxDate.clone();

	        if (typeof options.applyClass === 'string')
	            this.applyClass = options.applyClass;

	        if (typeof options.cancelClass === 'string')
	            this.cancelClass = options.cancelClass;

	        if (typeof options.dateLimit === 'object')
	            this.dateLimit = options.dateLimit;

	        if (typeof options.opens === 'string')
	            this.opens = options.opens;

	        if (typeof options.drops === 'string')
	            this.drops = options.drops;

	        if (typeof options.showWeekNumbers === 'boolean')
	            this.showWeekNumbers = options.showWeekNumbers;

	        if (typeof options.buttonClasses === 'string')
	            this.buttonClasses = options.buttonClasses;

	        if (typeof options.buttonClasses === 'object')
	            this.buttonClasses = options.buttonClasses.join(' ');

	        if (typeof options.showDropdowns === 'boolean')
	            this.showDropdowns = options.showDropdowns;

	        if (typeof options.singleDatePicker === 'boolean') {
	            this.singleDatePicker = options.singleDatePicker;
	            if (this.singleDatePicker)
	                this.endDate = this.startDate.clone();
	        }

	        if (typeof options.timePicker === 'boolean')
	            this.timePicker = options.timePicker;

	        if (typeof options.timePickerSeconds === 'boolean')
	            this.timePickerSeconds = options.timePickerSeconds;

	        if (typeof options.timePickerIncrement === 'number')
	            this.timePickerIncrement = options.timePickerIncrement;

	        if (typeof options.timePicker24Hour === 'boolean')
	            this.timePicker24Hour = options.timePicker24Hour;

	        if (typeof options.autoApply === 'boolean')
	            this.autoApply = options.autoApply;

	        if (typeof options.autoUpdateInput === 'boolean')
	            this.autoUpdateInput = options.autoUpdateInput;

	        if (typeof options.linkedCalendars === 'boolean')
	            this.linkedCalendars = options.linkedCalendars;

	        if (typeof options.isInvalidDate === 'function')
	            this.isInvalidDate = options.isInvalidDate;

	        // update day names order to firstDay
	        if (this.locale.firstDay != 0) {
	            var iterator = this.locale.firstDay;
	            while (iterator > 0) {
	                this.locale.daysOfWeek.push(this.locale.daysOfWeek.shift());
	                iterator--;
	            }
	        }

	        var start, end, range;

	        //if no start/end dates set, check if an input element contains initial values
	        if (typeof options.startDate === 'undefined' && typeof options.endDate === 'undefined') {
	            if ($(this.element).is('input[type=text]')) {
	                var val = $(this.element).val(),
	                    split = val.split(this.locale.separator);

	                start = end = null;

	                if (split.length == 2) {
	                    start = moment(split[0], this.locale.format);
	                    end = moment(split[1], this.locale.format);
	                } else if (this.singleDatePicker && val !== "") {
	                    start = moment(val, this.locale.format);
	                    end = moment(val, this.locale.format);
	                }
	                if (start !== null && end !== null) {
	                    this.setStartDate(start);
	                    this.setEndDate(end);
	                }
	            }
	        }

	        if (typeof options.ranges === 'object') {
	            for (range in options.ranges) {

	                if (typeof options.ranges[range][0] === 'string')
	                    start = moment(options.ranges[range][0], this.locale.format);
	                else
	                    start = moment(options.ranges[range][0]);

	                if (typeof options.ranges[range][1] === 'string')
	                    end = moment(options.ranges[range][1], this.locale.format);
	                else
	                    end = moment(options.ranges[range][1]);

	                // If the start or end date exceed those allowed by the minDate or dateLimit
	                // options, shorten the range to the allowable period.
	                if (this.minDate && start.isBefore(this.minDate))
	                    start = this.minDate.clone();

	                var maxDate = this.maxDate;
	                if (this.dateLimit && start.clone().add(this.dateLimit).isAfter(maxDate))
	                    maxDate = start.clone().add(this.dateLimit);
	                if (maxDate && end.isAfter(maxDate))
	                    end = maxDate.clone();

	                // If the end of the range is before the minimum or the start of the range is
	                // after the maximum, don't display this range option at all.
	                if ((this.minDate && end.isBefore(this.minDate)) || (maxDate && start.isAfter(maxDate)))
	                    continue;

	                //Support unicode chars in the range names.
	                var elem = document.createElement('textarea');
	                elem.innerHTML = range;
	                rangeHtml = elem.value;

	                this.ranges[rangeHtml] = [start, end];
	            }

	            var list = '<ul>';
	            for (range in this.ranges) {
	                list += '<li>' + range + '</li>';
	            }
	            list += '<li>' + this.locale.customRangeLabel + '</li>';
	            list += '</ul>';
	            this.container.find('.ranges').prepend(list);
	        }

	        if (typeof cb === 'function') {
	            this.callback = cb;
	        }

	        if (!this.timePicker) {
	            this.startDate = this.startDate.startOf('day');
	            this.endDate = this.endDate.endOf('day');
	            this.container.find('.calendar-time').hide();
	        }

	        //can't be used together for now
	        if (this.timePicker && this.autoApply)
	            this.autoApply = false;

	        if (this.autoApply && typeof options.ranges !== 'object') {
	            this.container.find('.ranges').hide();
	        } else if (this.autoApply) {
	            this.container.find('.applyBtn, .cancelBtn').addClass('hide');
	        }

	        if (this.singleDatePicker) {
	            this.container.addClass('single');
	            this.container.find('.calendar.left').addClass('single');
	            this.container.find('.calendar.left').show();
	            this.container.find('.calendar.right').hide();
	            this.container.find('.daterangepicker_input input, .daterangepicker_input i').hide();
	            if (!this.timePicker) {
	                this.container.find('.ranges').hide();
	            }
	        }

	        if (typeof options.ranges === 'undefined' && !this.singleDatePicker) {
	            this.container.addClass('show-calendar');
	        }

	        this.container.addClass('opens' + this.opens);

	        //swap the position of the predefined ranges if opens right
	        if (typeof options.ranges !== 'undefined' && this.opens == 'right') {
	            var ranges = this.container.find('.ranges');
	            var html = ranges.clone();
	            ranges.remove();
	            this.container.find('.calendar.left').parent().prepend(html);
	        }

	        //apply CSS classes and labels to buttons
	        this.container.find('.applyBtn, .cancelBtn').addClass(this.buttonClasses);
	        if (this.applyClass.length)
	            this.container.find('.applyBtn').addClass(this.applyClass);
	        if (this.cancelClass.length)
	            this.container.find('.cancelBtn').addClass(this.cancelClass);
	        this.container.find('.applyBtn').html(this.locale.applyLabel);
	        this.container.find('.cancelBtn').html(this.locale.cancelLabel);

	        //自定义部分
	        if(options.rangesHour&&options.rangesHour.length==2){
	            this.rangesHour = options.rangesHour;
	        }

	        //
	        // event listeners
	        //

	        this.container.find('.calendar')
	            .on('click.daterangepicker', '.prev', $.proxy(this.clickPrev, this))
	            .on('click.daterangepicker', '.next', $.proxy(this.clickNext, this))
	            .on('click.daterangepicker', 'td.available', $.proxy(this.clickDate, this))
	            .on('mouseenter.daterangepicker', 'td.available', $.proxy(this.hoverDate, this))
	            .on('mouseleave.daterangepicker', 'td.available', $.proxy(this.updateFormInputs, this))
	            .on('change.daterangepicker', 'select.yearselect', $.proxy(this.monthOrYearChanged, this))
	            .on('change.daterangepicker', 'select.monthselect', $.proxy(this.monthOrYearChanged, this))
	            .on('change.daterangepicker', 'select.hourselect,select.minuteselect,select.secondselect,select.ampmselect', $.proxy(this.timeChanged, this))
	            .on('click.daterangepicker', '.daterangepicker_input input', $.proxy(this.showCalendars, this))
	            //.on('keyup.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsChanged, this))
	            .on('change.daterangepicker', '.daterangepicker_input input', $.proxy(this.formInputsChanged, this));

	        this.container.find('.ranges')
	            .on('click.daterangepicker', 'button.applyBtn', $.proxy(this.clickApply, this))
	            .on('click.daterangepicker', 'button.cancelBtn', $.proxy(this.clickCancel, this))
	            .on('click.daterangepicker', 'li', $.proxy(this.clickRange, this))
	            .on('mouseenter.daterangepicker', 'li', $.proxy(this.hoverRange, this))
	            .on('mouseleave.daterangepicker', 'li', $.proxy(this.updateFormInputs, this));

	        if (this.element.is('input')) {
	            this.element.on({
	                'click.daterangepicker': $.proxy(this.show, this),
	                'focus.daterangepicker': $.proxy(this.show, this),
	                'keyup.daterangepicker': $.proxy(this.elementChanged, this),
	                'keydown.daterangepicker': $.proxy(this.keydown, this)
	            });
	        } else {
	            this.element.on('click.daterangepicker', $.proxy(this.toggle, this));
	        }

	        //
	        // if attached to a text input, set the initial value
	        //

	        if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
	            this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
	            this.element.trigger('change');
	        } else if (this.element.is('input') && this.autoUpdateInput) {
	            this.element.val(this.startDate.format(this.locale.format));
	            this.element.trigger('change');
	        }

	    };

	    DateRangePicker.prototype = {

	        constructor: DateRangePicker,

	        setStartDate: function(startDate) {
	            if (typeof startDate === 'string')
	                this.startDate = moment(startDate, this.locale.format);

	            if (typeof startDate === 'object')
	                this.startDate = moment(startDate);

	            if (!this.timePicker)
	                this.startDate = this.startDate.startOf('day');

	            if (this.timePicker && this.timePickerIncrement)
	                this.startDate.minute(Math.round(this.startDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

	            if (this.minDate && this.startDate.isBefore(this.minDate))
	                this.startDate = this.minDate;

	            if (this.maxDate && this.startDate.isAfter(this.maxDate))
	                this.startDate = this.maxDate;

	            if (!this.isShowing)
	                this.updateElement();

	            this.updateMonthsInView();
	        },

	        setEndDate: function(endDate) {
	            if (typeof endDate === 'string')
	                this.endDate = moment(endDate, this.locale.format);

	            if (typeof endDate === 'object')
	                this.endDate = moment(endDate);

	            if (!this.timePicker)
	                this.endDate = this.endDate.endOf('day');

	            if (this.timePicker && this.timePickerIncrement)
	                this.endDate.minute(Math.round(this.endDate.minute() / this.timePickerIncrement) * this.timePickerIncrement);

	            if (this.endDate.isBefore(this.startDate))
	                this.endDate = this.startDate.clone();

	            if (this.maxDate && this.endDate.isAfter(this.maxDate))
	                this.endDate = this.maxDate;

	            if (this.dateLimit && this.startDate.clone().add(this.dateLimit).isBefore(this.endDate))
	                this.endDate = this.startDate.clone().add(this.dateLimit);

	            if (!this.isShowing)
	                this.updateElement();

	            this.updateMonthsInView();
	        },

	        isInvalidDate: function() {
	            return false;
	        },

	        updateView: function() {
	            if (this.timePicker) {
	                this.renderTimePicker('left');
	                this.renderTimePicker('right');
	                if (!this.endDate) {
	                    this.container.find('.right .calendar-time select').attr('disabled', 'disabled').addClass('disabled');
	                } else {
	                    this.container.find('.right .calendar-time select').removeAttr('disabled').removeClass('disabled');
	                }
	            }
	            // console.log("this.endDate",this.endDate)
	            if (this.endDate) {
	                this.container.find('input[name="daterangepicker_end"]').removeClass('active');
	                this.container.find('input[name="daterangepicker_start"]').addClass('active');
	            } else {
	                this.container.find('input[name="daterangepicker_end"]').addClass('active');
	                this.container.find('input[name="daterangepicker_start"]').removeClass('active');
	            }
	            this.updateMonthsInView();
	            this.updateCalendars();
	            this.updateFormInputs();
	        },

	        updateMonthsInView: function() {
	            if (this.endDate) {

	                //if both dates are visible already, do nothing
	                if (!this.singleDatePicker && this.leftCalendar.month && this.rightCalendar.month &&
	                    (this.startDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.startDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
	                    &&
	                    (this.endDate.format('YYYY-MM') == this.leftCalendar.month.format('YYYY-MM') || this.endDate.format('YYYY-MM') == this.rightCalendar.month.format('YYYY-MM'))
	                ) {
	                    return;
	                }

	                this.leftCalendar.month = this.startDate.clone().date(2);
	                if (!this.linkedCalendars && (this.endDate.month() != this.startDate.month() || this.endDate.year() != this.startDate.year())) {
	                    this.rightCalendar.month = this.endDate.clone().date(2);
	                } else {
	                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
	                }

	            } else {
	                if (this.leftCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM') && this.rightCalendar.month.format('YYYY-MM') != this.startDate.format('YYYY-MM')) {
	                    this.leftCalendar.month = this.startDate.clone().date(2);
	                    this.rightCalendar.month = this.startDate.clone().date(2).add(1, 'month');
	                }
	            }
	        },

	        updateCalendars: function() {

	            if (this.timePicker) {
	                var hour, minute, second;
	                if (this.endDate) {
	                    hour = parseInt(this.container.find('.left .hourselect').val(), 10);
	                    minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
	                    second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
	                    if (!this.timePicker24Hour) {
	                        var ampm = this.container.find('.left .ampmselect').val();
	                        if (ampm === 'PM' && hour < 12)
	                            hour += 12;
	                        if (ampm === 'AM' && hour === 12)
	                            hour = 0;
	                    }
	                } else {
	                    hour = parseInt(this.container.find('.right .hourselect').val(), 10);
	                    minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
	                    second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
	                    if (!this.timePicker24Hour) {
	                        var ampm = this.container.find('.right .ampmselect').val();
	                        if (ampm === 'PM' && hour < 12)
	                            hour += 12;
	                        if (ampm === 'AM' && hour === 12)
	                            hour = 0;
	                    }
	                }
	                this.leftCalendar.month.hour(hour).minute(minute).second(second);
	                this.rightCalendar.month.hour(hour).minute(minute).second(second);
	            }

	            this.renderCalendar('left');
	            this.renderCalendar('right');

	            //highlight any predefined range matching the current start and end dates
	            this.container.find('.ranges li').removeClass('active');
	            if (this.endDate == null) return;

	            var customRange = true;
	            var i = 0;
	            for (var range in this.ranges) {
	                if (this.timePicker) {
	                    if (this.startDate.isSame(this.ranges[range][0]) && this.endDate.isSame(this.ranges[range][1])) {
	                        customRange = false;
	                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
	                        break;
	                    }
	                } else {
	                    //ignore times when comparing dates if time picker is not enabled
	                    if (this.startDate.format('YYYY-MM-DD') == this.ranges[range][0].format('YYYY-MM-DD') && this.endDate.format('YYYY-MM-DD') == this.ranges[range][1].format('YYYY-MM-DD')) {
	                        customRange = false;
	                        this.chosenLabel = this.container.find('.ranges li:eq(' + i + ')').addClass('active').html();
	                        break;
	                    }
	                }
	                i++;
	            }
	            if (customRange) {
	                this.chosenLabel = this.container.find('.ranges li:last').addClass('active').html();
	                this.showCalendars();
	            }

	        },

	        renderCalendar: function(side) {

	            //
	            // Build the matrix of dates that will populate the calendar
	            //

	            var calendar = side == 'left' ? this.leftCalendar : this.rightCalendar;
	            var month = calendar.month.month();
	            var year = calendar.month.year();
	            var hour = calendar.month.hour();
	            var minute = calendar.month.minute();
	            var second = calendar.month.second();
	            var daysInMonth = moment([year, month]).daysInMonth();
	            var firstDay = moment([year, month, 1]);
	            var lastDay = moment([year, month, daysInMonth]);
	            var lastMonth = moment(firstDay).subtract(1, 'month').month();
	            var lastYear = moment(firstDay).subtract(1, 'month').year();
	            var daysInLastMonth = moment([lastYear, lastMonth]).daysInMonth();
	            var dayOfWeek = firstDay.day();

	            //initialize a 6 rows x 7 columns array for the calendar
	            var calendar = [];
	            calendar.firstDay = firstDay;
	            calendar.lastDay = lastDay;

	            for (var i = 0; i < 6; i++) {
	                calendar[i] = [];
	            }

	            //populate the calendar with date objects
	            var startDay = daysInLastMonth - dayOfWeek + this.locale.firstDay + 1;
	            if (startDay > daysInLastMonth)
	                startDay -= 7;

	            if (dayOfWeek == this.locale.firstDay)
	                startDay = daysInLastMonth - 6;

	            var curDate = moment([lastYear, lastMonth, startDay, 12, minute, second]);

	            var col, row;
	            for (var i = 0, col = 0, row = 0; i < 42; i++, col++, curDate = moment(curDate).add(24, 'hour')) {
	                if (i > 0 && col % 7 === 0) {
	                    col = 0;
	                    row++;
	                }
	                calendar[row][col] = curDate.clone().hour(hour).minute(minute).second(second);
	                curDate.hour(12);

	                if (this.minDate && calendar[row][col].format('YYYY-MM-DD') == this.minDate.format('YYYY-MM-DD') && calendar[row][col].isBefore(this.minDate) && side == 'left') {
	                    calendar[row][col] = this.minDate.clone();
	                }

	                if (this.maxDate && calendar[row][col].format('YYYY-MM-DD') == this.maxDate.format('YYYY-MM-DD') && calendar[row][col].isAfter(this.maxDate) && side == 'right') {
	                    calendar[row][col] = this.maxDate.clone();
	                }

	            }

	            //make the calendar object available to hoverDate/clickDate
	            if (side == 'left') {
	                this.leftCalendar.calendar = calendar;
	            } else {
	                this.rightCalendar.calendar = calendar;
	            }

	            //
	            // Display the calendar
	            //

	            var minDate = side == 'left' ? this.minDate : this.startDate;
	            var maxDate = this.maxDate;
	            var selected = side == 'left' ? this.startDate : this.endDate;

	            var html = '<table class="table-condensed">';
	            html += '<thead>';
	            html += '<tr>';

	            // add empty cell for week number
	            if (this.showWeekNumbers)
	                html += '<th></th>';

	            if ((!minDate || minDate.isBefore(calendar.firstDay)) && (!this.linkedCalendars || side == 'left')) {
	                html += '<th class="prev available"><i class="fa fa-chevron-left glyphicon glyphicon-chevron-left"></i></th>';
	            } else {
	                html += '<th></th>';
	            }

	            var dateHtml = this.locale.monthNames[calendar[1][1].month()] + calendar[1][1].format(" YYYY");

	            if (this.showDropdowns) {
	                var currentMonth = calendar[1][1].month();
	                var currentYear = calendar[1][1].year();
	                var maxYear = (maxDate && maxDate.year()) || (currentYear + 5);
	                var minYear = (minDate && minDate.year()) || (currentYear - 50);
	                var inMinYear = currentYear == minYear;
	                var inMaxYear = currentYear == maxYear;

	                var monthHtml = '<select class="monthselect">';
	                for (var m = 0; m < 12; m++) {
	                    if ((!inMinYear || m >= minDate.month()) && (!inMaxYear || m <= maxDate.month())) {
	                        monthHtml += "<option value='" + m + "'" +
	                            (m === currentMonth ? " selected='selected'" : "") +
	                            ">" + this.locale.monthNames[m] + "</option>";
	                    } else {
	                        monthHtml += "<option value='" + m + "'" +
	                            (m === currentMonth ? " selected='selected'" : "") +
	                            " disabled='disabled'>" + this.locale.monthNames[m] + "</option>";
	                    }
	                }
	                monthHtml += "</select>";

	                var yearHtml = '<select class="yearselect">';
	                for (var y = minYear; y <= maxYear; y++) {
	                    yearHtml += '<option value="' + y + '"' +
	                        (y === currentYear ? ' selected="selected"' : '') +
	                        '>' + y + '</option>';
	                }
	                yearHtml += '</select>';

	                dateHtml = monthHtml + yearHtml;
	            }

	            html += '<th colspan="5" class="month">' + dateHtml + '</th>';
	            if ((!maxDate || maxDate.isAfter(calendar.lastDay)) && (!this.linkedCalendars || side == 'right' || this.singleDatePicker)) {
	                html += '<th class="next available"><i class="fa fa-chevron-right glyphicon glyphicon-chevron-right"></i></th>';
	            } else {
	                html += '<th></th>';
	            }

	            html += '</tr>';
	            html += '<tr>';

	            // add week number label
	            if (this.showWeekNumbers)
	                html += '<th class="week">' + this.locale.weekLabel + '</th>';

	            $.each(this.locale.daysOfWeek, function(index, dayOfWeek) {
	                html += '<th>' + dayOfWeek + '</th>';
	            });

	            html += '</tr>';
	            html += '</thead>';
	            html += '<tbody>';

	            //adjust maxDate to reflect the dateLimit setting in order to
	            //grey out end dates beyond the dateLimit
	            if (this.endDate == null && this.dateLimit) {
	                var maxLimit = this.startDate.clone().add(this.dateLimit).endOf('day');
	                if (!maxDate || maxLimit.isBefore(maxDate)) {
	                    maxDate = maxLimit;
	                }
	            }

	            for (var row = 0; row < 6; row++) {
	                html += '<tr>';

	                // add week number
	                if (this.showWeekNumbers)
	                    html += '<td class="week">' + calendar[row][0].week() + '</td>';

	                for (var col = 0; col < 7; col++) {

	                    var classes = [];

	                    //highlight today's date
	                    if (calendar[row][col].isSame(new Date(), "day"))
	                        classes.push('today');

	                    //highlight weekends
	                    if (calendar[row][col].isoWeekday() > 5)
	                        classes.push('weekend');

	                    //grey out the dates in other months displayed at beginning and end of this calendar
	                    if (calendar[row][col].month() != calendar[1][1].month())
	                        classes.push('off');

	                    //don't allow selection of dates before the minimum date
	                    if (this.minDate && calendar[row][col].isBefore(this.minDate, 'day'))
	                        classes.push('off', 'disabled');

	                    //don't allow selection of dates after the maximum date
	                    if (maxDate && calendar[row][col].isAfter(maxDate, 'day'))
	                        classes.push('off', 'disabled');

	                    //don't allow selection of date if a custom function decides it's invalid
	                    if (this.isInvalidDate(calendar[row][col]))
	                        classes.push('off', 'disabled');

	                    //highlight the currently selected start date
	                    if (calendar[row][col].format('YYYY-MM-DD') == this.startDate.format('YYYY-MM-DD'))
	                        classes.push('active', 'start-date');

	                    //highlight the currently selected end date
	                    if (this.endDate != null && calendar[row][col].format('YYYY-MM-DD') == this.endDate.format('YYYY-MM-DD'))
	                        classes.push('active', 'end-date');

	                    //highlight dates in-between the selected dates
	                    if (this.endDate != null && calendar[row][col] > this.startDate && calendar[row][col] < this.endDate)
	                        classes.push('in-range');

	                    var cname = '', disabled = false;
	                    for (var i = 0; i < classes.length; i++) {
	                        cname += classes[i] + ' ';
	                        if (classes[i] == 'disabled')
	                            disabled = true;
	                    }
	                    if (!disabled)
	                        cname += 'available';

	                    html += '<td class="' + cname.replace(/^\s+|\s+$/g, '') + '" data-title="' + 'r' + row + 'c' + col + '">' + calendar[row][col].date() + '</td>';

	                }
	                html += '</tr>';
	            }

	            html += '</tbody>';
	            html += '</table>';

	            this.container.find('.calendar.' + side + ' .calendar-table').html(html);

	        },

	        renderTimePicker: function(side) {

	            var html, selected, minDate, maxDate = this.maxDate;

	            if (this.dateLimit && (!this.maxDate || this.startDate.clone().add(this.dateLimit).isAfter(this.maxDate)))
	                maxDate = this.startDate.clone().add(this.dateLimit);

	            if (side == 'left') {
	                selected = this.startDate.clone();
	                minDate = this.minDate;
	            } else if (side == 'right') {
	                selected = this.endDate ? this.endDate.clone() : this.startDate.clone();
	                minDate = this.startDate;
	            }

	            //
	            // hours
	            //

	            html = '<select class="hourselect">';

	            var start = this.timePicker24Hour ? 0 : 1;
	            var end = this.timePicker24Hour ? 23 : 12;

	            //自定义部分修改
	            if(this.rangesHour && this.rangesHour.length==2){
	                start=this.rangesHour[0];
	                end=this.rangesHour[1];
	            }
	            for (var i = start; i <= end; i++) {
	                var i_in_24 = i;
	                if (!this.timePicker24Hour)
	                    i_in_24 = selected.hour() >= 12 ? (i == 12 ? 12 : i + 12) : (i == 12 ? 0 : i);

	                var time = selected.clone().hour(i_in_24);
	                var disabled = false;
	                if (minDate && time.minute(59).isBefore(minDate))
	                    disabled = true;
	                if (maxDate && time.minute(0).isAfter(maxDate))
	                    disabled = true;


	                if (i_in_24 == selected.hour() && !disabled) {
	                    html += '<option value="' + i + '" selected="selected">' + i + '</option>';
	                } else if (disabled) {
	                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + i + '</option>';
	                } else {
	                    html += '<option value="' + i + '">' + i + '</option>';
	                }
	            }

	            html += '</select> ';

	            //
	            // minutes
	            //

	            html += ': <select class="minuteselect">';

	            for (var i = 0; i < 60; i += this.timePickerIncrement) {
	                var padded = i < 10 ? '0' + i : i;
	                var time = selected.clone().minute(i);

	                var disabled = false;
	                if (minDate && time.second(59).isBefore(minDate))
	                    disabled = true;
	                if (maxDate && time.second(0).isAfter(maxDate))
	                    disabled = true;
	                console.log("time.minute(59):",time.minute(59))
	                if (selected.minute() == i && !disabled) {
	                    html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
	                } else if (disabled) {
	                    html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
	                } else {
	                    html += '<option value="' + i + '">' + padded + '</option>';
	                }
	            }

	            html += '</select> ';

	            //
	            // seconds
	            //

	            if (this.timePickerSeconds) {
	                html += ': <select class="secondselect">';

	                for (var i = 0; i < 60; i++) {
	                    var padded = i < 10 ? '0' + i : i;
	                    var time = selected.clone().second(i);

	                    var disabled = false;
	                    if (minDate && time.isBefore(minDate))
	                        disabled = true;
	                    if (maxDate && time.isAfter(maxDate))
	                        disabled = true;

	                    if (selected.second() == i && !disabled) {
	                        html += '<option value="' + i + '" selected="selected">' + padded + '</option>';
	                    } else if (disabled) {
	                        html += '<option value="' + i + '" disabled="disabled" class="disabled">' + padded + '</option>';
	                    } else {
	                        html += '<option value="' + i + '">' + padded + '</option>';
	                    }
	                }

	                html += '</select> ';
	            }

	            //
	            // AM/PM
	            //

	            if (!this.timePicker24Hour) {
	                html += '<select class="ampmselect">';

	                var am_html = '';
	                var pm_html = '';

	                if (minDate && selected.clone().hour(12).minute(0).second(0).isBefore(minDate))
	                    am_html = ' disabled="disabled" class="disabled"';

	                if (maxDate && selected.clone().hour(0).minute(0).second(0).isAfter(maxDate))
	                    pm_html = ' disabled="disabled" class="disabled"';

	                if (selected.hour() >= 12) {
	                    html += '<option value="AM"' + am_html + '>AM</option><option value="PM" selected="selected"' + pm_html + '>PM</option>';
	                } else {
	                    html += '<option value="AM" selected="selected"' + am_html + '>AM</option><option value="PM"' + pm_html + '>PM</option>';
	                }

	                html += '</select>';
	            }

	            this.container.find('.calendar.' + side + ' .calendar-time div').html(html);

	        },

	        updateFormInputs: function() {

	            //ignore mouse movements while an above-calendar text input has focus
	            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
	                return;

	            this.container.find('input[name=daterangepicker_start]').val(this.startDate.format(this.locale.format));
	            if (this.endDate)
	                this.container.find('input[name=daterangepicker_end]').val(this.endDate.format(this.locale.format));

	            if (this.singleDatePicker || (this.endDate && (this.startDate.isBefore(this.endDate) || this.startDate.isSame(this.endDate)))) {
	                this.container.find('button.applyBtn').removeAttr('disabled');
	            } else {
	                this.container.find('button.applyBtn').attr('disabled', 'disabled');
	            }

	        },

	        move: function() {
	            var parentOffset = { top: 0, left: 0 },
	                containerTop;
	            var parentRightEdge = $(window).width();
	            if (!this.parentEl.is('body')) {
	                parentOffset = {
	                    top: this.parentEl.offset().top - this.parentEl.scrollTop(),
	                    left: this.parentEl.offset().left - this.parentEl.scrollLeft()
	                };
	                parentRightEdge = this.parentEl[0].clientWidth + this.parentEl.offset().left;
	            }

	            if (this.drops == 'up')
	                containerTop = this.element.offset().top - this.container.outerHeight() - parentOffset.top;
	            else
	                containerTop = this.element.offset().top + this.element.outerHeight() - parentOffset.top;
	            this.container[this.drops == 'up' ? 'addClass' : 'removeClass']('dropup');

	            if (this.opens == 'left') {
	                this.container.css({
	                    top: containerTop,
	                    right: parentRightEdge - this.element.offset().left - this.element.outerWidth(),
	                    left: 'auto'
	                });
	                if (this.container.offset().left < 0) {
	                    this.container.css({
	                        right: 'auto',
	                        left: 9
	                    });
	                }
	            } else if (this.opens == 'center') {
	                this.container.css({
	                    top: containerTop,
	                    left: this.element.offset().left - parentOffset.left + this.element.outerWidth() / 2
	                    - this.container.outerWidth() / 2,
	                    right: 'auto'
	                });
	                if (this.container.offset().left < 0) {
	                    this.container.css({
	                        right: 'auto',
	                        left: 9
	                    });
	                }
	            } else {
	                this.container.css({
	                    top: containerTop,
	                    left: this.element.offset().left - parentOffset.left,
	                    right: 'auto'
	                });
	                if (this.container.offset().left + this.container.outerWidth() > $(window).width()) {
	                    this.container.css({
	                        left: 'auto',
	                        right: 0
	                    });
	                }
	            }
	        },

	        show: function(e) {
	            if (this.isShowing) return;

	            // Create a click proxy that is private to this instance of datepicker, for unbinding
	            this._outsideClickProxy = $.proxy(function(e) { this.outsideClick(e); }, this);

	            // Bind global datepicker mousedown for hiding and
	            $(document)
	                .on('mousedown.daterangepicker', this._outsideClickProxy)
	                // also support mobile devices
	                .on('touchend.daterangepicker', this._outsideClickProxy)
	                // also explicitly play nice with Bootstrap dropdowns, which stopPropagation when clicking them
	                .on('click.daterangepicker', '[data-toggle=dropdown]', this._outsideClickProxy)
	                // and also close when focus changes to outside the picker (eg. tabbing between controls)
	                .on('focusin.daterangepicker', this._outsideClickProxy);

	            // Reposition the picker if the window is resized while it's open
	            $(window).on('resize.daterangepicker', $.proxy(function(e) { this.move(e); }, this));

	            this.oldStartDate = this.startDate.clone();
	            this.oldEndDate = this.endDate.clone();

	            this.updateView();
	            this.container.show();
	            this.move();
	            this.element.trigger('show.daterangepicker', this);
	            this.isShowing = true;
	        },

	        hide: function(e) {
	            if (!this.isShowing) return;

	            //incomplete date selection, revert to last values
	            if (!this.endDate) {
	                this.startDate = this.oldStartDate.clone();
	                this.endDate = this.oldEndDate.clone();
	            }

	            //if a new date range was selected, invoke the user callback function
	            if (!this.startDate.isSame(this.oldStartDate) || !this.endDate.isSame(this.oldEndDate))
	                this.callback(this.startDate, this.endDate, this.chosenLabel);

	            //if picker is attached to a text input, update it
	            this.updateElement();

	            $(document).off('.daterangepicker');
	            $(window).off('.daterangepicker');
	            this.container.hide();
	            this.element.trigger('hide.daterangepicker', this);
	            this.isShowing = false;
	        },

	        toggle: function(e) {
	            if (this.isShowing) {
	                this.hide();
	            } else {
	                this.show();
	            }
	        },

	        outsideClick: function(e) {
	            var target = $(e.target);
	            // if the page is clicked anywhere except within the daterangerpicker/button
	            // itself then call this.hide()
	            if (
	                // ie modal dialog fix
	            e.type == "focusin" ||
	            target.closest(this.element).length ||
	            target.closest(this.container).length ||
	            target.closest('.calendar-table').length
	            ) return;
	            this.hide();
	        },

	        showCalendars: function() {
	            this.container.addClass('show-calendar');
	            this.move();
	            this.element.trigger('showCalendar.daterangepicker', this);
	        },

	        hideCalendars: function() {
	            this.container.removeClass('show-calendar');
	            this.element.trigger('hideCalendar.daterangepicker', this);
	        },

	        hoverRange: function(e) {

	            //ignore mouse movements while an above-calendar text input has focus
	            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
	                return;

	            var label = e.target.innerHTML;
	            if (label == this.locale.customRangeLabel) {
	                this.updateView();
	            } else {
	                var dates = this.ranges[label];
	                this.container.find('input[name=daterangepicker_start]').val(dates[0].format(this.locale.format));
	                this.container.find('input[name=daterangepicker_end]').val(dates[1].format(this.locale.format));
	            }

	        },

	        clickRange: function(e) {
	            var label = e.target.innerHTML;
	            this.chosenLabel = label;
	            if (label == this.locale.customRangeLabel) {
	                this.showCalendars();
	            } else {
	                var dates = this.ranges[label];
	                this.startDate = dates[0];
	                this.endDate = dates[1];

	                if (!this.timePicker) {
	                    this.startDate.startOf('day');
	                    this.endDate.endOf('day');
	                }

	                this.hideCalendars();
	                this.clickApply();
	            }
	        },

	        clickPrev: function(e) {
	            var cal = $(e.target).parents('.calendar');
	            if (cal.hasClass('left')) {
	                this.leftCalendar.month.subtract(1, 'month');
	                if (this.linkedCalendars)
	                    this.rightCalendar.month.subtract(1, 'month');
	            } else {
	                this.rightCalendar.month.subtract(1, 'month');
	            }
	            this.updateCalendars();
	        },

	        clickNext: function(e) {
	            var cal = $(e.target).parents('.calendar');
	            if (cal.hasClass('left')) {
	                this.leftCalendar.month.add(1, 'month');
	            } else {
	                this.rightCalendar.month.add(1, 'month');
	                if (this.linkedCalendars)
	                    this.leftCalendar.month.add(1, 'month');
	            }
	            this.updateCalendars();
	        },

	        hoverDate: function(e) {

	            //ignore mouse movements while an above-calendar text input has focus
	            if (this.container.find('input[name=daterangepicker_start]').is(":focus") || this.container.find('input[name=daterangepicker_end]').is(":focus"))
	                return;

	            //ignore dates that can't be selected
	            if (!$(e.target).hasClass('available')) return;

	            //have the text inputs above calendars reflect the date being hovered over
	            var title = $(e.target).attr('data-title');
	            var row = title.substr(1, 1);
	            var col = title.substr(3, 1);
	            var cal = $(e.target).parents('.calendar');
	            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

	            if (this.endDate) {
	                this.container.find('input[name=daterangepicker_start]').val(date.format(this.locale.format));
	            } else {
	                this.container.find('input[name=daterangepicker_end]').val(date.format(this.locale.format));
	            }
	            //highlight the dates between the start date and the date being hovered as a potential end date
	            var leftCalendar = this.leftCalendar;
	            var rightCalendar = this.rightCalendar;
	            var startDate = this.startDate;
	            if (!this.endDate) {
	                this.container.find('.calendar td').each(function(index, el) {

	                    //skip week numbers, only look at dates
	                    if ($(el).hasClass('week')) return;

	                    var title = $(el).attr('data-title');
	                    var row = title.substr(1, 1);
	                    var col = title.substr(3, 1);
	                    var cal = $(el).parents('.calendar');
	                    var dt = cal.hasClass('left') ? leftCalendar.calendar[row][col] : rightCalendar.calendar[row][col];

	                    if (dt.isAfter(startDate) && dt.isBefore(date)) {
	                        $(el).addClass('in-range');
	                    } else {
	                        $(el).removeClass('in-range');
	                    }

	                });
	            }

	        },

	        clickDate: function(e) {
	            if (!$(e.target).hasClass('available')) return;

	            var title = $(e.target).attr('data-title');
	            var row = title.substr(1, 1);
	            var col = title.substr(3, 1);
	            var cal = $(e.target).parents('.calendar');
	            var date = cal.hasClass('left') ? this.leftCalendar.calendar[row][col] : this.rightCalendar.calendar[row][col];

	            //
	            // this function needs to do a few things:
	            // * alternate between selecting a start and end date for the range,
	            // * if the time picker is enabled, apply the hour/minute/second from the select boxes to the clicked date
	            // * if autoapply is enabled, and an end date was chosen, apply the selection
	            // * if single date picker mode, and time picker isn't enabled, apply the selection immediately
	            //

	            // console.log('e',e)
	            if (this.endDate || date.isBefore(this.startDate)) {
	                if (this.timePicker) {
	                    var hour = parseInt(this.container.find('.left .hourselect').val(), 10);
	                    if (!this.timePicker24Hour) {
	                        var ampm = cal.find('.ampmselect').val();
	                        if (ampm === 'PM' && hour < 12)
	                            hour += 12;
	                        if (ampm === 'AM' && hour === 12)
	                            hour = 0;
	                    }
	                    var minute = parseInt(this.container.find('.left .minuteselect').val(), 10);
	                    var second = this.timePickerSeconds ? parseInt(this.container.find('.left .secondselect').val(), 10) : 0;
	                    date = date.clone().hour(hour).minute(minute).second(second);
	                }
	                this.endDate = null;
	                this.setStartDate(date.clone());
	            } else {
	                if (this.timePicker) {
	                    var hour = parseInt(this.container.find('.right .hourselect').val(), 10);
	                    if (!this.timePicker24Hour) {
	                        var ampm = this.container.find('.right .ampmselect').val();
	                        if (ampm === 'PM' && hour < 12)
	                            hour += 12;
	                        if (ampm === 'AM' && hour === 12)
	                            hour = 0;
	                    }
	                    var minute = parseInt(this.container.find('.right .minuteselect').val(), 10);
	                    var second = this.timePickerSeconds ? parseInt(this.container.find('.right .secondselect').val(), 10) : 0;
	                    date = date.clone().hour(hour).minute(minute).second(second);
	                }
	                this.setEndDate(date.clone());
	                if (this.autoApply)
	                    this.clickApply();
	            }

	            if (this.singleDatePicker) {
	                this.setEndDate(this.startDate);
	                if (!this.timePicker)
	                    this.clickApply();
	            }

	            this.updateView();

	        },

	        clickApply: function(e) {
	            this.hide();
	            this.element.trigger('apply.daterangepicker', this);
	        },

	        clickCancel: function(e) {
	            this.startDate = this.oldStartDate;
	            this.endDate = this.oldEndDate;
	            this.hide();
	            this.element.trigger('cancel.daterangepicker', this);
	        },

	        monthOrYearChanged: function(e) {
	            var isLeft = $(e.target).closest('.calendar').hasClass('left'),
	                leftOrRight = isLeft ? 'left' : 'right',
	                cal = this.container.find('.calendar.'+leftOrRight);

	            // Month must be Number for new moment versions
	            var month = parseInt(cal.find('.monthselect').val(), 10);
	            var year = cal.find('.yearselect').val();

	            if (!isLeft) {
	                if (year < this.startDate.year() || (year == this.startDate.year() && month < this.startDate.month())) {
	                    month = this.startDate.month();
	                    year = this.startDate.year();
	                }
	            }

	            if (this.minDate) {
	                if (year < this.minDate.year() || (year == this.minDate.year() && month < this.minDate.month())) {
	                    month = this.minDate.month();
	                    year = this.minDate.year();
	                }
	            }

	            if (this.maxDate) {
	                if (year > this.maxDate.year() || (year == this.maxDate.year() && month > this.maxDate.month())) {
	                    month = this.maxDate.month();
	                    year = this.maxDate.year();
	                }
	            }

	            if (isLeft) {
	                this.leftCalendar.month.month(month).year(year);
	                if (this.linkedCalendars)
	                    this.rightCalendar.month = this.leftCalendar.month.clone().add(1, 'month');
	            } else {
	                this.rightCalendar.month.month(month).year(year);
	                if (this.linkedCalendars)
	                    this.leftCalendar.month = this.rightCalendar.month.clone().subtract(1, 'month');
	            }
	            this.updateCalendars();
	        },

	        timeChanged: function(e) {

	            var cal = $(e.target).closest('.calendar'),
	                isLeft = cal.hasClass('left');

	            var hour = parseInt(cal.find('.hourselect').val(), 10);
	            var minute = parseInt(cal.find('.minuteselect').val(), 10);
	            var second = this.timePickerSeconds ? parseInt(cal.find('.secondselect').val(), 10) : 0;

	            if (!this.timePicker24Hour) {
	                var ampm = cal.find('.ampmselect').val();
	                if (ampm === 'PM' && hour < 12)
	                    hour += 12;
	                if (ampm === 'AM' && hour === 12)
	                    hour = 0;
	            }

	            if (isLeft) {
	                var start = this.startDate.clone();
	                start.hour(hour);
	                start.minute(minute);
	                start.second(second);
	                this.setStartDate(start);
	                if (this.singleDatePicker) {
	                    this.endDate = this.startDate.clone();
	                } else if (this.endDate && this.endDate.format('YYYY-MM-DD') == start.format('YYYY-MM-DD') && this.endDate.isBefore(start)) {
	                    this.setEndDate(start.clone());
	                }
	            } else if (this.endDate) {
	                var end = this.endDate.clone();
	                end.hour(hour);
	                end.minute(minute);
	                end.second(second);
	                this.setEndDate(end);
	            }

	            //update the calendars so all clickable dates reflect the new time component
	            this.updateCalendars();

	            //update the form inputs above the calendars with the new time
	            this.updateFormInputs();

	            //re-render the time pickers because changing one selection can affect what's enabled in another
	            this.renderTimePicker('left');
	            this.renderTimePicker('right');

	        },

	        formInputsChanged: function(e) {
	            var isRight = $(e.target).closest('.calendar').hasClass('right');
	            var start = moment(this.container.find('input[name="daterangepicker_start"]').val(), this.locale.format);
	            var end = moment(this.container.find('input[name="daterangepicker_end"]').val(), this.locale.format);

	            if (start.isValid() && end.isValid()) {

	                if (isRight && end.isBefore(start))
	                    start = end.clone();

	                this.setStartDate(start);
	                this.setEndDate(end);

	                if (isRight) {
	                    this.container.find('input[name="daterangepicker_start"]').val(this.startDate.format(this.locale.format));
	                } else {
	                    this.container.find('input[name="daterangepicker_end"]').val(this.endDate.format(this.locale.format));
	                }

	            }

	            this.updateCalendars();
	            if (this.timePicker) {
	                this.renderTimePicker('left');
	                this.renderTimePicker('right');
	            }
	        },

	        elementChanged: function() {
	            if (!this.element.is('input')) return;
	            if (!this.element.val().length) return;
	            if (this.element.val().length < this.locale.format.length) return;

	            var dateString = this.element.val().split(this.locale.separator),
	                start = null,
	                end = null;

	            if (dateString.length === 2) {
	                start = moment(dateString[0], this.locale.format);
	                end = moment(dateString[1], this.locale.format);
	            }

	            if (this.singleDatePicker || start === null || end === null) {
	                start = moment(this.element.val(), this.locale.format);
	                end = start;
	            }

	            if (!start.isValid() || !end.isValid()) return;

	            this.setStartDate(start);
	            this.setEndDate(end);
	            this.updateView();
	        },

	        keydown: function(e) {
	            //hide on tab or enter
	            if ((e.keyCode === 9) || (e.keyCode === 13)) {
	                this.hide();
	            }
	        },

	        updateElement: function() {
	            if (this.element.is('input') && !this.singleDatePicker && this.autoUpdateInput) {
	                this.element.val(this.startDate.format(this.locale.format) + this.locale.separator + this.endDate.format(this.locale.format));
	                this.element.trigger('change');
	            } else if (this.element.is('input') && this.autoUpdateInput) {
	                this.element.val(this.startDate.format(this.locale.format));
	                this.element.trigger('change');
	            }
	        },

	        remove: function() {
	            this.container.remove();
	            this.element.off('.daterangepicker');
	            this.element.removeData();
	        }

	    };

	    $.fn.daterangepicker = function(options, callback) {
	        this.each(function() {
	            var el = $(this);
	            if (el.data('daterangepicker'))
	                el.data('daterangepicker').remove();
	            el.data('daterangepicker', new DateRangePicker(el, options, callback));
	        });
	        return this;
	    };

	}));


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * Swiper 3.3.1
	 * Most modern mobile touch slider and framework with hardware accelerated transitions
	 * 
	 * http://www.idangero.us/swiper/
	 * 
	 * Copyright 2016, Vladimir Kharlampidi
	 * The iDangero.us
	 * http://www.idangero.us/
	 * 
	 * Licensed under MIT
	 * 
	 * Released on: February 7, 2016
	 */
	(function (root, factory) {
		'use strict';

		if (true) {
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		}if (true) {
	        // 如果define已被定义，模块化代码
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = function(){
	            return factory(jQuery);
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    }else if (typeof exports === 'object') {
			// Node. Does not work with strict CommonJS, but
			// only CommonJS-like environments that support module.exports,
			// like Node.
			module.exports = factory(require('jquery'));
		} else {
			// Browser globals (root is window)
			root.Swiper = factory(root.jQuery);
		}
	}(this, function ($) {
		'use strict';

	    /*===========================
	    Swiper
	    ===========================*/
	    var Swiper = function (container, params) {
	        if (!(this instanceof Swiper)) return new Swiper(container, params);

	        var defaults = {
	            direction: 'horizontal',
	            touchEventsTarget: 'container',
	            initialSlide: 0,
	            speed: 300,
	            // autoplay
	            autoplay: false,
	            autoplayDisableOnInteraction: true,
	            autoplayStopOnLast: false,
	            // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
	            iOSEdgeSwipeDetection: false,
	            iOSEdgeSwipeThreshold: 20,
	            // Free mode
	            freeMode: false,
	            freeModeMomentum: true,
	            freeModeMomentumRatio: 1,
	            freeModeMomentumBounce: true,
	            freeModeMomentumBounceRatio: 1,
	            freeModeSticky: false,
	            freeModeMinimumVelocity: 0.02,
	            // Autoheight
	            autoHeight: false,
	            // Set wrapper width
	            setWrapperSize: false,
	            // Virtual Translate
	            virtualTranslate: false,
	            // Effects
	            effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
	            coverflow: {
	                rotate: 50,
	                stretch: 0,
	                depth: 100,
	                modifier: 1,
	                slideShadows : true
	            },
	            flip: {
	                slideShadows : true,
	                limitRotation: true
	            },
	            cube: {
	                slideShadows: true,
	                shadow: true,
	                shadowOffset: 20,
	                shadowScale: 0.94
	            },
	            fade: {
	                crossFade: false
	            },
	            // Parallax
	            parallax: false,
	            // Scrollbar
	            scrollbar: null,
	            scrollbarHide: true,
	            scrollbarDraggable: false,
	            scrollbarSnapOnRelease: false,
	            // Keyboard Mousewheel
	            keyboardControl: false,
	            mousewheelControl: false,
	            mousewheelReleaseOnEdges: false,
	            mousewheelInvert: false,
	            mousewheelForceToAxis: false,
	            mousewheelSensitivity: 1,
	            // Hash Navigation
	            hashnav: false,
	            // Breakpoints
	            breakpoints: undefined,
	            // Slides grid
	            spaceBetween: 0,
	            slidesPerView: 1,
	            slidesPerColumn: 1,
	            slidesPerColumnFill: 'column',
	            slidesPerGroup: 1,
	            centeredSlides: false,
	            slidesOffsetBefore: 0, // in px
	            slidesOffsetAfter: 0, // in px
	            // Round length
	            roundLengths: false,
	            // Touches
	            touchRatio: 1,
	            touchAngle: 45,
	            simulateTouch: true,
	            shortSwipes: true,
	            longSwipes: true,
	            longSwipesRatio: 0.5,
	            longSwipesMs: 300,
	            followFinger: true,
	            onlyExternal: false,
	            threshold: 0,
	            touchMoveStopPropagation: true,
	            // Unique Navigation Elements
	            uniqueNavElements: true,
	            // Pagination
	            pagination: null,
	            paginationElement: 'span',
	            paginationClickable: false,
	            paginationHide: false,
	            paginationBulletRender: null,
	            paginationProgressRender: null,
	            paginationFractionRender: null,
	            paginationCustomRender: null,
	            paginationType: 'bullets', // 'bullets' or 'progress' or 'fraction' or 'custom'
	            // Resistance
	            resistance: true,
	            resistanceRatio: 0.85,
	            // Next/prev buttons
	            nextButton: null,
	            prevButton: null,
	            // Progress
	            watchSlidesProgress: false,
	            watchSlidesVisibility: false,
	            // Cursor
	            grabCursor: false,
	            // Clicks
	            preventClicks: true,
	            preventClicksPropagation: true,
	            slideToClickedSlide: false,
	            // Lazy Loading
	            lazyLoading: false,
	            lazyLoadingInPrevNext: false,
	            lazyLoadingInPrevNextAmount: 1,
	            lazyLoadingOnTransitionStart: false,
	            // Images
	            preloadImages: true,
	            updateOnImagesReady: true,
	            // loop
	            loop: false,
	            loopAdditionalSlides: 0,
	            loopedSlides: null,
	            // Control
	            control: undefined,
	            controlInverse: false,
	            controlBy: 'slide', //or 'container'
	            // Swiping/no swiping
	            allowSwipeToPrev: true,
	            allowSwipeToNext: true,
	            swipeHandler: null, //'.swipe-handler',
	            noSwiping: true,
	            noSwipingClass: 'swiper-no-swiping',
	            // NS
	            slideClass: 'swiper-slide',
	            slideActiveClass: 'swiper-slide-active',
	            slideVisibleClass: 'swiper-slide-visible',
	            slideDuplicateClass: 'swiper-slide-duplicate',
	            slideNextClass: 'swiper-slide-next',
	            slidePrevClass: 'swiper-slide-prev',
	            wrapperClass: 'swiper-wrapper',
	            bulletClass: 'swiper-pagination-bullet',
	            bulletActiveClass: 'swiper-pagination-bullet-active',
	            buttonDisabledClass: 'swiper-button-disabled',
	            paginationCurrentClass: 'swiper-pagination-current',
	            paginationTotalClass: 'swiper-pagination-total',
	            paginationHiddenClass: 'swiper-pagination-hidden',
	            paginationProgressbarClass: 'swiper-pagination-progressbar',
	            // Observer
	            observer: false,
	            observeParents: false,
	            // Accessibility
	            a11y: false,
	            prevSlideMessage: 'Previous slide',
	            nextSlideMessage: 'Next slide',
	            firstSlideMessage: 'This is the first slide',
	            lastSlideMessage: 'This is the last slide',
	            paginationBulletMessage: 'Go to slide {{index}}',
	            // Callbacks
	            runCallbacksOnInit: true
	            /*
	            Callbacks:
	            onInit: function (swiper)
	            onDestroy: function (swiper)
	            onClick: function (swiper, e)
	            onTap: function (swiper, e)
	            onDoubleTap: function (swiper, e)
	            onSliderMove: function (swiper, e)
	            onSlideChangeStart: function (swiper)
	            onSlideChangeEnd: function (swiper)
	            onTransitionStart: function (swiper)
	            onTransitionEnd: function (swiper)
	            onImagesReady: function (swiper)
	            onProgress: function (swiper, progress)
	            onTouchStart: function (swiper, e)
	            onTouchMove: function (swiper, e)
	            onTouchMoveOpposite: function (swiper, e)
	            onTouchEnd: function (swiper, e)
	            onReachBeginning: function (swiper)
	            onReachEnd: function (swiper)
	            onSetTransition: function (swiper, duration)
	            onSetTranslate: function (swiper, translate)
	            onAutoplayStart: function (swiper)
	            onAutoplayStop: function (swiper),
	            onLazyImageLoad: function (swiper, slide, image)
	            onLazyImageReady: function (swiper, slide, image)
	            */
	        
	        };
	        var initialVirtualTranslate = params && params.virtualTranslate;
	        
	        params = params || {};
	        var originalParams = {};
	        for (var param in params) {
	            if (typeof params[param] === 'object' && params[param] !== null && !(params[param].nodeType || params[param] === window || params[param] === document || (typeof Dom7 !== 'undefined' && params[param] instanceof Dom7) || (typeof jQuery !== 'undefined' && params[param] instanceof jQuery))) {
	                originalParams[param] = {};
	                for (var deepParam in params[param]) {
	                    originalParams[param][deepParam] = params[param][deepParam];
	                }
	            }
	            else {
	                originalParams[param] = params[param];
	            }
	        }
	        for (var def in defaults) {
	            if (typeof params[def] === 'undefined') {
	                params[def] = defaults[def];
	            }
	            else if (typeof params[def] === 'object') {
	                for (var deepDef in defaults[def]) {
	                    if (typeof params[def][deepDef] === 'undefined') {
	                        params[def][deepDef] = defaults[def][deepDef];
	                    }
	                }
	            }
	        }
	        
	        // Swiper
	        var s = this;
	        
	        // Params
	        s.params = params;
	        s.originalParams = originalParams;
	        
	        // Classname
	        s.classNames = [];
	        /*=========================
	          Dom Library and plugins
	          ===========================*/
	        if (typeof $ !== 'undefined' && typeof Dom7 !== 'undefined'){
	            $ = Dom7;
	        }
	        if (typeof $ === 'undefined') {
	            if (typeof Dom7 === 'undefined') {
	                $ = window.Dom7 || window.Zepto || window.jQuery;
	            }
	            else {
	                $ = Dom7;
	            }
	            if (!$) return;
	        }
	        // Export it to Swiper instance
	        s.$ = $;
	        
	        /*=========================
	          Breakpoints
	          ===========================*/
	        s.currentBreakpoint = undefined;
	        s.getActiveBreakpoint = function () {
	            //Get breakpoint for window width
	            if (!s.params.breakpoints) return false;
	            var breakpoint = false;
	            var points = [], point;
	            for ( point in s.params.breakpoints ) {
	                if (s.params.breakpoints.hasOwnProperty(point)) {
	                    points.push(point);
	                }
	            }
	            points.sort(function (a, b) {
	                return parseInt(a, 10) > parseInt(b, 10);
	            });
	            for (var i = 0; i < points.length; i++) {
	                point = points[i];
	                if (point >= window.innerWidth && !breakpoint) {
	                    breakpoint = point;
	                }
	            }
	            return breakpoint || 'max';
	        };
	        s.setBreakpoint = function () {
	            //Set breakpoint for window width and update parameters
	            var breakpoint = s.getActiveBreakpoint();
	            if (breakpoint && s.currentBreakpoint !== breakpoint) {
	                var breakPointsParams = breakpoint in s.params.breakpoints ? s.params.breakpoints[breakpoint] : s.originalParams;
	                var needsReLoop = s.params.loop && (breakPointsParams.slidesPerView !== s.params.slidesPerView);
	                for ( var param in breakPointsParams ) {
	                    s.params[param] = breakPointsParams[param];
	                }
	                s.currentBreakpoint = breakpoint;
	                if(needsReLoop && s.destroyLoop) {
	                    s.reLoop(true);
	                }
	            }
	        };
	        // Set breakpoint on load
	        if (s.params.breakpoints) {
	            s.setBreakpoint();
	        }
	        
	        /*=========================
	          Preparation - Define Container, Wrapper and Pagination
	          ===========================*/
	        s.container = $(container);
	        if (s.container.length === 0) return;
	        if (s.container.length > 1) {
	            var swipers = [];
	            s.container.each(function () {
	                var container = this;
	                swipers.push(new Swiper(this, params));
	            });
	            return swipers;
	        }
	        
	        // Save instance in container HTML Element and in data
	        s.container[0].swiper = s;
	        s.container.data('swiper', s);
	        
	        s.classNames.push('swiper-container-' + s.params.direction);
	        
	        if (s.params.freeMode) {
	            s.classNames.push('swiper-container-free-mode');
	        }
	        if (!s.support.flexbox) {
	            s.classNames.push('swiper-container-no-flexbox');
	            s.params.slidesPerColumn = 1;
	        }
	        if (s.params.autoHeight) {
	            s.classNames.push('swiper-container-autoheight');
	        }
	        // Enable slides progress when required
	        if (s.params.parallax || s.params.watchSlidesVisibility) {
	            s.params.watchSlidesProgress = true;
	        }
	        // Coverflow / 3D
	        if (['cube', 'coverflow', 'flip'].indexOf(s.params.effect) >= 0) {
	            if (s.support.transforms3d) {
	                s.params.watchSlidesProgress = true;
	                s.classNames.push('swiper-container-3d');
	            }
	            else {
	                s.params.effect = 'slide';
	            }
	        }
	        if (s.params.effect !== 'slide') {
	            s.classNames.push('swiper-container-' + s.params.effect);
	        }
	        if (s.params.effect === 'cube') {
	            s.params.resistanceRatio = 0;
	            s.params.slidesPerView = 1;
	            s.params.slidesPerColumn = 1;
	            s.params.slidesPerGroup = 1;
	            s.params.centeredSlides = false;
	            s.params.spaceBetween = 0;
	            s.params.virtualTranslate = true;
	            s.params.setWrapperSize = false;
	        }
	        if (s.params.effect === 'fade' || s.params.effect === 'flip') {
	            s.params.slidesPerView = 1;
	            s.params.slidesPerColumn = 1;
	            s.params.slidesPerGroup = 1;
	            s.params.watchSlidesProgress = true;
	            s.params.spaceBetween = 0;
	            s.params.setWrapperSize = false;
	            if (typeof initialVirtualTranslate === 'undefined') {
	                s.params.virtualTranslate = true;
	            }
	        }
	        
	        // Grab Cursor
	        if (s.params.grabCursor && s.support.touch) {
	            s.params.grabCursor = false;
	        }
	        
	        // Wrapper
	        s.wrapper = s.container.children('.' + s.params.wrapperClass);
	        
	        // Pagination
	        if (s.params.pagination) {
	            s.paginationContainer = $(s.params.pagination);
	            if (s.params.uniqueNavElements && typeof s.params.pagination === 'string' && s.paginationContainer.length > 1 && s.container.find(s.params.pagination).length === 1) {
	                s.paginationContainer = s.container.find(s.params.pagination);
	            }
	        
	            if (s.params.paginationType === 'bullets' && s.params.paginationClickable) {
	                s.paginationContainer.addClass('swiper-pagination-clickable');
	            }
	            else {
	                s.params.paginationClickable = false;
	            }
	            s.paginationContainer.addClass('swiper-pagination-' + s.params.paginationType);
	        }
	        // Next/Prev Buttons
	        if (s.params.nextButton || s.params.prevButton) {
	            if (s.params.nextButton) {
	                s.nextButton = $(s.params.nextButton);
	                if (s.params.uniqueNavElements && typeof s.params.nextButton === 'string' && s.nextButton.length > 1 && s.container.find(s.params.nextButton).length === 1) {
	                    s.nextButton = s.container.find(s.params.nextButton);
	                }
	            }
	            if (s.params.prevButton) {
	                s.prevButton = $(s.params.prevButton);
	                if (s.params.uniqueNavElements && typeof s.params.prevButton === 'string' && s.prevButton.length > 1 && s.container.find(s.params.prevButton).length === 1) {
	                    s.prevButton = s.container.find(s.params.prevButton);
	                }
	            }
	        }
	        
	        // Is Horizontal
	        s.isHorizontal = function () {
	            return s.params.direction === 'horizontal';
	        };
	        // s.isH = isH;
	        
	        // RTL
	        s.rtl = s.isHorizontal() && (s.container[0].dir.toLowerCase() === 'rtl' || s.container.css('direction') === 'rtl');
	        if (s.rtl) {
	            s.classNames.push('swiper-container-rtl');
	        }
	        
	        // Wrong RTL support
	        if (s.rtl) {
	            s.wrongRTL = s.wrapper.css('display') === '-webkit-box';
	        }
	        
	        // Columns
	        if (s.params.slidesPerColumn > 1) {
	            s.classNames.push('swiper-container-multirow');
	        }
	        
	        // Check for Android
	        if (s.device.android) {
	            s.classNames.push('swiper-container-android');
	        }
	        
	        // Add classes
	        s.container.addClass(s.classNames.join(' '));
	        
	        // Translate
	        s.translate = 0;
	        
	        // Progress
	        s.progress = 0;
	        
	        // Velocity
	        s.velocity = 0;
	        
	        /*=========================
	          Locks, unlocks
	          ===========================*/
	        s.lockSwipeToNext = function () {
	            s.params.allowSwipeToNext = false;
	        };
	        s.lockSwipeToPrev = function () {
	            s.params.allowSwipeToPrev = false;
	        };
	        s.lockSwipes = function () {
	            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = false;
	        };
	        s.unlockSwipeToNext = function () {
	            s.params.allowSwipeToNext = true;
	        };
	        s.unlockSwipeToPrev = function () {
	            s.params.allowSwipeToPrev = true;
	        };
	        s.unlockSwipes = function () {
	            s.params.allowSwipeToNext = s.params.allowSwipeToPrev = true;
	        };
	        
	        /*=========================
	          Round helper
	          ===========================*/
	        function round(a) {
	            return Math.floor(a);
	        }
	        /*=========================
	          Set grab cursor
	          ===========================*/
	        if (s.params.grabCursor) {
	            s.container[0].style.cursor = 'move';
	            s.container[0].style.cursor = '-webkit-grab';
	            s.container[0].style.cursor = '-moz-grab';
	            s.container[0].style.cursor = 'grab';
	        }
	        /*=========================
	          Update on Images Ready
	          ===========================*/
	        s.imagesToLoad = [];
	        s.imagesLoaded = 0;
	        
	        s.loadImage = function (imgElement, src, srcset, checkForComplete, callback) {
	            var image;
	            function onReady () {
	                if (callback) callback();
	            }
	            if (!imgElement.complete || !checkForComplete) {
	                if (src) {
	                    image = new window.Image();
	                    image.onload = onReady;
	                    image.onerror = onReady;
	                    if (srcset) {
	                        image.srcset = srcset;
	                    }
	                    if (src) {
	                        image.src = src;
	                    }
	                } else {
	                    onReady();
	                }
	        
	            } else {//image already loaded...
	                onReady();
	            }
	        };
	        s.preloadImages = function () {
	            s.imagesToLoad = s.container.find('img');
	            function _onReady() {
	                if (typeof s === 'undefined' || s === null) return;
	                if (s.imagesLoaded !== undefined) s.imagesLoaded++;
	                if (s.imagesLoaded === s.imagesToLoad.length) {
	                    if (s.params.updateOnImagesReady) s.update();
	                    s.emit('onImagesReady', s);
	                }
	            }
	            for (var i = 0; i < s.imagesToLoad.length; i++) {
	                s.loadImage(s.imagesToLoad[i], (s.imagesToLoad[i].currentSrc || s.imagesToLoad[i].getAttribute('src')), (s.imagesToLoad[i].srcset || s.imagesToLoad[i].getAttribute('srcset')), true, _onReady);
	            }
	        };
	        
	        /*=========================
	          Autoplay
	          ===========================*/
	        s.autoplayTimeoutId = undefined;
	        s.autoplaying = false;
	        s.autoplayPaused = false;
	        function autoplay() {
	            s.autoplayTimeoutId = setTimeout(function () {
	                if (s.params.loop) {
	                    s.fixLoop();
	                    s._slideNext();
	                    s.emit('onAutoplay', s);
	                }
	                else {
	                    if (!s.isEnd) {
	                        s._slideNext();
	                        s.emit('onAutoplay', s);
	                    }
	                    else {
	                        if (!params.autoplayStopOnLast) {
	                            s._slideTo(0);
	                            s.emit('onAutoplay', s);
	                        }
	                        else {
	                            s.stopAutoplay();
	                        }
	                    }
	                }
	            }, s.params.autoplay);
	        }
	        s.startAutoplay = function () {
	            if (typeof s.autoplayTimeoutId !== 'undefined') return false;
	            if (!s.params.autoplay) return false;
	            if (s.autoplaying) return false;
	            s.autoplaying = true;
	            s.emit('onAutoplayStart', s);
	            autoplay();
	        };
	        s.stopAutoplay = function (internal) {
	            if (!s.autoplayTimeoutId) return;
	            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
	            s.autoplaying = false;
	            s.autoplayTimeoutId = undefined;
	            s.emit('onAutoplayStop', s);
	        };
	        s.pauseAutoplay = function (speed) {
	            if (s.autoplayPaused) return;
	            if (s.autoplayTimeoutId) clearTimeout(s.autoplayTimeoutId);
	            s.autoplayPaused = true;
	            if (speed === 0) {
	                s.autoplayPaused = false;
	                autoplay();
	            }
	            else {
	                s.wrapper.transitionEnd(function () {
	                    if (!s) return;
	                    s.autoplayPaused = false;
	                    if (!s.autoplaying) {
	                        s.stopAutoplay();
	                    }
	                    else {
	                        autoplay();
	                    }
	                });
	            }
	        };
	        /*=========================
	          Min/Max Translate
	          ===========================*/
	        s.minTranslate = function () {
	            return (-s.snapGrid[0]);
	        };
	        s.maxTranslate = function () {
	            return (-s.snapGrid[s.snapGrid.length - 1]);
	        };
	        /*=========================
	          Slider/slides sizes
	          ===========================*/
	        s.updateAutoHeight = function () {
	            // Update Height
	            var slide = s.slides.eq(s.activeIndex)[0];
	            if (typeof slide !== 'undefined') {
	                var newHeight = slide.offsetHeight;
	                if (newHeight) s.wrapper.css('height', newHeight + 'px');
	            }
	        };
	        s.updateContainerSize = function () {
	            var width, height;
	            if (typeof s.params.width !== 'undefined') {
	                width = s.params.width;
	            }
	            else {
	                width = s.container[0].clientWidth;
	            }
	            if (typeof s.params.height !== 'undefined') {
	                height = s.params.height;
	            }
	            else {
	                height = s.container[0].clientHeight;
	            }
	            if (width === 0 && s.isHorizontal() || height === 0 && !s.isHorizontal()) {
	                return;
	            }
	        
	            //Subtract paddings
	            width = width - parseInt(s.container.css('padding-left'), 10) - parseInt(s.container.css('padding-right'), 10);
	            height = height - parseInt(s.container.css('padding-top'), 10) - parseInt(s.container.css('padding-bottom'), 10);
	        
	            // Store values
	            s.width = width;
	            s.height = height;
	            s.size = s.isHorizontal() ? s.width : s.height;
	        };
	        
	        s.updateSlidesSize = function () {
	            s.slides = s.wrapper.children('.' + s.params.slideClass);
	            s.snapGrid = [];
	            s.slidesGrid = [];
	            s.slidesSizesGrid = [];
	        
	            var spaceBetween = s.params.spaceBetween,
	                slidePosition = -s.params.slidesOffsetBefore,
	                i,
	                prevSlideSize = 0,
	                index = 0;
	            if (typeof s.size === 'undefined') return;
	            if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
	                spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * s.size;
	            }
	        
	            s.virtualSize = -spaceBetween;
	            // reset margins
	            if (s.rtl) s.slides.css({marginLeft: '', marginTop: ''});
	            else s.slides.css({marginRight: '', marginBottom: ''});
	        
	            var slidesNumberEvenToRows;
	            if (s.params.slidesPerColumn > 1) {
	                if (Math.floor(s.slides.length / s.params.slidesPerColumn) === s.slides.length / s.params.slidesPerColumn) {
	                    slidesNumberEvenToRows = s.slides.length;
	                }
	                else {
	                    slidesNumberEvenToRows = Math.ceil(s.slides.length / s.params.slidesPerColumn) * s.params.slidesPerColumn;
	                }
	                if (s.params.slidesPerView !== 'auto' && s.params.slidesPerColumnFill === 'row') {
	                    slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, s.params.slidesPerView * s.params.slidesPerColumn);
	                }
	            }
	        
	            // Calc slides
	            var slideSize;
	            var slidesPerColumn = s.params.slidesPerColumn;
	            var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
	            var numFullColumns = slidesPerRow - (s.params.slidesPerColumn * slidesPerRow - s.slides.length);
	            for (i = 0; i < s.slides.length; i++) {
	                slideSize = 0;
	                var slide = s.slides.eq(i);
	                if (s.params.slidesPerColumn > 1) {
	                    // Set slides order
	                    var newSlideOrderIndex;
	                    var column, row;
	                    if (s.params.slidesPerColumnFill === 'column') {
	                        column = Math.floor(i / slidesPerColumn);
	                        row = i - column * slidesPerColumn;
	                        if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn-1)) {
	                            if (++row >= slidesPerColumn) {
	                                row = 0;
	                                column++;
	                            }
	                        }
	                        newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
	                        slide
	                            .css({
	                                '-webkit-box-ordinal-group': newSlideOrderIndex,
	                                '-moz-box-ordinal-group': newSlideOrderIndex,
	                                '-ms-flex-order': newSlideOrderIndex,
	                                '-webkit-order': newSlideOrderIndex,
	                                'order': newSlideOrderIndex
	                            });
	                    }
	                    else {
	                        row = Math.floor(i / slidesPerRow);
	                        column = i - row * slidesPerRow;
	                    }
	                    slide
	                        .css({
	                            'margin-top': (row !== 0 && s.params.spaceBetween) && (s.params.spaceBetween + 'px')
	                        })
	                        .attr('data-swiper-column', column)
	                        .attr('data-swiper-row', row);
	        
	                }
	                if (slide.css('display') === 'none') continue;
	                if (s.params.slidesPerView === 'auto') {
	                    slideSize = s.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
	                    if (s.params.roundLengths) slideSize = round(slideSize);
	                }
	                else {
	                    slideSize = (s.size - (s.params.slidesPerView - 1) * spaceBetween) / s.params.slidesPerView;
	                    if (s.params.roundLengths) slideSize = round(slideSize);
	        
	                    if (s.isHorizontal()) {
	                        s.slides[i].style.width = slideSize + 'px';
	                    }
	                    else {
	                        s.slides[i].style.height = slideSize + 'px';
	                    }
	                }
	                s.slides[i].swiperSlideSize = slideSize;
	                s.slidesSizesGrid.push(slideSize);
	        
	        
	                if (s.params.centeredSlides) {
	                    slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
	                    if (i === 0) slidePosition = slidePosition - s.size / 2 - spaceBetween;
	                    if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
	                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
	                    s.slidesGrid.push(slidePosition);
	                }
	                else {
	                    if ((index) % s.params.slidesPerGroup === 0) s.snapGrid.push(slidePosition);
	                    s.slidesGrid.push(slidePosition);
	                    slidePosition = slidePosition + slideSize + spaceBetween;
	                }
	        
	                s.virtualSize += slideSize + spaceBetween;
	        
	                prevSlideSize = slideSize;
	        
	                index ++;
	            }
	            s.virtualSize = Math.max(s.virtualSize, s.size) + s.params.slidesOffsetAfter;
	            var newSlidesGrid;
	        
	            if (
	                s.rtl && s.wrongRTL && (s.params.effect === 'slide' || s.params.effect === 'coverflow')) {
	                s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
	            }
	            if (!s.support.flexbox || s.params.setWrapperSize) {
	                if (s.isHorizontal()) s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
	                else s.wrapper.css({height: s.virtualSize + s.params.spaceBetween + 'px'});
	            }
	        
	            if (s.params.slidesPerColumn > 1) {
	                s.virtualSize = (slideSize + s.params.spaceBetween) * slidesNumberEvenToRows;
	                s.virtualSize = Math.ceil(s.virtualSize / s.params.slidesPerColumn) - s.params.spaceBetween;
	                s.wrapper.css({width: s.virtualSize + s.params.spaceBetween + 'px'});
	                if (s.params.centeredSlides) {
	                    newSlidesGrid = [];
	                    for (i = 0; i < s.snapGrid.length; i++) {
	                        if (s.snapGrid[i] < s.virtualSize + s.snapGrid[0]) newSlidesGrid.push(s.snapGrid[i]);
	                    }
	                    s.snapGrid = newSlidesGrid;
	                }
	            }
	        
	            // Remove last grid elements depending on width
	            if (!s.params.centeredSlides) {
	                newSlidesGrid = [];
	                for (i = 0; i < s.snapGrid.length; i++) {
	                    if (s.snapGrid[i] <= s.virtualSize - s.size) {
	                        newSlidesGrid.push(s.snapGrid[i]);
	                    }
	                }
	                s.snapGrid = newSlidesGrid;
	                if (Math.floor(s.virtualSize - s.size) - Math.floor(s.snapGrid[s.snapGrid.length - 1]) > 1) {
	                    s.snapGrid.push(s.virtualSize - s.size);
	                }
	            }
	            if (s.snapGrid.length === 0) s.snapGrid = [0];
	        
	            if (s.params.spaceBetween !== 0) {
	                if (s.isHorizontal()) {
	                    if (s.rtl) s.slides.css({marginLeft: spaceBetween + 'px'});
	                    else s.slides.css({marginRight: spaceBetween + 'px'});
	                }
	                else s.slides.css({marginBottom: spaceBetween + 'px'});
	            }
	            if (s.params.watchSlidesProgress) {
	                s.updateSlidesOffset();
	            }
	        };
	        s.updateSlidesOffset = function () {
	            for (var i = 0; i < s.slides.length; i++) {
	                s.slides[i].swiperSlideOffset = s.isHorizontal() ? s.slides[i].offsetLeft : s.slides[i].offsetTop;
	            }
	        };
	        
	        /*=========================
	          Slider/slides progress
	          ===========================*/
	        s.updateSlidesProgress = function (translate) {
	            if (typeof translate === 'undefined') {
	                translate = s.translate || 0;
	            }
	            if (s.slides.length === 0) return;
	            if (typeof s.slides[0].swiperSlideOffset === 'undefined') s.updateSlidesOffset();
	        
	            var offsetCenter = -translate;
	            if (s.rtl) offsetCenter = translate;
	        
	            // Visible Slides
	            s.slides.removeClass(s.params.slideVisibleClass);
	            for (var i = 0; i < s.slides.length; i++) {
	                var slide = s.slides[i];
	                var slideProgress = (offsetCenter - slide.swiperSlideOffset) / (slide.swiperSlideSize + s.params.spaceBetween);
	                if (s.params.watchSlidesVisibility) {
	                    var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
	                    var slideAfter = slideBefore + s.slidesSizesGrid[i];
	                    var isVisible =
	                        (slideBefore >= 0 && slideBefore < s.size) ||
	                        (slideAfter > 0 && slideAfter <= s.size) ||
	                        (slideBefore <= 0 && slideAfter >= s.size);
	                    if (isVisible) {
	                        s.slides.eq(i).addClass(s.params.slideVisibleClass);
	                    }
	                }
	                slide.progress = s.rtl ? -slideProgress : slideProgress;
	            }
	        };
	        s.updateProgress = function (translate) {
	            if (typeof translate === 'undefined') {
	                translate = s.translate || 0;
	            }
	            var translatesDiff = s.maxTranslate() - s.minTranslate();
	            var wasBeginning = s.isBeginning;
	            var wasEnd = s.isEnd;
	            if (translatesDiff === 0) {
	                s.progress = 0;
	                s.isBeginning = s.isEnd = true;
	            }
	            else {
	                s.progress = (translate - s.minTranslate()) / (translatesDiff);
	                s.isBeginning = s.progress <= 0;
	                s.isEnd = s.progress >= 1;
	            }
	            if (s.isBeginning && !wasBeginning) s.emit('onReachBeginning', s);
	            if (s.isEnd && !wasEnd) s.emit('onReachEnd', s);
	        
	            if (s.params.watchSlidesProgress) s.updateSlidesProgress(translate);
	            s.emit('onProgress', s, s.progress);
	        };
	        s.updateActiveIndex = function () {
	            var translate = s.rtl ? s.translate : -s.translate;
	            var newActiveIndex, i, snapIndex;
	            for (i = 0; i < s.slidesGrid.length; i ++) {
	                if (typeof s.slidesGrid[i + 1] !== 'undefined') {
	                    if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1] - (s.slidesGrid[i + 1] - s.slidesGrid[i]) / 2) {
	                        newActiveIndex = i;
	                    }
	                    else if (translate >= s.slidesGrid[i] && translate < s.slidesGrid[i + 1]) {
	                        newActiveIndex = i + 1;
	                    }
	                }
	                else {
	                    if (translate >= s.slidesGrid[i]) {
	                        newActiveIndex = i;
	                    }
	                }
	            }
	            // Normalize slideIndex
	            if (newActiveIndex < 0 || typeof newActiveIndex === 'undefined') newActiveIndex = 0;
	            // for (i = 0; i < s.slidesGrid.length; i++) {
	                // if (- translate >= s.slidesGrid[i]) {
	                    // newActiveIndex = i;
	                // }
	            // }
	            snapIndex = Math.floor(newActiveIndex / s.params.slidesPerGroup);
	            if (snapIndex >= s.snapGrid.length) snapIndex = s.snapGrid.length - 1;
	        
	            if (newActiveIndex === s.activeIndex) {
	                return;
	            }
	            s.snapIndex = snapIndex;
	            s.previousIndex = s.activeIndex;
	            s.activeIndex = newActiveIndex;
	            s.updateClasses();
	        };
	        
	        /*=========================
	          Classes
	          ===========================*/
	        s.updateClasses = function () {
	            s.slides.removeClass(s.params.slideActiveClass + ' ' + s.params.slideNextClass + ' ' + s.params.slidePrevClass);
	            var activeSlide = s.slides.eq(s.activeIndex);
	            // Active classes
	            activeSlide.addClass(s.params.slideActiveClass);
	            // Next Slide
	            var nextSlide = activeSlide.next('.' + s.params.slideClass).addClass(s.params.slideNextClass);
	            if (s.params.loop && nextSlide.length === 0) {
	                s.slides.eq(0).addClass(s.params.slideNextClass);
	            }
	            // Prev Slide
	            var prevSlide = activeSlide.prev('.' + s.params.slideClass).addClass(s.params.slidePrevClass);
	            if (s.params.loop && prevSlide.length === 0) {
	                s.slides.eq(-1).addClass(s.params.slidePrevClass);
	            }
	        
	            // Pagination
	            if (s.paginationContainer && s.paginationContainer.length > 0) {
	                // Current/Total
	                var current,
	                    total = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
	                if (s.params.loop) {
	                    current = Math.ceil((s.activeIndex - s.loopedSlides)/s.params.slidesPerGroup);
	                    if (current > s.slides.length - 1 - s.loopedSlides * 2) {
	                        current = current - (s.slides.length - s.loopedSlides * 2);
	                    }
	                    if (current > total - 1) current = current - total;
	                    if (current < 0 && s.params.paginationType !== 'bullets') current = total + current;
	                }
	                else {
	                    if (typeof s.snapIndex !== 'undefined') {
	                        current = s.snapIndex;
	                    }
	                    else {
	                        current = s.activeIndex || 0;
	                    }
	                }
	                // Types
	                if (s.params.paginationType === 'bullets' && s.bullets && s.bullets.length > 0) {
	                    s.bullets.removeClass(s.params.bulletActiveClass);
	                    if (s.paginationContainer.length > 1) {
	                        s.bullets.each(function () {
	                            if ($(this).index() === current) $(this).addClass(s.params.bulletActiveClass);
	                        });
	                    }
	                    else {
	                        s.bullets.eq(current).addClass(s.params.bulletActiveClass);
	                    }
	                }
	                if (s.params.paginationType === 'fraction') {
	                    s.paginationContainer.find('.' + s.params.paginationCurrentClass).text(current + 1);
	                    s.paginationContainer.find('.' + s.params.paginationTotalClass).text(total);
	                }
	                if (s.params.paginationType === 'progress') {
	                    var scale = (current + 1) / total,
	                        scaleX = scale,
	                        scaleY = 1;
	                    if (!s.isHorizontal()) {
	                        scaleY = scale;
	                        scaleX = 1;
	                    }
	                    s.paginationContainer.find('.' + s.params.paginationProgressbarClass).transform('translate3d(0,0,0) scaleX(' + scaleX + ') scaleY(' + scaleY + ')').transition(s.params.speed);
	                }
	                if (s.params.paginationType === 'custom' && s.params.paginationCustomRender) {
	                    s.paginationContainer.html(s.params.paginationCustomRender(s, current + 1, total));
	                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
	                }
	            }
	        
	            // Next/active buttons
	            if (!s.params.loop) {
	                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
	                    if (s.isBeginning) {
	                        s.prevButton.addClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.disable(s.prevButton);
	                    }
	                    else {
	                        s.prevButton.removeClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.enable(s.prevButton);
	                    }
	                }
	                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
	                    if (s.isEnd) {
	                        s.nextButton.addClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.disable(s.nextButton);
	                    }
	                    else {
	                        s.nextButton.removeClass(s.params.buttonDisabledClass);
	                        if (s.params.a11y && s.a11y) s.a11y.enable(s.nextButton);
	                    }
	                }
	            }
	        };
	        
	        /*=========================
	          Pagination
	          ===========================*/
	        s.updatePagination = function () {
	            if (!s.params.pagination) return;
	            if (s.paginationContainer && s.paginationContainer.length > 0) {
	                var paginationHTML = '';
	                if (s.params.paginationType === 'bullets') {
	                    var numberOfBullets = s.params.loop ? Math.ceil((s.slides.length - s.loopedSlides * 2) / s.params.slidesPerGroup) : s.snapGrid.length;
	                    for (var i = 0; i < numberOfBullets; i++) {
	                        if (s.params.paginationBulletRender) {
	                            paginationHTML += s.params.paginationBulletRender(i, s.params.bulletClass);
	                        }
	                        else {
	                            paginationHTML += '<' + s.params.paginationElement+' class="' + s.params.bulletClass + '"></' + s.params.paginationElement + '>';
	                        }
	                    }
	                    s.paginationContainer.html(paginationHTML);
	                    s.bullets = s.paginationContainer.find('.' + s.params.bulletClass);
	                    if (s.params.paginationClickable && s.params.a11y && s.a11y) {
	                        s.a11y.initPagination();
	                    }
	                }
	                if (s.params.paginationType === 'fraction') {
	                    if (s.params.paginationFractionRender) {
	                        paginationHTML = s.params.paginationFractionRender(s, s.params.paginationCurrentClass, s.params.paginationTotalClass);
	                    }
	                    else {
	                        paginationHTML =
	                            '<span class="' + s.params.paginationCurrentClass + '"></span>' +
	                            ' / ' +
	                            '<span class="' + s.params.paginationTotalClass+'"></span>';
	                    }
	                    s.paginationContainer.html(paginationHTML);
	                }
	                if (s.params.paginationType === 'progress') {
	                    if (s.params.paginationProgressRender) {
	                        paginationHTML = s.params.paginationProgressRender(s, s.params.paginationProgressbarClass);
	                    }
	                    else {
	                        paginationHTML = '<span class="' + s.params.paginationProgressbarClass + '"></span>';
	                    }
	                    s.paginationContainer.html(paginationHTML);
	                }
	                if (s.params.paginationType !== 'custom') {
	                    s.emit('onPaginationRendered', s, s.paginationContainer[0]);
	                }
	            }
	        };
	        /*=========================
	          Common update method
	          ===========================*/
	        s.update = function (updateTranslate) {
	            s.updateContainerSize();
	            s.updateSlidesSize();
	            s.updateProgress();
	            s.updatePagination();
	            s.updateClasses();
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.set();
	            }
	            function forceSetTranslate() {
	                newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
	                s.setWrapperTranslate(newTranslate);
	                s.updateActiveIndex();
	                s.updateClasses();
	            }
	            if (updateTranslate) {
	                var translated, newTranslate;
	                if (s.controller && s.controller.spline) {
	                    s.controller.spline = undefined;
	                }
	                if (s.params.freeMode) {
	                    forceSetTranslate();
	                    if (s.params.autoHeight) {
	                        s.updateAutoHeight();
	                    }
	                }
	                else {
	                    if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
	                        translated = s.slideTo(s.slides.length - 1, 0, false, true);
	                    }
	                    else {
	                        translated = s.slideTo(s.activeIndex, 0, false, true);
	                    }
	                    if (!translated) {
	                        forceSetTranslate();
	                    }
	                }
	            }
	            else if (s.params.autoHeight) {
	                s.updateAutoHeight();
	            }
	        };
	        
	        /*=========================
	          Resize Handler
	          ===========================*/
	        s.onResize = function (forceUpdatePagination) {
	            //Breakpoints
	            if (s.params.breakpoints) {
	                s.setBreakpoint();
	            }
	        
	            // Disable locks on resize
	            var allowSwipeToPrev = s.params.allowSwipeToPrev;
	            var allowSwipeToNext = s.params.allowSwipeToNext;
	            s.params.allowSwipeToPrev = s.params.allowSwipeToNext = true;
	        
	            s.updateContainerSize();
	            s.updateSlidesSize();
	            if (s.params.slidesPerView === 'auto' || s.params.freeMode || forceUpdatePagination) s.updatePagination();
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.set();
	            }
	            if (s.controller && s.controller.spline) {
	                s.controller.spline = undefined;
	            }
	            var slideChangedBySlideTo = false;
	            if (s.params.freeMode) {
	                var newTranslate = Math.min(Math.max(s.translate, s.maxTranslate()), s.minTranslate());
	                s.setWrapperTranslate(newTranslate);
	                s.updateActiveIndex();
	                s.updateClasses();
	        
	                if (s.params.autoHeight) {
	                    s.updateAutoHeight();
	                }
	            }
	            else {
	                s.updateClasses();
	                if ((s.params.slidesPerView === 'auto' || s.params.slidesPerView > 1) && s.isEnd && !s.params.centeredSlides) {
	                    slideChangedBySlideTo = s.slideTo(s.slides.length - 1, 0, false, true);
	                }
	                else {
	                    slideChangedBySlideTo = s.slideTo(s.activeIndex, 0, false, true);
	                }
	            }
	            if (s.params.lazyLoading && !slideChangedBySlideTo && s.lazy) {
	                s.lazy.load();
	            }
	            // Return locks after resize
	            s.params.allowSwipeToPrev = allowSwipeToPrev;
	            s.params.allowSwipeToNext = allowSwipeToNext;
	        };
	        
	        /*=========================
	          Events
	          ===========================*/
	        
	        //Define Touch Events
	        var desktopEvents = ['mousedown', 'mousemove', 'mouseup'];
	        if (window.navigator.pointerEnabled) desktopEvents = ['pointerdown', 'pointermove', 'pointerup'];
	        else if (window.navigator.msPointerEnabled) desktopEvents = ['MSPointerDown', 'MSPointerMove', 'MSPointerUp'];
	        s.touchEvents = {
	            start : s.support.touch || !s.params.simulateTouch  ? 'touchstart' : desktopEvents[0],
	            move : s.support.touch || !s.params.simulateTouch ? 'touchmove' : desktopEvents[1],
	            end : s.support.touch || !s.params.simulateTouch ? 'touchend' : desktopEvents[2]
	        };
	        
	        
	        // WP8 Touch Events Fix
	        if (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) {
	            (s.params.touchEventsTarget === 'container' ? s.container : s.wrapper).addClass('swiper-wp8-' + s.params.direction);
	        }
	        
	        // Attach/detach events
	        s.initEvents = function (detach) {
	            var actionDom = detach ? 'off' : 'on';
	            var action = detach ? 'removeEventListener' : 'addEventListener';
	            var touchEventsTarget = s.params.touchEventsTarget === 'container' ? s.container[0] : s.wrapper[0];
	            var target = s.support.touch ? touchEventsTarget : document;
	        
	            var moveCapture = s.params.nested ? true : false;
	        
	            //Touch Events
	            if (s.browser.ie) {
	                touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
	                target[action](s.touchEvents.move, s.onTouchMove, moveCapture);
	                target[action](s.touchEvents.end, s.onTouchEnd, false);
	            }
	            else {
	                if (s.support.touch) {
	                    touchEventsTarget[action](s.touchEvents.start, s.onTouchStart, false);
	                    touchEventsTarget[action](s.touchEvents.move, s.onTouchMove, moveCapture);
	                    touchEventsTarget[action](s.touchEvents.end, s.onTouchEnd, false);
	                }
	                if (params.simulateTouch && !s.device.ios && !s.device.android) {
	                    touchEventsTarget[action]('mousedown', s.onTouchStart, false);
	                    document[action]('mousemove', s.onTouchMove, moveCapture);
	                    document[action]('mouseup', s.onTouchEnd, false);
	                }
	            }
	            window[action]('resize', s.onResize);
	        
	            // Next, Prev, Index
	            if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
	                s.nextButton[actionDom]('click', s.onClickNext);
	                if (s.params.a11y && s.a11y) s.nextButton[actionDom]('keydown', s.a11y.onEnterKey);
	            }
	            if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
	                s.prevButton[actionDom]('click', s.onClickPrev);
	                if (s.params.a11y && s.a11y) s.prevButton[actionDom]('keydown', s.a11y.onEnterKey);
	            }
	            if (s.params.pagination && s.params.paginationClickable) {
	                s.paginationContainer[actionDom]('click', '.' + s.params.bulletClass, s.onClickIndex);
	                if (s.params.a11y && s.a11y) s.paginationContainer[actionDom]('keydown', '.' + s.params.bulletClass, s.a11y.onEnterKey);
	            }
	        
	            // Prevent Links Clicks
	            if (s.params.preventClicks || s.params.preventClicksPropagation) touchEventsTarget[action]('click', s.preventClicks, true);
	        };
	        s.attachEvents = function () {
	            s.initEvents();
	        };
	        s.detachEvents = function () {
	            s.initEvents(true);
	        };
	        
	        /*=========================
	          Handle Clicks
	          ===========================*/
	        // Prevent Clicks
	        s.allowClick = true;
	        s.preventClicks = function (e) {
	            if (!s.allowClick) {
	                if (s.params.preventClicks) e.preventDefault();
	                if (s.params.preventClicksPropagation && s.animating) {
	                    e.stopPropagation();
	                    e.stopImmediatePropagation();
	                }
	            }
	        };
	        // Clicks
	        s.onClickNext = function (e) {
	            e.preventDefault();
	            if (s.isEnd && !s.params.loop) return;
	            s.slideNext();
	        };
	        s.onClickPrev = function (e) {
	            e.preventDefault();
	            if (s.isBeginning && !s.params.loop) return;
	            s.slidePrev();
	        };
	        s.onClickIndex = function (e) {
	            e.preventDefault();
	            var index = $(this).index() * s.params.slidesPerGroup;
	            if (s.params.loop) index = index + s.loopedSlides;
	            s.slideTo(index);
	        };
	        
	        /*=========================
	          Handle Touches
	          ===========================*/
	        function findElementInEvent(e, selector) {
	            var el = $(e.target);
	            if (!el.is(selector)) {
	                if (typeof selector === 'string') {
	                    el = el.parents(selector);
	                }
	                else if (selector.nodeType) {
	                    var found;
	                    el.parents().each(function (index, _el) {
	                        if (_el === selector) found = selector;
	                    });
	                    if (!found) return undefined;
	                    else return selector;
	                }
	            }
	            if (el.length === 0) {
	                return undefined;
	            }
	            return el[0];
	        }
	        s.updateClickedSlide = function (e) {
	            var slide = findElementInEvent(e, '.' + s.params.slideClass);
	            var slideFound = false;
	            if (slide) {
	                for (var i = 0; i < s.slides.length; i++) {
	                    if (s.slides[i] === slide) slideFound = true;
	                }
	            }
	        
	            if (slide && slideFound) {
	                s.clickedSlide = slide;
	                s.clickedIndex = $(slide).index();
	            }
	            else {
	                s.clickedSlide = undefined;
	                s.clickedIndex = undefined;
	                return;
	            }
	            if (s.params.slideToClickedSlide && s.clickedIndex !== undefined && s.clickedIndex !== s.activeIndex) {
	                var slideToIndex = s.clickedIndex,
	                    realIndex,
	                    duplicatedSlides;
	                if (s.params.loop) {
	                    if (s.animating) return;
	                    realIndex = $(s.clickedSlide).attr('data-swiper-slide-index');
	                    if (s.params.centeredSlides) {
	                        if ((slideToIndex < s.loopedSlides - s.params.slidesPerView/2) || (slideToIndex > s.slides.length - s.loopedSlides + s.params.slidesPerView/2)) {
	                            s.fixLoop();
	                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.swiper-slide-duplicate)').eq(0).index();
	                            setTimeout(function () {
	                                s.slideTo(slideToIndex);
	                            }, 0);
	                        }
	                        else {
	                            s.slideTo(slideToIndex);
	                        }
	                    }
	                    else {
	                        if (slideToIndex > s.slides.length - s.params.slidesPerView) {
	                            s.fixLoop();
	                            slideToIndex = s.wrapper.children('.' + s.params.slideClass + '[data-swiper-slide-index="' + realIndex + '"]:not(.swiper-slide-duplicate)').eq(0).index();
	                            setTimeout(function () {
	                                s.slideTo(slideToIndex);
	                            }, 0);
	                        }
	                        else {
	                            s.slideTo(slideToIndex);
	                        }
	                    }
	                }
	                else {
	                    s.slideTo(slideToIndex);
	                }
	            }
	        };
	        
	        var isTouched,
	            isMoved,
	            allowTouchCallbacks,
	            touchStartTime,
	            isScrolling,
	            currentTranslate,
	            startTranslate,
	            allowThresholdMove,
	            // Form elements to match
	            formElements = 'input, select, textarea, button',
	            // Last click time
	            lastClickTime = Date.now(), clickTimeout,
	            //Velocities
	            velocities = [],
	            allowMomentumBounce;
	        
	        // Animating Flag
	        s.animating = false;
	        
	        // Touches information
	        s.touches = {
	            startX: 0,
	            startY: 0,
	            currentX: 0,
	            currentY: 0,
	            diff: 0
	        };
	        
	        // Touch handlers
	        var isTouchEvent, startMoving;
	        s.onTouchStart = function (e) {
	            if (e.originalEvent) e = e.originalEvent;
	            isTouchEvent = e.type === 'touchstart';
	            if (!isTouchEvent && 'which' in e && e.which === 3) return;
	            if (s.params.noSwiping && findElementInEvent(e, '.' + s.params.noSwipingClass)) {
	                s.allowClick = true;
	                return;
	            }
	            if (s.params.swipeHandler) {
	                if (!findElementInEvent(e, s.params.swipeHandler)) return;
	            }
	        
	            var startX = s.touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
	            var startY = s.touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
	        
	            // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore
	            if(s.device.ios && s.params.iOSEdgeSwipeDetection && startX <= s.params.iOSEdgeSwipeThreshold) {
	                return;
	            }
	        
	            isTouched = true;
	            isMoved = false;
	            allowTouchCallbacks = true;
	            isScrolling = undefined;
	            startMoving = undefined;
	            s.touches.startX = startX;
	            s.touches.startY = startY;
	            touchStartTime = Date.now();
	            s.allowClick = true;
	            s.updateContainerSize();
	            s.swipeDirection = undefined;
	            if (s.params.threshold > 0) allowThresholdMove = false;
	            if (e.type !== 'touchstart') {
	                var preventDefault = true;
	                if ($(e.target).is(formElements)) preventDefault = false;
	                if (document.activeElement && $(document.activeElement).is(formElements)) {
	                    document.activeElement.blur();
	                }
	                if (preventDefault) {
	                    e.preventDefault();
	                }
	            }
	            s.emit('onTouchStart', s, e);
	        };
	        
	        s.onTouchMove = function (e) {
	            if (e.originalEvent) e = e.originalEvent;
	            if (isTouchEvent && e.type === 'mousemove') return;
	            if (e.preventedByNestedSwiper) {
	                s.touches.startX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	                s.touches.startY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	                return;
	            }
	            if (s.params.onlyExternal) {
	                // isMoved = true;
	                s.allowClick = false;
	                if (isTouched) {
	                    s.touches.startX = s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	                    s.touches.startY = s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	                    touchStartTime = Date.now();
	                }
	                return;
	            }
	            if (isTouchEvent && document.activeElement) {
	                if (e.target === document.activeElement && $(e.target).is(formElements)) {
	                    isMoved = true;
	                    s.allowClick = false;
	                    return;
	                }
	            }
	            if (allowTouchCallbacks) {
	                s.emit('onTouchMove', s, e);
	            }
	            if (e.targetTouches && e.targetTouches.length > 1) return;
	        
	            s.touches.currentX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
	            s.touches.currentY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
	        
	            if (typeof isScrolling === 'undefined') {
	                var touchAngle = Math.atan2(Math.abs(s.touches.currentY - s.touches.startY), Math.abs(s.touches.currentX - s.touches.startX)) * 180 / Math.PI;
	                isScrolling = s.isHorizontal() ? touchAngle > s.params.touchAngle : (90 - touchAngle > s.params.touchAngle);
	            }
	            if (isScrolling) {
	                s.emit('onTouchMoveOpposite', s, e);
	            }
	            if (typeof startMoving === 'undefined' && s.browser.ieTouch) {
	                if (s.touches.currentX !== s.touches.startX || s.touches.currentY !== s.touches.startY) {
	                    startMoving = true;
	                }
	            }
	            if (!isTouched) return;
	            if (isScrolling)  {
	                isTouched = false;
	                return;
	            }
	            if (!startMoving && s.browser.ieTouch) {
	                return;
	            }
	            s.allowClick = false;
	            s.emit('onSliderMove', s, e);
	            e.preventDefault();
	            if (s.params.touchMoveStopPropagation && !s.params.nested) {
	                e.stopPropagation();
	            }
	        
	            if (!isMoved) {
	                if (params.loop) {
	                    s.fixLoop();
	                }
	                startTranslate = s.getWrapperTranslate();
	                s.setWrapperTransition(0);
	                if (s.animating) {
	                    s.wrapper.trigger('webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd');
	                }
	                if (s.params.autoplay && s.autoplaying) {
	                    if (s.params.autoplayDisableOnInteraction) {
	                        s.stopAutoplay();
	                    }
	                    else {
	                        s.pauseAutoplay();
	                    }
	                }
	                allowMomentumBounce = false;
	                //Grab Cursor
	                if (s.params.grabCursor) {
	                    s.container[0].style.cursor = 'move';
	                    s.container[0].style.cursor = '-webkit-grabbing';
	                    s.container[0].style.cursor = '-moz-grabbin';
	                    s.container[0].style.cursor = 'grabbing';
	                }
	            }
	            isMoved = true;
	        
	            var diff = s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
	        
	            diff = diff * s.params.touchRatio;
	            if (s.rtl) diff = -diff;
	        
	            s.swipeDirection = diff > 0 ? 'prev' : 'next';
	            currentTranslate = diff + startTranslate;
	        
	            var disableParentSwiper = true;
	            if ((diff > 0 && currentTranslate > s.minTranslate())) {
	                disableParentSwiper = false;
	                if (s.params.resistance) currentTranslate = s.minTranslate() - 1 + Math.pow(-s.minTranslate() + startTranslate + diff, s.params.resistanceRatio);
	            }
	            else if (diff < 0 && currentTranslate < s.maxTranslate()) {
	                disableParentSwiper = false;
	                if (s.params.resistance) currentTranslate = s.maxTranslate() + 1 - Math.pow(s.maxTranslate() - startTranslate - diff, s.params.resistanceRatio);
	            }
	        
	            if (disableParentSwiper) {
	                e.preventedByNestedSwiper = true;
	            }
	        
	            // Directions locks
	            if (!s.params.allowSwipeToNext && s.swipeDirection === 'next' && currentTranslate < startTranslate) {
	                currentTranslate = startTranslate;
	            }
	            if (!s.params.allowSwipeToPrev && s.swipeDirection === 'prev' && currentTranslate > startTranslate) {
	                currentTranslate = startTranslate;
	            }
	        
	            if (!s.params.followFinger) return;
	        
	            // Threshold
	            if (s.params.threshold > 0) {
	                if (Math.abs(diff) > s.params.threshold || allowThresholdMove) {
	                    if (!allowThresholdMove) {
	                        allowThresholdMove = true;
	                        s.touches.startX = s.touches.currentX;
	                        s.touches.startY = s.touches.currentY;
	                        currentTranslate = startTranslate;
	                        s.touches.diff = s.isHorizontal() ? s.touches.currentX - s.touches.startX : s.touches.currentY - s.touches.startY;
	                        return;
	                    }
	                }
	                else {
	                    currentTranslate = startTranslate;
	                    return;
	                }
	            }
	            // Update active index in free mode
	            if (s.params.freeMode || s.params.watchSlidesProgress) {
	                s.updateActiveIndex();
	            }
	            if (s.params.freeMode) {
	                //Velocity
	                if (velocities.length === 0) {
	                    velocities.push({
	                        position: s.touches[s.isHorizontal() ? 'startX' : 'startY'],
	                        time: touchStartTime
	                    });
	                }
	                velocities.push({
	                    position: s.touches[s.isHorizontal() ? 'currentX' : 'currentY'],
	                    time: (new window.Date()).getTime()
	                });
	            }
	            // Update progress
	            s.updateProgress(currentTranslate);
	            // Update translate
	            s.setWrapperTranslate(currentTranslate);
	        };
	        s.onTouchEnd = function (e) {
	            if (e.originalEvent) e = e.originalEvent;
	            if (allowTouchCallbacks) {
	                s.emit('onTouchEnd', s, e);
	            }
	            allowTouchCallbacks = false;
	            if (!isTouched) return;
	            //Return Grab Cursor
	            if (s.params.grabCursor && isMoved && isTouched) {
	                s.container[0].style.cursor = 'move';
	                s.container[0].style.cursor = '-webkit-grab';
	                s.container[0].style.cursor = '-moz-grab';
	                s.container[0].style.cursor = 'grab';
	            }
	        
	            // Time diff
	            var touchEndTime = Date.now();
	            var timeDiff = touchEndTime - touchStartTime;
	        
	            // Tap, doubleTap, Click
	            if (s.allowClick) {
	                s.updateClickedSlide(e);
	                s.emit('onTap', s, e);
	                if (timeDiff < 300 && (touchEndTime - lastClickTime) > 300) {
	                    if (clickTimeout) clearTimeout(clickTimeout);
	                    clickTimeout = setTimeout(function () {
	                        if (!s) return;
	                        if (s.params.paginationHide && s.paginationContainer.length > 0 && !$(e.target).hasClass(s.params.bulletClass)) {
	                            s.paginationContainer.toggleClass(s.params.paginationHiddenClass);
	                        }
	                        s.emit('onClick', s, e);
	                    }, 300);
	        
	                }
	                if (timeDiff < 300 && (touchEndTime - lastClickTime) < 300) {
	                    if (clickTimeout) clearTimeout(clickTimeout);
	                    s.emit('onDoubleTap', s, e);
	                }
	            }
	        
	            lastClickTime = Date.now();
	            setTimeout(function () {
	                if (s) s.allowClick = true;
	            }, 0);
	        
	            if (!isTouched || !isMoved || !s.swipeDirection || s.touches.diff === 0 || currentTranslate === startTranslate) {
	                isTouched = isMoved = false;
	                return;
	            }
	            isTouched = isMoved = false;
	        
	            var currentPos;
	            if (s.params.followFinger) {
	                currentPos = s.rtl ? s.translate : -s.translate;
	            }
	            else {
	                currentPos = -currentTranslate;
	            }
	            if (s.params.freeMode) {
	                if (currentPos < -s.minTranslate()) {
	                    s.slideTo(s.activeIndex);
	                    return;
	                }
	                else if (currentPos > -s.maxTranslate()) {
	                    if (s.slides.length < s.snapGrid.length) {
	                        s.slideTo(s.snapGrid.length - 1);
	                    }
	                    else {
	                        s.slideTo(s.slides.length - 1);
	                    }
	                    return;
	                }
	        
	                if (s.params.freeModeMomentum) {
	                    if (velocities.length > 1) {
	                        var lastMoveEvent = velocities.pop(), velocityEvent = velocities.pop();
	        
	                        var distance = lastMoveEvent.position - velocityEvent.position;
	                        var time = lastMoveEvent.time - velocityEvent.time;
	                        s.velocity = distance / time;
	                        s.velocity = s.velocity / 2;
	                        if (Math.abs(s.velocity) < s.params.freeModeMinimumVelocity) {
	                            s.velocity = 0;
	                        }
	                        // this implies that the user stopped moving a finger then released.
	                        // There would be no events with distance zero, so the last event is stale.
	                        if (time > 150 || (new window.Date().getTime() - lastMoveEvent.time) > 300) {
	                            s.velocity = 0;
	                        }
	                    } else {
	                        s.velocity = 0;
	                    }
	        
	                    velocities.length = 0;
	                    var momentumDuration = 1000 * s.params.freeModeMomentumRatio;
	                    var momentumDistance = s.velocity * momentumDuration;
	        
	                    var newPosition = s.translate + momentumDistance;
	                    if (s.rtl) newPosition = - newPosition;
	                    var doBounce = false;
	                    var afterBouncePosition;
	                    var bounceAmount = Math.abs(s.velocity) * 20 * s.params.freeModeMomentumBounceRatio;
	                    if (newPosition < s.maxTranslate()) {
	                        if (s.params.freeModeMomentumBounce) {
	                            if (newPosition + s.maxTranslate() < -bounceAmount) {
	                                newPosition = s.maxTranslate() - bounceAmount;
	                            }
	                            afterBouncePosition = s.maxTranslate();
	                            doBounce = true;
	                            allowMomentumBounce = true;
	                        }
	                        else {
	                            newPosition = s.maxTranslate();
	                        }
	                    }
	                    else if (newPosition > s.minTranslate()) {
	                        if (s.params.freeModeMomentumBounce) {
	                            if (newPosition - s.minTranslate() > bounceAmount) {
	                                newPosition = s.minTranslate() + bounceAmount;
	                            }
	                            afterBouncePosition = s.minTranslate();
	                            doBounce = true;
	                            allowMomentumBounce = true;
	                        }
	                        else {
	                            newPosition = s.minTranslate();
	                        }
	                    }
	                    else if (s.params.freeModeSticky) {
	                        var j = 0,
	                            nextSlide;
	                        for (j = 0; j < s.snapGrid.length; j += 1) {
	                            if (s.snapGrid[j] > -newPosition) {
	                                nextSlide = j;
	                                break;
	                            }
	        
	                        }
	                        if (Math.abs(s.snapGrid[nextSlide] - newPosition) < Math.abs(s.snapGrid[nextSlide - 1] - newPosition) || s.swipeDirection === 'next') {
	                            newPosition = s.snapGrid[nextSlide];
	                        } else {
	                            newPosition = s.snapGrid[nextSlide - 1];
	                        }
	                        if (!s.rtl) newPosition = - newPosition;
	                    }
	                    //Fix duration
	                    if (s.velocity !== 0) {
	                        if (s.rtl) {
	                            momentumDuration = Math.abs((-newPosition - s.translate) / s.velocity);
	                        }
	                        else {
	                            momentumDuration = Math.abs((newPosition - s.translate) / s.velocity);
	                        }
	                    }
	                    else if (s.params.freeModeSticky) {
	                        s.slideReset();
	                        return;
	                    }
	        
	                    if (s.params.freeModeMomentumBounce && doBounce) {
	                        s.updateProgress(afterBouncePosition);
	                        s.setWrapperTransition(momentumDuration);
	                        s.setWrapperTranslate(newPosition);
	                        s.onTransitionStart();
	                        s.animating = true;
	                        s.wrapper.transitionEnd(function () {
	                            if (!s || !allowMomentumBounce) return;
	                            s.emit('onMomentumBounce', s);
	        
	                            s.setWrapperTransition(s.params.speed);
	                            s.setWrapperTranslate(afterBouncePosition);
	                            s.wrapper.transitionEnd(function () {
	                                if (!s) return;
	                                s.onTransitionEnd();
	                            });
	                        });
	                    } else if (s.velocity) {
	                        s.updateProgress(newPosition);
	                        s.setWrapperTransition(momentumDuration);
	                        s.setWrapperTranslate(newPosition);
	                        s.onTransitionStart();
	                        if (!s.animating) {
	                            s.animating = true;
	                            s.wrapper.transitionEnd(function () {
	                                if (!s) return;
	                                s.onTransitionEnd();
	                            });
	                        }
	        
	                    } else {
	                        s.updateProgress(newPosition);
	                    }
	        
	                    s.updateActiveIndex();
	                }
	                if (!s.params.freeModeMomentum || timeDiff >= s.params.longSwipesMs) {
	                    s.updateProgress();
	                    s.updateActiveIndex();
	                }
	                return;
	            }
	        
	            // Find current slide
	            var i, stopIndex = 0, groupSize = s.slidesSizesGrid[0];
	            for (i = 0; i < s.slidesGrid.length; i += s.params.slidesPerGroup) {
	                if (typeof s.slidesGrid[i + s.params.slidesPerGroup] !== 'undefined') {
	                    if (currentPos >= s.slidesGrid[i] && currentPos < s.slidesGrid[i + s.params.slidesPerGroup]) {
	                        stopIndex = i;
	                        groupSize = s.slidesGrid[i + s.params.slidesPerGroup] - s.slidesGrid[i];
	                    }
	                }
	                else {
	                    if (currentPos >= s.slidesGrid[i]) {
	                        stopIndex = i;
	                        groupSize = s.slidesGrid[s.slidesGrid.length - 1] - s.slidesGrid[s.slidesGrid.length - 2];
	                    }
	                }
	            }
	        
	            // Find current slide size
	            var ratio = (currentPos - s.slidesGrid[stopIndex]) / groupSize;
	        
	            if (timeDiff > s.params.longSwipesMs) {
	                // Long touches
	                if (!s.params.longSwipes) {
	                    s.slideTo(s.activeIndex);
	                    return;
	                }
	                if (s.swipeDirection === 'next') {
	                    if (ratio >= s.params.longSwipesRatio) s.slideTo(stopIndex + s.params.slidesPerGroup);
	                    else s.slideTo(stopIndex);
	        
	                }
	                if (s.swipeDirection === 'prev') {
	                    if (ratio > (1 - s.params.longSwipesRatio)) s.slideTo(stopIndex + s.params.slidesPerGroup);
	                    else s.slideTo(stopIndex);
	                }
	            }
	            else {
	                // Short swipes
	                if (!s.params.shortSwipes) {
	                    s.slideTo(s.activeIndex);
	                    return;
	                }
	                if (s.swipeDirection === 'next') {
	                    s.slideTo(stopIndex + s.params.slidesPerGroup);
	        
	                }
	                if (s.swipeDirection === 'prev') {
	                    s.slideTo(stopIndex);
	                }
	            }
	        };
	        /*=========================
	          Transitions
	          ===========================*/
	        s._slideTo = function (slideIndex, speed) {
	            return s.slideTo(slideIndex, speed, true, true);
	        };
	        s.slideTo = function (slideIndex, speed, runCallbacks, internal) {
	            if (typeof runCallbacks === 'undefined') runCallbacks = true;
	            if (typeof slideIndex === 'undefined') slideIndex = 0;
	            if (slideIndex < 0) slideIndex = 0;
	            s.snapIndex = Math.floor(slideIndex / s.params.slidesPerGroup);
	            if (s.snapIndex >= s.snapGrid.length) s.snapIndex = s.snapGrid.length - 1;
	        
	            var translate = - s.snapGrid[s.snapIndex];
	            // Stop autoplay
	            if (s.params.autoplay && s.autoplaying) {
	                if (internal || !s.params.autoplayDisableOnInteraction) {
	                    s.pauseAutoplay(speed);
	                }
	                else {
	                    s.stopAutoplay();
	                }
	            }
	            // Update progress
	            s.updateProgress(translate);
	        
	            // Normalize slideIndex
	            for (var i = 0; i < s.slidesGrid.length; i++) {
	                if (- Math.floor(translate * 100) >= Math.floor(s.slidesGrid[i] * 100)) {
	                    slideIndex = i;
	                }
	            }
	        
	            // Directions locks
	            if (!s.params.allowSwipeToNext && translate < s.translate && translate < s.minTranslate()) {
	                return false;
	            }
	            if (!s.params.allowSwipeToPrev && translate > s.translate && translate > s.maxTranslate()) {
	                if ((s.activeIndex || 0) !== slideIndex ) return false;
	            }
	        
	            // Update Index
	            if (typeof speed === 'undefined') speed = s.params.speed;
	            s.previousIndex = s.activeIndex || 0;
	            s.activeIndex = slideIndex;
	        
	            if ((s.rtl && -translate === s.translate) || (!s.rtl && translate === s.translate)) {
	                // Update Height
	                if (s.params.autoHeight) {
	                    s.updateAutoHeight();
	                }
	                s.updateClasses();
	                if (s.params.effect !== 'slide') {
	                    s.setWrapperTranslate(translate);
	                }
	                return false;
	            }
	            s.updateClasses();
	            s.onTransitionStart(runCallbacks);
	        
	            if (speed === 0) {
	                s.setWrapperTranslate(translate);
	                s.setWrapperTransition(0);
	                s.onTransitionEnd(runCallbacks);
	            }
	            else {
	                s.setWrapperTranslate(translate);
	                s.setWrapperTransition(speed);
	                if (!s.animating) {
	                    s.animating = true;
	                    s.wrapper.transitionEnd(function () {
	                        if (!s) return;
	                        s.onTransitionEnd(runCallbacks);
	                    });
	                }
	        
	            }
	        
	            return true;
	        };
	        
	        s.onTransitionStart = function (runCallbacks) {
	            if (typeof runCallbacks === 'undefined') runCallbacks = true;
	            if (s.params.autoHeight) {
	                s.updateAutoHeight();
	            }
	            if (s.lazy) s.lazy.onTransitionStart();
	            if (runCallbacks) {
	                s.emit('onTransitionStart', s);
	                if (s.activeIndex !== s.previousIndex) {
	                    s.emit('onSlideChangeStart', s);
	                    if (s.activeIndex > s.previousIndex) {
	                        s.emit('onSlideNextStart', s);
	                    }
	                    else {
	                        s.emit('onSlidePrevStart', s);
	                    }
	                }
	        
	            }
	        };
	        s.onTransitionEnd = function (runCallbacks) {
	            s.animating = false;
	            s.setWrapperTransition(0);
	            if (typeof runCallbacks === 'undefined') runCallbacks = true;
	            if (s.lazy) s.lazy.onTransitionEnd();
	            if (runCallbacks) {
	                s.emit('onTransitionEnd', s);
	                if (s.activeIndex !== s.previousIndex) {
	                    s.emit('onSlideChangeEnd', s);
	                    if (s.activeIndex > s.previousIndex) {
	                        s.emit('onSlideNextEnd', s);
	                    }
	                    else {
	                        s.emit('onSlidePrevEnd', s);
	                    }
	                }
	            }
	            if (s.params.hashnav && s.hashnav) {
	                s.hashnav.setHash();
	            }
	        
	        };
	        s.slideNext = function (runCallbacks, speed, internal) {
	            if (s.params.loop) {
	                if (s.animating) return false;
	                s.fixLoop();
	                var clientLeft = s.container[0].clientLeft;
	                return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
	            }
	            else return s.slideTo(s.activeIndex + s.params.slidesPerGroup, speed, runCallbacks, internal);
	        };
	        s._slideNext = function (speed) {
	            return s.slideNext(true, speed, true);
	        };
	        s.slidePrev = function (runCallbacks, speed, internal) {
	            if (s.params.loop) {
	                if (s.animating) return false;
	                s.fixLoop();
	                var clientLeft = s.container[0].clientLeft;
	                return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
	            }
	            else return s.slideTo(s.activeIndex - 1, speed, runCallbacks, internal);
	        };
	        s._slidePrev = function (speed) {
	            return s.slidePrev(true, speed, true);
	        };
	        s.slideReset = function (runCallbacks, speed, internal) {
	            return s.slideTo(s.activeIndex, speed, runCallbacks);
	        };
	        
	        /*=========================
	          Translate/transition helpers
	          ===========================*/
	        s.setWrapperTransition = function (duration, byController) {
	            s.wrapper.transition(duration);
	            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
	                s.effects[s.params.effect].setTransition(duration);
	            }
	            if (s.params.parallax && s.parallax) {
	                s.parallax.setTransition(duration);
	            }
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.setTransition(duration);
	            }
	            if (s.params.control && s.controller) {
	                s.controller.setTransition(duration, byController);
	            }
	            s.emit('onSetTransition', s, duration);
	        };
	        s.setWrapperTranslate = function (translate, updateActiveIndex, byController) {
	            var x = 0, y = 0, z = 0;
	            if (s.isHorizontal()) {
	                x = s.rtl ? -translate : translate;
	            }
	            else {
	                y = translate;
	            }
	        
	            if (s.params.roundLengths) {
	                x = round(x);
	                y = round(y);
	            }
	        
	            if (!s.params.virtualTranslate) {
	                if (s.support.transforms3d) s.wrapper.transform('translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px)');
	                else s.wrapper.transform('translate(' + x + 'px, ' + y + 'px)');
	            }
	        
	            s.translate = s.isHorizontal() ? x : y;
	        
	            // Check if we need to update progress
	            var progress;
	            var translatesDiff = s.maxTranslate() - s.minTranslate();
	            if (translatesDiff === 0) {
	                progress = 0;
	            }
	            else {
	                progress = (translate - s.minTranslate()) / (translatesDiff);
	            }
	            if (progress !== s.progress) {
	                s.updateProgress(translate);
	            }
	        
	            if (updateActiveIndex) s.updateActiveIndex();
	            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
	                s.effects[s.params.effect].setTranslate(s.translate);
	            }
	            if (s.params.parallax && s.parallax) {
	                s.parallax.setTranslate(s.translate);
	            }
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.setTranslate(s.translate);
	            }
	            if (s.params.control && s.controller) {
	                s.controller.setTranslate(s.translate, byController);
	            }
	            s.emit('onSetTranslate', s, s.translate);
	        };
	        
	        s.getTranslate = function (el, axis) {
	            var matrix, curTransform, curStyle, transformMatrix;
	        
	            // automatic axis detection
	            if (typeof axis === 'undefined') {
	                axis = 'x';
	            }
	        
	            if (s.params.virtualTranslate) {
	                return s.rtl ? -s.translate : s.translate;
	            }
	        
	            curStyle = window.getComputedStyle(el, null);
	            if (window.WebKitCSSMatrix) {
	                curTransform = curStyle.transform || curStyle.webkitTransform;
	                if (curTransform.split(',').length > 6) {
	                    curTransform = curTransform.split(', ').map(function(a){
	                        return a.replace(',','.');
	                    }).join(', ');
	                }
	                // Some old versions of Webkit choke when 'none' is passed; pass
	                // empty string instead in this case
	                transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
	            }
	            else {
	                transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform  || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
	                matrix = transformMatrix.toString().split(',');
	            }
	        
	            if (axis === 'x') {
	                //Latest Chrome and webkits Fix
	                if (window.WebKitCSSMatrix)
	                    curTransform = transformMatrix.m41;
	                //Crazy IE10 Matrix
	                else if (matrix.length === 16)
	                    curTransform = parseFloat(matrix[12]);
	                //Normal Browsers
	                else
	                    curTransform = parseFloat(matrix[4]);
	            }
	            if (axis === 'y') {
	                //Latest Chrome and webkits Fix
	                if (window.WebKitCSSMatrix)
	                    curTransform = transformMatrix.m42;
	                //Crazy IE10 Matrix
	                else if (matrix.length === 16)
	                    curTransform = parseFloat(matrix[13]);
	                //Normal Browsers
	                else
	                    curTransform = parseFloat(matrix[5]);
	            }
	            if (s.rtl && curTransform) curTransform = -curTransform;
	            return curTransform || 0;
	        };
	        s.getWrapperTranslate = function (axis) {
	            if (typeof axis === 'undefined') {
	                axis = s.isHorizontal() ? 'x' : 'y';
	            }
	            return s.getTranslate(s.wrapper[0], axis);
	        };
	        
	        /*=========================
	          Observer
	          ===========================*/
	        s.observers = [];
	        function initObserver(target, options) {
	            options = options || {};
	            // create an observer instance
	            var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
	            var observer = new ObserverFunc(function (mutations) {
	                mutations.forEach(function (mutation) {
	                    s.onResize(true);
	                    s.emit('onObserverUpdate', s, mutation);
	                });
	            });
	        
	            observer.observe(target, {
	                attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
	                childList: typeof options.childList === 'undefined' ? true : options.childList,
	                characterData: typeof options.characterData === 'undefined' ? true : options.characterData
	            });
	        
	            s.observers.push(observer);
	        }
	        s.initObservers = function () {
	            if (s.params.observeParents) {
	                var containerParents = s.container.parents();
	                for (var i = 0; i < containerParents.length; i++) {
	                    initObserver(containerParents[i]);
	                }
	            }
	        
	            // Observe container
	            initObserver(s.container[0], {childList: false});
	        
	            // Observe wrapper
	            initObserver(s.wrapper[0], {attributes: false});
	        };
	        s.disconnectObservers = function () {
	            for (var i = 0; i < s.observers.length; i++) {
	                s.observers[i].disconnect();
	            }
	            s.observers = [];
	        };
	        /*=========================
	          Loop
	          ===========================*/
	        // Create looped slides
	        s.createLoop = function () {
	            // Remove duplicated slides
	            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
	        
	            var slides = s.wrapper.children('.' + s.params.slideClass);
	        
	            if(s.params.slidesPerView === 'auto' && !s.params.loopedSlides) s.params.loopedSlides = slides.length;
	        
	            s.loopedSlides = parseInt(s.params.loopedSlides || s.params.slidesPerView, 10);
	            s.loopedSlides = s.loopedSlides + s.params.loopAdditionalSlides;
	            if (s.loopedSlides > slides.length) {
	                s.loopedSlides = slides.length;
	            }
	        
	            var prependSlides = [], appendSlides = [], i;
	            slides.each(function (index, el) {
	                var slide = $(this);
	                if (index < s.loopedSlides) appendSlides.push(el);
	                if (index < slides.length && index >= slides.length - s.loopedSlides) prependSlides.push(el);
	                slide.attr('data-swiper-slide-index', index);
	            });
	            for (i = 0; i < appendSlides.length; i++) {
	                s.wrapper.append($(appendSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
	            }
	            for (i = prependSlides.length - 1; i >= 0; i--) {
	                s.wrapper.prepend($(prependSlides[i].cloneNode(true)).addClass(s.params.slideDuplicateClass));
	            }
	        };
	        s.destroyLoop = function () {
	            s.wrapper.children('.' + s.params.slideClass + '.' + s.params.slideDuplicateClass).remove();
	            s.slides.removeAttr('data-swiper-slide-index');
	        };
	        s.reLoop = function (updatePosition) {
	            var oldIndex = s.activeIndex - s.loopedSlides;
	            s.destroyLoop();
	            s.createLoop();
	            s.updateSlidesSize();
	            if (updatePosition) {
	                s.slideTo(oldIndex + s.loopedSlides, 0, false);
	            }
	        
	        };
	        s.fixLoop = function () {
	            var newIndex;
	            //Fix For Negative Oversliding
	            if (s.activeIndex < s.loopedSlides) {
	                newIndex = s.slides.length - s.loopedSlides * 3 + s.activeIndex;
	                newIndex = newIndex + s.loopedSlides;
	                s.slideTo(newIndex, 0, false, true);
	            }
	            //Fix For Positive Oversliding
	            else if ((s.params.slidesPerView === 'auto' && s.activeIndex >= s.loopedSlides * 2) || (s.activeIndex > s.slides.length - s.params.slidesPerView * 2)) {
	                newIndex = -s.slides.length + s.activeIndex + s.loopedSlides;
	                newIndex = newIndex + s.loopedSlides;
	                s.slideTo(newIndex, 0, false, true);
	            }
	        };
	        /*=========================
	          Append/Prepend/Remove Slides
	          ===========================*/
	        s.appendSlide = function (slides) {
	            if (s.params.loop) {
	                s.destroyLoop();
	            }
	            if (typeof slides === 'object' && slides.length) {
	                for (var i = 0; i < slides.length; i++) {
	                    if (slides[i]) s.wrapper.append(slides[i]);
	                }
	            }
	            else {
	                s.wrapper.append(slides);
	            }
	            if (s.params.loop) {
	                s.createLoop();
	            }
	            if (!(s.params.observer && s.support.observer)) {
	                s.update(true);
	            }
	        };
	        s.prependSlide = function (slides) {
	            if (s.params.loop) {
	                s.destroyLoop();
	            }
	            var newActiveIndex = s.activeIndex + 1;
	            if (typeof slides === 'object' && slides.length) {
	                for (var i = 0; i < slides.length; i++) {
	                    if (slides[i]) s.wrapper.prepend(slides[i]);
	                }
	                newActiveIndex = s.activeIndex + slides.length;
	            }
	            else {
	                s.wrapper.prepend(slides);
	            }
	            if (s.params.loop) {
	                s.createLoop();
	            }
	            if (!(s.params.observer && s.support.observer)) {
	                s.update(true);
	            }
	            s.slideTo(newActiveIndex, 0, false);
	        };
	        s.removeSlide = function (slidesIndexes) {
	            if (s.params.loop) {
	                s.destroyLoop();
	                s.slides = s.wrapper.children('.' + s.params.slideClass);
	            }
	            var newActiveIndex = s.activeIndex,
	                indexToRemove;
	            if (typeof slidesIndexes === 'object' && slidesIndexes.length) {
	                for (var i = 0; i < slidesIndexes.length; i++) {
	                    indexToRemove = slidesIndexes[i];
	                    if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
	                    if (indexToRemove < newActiveIndex) newActiveIndex--;
	                }
	                newActiveIndex = Math.max(newActiveIndex, 0);
	            }
	            else {
	                indexToRemove = slidesIndexes;
	                if (s.slides[indexToRemove]) s.slides.eq(indexToRemove).remove();
	                if (indexToRemove < newActiveIndex) newActiveIndex--;
	                newActiveIndex = Math.max(newActiveIndex, 0);
	            }
	        
	            if (s.params.loop) {
	                s.createLoop();
	            }
	        
	            if (!(s.params.observer && s.support.observer)) {
	                s.update(true);
	            }
	            if (s.params.loop) {
	                s.slideTo(newActiveIndex + s.loopedSlides, 0, false);
	            }
	            else {
	                s.slideTo(newActiveIndex, 0, false);
	            }
	        
	        };
	        s.removeAllSlides = function () {
	            var slidesIndexes = [];
	            for (var i = 0; i < s.slides.length; i++) {
	                slidesIndexes.push(i);
	            }
	            s.removeSlide(slidesIndexes);
	        };
	        

	        /*=========================
	          Effects
	          ===========================*/
	        s.effects = {
	            fade: {
	                setTranslate: function () {
	                    for (var i = 0; i < s.slides.length; i++) {
	                        var slide = s.slides.eq(i);
	                        var offset = slide[0].swiperSlideOffset;
	                        var tx = -offset;
	                        if (!s.params.virtualTranslate) tx = tx - s.translate;
	                        var ty = 0;
	                        if (!s.isHorizontal()) {
	                            ty = tx;
	                            tx = 0;
	                        }
	                        var slideOpacity = s.params.fade.crossFade ?
	                                Math.max(1 - Math.abs(slide[0].progress), 0) :
	                                1 + Math.min(Math.max(slide[0].progress, -1), 0);
	                        slide
	                            .css({
	                                opacity: slideOpacity
	                            })
	                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px)');
	        
	                    }
	        
	                },
	                setTransition: function (duration) {
	                    s.slides.transition(duration);
	                    if (s.params.virtualTranslate && duration !== 0) {
	                        var eventTriggered = false;
	                        s.slides.transitionEnd(function () {
	                            if (eventTriggered) return;
	                            if (!s) return;
	                            eventTriggered = true;
	                            s.animating = false;
	                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
	                            for (var i = 0; i < triggerEvents.length; i++) {
	                                s.wrapper.trigger(triggerEvents[i]);
	                            }
	                        });
	                    }
	                }
	            },
	            flip: {
	                setTranslate: function () {
	                    for (var i = 0; i < s.slides.length; i++) {
	                        var slide = s.slides.eq(i);
	                        var progress = slide[0].progress;
	                        if (s.params.flip.limitRotation) {
	                            progress = Math.max(Math.min(slide[0].progress, 1), -1);
	                        }
	                        var offset = slide[0].swiperSlideOffset;
	                        var rotate = -180 * progress,
	                            rotateY = rotate,
	                            rotateX = 0,
	                            tx = -offset,
	                            ty = 0;
	                        if (!s.isHorizontal()) {
	                            ty = tx;
	                            tx = 0;
	                            rotateX = -rotateY;
	                            rotateY = 0;
	                        }
	                        else if (s.rtl) {
	                            rotateY = -rotateY;
	                        }
	        
	                        slide[0].style.zIndex = -Math.abs(Math.round(progress)) + s.slides.length;
	        
	                        if (s.params.flip.slideShadows) {
	                            //Set shadows
	                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
	                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
	                            if (shadowBefore.length === 0) {
	                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
	                                slide.append(shadowBefore);
	                            }
	                            if (shadowAfter.length === 0) {
	                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
	                                slide.append(shadowAfter);
	                            }
	                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
	                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
	                        }
	        
	                        slide
	                            .transform('translate3d(' + tx + 'px, ' + ty + 'px, 0px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)');
	                    }
	                },
	                setTransition: function (duration) {
	                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
	                    if (s.params.virtualTranslate && duration !== 0) {
	                        var eventTriggered = false;
	                        s.slides.eq(s.activeIndex).transitionEnd(function () {
	                            if (eventTriggered) return;
	                            if (!s) return;
	                            if (!$(this).hasClass(s.params.slideActiveClass)) return;
	                            eventTriggered = true;
	                            s.animating = false;
	                            var triggerEvents = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'];
	                            for (var i = 0; i < triggerEvents.length; i++) {
	                                s.wrapper.trigger(triggerEvents[i]);
	                            }
	                        });
	                    }
	                }
	            },
	            cube: {
	                setTranslate: function () {
	                    var wrapperRotate = 0, cubeShadow;
	                    if (s.params.cube.shadow) {
	                        if (s.isHorizontal()) {
	                            cubeShadow = s.wrapper.find('.swiper-cube-shadow');
	                            if (cubeShadow.length === 0) {
	                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
	                                s.wrapper.append(cubeShadow);
	                            }
	                            cubeShadow.css({height: s.width + 'px'});
	                        }
	                        else {
	                            cubeShadow = s.container.find('.swiper-cube-shadow');
	                            if (cubeShadow.length === 0) {
	                                cubeShadow = $('<div class="swiper-cube-shadow"></div>');
	                                s.container.append(cubeShadow);
	                            }
	                        }
	                    }
	                    for (var i = 0; i < s.slides.length; i++) {
	                        var slide = s.slides.eq(i);
	                        var slideAngle = i * 90;
	                        var round = Math.floor(slideAngle / 360);
	                        if (s.rtl) {
	                            slideAngle = -slideAngle;
	                            round = Math.floor(-slideAngle / 360);
	                        }
	                        var progress = Math.max(Math.min(slide[0].progress, 1), -1);
	                        var tx = 0, ty = 0, tz = 0;
	                        if (i % 4 === 0) {
	                            tx = - round * 4 * s.size;
	                            tz = 0;
	                        }
	                        else if ((i - 1) % 4 === 0) {
	                            tx = 0;
	                            tz = - round * 4 * s.size;
	                        }
	                        else if ((i - 2) % 4 === 0) {
	                            tx = s.size + round * 4 * s.size;
	                            tz = s.size;
	                        }
	                        else if ((i - 3) % 4 === 0) {
	                            tx = - s.size;
	                            tz = 3 * s.size + s.size * 4 * round;
	                        }
	                        if (s.rtl) {
	                            tx = -tx;
	                        }
	        
	                        if (!s.isHorizontal()) {
	                            ty = tx;
	                            tx = 0;
	                        }
	        
	                        var transform = 'rotateX(' + (s.isHorizontal() ? 0 : -slideAngle) + 'deg) rotateY(' + (s.isHorizontal() ? slideAngle : 0) + 'deg) translate3d(' + tx + 'px, ' + ty + 'px, ' + tz + 'px)';
	                        if (progress <= 1 && progress > -1) {
	                            wrapperRotate = i * 90 + progress * 90;
	                            if (s.rtl) wrapperRotate = -i * 90 - progress * 90;
	                        }
	                        slide.transform(transform);
	                        if (s.params.cube.slideShadows) {
	                            //Set shadows
	                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
	                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
	                            if (shadowBefore.length === 0) {
	                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
	                                slide.append(shadowBefore);
	                            }
	                            if (shadowAfter.length === 0) {
	                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
	                                slide.append(shadowAfter);
	                            }
	                            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
	                            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
	                        }
	                    }
	                    s.wrapper.css({
	                        '-webkit-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
	                        '-moz-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
	                        '-ms-transform-origin': '50% 50% -' + (s.size / 2) + 'px',
	                        'transform-origin': '50% 50% -' + (s.size / 2) + 'px'
	                    });
	        
	                    if (s.params.cube.shadow) {
	                        if (s.isHorizontal()) {
	                            cubeShadow.transform('translate3d(0px, ' + (s.width / 2 + s.params.cube.shadowOffset) + 'px, ' + (-s.width / 2) + 'px) rotateX(90deg) rotateZ(0deg) scale(' + (s.params.cube.shadowScale) + ')');
	                        }
	                        else {
	                            var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
	                            var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
	                            var scale1 = s.params.cube.shadowScale,
	                                scale2 = s.params.cube.shadowScale / multiplier,
	                                offset = s.params.cube.shadowOffset;
	                            cubeShadow.transform('scale3d(' + scale1 + ', 1, ' + scale2 + ') translate3d(0px, ' + (s.height / 2 + offset) + 'px, ' + (-s.height / 2 / scale2) + 'px) rotateX(-90deg)');
	                        }
	                    }
	                    var zFactor = (s.isSafari || s.isUiWebView) ? (-s.size / 2) : 0;
	                    s.wrapper.transform('translate3d(0px,0,' + zFactor + 'px) rotateX(' + (s.isHorizontal() ? 0 : wrapperRotate) + 'deg) rotateY(' + (s.isHorizontal() ? -wrapperRotate : 0) + 'deg)');
	                },
	                setTransition: function (duration) {
	                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
	                    if (s.params.cube.shadow && !s.isHorizontal()) {
	                        s.container.find('.swiper-cube-shadow').transition(duration);
	                    }
	                }
	            },
	            coverflow: {
	                setTranslate: function () {
	                    var transform = s.translate;
	                    var center = s.isHorizontal() ? -transform + s.width / 2 : -transform + s.height / 2;
	                    var rotate = s.isHorizontal() ? s.params.coverflow.rotate: -s.params.coverflow.rotate;
	                    var translate = s.params.coverflow.depth;
	                    //Each slide offset from center
	                    for (var i = 0, length = s.slides.length; i < length; i++) {
	                        var slide = s.slides.eq(i);
	                        var slideSize = s.slidesSizesGrid[i];
	                        var slideOffset = slide[0].swiperSlideOffset;
	                        var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * s.params.coverflow.modifier;
	        
	                        var rotateY = s.isHorizontal() ? rotate * offsetMultiplier : 0;
	                        var rotateX = s.isHorizontal() ? 0 : rotate * offsetMultiplier;
	                        // var rotateZ = 0
	                        var translateZ = -translate * Math.abs(offsetMultiplier);
	        
	                        var translateY = s.isHorizontal() ? 0 : s.params.coverflow.stretch * (offsetMultiplier);
	                        var translateX = s.isHorizontal() ? s.params.coverflow.stretch * (offsetMultiplier) : 0;
	        
	                        //Fix for ultra small values
	                        if (Math.abs(translateX) < 0.001) translateX = 0;
	                        if (Math.abs(translateY) < 0.001) translateY = 0;
	                        if (Math.abs(translateZ) < 0.001) translateZ = 0;
	                        if (Math.abs(rotateY) < 0.001) rotateY = 0;
	                        if (Math.abs(rotateX) < 0.001) rotateX = 0;
	        
	                        var slideTransform = 'translate3d(' + translateX + 'px,' + translateY + 'px,' + translateZ + 'px)  rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
	        
	                        slide.transform(slideTransform);
	                        slide[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
	                        if (s.params.coverflow.slideShadows) {
	                            //Set shadows
	                            var shadowBefore = s.isHorizontal() ? slide.find('.swiper-slide-shadow-left') : slide.find('.swiper-slide-shadow-top');
	                            var shadowAfter = s.isHorizontal() ? slide.find('.swiper-slide-shadow-right') : slide.find('.swiper-slide-shadow-bottom');
	                            if (shadowBefore.length === 0) {
	                                shadowBefore = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'left' : 'top') + '"></div>');
	                                slide.append(shadowBefore);
	                            }
	                            if (shadowAfter.length === 0) {
	                                shadowAfter = $('<div class="swiper-slide-shadow-' + (s.isHorizontal() ? 'right' : 'bottom') + '"></div>');
	                                slide.append(shadowAfter);
	                            }
	                            if (shadowBefore.length) shadowBefore[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
	                            if (shadowAfter.length) shadowAfter[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0;
	                        }
	                    }
	        
	                    //Set correct perspective for IE10
	                    if (s.browser.ie) {
	                        var ws = s.wrapper[0].style;
	                        ws.perspectiveOrigin = center + 'px 50%';
	                    }
	                },
	                setTransition: function (duration) {
	                    s.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
	                }
	            }
	        };

	        /*=========================
	          Images Lazy Loading
	          ===========================*/
	        s.lazy = {
	            initialImageLoaded: false,
	            loadImageInSlide: function (index, loadInDuplicate) {
	                if (typeof index === 'undefined') return;
	                if (typeof loadInDuplicate === 'undefined') loadInDuplicate = true;
	                if (s.slides.length === 0) return;
	        
	                var slide = s.slides.eq(index);
	                var img = slide.find('.swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)');
	                if (slide.hasClass('swiper-lazy') && !slide.hasClass('swiper-lazy-loaded') && !slide.hasClass('swiper-lazy-loading')) {
	                    img = img.add(slide[0]);
	                }
	                if (img.length === 0) return;
	        
	                img.each(function () {
	                    var _img = $(this);
	                    _img.addClass('swiper-lazy-loading');
	                    var background = _img.attr('data-background');
	                    var src = _img.attr('data-src'),
	                        srcset = _img.attr('data-srcset');
	                    s.loadImage(_img[0], (src || background), srcset, false, function () {
	                        if (background) {
	                            _img.css('background-image', 'url("' + background + '")');
	                            _img.removeAttr('data-background');
	                        }
	                        else {
	                            if (srcset) {
	                                _img.attr('srcset', srcset);
	                                _img.removeAttr('data-srcset');
	                            }
	                            if (src) {
	                                _img.attr('src', src);
	                                _img.removeAttr('data-src');
	                            }
	        
	                        }
	        
	                        _img.addClass('swiper-lazy-loaded').removeClass('swiper-lazy-loading');
	                        slide.find('.swiper-lazy-preloader, .preloader').remove();
	                        if (s.params.loop && loadInDuplicate) {
	                            var slideOriginalIndex = slide.attr('data-swiper-slide-index');
	                            if (slide.hasClass(s.params.slideDuplicateClass)) {
	                                var originalSlide = s.wrapper.children('[data-swiper-slide-index="' + slideOriginalIndex + '"]:not(.' + s.params.slideDuplicateClass + ')');
	                                s.lazy.loadImageInSlide(originalSlide.index(), false);
	                            }
	                            else {
	                                var duplicatedSlide = s.wrapper.children('.' + s.params.slideDuplicateClass + '[data-swiper-slide-index="' + slideOriginalIndex + '"]');
	                                s.lazy.loadImageInSlide(duplicatedSlide.index(), false);
	                            }
	                        }
	                        s.emit('onLazyImageReady', s, slide[0], _img[0]);
	                    });
	        
	                    s.emit('onLazyImageLoad', s, slide[0], _img[0]);
	                });
	        
	            },
	            load: function () {
	                var i;
	                if (s.params.watchSlidesVisibility) {
	                    s.wrapper.children('.' + s.params.slideVisibleClass).each(function () {
	                        s.lazy.loadImageInSlide($(this).index());
	                    });
	                }
	                else {
	                    if (s.params.slidesPerView > 1) {
	                        for (i = s.activeIndex; i < s.activeIndex + s.params.slidesPerView ; i++) {
	                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
	                        }
	                    }
	                    else {
	                        s.lazy.loadImageInSlide(s.activeIndex);
	                    }
	                }
	                if (s.params.lazyLoadingInPrevNext) {
	                    if (s.params.slidesPerView > 1 || (s.params.lazyLoadingInPrevNextAmount && s.params.lazyLoadingInPrevNextAmount > 1)) {
	                        var amount = s.params.lazyLoadingInPrevNextAmount;
	                        var spv = s.params.slidesPerView;
	                        var maxIndex = Math.min(s.activeIndex + spv + Math.max(amount, spv), s.slides.length);
	                        var minIndex = Math.max(s.activeIndex - Math.max(spv, amount), 0);
	                        // Next Slides
	                        for (i = s.activeIndex + s.params.slidesPerView; i < maxIndex; i++) {
	                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
	                        }
	                        // Prev Slides
	                        for (i = minIndex; i < s.activeIndex ; i++) {
	                            if (s.slides[i]) s.lazy.loadImageInSlide(i);
	                        }
	                    }
	                    else {
	                        var nextSlide = s.wrapper.children('.' + s.params.slideNextClass);
	                        if (nextSlide.length > 0) s.lazy.loadImageInSlide(nextSlide.index());
	        
	                        var prevSlide = s.wrapper.children('.' + s.params.slidePrevClass);
	                        if (prevSlide.length > 0) s.lazy.loadImageInSlide(prevSlide.index());
	                    }
	                }
	            },
	            onTransitionStart: function () {
	                if (s.params.lazyLoading) {
	                    if (s.params.lazyLoadingOnTransitionStart || (!s.params.lazyLoadingOnTransitionStart && !s.lazy.initialImageLoaded)) {
	                        s.lazy.load();
	                    }
	                }
	            },
	            onTransitionEnd: function () {
	                if (s.params.lazyLoading && !s.params.lazyLoadingOnTransitionStart) {
	                    s.lazy.load();
	                }
	            }
	        };
	        

	        /*=========================
	          Scrollbar
	          ===========================*/
	        s.scrollbar = {
	            isTouched: false,
	            setDragPosition: function (e) {
	                var sb = s.scrollbar;
	                var x = 0, y = 0;
	                var translate;
	                var pointerPosition = s.isHorizontal() ?
	                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX) :
	                    ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY) ;
	                var position = (pointerPosition) - sb.track.offset()[s.isHorizontal() ? 'left' : 'top'] - sb.dragSize / 2;
	                var positionMin = -s.minTranslate() * sb.moveDivider;
	                var positionMax = -s.maxTranslate() * sb.moveDivider;
	                if (position < positionMin) {
	                    position = positionMin;
	                }
	                else if (position > positionMax) {
	                    position = positionMax;
	                }
	                position = -position / sb.moveDivider;
	                s.updateProgress(position);
	                s.setWrapperTranslate(position, true);
	            },
	            dragStart: function (e) {
	                var sb = s.scrollbar;
	                sb.isTouched = true;
	                e.preventDefault();
	                e.stopPropagation();
	        
	                sb.setDragPosition(e);
	                clearTimeout(sb.dragTimeout);
	        
	                sb.track.transition(0);
	                if (s.params.scrollbarHide) {
	                    sb.track.css('opacity', 1);
	                }
	                s.wrapper.transition(100);
	                sb.drag.transition(100);
	                s.emit('onScrollbarDragStart', s);
	            },
	            dragMove: function (e) {
	                var sb = s.scrollbar;
	                if (!sb.isTouched) return;
	                if (e.preventDefault) e.preventDefault();
	                else e.returnValue = false;
	                sb.setDragPosition(e);
	                s.wrapper.transition(0);
	                sb.track.transition(0);
	                sb.drag.transition(0);
	                s.emit('onScrollbarDragMove', s);
	            },
	            dragEnd: function (e) {
	                var sb = s.scrollbar;
	                if (!sb.isTouched) return;
	                sb.isTouched = false;
	                if (s.params.scrollbarHide) {
	                    clearTimeout(sb.dragTimeout);
	                    sb.dragTimeout = setTimeout(function () {
	                        sb.track.css('opacity', 0);
	                        sb.track.transition(400);
	                    }, 1000);
	        
	                }
	                s.emit('onScrollbarDragEnd', s);
	                if (s.params.scrollbarSnapOnRelease) {
	                    s.slideReset();
	                }
	            },
	            enableDraggable: function () {
	                var sb = s.scrollbar;
	                var target = s.support.touch ? sb.track : document;
	                $(sb.track).on(s.touchEvents.start, sb.dragStart);
	                $(target).on(s.touchEvents.move, sb.dragMove);
	                $(target).on(s.touchEvents.end, sb.dragEnd);
	            },
	            disableDraggable: function () {
	                var sb = s.scrollbar;
	                var target = s.support.touch ? sb.track : document;
	                $(sb.track).off(s.touchEvents.start, sb.dragStart);
	                $(target).off(s.touchEvents.move, sb.dragMove);
	                $(target).off(s.touchEvents.end, sb.dragEnd);
	            },
	            set: function () {
	                if (!s.params.scrollbar) return;
	                var sb = s.scrollbar;
	                sb.track = $(s.params.scrollbar);
	                if (s.params.uniqueNavElements && typeof s.params.scrollbar === 'string' && sb.track.length > 1 && s.container.find(s.params.scrollbar).length === 1) {
	                    sb.track = s.container.find(s.params.scrollbar);
	                }
	                sb.drag = sb.track.find('.swiper-scrollbar-drag');
	                if (sb.drag.length === 0) {
	                    sb.drag = $('<div class="swiper-scrollbar-drag"></div>');
	                    sb.track.append(sb.drag);
	                }
	                sb.drag[0].style.width = '';
	                sb.drag[0].style.height = '';
	                sb.trackSize = s.isHorizontal() ? sb.track[0].offsetWidth : sb.track[0].offsetHeight;
	        
	                sb.divider = s.size / s.virtualSize;
	                sb.moveDivider = sb.divider * (sb.trackSize / s.size);
	                sb.dragSize = sb.trackSize * sb.divider;
	        
	                if (s.isHorizontal()) {
	                    sb.drag[0].style.width = sb.dragSize + 'px';
	                }
	                else {
	                    sb.drag[0].style.height = sb.dragSize + 'px';
	                }
	        
	                if (sb.divider >= 1) {
	                    sb.track[0].style.display = 'none';
	                }
	                else {
	                    sb.track[0].style.display = '';
	                }
	                if (s.params.scrollbarHide) {
	                    sb.track[0].style.opacity = 0;
	                }
	            },
	            setTranslate: function () {
	                if (!s.params.scrollbar) return;
	                var diff;
	                var sb = s.scrollbar;
	                var translate = s.translate || 0;
	                var newPos;
	        
	                var newSize = sb.dragSize;
	                newPos = (sb.trackSize - sb.dragSize) * s.progress;
	                if (s.rtl && s.isHorizontal()) {
	                    newPos = -newPos;
	                    if (newPos > 0) {
	                        newSize = sb.dragSize - newPos;
	                        newPos = 0;
	                    }
	                    else if (-newPos + sb.dragSize > sb.trackSize) {
	                        newSize = sb.trackSize + newPos;
	                    }
	                }
	                else {
	                    if (newPos < 0) {
	                        newSize = sb.dragSize + newPos;
	                        newPos = 0;
	                    }
	                    else if (newPos + sb.dragSize > sb.trackSize) {
	                        newSize = sb.trackSize - newPos;
	                    }
	                }
	                if (s.isHorizontal()) {
	                    if (s.support.transforms3d) {
	                        sb.drag.transform('translate3d(' + (newPos) + 'px, 0, 0)');
	                    }
	                    else {
	                        sb.drag.transform('translateX(' + (newPos) + 'px)');
	                    }
	                    sb.drag[0].style.width = newSize + 'px';
	                }
	                else {
	                    if (s.support.transforms3d) {
	                        sb.drag.transform('translate3d(0px, ' + (newPos) + 'px, 0)');
	                    }
	                    else {
	                        sb.drag.transform('translateY(' + (newPos) + 'px)');
	                    }
	                    sb.drag[0].style.height = newSize + 'px';
	                }
	                if (s.params.scrollbarHide) {
	                    clearTimeout(sb.timeout);
	                    sb.track[0].style.opacity = 1;
	                    sb.timeout = setTimeout(function () {
	                        sb.track[0].style.opacity = 0;
	                        sb.track.transition(400);
	                    }, 1000);
	                }
	            },
	            setTransition: function (duration) {
	                if (!s.params.scrollbar) return;
	                s.scrollbar.drag.transition(duration);
	            }
	        };

	        /*=========================
	          Controller
	          ===========================*/
	        s.controller = {
	            LinearSpline: function (x, y) {
	                this.x = x;
	                this.y = y;
	                this.lastIndex = x.length - 1;
	                // Given an x value (x2), return the expected y2 value:
	                // (x1,y1) is the known point before given value,
	                // (x3,y3) is the known point after given value.
	                var i1, i3;
	                var l = this.x.length;
	        
	                this.interpolate = function (x2) {
	                    if (!x2) return 0;
	        
	                    // Get the indexes of x1 and x3 (the array indexes before and after given x2):
	                    i3 = binarySearch(this.x, x2);
	                    i1 = i3 - 1;
	        
	                    // We have our indexes i1 & i3, so we can calculate already:
	                    // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
	                    return ((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1]) + this.y[i1];
	                };
	        
	                var binarySearch = (function() {
	                    var maxIndex, minIndex, guess;
	                    return function(array, val) {
	                        minIndex = -1;
	                        maxIndex = array.length;
	                        while (maxIndex - minIndex > 1)
	                            if (array[guess = maxIndex + minIndex >> 1] <= val) {
	                                minIndex = guess;
	                            } else {
	                                maxIndex = guess;
	                            }
	                        return maxIndex;
	                    };
	                })();
	            },
	            //xxx: for now i will just save one spline function to to
	            getInterpolateFunction: function(c){
	                if(!s.controller.spline) s.controller.spline = s.params.loop ?
	                    new s.controller.LinearSpline(s.slidesGrid, c.slidesGrid) :
	                    new s.controller.LinearSpline(s.snapGrid, c.snapGrid);
	            },
	            setTranslate: function (translate, byController) {
	               var controlled = s.params.control;
	               var multiplier, controlledTranslate;
	               function setControlledTranslate(c) {
	                    // this will create an Interpolate function based on the snapGrids
	                    // x is the Grid of the scrolled scroller and y will be the controlled scroller
	                    // it makes sense to create this only once and recall it for the interpolation
	                    // the function does a lot of value caching for performance
	                    translate = c.rtl && c.params.direction === 'horizontal' ? -s.translate : s.translate;
	                    if (s.params.controlBy === 'slide') {
	                        s.controller.getInterpolateFunction(c);
	                        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
	                        // but it did not work out
	                        controlledTranslate = -s.controller.spline.interpolate(-translate);
	                    }
	        
	                    if(!controlledTranslate || s.params.controlBy === 'container'){
	                        multiplier = (c.maxTranslate() - c.minTranslate()) / (s.maxTranslate() - s.minTranslate());
	                        controlledTranslate = (translate - s.minTranslate()) * multiplier + c.minTranslate();
	                    }
	        
	                    if (s.params.controlInverse) {
	                        controlledTranslate = c.maxTranslate() - controlledTranslate;
	                    }
	                    c.updateProgress(controlledTranslate);
	                    c.setWrapperTranslate(controlledTranslate, false, s);
	                    c.updateActiveIndex();
	               }
	               if (s.isArray(controlled)) {
	                   for (var i = 0; i < controlled.length; i++) {
	                       if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
	                           setControlledTranslate(controlled[i]);
	                       }
	                   }
	               }
	               else if (controlled instanceof Swiper && byController !== controlled) {
	        
	                   setControlledTranslate(controlled);
	               }
	            },
	            setTransition: function (duration, byController) {
	                var controlled = s.params.control;
	                var i;
	                function setControlledTransition(c) {
	                    c.setWrapperTransition(duration, s);
	                    if (duration !== 0) {
	                        c.onTransitionStart();
	                        c.wrapper.transitionEnd(function(){
	                            if (!controlled) return;
	                            if (c.params.loop && s.params.controlBy === 'slide') {
	                                c.fixLoop();
	                            }
	                            c.onTransitionEnd();
	        
	                        });
	                    }
	                }
	                if (s.isArray(controlled)) {
	                    for (i = 0; i < controlled.length; i++) {
	                        if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
	                            setControlledTransition(controlled[i]);
	                        }
	                    }
	                }
	                else if (controlled instanceof Swiper && byController !== controlled) {
	                    setControlledTransition(controlled);
	                }
	            }
	        };

	        /*=========================
	          Hash Navigation
	          ===========================*/
	        s.hashnav = {
	            init: function () {
	                if (!s.params.hashnav) return;
	                s.hashnav.initialized = true;
	                var hash = document.location.hash.replace('#', '');
	                if (!hash) return;
	                var speed = 0;
	                for (var i = 0, length = s.slides.length; i < length; i++) {
	                    var slide = s.slides.eq(i);
	                    var slideHash = slide.attr('data-hash');
	                    if (slideHash === hash && !slide.hasClass(s.params.slideDuplicateClass)) {
	                        var index = slide.index();
	                        s.slideTo(index, speed, s.params.runCallbacksOnInit, true);
	                    }
	                }
	            },
	            setHash: function () {
	                if (!s.hashnav.initialized || !s.params.hashnav) return;
	                document.location.hash = s.slides.eq(s.activeIndex).attr('data-hash') || '';
	            }
	        };

	        /*=========================
	          Keyboard Control
	          ===========================*/
	        function handleKeyboard(e) {
	            if (e.originalEvent) e = e.originalEvent; //jquery fix
	            var kc = e.keyCode || e.charCode;
	            // Directions locks
	            if (!s.params.allowSwipeToNext && (s.isHorizontal() && kc === 39 || !s.isHorizontal() && kc === 40)) {
	                return false;
	            }
	            if (!s.params.allowSwipeToPrev && (s.isHorizontal() && kc === 37 || !s.isHorizontal() && kc === 38)) {
	                return false;
	            }
	            if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
	                return;
	            }
	            if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
	                return;
	            }
	            if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
	                var inView = false;
	                //Check that swiper should be inside of visible area of window
	                if (s.container.parents('.swiper-slide').length > 0 && s.container.parents('.swiper-slide-active').length === 0) {
	                    return;
	                }
	                var windowScroll = {
	                    left: window.pageXOffset,
	                    top: window.pageYOffset
	                };
	                var windowWidth = window.innerWidth;
	                var windowHeight = window.innerHeight;
	                var swiperOffset = s.container.offset();
	                if (s.rtl) swiperOffset.left = swiperOffset.left - s.container[0].scrollLeft;
	                var swiperCoord = [
	                    [swiperOffset.left, swiperOffset.top],
	                    [swiperOffset.left + s.width, swiperOffset.top],
	                    [swiperOffset.left, swiperOffset.top + s.height],
	                    [swiperOffset.left + s.width, swiperOffset.top + s.height]
	                ];
	                for (var i = 0; i < swiperCoord.length; i++) {
	                    var point = swiperCoord[i];
	                    if (
	                        point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth &&
	                        point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight
	                    ) {
	                        inView = true;
	                    }
	        
	                }
	                if (!inView) return;
	            }
	            if (s.isHorizontal()) {
	                if (kc === 37 || kc === 39) {
	                    if (e.preventDefault) e.preventDefault();
	                    else e.returnValue = false;
	                }
	                if ((kc === 39 && !s.rtl) || (kc === 37 && s.rtl)) s.slideNext();
	                if ((kc === 37 && !s.rtl) || (kc === 39 && s.rtl)) s.slidePrev();
	            }
	            else {
	                if (kc === 38 || kc === 40) {
	                    if (e.preventDefault) e.preventDefault();
	                    else e.returnValue = false;
	                }
	                if (kc === 40) s.slideNext();
	                if (kc === 38) s.slidePrev();
	            }
	        }
	        s.disableKeyboardControl = function () {
	            s.params.keyboardControl = false;
	            $(document).off('keydown', handleKeyboard);
	        };
	        s.enableKeyboardControl = function () {
	            s.params.keyboardControl = true;
	            $(document).on('keydown', handleKeyboard);
	        };
	        

	        /*=========================
	          Mousewheel Control
	          ===========================*/
	        s.mousewheel = {
	            event: false,
	            lastScrollTime: (new window.Date()).getTime()
	        };
	        if (s.params.mousewheelControl) {
	            try {
	                new window.WheelEvent('wheel');
	                s.mousewheel.event = 'wheel';
	            } catch (e) {
	                if (window.WheelEvent || (s.container[0] && 'wheel' in s.container[0])) {
	                    s.mousewheel.event = 'wheel';
	                }
	            }
	            if (!s.mousewheel.event && window.WheelEvent) {
	        
	            }
	            if (!s.mousewheel.event && document.onmousewheel !== undefined) {
	                s.mousewheel.event = 'mousewheel';
	            }
	            if (!s.mousewheel.event) {
	                s.mousewheel.event = 'DOMMouseScroll';
	            }
	        }
	        function handleMousewheel(e) {
	            if (e.originalEvent) e = e.originalEvent; //jquery fix
	            var we = s.mousewheel.event;
	            var delta = 0;
	            var rtlFactor = s.rtl ? -1 : 1;
	        
	            //WebKits
	            if (we === 'mousewheel') {
	                if (s.params.mousewheelForceToAxis) {
	                    if (s.isHorizontal()) {
	                        if (Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)) delta = e.wheelDeltaX * rtlFactor;
	                        else return;
	                    }
	                    else {
	                        if (Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)) delta = e.wheelDeltaY;
	                        else return;
	                    }
	                }
	                else {
	                    delta = Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY) ? - e.wheelDeltaX * rtlFactor : - e.wheelDeltaY;
	                }
	            }
	            //Old FireFox
	            else if (we === 'DOMMouseScroll') delta = -e.detail;
	            //New FireFox
	            else if (we === 'wheel') {
	                if (s.params.mousewheelForceToAxis) {
	                    if (s.isHorizontal()) {
	                        if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) delta = -e.deltaX * rtlFactor;
	                        else return;
	                    }
	                    else {
	                        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) delta = -e.deltaY;
	                        else return;
	                    }
	                }
	                else {
	                    delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? - e.deltaX * rtlFactor : - e.deltaY;
	                }
	            }
	            if (delta === 0) return;
	        
	            if (s.params.mousewheelInvert) delta = -delta;
	        
	            if (!s.params.freeMode) {
	                if ((new window.Date()).getTime() - s.mousewheel.lastScrollTime > 60) {
	                    if (delta < 0) {
	                        if ((!s.isEnd || s.params.loop) && !s.animating) s.slideNext();
	                        else if (s.params.mousewheelReleaseOnEdges) return true;
	                    }
	                    else {
	                        if ((!s.isBeginning || s.params.loop) && !s.animating) s.slidePrev();
	                        else if (s.params.mousewheelReleaseOnEdges) return true;
	                    }
	                }
	                s.mousewheel.lastScrollTime = (new window.Date()).getTime();
	        
	            }
	            else {
	                //Freemode or scrollContainer:
	                var position = s.getWrapperTranslate() + delta * s.params.mousewheelSensitivity;
	                var wasBeginning = s.isBeginning,
	                    wasEnd = s.isEnd;
	        
	                if (position >= s.minTranslate()) position = s.minTranslate();
	                if (position <= s.maxTranslate()) position = s.maxTranslate();
	        
	                s.setWrapperTransition(0);
	                s.setWrapperTranslate(position);
	                s.updateProgress();
	                s.updateActiveIndex();
	        
	                if (!wasBeginning && s.isBeginning || !wasEnd && s.isEnd) {
	                    s.updateClasses();
	                }
	        
	                if (s.params.freeModeSticky) {
	                    clearTimeout(s.mousewheel.timeout);
	                    s.mousewheel.timeout = setTimeout(function () {
	                        s.slideReset();
	                    }, 300);
	                }
	                else {
	                    if (s.params.lazyLoading && s.lazy) {
	                        s.lazy.load();
	                    }
	                }
	        
	                // Return page scroll on edge positions
	                if (position === 0 || position === s.maxTranslate()) return;
	            }
	            if (s.params.autoplay) s.stopAutoplay();
	        
	            if (e.preventDefault) e.preventDefault();
	            else e.returnValue = false;
	            return false;
	        }
	        s.disableMousewheelControl = function () {
	            if (!s.mousewheel.event) return false;
	            s.container.off(s.mousewheel.event, handleMousewheel);
	            return true;
	        };
	        
	        s.enableMousewheelControl = function () {
	            if (!s.mousewheel.event) return false;
	            s.container.on(s.mousewheel.event, handleMousewheel);
	            return true;
	        };
	        

	        /*=========================
	          Parallax
	          ===========================*/
	        function setParallaxTransform(el, progress) {
	            el = $(el);
	            var p, pX, pY;
	            var rtlFactor = s.rtl ? -1 : 1;
	        
	            p = el.attr('data-swiper-parallax') || '0';
	            pX = el.attr('data-swiper-parallax-x');
	            pY = el.attr('data-swiper-parallax-y');
	            if (pX || pY) {
	                pX = pX || '0';
	                pY = pY || '0';
	            }
	            else {
	                if (s.isHorizontal()) {
	                    pX = p;
	                    pY = '0';
	                }
	                else {
	                    pY = p;
	                    pX = '0';
	                }
	            }
	        
	            if ((pX).indexOf('%') >= 0) {
	                pX = parseInt(pX, 10) * progress * rtlFactor + '%';
	            }
	            else {
	                pX = pX * progress * rtlFactor + 'px' ;
	            }
	            if ((pY).indexOf('%') >= 0) {
	                pY = parseInt(pY, 10) * progress + '%';
	            }
	            else {
	                pY = pY * progress + 'px' ;
	            }
	        
	            el.transform('translate3d(' + pX + ', ' + pY + ',0px)');
	        }
	        s.parallax = {
	            setTranslate: function () {
	                s.container.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
	                    setParallaxTransform(this, s.progress);
	        
	                });
	                s.slides.each(function () {
	                    var slide = $(this);
	                    slide.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function () {
	                        var progress = Math.min(Math.max(slide[0].progress, -1), 1);
	                        setParallaxTransform(this, progress);
	                    });
	                });
	            },
	            setTransition: function (duration) {
	                if (typeof duration === 'undefined') duration = s.params.speed;
	                s.container.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]').each(function(){
	                    var el = $(this);
	                    var parallaxDuration = parseInt(el.attr('data-swiper-parallax-duration'), 10) || duration;
	                    if (duration === 0) parallaxDuration = 0;
	                    el.transition(parallaxDuration);
	                });
	            }
	        };
	        

	        /*=========================
	          Plugins API. Collect all and init all plugins
	          ===========================*/
	        s._plugins = [];
	        for (var plugin in s.plugins) {
	            var p = s.plugins[plugin](s, s.params[plugin]);
	            if (p) s._plugins.push(p);
	        }
	        // Method to call all plugins event/method
	        s.callPlugins = function (eventName) {
	            for (var i = 0; i < s._plugins.length; i++) {
	                if (eventName in s._plugins[i]) {
	                    s._plugins[i][eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	                }
	            }
	        };

	        /*=========================
	          Events/Callbacks/Plugins Emitter
	          ===========================*/
	        function normalizeEventName (eventName) {
	            if (eventName.indexOf('on') !== 0) {
	                if (eventName[0] !== eventName[0].toUpperCase()) {
	                    eventName = 'on' + eventName[0].toUpperCase() + eventName.substring(1);
	                }
	                else {
	                    eventName = 'on' + eventName;
	                }
	            }
	            return eventName;
	        }
	        s.emitterEventListeners = {
	        
	        };
	        s.emit = function (eventName) {
	            // Trigger callbacks
	            if (s.params[eventName]) {
	                s.params[eventName](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	            }
	            var i;
	            // Trigger events
	            if (s.emitterEventListeners[eventName]) {
	                for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
	                    s.emitterEventListeners[eventName][i](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	                }
	            }
	            // Trigger plugins
	            if (s.callPlugins) s.callPlugins(eventName, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
	        };
	        s.on = function (eventName, handler) {
	            eventName = normalizeEventName(eventName);
	            if (!s.emitterEventListeners[eventName]) s.emitterEventListeners[eventName] = [];
	            s.emitterEventListeners[eventName].push(handler);
	            return s;
	        };
	        s.off = function (eventName, handler) {
	            var i;
	            eventName = normalizeEventName(eventName);
	            if (typeof handler === 'undefined') {
	                // Remove all handlers for such event
	                s.emitterEventListeners[eventName] = [];
	                return s;
	            }
	            if (!s.emitterEventListeners[eventName] || s.emitterEventListeners[eventName].length === 0) return;
	            for (i = 0; i < s.emitterEventListeners[eventName].length; i++) {
	                if(s.emitterEventListeners[eventName][i] === handler) s.emitterEventListeners[eventName].splice(i, 1);
	            }
	            return s;
	        };
	        s.once = function (eventName, handler) {
	            eventName = normalizeEventName(eventName);
	            var _handler = function () {
	                handler(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]);
	                s.off(eventName, _handler);
	            };
	            s.on(eventName, _handler);
	            return s;
	        };

	        // Accessibility tools
	        s.a11y = {
	            makeFocusable: function ($el) {
	                $el.attr('tabIndex', '0');
	                return $el;
	            },
	            addRole: function ($el, role) {
	                $el.attr('role', role);
	                return $el;
	            },
	        
	            addLabel: function ($el, label) {
	                $el.attr('aria-label', label);
	                return $el;
	            },
	        
	            disable: function ($el) {
	                $el.attr('aria-disabled', true);
	                return $el;
	            },
	        
	            enable: function ($el) {
	                $el.attr('aria-disabled', false);
	                return $el;
	            },
	        
	            onEnterKey: function (event) {
	                if (event.keyCode !== 13) return;
	                if ($(event.target).is(s.params.nextButton)) {
	                    s.onClickNext(event);
	                    if (s.isEnd) {
	                        s.a11y.notify(s.params.lastSlideMessage);
	                    }
	                    else {
	                        s.a11y.notify(s.params.nextSlideMessage);
	                    }
	                }
	                else if ($(event.target).is(s.params.prevButton)) {
	                    s.onClickPrev(event);
	                    if (s.isBeginning) {
	                        s.a11y.notify(s.params.firstSlideMessage);
	                    }
	                    else {
	                        s.a11y.notify(s.params.prevSlideMessage);
	                    }
	                }
	                if ($(event.target).is('.' + s.params.bulletClass)) {
	                    $(event.target)[0].click();
	                }
	            },
	        
	            liveRegion: $('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
	        
	            notify: function (message) {
	                var notification = s.a11y.liveRegion;
	                if (notification.length === 0) return;
	                notification.html('');
	                notification.html(message);
	            },
	            init: function () {
	                // Setup accessibility
	                if (s.params.nextButton && s.nextButton && s.nextButton.length > 0) {
	                    s.a11y.makeFocusable(s.nextButton);
	                    s.a11y.addRole(s.nextButton, 'button');
	                    s.a11y.addLabel(s.nextButton, s.params.nextSlideMessage);
	                }
	                if (s.params.prevButton && s.prevButton && s.prevButton.length > 0) {
	                    s.a11y.makeFocusable(s.prevButton);
	                    s.a11y.addRole(s.prevButton, 'button');
	                    s.a11y.addLabel(s.prevButton, s.params.prevSlideMessage);
	                }
	        
	                $(s.container).append(s.a11y.liveRegion);
	            },
	            initPagination: function () {
	                if (s.params.pagination && s.params.paginationClickable && s.bullets && s.bullets.length) {
	                    s.bullets.each(function () {
	                        var bullet = $(this);
	                        s.a11y.makeFocusable(bullet);
	                        s.a11y.addRole(bullet, 'button');
	                        s.a11y.addLabel(bullet, s.params.paginationBulletMessage.replace(/{{index}}/, bullet.index() + 1));
	                    });
	                }
	            },
	            destroy: function () {
	                if (s.a11y.liveRegion && s.a11y.liveRegion.length > 0) s.a11y.liveRegion.remove();
	            }
	        };
	        

	        /*=========================
	          Init/Destroy
	          ===========================*/
	        s.init = function () {
	            if (s.params.loop) s.createLoop();
	            s.updateContainerSize();
	            s.updateSlidesSize();
	            s.updatePagination();
	            if (s.params.scrollbar && s.scrollbar) {
	                s.scrollbar.set();
	                if (s.params.scrollbarDraggable) {
	                    s.scrollbar.enableDraggable();
	                }
	            }
	            if (s.params.effect !== 'slide' && s.effects[s.params.effect]) {
	                if (!s.params.loop) s.updateProgress();
	                s.effects[s.params.effect].setTranslate();
	            }
	            if (s.params.loop) {
	                s.slideTo(s.params.initialSlide + s.loopedSlides, 0, s.params.runCallbacksOnInit);
	            }
	            else {
	                s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit);
	                if (s.params.initialSlide === 0) {
	                    if (s.parallax && s.params.parallax) s.parallax.setTranslate();
	                    if (s.lazy && s.params.lazyLoading) {
	                        s.lazy.load();
	                        s.lazy.initialImageLoaded = true;
	                    }
	                }
	            }
	            s.attachEvents();
	            if (s.params.observer && s.support.observer) {
	                s.initObservers();
	            }
	            if (s.params.preloadImages && !s.params.lazyLoading) {
	                s.preloadImages();
	            }
	            if (s.params.autoplay) {
	                s.startAutoplay();
	            }
	            if (s.params.keyboardControl) {
	                if (s.enableKeyboardControl) s.enableKeyboardControl();
	            }
	            if (s.params.mousewheelControl) {
	                if (s.enableMousewheelControl) s.enableMousewheelControl();
	            }
	            if (s.params.hashnav) {
	                if (s.hashnav) s.hashnav.init();
	            }
	            if (s.params.a11y && s.a11y) s.a11y.init();
	            s.emit('onInit', s);
	        };
	        
	        // Cleanup dynamic styles
	        s.cleanupStyles = function () {
	            // Container
	            s.container.removeClass(s.classNames.join(' ')).removeAttr('style');
	        
	            // Wrapper
	            s.wrapper.removeAttr('style');
	        
	            // Slides
	            if (s.slides && s.slides.length) {
	                s.slides
	                    .removeClass([
	                      s.params.slideVisibleClass,
	                      s.params.slideActiveClass,
	                      s.params.slideNextClass,
	                      s.params.slidePrevClass
	                    ].join(' '))
	                    .removeAttr('style')
	                    .removeAttr('data-swiper-column')
	                    .removeAttr('data-swiper-row');
	            }
	        
	            // Pagination/Bullets
	            if (s.paginationContainer && s.paginationContainer.length) {
	                s.paginationContainer.removeClass(s.params.paginationHiddenClass);
	            }
	            if (s.bullets && s.bullets.length) {
	                s.bullets.removeClass(s.params.bulletActiveClass);
	            }
	        
	            // Buttons
	            if (s.params.prevButton) $(s.params.prevButton).removeClass(s.params.buttonDisabledClass);
	            if (s.params.nextButton) $(s.params.nextButton).removeClass(s.params.buttonDisabledClass);
	        
	            // Scrollbar
	            if (s.params.scrollbar && s.scrollbar) {
	                if (s.scrollbar.track && s.scrollbar.track.length) s.scrollbar.track.removeAttr('style');
	                if (s.scrollbar.drag && s.scrollbar.drag.length) s.scrollbar.drag.removeAttr('style');
	            }
	        };
	        
	        // Destroy
	        s.destroy = function (deleteInstance, cleanupStyles) {
	            // Detach evebts
	            s.detachEvents();
	            // Stop autoplay
	            s.stopAutoplay();
	            // Disable draggable
	            if (s.params.scrollbar && s.scrollbar) {
	                if (s.params.scrollbarDraggable) {
	                    s.scrollbar.disableDraggable();
	                }
	            }
	            // Destroy loop
	            if (s.params.loop) {
	                s.destroyLoop();
	            }
	            // Cleanup styles
	            if (cleanupStyles) {
	                s.cleanupStyles();
	            }
	            // Disconnect observer
	            s.disconnectObservers();
	            // Disable keyboard/mousewheel
	            if (s.params.keyboardControl) {
	                if (s.disableKeyboardControl) s.disableKeyboardControl();
	            }
	            if (s.params.mousewheelControl) {
	                if (s.disableMousewheelControl) s.disableMousewheelControl();
	            }
	            // Disable a11y
	            if (s.params.a11y && s.a11y) s.a11y.destroy();
	            // Destroy callback
	            s.emit('onDestroy');
	            // Delete instance
	            if (deleteInstance !== false) s = null;
	        };
	        
	        s.init();
	        

	    
	        // Return swiper instance
	        return s;
	    };
	    

	    /*==================================================
	        Prototype
	    ====================================================*/
	    Swiper.prototype = {
	        isSafari: (function () {
	            var ua = navigator.userAgent.toLowerCase();
	            return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
	        })(),
	        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
	        isArray: function (arr) {
	            return Object.prototype.toString.apply(arr) === '[object Array]';
	        },
	        /*==================================================
	        Browser
	        ====================================================*/
	        browser: {
	            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
	            ieTouch: (window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1) || (window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1)
	        },
	        /*==================================================
	        Devices
	        ====================================================*/
	        device: (function () {
	            var ua = navigator.userAgent;
	            var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/);
	            var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
	            var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
	            var iphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/);
	            return {
	                ios: ipad || iphone || ipod,
	                android: android
	            };
	        })(),
	        /*==================================================
	        Feature Detection
	        ====================================================*/
	        support: {
	            touch : (window.Modernizr && Modernizr.touch === true) || (function () {
	                return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
	            })(),
	    
	            transforms3d : (window.Modernizr && Modernizr.csstransforms3d === true) || (function () {
	                var div = document.createElement('div').style;
	                return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
	            })(),
	    
	            flexbox: (function () {
	                var div = document.createElement('div').style;
	                var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
	                for (var i = 0; i < styles.length; i++) {
	                    if (styles[i] in div) return true;
	                }
	            })(),
	    
	            observer: (function () {
	                return ('MutationObserver' in window || 'WebkitMutationObserver' in window);
	            })()
	        },
	        /*==================================================
	        Plugins
	        ====================================================*/
	        plugins: {}
	    };
	    

	    /*===========================
	     Get jQuery
	     ===========================*/
	    
	    addLibraryPlugin($);
	    
	    var domLib = $;

	    /*===========================
	    Add .swiper plugin from Dom libraries
	    ===========================*/
	    function addLibraryPlugin(lib) {
	        lib.fn.swiper = function (params) {
	            var firstInstance;
	            lib(this).each(function () {
	                var s = new Swiper(this, params);
	                if (!firstInstance) firstInstance = s;
	            });
	            return firstInstance;
	        };
	    }
	    
	    if (domLib) {
	        if (!('transitionEnd' in domLib.fn)) {
	            domLib.fn.transitionEnd = function (callback) {
	                var events = ['webkitTransitionEnd', 'transitionend', 'oTransitionEnd', 'MSTransitionEnd', 'msTransitionEnd'],
	                    i, j, dom = this;
	                function fireCallBack(e) {
	                    /*jshint validthis:true */
	                    if (e.target !== this) return;
	                    callback.call(this, e);
	                    for (i = 0; i < events.length; i++) {
	                        dom.off(events[i], fireCallBack);
	                    }
	                }
	                if (callback) {
	                    for (i = 0; i < events.length; i++) {
	                        dom.on(events[i], fireCallBack);
	                    }
	                }
	                return this;
	            };
	        }
	        if (!('transform' in domLib.fn)) {
	            domLib.fn.transform = function (transform) {
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransform = elStyle.MsTransform = elStyle.msTransform = elStyle.MozTransform = elStyle.OTransform = elStyle.transform = transform;
	                }
	                return this;
	            };
	        }
	        if (!('transition' in domLib.fn)) {
	            domLib.fn.transition = function (duration) {
	                if (typeof duration !== 'string') {
	                    duration = duration + 'ms';
	                }
	                for (var i = 0; i < this.length; i++) {
	                    var elStyle = this[i].style;
	                    elStyle.webkitTransitionDuration = elStyle.MsTransitionDuration = elStyle.msTransitionDuration = elStyle.MozTransitionDuration = elStyle.OTransitionDuration = elStyle.transitionDuration = duration;
	                }
	                return this;
	            };
	        }
	    }

		return Swiper;
	}));



/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery Cookie Plugin v1.4.1
	 * https://github.com/carhartl/jquery-cookie
	 *
	 * Copyright 2006, 2014 Klaus Hartl
	 * Released under the MIT license
	 */
	(function (factory) {
	    if (true) {
	        // AMD (Register as an anonymous module)
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(3)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if(typeof define === 'function') {
	        // Node/CommonJS
	        // console.log('CommonJS')
	        define(['jquery'], function(){
	            return factory(jQuery);
	        })

	    } else {
	        // Browser globals
	        factory(jQuery);
	    }
	}(function ($) {
	    var pluses = /\+/g;

	    function encode(s) {
	        return config.raw ? s : encodeURIComponent(s);
	    }

	    function decode(s) {
	        return config.raw ? s : decodeURIComponent(s);
	    }

	    function stringifyCookieValue(value) {
	        return encode(config.json ? JSON.stringify(value) : String(value));
	    }

	    function parseCookieValue(s) {
	        if (s.indexOf('"') === 0) {
	            // This is a quoted cookie as according to RFC2068, unescape...
	            s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
	        }

	        try {
	            // Replace server-side written pluses with spaces.
	            // If we can't decode the cookie, ignore it, it's unusable.
	            // If we can't parse the cookie, ignore it, it's unusable.
	            s = decodeURIComponent(s.replace(pluses, ' '));
	            return config.json ? JSON.parse(s) : s;
	        } catch(e) {}
	    }

	    function read(s, converter) {
	        var value = config.raw ? s : parseCookieValue(s);
	        return $.isFunction(converter) ? converter(value) : value;
	    }

	    var config = $.cookie = function (key, value, options) {

	        // Write

	        if (arguments.length > 1 && !$.isFunction(value)) {
	            options = $.extend({}, config.defaults, options);

	            if (typeof options.expires === 'number') {
	                var days = options.expires, t = options.expires = new Date();
	                t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
	            }

	            return (document.cookie = [
	                encode(key), '=', stringifyCookieValue(value),
	                options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
	                options.path    ? '; path=' + options.path : '',
	                options.domain  ? '; domain=' + options.domain : '',
	                options.secure  ? '; secure' : ''
	            ].join(''));
	        }

	        // Read

	        var result = key ? undefined : {},
	        // To prevent the for loop in the first place assign an empty array
	        // in case there are no cookies at all. Also prevents odd result when
	        // calling $.cookie().
	            cookies = document.cookie ? document.cookie.split('; ') : [],
	            i = 0,
	            l = cookies.length;

	        for (; i < l; i++) {
	            var parts = cookies[i].split('='),
	                name = decode(parts.shift()),
	                cookie = parts.join('=');

	            if (key === name) {
	                // If second argument (value) is a function it's a converter...
	                result = read(cookie, value);
	                break;
	            }

	            // Prevent storing a cookie that we couldn't decode.
	            if (!key && (cookie = read(cookie)) !== undefined) {
	                result[name] = cookie;
	            }
	        }

	        return result;
	    };

	    config.defaults = {};

	    $.removeCookie = function (key, options) {
	        // Must not alter options, thus extending a fresh object...
	        $.cookie(key, '', $.extend({}, options, { expires: -1 }));
	        return !$.cookie(key);
	    };

	}));

/***/ }
/******/ ]);