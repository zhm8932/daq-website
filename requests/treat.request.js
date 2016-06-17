/**
 * Created by James on 16/4/12.
 */
var util = require('../utils/ajax');
var api = require('../utils/api');
var config = require('../config');


exports.GetRegsourceList = function (req, callback) {
    var a = req.session.locals_address;
    var query = req.query;
    var bizParam = {
        city:req.session.locals_address[1].categoryId,
        pageSize:query.pageSize || 999,
        pageIndex:query.pageIndex || 1
    };

    util.ajax('GET', api.GetRegsourceList, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.GetRegTimeSlot = function (req, callback) {
    var bizParam = req.query;

    util.ajax('GET', api.GetRegTimeSlot, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.AddRegByDoc = function (req, callback) {
    var body = req.body;
    var bizParam = {
        "command": {
            "accountId": req.session.userInfo.accountCommon.id,
            "anonymous": 1,
            "customerId": "1605211925590557003",
            "patient": body.patient,
            "scheduleId": body.scheduleId,
            "telNum": "18904785568"
        }
    };

    util.ajax('POST', api.AddRegByDoc, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};
