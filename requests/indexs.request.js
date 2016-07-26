//套餐
var config = require('../config');
var api = require('../utils/api');
var util = require('../utils/ajax');
var crypto = require('crypto');
var dictionnary = require('../requests/dictionary.request');

exports.get_goods_list = function (req,res,next) {
    var goodsState = req.params.goodsState||2,
        currentPage = req.query.page||1;
    res.locals.goodsState = goodsState;
    var bizParam = {
        "pageIndex": currentPage,
        "pageSize": 6,
        "categoryId": '',
        "goodsState": goodsState
    };

    util.ajax('GET',api.GoodsQuery,req, bizParam,function (data,success) {
        var json = JSON.parse(data);
        req.get_goods_list = json;
        next()
    });
};

exports.login = function (req,res,next) {
    // console.log('crypto:',crypto);
    var body = req.body;

    console.log('body:',body)
    // var password = body.password;
    // var content = 'password';
    // var md5 = crypto.createHash('md5');
    // md5.update(password);
    // var d = md5.digest('hex');  //MD5值是5f4dcc3b5aa765d61d8327deb882cf99
    // console.log('d:',d);
    var bizParam = {
        "loginParam": body
    };
    console.log("bizParam:",bizParam)
    util.ajax('post',api.UserWebLogin,req, bizParam,function (data,success) {
        if(success){
            req.session.userInfo = JSON.parse(data).data;
            res.cookie('accountId',JSON.parse(data).data.userAllInfo.accountCommon.id);

        }
        res.send(data)
    });

};
exports.logout = function (req,res,next) {
    // res.cookie('userInfo','null',{maxAge:0});
    req.session.destroy(function(){
        console.log('退出登录');
    });
    res.cookie('accountId','null',{maxAge:0});
    res.send('{"code":"200","success":"true"}');
};


exports.checkLogin = function (req,res,next) {
    var _user = req.session.userInfo;
    var json = {"code":"200",login:false,"success":true};
    
    if(_user) {
        json.login = true;
        req.accountId = _user.userAllInfo.accountCommon.id;
    }
    res.send(JSON.stringify(json));
};

exports.loginView = function (req,res,next) {
    res.render('login',{
          title:'都安全登录'
    });
};

exports.changeCity = function (req,res,next) {
    var city = req.query.city;
    console.log("city:::",city)
    var ids = [];
    ids.push(city.parentId);
    req.ids = ids;
    dictionnary.GetDetailByIds(req,function(data,success) {
        console.log("获取当前城市：",data)
        var parentJson = JSON.parse(data).data[0];
        var locals_address = [{"categoryId":parentJson.id,"name":parentJson.name,"level":parentJson.level},{"categoryId":city.id,"name":city.name,"level":city.level}];
        req.session.locals_address = locals_address;
        var resJson = {"code":"200","data":null,"msg":"","success":true};
        res.json(JSON.stringify(resJson));
    });

};

exports.getVerCode = function (req,res,next) {
    var body = req.body;
    var password = body.password;
    var content = 'password';
    var bizParam = {
        "request": {
            "rawRequest":body
        }
    };
    util.ajax('post',api.SmsSendVerCode,req, bizParam,function (data,success) {
        res.send(data)
    });

};
exports.userAgreement = function (req,res) {
    res.render('userAgreement',{
        title:'都安全用户协议',
        keywords:'都安全用户协议',
        description:'都安全用户协议'
    });
}