var express = require('express');
var router = express.Router();
var Handlers = require('../handlers/index.handler')
var Requests = require('../requests/indexs.request')
var Middlewares = require('../requests/middlewares.request.js')

// console.log(global)

global.config=config = require('../config')
global.api = require('../utils/api')
global.util= util = require('../utils/ajax')

// console.log(global)
//index.js首先会被加载

router.use(function(req, res, next) {
    console.log('now:' + Date.now());
    console.log('req.body',req.body);
    if(req.session.userInfo){
        var account = req.session.userInfo.accountCommon.account;
        res.locals.account = account; //每次请求首页都会动态从session获取值，并保存在本地变量中
    }

    //城市
    if(req.session.locals_address){
        res.locals.locals_address = req.session.locals_address;
    }else{
        res.locals.locals_address = JSON.stringify(config.addressJSON);
    }

    // //购物车数量:暂时不做
    // if(req.session.cart_num){
    //     res.locals.cart_num = req.session.cart_num;
    // }else{
    //     res.locals.cart_num = 0;
    // }

    next();
});

/* GET home page. */
router.get('/',Requests.get_goods_list,Middlewares.get_department,Handlers.index);

router.post('/login',Requests.login);

router.post('/logout',Requests.logout);

router.get('/checkLogin',Requests.checkLogin);

router.get('/loginView',Requests.loginView);

router.get('/changeCity',Requests.changeCity);

module.exports = router;
