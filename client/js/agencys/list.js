require('jquery');
var utils = require('../libs/utils')

var Swiper = require('swiper');
$(function () {

    var location = window.location;
        curPathname = location.pathname,
        $agency_nav = $('.agency_nav'),
        $agency_a = $agency_nav.find('a');
    $.each($agency_a,function (index,item) {
        // console.log($(item).text(),":",$(item).attr('href'))
        if($(item).attr('href')==curPathname){
            $(item).addClass('on').siblings().removeClass('on');
        }
    });

    if(utils.browser.mobile){
        var winW = $(window).width();

        $agency_nav.find('span').addClass('swiper-slide');
        $agency_nav.wrapInner("<div class='swiper-wrapper'></div>");
        var i=0;

        if(sessionStorage.getItem('i')){
            i=sessionStorage&&sessionStorage.getItem('i')
        }
        $('body').on('click','.agency_nav span',function () {
            i = $(this).index()
            sessionStorage&&sessionStorage.setItem('i',i)
        })
        function navCity(obj) {
            var mySwiper = new Swiper ('.agency_nav', {
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                initialSlide:obj&&obj.i||i,  //设定初始化时slide的索引
                slidesPerView: obj&&obj.num||6
            })
        }
        if(winW>=360){
            navCity()
        }else{
            navCity({
                num:5
            })
        }


    }




})