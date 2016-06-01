/*
* 科普模块  kepu
* */
var express = require('express');
var router = express.Router();
var request = require('../requests/dictionary.request');

router.get('/list/typeAndLevel',function(req,res,next) {
    request.GetListByTypeAndLevel(req,function(data,success) {
        res.json(data);
    });
});

router.get('/list/parentId',function(req,res,next) {
    request.GetListByParentId(req,function(data,success) {
        res.json(data);
    });
});

module.exports = router;




