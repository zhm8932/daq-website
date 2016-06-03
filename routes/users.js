/*
 * 科普模块  kepu
 * */
var express = require('express');
var router = express.Router();
var request = require('../requests/users.request');

/* GET users listing. */

router.get('/patients',function(req,res,next) {
    request.GetPatientsList(req,function(data,success) {
        var json = JSON.parse(data);
        res.render('users/patients', {
            title: '就诊人',
            data: json.data
        });
    });
});
module.exports = router;      
