define(function(require){
    var config = require('../config');
    var utils = require('../utils.js');

    require('touchslider');

    $(function(){
        var address = JSON.parse($('#locals_address').val());
        var oTypes = $('#transmit-type .type');
        var isSampleHome = false;
        var isNeedArea = true;
        oTypes.each(function(index,ele){
            var $this = $(ele);
            $this.on('click',function(){
                oTypes.removeClass('on');
                $this.addClass('on');
                $('#goods').data('transmitType',);
                if($this.attr('data-transmitType') == 'sampling_home'){
                    isSampleHome = true;
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
                    isSampleHome = false;
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
            addToCart(oTypes,isSampleHome,address);
        });

        $('#toOrder').on('click',function(){
            toOrder();
        });
    });

    function toOrder() {
        var items = [];
        var operation = $(ele).closest('.table-tr').find('.operation');
        var item = {};
        item.id = operation.attr('data-id');
        item.goodsId = operation.attr('data-goodsId');
        item.imgUrl = operation.attr('data-imgUrl');
        item.goodsName = operation.attr('data-goodsName');
        item.discountPrice = operation.attr('data-discountPrice');
        item.transmitType = operation.attr('data-transmitType');
        item.address = operation.attr('data-address');
        item.subTotal = operation.attr('data-subTotal');
        item.favPrice = operation.attr('data-favPrice');
        items.push(item);

        $('#submitForm input[name=items]').val(JSON.stringify(items));
        $('#submitForm input[name=totalPrice]').val(totalPrice);
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

    function addToCart(oTypes,isSampleHome,address){
        var transmitValue = oTypes.filter('.on').attr('data-value');
        var goodsId = $('#goods').data('id');

        if(isSampleHome){
            var area = $('#area').val();
            address.push(area);
        }

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
                utils.AlertTip('success','加入购物车成功');
            }
        });

    }

});