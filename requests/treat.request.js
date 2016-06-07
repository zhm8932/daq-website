/**
 * Created by James on 16/4/12.
 */
var util = require('../utils/ajax');
var api = require('../utils/api');
var config = require('../config');


exports.GetRegsourceList = function (req, callback) {
    var query = req.query;
    var bizParam = {
        "pageSize": query.pageSize || 20,
        "pageIndex": query.pageIndex || 1,
        "hospitalId":query.hospitalId
    };

    util.ajax('GET', api.GetRegsourceList, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.DelCartItem = function (req, callback) {
    var bizParam = req.body;

    util.ajax('DELETE', api.DelCartItem, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};
