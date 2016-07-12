/**
 * Created by chenlu on 16/7/12.
 */
define(function(require,exports,module) {
    function updateTime(options){
        var timerList = $('.timer');
        timerList.each(function(index,ele){
            var $this = $(ele);
            var payTime = parseInt($this.attr('data-paytime'));
            var now = new Date().getTime();
            //剩余支付时间 = 总共支付时间 - (当前时间 - 下单时间),单位:秒
            var restTime = (options.totalTime - (now - payTime))/1000;

            var a = new Date(payTime).toLocaleTimeString();
            var b = new Date(now).toLocaleTimeString();

            console.log('==='+ a + '==' + b);
            console.log(now-payTime);
            console.log(restTime);
            countTime(restTime,$this);
        });

        function countTime(restTime,$this){
            var minutes = parseInt(restTime/60) < 10 ? '0'+parseInt(restTime/60) : parseInt(restTime/60);
            var seconds = parseInt(restTime%60) < 10 ? '0'+parseInt(restTime%60) : parseInt(restTime%60);
            $this.html(minutes+'分'+seconds+'秒');
            if(restTime <= 0){
                options.outdatedFun && options.outdatedFun();
                return false;
            }
            restTime--;
            setTimeout(function(){
                countTime(restTime,$this);
            },1000);
        }
    }

    exports.updateTime = updateTime;
});