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

    util.ajax('GET', api.GoodsQuery, bizParam, function (data, success) {
        var json = JSON.parse(data);
        console.log(data)
        req.get_goods_list = json;
        next()
    });
};


exports.GetReservationList = function (req, callback) {
    var bizParam = {
        accountId: req.session.userInfo.accountCommon.id
    };

    util.ajax('GET', api.GetReservationList, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.GetRegisterList = function (req, callback) {
    var bizParam = {
        accountId: req.session.userInfo.accountCommon.id
    };

    util.ajax('GET', api.GetRegisterList, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.DelRegister = function (req, callback) {
    var bizParam = req.body;

    util.ajax('DELETE', api.DelRegister, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.CancelRegister = function (req, callback) {
    var bizParam = req.body;

    util.ajax('DELETE', api.CancelRegister, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};




exports.GetReserveDetail = function (req, callback) {
    var bizParam = req.query;

    util.ajax('GET', api.GetReserveDetail, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.GetCouponList = function (req, callback) {
    var query = req.query;
    var accountId = req.session.userInfo.accountCommon.id;
    var bizParam = {
        pageSize: query.pageSize || 10,
        useState: query.useState,
        pageIndex: query.pageIndex || 1,
        accountId: accountId
    };

    util.ajax('GET', api.GetCouponList, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.AddCouponByInvite = function (req, callback) {
    req.body.accountId = req.session.userInfo.accountCommon.id;
    var bizParam = req.body;

    util.ajax('POST', api.AddCouponByInvite, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.GetPatientList = function (req, callback) {
    var bizParam = {
        accountId: req.session.userInfo.accountCommon.id
    };

    util.ajax('GET', api.GetPatientList, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.AddPatient = function (req, callback) {
    var bizParam = req.body;

    util.ajax('POST', api.AddPatient, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.DelPatient = function (req, callback) {
    var bizParam = req.body;

    util.ajax('DELETE', api.DelPatient, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};


exports.GetAccountInfo = function (req, callback) {
    var bizParam = {
        accountId: req.session.userInfo.accountCommon.id
    };

    util.ajax('GET', api.GetAccountInfo, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.HasBindHis = function (req, callback) {
    var bizParam = {
        accountId: req.session.userInfo.accountCommon.id
    };

    util.ajax('GET', api.HasBindHis, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.CompleteAccount = function (req, callback) {
    var body = req.body;
    var bizParam = {
        "bindHISCustomer":{
            accountId:req.session.userInfo.accountCommon.id,
            name:body.name,
            gender:body.gender,
            birthday:new Date(body.birthday).getTime()
        }
    };
    
    if(body.patientCode){
        bizParam.bindHISCustomer.patientCode = body.patientCode;
    }

    util.ajax('PUT', api.CompleteAccount, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};