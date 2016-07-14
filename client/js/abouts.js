define(function (require) {
    require('swipebox');
    var utils = require('./libs/utils.js');
    $(function () {

        var imgsArr = [],
            original = '';
        var imgs = $('.abouts article img');
        $.each(imgs,function (index,item) {
            original = $(item).attr('data-original');
            imgsArr.push({href:original});
        });
        $('body').on('click','.abouts img',function () {
            console.log("关于都安全");
            if(imgsArr.length&&utils.browser.mobile){
                $.swipebox(imgsArr)
            }
        })



    })
})