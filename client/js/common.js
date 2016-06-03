define(function(require, exports, module){
    require('lazyload');
    require('./login');
    var utils = require('./libs/utils.js');
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

        //tab切换
        require('./libs/tab')('.tab li')

        $('.date-time').each(function(index,ele){
            var $this = $(ele);
            var timestamp = parseInt($this.html());
            var time = utils.getLoacalDateAndTime(timestamp);
            $this.html(time);
        });
    })

    
});