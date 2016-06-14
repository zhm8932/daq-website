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
                $(arr).parent().addClass('on').siblings().removeClass('on')
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