/**
 * Created by chenlu on 16/7/12.
 */
define(function (require, exports, module) {
    require('jquery');
    function updateTime(options) {
        var defaults = {
            minuteUnit: '分',
            secondUnit: '秒',
            outdatedFun: function () {
                window.location.reload();
            }
        };
        var isMobile = $('#browser-mobile').val() === 'true';
        if(isMobile){
            defaults.minuteUnit = ' : ';
            defaults.secondUnit = '';
        }
        options = $.extend({}, defaults, options);

        var timerList = $('.timer');
        timerList.each(function (index, ele) {
            var $this = $(ele);
            var payTime = parseInt($this.attr('data-paytime'));
            var currentTime = parseInt($this.attr('data-currenttime'));
            //剩余支付时间 = 总共支付时间 - (当前时间 - 下单时间),单位:秒
            var restTime = parseInt((options.totalTime - (currentTime - payTime)) / 1000);

            // var a = new Date(payTime).toLocaleTimeString();
            // var b = new Date(now).toLocaleTimeString();
            //
            // console.log('==='+ a + '==' + b);
            // console.log(now-payTime);
            // console.log(restTime);
            countTime(restTime, $this);
        });

        function countTime(restTime, $this) {
            restTime--;
            if (restTime <= 0) {
                options.outdatedFun && options.outdatedFun();
                return false;
            }
            $this.attr('data-restTime',restTime*1000);
            var minutes = parseInt(restTime / 60) < 10 ? '0' + parseInt(restTime / 60) : parseInt(restTime / 60);
            var seconds = parseInt(restTime % 60) < 10 ? '0' + parseInt(restTime % 60) : parseInt(restTime % 60);
            $this.html(minutes + options.minuteUnit + seconds + options.secondUnit);
            setTimeout(function () {
                countTime(restTime, $this);
            }, 1000);
        }
    }

    exports.updateTime = updateTime;
});