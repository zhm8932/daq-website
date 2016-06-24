/*
 * 科普模块  kepu
 * */
var express = require('express');
var router = express.Router();
var request = require('../requests/treat.request.js');
var users = require('../requests/users.request.js');
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

// router.get('/reg/doctorView', function (req, res, next) {
//     request.GetRegTimeSlot(req, function (data, success) {
//         if (success) {
//             var json = JSON.parse(data);
//             res.render('treat/regByDoc', {
//                 title: '诊疗服务',
//                 data: json.data
//             });
//         }
//     });
//
// });


router.get('/reg/doctorView',authority.loginRequired, function (req, res, next) {
    request.GetRegTimeSlot(req, function (data, success) {
        var timeSlotJson = JSON.parse(data);

        users.HasBindHis(req, function (data, success) {
            var hasBindHISJson = JSON.parse(data);
            res.render('treat/regByDoc', {
                title: '诊疗服务',
                timeSlot: timeSlotJson.data,
                hasBind: hasBindHISJson.data
            });
        });
    });
});


router.post('/reg/byDoc', authority.loginRequired, function (req, res, next) {
    request.AddRegByDoc(req, function (data, success) {
        res.json(data);
    });
});

router.get('/reg/topay', function (req, res, next) {
    var query = req.query;
    res.render('treat/regOrderSuccess', {
        title: '支付页面',
        data: {
            id: query.id,
            totalCost: query.cost,
            orderId:query.orderId
        }
    });
});

router.get('/order/state',authority.loginRequired, function (req, res, next) {
    request.GetOrderDetail(req, function (data, success) {
        var resJson = {};
        if (success) {
            resJson = {"code": "200", msg: "", data: {}, "success": true};
            var json = JSON.parse(data);
            resJson.data.reservationStatus = json.data.reservationStatus;
            resJson.data.id = json.data.id;
        }else{
            resJson = {"code": "200", msg: "查询状态失败", data: {}, "success": false};
        }
        res.json(JSON.stringify(resJson));
    });
});

function tidyTimeMap(){

}

module.exports = router;




