/*
 * 诊疗服务
 * */
var express = require('express');
var async = require('async');
var moment = require('moment');
var router = express.Router();
var request = require('../requests/treat.request.js');
var users = require('../requests/users.request.js');
var authority = require('../handlers/authority.handler');

router.get('/regsource/list', function (req, res, next) {
    request.GetRegsourceList(req,res,function (err,data) {
        var json = JSON.parse(data);
        json.data.data = _tidyRegSourceList(json.data.data);
        res.render('treat/regList', {
            title: '诊疗服务',
            data: json.data
        });
    });
});

function _tidyRegSourceList(docListSchedule){
    var scheduleForDays = _initScheduleForDays();
    for(var i = 0; i < docListSchedule.length; i++){
        var docSchedule = docListSchedule[i];
        docSchedule.scheduleForDays = JSON.parse(JSON.stringify(scheduleForDays));
        var slotList = docSchedule.scheduleList;
        for(var j = 0; j < slotList.length; j++){
            var slot = slotList[j];
            var date = moment(slot.start).format("MM/DD");
            if(docSchedule.scheduleForDays[date]){
                docSchedule.scheduleForDays[date].capacity += slot.capacity;
                docSchedule.scheduleForDays[date].consume += slot.consume;
            }
        }
    }
    return docListSchedule;
}

//得到需要的日期及初始值:这里默认为一周
function _initScheduleForDays(){
    var needDaysNum = 7;
    var today = moment(new Date());//得到当前日期,如08/04
    var scheduleForDays = {};
    for(var i = 1; i <= needDaysNum; i++){
        var day = today.add({days:1}).format("MM/DD");
        var dayOfWeek = today.format('d');
        scheduleForDays[day] = {
            capacity:0,
            consume:0,
            dayOfWeek:dayOfWeek
        };
    }
    return scheduleForDays;
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




