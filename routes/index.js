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
    var _user = req.cookies.userInfo;
    res.locals.userInfo = _user; //每次请求首页都会动态从session获取值，并保存在本地变量中
    console.log('_user:',_user)
    if(req.cookies.userInfo){
        console.log('是登录状态')
    }else{
        console.log('不是登录状态')
    }
    next();
});

/* GET home page. */
router.get('/',Requests.get_goods_list,Middlewares.get_department,Handlers.index);

router.post('/login',Requests.login);

router.post('/logout',Requests.logout);
module.exports = router;
