exports.get_goods_list = function (req,res,next) {
    var goodsState = req.params.goodsState||2,
        currentPage = req.query.page||1;
    res.locals.goodsState = goodsState;
    var bizParam = {
        "pageIndex": currentPage,
        "pageSize": 6,
        "categoryId": '',
        "goodsState": goodsState
    };

    util.ajax('GET',api.GoodsQuery,bizParam,function (data,success) {
        var json = JSON.parse(data);
        console.log(data)
        req.get_goods_list = json;
        next()
    });
};


exports.GetPatientsList = function (req, callback) {
    var bizParam = req.query;

    util.ajax('GET', api.GetPatientsList, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};


exports.GetReservationList = function (req, callback) {
    var bizParam = {
        accountId:req.cookies.userInfo.accountCommon.id
    };

    util.ajax('GET', api.GetReservationList, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};

exports.GetRegisterList = function (req, callback) {
    var bizParam = {
        accountId:req.cookies.userInfo.accountCommon.id
    };

    util.ajax('GET', api.GetRegisterList, bizParam, function (data, success) {
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
    var accountId = req.cookies.userInfo.accountCommon.id;
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
    req.body.accountId = req.cookies.userInfo.accountCommon.id;
    var bizParam = req.body;

    util.ajax('POST', api.AddCouponByInvite, bizParam, function (data, success) {
        callback && callback(data, success);
    });
};