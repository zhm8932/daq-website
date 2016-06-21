var express = require('express');
var router = express.Router();
var Handlers = require('../handlers/health.handler')
var Authoritys = require('../handlers/authority.handler')
var Requests = require('../requests/healths.request')
var Middlewares = require('../requests/middlewares.request.js')

/* GET users listing. */
router.get('/list',Middlewares.get_articles_category,Requests.get_article_list_diseases,Requests.get_article_list_ask,Requests.get_article_list,Handlers.get_article_list);

router.get('/list/article/:id',Middlewares.get_articles_category,Requests.get_article_list,Requests.get_article_list_diseases,Requests.get_article_list_ask,Requests.get_article_list_recommend,Requests.get_article_detail,Handlers.get_article);
// router.get('/list/article/:id',Middlewares.get_articles_category,Requests.get_article_list,Requests.get_article_list_diseases,Requests.get_article_detail,Handlers.get_article);
//前端分页获取问答数据
router.post('/list/list_ask_web',Middlewares.get_articles_category,Requests.get_list_ask_web)
module.exports = router;
