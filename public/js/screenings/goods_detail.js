define(function(require){
    var config = require('../config');
    var utils = require('../libs/utils.js');

    require('touchslider');

    $(function(){
        var address = JSON.parse($('#locals_address').val());
        var oTypes = $('#transmit-type .type');
        var isNeedArea = true;
        oTypes.each(function(index,ele){
            var $this = $(ele);
            $this.on('click',function(){
                oTypes.removeClass('on');
                $this.addClass('on');
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
            currentClass: "on", // current 样式指定
            prev: ".prev", // prev 样式指定
            // scroller: viewport.children(),
            autoplay: false, // 自动播放
            viewport: ".touchslider-viewport"  //内容区域
        });


        $('#addCartBtn').on('click',function(){
            addToCart();
        });

        $('#toOrder').on('click',function(){
            toOrder();
        });
    });

    function toOrder() {
        if(!checkArea()){
            utils.AlertTip('fail','所选城市不在该商品销售区域,请重新选择');
            return false;
        }
        var accountId = utils.GetCookie('accountId');
        if(!accountId){
            utils.showLogin();
            return false;
        }
        var items = [];
        var goods = $('#goods');
        var item = {};

        var OTransmitType =  $('#transmit-type .type.on');
        if(OTransmitType.length == 0){
            utils.AlertTip('fail','请选择服务方式');
            return false;
        }
        item.transmitType = OTransmitType.attr('data-transmitType');
        var favPrice = OTransmitType.attr('data-favPrice');
        var subTotal = parseInt(goods.attr('data-discountPrice'))-parseInt(favPrice);
        item.favPrice = favPrice;
        item.subTotal = subTotal;

        var address = JSON.parse($('#locals_address').val());
        if(OTransmitType.attr('data-transmitType') == 'sampling_home'){
            var area = $('#area').val();
            address.push(area);
        }
        item.address = JSON.stringify(address);

        item.goodsId = goods.attr('data-id');
        item.imgUrl = goods.attr('data-imgUrl');
        item.goodsName = goods.attr('data-goodsName');
        item.discountPrice = goods.attr('data-discountPrice');
        items.push(item);

        $('#submitForm input[name=items]').val(JSON.stringify(items));
        $('#submitForm input[name=totalPrice]').val(subTotal);
        $('#submitForm').submit();
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
                    optionArr.push('<option value='+JSON.stringify(category)+'>'+category.name+'</option>');
                }
                $('#'+options.id).html(optionArr.join(''));
                options.fun && options.fun();
            }
        });
    }

    function addToCart(){
        utils.CheckLogin(function(){
            if(!checkArea()){
                utils.AlertTip('fail','所选城市不在该商品销售区域,请重新选择');
                return false;
            }
            var OTransmitType =  $('#transmit-type .type.on');
            if(OTransmitType.length == 0){
                utils.AlertTip('fail','请选择服务方式');
                return false;
            }
            var transmitValue = OTransmitType.attr('data-value');
            var address = JSON.parse($('#locals_address').val());
            if(OTransmitType.attr('data-transmitType') == 'sampling_home'){
                var area = $('#area').val();
                address.push(JSON.parse(area));
            }

            var goodsId = $('#goods').attr('data-id');
            var param = {
                "address":JSON.stringify(address),
                "transmit_type":transmitValue,
                "goodsId": goodsId
            };

            utils.SendAjax({
                url: '/trade/cart/addItem',
                param: param,
                method: 'POST',
                tipText: '加入购物车',
                callback: function (result) {
                    if(result.needLogin){
                        utils.showLogin();
                    }else{
                        utils.AlertTip('success','加入购物车成功');
                    }
                }
            });
        });
    }


    function checkArea(){
        var locals_address = JSON.parse($('#locals_address').val());
        var fit_area = JSON.parse($('#fit_area').val());
        var currentCityId = locals_address[1].categoryId;
        for(var i = 0; i < fit_area.length; i++){
            var a = fit_area[i].categoryId;
            if(fit_area[i].categoryId == currentCityId){
                return true;
            }
        }
        return false;

    }

});