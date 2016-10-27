const React = require('react');
const ReactDOM = require('react-dom');
const AskBox = require('../components').AskBox;
$(function () {
    require('../libs/jquery.ellipsis');
    const util = require('../libs/utils')

    if(util.browser.mobile){
        var $figure =$('.lr_list figure')
        var height = $figure.find('figcaption').height();
        var $imgs = $figure.find('img');
        // console.log("$figure:",$figure)
        $.each($imgs,function (index,item) {
            var imgWidth = $(item).width();
            var imgH = $(item).height();
            var mgl = (imgWidth-height)/2
            // console.log("imgWidth:",imgWidth,imgH,height,mgl)
            $(item).parent().css({width:height})
            $(item).css({marginLeft:-Math.abs(mgl),height:height,width:"auto"})



        })
        // console.log("height:",height);


    }
    $('.ellips').ellipsis({
        row:1,
        char:'…',
        callback: function() {
            // console.log($(this).text());
        }
    });

})
// ReactDOM.render(<AskBox data='' pageCount=''/>,document.querySelector('#ask_test'));

ReactDOM.render(React.createElement(AskBox, {data: data, pageCount: pageCount}),document.querySelector('#ask_test'));

// module.exports = AskBox;