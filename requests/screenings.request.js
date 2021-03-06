//套餐
var config = require('../config')
var api = require('../utils/api')
var util = require('../utils/ajax')

exports.get_goods_list = function (req,res,next) {
    var query = req.query;
    var goodsState = req.params.goodsState||2,
        currentPage = query.page||query.pageIndex||1;

    console.log("query:",query)
    var get_goods_category = req.get_goods_category.data;

    if(req.get_goods_category_success){
        fitst_categoryId = get_goods_category[0].id;
    }
    var categoryId = req.params.id||query.categoryId||fitst_categoryId||'';

    // console.log("categoryId:::::",categoryId)
    res.locals.goodsState = goodsState;
    req.categoryId = res.locals.categoryId = categoryId;
    categoryId = req.url =='/'?'':categoryId;

    var bizParam = {
        "pageIndex": currentPage,
        "pageSize": 6,
        "categoryId": categoryId,
        "goodsState": goodsState,
        "cityId":""
    };
    var apiName = api.GoodsQueryByPc;
    if(browser.mobile){
        apiName = api.GoodsQueryByMobile;
        if(req.url=='/'){
            bizParam.pageSize=4;
        }
    }

    util.ajax('GET',apiName,req,res,bizParam,function (err,data) {
        if(query.send){
            res.send(data)
        }else{
            var json = JSON.parse(data);
            // console.log(JSON.stringify(data))
            // console.log('json:::',json)
            req.get_goods_list = json
            next()
        }

    });
};

exports.get_goods_detail = function (req,res,next) {

    var goodsId = req.params.goodsId;
    console.log("goodsId:",goodsId)

    var bizParam = {"goodsId":goodsId};

    // var apiName = api.GoodsDetail
    var apiName = api.GoodsFindGoodsByIdToPC;
    if(browser.mobile){
        apiName = api.GoodsFindGoodsByIdToMobile
    }
    // console.log("apiName:",apiName)
    util.ajax('GET',apiName,req,res, bizParam,function (err,data) {
        var json = JSON.parse(data);
        res.locals.get_goods_detail_success = json.success
        req.get_goods_detail = json
        next()
    });
}