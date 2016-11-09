const path = require('path');
const fs = require('fs');
var util = require('../utils/ajax');
var config = require('../config');

exports.get_clinic_list = function (req,res,next) {
    var query = req.query;
    var currentPage = query.page||1;
    var bizParam = {
        "pageSize": config.pageSize,
        "pageIndex": currentPage,

    };

    console.log("bizParam:",bizParam)
    util.ajax('GET', api.HospitalPage,req,res,bizParam, function (err,data) {
        var json = JSON.parse(data);
        var get_clinic_list_success = res.locals.get_clinic_list_success = json.success
        if(get_clinic_list_success){
            res.locals.get_clinic_list = json.data.data
        }
        next();
        //callback && callback(json,success);
    });
}

exports.get_clinic_detail = function(req,res,next){
    var id = req.params.id||req.query.hospitalid;
    var bizParam = {
        "hospitalId": id
    };
    util.ajax('GET', api.HospitalGet,req,res,bizParam, function (err,data) {
        var json = JSON.parse(data);
        var get_clinic_detail_success = req.get_clinic_detail_success = res.locals.get_clinic_detail_success = json.success;
        if(get_clinic_detail_success){
            res.locals.get_clinic_detail = req.get_clinic_detail = json.data;
        }

        next()

        //callback && callback(json,success);
    });
}

exports.get_hospital_time = function(req,res,next){
    var query = req.query;
    var hospitalId = req.params.id||query.hospitalId;
    var bizParam = {
        "hospitalId":hospitalId,
        "timeType":1
    }
    req.autoHandleError = false;
    util.ajax('GET', api.HospitalTimeGetByType,req,res,bizParam, function (err,data) {
        var json = JSON.parse(data);
        var get_hospital_time_success = res.locals.get_hospital_time_success = json.success;
        if(get_hospital_time_success){
            // console.log("json.data:",json.data)
            res.locals.get_hospital_time=json.data.sort((m,n)=>{
                return m.week-n.week
            })
        }else{
            res.locals.get_hospital_time = json
        }
        next()


    });
}

exports.get_agency_list = function (req,res,next) {
    var dataPath = path.resolve(__dirname,'../data','agencysData.json');
    var area = req.params.area;
    console.log("dataPath:",dataPath)
    console.log("area:",area)
    fs.readFile(dataPath,function (err,data) {
        var json = JSON.parse(data.toString());
        var data = json.data;
        // console.log("data:",json)
        // console.log("data:",typeof  json);
        if(area){
            data = data.filter(function (item,index) {
                return item.area==area
            })
        }
        res.locals.get_agency_list = data;
        next();
    })
}

exports.get_agency_detail = function (req,res,next) {
    var dataPath = path.resolve(__dirname,'../data','agencysData.json');
    var id = req.params.id;
    console.log("dataPath:",dataPath)
    console.log("id:",id)
    fs.readFile(dataPath,function (err,data) {
        var json = JSON.parse(data.toString());
        var data = json.data;
        // console.log("data:",json)
        console.log("data:",typeof  json);
        if(id){
            data = data.filter(function (item,index) {
                var hospitalName;
                if(req.get_clinic_detail_success){
                    hospitalName = req.get_clinic_detail.hospitalName
                }

                return item.title==hospitalName
                // return item.id==id   //不同环境的id不一致
            })
        }
        res.locals.get_agency_detail = data[0];
        req.get_agency_detail = data[0];
        next();
    })
}


exports.get_department_detail = function (req,res,next) {
    var dataPath = path.resolve(__dirname,'../data','departmentData.json');
    var id = req.params.id;
    console.log("dataPath:",dataPath)
    console.log("id:",id)
    fs.readFile(dataPath,function (err,data) {
        var json = JSON.parse(data.toString());
        var data = json.data;
        // console.log("data:",json)
        console.log("data:",typeof  json);
        if(id){
            data = data.filter(function (item,index) {
                return item.id==id
            })
        }
        res.locals.get_department_detail = data[0];
        req.get_department_detail = data[0];
        next();
    })
}

exports.get_feature_detail = function (req,res,next) {
    var dataPath = path.resolve(__dirname,'../data','featuresData.json');
    var id = req.params.id;
    fs.readFile(dataPath,function (err,data) {
        var json = JSON.parse(data.toString());
        var data = json.data;
        // console.log("data:",json)
        if(id){
            data = data.filter(function (item,index) {
                return item.id==id
            })
        }
        res.locals.get_feature_detail = data[0];
        req.get_feature_detail = data[0];
        next();
    })
}
