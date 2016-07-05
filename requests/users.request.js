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

    util.ajax('GET', api.GoodsQuery,req,  bizParam, function (data, success) {
        var json = JSON.parse(data);
        console.log(data)
        req.get_goods_list = json;
        next()
    });
};


exports.GetReservationList = function (req, callback) {
    var bizParam = {
        accountId: req.session.userInfo.userAllInfo.accountCommon.id
    };

    util.ajax('GET', api.GetReservationList,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.GetRegisterList = function (req, callback) {
    var bizParam = {
        role:1,
        accountId: req.session.userInfo.userAllInfo.accountCommon.id
    };

    util.ajax('GET', api.GetRegisterList,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.DelRegister = function (req, callback) {
    var bizParam = req.body;

    util.ajax('DELETE', api.DelRegister,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.CancelRegister = function (req, callback) {
    var bizParam = req.body;

    util.ajax('DELETE', api.CancelRegister,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};




exports.GetReserveDetail = function (req, callback) {
    var bizParam = req.query;

    util.ajax('GET', api.GetReserveDetail,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.GetCouponList = function (req, callback) {
    var query = req.query;
    var accountId = req.session.userInfo.userAllInfo.accountCommon.id;
    var bizParam = {
        useState: query.useState,
        accountId: accountId
    };

    util.ajax('GET', api.GetCouponList,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.AddCouponByInvite = function (req, callback) {
    req.body.accountId = req.session.userInfo.userAllInfo.accountCommon.id;
    var bizParam = req.body;

    util.ajax('POST', api.AddCouponByInvite,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.GetPatientList = function (req, callback) {
    var bizParam = {
        accountId: req.session.userInfo.userAllInfo.accountCommon.id
    };

    util.ajax('GET', api.GetPatientList,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.AddPatient = function (req, callback) {
    var bizParam = req.body;

    util.ajax('POST', api.AddPatient,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.DelPatient = function (req, callback) {
    var bizParam = req.body;

    util.ajax('DELETE', api.DelPatient,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};


exports.GetAccountInfo = function (req, callback) {
    var bizParam = {
        accountId: req.session.userInfo.userAllInfo.accountCommon.id
    };

    util.ajax('GET', api.GetAccountInfo,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.HasBindHis = function (req,res,callback) {
    var body = req.body;
    console.log("body:",body)
    // console.log("req.session.userInfo:",req.session.userInfo.userAllInfo)
    var bizParam = {
        accountId: body.accountId||req.session.userInfo.userAllInfo.accountCommon.id
    };

    util.ajax('GET', api.HasBindHis,req,bizParam,function (data, success) {
        if(!body.send){
            callback && callback(data, success);
        }else{
            res.send(data)
        }
    });
};

exports.CompleteAccount = function (req,res,callback) {
    var body = req.body;
    var bizParam = {
        "bindHISCustomer":{
            accountId:req.session.userInfo.userAllInfo.accountCommon.id,
            name:body.name,
            gender:body.gender,
            birthday:new Date(body.birthday).getTime()
        }
    };
    
    if(body.patientCode){
        bizParam.bindHISCustomer.patientCode = body.patientCode;
    }

    util.ajax('PUT', api.CompleteAccount,req,  bizParam, function (data, success) {
        callback && callback(data, success);
    });
};