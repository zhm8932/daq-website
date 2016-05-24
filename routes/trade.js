/*
* 科普模块  kepu
* */
var express = require('express');
var router = express.Router();
var request = require('../requests/trade.request');

router.get('/cart/list',function(req,res,next) {
    request.GetCartList(req,function(json,success) {
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

router.post('/cart/delItem',function(req,res,next) {
    request.DelCartItem(req,function(data,success) {
        res.json(data);
    });
});


router.get('/order/comfirmView',function(req,res,next) {
    res.render('trade/orderConfirm',{
        title:'健康科普_文章列表',
        data:{}
    });
});

router.get('/order/orderSuccess',function(req,res,next) {
    res.render('trade/orderSuccess',{
        title:'健康科普_文章列表',
        data:{}
    });
});

router.get('/order/paySuccess',function(req,res,next) {
    res.render('trade/paySuccess',{
        title:'健康科普_文章列表',
        data:{}
    });
});

module.exports = router;




