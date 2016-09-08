exports.get_goods_list = function (req, res, next) {
    var goodsState = req.params.goodsState || 2,
        currentPage = req.query.page || 1;
    res.locals.goodsState = goodsState;
    var bizParam = {
        "pageIndex": currentPage,
        "pageSize": 6,
        "categoryId": '',
        "goodsState": goodsState
    };

    util.ajax('GET', api.GoodsQuery,req,res,bizParam, function (err,data) {
        var json = JSON.parse(data);
        console.log(data)
        req.get_goods_list = json;
        next()
    });
};


exports.GetReservationList = function (req,res,callback) {
    var bizParam = {
        accountId: req.accountId
    };

    util.ajax('GET', api.GetReservationList,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};

exports.CheckReport = function (req,res,callback) {
    var bizParam = {
        reservationId: req.query.reservationId
    };

    util.ajax('GET', api.CheckReport,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};

exports.GetRegisterList = function (req,res,callback) {
    var bizParam = {
        role:1,
        accountId: req.accountId
    };

    util.ajax('GET', api.GetRegisterList,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};

exports.DelRegister = function (req,res,callback) {
    var bizParam = req.body;

    util.ajax('DELETE', api.DelRegister,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};

exports.CancelRegister = function (req,res,callback) {
    var bizParam = req.body;

    util.ajax('DELETE', api.CancelRegister,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};




exports.GetReserveDetail = function (req,res,callback) {
    var bizParam = req.query;

    util.ajax('GET', api.GetReserveDetail,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};

exports.GetCouponList = function (req,res,callback) {
    var query = req.query;
    var accountId = req.accountId;
    var bizParam = {
        useState: query.useState,
        accountId: accountId
    };

    util.ajax('GET', api.GetCouponList,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};

exports.AddCouponByInvite = function (req,res,callback) {
    req.body.accountId = req.accountId;
    var bizParam = req.body;

    util.ajax('POST', api.AddCouponByInvite,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};

exports.GetPatientList = function (req,res,callback) {
    var bizParam = {
        accountId: req.accountId
    };

    util.ajax('GET', api.GetPatientList,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};

exports.AddPatient = function (req,res,callback) {
    var bizParam = req.body;

    util.ajax('POST', api.AddPatient,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};

exports.DelPatient = function (req,res,callback) {
    var bizParam = req.body;

    util.ajax('DELETE', api.DelPatient,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};


exports.GetAccountInfo = function (req,res,callback) {
    var bizParam = {
        accountId: req.accountId
    };

    util.ajax('GET', api.GetAccountInfo,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};

exports.HasBindHis = function (req,res,callback) {
    var body = req.body;
    console.log("body:",body)
    // console.log("req.session.userInfo:",req.session.userInfo.userAllInfo)
    var bizParam = {
        accountId: body.accountId||req.accountId
    };

    util.ajax('GET', api.HasBindHis,req,res,bizParam,function (err,data) {
        if(!body.send){
            callback && callback(err,data);
        }else{
            res.send(data)
        }
    });
};

exports.CompleteAccount = function (req,res,callback) {
    var body = req.body;
    var bizParam = {
        "bindHISCustomer":{
            accountId:req.accountId,
            name:body.name,
            gender:body.gender,
            birthday:new Date(body.birthday).getTime()
        }
    };
    
    if(body.patientCode){
        bizParam.bindHISCustomer.patientCode = body.patientCode;
    }

    util.ajax('PUT', api.CompleteAccount,req,res,bizParam, function (err,data) {
        callback && callback(err,data);
    });
};