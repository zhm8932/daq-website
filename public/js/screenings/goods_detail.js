define(function(require){
    var config = require('../config');
    var utils = require('../utils.js');

    require('touchslider');

    $(function(){
        var address = JSON.parse($('#locals_address').val());
        var oTypes = $('#transmit-type .type');
        var isSampleHome = false;
        oTypes.each(function(index,ele){
            var $this = $(ele);
            $this.on('click',function(){
                oTypes.removeClass('on');
                $this.addClass('on');
                if($this.attr('data-transmitType') == 'sampling_home'){
                    isSampleHome = true;
                    $('#area').removeClass('none');
                }else{
                    isSampleHome = false;
                    $('#area').addClass('none');
                }
            });
        });

        //获取区域
        // var parentId = address[1].categoryId;
        // getAddress({
        //     id:'area',
        //     url:'/dic/list/parentId',
        //     param:{activeState:1,parentId:parentId}
        // });

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


        $('.addCartBtn').on('click',function(){
            var transmitValue = oTypes.filter('.on').attr('data-value');
            var goodsId = $('#goodsId').val();

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

        });

    });

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
    

});