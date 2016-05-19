var express = require('express');
var router = express.Router();
var handlers = require('../handlers/treat.handler')
/* GET users listing. */
router.get('/yuyue',handlers.render_yuyue_doctor );

module.exports = router;
