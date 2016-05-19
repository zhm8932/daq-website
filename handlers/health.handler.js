var markdown=  require( "markdown" ).markdown;

exports.get_article_list = function(req,res) {
    var get_article_list = req.get_article_list;
    var get_article_list_ask = req.get_article_list_ask;
    var get_article_list_diseases = req.get_article_list_diseases,
        ask_pageCount = '',
        ask_currentPage=''

    console.log('res.locals:',res.locals)
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
    res.render('healths/list', {
        title: '筛查服务',
        keywords: '筛查服务',
        description: '筛查服务',
        get_article_list:get_article_list,
        get_article_list_ask:get_article_list_ask,
        get_article_list_diseases:get_article_list_diseases

    });
}

exports.get_article = function (req,res) {
    console.log('res.locals:',res.locals)

    var get_article_detail = req.get_article_detail;
    var get_article_list = req.get_article_list;
    var get_article_list_ask = req.get_article_list_ask;
    var get_article_list_diseases = req.get_article_list_diseases

    if(get_article_detail.success){
        get_article_detail = get_article_detail.data
    }
    if(get_article_list.success){
        get_article_list=get_article_list.data.data;
    }
    if(get_article_list_ask.success){
        get_article_list_ask = get_article_list_ask.data.data;
    }
    if(get_article_list_diseases.success){
        get_article_list_diseases = get_article_list_diseases.data.data;
    }



    var get_article_detail_content=markdown.toHTML(get_article_detail.content);


    console.log('get_article_list_ask:',get_article_list_ask)
    console.log('get_article_list_diseases:',get_article_list_diseases)
    console.log('get_article_list:',get_article_list)
    res.render('healths/article', {
        title: '筛查服务_详情',
        keywords: '筛查服务_详情',
        description: '筛查服务_详情',
        get_article_detail:get_article_detail,
        get_article_list:get_article_list,
        get_article_detail_content:get_article_detail_content,
        get_article_list_ask:get_article_list_ask,
        get_article_list_diseases:get_article_list_diseases

    });
}