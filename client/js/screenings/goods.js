define(function(require){
    require('jquery');
    var config = require('../config');
    console.log(config);

    $(function () {
        var $article = $('.health_detail article');
        var articleWidth = $article.width();
        console.log(articleWidth);

        $.each($article.find('img'),function (index,item) {
            var img = $(this);
            var realWidth;//真实的宽度
            var realHeight;//真实的高度
            //这里做下说明，$("<img/>")这里是创建一个临时的img标签，类似js创建一个new Image()对象！

            $("<img/>").attr("src", $(img).attr("src")).load(function () {
                realWidth = this.width;
                realHeight = this.height;
                console.log('realWidth:',realWidth);
                //如果真实的宽度大于浏览器的宽度就按照100%显示
                if (realWidth >= articleWidth) {
                    $(img).css("width", "100%").css("height", "auto");
                }
                else {//如果小于浏览器的宽度按照原尺寸显示
                    $(img).css("width", realWidth + 'px').css("height", realHeight + 'px');
                }



            })
        })

        $('.pages').on('click','.prev,.next',function () {
            var page = $(this).attr('data-page'),
                $self =$(this);
            console.log(page);
            var data = {
                pageIndex:page
            }
            if(!$self.hasClass('disable')){
                $.ajax({
                    type:'POST',
                    data:data,
                    url:'/healths/list/list_ask_web',
                    beforeSend:function () {
                        console.log('数据请求中……')
                    },
                    success:function(data){
                        console.log(json)
                        var json = data
                            $list = $('#list_ask ul');
                        if(json.success){
                            var data = json.data.data,
                                html = '',
                                currentPage = json.data.currentPage,
                                //currentPage = json.data.currentPageDirectly,
                                pageCount = json.data.pageCount;

                            console.log(currentPage);
                            $.each(data,function (index,item) {
                                html +='<li><a href="/healths/list/article/'+item.id+'" title="'+item.title+'"><i class="icon"></i>'+item.title+'</a></li>'
                            })
                            if($self.hasClass('next')){
                                if(currentPage==pageCount){
                                    $self.addClass('disable');
                                    $self.siblings().removeClass('disable')
                                }else if(currentPage!=1){
                                    $self.attr('data-page',currentPage+1);
                                    $self.siblings().removeClass('disable').attr('data-page',currentPage-1)
                                }else{
                                    $self.attr('data-page',currentPage+1);
                                    $self.siblings().attr('data-page',currentPage-1)
                                }
                            }else{
                                if(currentPage==1){
                                    $self.addClass('disable');
                                    $self.siblings().removeClass('disable')
                                }else if(currentPage!=1){
                                    $self.attr('data-page',currentPage-1);
                                    $self.siblings().removeClass('disable').attr('data-page',currentPage+1)
                                }else{
                                    $self.attr('data-page',currentPage-1);
                                    $self.siblings().attr('data-page',currentPage+1)
                                }

                            }

                            $list.html(html)

                        }
                    }
                })
            }

        })
        
        
        
    })

})