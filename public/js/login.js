define(function(require,exports,module) {
    var utils = require('./libs/utils')
    // var TouchSlide = require('./libs/TouchSlide.1.1.source')

    $('body').on('click','.loginBtn',function () {
        utils.showLogin()
    })
    $('body').on('click','.logoutBtn',function () {
        utils.logout()
    })

    $('body').on('click keyup keydown change','.username,.password',function () {
        var index = $('.popupBox article .tit span.on').index()
        $('.popupBox article').find('ul').eq(index).find('.prompt').hide()
    })

})