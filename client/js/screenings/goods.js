define(function(require){
    require('jquery');
    var config = require('../config');
    var utils = require('../libs/utils');
    // require('../libs/jquery.waterfall');
    require('../libs/jquery.ellipsis');
    var tabFn = require('../libs/tab');
    $(document).ready(function() {
        require('../imgAuto');

        //tab切换
        tabFn('.tab li');
        var $tab = $('.tab');
        var selfId = $tab.find('.on').attr('data-id');
        var imgs = $tab.find('img');

        $.each(imgs,function (index,item) {
            // console.log(item)
            if(selfId==$(item).attr('data-id')){
                $(item).show()
            }
        });


        if(utils.browser.ie){
            $('.ellips').ellipsis({
                row:2,
                char:'……',
                callback: function() {
                    // console.log($(this).text());
                }
            });
        }else if(utils.browser.mobile){
            // console.log("手机端")
            // $('.ellips').ellipsis({
            //     row:1,
            //     char:'…',
            //     callback: function() {
            //         console.log($(this).text());
            //     }
            // });
        }


        $('.pages').on('click','.prev,.next',function () {
            var page = $(this).attr('data-page'),
                $self =$(this);
            // console.log(page);
            var data = {
                pageIndex:page
            };
            if(!$self.hasClass('disable')){
                utils.SendAjax({
                    url: '/healths/list/list_ask_web',
                    param: data,
                    method: 'POST',
                    tipText: '请求问答数据',
                    callback: function (result) {
                        var json = result;
                        // console.log("json:",json)
                        var $list = $('#list_ask ul');
                        if(json.success){
                            var data = json.data.data,
                                html = '',
                                currentPage = json.data.currentPage,
                            //currentPage = json.data.currentPageDirectly,
                                pageCount = json.data.pageCount;

                            // console.log(currentPage);
                            $.each(data,function (index,item) {
                                html +='<li><a href="/healths/list/article/'+item.id+'" title="'+item.title+'"><i class="icon"></i>'+item.title+'</a></li>'
                            });
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

                            $list.html(html);

                        }
                    }
                });
            }

        });

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
                url: '/screenings/goods',
                data: data,
                success: function (result) {
                    // console.log(json)
                    var json = JSON.parse(result);
                    var html = '';
                    // console.log('data:', typeof json)
                    if(json.success){
                        var data = json.data.data;
                        var imgUrl = '';
                        pageCount = json.data.pageCount;
                        $.each(data,function (index,arr) {
                            var fit_people_html = '';
                            var discountPrice='';
                            var price='';
                            discountPrice=transferUnit(arr.discountPrice);
                            price=transferUnit(arr.price);
                            if(utils.browser.mobile){
                                imgUrl = arr.mobileCoverImages[0]
                            }else{
                                imgUrl = arr.pcCoverImages[0]
                            }
                            html += '<li class="box"><a href="/screenings/goods/detail/'+arr.id+'"><img data-original="'+imgUrl+'"/><h4><a href="/screenings/goods/detail/'+arr.id+'">'+arr.goodsName+'</a></h4><p>'+arr.fitPeople+'</p>' +
                                '<div class="price"><span class="new"><em>￥</em>'+discountPrice+'</span><span class="old">原价'+price+'</span></div></div></li>'
                        });
                        $(html).appendTo($("#waterfal"));
                        $(".goods_list img").lazyload({
                            effect: "fadeIn"
                        });
                        // if(pageIndex<=pageCount){
                        //     // pageIndex +=1;
                        //
                        // }else{
                        //     console.log('没有下一页了')
                        // }

                    }
                }
            });

            return {
                pageCount:pageCount,
                data:data
            }
        }
        var pageIndex = 1;
        var pageCount = $("#waterfal").attr('data-pageCount')||'';

        // console.log("初始化的pageCount：",pageCount)

        // waterfall();

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

        function initData() {

            pageIndex +=1;
            var data = {
                pageIndex:pageIndex,
                send:true,
                "categoryId":$('.tab ul li.on').attr('data-id')
            }
            // console.log("pageIndex:",pageIndex+'--pageCount:',pageCount)
            // console.log("pageCount:",pageCount)
            if(pageCount&&pageIndex<=pageCount){


                getListData(data)
            }else{
                // console.log('没有下一页了')
            }
        }

        // initData();

        var winHeight = $(window).height();
        var footerHeight = $('.footer').outerHeight()+$('.copyright').outerHeight();
        // console.log("winHeight:",winHeight);
        // console.log("footerHeight:",footerHeight);
        if(utils.browser.mobile){
            footerHeight+=$('.footerWap').height()
        }
        // console.log("footerHeight:",footerHeight);
        $(window).scroll(function () {
            var scrollTop = $(document).scrollTop();
            if(scrollTop>=winHeight-footerHeight-50){
                winHeight = $(document).height();
                initData();
            }
        })
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
                    var listData = '';
                    // console.log("pageIndex:",pageIndex+'--pageCount:',pageCount)
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