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

    function excludeOtherArea(triggerEle,isChecked){
        var checkedCity = triggerEle.closest('.table-tr').find('.operation').attr('data-city');
        var checkboxs = $('.table-tr .checkbox').not('.deleted');

        checkboxs.each(function(index,ele){
            var tr = $(ele).closest('.table-tr');
            var checkbox = $(ele);
            var city = tr.find('.operation').attr('data-city');
            var mask = tr.find('.mask');
            if(isChecked){
                if(city != checkedCity){
                    checkbox.addClass('.not-in-area');
                    mask.removeClass('none');
                }else{
                    if(checkbox.hasClass('.not-in-area')){
                        checkbox.removeClass('.not-in-area');
                        mask.addClass('none');
                    }
                }
            }else {
                var checkedNums = $('.table-tr .checkbox.checked');
                if(checkedNums <= 0){

                }
            }
        });
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
                _this.closest('.table-tr').hide(500).addClass('deleted');
            },
            errorFun: function (result) {
                _this.removeClass('disabled').on('click',function(){
                    delCartItem(_this);
                });
            }
        });
    }

    //triggerEle为触发元素,effectEle为作用元素
    function toggleCheck(triggerEle,effectEle){
        if(triggerEle.hasClass('checked')){
            effectEle.removeClass('checked');
        }else{
            effectEle.addClass('checked');
        }
        excludeOtherArea(effectEle);
    }

    function checkAll(_this){
        var checkboxs = $('.table-tr .checkbox').not('.deleted').not('.not-in-area');
        if(_this.hasClass('checked')){
            checkboxs.each(function(index,ele){
                $(ele).removeClass('checked');
                excludeOtherArea();
            });
            $(_this).removeClass('checked');
        }else{
            checkboxs.each(function(index,ele){
                $(ele).addClass('checked');
                excludeOtherArea();
            });
            $(_this).addClass('checked');
        }

    }
});