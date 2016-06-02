var express = require('express');
var router = express.Router();
var Handlers = require('../handlers/screening.handler')
var Authoritys = require('../handlers/authority.handler')
var Requests = require('../requests/screenings.request')
var Middlewares = require('../requests/middlewares.request.js')





/* GET users listing. */
router.get('/goods(/:id)?', Middlewares.get_goods_category,Requests.get_goods_list,Handlers.get_goods_list);
router.get('/goods/detail/:goodsId',Requests.get_goods_detail,Handlers.get_goods_detail);

module.exports = router;
