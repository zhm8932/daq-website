define(function (require) {
    require('swipebox');
    var utils = require('./libs/utils.js');
    $(function () {

        var imgsArr = [],
            original = '';
        var imgs = $('.abouts img');
        $.each(imgs,function (index,item) {
            original = $(item).attr('data-original');
            imgsArr.push({href:original});
        });
        $('body').on('click',imgs,function () {
            if(imgsArr.length&&utils.browser.mobile){
                $.swipebox(imgsArr)
            }
        })



    })
})