/*
* 科普模块  kepu
* */
var express = require('express');
var router = express.Router();
var request = require('../requests/dictionary.request');

router.get('/list/typeAndLevel',function(req,res,next) {
    request.GetListByTypeAndLevel(req,res,function(err,data) {
        res.send(data);
    });
});

router.get('/list/parentId',function(req,res,next) {
    request.GetListByParentId(req,res,function(err,data) {
        res.send(data);
    });
});

router.get('/detail/ids',function(req,res,next) {
    request.GetDetailByIds(req,res,function(err,data) {
        res.send(data);
    });
});

module.exports = router;




