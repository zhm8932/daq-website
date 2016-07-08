var express = require('express');
var router = express.Router();
var Handlers = require('../handlers/index.handler');
var Requests = require('../requests/indexs.request');
var UsersRequests = require('../requests/users.request');
var Middlewares = require('../requests/middlewares.request.js');
var authority = require('../handlers/authority.handler');
var Tools = require('../utils/tools'); //判断浏览器
// console.log(global)

global.config=config = require('../config');
global.api = require('../utils/api')
global.util= util = require('../utils/ajax');


// console.log(global)
//index.js首先会被加载

router.use(function(req, res, next) {
    console.log('now:' + Date.now());
    console.log('req.body',req.body);
    console.log('req.session',req.session);
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
    if(req.session&&req.session.locals_address){
        res.locals.locals_address = JSON.stringify(req.session.locals_address);
    }else{
        req.session.locals_address = config.addressJSON;
        res.locals.locals_address = JSON.stringify(config.addressJSON);
        console.log("1111111111111")
    }
    console.log("222222222222222222222222")
    if(!req.session){
        return next(new Error('no session')) // handle error
    }
    if(req.session.userInfo){
        var account = req.session.userInfo.userAllInfo.accountCommon.account;
        res.locals.account = account; //每次请求首页都会动态从session获取值，并保存在本地变量中
    }

    // req.accessToken = (req.session.userInfo && req.session.userInfo.accessToken) || '11';



    var browser = Tools.browser(req);
    global.browser = browser;
    res.locals.browser = browser;  //判断浏览器版本，模板调用




    // //购物车数量:暂时不做
    // if(req.session.cart_num){
    //     res.locals.cart_num = req.session.cart_num;
    // }else{
    //     res.locals.cart_num = 0;
    // }

    // console.log('看你执行了几次');
    next();
});

router.get('*',Handlers.get_wap_tit,Handlers.get_cart_num);
/* GET home page. */
router.get('/',Requests.get_goods_list,Middlewares.get_department,Handlers.index);

router.post('/login',Requests.login);


router.post('/logout',Requests.logout);

router.get('/checkLogin',Requests.checkLogin);
router.post('/hasBindHis',UsersRequests.HasBindHis);

router.get('/login',Requests.loginView);

router.get('/changeCity',Requests.changeCity);

router.post('/getVerCode',Requests.getVerCode);
router.get('/userAgreement',Requests.userAgreement);

module.exports = router;
