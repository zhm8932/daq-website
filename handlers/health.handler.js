var markdown=  require( "markdown" ).markdown;
var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
// require('../public/js/vendor');
var components = require('../server/js/components');
var AskBox = React.createFactory(components.AskBox);

exports.get_article_list = function(req,res) {
    var get_article_list = req.get_article_list;
    var get_article_list_ask = req.get_article_list_ask;
    var get_article_list_diseases = req.get_article_list_diseases,
        pageCount = '',
        ask_currentPage=''

    // console.log('res.locals:',res.locals)
    if(get_article_list.success){

        get_article_list=get_article_list.data.data;
    }
    if(get_article_list_ask.success){
        res.locals.ask_pageCount = pageCount = get_article_list_ask.data.pageCount;
        res.locals.ask_currentPage = get_article_list_ask.data.currentPage;
        get_article_list_ask = get_article_list_ask.data.data;
    }
    if(get_article_list_diseases.success){
        get_article_list_diseases = get_article_list_diseases.data.data;
    }
    res.render('healths/list', {
        title: '健康常识_性健康常识_'+CONST.GLOBAL_TITLE,
        keywords: '健康常识,性健康,生理健康常识,'+CONST.GLOBAL_TITLE,
        description: CONST.GLOBAL_TITLE+'(douanquan.com)为您提供最全面的健康,性健康相关知识和指导',
        get_article_list:get_article_list,
        get_article_list_ask:get_article_list_ask,
        get_article_list_ask_react:ReactDOMServer.renderToString(AskBox({data:get_article_list_ask,pageCount:pageCount})),
        get_article_list_diseases:get_article_list_diseases,
        props: '<script type="text/javascript">var data='+JSON.stringify(get_article_list_ask)+';var pageCount ='+pageCount+' </script>'

    });
}

exports.get_article = function (req,res) {
    var get_article_detail = req.get_article_detail;
    var get_article_list = req.get_article_list;
    var get_article_list_ask = req.get_article_list_ask;
    var get_article_list_diseases = req.get_article_list_diseases;
    var get_article_list_recommend = req.get_article_list_recommend;

    if(get_article_detail.success){
        get_article_detail = get_article_detail.data
    }
    if(get_article_list.success){
        get_article_list=get_article_list.data.data;
    }
    if(get_article_list_ask.success){
        res.locals.ask_pageCount = get_article_list_ask.data.pageCount;
        res.locals.ask_currentPage = get_article_list_ask.data.currentPage;
        get_article_list_ask = get_article_list_ask.data.data;
    }
    if(get_article_list_diseases.success){
        get_article_list_diseases = get_article_list_diseases.data.data;
    }
    if(get_article_list_recommend&&get_article_list_recommend.success){
        get_article_list_recommend = get_article_list_recommend.data;
    }



    var get_article_detail_content=markdown.toHTML(get_article_detail.content);


    // console.log('get_article_list_ask:',get_article_list_ask)
    // console.log('get_article_list_diseases:',get_article_list_diseases)
    // console.log('get_article_list:',get_article_list)
    var title = get_article_detail.title;
    var keywords = get_article_detail.keyword;
    var description = get_article_detail.wapDesc;

    res.render('healths/article', {
        title: title+'_健康常识_'+CONST.GLOBAL_TITLE,
        keywords: keywords+CONST.GLOBAL_TITLE+',健康常识',
        description: description+CONST.GLOBAL_TITLE+',健康常识',
        get_article_detail:get_article_detail,
        get_article_list:get_article_list,
        get_article_detail_content:get_article_detail_content,
        get_article_list_ask:get_article_list_ask,
        get_article_list_diseases:get_article_list_diseases,
        get_article_list_recommend:get_article_list_recommend

    });
}