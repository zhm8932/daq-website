// require('jquery');


$(function () {
    $('body').on('click','.history',function () {

        var referrer = document.referrer;
        referrer = referrer?referrer:'/agencys/detail/2';

        // console.log('referrer:',referrer);
        window.location.href=referrer;
    })


    
})