define(function (require, exports, module) {
    var utils = require('../utils.js');

    $('.order-time').each(function(index,ele){
        var $this = $(ele);
        var timestamp = parseInt($this.html());
        var time = utils.GetLoacalDateString(timestamp)+'  '+utils.GetLoacalTimeString(timestamp);
        $this.html(time);
    });
});