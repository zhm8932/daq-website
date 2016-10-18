exports.render_agency_list = function(req,res) {

    // var get_department = req.get_department
    // res.locals.get_department_success = get_department.success
    //
    // console.log('get_department.success:',get_department.success)
    // if(get_department.success){
    //     get_department = get_department.data;
    // }

    res.render('agencys/list', {
        title: CONST.GLOBAL_TITLE+'-机构网络',
        keywords: CONST.GLOBAL_TITLE+',广州都安全医疗,深圳都安全医疗,北京都安全医疗，青岛都安全医疗，南京都安全医疗，西安都安全医疗',
        description:'深圳市都安全健康产业投资有限公司，是大族控股集团有限公司（上市公司大族激光母公司，股票代码002008）旗下专业投资医疗健康产业的全资子公司，旗下在建有北京、广州、深圳、青岛、南京、西安、武汉、成都、长沙、杭州等高端连锁实体医疗机构，专业为关注两性生殖健康的客户提供预防保健、健康筛查、标准化诊疗和健康管理的连续性一站式医疗服务。',
        // get_department:get_department
    });
}
exports.render_agency_detail = function(req,res) {

    var get_department = req.get_department_list;
    var get_agency_detail = req.get_agency_detail;

    // console.log("get_department:",get_department)

    if(get_department){
        res.locals.get_department_success = get_department.success;
        console.log('get_department.success:',get_department.success)
        if(get_department.success){
            get_department = get_department.data;
        }
    }
    res.render('agencys/detail', {
        title: '机构网络_'+get_agency_detail.title,
        keywords: '机构网络,'+get_agency_detail.title,
        description: '机构网络,'+get_agency_detail.title,
        get_department:get_department
    });
}

exports.render_department_detail = function(req,res) {

    var get_department = req.get_department

    if(get_department){
        res.locals.get_department_success = get_department.success
        console.log('get_department.success:',get_department.success)
        if(get_department.success){
            get_department = get_department.data;
        }
    }
    var get_department_detail = req.get_department_detail;
    res.render('agencys/department_detail', {
        title: get_department_detail.title,
        keywords: '机构网络,'+get_department_detail.title,
        description: get_department_detail.des,
        get_department:get_department
    });
}

exports.render_feature_detail = function(req,res) {
    var get_feature_detail = req.get_feature_detail;
    res.render('agencys/features_detail', {
        title: '机构网络_'+get_feature_detail.title,
        keywords: '机构网络,'+get_feature_detail.title,
        description: get_feature_detail.des
    });
}