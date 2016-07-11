/**
 * Created by Administrator on 2016/4/30.
 */
exports.report = function(req, res) {
    res.render('searchs/report', {
        title: '都安全查询报告',
        keywords: '都安全查询报告',
        description: '都安全查询报告'
    });
}