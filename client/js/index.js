(function () {

    console.log('111111111');
// require('lazyload');
//     require('touchslider');
    var utils = require('./libs/utils')
    require('slides');
    require('movingBoxes');

    $('#slider-two').movingBoxes({

        startPanel   : 1,       // 从第一个li开始
        reducedSize  : .6,      // 缩小到原图50%的尺寸
        wrap         : true,   // 无缝循环
        // buildNav     : true,	// 显示指示器效果
        navFormatter : function(){ return "&#9679;"; } // 指示器格式，为空即会显示123

    });

    function initTouchSlider(obj) {
        // $(".slideBox").touchSlider({
        //     container: this,
        //     duration: 350, // 动画速度
        //     delay: 3000, // 动画时间间隔
        //     margin: 5,
        //     mouseTouch: true,
        //     namespace: "touchslider",
        //     next: ".next", // next 样式指定
        //     pagination: ".tit span",
        //     // heightType:true,
        //     currentClass: "on", // current 样式指定
        //     prev: ".prev", // prev 样式指定
        //     // scroller: viewport.children(),
        //     autoplay: false, // 自动播放
        //     bResize:true,
        //     // viewport: ".touchslider-viewport"  //内容区域
        //     viewport: ".bd"  //内容区域
        // });


        $('.slideBox').slidesjs({
            width: obj.width,
            height: obj.height,
            navigation: false,
            play: {
                active: false,
                auto: false,
                interval: 4000,
                swap: true
            }
        });
    }

    if(utils.browser.mobile){
        initTouchSlider({
            width: 720,
            height: 420
        });
    }else{
        initTouchSlider({
            width: 1600,
            height: 634
        });
    }


}());

