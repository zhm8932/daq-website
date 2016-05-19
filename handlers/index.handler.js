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
            title: '都安全首页',
            keywords: '都安全首页关键字',
            description: '都安全首页描述',
            get_goods_list:get_goods_list,
            get_department:get_department
        });
    }

}