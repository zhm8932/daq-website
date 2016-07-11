var express = require('express');
var router = express.Router();
var Handlers = require('../handlers/search.handler');
var UsersRequest = require('../requests/users.request.js');
var authority = require('../handlers/authority.handler');

/* GET users listing. */
router.get('/report',authority.loginRequired,function (req,res,next) {
    UsersRequest.HasBindHis(req,res,function (data, success) {
        if(success){
            var hasBindHISJson = JSON.parse(data);
            res.locals.hasBind = hasBindHISJson.data;
            console.log("验证是否完善信息")
            // res.render('treat/regByDoc', {
            //     title: '诊疗服务',
            //     timeSlot: timeSlotJson.data,
            //     hasBind: hasBindHISJson.data
            // });
            next()
        }else{
            next();
        }

    })
},Handlers.report);

module.exports = router;
