webpackJsonp([15],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(306);
	module.exports = __webpack_require__(7);


/***/ },

/***/ 296:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require,exports,module) {
	    module.exports = {
	        "host": "localhost",
	        "port":"8080",
	        "hostname": "http://120.76.24.129",
	        "appKey": "T-OPF-02191317",
	        "secret":"themis-opf-test",
	        "v":"1.0.0",
	        "format":"json"
	    }
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function (require) {
	    $(function () {
	        var $article = $('.health_detail article,.goods_detail article');
	        var articleWidth = $article.width();
	        $.each($article.find('img'),function (index,item) {
	            var img = $(this);
	            var realWidth;//真实的宽度
	            var realHeight;//真实的高度
	            //这里做下说明，$("<img/>")这里是创建一个临时的img标签，类似js创建一个new Image()对象！

	            $("<img/>").attr("src", $(img).attr("src")).load(function () {
	                realWidth = this.width;
	                realHeight = this.height;
	                // console.log('realWidth:',realWidth);
	                //如果真实的宽度大于浏览器的宽度就按照100%显示
	                if (realWidth >= articleWidth) {
	                    $(img).css("width", "100%").css("height", "auto");
	                }
	                else {//如果小于浏览器的宽度按照原尺寸显示
	                    $(img).css("width", realWidth + 'px').css("height", realHeight + 'px');
	                }



	            })
	        })
	    })
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ },

/***/ 306:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_RESULT__ = function(require){
	    var config = __webpack_require__(296);
	    var login = __webpack_require__(9);
	    var utils = __webpack_require__(4);

	    __webpack_require__(5);

	    // //console.log("login:",login)
	    $(function(){
	        __webpack_require__(299);
	        if(checkArea()){
	            $('#addCartBtn').on('click',function(){
	                addToCart();
	            });

	            $('#toOrder').on('click',function(){
	                toOrder();
	            });
	        }
	        //取样方式
	        var $span = $('.service_type span');
	        var len = $span.length;
	        var $serviceParent = $span.parents('.service_type_wrapper');
	        //console.log("len:",len)
	        //console.log("$serviceParent:",$serviceParent);
	        if(len==1){
	            $serviceParent.addClass('service_type_one')
	        }else if(len==2){
	            $serviceParent.addClass('service_type_two')
	        }else{
	            $serviceParent.addClass('service_type_three')
	        }

	        //锚点作用
	        $('.goods_detail .tab span').on('click',function(){
	            var anchorTop = 0;
	            var topBarHeight = $('.topBar').height();
	            var tab = $('.goods_detail .tab');
	            var tabHeight = tab.height();
	            var top = topBarHeight + tabHeight;
	            var $this = $(this);
	            var id = $this.data('href-id');
	            anchorTop = $('#'+id).offset().top - top;
	            if(id == 'content-detail'){
	                anchorTop = $('#'+id).offset().top - top ;
	            }
	            //console.log('top:'+top+'----offsetTop:'+$('#'+id).offset().top+'---height:'+anchorTop);
	            $('html,body').animate({scrollTop:anchorTop}, 1000);
	        });



	        //选择服务方式
	        var address = JSON.parse($('#locals_address').val());
	        var oTypes = $('#transmit-type .type');
	        var isNeedArea = true;
	        oTypes.each(function(index,ele){
	            var $this = $(ele);
	            $this.on('click',function(){
	                oTypes.removeClass('on');
	                $this.addClass('on');
	                $('.type-box').removeClass('unchoose');
	                var transmitType = $this.attr('data-transmitType');
	                if(transmitType == 'sampling_home'){
	                    $('#area').removeClass('none');
	                    if(isNeedArea){
	                        //获取区域
	                        var parentId = address[1].categoryId;
	                        getAddress({
	                            id:'area',
	                            url:'/dic/list/parentId',
	                            param:{activeState:1,parentId:parentId}
	                        });
	                        isNeedArea = false;
	                    }
	                }else{
	                    $('#area').addClass('none');
	                }
	            });
	        });
	        //叉掉提示
	        $('.type-box .box-header .close').on('click',function(){
	            $('.type-box').removeClass('unchoose');
	        });
	        


	        // getAddress({
	        //     id:'province',
	        //     url:'/dic/list/typeAndLevel',
	        //     param:{activeState:1,type:'district',level:'1'},
	        //     fun:function(){
	        //         $('#province').trigger('change');
	        //     }
	        // });
	        //
	        //
	        // $('#province').on('change',function(){
	        //     var proId = JSON.parse($('#province').val()).id;
	        //     getAddress({
	        //         id:'city',
	        //         url:'/dic/list/parentId',
	        //         param:{activeState:1,parentId:proId},
	        //         fun:function(){
	        //             $('#city').trigger('change');
	        //         }
	        //     });
	        // });
	        //
	        // $('#city').on('change',function(){
	        //     var parentId = JSON.parse($('#city').val()).id;
	        //     getAddress({
	        //         id:'area',
	        //         url:'/dic/list/parentId',
	        //         param:{activeState:1,parentId:parentId}
	        //     });
	        // });



	        $(".slideBox").touchSlider({
	            container: this,
	            duration: 350, // 动画速度
	            delay: 3000, // 动画时间间隔
	            margin: 5,
	            mouseTouch: true,
	            namespace: "touchslider",
	            next: ".next", // next 样式指定
	            pagination: ".tit span",
	            heightType:true,
	            currentClass: "on", // current 样式指定
	            prev: ".prev", // prev 样式指定
	            // scroller: viewport.children(),
	            autoplay: false, // 自动播放
	            viewport: ".touchslider-viewport"  //内容区域
	        });

	    });

	    window.onload = function(){
	        //滚动时导航锁定在顶部
	        var tab = $('.goods_detail #tab');
	        tab.attr('data-orign-top',tab.offset().top);//得到初始高度
	        // var wrapperWidth = $('.wrapper').width();
	        var width = tab.closest('.wrapper').width();
	        //console.log('width:'+width);
	        $(document).scroll(function(){
	            var topBarHeight = $('.topBar').height();
	            var tab = $('.goods_detail #tab');

	            if($(document).scrollTop() + topBarHeight > tab.attr('data-orign-top') ){
	                tab.css('position','fixed').css({'top':topBarHeight+'px','width':width});
	                $('#tab-copy').removeClass('none');
	            }else{
	                tab.css('position','static').css('width',width+'px');
	                $('#tab-copy').addClass('none');
	            }
	        });
	    };


	    function toOrder() {
	        checkCondition(function() {
	            var items = [];
	            var goods = $('#goods');
	            var item = {};

	            var OTransmitType = $('#transmit-type .type.on');
	            item.transmitType = OTransmitType.attr('data-transmitType');
	            var favPrice = OTransmitType.attr('data-favPrice');
	            var subTotal = parseInt(goods.attr('data-discountPrice')) + parseInt(favPrice);
	            item.favPrice = favPrice;
	            item.subTotal = subTotal;

	            var address = JSON.parse($('#locals_address').val());
	            if (OTransmitType.attr('data-transmitType') == 'sampling_home') {
	                var area = $('#area .option.active').data('area');
	                address.push(area);
	            }
	            item.address = JSON.stringify(address);

	            item.goodsId = goods.attr('data-id');
	            item.imgUrl = goods.attr('data-imgUrl');
	            item.goodsName = goods.attr('data-goodsName');
	            item.discountPrice = goods.attr('data-discountPrice');
	            item.hospital = $('#hospital').val();
	            items.push(item);

	            $('#submitForm input[name=items]').val(JSON.stringify(items));
	            $('#submitForm input[name=totalPrice]').val(subTotal);
	            $('#submitForm').submit();
	        });
	    }

	    function getAddress(options){
	        utils.SendAjax({
	            url: options.url,
	            param: options.param,
	            method: 'GET',
	            tipText: '获取地址',
	            callback: function (result) {
	                var data = result.data;
	                var optionArr = [];
	                for(var i = 0; i < data.length; i++){
	                    var category = {};
	                    category.id = data[i].id;
	                    category.name = data[i].name;
	                    category.level = data[i].level;
	                    if(i == 0){
	                        optionArr.push('<li class="option active" data-area='+JSON.stringify(category)+'>'+category.name+'</li>');
	                    }else{
	                        optionArr.push('<li class="option" data-area='+JSON.stringify(category)+'>'+category.name+'</li>');
	                    }
	                }
	                $('#'+options.id+' .options').html(optionArr.join(''));
	                if(data.length <= 0){
	                    $('#'+options.id+' .selected .text').html('暂无区域');
	                }else{
	                    $('#'+options.id+' .selected .text').html(data[0].name);
	                }
	                options.fun && options.fun();
	            }
	        });
	    }

	    function addToCart(){
	        checkCondition(function(){
	            var OTransmitType =  $('#transmit-type .type.on');

	            var transmitValue = OTransmitType.attr('data-value');
	            var address = JSON.parse($('#locals_address').val());
	            if(OTransmitType.attr('data-transmitType') == 'sampling_home'){
	                var area = $('#area .option.active').data('area');
	                address.push(area);
	            }

	            // var hospital = {
	            //     "hospitalCode": "H1001",
	            //     "hospitalName": "都安全健康产业（深圳市南山区门诊部)"
	            // };

	            var goodsId = $('#goods').attr('data-id');
	            var param = {
	                "address":JSON.stringify(address),
	                "transmit_type":transmitValue,
	                "goodsId": goodsId,
	                "hospital":$('#hospital').val()
	            };

	            utils.SendAjax({
	                url: '/trade/cart/addItem',
	                param: param,
	                method: 'POST',
	                tipText: '加入购物车',
	                callback: function (result) {
	                    var myMsg = new utils.MsgShow({
	                        delayTime:2000,
	                        title:'<i class="icon"></i>加入购物车成功!',
	                        otherBox:'successBox'
	                    }).hideMsg();
	                    //-login.getCartCount();
	                    login.cartCoutAddOne()
	                    
	                }
	            });
	        });

	    }

	    function checkCondition(callBack){
	        //CheckLogin传入两个函数,第一个函数为检查登录为true时执行的方法
	        login.CheckLogin(function() {
	            if (!checkArea()) {
	                return false;
	            }
	            var OTransmitType = $('#transmit-type .type.on');
	            if (OTransmitType.length == 0) {
	                $('.type-box').addClass('unchoose');
	                return false;
	            }
	            callBack && callBack();
	        });
	    }

	    function checkArea(){
	        var locals_address,fit_hospital;
	        try{
	            locals_address = JSON.parse($('#locals_address').val());
	            fit_hospital = JSON.parse($('#fit_hospital').val());
	        }catch(e){
	            //console.log(e);
	            return false;
	        }
	        var currentCityId = locals_address[1].categoryId;
	        for(var i = 0; i < fit_hospital.length; i++){
	            var item = fit_hospital[i];
	            if(item.city == currentCityId){
	                $('#hospitalName').text(item.hospitalName);
	                var hospital = {
	                    hospitalCode:item.hospitalCode,
	                    hospitalName:item.hospitalName
	                };
	                $('#hospital').val(JSON.stringify(hospital));
	                return true;
	            }
	        }
	        $('.submitBox button').addClass('disabled');
	        $('.hospital-tip').removeClass('none');
	        return false;
	    }

	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }

});