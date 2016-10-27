var express = require('express');
var router = express.Router();
var Handlers = require('../handlers/index.handler');
var Requests = require('../requests/indexs.request');
var UsersRequests = require('../requests/users.request');
// var SiteMapRequests = require('../requests/siteMap.request');
var ScreeningsRequests = require('../requests/screenings.request');
var Middlewares = require('../requests/middlewares.request.js');
var authority = require('../handlers/authority.handler');
var Tools = require('../utils/tools'); //判断浏览器
var fs = require('fs');
// console.log(global)



global.config=config = require('../config');
global.api = require('../utils/api');
global.util= util = require('../utils/ajax');

//index.js首先会被加载

router.use(function(req, res, next) {

    console.log('now:' + Date.now());
    // console.log('req.body',req.body);
    // console.log('req.session',req.session);
    console.log('req.url',req.url);
    console.log('req.host',req.host);
    // var host = req.host;
    // if(host=='localhost'){
    //     config.options.host=host
    // }else{
    //     config.options.host='1ac256e68d824785.m.cnsza.kvstore.aliyuncs.com'
    // }
    //
    // global.config.options = config.options
    // console.log("config.options:",config.options)
    //城市


    if(!req.session){
        return next(new Error('no session')) ;// handle error
    }

    // req.session.locals_address = null;
    if(req.session&&req.session.locals_address){
        res.locals.locals_address = JSON.stringify(req.session.locals_address);
    }else{
        req.session.locals_address = config.addressJSON;
        res.locals.locals_address = JSON.stringify(config.addressJSON);
    }

    // console.log("req.session.locals_address:",req.session.locals_address)
    if(req.session.userInfo){
        //每次请求首页都会动态从session获取值，保存在本地变量中
        req.accountId = req.session.userInfo.userAllInfo.accountCommon.id;
        //从session获取值和accountId，保存在和req.accountId
        res.locals.account  = req.session.userInfo.userAllInfo.accountCommon.account;
    }

    var browser = Tools.browser(req);
    global.browser = browser;
    res.locals.browser = browser;  //判断浏览器版本，模板调用
    next();
});

router.get('*',Handlers.get_wap_tit,Handlers.get_cart_num);
/* GET home page. */
// router.get('/',Requests.get_goods_list,Middlewares.get_department,Handlers.index);
router.get('/',Middlewares.get_goods_category,ScreeningsRequests.get_goods_list,Middlewares.get_department_list,Handlers.index);

router.get('/robots.txt',Requests.robots);

// router.get('/sitemap.xml',SiteMapRequests.siteMap)

router.get('/sitemap.xml',Requests.sitemap);

router.post('/login',Requests.login);


router.post('/logout',Requests.logout);

router.get('/checkLogin',Requests.checkLogin);
router.post('/hasBindHis',UsersRequests.HasBindHis);

router.get('/login',Requests.loginView);

router.get('/register',Handlers.render_register);

router.post('/register',Requests.register);

router.get('/rPassword',Handlers.render_retrieve_password);
router.put('/rPassword',Requests.retrieve_password);

router.get('/changeCity',Requests.changeCity);

router.post('/getVerCode',Requests.getVerCode);
router.get('/userAgreement',Requests.userAgreement);

module.exports = router;
