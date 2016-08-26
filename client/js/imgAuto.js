define(function (require) {
    $(function () {
        var $article = $('.health_detail article,.goods_detail article');
        var articleWidth = $article.width();
        $.each($article.find('img'),function (index,item) {
            var img = $(this);
            var realWidth;//真实的宽度
            var realHeight;//真实的高度
            //这里做下说明，$("<img/>")这里是创建一个临时的img标签，类似js创建一个new Image()对象！

            $("<img/>").attr("src", $(img).attr("src")).load(function () {
                realWidth = this.width;
                realHeight = this.height;
                // console.log('realWidth:',realWidth);
                //如果真实的宽度大于浏览器的宽度就按照100%显示
                if (realWidth >= articleWidth) {
                    $(img).css("width", "100%").css("height", "auto");
                }
                else {//如果小于浏览器的宽度按照原尺寸显示
                    $(img).css("width", realWidth + 'px').css("height", realHeight + 'px');
                }



            })
        })
    })
})