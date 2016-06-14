define(function(require, exports, module){
    require('lazyload');
    require('./login');
    var utils = require('./libs/utils.js');
    var Swiper = require('./libs/swiper.jquery.umd');
    $(function () {
        var $body = $('body');

        var location = window.location;
        var curPathname = location.pathname;
        var $nav_A = $('.nav li a');
        var href = '';

        $.each($nav_A,function (index,arr) {
            href = $(arr).attr('href');
            if(curPathname.search(href)!=-1){
                $(arr).parent().addClass('on').siblings().removeClass()
            }

        });

        $("section img").lazyload({
            effect : "fadeIn"
        });

        $body.on('click','.gotoTop',function () {
            // $(window).scrollTop(0);
            $('body,html').animate({scrollTop:0},600)
        });

        var winHeight = $(window).height()
        $gotoTop = $('.gotoTop')
        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop()
            if(scrollTop>winHeight/2){
                $gotoTop.show()
            }else{
                $gotoTop.fadeOut(700)
            }
        });

        $('.city-name').on('click',function(e){
            e.stopPropagation();
            var $this = $(this);
            var OChooseCity = $this.find('.choose-city');
            if(OChooseCity.css('display') == 'none'){
                OChooseCity.fadeIn();
                console.log(OChooseCity.data('load'));
                var data = OChooseCity.data('load')
                if(data === 'first'){
                    getCityList();
                    OChooseCity.data('load','non-first');
                }
            }
        });

        $(window).on('click',function(){
            var OChooseCity = $('.city-name .choose-city');
            if(OChooseCity.css('display') != 'none') {
                OChooseCity.fadeOut();
            }
        });


        //tab切换
        require('./libs/tab')('.tab li')

        $('.date-time').each(function(index,ele){
            var $this = $(ele);
            var timestamp = parseInt($this.html());
            var time = utils.getLoacalDateAndTime(timestamp);
            $this.html(time);
        });

        $('.date').each(function(index,ele){
            var $this = $(ele);
            var timestamp = parseInt($this.html());
            var time = utils.GetLoacalDateString(timestamp);
            $this.html(time);
        });
    });

    function getCityList(){
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
                        cityHtml += '<span class="city on">'+city.name+'</span>';
                    }else{
                        cityHtml += '<span class="city">'+city.name+'</span>';
                    }
                }

                $('.city-list').html(cityHtml);
                var citys = $('.city-list .city');

                for(var i = 0; i < data.length; i++){
                    citys.eq(i).data('city',data[i]).on('click',function(){
                        changeCity($(this));
                    });
                }
            },
            errorFun: function (result) {

            }
        });
    }

    function changeCity($this){
        var city = $this.data('city');
        utils.SendAjax({
            url: '/changeCity',
            param: {city:city},
            method: 'GET',
            tipText: '切换城市',
            callback: function (result) {
                window.location.reload();
            },
            errorFun: function (result) {

            }
        });
    }


        var winWidth = $(window).width();
        var $nav = $('.nav').find('.wrapper')
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

    
});