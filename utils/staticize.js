/**
 * Created by James on 16/4/11.
 */

var jade = require('jade');
var fs = require('fs');

exports.staticize = function (path, options, des, fn) {
    jade.renderFile(path, options, function (error, html) {
        console.log(html);
        if (html) {
            console.log('aaaa');
            fs.writeFileSync(des,html,'utf8');
            fn && fn();
        }else {
            console.log(error);
        }
    });
}