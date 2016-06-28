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
                keywords:'我的预约,'+CONST.GLOBAL_TITLE,
                description:'我的预约,'+CONST.GLOBAL_TITLE,
                data:json.data,
                nav:"reservations"
            });
        }else{
            next();
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
        }else{
            next();
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
                data:json.data,
                nav:"registerings"
            });
        }else{
            next();
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
                data:json.data,
                nav:"coupons"
            });
        }else{
            next();
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
                data:json.data,
                nav:"patients"
            });
        }else{
            next();
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

//账号信息
router.get('/account/info',authority.loginRequired,function(req,res,next) {
    console.log("请求开始")
    request.HasBindHis(req,res,function(data,success) {
        console.log("hasBindHis:",data)
        var bindHisJson = JSON.parse(data);
        if(success){
            if(bindHisJson.data){
                request.GetAccountInfo(req,function(data,success) {
                    if(success){
                        var accountJson = JSON.parse(data);
                        res.render('users/account',{
                            title:'账号信息',
                            accountData:accountJson.data,
                            hasBindHis:bindHisJson.data
                        });
                    }
                });
            }else{
                res.render('users/account',{
                    title:'账号信息',
                    hasBindHis:bindHisJson.data
                });
            }
        }
    });
});

router.get('/account/hasBindHis',authority.loginRequired,function(req,res,next) {
    request.HasBindHis(req,function(data,success) {
        res.json(data);
    });
});

router.post('/account/complete',authority.loginRequired,function(req,res,next) {
    request.CompleteAccount(req,res,function(data,success) {
        res.send(data);
    });
});

module.exports = router;      
