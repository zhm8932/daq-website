/*
 * 公共请求中间件
 * */
var config = require('../config');
var api = require('../utils/api');
var util = require('../utils/ajax');
const path = require('path');
const fs = require('fs');

exports.get_service_area = function (req,res,next) {
    var bizParam = {
        activeState:1,
        parentId:'2140010948244539022'
    }

    util.ajax('GET', api.GetListByParentId,req,res,bizParam, function (err,data) {
        var json = JSON.parse(data);
        if(json) {
            console.log("goods_category:",err)
            res.locals.get_service_area=req.get_service_area = json.data
            res.locals.get_service_area_success = json.success
        }
        next()
    });
};
exports.get_city = function(req,res,next){
    var bizParam = {
        "type":"district", //地区
        "level":2,
        "activeState":1
    }

    util.ajax('GET',api.QueryDictionaryListByTypeAndLevel,req,res,bizParam,function (err,data) {
        var json = JSON.parse(data);
        if(!err) {
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

    util.ajax('GET',api.QueryDictionaryListByTypeAndLevel,req,res,bizParam,function (err,data) {
        console.log("goods_category:",err)
        var json = JSON.parse(data);
        if(json) {
            console.log("goods_category:",err)
            req.get_goods_category = json
            res.locals.get_goods_category_success = req.get_goods_category_success= !err
        }
        next()
    });
}

//获取文章栏目
exports.get_articles_category = function(req,res,next){
    req.autoHandleError = false;
    var bizParam = {
        "type":"article_category", //栏目
        "level":1,
        "activeState":1
    }

    util.ajax('GET',api.QueryDictionaryListByTypeAndLevel,req,res,bizParam,function (err,data) {
        var json = JSON.parse(data);
        if(json) {
            // console.log("goods_category:",json)
            req.get_articles_category = json
            res.locals.get_articles_category_success = req.get_articles_category_success= !err
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

    util.ajax('GET',api.QueryDictionaryListByTypeAndLevel,req,res,bizParam,function (err,data) {
        var json = JSON.parse(data);
        //console.log("get_doctor_title:",json)
        if(!err) {
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

    util.ajax('GET',api.HospitalAll,req,res,bizParam,function (err,data) {
        var json = JSON.parse(data);
        console.log("get_hospital_all:",json)
        if(!err){
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

    util.ajax('GET',api.DepartmentAll,req,res,bizParam,function (err,data) {
        var json = JSON.parse(data);
        if(json) {
            req.get_department = json;
        }
        next()
        //callback && callback(json,success);
    });
}
exports.get_department_list = function (req,res,next) {
    var dataPath = path.resolve(__dirname,'../data','departmentData.json');
    var id = req.params.id;
    console.log("dataPath:",dataPath)
    console.log("id:",id)
    fs.readFile(dataPath,function (err,data) {
        var json = JSON.parse(data.toString());
        var data = json.data;
        // console.log("data:",json)
        console.log("data:",typeof  json);
        // if(id){
        //     data = data.filter(function (item,index) {
        //         return item.id==id
        //     })
        // }
        res.locals.get_department_list = data;
        req.get_department_list = data;
        next();
    })
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

