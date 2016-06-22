//首页回调处理

exports.index = function(req,res) {
    var get_goods_list = req.get_goods_list
    var get_department = req.get_department
    res.locals.get_goods_list_success = get_goods_list.success
    res.locals.get_department_success = get_department.success



    console.log('get_goods_list.success:',get_goods_list.success)
    console.log('get_department.success:',get_department.success)
    if(get_goods_list.success){
        get_goods_list=get_goods_list.data.data
    }
    if(get_department.success){
        get_department = get_department.data;
    }
    if(get_goods_list.success&&get_department.success){
        res.render('error', {
            title: '404',
            keywords: '404页面',
            description: '404首页描述'
        });

    }else{
        res.render('index', {
            title: '都安全医疗',
            keywords: '都安全,都安全医疗,都安全两性生殖健康,都安全宫颈癌筛查,都安全两性筛查,生殖感染检查,阴道微生态检查',
            description: '都安全医疗是一家专注两性生殖健康的筛查诊疗平台，遵循国际筛查诊疗规范，致力于提供两性生殖感染、宫颈癌筛查和女性阴道微生态等筛查诊疗一站式全流程医疗服务。',
            get_goods_list:get_goods_list,
            get_department:get_department
        });
    }

}

