/*
 * 科普模块  kepu
 * */
var express = require('express');
var async = require('async');
var router = express.Router();
var request = require('../requests/treat.request.js');
var users = require('../requests/users.request.js');
var authority = require('../handlers/authority.handler');

router.get('/regsource/list', function (req, res, next) {
    request.GetRegsourceList(req,res,function (err,data) {
        var json = JSON.parse(data);
        res.render('treat/regList', {
            title: '诊疗服务',
            data: json.data
        });
    });
});

function tidyRegSourceList(){

}


router.get('/reg/doctorView',authority.loginRequired, function (req, res, next) {
    var hasBindHISJson = null;
    var timeSlotJson = null;
    async.parallel([function (callback) {
        request.GetRegTimeSlot(req,res,function (err,data) {
            timeSlotJson = JSON.parse(data);
            timeSlotJson.data.timeWithIdMap = tidyTimeMap(timeSlotJson.data.timeWithIdMap);
            callback(null, data);
        });
    }, function(callback){
        users.HasBindHis(req,res,function (err,data) {
            hasBindHISJson = JSON.parse(data);
            callback(null, data);
        });
    }],function (err, results) {
        res.render('treat/regByDoc', {
            title: '诊疗服务',
            timeSlot: timeSlotJson.data,
            hasBind: hasBindHISJson.data
        });
    });
    // request.GetRegTimeSlot(req,res,function (err,data) {
    //     var timeSlotJson = JSON.parse(data);
    //     timeSlotJson.data.timeWithIdMap = tidyTimeMap(timeSlotJson.data.timeWithIdMap);
    //
    //     users.HasBindHis(req,res,function (err,data) {
    //         var hasBindHISJson = JSON.parse(data);
    //         res.render('treat/regByDoc', {
    //             title: '诊疗服务',
    //             timeSlot: timeSlotJson.data,
    //             hasBind: hasBindHISJson.data
    //         });
    //     });
    // });
});


router.post('/reg/byDoc', function (req, res, next) {
    request.AddRegByDoc(req,res,function (err,data) {
        res.send(data);
    });
});

router.get('/reg/topay', function (req, res, next) {
    request.GetOrderDetail(req,res,function (err,data) {
        var json = JSON.parse(data);
        res.render('treat/regOrderSuccess', {
            title: '支付页面',
            data: json.data
        });
    });
});

router.get('/order/state', function (req, res, next) {
    request.GetOrderDetail(req,res,function (err,data) {
        var resJson = {"code": "200", msg: "", data: {}, "success": true};
        var json = JSON.parse(data);
        resJson.data.reservationStatus = json.data.reservationStatus;
        resJson.data.id = json.data.id;
        res.send(JSON.stringify(resJson));
    });
});

function tidyTimeMap(timeObjJson){
    var timeArr = [];
    var timeObjArr = [];
    for(var time in timeObjJson){
        var timeObj = timeObjJson[time];
        if(timeObj.unConsume > 0){
            timeArr.push(time);
        }
    }

    timeArr.sort();

    for(var i = 0; i < timeArr.length; i++){
        var time = timeArr[i];
        timeObjArr.push({time:time,timeDetail:timeObjJson[time]});
    }

    return timeObjArr;
}

module.exports = router;




