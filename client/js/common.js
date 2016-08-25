define(function (require, exports, module) {
    require('jquery');
    require('lazyload');
    require('./login');
    var utils = require('./libs/utils.js');
    var Swiper = require('swiper');
    // var Swiper = require('./libs/swiper.jquery.umd');
    require('cookie');
    // //console.log(BMap)

    $(function () {
        var $body = $('body');
        // 百度地图API功能
        function getLocalCity() {
            var map = new BMap.Map('choosed-city-id');
            var point = new BMap.Point(116.331398, 39.897445);
            map.centerAndZoom(point, 12);

            function myFun(result) {
                cityName = result.name;
                map.setCenter(cityName);
                if (!$.cookie('locals_city')) {
                    getCityList(cityName, function (newArr) {
                        var is_locals_city = $.cookie('locals_city');
                        if (!is_locals_city && newArr.length) {
                            // changeCity(newArr[0])
                            utils.SendAjax({
                                url: '/changeCity',
                                param: {city: newArr[0]},
                                method: 'GET',
                                tipText: '切换城市',
                                callback: function (result) {
                                    $('.city-name em').html(cityName);
                                    $('#choosed-city-id').val(newArr[0].id);
                                },
                                errorFun: function (result) {

                                }
                            });
                        }
                        if (newArr.length) {
                            $.cookie('locals_city', newArr[0].parentId, {path: "/"}); // 存储 cookie
                        }

                    })
                }

                // changeCity(cityName)
                return cityName
            }

            var myCity = new BMap.LocalCity();
            var cityName = myCity.get(myFun);
        }

        if (!$.cookie('locals_city') && !utils.browser.ie) {
            getLocalCity();
        } else if (utils.browser.ie) {
            // alert('IE')
        }


        var location = window.location;
        var curPathname = location.pathname;
        var $nav_A = $('.nav li a');
        var href = '';

        //下拉框的构造
        utils.BuildSelect($('.select-box'));

        $.each($nav_A, function (index, arr) {
            href = $(arr).attr('href');
            if (curPathname.search(href) != -1) {
                $(arr).parent().addClass('on').siblings().removeClass('on')
            }
            if (href == '/treat/regsource/list' && curPathname == '/treat/reg/doctorView') {
                $(arr).parent().addClass('on').siblings().removeClass('on')
            }


        });

        // $('.city-name').on('click',function(e){
        //     e.stopPropagation();
        //     var $this = $(this);
        //     var OChooseCity = $this.find('.choose-city');
        //     if(OChooseCity.css('display') == 'none'){
        //         OChooseCity.fadeIn();
        //         //console.log(OChooseCity.data('load'));
        //         var data = OChooseCity.data('load')
        //         if(data === 'first'){
        //             getCityList();
        //             OChooseCity.data('load','non-first');
        //         }
        //     }
        // });
        $('.city-name').hover(function (e) {
            // e.stopPropagation();
            var $this = $(this);
            var OChooseCity = $this.find('.choose-city');
            OChooseCity.stop(false, true).slideDown();
            // OChooseCity.stop(false,true).fadeIn();
            var data = OChooseCity.data('load');
            if (data === 'first') {
                getCityList();
                OChooseCity.data('load', 'non-first');
            }

        }, function (e) {
            e.stopPropagation();
            var $this = $(this);
            var OChooseCity = $this.find('.choose-city');
            OChooseCity.stop(false, true).slideUp();
            // OChooseCity.stop(false,true).fadeOut();
        });
        // $(window).on('click',function(){
        //     var OChooseCity = $('.city-name .choose-city');
        //     if(OChooseCity.css('display') != 'none') {
        //         OChooseCity.fadeOut();
        //     }
        // });


        $("section img").lazyload({
            effect: "fadeIn"
        });
        var winHeight = $(window).height();
        $gotoTop = $('.gotoTop');

        $gotoTop.click(function () {
            $('body,html').animate({scrollTop: 0}, 600)
        })
        // $body.on('click','.gotoTop',function () {
        //     // $(window).scrollTop(0);
        //     alert("返回顶部")
        //     if(utils.browser.ios){
        //         alert('ios端')
        //     }else if(utils.browser.android){
        //         alert('android端')
        //     }else{
        //         //console.log("电脑端")
        //     }
        //     $('body,html').animate({scrollTop:0},600)
        // });

        $(window).scroll(function () {
            var scrollTop = $(window).scrollTop();
            // console.log("scrollTop:",scrollTop)
            if (scrollTop > winHeight / 2) {
                $gotoTop.show()
            } else {
                $gotoTop.fadeOut(700)
            }
        });

        var winWidth = $(window).width();
        var $nav = $('.nav').find('.wrapper');
        if (utils.browser.mobile) {
            if (winWidth < 768) {
                //导航滑动
                $nav.addClass('swiper-container');
                var swiper = new Swiper('.swiper-container', {
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    slidesPerView: 4
                    // spaceBetween: 30
                });
            } else {
                $nav.removeClass().addClass('wrapper');
                $nav.find('li').removeAttr("style");
            }
            $(window).resize(function () {
                winWidth = $(window).width();
                //console.log("winWidth:",winWidth)
                if (winWidth < 768) {
                    //导航滑动
                    $nav.addClass('swiper-container');
                    var swiper = new Swiper('.swiper-container', {
                        nextButton: '.swiper-button-next',
                        prevButton: '.swiper-button-prev',
                        slidesPerView: 4
                        // spaceBetween: 30
                    });
                    //console.log("111")
                } else {
                    //console.log("222:",swiper)
                    $nav.removeClass().addClass('wrapper');
                    $nav.find('.swiper-slide').addClass('3333333333333').removeAttr("style")
                }
            })
        }


    })

    var curCityArr = '';

    function getCityList(cityName, callback) {
        var cityName = cityName || '';
        utils.SendAjax({
            url: '/dic/list/typeAndLevel',
            param: {type: "district", level: "2", activeState: '1'},
            method: 'GET',
            tipText: '获取城市',
            callback: function (result) {
                var data = result.data;
                var cityHtml = '';
                var choosedCityId = $('#choosed-city-id').val();
                for (var i = 0; i < data.length; i++) {
                    var city = data[i];
                    var offlineClass = parseInt(data[i].isOnline) === 1 ? ' ' : ' offline ';//给下线的城市添加class
                    var currentCityClass = data[i].id == choosedCityId ? ' on ' : ' ';//给当前城市添加class
                    cityHtml += '<a href="javascript:;" data-city="" class="city '+currentCityClass+' '+offlineClass+'">' + city.name + '</a>';
                }
                $('.city-list').html(cityHtml);

                var citys = $('.city-list .city');
                for (var i = 0; i < citys.length; i++) {
                    var city = citys.eq(i);
                    city.data('city', data[i]);
                    if(!city.hasClass('offline')){
                        city.on('click', function () {
                            changeCity($(this));
                        });
                    }
                }

                if (callback) {
                    newArr = data.filter(function (item) {
                        // return item.name == '南京'
                        return item.name == cityName
                    })
                    // //console.log("过滤后的data：",newArr)
                    callback && callback(newArr)
                }

            },
            errorFun: function (result) {

            }
        });
    }

    function changeCity($this) {
        // var city = $this=='string'? $this: $this.data&&$this.data('city');
        var city = $this.hasClass && $this.hasClass('city') && $this.data('city') || $this;
        // //console.log('city:',city)
        utils.SendAjax({
            url: '/changeCity',
            param: {city: city},
            method: 'GET',
            tipText: '切换城市',
            callback: function (result) {

                window.location.reload();
                // //console.log("$(this).text():",city.name)
                // $('.city-name em').html(city.name)
            },
            errorFun: function (result) {

            }
        });
    }

    //移动端

    var $nav_toggle = $('.nav_toggle');
    var $left_nav = $('.left-nav');
    $nav_toggle.click(function () {
        $left_nav.slideToggle();
        $(this).parents('aside').toggleClass('active');
    })

    var $topBar_info_aside = $('.topBar_info aside');
    $('.wapUser').click(function () {
        var accountId = $.cookie('accountId');
        // //console.log("accountId:",accountId)
        if (accountId) {
            $topBar_info_aside.slideToggle();
        } else {
            window.location.href = '/login';
        }


    })
    if (utils.browser.ios) {
        var $footerWap = $('.footerWap');
        // $('input').focus(function () {
        //     $footerWap.addClass('footer_fixed');
        //     //console.log("进入")
        // }).blur(function () {
        //     // $footerWap.removeClass('footer_fixed');
        //     //console.log("失去焦点")
        // })

        //只作用于输入框获得焦点时
        $('input,button').focus(function () {
            var _this = this;
            //无键盘时输入框到浏览器窗口顶部距离
            var noInputViewHeight = $(window).height() - $footerWap.height();
            // //console.log("noInputViewHeight:",noInputViewHeight)
            //网页正文内容高度
            var contentHeight = $(document).height() - $footerWap.height();
            //控制正文内容高度大于一屏，保证输入框固定底部
            contentHeight = contentHeight > noInputViewHeight ? contentHeight : noInputViewHeight;
            //因为弹出输入法需要时间，需延时处理
            setTimeout(function () {
                //弹出输入法时滚动条的起始滚动距离
                var startScrollY = $(window).scrollTop();
                // //console.log("startScrollY:",startScrollY)
                //弹出输入法时输入框到窗口顶部的距离，即到软键盘顶部的起始距离
                var inputTopHeight = $(_this).offset().top - startScrollY;
                //弹出输入法时输入框预期位置，即紧贴软键盘时的位置。因输入框此时处于居中状态，所以其到窗口顶部距离即为需往下移动的距离。
                var inputTopPos = $(_this).offset().top + inputTopHeight;
                //控制div不超出正文范围
                inputTopPos = inputTopPos > contentHeight ? contentHeight : inputTopPos;
                //设置输入框位置使其紧贴输入框
                // $(_this).css({'position':'absolute', 'top':inputTopPos });
                // $footerWap.css({'position':'absolute', 'top':inputTopPos });
                // $footerWap.css({'position':'absolute', 'top':noInputViewHeight });
                $footerWap.css({'display': 'none'});
                //给窗口对象绑定滚动事件，保证页面滚动时div能吸附软键盘
                $(window).bind('scroll', function () {
                    //表示此时有软键盘存在，输入框浮在页面上了
                    if (inputTopHeight != noInputViewHeight) {
                        //页面滑动后，输入框需跟随移动的距离
                        var offset = $(this).scrollTop() - startScrollY;
                        // //console.log("offset:",offset);
                        //输入框移动后位置
                        // afterScrollTopPos = inputTopPos + offset;
                        afterScrollTopPos = noInputViewHeight + offset;
                        //设置输入框位置使其紧贴输入框
                        // $(_this).css({'position':'absolute', 'top':afterScrollTopPos });
                        // $footerWap.css({'position':'absolute', 'top':afterScrollTopPos });
                        // $footerWap.css({'display':'none' });
                    }
                });
            }, 100);
        }).blur(function () {//输入框失焦后还原初始状态
            $(".div-input").removeAttr('style');
            // $(window).unbind('scroll');
            $footerWap.css({'display': 'block'});
        });

    }

});