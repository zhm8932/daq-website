/*
 * 科普模块  kepu
 * */
var express = require('express');
var router = express.Router();
var request = require('../requests/users.request');
var authority = require('../handlers/authority.handler');

/* GET users listing. */


router.get('/reservation/list',authority.loginRequired,function(req,res,next){
    req.resType = 'html';
    request.GetReservationList(req,res,function(err,data) {
        var json = JSON.parse(data);
        res.render('users/reservations',{
            title:'我的预约',
            keywords:'我的预约,'+CONST.GLOBAL_TITLE,
            description:'我的预约,'+CONST.GLOBAL_TITLE,
            data:json.data,
            nav:"reservations"
        });
    });
});

router.get('/reservation/detail',authority.loginRequired,function(req,res,next){
    req.resType = 'html';
    request.GetReserveDetail(req,res,function(err,data) {
        var json = JSON.parse(data);
        res.render('users/reserveDetail',{
            title:'预约详情',
            data:json.data
        });
    });
});

//挂号列表
router.get('/register/list',authority.loginRequired,function(req,res,next){
    req.resType = 'html';
    request.GetRegisterList(req,res,function(err,data) {
        var json = JSON.parse(data);
        res.render('users/registerings',{
            title:'我的挂号',
            data:json.data,
            nav:"registerings"
        });
    });
});

router.post('/register/del',function(req,res,next) {
    request.DelRegister(req,res,function(err,data) {
        res.json(data);
    });
});

router.post('/register/cancel',function(req,res,next) {
    request.CancelRegister(req,res,function(err,data) {
        res.json(data);
    });
});


router.get('/coupon/list',function(req,res,next) {
    request.GetCouponList(req,res,function(err,data) {
        res.json(data);
    });
});

router.get('/coupon/listView',authority.loginRequired,function(req,res,next) {
    req.resType = 'html';
    request.GetCouponList(req,res,function(err,data) {
        var json = JSON.parse(data);
        res.render('users/coupons',{
            title:'我的优惠券',
            data:json.data,
            nav:"coupons"
        });
    });
});

router.post('/coupon/addByInvite',function(req,res,next) {
    request.AddCouponByInvite(req,res,function(err,data) {
        res.json(data);
    });
});

router.get('/patient/list',authority.loginRequired,function(req,res,next) {
    req.resType = 'html';
    request.GetPatientList(req,res,function(err,data) {
        var json = JSON.parse(data);
        res.render('users/patients',{
            title:'我的就诊人',
            data:json.data,
            nav:"patients"
        });
    });
});


router.post('/patient/add',function(req,res,next) {
    request.AddPatient(req,res,function(err,data) {
        res.json(data);
    });
});

router.post('/patient/del',function(req,res,next) {
    request.DelPatient(req,res,function(err,data) {
        res.json(data);
    });
});

//账号信息
router.get('/account/info',authority.loginRequired,function(req,res,next) {
    req.resType = 'html';
    request.HasBindHis(req,res,function(err,data) {
        var bindHisJson = JSON.parse(data);
        if(bindHisJson.data){
            request.GetAccountInfo(req,res,function(err,data) {
                var accountJson = JSON.parse(data);
                res.render('users/account',{
                    title:'账号信息',
                    accountData:accountJson.data,
                    hasBindHis:bindHisJson.data
                });
            });
        }else{
            res.render('users/account',{
                title:'账号信息',
                hasBindHis:bindHisJson.data
            });
        }
    });
});

router.get('/account/hasBindHis',function(req,res,next) {
    request.HasBindHis(req,res,function(err,data) {
        res.json(data);
    });
});

router.post('/account/complete',function(req,res,next) {
    request.CompleteAccount(req,res,function(err,data) {
        res.json(data);
    });
});

module.exports = router;      
