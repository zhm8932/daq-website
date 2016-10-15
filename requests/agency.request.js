const path = require('path');
const fs = require('fs');

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
                return item.id==id
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
