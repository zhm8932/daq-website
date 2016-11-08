exports.render_abouts = function(req,res) {

    // var get_department = req.get_department
    // res.locals.get_department_success = get_department.success
    //
    // console.log('get_department.success:',get_department.success)
    // if(get_department.success){
    //     get_department = get_department.data;
    // }

    res.render('abouts/abouts', {
        title: '关于都安全',
        keywords: '关于都安全',
        description: '深圳市都安全健康产业投资有限公司，是大族控股集团有限公司（上市公司大族激光母公司，股票代码002008）旗下专业投资医疗健康产业的全资子公司，旗下在建有北京、广州、深圳、青岛、南京、西安、武汉、成都、长沙、杭州等高端连锁实体医疗机构，专业为关注两性生殖健康的客户提供预防保健、健康筛查、标准化诊疗和健康管理的连续性一站式医疗服务',
        // get_department:get_department
    });
}