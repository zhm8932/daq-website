/**
 * Created by James on 16/4/12.
 */
var util = require('../utils/ajax');
var api = require('../utils/api');
var config = require('../config');


exports.GetListByTypeAndLevel = function (req, callback) {
    var bizParam = req.query;
    
    util.ajax('GET', api.GetListByTypeAndLevel, bizParam, function (data, success) {
        var json = JSON.parse(data);
        callback && callback(json, success);
    });
};

exports.GetListByParentId = function (req, callback) {
    var bizParam = req.query;

    util.ajax('GET', api.GetListByParentId, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};


