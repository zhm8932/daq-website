/**
 * Created by James on 16/4/12.
 */
var util = require('../utils/ajax');
var api = require('../utils/api');
var config = require('../config');


exports.GetCartList = function (req, callback) {
    var bizParam = {
        "accountId": req.cookies.userInfo.accountCommon.id
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
