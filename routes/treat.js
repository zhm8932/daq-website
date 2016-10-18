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
var errorHandler = require('../utils/errorHandler');//处理错误

router.get('/regsource/list', function (req, res, next) {
    request.GetRegsourceList(req, res, function (err, data) {
        var json = JSON.parse(data);
        json.data.data = _tidyRegSourceList(json.data.data);
        res.render('treat/regList', {
            title: '诊疗服务',
            keywords: '都安全,诊疗服务,宫颈癌预约,女性生殖检查,男性生殖检查',
            description:'都安全提供两性生殖感染、宫颈癌筛查和女性阴道微生态等筛查诊疗一站式全流程医疗服务。',
            data: json.data
        });
    });
});

function _tidyRegSourceList(docListSchedule) {
    var scheduleForDays = _initScheduleForDays();
    for (var i = 0; i < docListSchedule.length; i++) {
        var docSchedule = docListSchedule[i];
        docSchedule.scheduleForDays = JSON.parse(JSON.stringify(scheduleForDays));
        var slotList = docSchedule.scheduleList;
        for (var j = 0; j < slotList.length; j++) {
            var slot = slotList[j];
            var date = moment(slot.start).format("MM/DD");
            if (docSchedule.scheduleForDays[date]) {
                docSchedule.scheduleForDays[date].capacity += slot.capacity;
                docSchedule.scheduleForDays[date].consume += slot.consume;
            }
        }
    }
    return docListSchedule;
}

//得到需要的日期及初始值:这里默认为一周
function _initScheduleForDays() {
    var needDaysNum = 7;
    var today = moment(new Date());//得到当前日期,如08/04
    var scheduleForDays = {};
    for (var i = 1; i <= needDaysNum; i++) {
        var day = today.add({days: 1}).format("MM/DD");
        scheduleForDays[day] = {
            capacity: 0,
            consume: 0,
            dayOfWeek: today.format('d'),
            date: today.format('YYYY-MM-DD')
        };
    }
    return scheduleForDays;
}


router.get('/reg/doctorView', authority.loginRequired, function (req, res, next) {
    var hasBindHISJson = null;
    var timeSlotJson = null;
    var query = req.query;
    async.parallel([function (callback) {
        request.GetRegTimeSlot(req, res, function (err, data) {
            timeSlotJson = JSON.parse(data);
            if(timeSlotJson.data){
                timeSlotJson.data.scheduleItems = _tidyTimeMap(timeSlotJson.data.scheduleItems);
                callback(null, data);
            }else{
                var err = new Error('未查询到相关数据');
                errorHandler.handleError(res,'500',err);
            }
        });
    }, function (callback) {
        users.HasBindHis(req, res, function (err, data) {
            hasBindHISJson = JSON.parse(data);
            callback(null, data);
        });
    }], function (err, results) {
        res.render('treat/regByDoc', {
            title: '诊疗服务',
            timeSlot: timeSlotJson.data,
            hasBind: hasBindHISJson.data,
            docName: query.docName,
            docTitle: query.docTitle,
            date: query.date,
            need:query.need
        });
    });
});


router.post('/reg/byDoc', function (req, res, next) {
    request.AddRegByDoc(req, res, function (err, data) {
        res.send(data);
    });
});

router.get('/reg/topay', function (req, res, next) {
    request.GetOrderDetail(req, res, function (err, data) {
        var json = JSON.parse(data);
        res.render('treat/regOrderSuccess', {
            title: '支付页面',
            data: json.data
        });
    });
});

router.get('/order/state', function (req, res, next) {
    request.GetOrderDetail(req, res, function (err, data) {
        var resJson = {"code": "200", msg: "", data: {}, "success": true};
        var json = JSON.parse(data);
        resJson.data.reservationStatus = json.data.reservationStatus;
        resJson.data.id = json.data.id;
        res.send(JSON.stringify(resJson));
    });
});

function _tidyTimeMap(timeObjArr) {
    // var newArr = [];
    for (var i = 0; i < timeObjArr.length; i++) {
        if (i < timeObjArr.length) {
            var timeObj = timeObjArr[i];
            if (timeObj.capacity == 0 || timeObj.capacity <= timeObj.consume) {
                timeObjArr.splice(i, 1);
                i--;
            }
        } else {
            break;
        }
    }
    return _bubble(timeObjArr, 'start');
}

function _bubble(arr, attr) {
    var temp;
    for (var i = 0; i < arr.length; i++) { //比较多少趟，从第一趟开始
        for (var j = 0; j < arr.length - i - 1; j++) { //每一趟比较多少次数
            var flag = false;
            if (attr) {
                flag = arr[j][attr] > arr[j + 1][attr];//从小到大排序
            } else {
                flag = arr[j] > arr[j + 1];
            }
            if (flag) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

module.exports = router;




