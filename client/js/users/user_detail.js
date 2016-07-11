define(function (require) {
    require('../libs/jquery.ellipsis');

    $(function(){
        $('.detail-wap dl dt span').ellipsis({
            row:2,
            char:'……',
            callback: function() {
                console.log($(this).text());
            }
        })
    });


});