exports.render_yuyue_doctor = function(req, res) {
    res.render('treats/yuyue', {
        title: '按医生预约',
        keywords: '按医生预约',
        description: '按医生预约'
    });
}