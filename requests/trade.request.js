/**
 * Created by James on 16/4/12.
 */
var util = require('../utils/ajax');
var api = require('../utils/api');
var config = require('../config');


exports.GetCartList = function (req, callback) {
    var bizParam = {
        "accountId": req.session.userInfo.userAllInfo.accountCommon.id
    };

    console.log('===='+req.accessToken);

    util.ajax('GET', api.GetCartList, req, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.DelCartItem = function (req, callback) {
    var bizParam = req.body;

    util.ajax('DELETE', api.DelCartItem, req, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.DelCartItemBatch = function (req, callback) {
    var bizParam = {ids:JSON.parse(req.body.ids)};

    util.ajax('DELETE', api.DelCartItemBatch, req, bizParam, function (data, success) {
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
            "accountId": req.session.userInfo.userAllInfo.accountCommon.id
        }
    };

    util.ajax('POST', api.AddCartItem,req,  bizParam, function (data, success) {
        callback && callback(data);
    });
};


exports.CreateOrder = function (req, callback) {
    var orderPlaceDTO = JSON.parse(req.body.orderPlaceDTO);
    orderPlaceDTO.accountId = req.session.userInfo.userAllInfo.accountCommon.id;
    var bizParam = {
        orderPlaceDTO: orderPlaceDTO
    };

    util.ajax('POST', api.CreateOrder,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.CancelOrder = function (req, callback) {
    var bizParam = req.body;

    util.ajax('PUT', api.CancelOrder,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.DeleteOrder = function (req, callback) {
    var bizParam = req.body;

    util.ajax('DELETE', api.DeleteOrder,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.GetOrderList = function (req, callback) {
    var query = req.query;
    var bizParam = {
        pageSize: 3,
        pageIndex: query.page || 1,
        "accountId": req.session.userInfo.userAllInfo.accountCommon.id
    };

    util.ajax('GET', api.GetOrderList,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.GetOrderDetail = function (req, callback) {
    var bizParam = {
        id:req.query.id
    };

    util.ajax('GET', api.GetOrderDetail,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};





exports.GetPayId = function (req, callback) {
    var bizParam = req.body;

    util.ajax('POST', api.GetPayId, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.OrderPay = function (req, callback) {
    var body = req.body;
    var bizParam = {
        "command": {
            "rawRequest": {
                "id": body.id,
                "accountId": req.session.userInfo.userAllInfo.accountCommon.id,
                "payWay": body.payWay,
                "ext":body.ext
            }
        }
    };

    util.ajax('POST', api.OrderPay, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};