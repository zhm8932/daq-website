//引入包文件
var sm = require('sitemap');
var fs = require('fs');
var async = require('async');
var lodash = require('lodash');



var getBlogPageUrls=function(calllback){
    var urls=[
        { url: '/healths', changefreq: 'always', priority: 0.5 }
    ];
    //获取博客列表,分页后拼接成url,然后 push 到 urls 数组中
    calllback(urls);
}

var getBlogTimeCount=function(calllback){
    var urls=[
        { url: '/treat/regsource/list', changefreq: 'daily', priority: 0.5 }
    ];
    //获取博客日历列表,拼接好的 url push 到 urls中
    calllback(urls);
}

var getBlogTag=function(calllback){
    var urls=[];
    //获取博客 tag ,分页后拼接 url ,然后 push 到 urls 数组中
    calllback(urls);
}

var getBlogCategory=function(calllback){
    var urls=[];
    //获取博客分类, 分页后拼接 url ,然后 push 到 urls 数组中
    calllback(urls);
}

var createSiteMapFile=function(urls){
    //生成 sitemap.xml 静态文件
    var sitemap = sm.createSitemap({
        hostname: 'http://beta.douanquan.com',
        cacheTime: 12 * 60 * 60,
        urls: urls
    });
    fs.writeFileSync("sitemap.xml", sitemap.toString());
}

//创建 sitemap文件的方法
var createSiteMap = function () {
    // 定义 urls 数组存放路径
    var urls = [
        { url: '/', changefreq: 'daily', priority: 0.5 },

    ];
    console.log("urls:",urls)
    async.waterfall([
        function (done) {
            getBlogPageUrls(function (url) {
                console.log("url:",url)
                urls = lodash.union(urls, url);
                done();
            });
        },
        function (done) {
            getBlogTimeCount(function (url) {
                urls = lodash.union(urls, url);
                done();
            });
        },
        function (done) {
            getBlogTag(function (url) {
                urls = lodash.union(urls, url);
                done();
            });
        },
        function (done) {
            getBlogCategory(function (url) {
                urls = lodash.union(urls, url);
                done();
            });
        }
    ], function () {
        // 把 关于我 页面 url push 到 urls 数组中
        urls.push(
            {url: '/about.html', changefreq: 'monthly', priority: 0.4}
        );
        //生成 sitemap.xml 文件
        createSiteMapFile(urls);
    })
};

// createSiteMap()

exports.siteMap=function(req, res, next) {
    var stream = fs.createReadStream('./sitemap.xml', {
        flags: 'r'
    });
    stream.pipe(res);
}