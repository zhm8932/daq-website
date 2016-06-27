define(function(require){
    require('jquery');
    var config = require('../config');
    require('../libs/jquery.waterfall');
    $(document).ready(function() {
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

        function transferUnit(arr) {
            if(parseFloat(arr)/100%1!=0){
                return parseFloat(arr)/100
            }
            else{
                return (parseFloat(arr)/100)+'.00'
            }

        }
        //获取数据
        function getListData(data) {
            $.ajax({
                type: 'get',
                data: data,
                url: '/screenings/goods',
                success: function (json) {
                    // console.log(json)
                    var json = JSON.parse(json);
                    var html = '';
                    // console.log('data:',json)
                    if(json.success){
                        var data = json.data.data;
                        pageCount = json.data.pageCount;

                        $.each(data,function (index,arr) {
                            var fit_people_html = '';
                            var discountPrice=''
                            var price=''
                            if(arr.productKeyAttributeList){
                                arr.productKeyAttributeList.forEach(function (item,index) {
                                    // console.log('item:',item)
                                    if(item.attributeName=='fit_people'){
                                        fit_people_html =item.value;
                                    }
                                })
                            }
                            discountPrice=transferUnit(arr.discountPrice);
                            price=transferUnit(arr.price);

                            html += '<li class="box" style="opacity:0;filter:alpha(opacity=0);"><a href="/screenings/goods/detail/'+arr.id+'"><img src="'+arr.goodsImages[0].imageUrl+'"/><h4>'+arr.goodsName+'</h4></a><p>'+fit_people_html+'</p>' +
                                    '<div class="price"><span class="new"><em>￥</em>'+discountPrice+'</span><span class="old">原价'+price+'</span></div></div></li>'
                        })
                        if(pageIndex<=pageCount){
                            pageIndex +=1;
                            $(html).appendTo($("#waterfal"));
                        }else{
                            console.log('没有下一页了')
                        }
                        // console.log("数据请求渲染完成:",pageIndex)

                    }
                }
            })

            return {
                pageCount:pageCount,
                data:data
            }
        }
        var pageIndex = 2;
        var pageCount = '';
        // console.log("初始化的pageCount：",pageCount)

        // initWaterfall();
        waterfall();

        //瀑布流加载
        function initWaterfall() {
            $("#waterfal").waterfall({
                itemClass: ".box",
                minColCount: 2,
                spacingHeight: 20,
                // OtherHeight:$('.footer').height(),
                spacingWidth: 17,
                resizeable: true,
                ajaxCallback: function(success, end) {
                    success();
                    // console.log('初始化执行一次');
                    end();
                }
            })
        }

        function waterfall() {
            // console.log('再执行')
            $("#waterfal").waterfall({
                itemClass: ".box",
                minColCount: 2,
                spacingHeight: 20,
                // OtherHeight:$('.footer').height(),
                spacingWidth: 17,
                resizeable: true,
                ajaxCallback: function(success, end) {

                    var html = '';
                    var data = {
                        pageIndex:pageIndex,
                        send:true,
                        // "categoryId":2140010959154488028,
                        "categoryId":$('.tab ul li.on').attr('data-id')
                    }
                    var listData = ''
                    if(!pageCount){
                        listData = getListData(data)
                    }else if(pageIndex<=pageCount){
                        getListData(data)
                    }else{
                        // console.log('不再加载')
                    }

                    // console.log("pageIndex:",pageIndex)
                    // console.log("pageCount:",pageCount)

                    success();

                    // console.log('这里什么时候执行')
                    end();
                }
            });
        }



    })

})