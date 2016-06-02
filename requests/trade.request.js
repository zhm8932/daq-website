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
        callback && callback(data, success);
    });
};

exports.DelCartItem = function (req, callback) {
    var bizParam = req.body;

    util.ajax('DELETE', api.DelCartItem, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.AddCartItem = function (req, res, dataType, callback) {
    var body = req.body;
    var bizParam = {
        "cartItem": {
            "cartItemAttrs": [
                {
                    "attributeName": "address",
                    "value": body.address
                },
                {
                    "attributeName": "transmit_type",
                    "value": body.transmit_type
                }
            ],
            "count": 1,
            "goodsId": body.goodsId,
            "accountId": "2110021051481592077"
        }
    };

    util.ajax('POST', api.AddCartItem, bizParam, res, dataType, function (data, success) {
        callback && callback(data);
    });
};


exports.GetCouponList = function (req, callback) {
    var query = req.query;
    var accountId = '2110021051481592077';
    var bizParam = {
        pageSize: query.pageSize || 10,
        useState: query.useState,
        pageIndex: query.pageIndex || 1,
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

exports.CreateOrder = function (req, callback) {
    var orderPlaceDTO = JSON.parse(req.body.orderPlaceDTO);
    orderPlaceDTO.accountId = '2110021051481592077';
    var bizParam = {
        orderPlaceDTO: orderPlaceDTO
    };

    util.ajax('POST', api.CreateOrder, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.GetOrderList = function (req, callback) {
    var query = req.query;
    var bizParam = {
        pageSize: query.pageSize || 5,
        pageIndex: query.pageIndex || 1,
        "accountId": '2110021051481592077'
    };

    util.ajax('GET', api.GetOrderList, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.GetPayId = function (req, callback) {
    var bizParam = req.body;

    util.ajax('POST', api.GetPayId, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.AliPay = function (req, callback) {
    var bizParam = {
        "command": {
            "rawRequest": {
                "id": req.body.id,
                "accountId": '2110021051481592077',
                "payWay": req.body.payWay
            }
        }
    };

    util.ajax('POST', api.AliPay, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};