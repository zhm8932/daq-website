/**
 * Created by James on 16/4/12.
 */
var util = require('../utils/ajax');
var api = require('../utils/api');
var config = require('../config');


exports.GetCartList = function (req,res,callback) {
    var bizParam = {
        "accountId": req.accountId
    };

    util.ajax('GET', api.GetCartList, req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};

exports.DelCartItem = function (req,res,callback) {
    var bizParam = req.body;

    util.ajax('DELETE', api.DelCartItem, req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};

exports.DelCartItemBatch = function (req,res,callback) {
    var bizParam = {ids:JSON.parse(req.body.ids)};

    util.ajax('DELETE', api.DelCartItemBatch, req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};

exports.AddCartItem = function (req,res,callback) {
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
            "accountId": req.accountId
        }
    };

    util.ajax('POST', api.AddCartItem,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};


exports.CreateOrder = function (req,res,callback) {
    var orderPlaceDTO = JSON.parse(req.body.orderPlaceDTO);
    orderPlaceDTO.accountId = req.accountId;
    var bizParam = {
        orderPlaceDTO: orderPlaceDTO
    };

    util.ajax('POST', api.CreateOrder,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};

exports.CancelOrder = function (req,res,callback) {
    var bizParam = req.body;

    util.ajax('PUT', api.CancelOrder,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};

exports.DeleteOrder = function (req,res,callback) {
    var bizParam = req.body;

    util.ajax('DELETE', api.DeleteOrder,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};

exports.GetOrderList = function (req, res,callback) {
    var query = req.query;
    var bizParam = {
        pageSize:config.pageSize||'5',
        pageIndex: query.page || 1,
        "accountId": req.accountId
    };

    util.ajax('GET', api.GetOrderList,req,res,bizParam, function (err, data) {
        callback && callback(err, data);
    });
};

exports.GetOrderDetail = function (req,res,callback) {
    var bizParam = {
        id:req.query.id
    };

    util.ajax('GET', api.GetOrderDetail,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};





exports.GetPayId = function (req,res,callback) {
    var bizParam = req.body;

    util.ajax('POST', api.GetPayId,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};

exports.OrderPay = function (req,res,callback) {
    var body = req.body;
    var bizParam = {
        "command": {
            "rawRequest": {
                "id": body.id,
                "accountId": req.accountId,
                "payWay": body.payWay,
                "ext":body.ext
            }
        }
    };

    util.ajax('POST', api.OrderPay,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};