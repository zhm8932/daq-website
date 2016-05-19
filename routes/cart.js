/*
* 科普模块  kepu
* */
var express = require('express');
var router = express.Router();
var request = require('../requests/cart.request');

router.get('/list',function(req,res,next) {
    request.GetCartList(req,function(json,success) {
        if(success){
            // var query = req.query;
            res.locals.pagecount=json.data.pageCount;
            res.locals.currentpage = req.query.page||1;
            // delete query.page;
            // var queryStr = '';
            // for(var attr in query){
            //     queryStr += attr + '=' + query[attr] + '&';
            // }
            // res.locals.query = queryStr;
            // res.locals.category = query.category || '1';
            // res.locals.tc = query.tc || '';
            res.render('cart/list',{
                title:'健康科普_文章列表',
                data:json.data.data
            });
        }else{
            res.json(json);
        }
    });
});

module.exports = router;




