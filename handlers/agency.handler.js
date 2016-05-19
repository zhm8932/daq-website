exports.render_agency_info = function(req,res) {
    res.render('agencys/infos', {
        title: '筛查服务',
        keywords: '筛查服务',
        description: '筛查服务'
    });
}