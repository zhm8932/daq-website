exports.render_abouts = function(req,res) {

    var get_department = req.get_department
    res.locals.get_department_success = get_department.success

    console.log('get_department.success:',get_department.success)
    if(get_department.success){
        get_department = get_department.data;
    }

    res.render('abouts/abouts', {
        title: '关于都安全',
        keywords: '关于都安全',
        description: '关于都安全',
        get_department:get_department
    });
}