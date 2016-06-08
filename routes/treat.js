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
        }
    });
});

router.get('/reg/doctorView', function (req, res, next) {
    request.GetRegTimeSlot(req, function (data, success) {
        if(success){
            var json = JSON.parse(data);
            res.render('treat/regByDoc', {
                title: '诊疗服务',
                data: json.data
            });
        }
    });

});


router.post('/reg/byDoc',function (req, res, next) {
    request.AddRegByDoc(req, function (data, success) {
        res.json(data);
    });
});

module.exports = router;




