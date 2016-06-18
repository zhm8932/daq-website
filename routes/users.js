/*
 * 科普模块  kepu
 * */
var express = require('express');
var router = express.Router();
var request = require('../requests/users.request');
var authority = require('../handlers/authority.handler');

/* GET users listing. */


router.get('/reservation/list',authority.loginRequired,function(req,res,next){
    request.GetReservationList(req,function(data,success) {
        var json = JSON.parse(data);
        if(success){
            res.render('users/reservations',{
                title:'我的预约',
                data:json.data
            });
        }
    });
});

router.get('/reservation/detail',authority.loginRequired,function(req,res,next){
    request.GetReserveDetail(req,function(data,success) {
        if(success){
            var json = JSON.parse(data);
            res.render('users/reserveDetail',{
                title:'预约详情',
                data:json.data
            });
        }
    });
});

//挂号列表
router.get('/register/list',authority.loginRequired,function(req,res,next){
    request.GetRegisterList(req,function(data,success) {
        if(success){
            var json = JSON.parse(data);
            res.render('users/registerings',{
                title:'我的挂号',
                data:json.data
            });
        }
    });
});

router.post('/register/del',authority.loginRequired,function(req,res,next) {
    request.DelRegister(req,function(data,success) {
        res.json(data);
    });
});

router.post('/register/cancel',authority.loginRequired,function(req,res,next) {
    request.CancelRegister(req,function(data,success) {
        res.json(data);
    });
});


router.get('/coupon/list',authority.loginRequired,function(req,res,next) {
    request.GetCouponList(req,function(data,success) {
        res.json(data);
    });
});

router.get('/coupon/listView',authority.loginRequired,function(req,res,next) {
    request.GetCouponList(req,function(data,success) {
        if(success){
            var json = JSON.parse(data);
            res.render('users/coupons',{
                title:'我的优惠券',
                data:json.data
            });
        }
    });
});

router.post('/coupon/addByInvite',authority.loginRequired,function(req,res,next) {
    request.AddCouponByInvite(req,function(data,success) {
        res.json(data);
    });
});

router.get('/patient/list',authority.loginRequired,function(req,res,next) {
    request.GetPatientList(req,function(data,success) {
        if(success){
            var json = JSON.parse(data);
            res.render('users/patients',{
                title:'我的就诊人',
                data:json.data
            });
        }
    });
});

router.post('/patient/add',authority.loginRequired,function(req,res,next) {
    request.AddPatient(req,function(data,success) {
        res.json(data);
    });
});

router.post('/patient/del',authority.loginRequired,function(req,res,next) {
    request.DelPatient(req,function(data,success) {
        res.json(data);
    });
});

module.exports = router;      
