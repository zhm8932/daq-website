var express = require('express');
var router = express.Router();
var handlers = require('../handlers/agency.handler');
var Middlewares = require('../requests/middlewares.request.js');
var Request = require('../requests/agency.request');

/* GET users listing. */
router.get('/(:area)?',Request.get_agency_list, handlers.render_agency_list);
// router.get('/detail/:id',Middlewares.get_department, handlers.render_agency_detail);
router.get('/detail/:id.html',Request.get_agency_detail,Middlewares.get_department_list,handlers.render_agency_detail);
router.get('/department/detail/:id',Request.get_department_detail,handlers.render_department_detail);
router.get('/feature/detail/:id',Request.get_feature_detail,handlers.render_feature_detail);

module.exports = router;
