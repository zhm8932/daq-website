exports.render_user = function(req, res) {
    res.render('users/orders', {
        title: '按医生预约',
        keywords: '按医生预约',
        description: '按医生预约'
    });
}