var express = require('express');
var router = express.Router();
var handlers = require('../handlers/agency.handler')
/* GET users listing. */
router.get('/', handlers.render_agency_info);

module.exports = router;
