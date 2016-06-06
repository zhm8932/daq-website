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

router.get('/regsource/list', function (req, res, next) {
    request.GetRegsourceList(req, function (data, success) {
        var json = JSON.parse(data);
        if (success) {
            res.render('trade/cart', {
                title: '购物车',
                data: json.data
            });
        } else {
            res.json(json);
        }
    });
});

router.post('/cart/addItem', authority.loginRequired, function (req, res, next) {
    request.AddCartItem(req, function (data, success) {
        res.json(data);
    });
});

module.exports = router;




