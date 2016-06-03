define(function (require,exports,module) {
    function tab(ele) {
        var curPathname = location.pathname;
        // var $tab_Li = $('.tab li')
        var $tab_Li = $(ele)
        var nav_on_href =$('.nav ul li.on a').attr('href')
        for(var i= 0,len=$tab_Li.length;i<len;i++){
            var sUrl = $($tab_Li[i]).find('a').attr('href');
            if(sUrl.search(curPathname)!=-1&&nav_on_href!=curPathname){
                $($tab_Li[i]).addClass('on')
            }else if(sUrl.search(curPathname)!=-1){
                $($tab_Li[0]).addClass('on')
            }

        }
    }
    // exports.tab = tab
    module.exports = tab

})