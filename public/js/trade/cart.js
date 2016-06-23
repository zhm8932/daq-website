define(function (require, exports, module) {
    var utils = require('../libs/utils.js');
    var login = require('../login.js');

    $(function () {
        var minHeight = utils.SetMinHeight();

        //购物车为空时居中
        var emptyCart = $('.empty-cart-box');
        if(emptyCart){
            emptyCart.css('margin-top',(minHeight - emptyCart.height()) / 2+'px');
        }
        
        
        $(".del-cart-item").on('click', function () {
            delCartItem($(this));
        });

        $('.table-tr .checkbox').on('click', function () {
            toggleCheck($(this), $(this));
        });

        $('.tfoot .check-all').on('click', function () {
            checkAll($(this));
        });

        $('.submit-btn').on('click', function () {

        });

        $('.empty-cart .to-buy').on('click',function(){
            window.location.href = '/screenings/goods';
        })
    });


    //删除在checkbox上加类deleted,tr用hide
    //遮罩在checkbox上加类not-in-area,.mask去除类none
    //所有数据绑定在tr的.operation上
    function excludeOtherArea(triggerEle, isChecked) {
        var operation = triggerEle.closest('.table-tr').find('.operation');
        var checkedCity = operation.attr('data-city');
        var checkedNums = $('.table-tr .checkbox.checked').length;//被选中的个数
        var checkboxs = null;

        //选中的只有一个,即第一次选中,给其他城市加上mask
        if (isChecked && checkedNums == 1) {
            checkboxs = $('.table-tr .checkbox').not('.deleted');//所有未被删除的checkbox
            checkboxs.each(function (index, ele) {
                var tr = $(ele).closest('.table-tr');
                var city = tr.find('.operation').attr('data-city');
                if (city != checkedCity) {
                    $(ele).addClass('not-in-area');
                    tr.find('.mask').removeClass('none');
                }
            });
        } else if (!isChecked && checkedNums == 0) {//没有选中的,即取消选中最后一个,把mask去掉
            checkboxs = $('.table-tr .checkbox.not-in-area').not('.deleted');//所有未被删除的有遮罩的checkbox
            checkboxs.each(function (index, ele) {
                var tr = $(ele).closest('.table-tr');
                var city = tr.find('.operation').attr('data-city');
                $(ele).removeClass('not-in-area');
                tr.find('.mask').addClass('none');
            });
        }

    }

    function delCartItem($this) {
        utils.CheckLogin(function() {
            utils.ShowComfirmDialog({
                tipText:'确定删除吗?',
                okCallback:function(){
                    $this.addClass('disabled').off('click');
                    var id = $($this).closest('.operation').attr('data-id');
                    utils.SendAjax({
                        url: '/trade/cart/delItem',
                        param: {id: id},
                        method: 'POST',
                        tipText: '删除',
                        callback: function (result) {
                            $this.closest('.table-tr').hide(500);
                            $this.closest('.table-tr').find('.checkbox').addClass('deleted').removeClass('checked');
                            updateTotalView();
                        },
                        errorFun: function (result) {
                            $this.removeClass('disabled').on('click', function () {
                                delCartItem($this);
                            });
                        }
                    });
                }
            });

        });
    }

    function toggleCheck(ele) {
        var checkAllBox = $('.tfoot .check-all');
        if (ele.hasClass('checked')) {
            ele.removeClass('checked');
            if (checkAllBox.hasClass('checked')) {
                checkAllBox.removeClass('checked');
            }
            excludeOtherArea(ele, false);
        } else {
            ele.addClass('checked');
            excludeOtherArea(ele, true);
        }
        updateTotalView();
    }

    function checkAll($this) {
        var checkboxs = $('.table-tr .checkbox').not('.deleted').not('.not-in-area');
        if ($this.hasClass('checked')) {
            checkboxs.each(function (index, ele) {
                $(ele).removeClass('checked');
                excludeOtherArea($(ele), false);
            });
            $($this).removeClass('checked');
        } else {
            checkboxs.each(function (index, ele) {
                if (!$(ele).hasClass('not-in-area')) {
                    $(ele).addClass('checked');
                    excludeOtherArea($(ele), true);
                }
            });
            $($this).addClass('checked');
        }
        updateTotalView();
    }

    function updateTotalView() {
        var checkboxs = $('.table-tr .checkbox.checked');
        var num = checkboxs.length;
        var totalPrice = 0;
        checkboxs.each(function (index, ele) {
            var subTotal = parseFloat($(ele).closest('.table-tr').find('.operation').attr('data-subTotal'));
            totalPrice += subTotal;
        });
        $('.tfoot .price').html('￥' + totalPrice/100);
        $('.tfoot .num').html(num);
        if (num > 0) {
            $('.submit-btn').addClass('back-stress').off('click').on('click', function () {
                submitToOrder(checkboxs, totalPrice);
            });
        } else {
            $('.submit-btn').removeClass('back-stress').off('click');
        }
    }

    function submitToOrder(checkboxs, totalPrice) {
        var items = [];
        checkboxs.each(function (index, ele) {
            var operation = $(ele).closest('.table-tr').find('.operation');
            var item = {};
            item.id = operation.attr('data-id');
            item.goodsId = operation.attr('data-goodsId');
            item.imgUrl = operation.attr('data-imgUrl');
            item.goodsName = operation.attr('data-goodsName');
            item.discountPrice = operation.attr('data-discountPrice');
            item.transmitType = operation.attr('data-transmitType');
            item.address = operation.attr('data-address');
            item.subTotal = operation.attr('data-subTotal');
            item.favPrice = operation.attr('data-favPrice');
            items.push(item);
        });

        $('#submitForm input[name=items]').val(JSON.stringify(items));
        $('#submitForm input[name=totalPrice]').val(totalPrice);
        $('#submitForm').submit();
    }
    
});