define(function (require, exports, module) {
    var timer = require('../libs/timer.js');
    require('jquery');
    timer.updateTime({
        totalTime:30*60*1000,
        minuteUnit:' : ',
        secondUnit:'',
        outdatedFun:function(){
            window.location.reload();
        }
    });
});