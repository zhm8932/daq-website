define(function(require){
    require('jquery')
    var config = require('../config');
    console.log(config)

    $(function () {
        $('.pages').on('click','.prev,.next',function () {
            var page = $(this).attr('data-page'),
                $self =$(this)
            console.log(page)
            var data = {
                pageIndex:page
            }
            console.log(data)
            if(!$self.hasClass('disable')){
                $.ajax({
                    type:'POST',
                    data:data,
                    url:'/healths/list/list_ask_web',
                    beforeSend:function () {
                        console.log('数据请求中……')
                    },
                    success:function(json){
                        console.log(json)
                        var json = json,
                            $list = $('.list ul')
                        if(json.success){
                            var data = json.data.data,
                                html = '',
                            //currentPage = json.data.currentPage
                                currentPage = json.data.currentPageDirectly,
                                pageCount = json.data.pageCount

                            console.log(currentPage)
                            $.each(data,function (index,item) {
                                html +='<li><a href="/healths/list/article/'+item.id+'" title="'+item.title+'"><i class="icon"></i>'+item.title+'</a></li>'
                            })
                            if($self.hasClass('next')){
                                if(currentPage==pageCount){
                                    $self.addClass('disable')
                                }else if(currentPage!=1){
                                    $self.attr('data-page',currentPage+1)
                                    $self.siblings().removeClass('disable').attr('data-page',currentPage-1)
                                }else{
                                    $self.attr('data-page',currentPage+1)
                                    $self.siblings().attr('data-page',currentPage-1)
                                }
                            }else{
                                if(currentPage==1){
                                    $self.addClass('disable')
                                }else if(currentPage!=1){
                                    $self.attr('data-page',currentPage-1)
                                    $self.siblings().removeClass('disable').attr('data-page',currentPage+1)
                                }else{
                                    $self.attr('data-page',currentPage-1)
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