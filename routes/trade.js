/*
 * 科普模块  kepu
 * */
var express = require('express');
var router = express.Router();
var request = require('../requests/trade.request');
var authority = require('../handlers/authority.handler');

router.get('/cart/list', authority.loginRequired,function (req, res, next) {
    req.resType = 'html';
    request.GetCartList(req,res,function (err,data) {
        var currentCityId = req.session.locals_address && req.session.locals_address[1].categoryId;
        var json = tidyCartList(JSON.parse(data).data,currentCityId);
        res.render('trade/cart', {
            title: '购物车',
            data: json
        });
    });
});
router.get('/cart/GetCartCount', authority.loginRequired,function (req, res, next) {
    request.GetCartList(req,res,function (err,data) {
        res.send(data);
    });
});

router.post('/cart/addItem',function (req, res, next) {
    request.AddCartItem(req,res,function (err,data) {
        res.json(data);
    });
});

router.post('/cart/delItem',function (req, res, next) {
    request.DelCartItem(req,res,function (err,data) {
        res.json(data);
    });
});


router.post('/order/comfirmView', authority.loginRequired,function (req, res, next) {
    req.resType = 'html';
    var orderToken = Math.random().toString(36).substr(2);
    req.session.orderToken = orderToken;
    res.render('trade/orderConfirm', {
        title: '核对订单信息',
        data: req.body,
        orderToken:orderToken
    });
});


router.post('/order/create', function (req, res, next) {
    req.resType = 'html';
    if(req.body.orderToken != req.session.orderToken){
        var json = JSON.stringify({success:false,msg:'请勿重复提交订单'});
        res.json(json);
        res.end();
        return false;
    }

    request.CreateOrder(req,res,function (err,data) {
        var json = JSON.parse(data);
        req.session.orderToken = '';
        var resJson = {
            id: json.data.id,
            totalCost: json.data.totalCost,
            createdAt:json.data.createdAt,
            success:true
        };
        if(JSON.parse(req.body.ids).length > 0){
            req.autoHandleError = false;
            request.DelCartItemBatch(req,res,function (err,data) {
                // var delJson = JSON.parse(data);
                res.json(JSON.stringify(resJson));//无论删除购物车是否出错,只要下单成功都返回成功
            });
        }else{
            res.json(JSON.stringify(resJson));
        }

    });

});

router.get('/order/list',authority.loginRequired, function (req, res, next) {
    req.resType = 'html';
    request.GetOrderList(req, res,function (err, data) {
        var json = JSON.parse(data);
        res.locals.pageCount = json.data.pageCount;
        res.locals.currentPage = json.data.currentPage||1;
        res.render('users/orders', {
            title: '我的订单',
            data: json.data.data,
            nav:"orders"
        });

    });
});

router.post('/order/cancel', function (req, res, next) {
    request.CancelOrder(req,res,function (err,data) {
        res.json(data);
    });
});

router.post('/order/delete', function (req, res, next) {
    request.DeleteOrder(req,res,function (err,data) {
        res.json(data);
    });
});


router.get('/order/detail', authority.loginRequired,function (req, res, next) {
    req.resType = 'html';
    request.GetOrderDetail(req,res,function (err,data) {
        var json = JSON.parse(data);
        res.render('users/orderDetail', {
            title: '订单详情',
            data: json.data
        });
    });
});

router.post('/pay/payid', function (req, res, next) {
    request.GetPayId(req,res,function (err,data) {
        res.json(data);
    });
});

router.post('/order/pay', function (req, res, next) {
    request.OrderPay(req,res,function (err,data) {
        res.json(data);
    });
});


router.get('/order/orderSuccess',authority.loginRequired, function (req, res, next) {
    req.resType = 'html';
    request.GetOrderDetail(req,res,function (err,data) {
        var json = JSON.parse(data);
        res.render('trade/orderSuccess', {
            title: '下单成功',
            data: json.data
        });
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
    request.GetOrderDetail(req,res,function (err,data) {
        var resJson  = {"code": "200", msg: "", data: {}, "success": true};
        var json = JSON.parse(data);
        resJson.data.orderState = json.data.orderState;
        resJson.data.id = json.data.id;
        res.json(JSON.stringify(resJson));
    });
});

router.get('/order/paySuccess',authority.loginRequired, function (req, res, next) {
    req.resType = 'html';
    req.query.id = req.query.order_no;
    request.GetOrderDetail(req,res,function (err,data) {
        var json = JSON.parse(data);
        res.render('trade/paySuccess', {
            title: '支付结果',
            data: {
                success: success,
                data: json.data
            }
        });
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




