var express = require('express');
var router = express.Router();
var Handlers = require('../handlers/index.handler')
var Requests = require('../requests/indexs.request')
var Middlewares = require('../requests/mlddlewares.request')

// console.log(global)

global.config=config = require('../config')
global.api = require('../utils/api')
global.util= util = require('../utils/ajax')

// console.log(global)
//index.js首先会被加载

router.use(function(req, res, next) {
    console.log('now:' + Date.now());
    console.log('req.body',req.body);
    next();
});

/* GET home page. */
router.get('/',Requests.get_goods_list,Middlewares.get_department,Handlers.index);

module.exports = router;
