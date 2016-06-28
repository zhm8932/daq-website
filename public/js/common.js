define(function(require, exports, module){
    // require('jquery');
    require('lazyload');
    require('./login');
    var utils = require('./libs/utils.js');
    var Swiper = require('./libs/swiper.jquery.umd');
    var BMap = require('./libs/BMap.js');
    require('cookie');
    // console.log(BMap)

    $(function () {
        var $body = $('body');
        // 百度地图API功能
        function getLocalCity() {
            var map = new BMap.Map('choosed-city-id');
            var point = new BMap.Point(116.331398,39.897445);
            map.centerAndZoom(point,12);

            function myFun(result){
                // console.log("result:",result)
                cityName = result.name;
                map.setCenter(cityName);
                console.log("当前定位城市:"+cityName);
                getCityList(cityName,function (newArr) {
                    // console.log("newArr:",newArr)
                    var is_locals_city= $.cookie('locals_city');
                    // console.log("is_locals_city:",is_locals_city)
                    if(!is_locals_city&&newArr.length){
                        console.log("初始化定位城市:",newArr[0]);
                        changeCity(newArr[0])
                    }
                    if(newArr.length){
                        $.cookie('locals_city', newArr[0].parentId,{path:"/"}); // 存储 cookie
                    }




                })
                // changeCity(cityName)
                return cityName
            }
            var myCity = new BMap.LocalCity();
            var cityName = myCity.get(myFun);
        }

        getLocalCity();

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

        });

        // $('.city-name').on('click',function(e){
        //     e.stopPropagation();
        //     var $this = $(this);
        //     var OChooseCity = $this.find('.choose-city');
        //     if(OChooseCity.css('display') == 'none'){
        //         OChooseCity.fadeIn();
        //         console.log(OChooseCity.data('load'));
        //         var data = OChooseCity.data('load')
        //         if(data === 'first'){
        //             getCityList();
        //             OChooseCity.data('load','non-first');
        //         }
        //     }
        // });
        $('.city-name').hover(function (e) {
            e.stopPropagation();
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
        $(window).on('click',function(){
            var OChooseCity = $('.city-name .choose-city');
            if(OChooseCity.css('display') != 'none') {
                OChooseCity.fadeOut();
            }
        });


        $("section img").lazyload({
            effect : "fadeIn"
        });

        $body.on('click','.gotoTop',function () {
            // $(window).scrollTop(0);
            $('body,html').animate({scrollTop:0},600)
        });

        var winHeight = $(window).height();
        $gotoTop = $('.gotoTop');
        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            if(scrollTop>winHeight/2){
                $gotoTop.show()
            }else{
                $gotoTop.fadeOut(700)
            }
        });

        //tab切换
        require('./libs/tab')('.tab li');

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
            $nav.removeClass('swiper-container');
        }
        $(window).resize(function () {
            winWidth = $(window).width();
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
                $nav.removeClass('swiper-container');
            }
        })
    })

    var curCityArr = '';
    function getCityList(cityName,callback){
        var cityName = cityName;
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
                        cityHtml += '<a href="#" class="city on">'+city.name+'</a>';
                    }else{
                        cityHtml += '<a href="#" class="city">'+city.name+'</a>';
                    }
                }

                $('.city-list').html(cityHtml);
                var citys = $('.city-list .city');
                for(var i = 0; i < data.length; i++){
                    citys.eq(i).data('city',data[i]).on('click',function(){
                        changeCity($(this));
                    });
                }

                newArr= data.filter(function (item) {
                    // return item.name == '南京'
                    return item.name == cityName
                })
                // console.log("过滤后的data：",newArr)
                callback&&callback(newArr)
            },
            errorFun: function (result) {

            }
        });
    }

    function changeCity($this){
        // var city = $this=='string'? $this: $this.data&&$this.data('city');
        var city =$this.hasClass&&$this.hasClass('city')&&$this.data('city')||$this;
        console.log('city:',city)
        utils.SendAjax({
            url: '/changeCity',
            param: {city:city},
            method: 'GET',
            tipText: '切换城市',
            callback: function (result) {

                window.location.reload();
                // console.log("$(this).text():",city.name)
                // $('.city-name em').html(city.name)
            },
            errorFun: function (result) {

            }
        });
    }



});