//套餐
var config = require('../config')
var api = require('../utils/api')
var util = require('../utils/ajax')
var crypto = require('crypto')

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

    util.ajax('GET',api.GoodsQuery,bizParam,function (data,success) {
        var json = JSON.parse(data);
        req.get_goods_list = json;
        next()
    });
};

exports.login = function (req,res,next) {
    console.log('crypto:',crypto);
    var body = req.body;
    var password = body.password;
    var content = 'password';
    var md5 = crypto.createHash('md5');
    md5.update(password);
    var d = md5.digest('hex');  //MD5值是5f4dcc3b5aa765d61d8327deb882cf99


    console.log('d:',d);
    var bizParam = {
        "req": {
            "rawRequest": {
                "account": body.account,
                "password":password

            }
        }
    };
    util.ajax('GET',api.Login,bizParam,function (data,success) {
        if(success){
            res.cookie('userInfo',JSON.parse(data).data.userAllInfo, { maxAge: 1000*60*60*12 });
            // req.session.user = JSON.parse(data).data.userAllInfo;
        }
        res.send(data)
    });

};
exports.logout = function (req,res,next) {
    res.cookie('userInfo','null',{maxAge:0});
    res.send('{"code":"200","success":"true"}');

};