/*
 * 科普模块  kepu
 * */
var express = require('express');
var router = express.Router();
var request = require('../requests/trade.request');
var authority = require('../handlers/authority.handler');

// router.get('/cart/list',middleware.judge_client,function(req,res,next){
//     if(req.mobile){
//         res.json({"client":"是手机"});
//     }else{
//         request.GetCartList(req,function(data,success) {
//             var json = JSON.parse(data);
//             if(success){
//                 res.render('trade/cart',{
//                     title:'购物车',
//                     data:json.data
//                 });
//             }else{
//                 res.json(json);
//             }
//         });
//     }
// });

router.get('/cart/list', authority.loginRequired,function (req, res, next) {
    request.GetCartList(req, function (data, success) {
        var json = JSON.parse(data);
        if (success) {
            res.render('trade/cart', {
                title: '购物车',
                data: json.data
            });
        }
    });
});

router.post('/cart/addItem',authority.loginRequired,function (req, res, next) {
    request.AddCartItem(req, function (data, success) {
        res.json(data);
    });
});

router.post('/cart/delItem', authority.loginRequired,function (req, res, next) {
    request.DelCartItem(req, function (data, success) {
        res.json(data);
    });
});


router.post('/order/comfirmView', authority.loginRequired,function (req, res, next) {
    res.render('trade/orderConfirm', {
        title: '核对订单信息',
        data: req.body
    });
});


router.post('/order/create',authority.loginRequired, function (req, res, next) {
    request.CreateOrder(req, function (data, success) {
        if(success){
            var json = JSON.parse(data).data;
            res.render('trade/orderSuccess', {
                title: '成功提交订单',
                data: {
                    id: json.id,
                    totalCost: json.totalCost
                }
            });
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
        }
    });
});

router.post('/order/cancel',authority.loginRequired, function (req, res, next) {
    request.CancelOrder(req, function (data, success) {
        res.json(data);
    });
});

router.post('/order/delete',authority.loginRequired, function (req, res, next) {
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
        }
    });
});

router.post('/pay/payid',authority.loginRequired, function (req, res, next) {
    request.GetPayId(req, function (data, success) {
        res.json(data);
    });
});

router.post('/order/pay',authority.loginRequired, function (req, res, next) {
    request.OrderPay(req, function (data, success) {
        res.json(data);
    });
});


router.get('/order/orderSuccess',authority.loginRequired, function (req, res, next) {
    res.render('trade/orderSuccess', {
        title: '下单成功',
        data: {
            id: req.query.id,
            totalCost: req.query.totalCost
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

router.get('/order/state',authority.loginRequired, function (req, res, next) {
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
        }
    });
});


module.exports = router;




