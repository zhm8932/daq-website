/*
 * 科普模块  kepu
 * */
var express = require('express');
var router = express.Router();
var request = require('../requests/treat.request.js');
var authority = require('../handlers/authority.handler');

router.get('/regsource/list', function (req, res, next) {
    request.GetRegsourceList(req, function (data, success) {
        var json = JSON.parse(data);
        if (success) {
            res.render('treat/regList', {
                title: '诊疗服务',
                data: json.data
            });
        } else {
            res.json(json);
        }
    });
});

router.get('/reg/doctor', function (req, res, next) {
    res.render('treat/regByDoc', {
        title: '诊疗服务',
        data: {}
    });
});


router.post('/cart/addItem', authority.loginRequired, function (req, res, next) {
    request.AddCartItem(req, function (data, success) {
        res.json(data);
    });
});

module.exports = router;




