define(function(require,exports,module) {
    var utils = require('./libs/utils');
    // var TouchSlide = require('./libs/TouchSlide.1.1.source')

    $('body').on('click','.loginBtn',function () {
        utils.showLogin()
    })
    $('body').on('click','.logoutBtn',function () {
        utils.logout()
    })

    $('body').on('click keyup keydown change','.username,.password',function () {
        var index = $('.popupBox article .tit span.on').index();
        $('.popupBox article').find('ul').eq(index).find('.prompt').hide()
    })
    $(".loginBox2").touchSlider({
        container: this,
        duration: 350, // 动画速度
        delay: 3000, // 动画时间间隔
        margin: 5,
        mouseTouch: true,
        namespace: "touchslider",
        next: ".touchslider-next", // next 样式指定
        pagination: ".tit span",
        currentClass: "on", // current 样式指定
        prev: ".touchslider-prev", // prev 样式指定
        // scroller: viewport.children(),
        autoplay: false, // 自动播放
        viewport: ".touchslider-viewport"  //内容区域
    });

    $('body').on('click','.loginBox2 .ok',function () {
        var data = utils.validateLogin();
        var redirectUrl = $('#redirectUrl').val()
        if(data) utils.login(data,null,redirectUrl);
    })

});