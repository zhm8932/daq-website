/**
 * Created by James on 16/4/12.
 */
var util = require('../utils/ajax');
var api = require('../utils/api');
var config = require('../config');


exports.GetRegsourceList = function (req, callback) {
    var query = req.query;
    var bizParam = {
        city:req.session.locals_address[1].categoryId,
        pageSize:query.pageSize || 999,
        pageIndex:query.pageIndex || 1
    };

    util.ajax('GET', api.GetRegsourceList,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.GetRegTimeSlot = function (req, callback) {
    var bizParam = req.query;

    util.ajax('GET', api.GetRegTimeSlot,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.AddRegByDoc = function (req, callback) {
    var body = req.body;
    var bizParam = {
        "command": {
            "accountId": req.session.userInfo.userAllInfo.accountCommon.id,
            "scheduleId": body.scheduleId
        }
    };

    util.ajax('POST', api.AddRegByDoc,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.GetOrderDetail = function (req, callback) {
    var bizParam = {
        role:1,
        reservationId:req.query.reservationId
    };

    util.ajax('GET', api.GetRegDetail,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};