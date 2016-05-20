/**
 * Created by James on 16/4/12.
 */
var util = require('../utils/ajax');
var api = require('../utils/api');
var config = require('../config');


exports.GetCartList = function (req, callback) {
    var currentPage = req.query.page || 1;

    var bizParam = {
        "pageIndex": currentPage,
        "pageSize": config.pageSize,
        "accountId": '15018510347'
    };
    
    util.ajax('GET', api.GetCartList, bizParam, function (data, success) {
        var json = JSON.parse(data);
        callback && callback(json, success);
    });
};



