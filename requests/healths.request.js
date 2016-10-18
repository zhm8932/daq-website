/**
 * Created by Administrator on 2016/4/30.
 */

function get_article_list(req,res,next,obj) {
    var query = req.query;
    var currentPage = 1;
    if(obj.getPage){
        currentPage = query.page||req.body.pageIndex||currentPage;
    }else{
        currentPage = req.body.pageIndex||currentPage;
    }

    var category='';
    // console.log('currentPage::::',currentPage)
    var get_articles_category = req.get_articles_category
    if(get_articles_category.success){
        get_articles_category = get_articles_category.data
        get_articles_category.forEach(function (item,index) {
            // console.log('item:',item)
            if(item.name==obj.category_name){
                category = item.id
            }
        })
    }

    // console.log("category:",category)

    var bizParam={
        "pageIndex": currentPage,
        "pageSize": obj.pageSize||6,
        "category":category||query.category||1,
        "status":obj.status||0,
        "tc":query.tc || ''
    };

    if(bizParam.tc){bizParam.tc = encodeURI(bizParam.tc);}

    util.ajax('GET',api.ArticlPageQueryArticleByCategory,req,res,bizParam,function (err,data) {
        var json = JSON.parse(data);
        // console.log('json:',json)
        res.locals[obj.data_name+'_success'] = !err;
        if(!err){
            res.locals.currentPage = currentPage;
            res.locals.pageCount = json.data.pageCount;
        }

        req[obj.data_name] = json;
        if(obj.send){
            res.send(json)
        }else{
            next()
        }

    });
}
exports.get_article_list = function (req,res,next) {
    get_article_list(req,res,next,{
        category_name:'科普知识',
        data_name:'get_article_list',
        getPage:true
    })
}

//科普问答列表
exports.get_article_list_ask = function (req,res,next) {
    get_article_list(req,res,next,{
        category_name:'问答',
        data_name:'get_article_list_ask',
        // pageSize:2
    })
}
exports.get_list_ask_web = function (req,res,next) {
    // console.log('问答get_list_ask_web')
    get_article_list(req,res,next,{
        category_name:'问答',
        data_name:'get_article_list_ask',
        // pageSize:2,
        send:true
    })
}

//病种

exports.get_article_list_diseases = function (req,res,next) {
    get_article_list(req,res,next,{
        category_name:'病原体',
        data_name:'get_article_list_diseases',
        pageSize:20
    })
}
//相关推荐
// exports.get_article_list_recommend = function (req,res,next) {
//     get_article_list(req,res,next,{
//         category_name:'科普知识',
//         data_name:'get_article_list_recommend',
//         status:1,
//         pageSize:20
//     })
// }

exports.get_article_list_recommend = function (req,res,next) {

    var ids = req.ids;
    var bizParam = {"ids": ids};
    if(ids){
        util.ajax('GET', api.ArticleQueryArticleByIdBatch,req,res,bizParam, function (err,data) {
            console.log("jsonjsonjson:",json)
            var json = JSON.parse(data);
            console.log("这里执行了几次")
            res.locals.get_article_list_recommend_success = !err;
            req.get_article_list_recommend=json;
            next();
        });
    }else{
        next()
    }

}
exports.get_article_detail = function(req,res,next){
    var id = req.params.id;
    id = id.split('.')[0]
    var bizParam = {"id": id};
    util.ajax('GET', api.ArticleDetail,req,res,bizParam, function (err,data) {
        var json = JSON.parse(data);
        console.log("这里执行了几次22222222")
        res.locals.get_article_detail_success = !err;
        req.get_article_detail=json;
        if(!err){
            req.ids = json.data.recommendIds;
        }else{
            req.ids = '';
        }
        next();
    });
}

exports.get_banner = function (req,res,next) {
    var bizParam = {
        "category": req.id || 1000
    };
    console.log('bizParam:::',bizParam)
    util.ajax('GET',api.BannerSelectBannerClientByCategory,req,res,bizParam,function (err,data) {
        var json = JSON.parse(data);
        res.locals.get_banner = json.data;
        res.locals.get_banner_success = !err;
        req.get_banner = json.data;
        next()
    });
};
