var express = require('express');
var router = express.Router();
var handlers = require('../handlers/about.handler');
var Middlewares = require('../requests/middlewares.request.js');

/* GET users listing. */
router.get('/',Middlewares.get_department, handlers.render_abouts);

module.exports = router;
