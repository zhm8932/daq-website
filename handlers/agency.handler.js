exports.render_agency_list = function(req,res) {

    // var get_department = req.get_department
    // res.locals.get_department_success = get_department.success
    //
    // console.log('get_department.success:',get_department.success)
    // if(get_department.success){
    //     get_department = get_department.data;
    // }

    res.render('agencys/list', {
        title: '筛查服务',
        keywords: '筛查服务',
        description: '筛查服务',
        // get_department:get_department
    });
}
exports.render_agency_detail = function(req,res) {

    var get_department = req.get_department

    if(get_department){
        res.locals.get_department_success = get_department.success
        console.log('get_department.success:',get_department.success)
        if(get_department.success){
            get_department = get_department.data;
        }
    }





    res.render('agencys/detail', {
        title: '筛查服务',
        keywords: '筛查服务',
        description: '筛查服务',
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
    res.render('agencys/department_detail', {
        title: '机构网络',
        keywords: '机构网络',
        description: '机构网络',
        get_department:get_department
    });
}

exports.render_feature_detail = function(req,res) {
    res.render('agencys/features_detail', {
        title: '机构网络',
        keywords: '机构网络',
        description: '机构网络'
    });
}