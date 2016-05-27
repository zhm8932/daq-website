/*
 * 公共请求中间件
 * */
var config = require('../config')
var api = require('../utils/api')
var util = require('../utils/ajax')

exports.get_city = function(req,res,next){
    var bizParam = {
        "type":"district", //地区
        "level":2,
        "activeState":1
    }

    util.ajax('GET',api.QueryDictionaryListByTypeAndLevel,bizParam,function (data,success) {
        var json = JSON.parse(data);
        console.log("get_city:",json)
        if(json&&json.success) {
            console.log("333333333:")
            req.get_city = json.data;
        }
        next()
        //callback && callback(json,success);
    });
}
//获取商品栏目
exports.get_goods_category = function(req,res,next){
    var bizParam = {
        "type":"goods_category", //栏目
        "level":1,
        "activeState":1
    }

    util.ajax('GET',api.QueryDictionaryListByTypeAndLevel,bizParam,function (json,success) {
        // var json = JSON.parse(data)
        if(json) {
            // console.log("goods_category:",json)
            req.get_goods_category = json
            res.locals.get_goods_category_success = req.get_goods_category_success= json.success
        }
        next()
    });
}

//获取文章栏目
exports.get_articles_category = function(req,res,next){
    var bizParam = {
        "type":"article_category", //栏目
        "level":2,
        "activeState":1
    }

    util.ajax('GET',api.QueryDictionaryListByTypeAndLevel,bizParam,function (json,success) {
        // var json = JSON.parse(data)
        if(json) {
            // console.log("goods_category:",json)
            req.get_articles_category = json
            res.locals.get_articles_category_success = req.get_articles_category_success= json.success
        }
        next()
    });
}
exports.get_doctor_title = function(req,res,next){
    var bizParam = {
        "type":"doctor_title", //医生职称
        "level":1,
        "activeState":1
    }

    util.ajax('GET',api.QueryDictionaryListByTypeAndLevel,bizParam,function (data,success) {
        var json = JSON.parse(data);
        //console.log("get_doctor_title:",json)
        if(json&&json.success) {
            req.get_doctor_title = json.data;
        }
        next()
        //callback && callback(json,success);
    });
}
exports.get_hospital_all = function(req,res,next){
    var bizParam = {
        "request":{
            "rawRequest":{

            }
        }
    }

    util.ajax('GET',api.HospitalAll,bizParam,function (data,success) {
        var json = JSON.parse(data);
        console.log("get_hospital_all:",json)
        if(json&&json.success){
            req.get_hospital_all = json.data;
        }
        next()
        //callback && callback(json,success);
    });
}

exports.get_department =function(req,res,next){
    var hospitalId = req.hospitalId
    console.log("hospitalId:",hospitalId)
    var bizParam = {
        "request":{
            "rawRequest":{
                // "hospitalId": hospitalId||10
                "hospitalId": hospitalId
            }
        }
    }

    util.ajax('GET',api.DepartmentAll,bizParam,function (data,success) {
        // var json = JSON.parse(data);
        var json = data;
        if(json) {
            req.get_department = json;
        }
        next()
        //callback && callback(json,success);
    });
}