define(function(require){
    var config = require('../config');
    console.log(config)

    require('touchslider')

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
        autoplay: true, // 自动播放
        viewport: ".touchslider-viewport"  //内容区域
    });

})