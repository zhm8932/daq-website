define(function(require,exports,module){
    var utils = require('../utils.js');

    $(function(){
        $(".del-cart-item").on('click',function(){
            delCartItem($(this));
        });

        $('.table-tr .checkbox').on('click',function(){
            toggleCheck($(this),$(this));
        });

        $('.tfoot .check-all').on('click',function(){
            checkAll($(this));
        });

    });


    //删除在checkbox上加类deleted,tr用hide
    //遮罩在checkbox上加类not-in-area,.mask去除类none
    //所有数据绑定在tr的.operation上
    function excludeOtherArea(triggerEle,isChecked){
        var checkedCity = triggerEle.closest('.table-tr').find('.operation').attr('data-city');
        var checkedNums = $('.table-tr .checkbox.checked').length;//被选中的个数
        var checkboxs = null;

        //选中的只有一个,即第一次选中,给其他城市加上mask
        if(isChecked && checkedNums == 1){
            checkboxs = $('.table-tr .checkbox').not('.deleted');//所有未被删除的checkbox
            checkboxs.each(function(index,ele){
                var tr = $(ele).closest('.table-tr');
                var city = tr.find('.operation').attr('data-city');
                if(city != checkedCity){
                    $(ele).addClass('not-in-area');
                    tr.find('.mask').removeClass('none');
                }
            });
        }else if(!isChecked && checkedNums == 0){//没有选中的,即取消选中最后一个,把mask去掉
            checkboxs = $('.table-tr .checkbox.not-in-area').not('.deleted');//所有未被删除的有遮罩的checkbox
            checkboxs.each(function(index,ele){
                var tr = $(ele).closest('.table-tr');
                var city = tr.find('.operation').attr('data-city');
                $(ele).removeClass('not-in-area');
                tr.find('.mask').addClass('none');
            });
        }

    }

    function delCartItem(_this){
        _this.addClass('disabled').off('click');
        var id = $(_this).closest('.operation').attr('data-id');
        utils.SendAjax({
            url: '/trade/cart/delItem',
            param: {id:id},
            method:'POST',
            tipText: '删除',
            callback: function (result) {
                _this.closest('.table-tr').hide(500);
                _this.addClass('deleted');
            },
            errorFun: function (result) {
                _this.removeClass('disabled').on('click',function(){
                    delCartItem(_this);
                });
            }
        });
    }

    function toggleCheck(ele){
        var checkAllBox = $('.tfoot .check-all');
        if(ele.hasClass('checked')){
            ele.removeClass('checked');
            if(checkAllBox.hasClass('checked')){
                checkAllBox.removeClass('checked');
            }
            excludeOtherArea(ele,false);
        }else{
            ele.addClass('checked');
            excludeOtherArea(ele,true);
        }
        updateNumAndPrice();
    }

    function checkAll(_this){
        var checkboxs = $('.table-tr .checkbox').not('.deleted').not('.not-in-area');
        if(_this.hasClass('checked')){
            checkboxs.each(function(index,ele){
                $(ele).removeClass('checked');
                excludeOtherArea($(ele),false);
            });
            $(_this).removeClass('checked');
        }else{
            checkboxs.each(function(index,ele){
                if(!$(ele).hasClass('not-in-area')){
                    $(ele).addClass('checked');
                    excludeOtherArea($(ele),true);
                }
            });
            $(_this).addClass('checked');
        }
        updateNumAndPrice();
    }

    function updateNumAndPrice(){
        var checkboxs = $('.table-tr .checkbox.checked');
        var num = checkboxs.length;
        var totalPrice = 0;
        checkboxs.each(function(index,ele){
            var subTotal = parseInt($(ele).closest('.table-tr').find('.operation').attr('data-subTotal'));
            totalPrice += subTotal;
        });
        $('.tfoot .price').html('￥'+totalPrice);
        $('.tfoot .num').html(num);
    }
});