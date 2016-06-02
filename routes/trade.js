/*
* 科普模块  kepu
* */
var express = require('express');
var router = express.Router();
var request = require('../requests/trade.request');
var middleware = require('../requests/middlewares.request.js');
var authority = require('../handlers/authority.handler')

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

router.get('/cart/list',function(req,res,next){
    request.GetCartList(req,function(data,success) {
        var json = JSON.parse(data);
        if(success){
            res.render('trade/cart',{
                title:'购物车',
                data:json.data
            });
        }else{
            res.json(json);
        }
    });
});

router.post('/cart/addItem',authority.loginRequired,function(req,res,next) {
    request.AddCartItem(req,function(data,success) {
        res.json(data);
    });
});

router.post('/cart/delItem',function(req,res,next) {
    request.DelCartItem(req,function(data,success) {
        res.json(data);
    });
});


router.post('/order/comfirmView',function(req,res,next) {
    console.log('核对订单信息')
    res.render('trade/orderConfirm',{
        title:'核对订单信息',
        data:req.body
    });
});

router.post('/order/create',function(req,res,next) {
    request.CreateOrder(req,function(data,success) {
        var json = JSON.parse(data);
        res.render('trade/orderSuccess', {
            title: '成功提交订单',
            data: json
        });
    });
});

router.get('/order/list',function(req,res,next){
    request.GetOrderList(req,function(data,success) {
        var json = JSON.parse(data);
        if(success){
            res.render('users/orders',{
                title:'个人中心-我的订单',
                data:json.data.data
            });
        }else{
            res.json(json);
        }
    });
});

router.post('/pay/payid',function(req,res,next) {
    request.GetPayId(req,function(data,success) {
        res.json(data);
    });
});

router.post('/pay/ali',function(req,res,next) {
    request.AliPay(req,function(data,success) {
        res.json(data);
    });
});

router.get('/coupon/list',function(req,res,next) {
    request.GetCouponList(req,function(data,success) {
        res.json(data);
    });
});

router.post('/coupon/addByInvite',function(req,res,next) {
    request.AddCouponByInvite(req,function(data,success) {
        res.json(data);
    });
});


router.get('/order/orderSuccess',function(req,res,next) {
    res.render('trade/orderSuccess',{
        title:'下单成功',
        data:{
            id:req.query.id,
            totalCost:req.query.totalCost
        }
    });
});

router.get('/order/paySuccess',function(req,res,next) {
    res.render('trade/paySuccess',{
        title:'支付成功',
        data:{}
    });
});

module.exports = router;




