/*
 * 科普模块  kepu
 * */
var express = require('express');
var router = express.Router();
var request = require('../requests/trade.request');
var authority = require('../handlers/authority.handler');

router.get('/cart/list', authority.loginRequired,function (req, res, next) {
    request.GetCartList(req, function (data, success) {
        var currentCityId = req.session.locals_address[1].categoryId;
        var json = tidyCartList(JSON.parse(data).data,currentCityId);
        if (success) {
            res.render('trade/cart', {
                title: '购物车',
                data: json
            });
        }else{
            next();
        }
    });
});

router.get('/cart/GetCartCount', authority.loginRequired,function (req, res, next) {
    request.GetCartList(req, function (data, success) {
        res.send(data);
    });
});

router.post('/cart/addItem',function (req, res, next) {
    request.AddCartItem(req, function (data, success) {
        res.json(data);
    });
});

router.post('/cart/delItem',function (req, res, next) {
    request.DelCartItem(req, function (data, success) {
        res.json(data);
    });
});


router.post('/order/comfirmView', authority.loginRequired,function (req, res, next) {
    var orderToken = Math.random().toString(36).substr(2);
    req.session.orderToken = orderToken;
    res.render('trade/orderConfirm', {
        title: '核对订单信息',
        data: req.body,
        orderToken:orderToken
    });
});


router.post('/order/create', function (req, res, next) {
    if(req.body.orderToken != req.session.orderToken){
        var json = JSON.stringify({success:false,msg:'请勿重复提交订单'});
        res.json(json);
        res.end();
        return false;
    }


    request.CreateOrder(req, function (data, success) {
        var json = JSON.parse(data);
        if(success){
            req.session.orderToken = '';
            var resJson = {
                id: json.data.id,
                totalCost: json.data.totalCost,
                createdAt:json.data.createdAt,
                success:true
            };
            if(JSON.parse(req.body.ids).length > 0){
                request.DelCartItemBatch(req, function (data, success) {
                    var delJson = JSON.parse(data);
                    if(success){
                        res.json(JSON.stringify(resJson));
                    }else{
                        res.json(data);
                    }
                });
            }else{
                res.json(JSON.stringify(resJson));
            }

        }else{
            res.json(data);
        }
    });

});

router.get('/order/list',authority.loginRequired, function (req, res, next) {
    request.GetOrderList(req, function (data, success) {
        var json = JSON.parse(data);
        if (success) {
            res.locals.pageCount = json.data.pageCount;
            res.locals.currentPage = json.data.currentPage||1;
            res.render('users/orders', {
                title: '我的订单',
                data: json.data.data,
                nav:"orders"
            });
        }else{
            next();
        }
    });
});

router.post('/order/cancel', function (req, res, next) {
    request.CancelOrder(req, function (data, success) {
        res.json(data);
    });
});

router.post('/order/delete', function (req, res, next) {
    request.DeleteOrder(req, function (data, success) {
        res.json(data);
    });
});


router.get('/order/detail', authority.loginRequired,function (req, res, next) {
    request.GetOrderDetail(req, function (data, success) {
        var json = JSON.parse(data);
        if (success) {
            res.render('users/orderDetail', {
                title: '订单详情',
                data: json.data
            });
        }else{
            next();
        }
    });
});

router.post('/pay/payid', function (req, res, next) {
    request.GetPayId(req, function (data, success) {
        res.json(data);
    });
});

router.post('/order/pay', function (req, res, next) {
    request.OrderPay(req, function (data, success) {
        res.json(data);
    });
});


router.get('/order/orderSuccess',authority.loginRequired, function (req, res, next) {
    request.GetOrderDetail(req, function (data, success) {
        
        var json = JSON.parse(data);
        if (success) {
            res.render('trade/orderSuccess', {
                title: '下单成功',
                data: json.data
            });
        }else{
            next();
        }
    });

});

router.get('/order/wechatPay',authority.loginRequired, function (req, res, next) {
    var query = req.query;
    res.render('trade/wechatPay', {
        title: '微信支付',
        data: {
            id: query.id,
            payId:query.payId,
            totalCost: query.totalCost
        }
    });
});

router.get('/order/state', function (req, res, next) {
    request.GetOrderDetail(req, function (data, success) {
        var resJson = {};
        if (success) {
            resJson = {"code": "200", msg: "", data: {}, "success": true};
            var json = JSON.parse(data);
            resJson.data.orderState = json.data.orderState;
            resJson.data.id = json.data.id;
        }else{
            resJson = {"code": "200", msg: "查询状态失败", data: {}, "success": false};
        }
        res.json(JSON.stringify(resJson));
    });
});

router.get('/order/paySuccess',authority.loginRequired, function (req, res, next) {
    req.query.id = req.query.order_no;
    request.GetOrderDetail(req, function (data, success) {
        if (success) {
            var json = JSON.parse(data);
            res.render('trade/paySuccess', {
                title: '支付结果',
                data: {
                    success: success,
                    data: json.data
                }
            });
        }else{
            next();
        }
    });
});

//把购物车子项按地区排序
function tidyCartList(cartList,currentCityId){
    var fitCartArr = [];
    var unfitCartArr = [];
    for(var i = 0; i < cartList.length; i++){
        var cityId = '';
        var cartItemAttrs = cartList[i].cartItemAttrs;
        for(var j= 0; j < cartItemAttrs.length; j++){
            if(cartItemAttrs[j].attributeName == 'address'){
                cityId = JSON.parse(cartItemAttrs[j].value)[1].categoryId;
            }
        }
        if(cityId == currentCityId){
            cartList[i].isfit = true;
            fitCartArr.push(cartList[i]);
        }else{
            cartList[i].isfit = false;
            unfitCartArr.push(cartList[i]);
        }

    }
    return fitCartArr.concat(unfitCartArr);
}

module.exports = router;




