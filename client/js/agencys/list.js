require('jquery')

$(function () {

    var location = window.location;
        curPathname = location.pathname,
        $agency_nav = $('.agency_nav'),
        $agency_a = $agency_nav.find('a');
    $.each($agency_a,function (index,item) {
        console.log($(item).text(),":",$(item).attr('href'))
        if($(item).attr('href')==curPathname){
            $(item).addClass('on').siblings().removeClass('on');
        }
    })
})