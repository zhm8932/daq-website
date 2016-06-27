/**
 * Created by James on 16/4/12.
 */
var util = require('../utils/ajax');
var api = require('../utils/api');
var config = require('../config');


exports.GetListByTypeAndLevel = function (req, callback) {
    var bizParam = req.query;
    
    util.ajax('GET', api.GetListByTypeAndLevel,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.GetListByParentId = function (req, callback) {
    var bizParam = req.query;

    util.ajax('GET', api.GetListByParentId,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.GetDetailByIds = function (req, callback) {
    var bizParam = {ids:req.ids};

    util.ajax('GET', api.GetDetailByIds,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};


