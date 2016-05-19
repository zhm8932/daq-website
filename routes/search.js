var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/report', function(req, res) {
    res.render('searchs/report', {
        title: '都安全查询报告',
        keywords: '都安全查询报告',
        description: '都安全查询报告'
    });
});

module.exports = router;
