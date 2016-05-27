var express = require('express');
var router = express.Router();
var Handers = require('../handlers/user.handler');
var Requests = require('../requests/users.request');
/* GET users listing. */
router.get('/orders',Handers.render_user);

module.exports = router;      
