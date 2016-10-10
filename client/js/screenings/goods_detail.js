define(function(require){
    var config = require('../config');
    var login = require('../login');
    var utils = require('../libs/utils.js');

    require('touchslider');

    console.log("login:")


    console.log(1111);

    //
    //
    // function changeHeight(obj){
    //     console.log(masterImg.height());
    //     $('.touchslider-viewport').css('height',masterImg.height());
    // }

    $(function(){
        require('../imgAuto');


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


        $('.goods_basic .bd').css('height','0px');
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




    });

    window.onload = function(){
        //滚动时导航锁定在顶部
        var tab = $('.goods_detail #tab');
        var topBarHeight = $('.topBar').height();
        var orignTop = tab.offset().top;
        // var width = tab.closest('.wrapper').width();
        var width = $('.tab').width();
        $(window).scroll(function(){
            if($(document).scrollTop() + topBarHeight > orignTop){
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
            $('#addCartBtn').addClass('disabled').off('click');
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
                    $('#addCartBtn').removeClass('disabled').on('click',addToCart);
                },
                errorFun:function(){
                    $('#addCartBtn').removeClass('disabled').on('click',addToCart);
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

});