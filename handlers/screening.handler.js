exports.get_goods_list = function(req,res) {
    var get_goods_list = req.get_goods_list;
    res.locals.get_goods_list_success = get_goods_list.success;
    if(get_goods_list.success){
        get_goods_list=get_goods_list.data.data
    }
    var get_goods_category = req.get_goods_category
    res.render('screenings/goods', {
        title: '筛查服务_宫颈癌筛查_宫颈癌治疗_女性生殖_男性生殖',
        keywords: CONST.GLOBAL_TITLE+',筛查服务,宫颈癌筛查,女性生殖检查,男性生殖检查',
        description: CONST.GLOBAL_TITLE+'提供两性生殖感染、宫颈癌筛查和女性阴道微生态等筛查诊疗一站式全流程医疗服务',
        get_goods_list:get_goods_list,
        get_goods_category:get_goods_category.data
    });
}

exports.get_goods_detail = function (req,res) {
    var get_goods_detail = req.get_goods_detail,
        title='',
        keywords='',
        description='';

    if(get_goods_detail.success){
        get_goods_detail = get_goods_detail.data
        if(get_goods_detail.productKeyAttributeList){
            get_goods_detail.productKeyAttributeList.forEach(function (item,index) {
                console.log(item)
                if(item.attributeName=='title'){
                    title = item.value
                }
                if(item.attributeName=='keyword'){
                    keywords = item.value
                }
                if(item.attributeName=='page_description'){
                    description = item.value
                }
                if(item.attributeName=='transmit_type'){
                    res.locals.transmitType = JSON.parse(item.value)
                }
                if(item.attributeName=='transmit_items'){
                    res.locals.transmitItems = JSON.parse(item.value)
                }
                if(item.attributeName=='fit_people'){
                    res.locals.fitPeople = item.value;
                }
                if(item.attributeName=='slogan'){
                    res.locals.slogan = item.value
                }

            })
        }
        title = get_goods_detail.title;
        keywords = get_goods_detail.keyword;
        description = get_goods_detail.pageDescription;

        if(get_goods_detail.transmitType){
            res.locals.transmitType = JSON.parse(get_goods_detail.transmitType);
        }
        if(get_goods_detail.transmitItems){
            res.locals.transmitItems = JSON.parse(get_goods_detail.transmitItems);
        }
        res.locals.fitPeople = get_goods_detail.fitPeople;
        res.locals.slogan = get_goods_detail.slogan

    }
    res.render('screenings/goods_detail', {
        title: '筛查服务_'+get_goods_detail.goodsName,
        keywords: '筛查服务_'+keywords+','+CONST.GLOBAL_TITLE,
        description: '筛查服务_'+description+','+CONST.GLOBAL_TITLE,
        goods_detail:get_goods_detail
    });
}