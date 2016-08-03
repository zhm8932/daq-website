/**
 * Created by James on 16/4/12.
 */
var util = require('../utils/ajax');
var api = require('../utils/api');
var config = require('../config');


exports.GetListByTypeAndLevel = function (req,res,callback) {
    var bizParam = req.query;
    
    util.ajax('GET', api.GetListByTypeAndLevel,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};

exports.GetListByParentId = function (req,res,callback) {
    var bizParam = req.query;

    util.ajax('GET', api.GetListByParentId,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};

exports.GetDetailByIds = function (req,res,callback) {
    var bizParam = {ids:req.ids};

    util.ajax('GET', api.GetDetailByIds,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};


