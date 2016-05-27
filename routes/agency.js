var express = require('express');
var router = express.Router();
var handlers = require('../handlers/agency.handler');
var Middlewares = require('../requests/mlddlewares.request');
/* GET users listing. */
router.get('/',Middlewares.get_department, handlers.render_agency_info);

module.exports = router;
