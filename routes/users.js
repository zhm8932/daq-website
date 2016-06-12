/*
 * 科普模块  kepu
 * */
var express = require('express');
var router = express.Router();
var request = require('../requests/users.request');

/* GET users listing. */

router.get('/patient/list',function(req,res,next) {
    request.GetPatientsList(req,function(data,success) {
        var json = JSON.parse(data);
        res.render('users/patients', {
            title: '就诊人',
            data: json.data
        });
    });
});

router.get('/reservation/list',function(req,res,next){
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

router.get('/reservation/detail',function(req,res,next){
    request.GetReserveDetail(req,function(data,success) {
        var json = JSON.parse(data);
        if(success){
            res.render('users/reserveDetail',{
                title:'预约详情',
                data:json.data
            });
        }else{
            res.json(json);
        }
    });
});

//挂号列表
router.get('/register/list',function(req,res,next){
    request.GetRegisterList(req,function(data,success) {
        var json = JSON.parse(data);
        if(success){
            res.render('users/registerings',{
                title:'我的挂号',
                data:json.data
            });
        }
    });
});



router.get('/coupon/list',function(req,res,next) {
    request.GetCouponList(req,function(data,success) {
        res.json(data);
    });
});

router.get('/coupon/listView',function(req,res,next) {
    request.GetCouponList(req,function(data,success) {
        var json = JSON.parse(data);
        if(success){
            res.render('users/coupons',{
                title:'我的优惠券',
                data:json.data
            });
        }else{
            res.json(data);
        }
    });
});

router.post('/coupon/addByInvite',function(req,res,next) {
    request.AddCouponByInvite(req,function(data,success) {
        res.json(data);
    });
});



module.exports = router;      
