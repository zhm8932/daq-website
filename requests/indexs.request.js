//套餐
var config = require('../config');
var api = require('../utils/api');
var util = require('../utils/ajax');
var crypto = require('crypto');
var dictionnary = require('../requests/dictionary.request');
var fs = require('fs');
var sm = require('sitemap');

exports.get_goods_list = function (req,res,next) {
    var goodsState = req.params.goodsState||2,
        currentPage = req.query.page||1;
    res.locals.goodsState = goodsState;
    var bizParam = {
        "pageIndex": currentPage,
        "pageSize": 6,
        "categoryId": '',
        "cityId": '',
        "goodsState": goodsState
    };

    util.ajax('GET',api.GoodsQuery,req,res,bizParam,function (err,data) {
        var json = JSON.parse(data);
        req.get_goods_list = json;
        next()
    });
};

//robots抓取
exports.robots = function (req,res,next) {
    console.log("req.url:",req.url)
    // res.send('rebots.txt')
    var stream=fs.createReadStream('./robots.txt',{flags:'r'});
    console.log("stream:",stream)
    stream.pipe(res);

    // fs.readFile("robots.txt", function (error, fileData) {
    //     if (error) {
    //         // 出现错误
    //         console.log("error:",error)
    //     }
    //     // 操作fileData
    //     res.format({
    //         text: function(){
    //             res.send(fileData)
    //         },
    //
    //     });
    //
    // });


};

var sitemap = sm.createSitemap ({
    hostname: 'http://beta.douanquan.com',
    cacheTime: 600000,        // 600 sec - cache purge period
    urls: [
        { url: '/',  changefreq: 'always', priority: 0.5,lastmodrealtime: true },
        { url: '/screenings/goods',  changefreq: 'always', priority: 0.5,lastmodrealtime: true },
        { url: '/healths',  changefreq: 'always',  priority: 0.5 },
    ]
});

exports.sitemap = function (req,res) {
    const env = process.env.NODE_ENV;
    const host = req.host;
    console.log("host:",host);
    console.log("envenvenv:",env);
    var xml=null
    if(env=="production"){
        xml = host==="rc.douanquan.com"?'./sitemap_rc.xml':'./sitemap.xml';
        // xml = './sitemap.xml'
    }else{
        xml = './sitemap_beta.xml'
    }
    var stream = fs.createReadStream(xml,{flags:'r'});
    stream.pipe(res);

    // sitemap.toXML( function (err, xml) {
    //     if (err) {
    //         return res.status(500).end();
    //     }
    //     console.log("xml:",xml)
    //     res.header('Content-Type', 'application/xml');
    //     res.send( xml );
    // });
}

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
    req.autoHandleError = false;
    util.ajax('POST',api.UserWebLogin,req,res, bizParam,function (err,data) {
        var json = JSON.parse(data);
        if(json.success){
            req.session.userInfo = json.data;
            res.cookie('cartNum','null',{maxAge:0});
            res.cookie('accountId',json.data.userAllInfo.accountCommon.id);
        }
        res.send(data);
    });

};

exports.logout = function (req,res,next) {
    // res.cookie('userInfo','null',{maxAge:0});
    // req.session.destroy(function(){
    //     console.log('退出登录');
    // });
    req.session.userInfo = null;
    res.cookie('accountId','null',{maxAge:0});
    res.cookie('cartNum','null',{maxAge:0});
    res.send('{"code":"200","success":"true"}');
};

exports.register = function (req,res,next) {
    // console.log('crypto:',crypto);
    var body = req.body;

    delete body.loginType;
    console.log('body:',body);
    body.origin = 'DAQ-WebPage';
    body.deviceUid = 'd1102';
    var bizParam = {
        "reqRegisterCommand":{
            "rawRequest":body
        }
    };
    req.autoHandleError = false;
    util.ajax('POST',api.UserRegister,req,res, bizParam,function (err,data) {
        var json = JSON.parse(data);
        res.send(data);
    });

};
exports.retrieve_password = function (req,res,next) {
    // console.log('crypto:',crypto);
    var body = req.body;

    console.log('body:',body);
    var bizParam = {
        "reqFindPasswordCommands":{
            rawRequest:body
        }
    };
    req.autoHandleError = false;
    util.ajax('PUT',api.UserPasswordFind,req,res, bizParam,function (err,data) {
        var json = JSON.parse(data);
        res.send(data);
    });

};


exports.checkLogin = function (req,res,next) {
    var _user = req.session.userInfo;
    var json = {"code":"200",login:false,"success":true};

    console.log("_user:",_user)
    if(_user) {
        json.login = true;
    }
    console.log("登录判断：",json,"_user:",_user)
    res.send(json);
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
    dictionnary.GetDetailByIds(req,res,function(err,data) {
        console.log("获取当前城市：",data)
        var parentJson = JSON.parse(data).data[0];
        var locals_address = [{"categoryId":parentJson.id,"name":parentJson.name,"level":parentJson.level},{"categoryId":city.id,"name":city.name,"level":city.level}];
        req.session.locals_address = locals_address;
        var resJson = {"code":"200","data":null,"msg":"","success":true};
        res.send(JSON.stringify(resJson));
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
    req.autoHandleError = false;

    util.ajax('post',api.SmsSendVerCode,req,res, bizParam,function (err,data) {
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