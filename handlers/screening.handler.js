exports.get_goods_list = function(req,res) {
    var get_goods_list = req.get_goods_list;
    res.locals.get_goods_list_success = get_goods_list.success;
    if(get_goods_list.success){
        get_goods_list=get_goods_list.data.data
    }
    var get_goods_category = req.get_goods_category
    res.render('screenings/goods', {
        title: '筛查服务',
        keywords: '筛查服务',
        description: '筛查服务',
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

    res.render('screenings/goods_detail', {
        title: '筛查服务_'+get_goods_detail.goodsName,
        keywords: '筛查服务_'+keywords,
        description: '筛查服务_'+description,
        goods_detail:get_goods_detail
    });
}