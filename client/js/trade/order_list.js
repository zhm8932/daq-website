define(function (require, exports, module) {
    var utils = require('../libs/utils.js');
    require('ellipsis');

    $(function () {
        $('.goods-detail h5').ellipsis({
            row:2,
            char:'……',
            callback: function() {
                // console.log($(this).text());
            }
        })
    })

});