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

    util.ajax('GET',api.QueryDictionaryListByTypeAndLevel,req,bizParam,function (data,success) {
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

    util.ajax('GET',api.QueryDictionaryListByTypeAndLevel,req,bizParam,function (data,success) {
        var json = JSON.parse(data);
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
        "level":1,
        "activeState":1
    }

    util.ajax('GET',api.QueryDictionaryListByTypeAndLevel,req,bizParam,function (data,success) {
        var json = JSON.parse(data);
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

    util.ajax('GET',api.QueryDictionaryListByTypeAndLevel,req,bizParam,function (data,success) {
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
    var hospitalId = req.hospitalId||'3190011408359331123';
    console.log("hospitalId:",hospitalId)
    var bizParam = {
        "request":{
            "rawRequest":{
                // "hospitalId": hospitalId||10
                "hospitalId": hospitalId
            }
        }
    }

    util.ajax('GET',api.DepartmentAll,req,bizParam,function (data,success) {
        var json = JSON.parse(data);
        if(json) {
            req.get_department = json;
        }
        next()
        //callback && callback(json,success);
    });
}


exports.judge_client =function(req,res,next){
    var ua = req.headers['user-agent'],
        $ = {};

    if (/mobile/i.test(ua)){
        $.Mobile = true;
        req.mobile = true;
    }else{
        req.mobile = false;
    }

    // if (/like Mac OS X/.test(ua)) {
    //     $.iOS = /CPU( iPhone)? OS ([0-9\._]+) like Mac OS X/.exec(ua)[2].replace(/_/g, '.');
    //     $.iPhone = /iPhone/.test(ua);
    //     $.iPad = /iPad/.test(ua);
    // }
    //
    // if (/Android/.test(ua))
    //     $.Android = /Android ([0-9\.]+)[\);]/.exec(ua)[1];
    //
    // if (/webOS\//.test(ua))
    //     $.webOS = /webOS\/([0-9\.]+)[\);]/.exec(ua)[1];
    //
    // if (/(Intel|PPC) Mac OS X/.test(ua))
    //     $.Mac = /(Intel|PPC) Mac OS X ?([0-9\._]*)[\)\;]/.exec(ua)[2].replace(/_/g, '.') || true;
    //
    // if (/Windows NT/.test(ua))
    //     $.Windows = /Windows NT ([0-9\._]+)[\);]/.exec(ua)[1];
    
    next();

}

