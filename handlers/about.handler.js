exports.render_abouts = function(req,res) {

    var get_department = req.get_department
    res.locals.get_department_success = get_department.success

    console.log('get_department.success:',get_department.success)
    if(get_department.success){
        get_department = get_department.data;
    }

    res.render('abouts/abouts', {
        title: '筛查服务',
        keywords: '筛查服务',
        description: '筛查服务',
        get_department:get_department
    });
}