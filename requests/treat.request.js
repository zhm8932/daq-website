/**
 * Created by James on 16/4/12.
 */
var util = require('../utils/ajax');
var api = require('../utils/api');
var config = require('../config');


exports.GetRegsourceList = function (req,res,callback) {
    var query = req.query;
    var bizParam = {
        city:req.session.locals_address[1].categoryId,
        pageSize:query.pageSize || 999,
        pageIndex:query.pageIndex || 1
    };

    util.ajax('GET', api.GetRegsourceList,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};

exports.GetRegTimeSlot = function (req,res,callback) {
    var body = req.body;
    var bizParam = {
        date:body.date,
        doctorId:body.doctorId
    };

    util.ajax('GET', api.GetRegTimeSlot,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};

exports.AddRegByDoc = function (req,res,callback) {
    var body = req.body;
    var bizParam = {
        "command": {
            "accountId": req.accountId,
            "scheduleId": body.scheduleId
        }
    };

    util.ajax('POST', api.AddRegByDoc,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};

exports.GetOrderDetail = function (req,res,callback) {
    var bizParam = {
        role:1,
        reservationId:req.query.reservationId
    };

    util.ajax('GET', api.GetRegDetail,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};