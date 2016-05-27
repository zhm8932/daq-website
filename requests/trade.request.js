/**
 * Created by James on 16/4/12.
 */
var util = require('../utils/ajax');
var api = require('../utils/api');
var config = require('../config');


exports.GetCartList = function (req, callback) {
    var bizParam = {
        "accountId": '2110021051481592077'
    };
    
    util.ajax('GET', api.GetCartList, bizParam, function (data, success) {
        var json = JSON.parse(data);
        callback && callback(json, success);
    });
};

exports.DelCartItem = function (req, callback) {
    var bizParam = req.body;

    util.ajax('DELETE', api.DelCartItem, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.AddCartItem = function (req, callback) {
    var bizParam = req.body;

    util.ajax('POST', api.AddCartItem, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};


exports.GetCouponList = function (req, callback) {
    var query = req.query;
    var accountId = '2110021051481592077';
    var bizParam = {
        pageSize:query.pageSize || 10,
        useState:query.useState,
        pageIndex:query.pageIndex || 1,
        accountId: accountId
    };

    util.ajax('GET', api.GetCouponList, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.AddCouponByInvite = function (req, callback) {
    req.body.accountId = '2110021051481592077';
    var bizParam = req.body;

    util.ajax('POST', api.AddCouponByInvite, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};
