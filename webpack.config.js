"use strict";

var webpack = require('webpack');
var fs = require('fs');
var path = require('path');

var files = {};
var rootPath = '/client/js';
function getEntry(srcPath,files) {
    var absolutePath = path.join(__dirname, rootPath,srcPath);

    var dirList = fs.readdirSync(absolutePath);
    var matches = [];

    dirList.forEach(function (item, index, array) {
        if(item != 'libs'){
            if (fs.statSync(absolutePath + '/' + item).isDirectory()){
                getEntry(srcPath + '/' + item, files);
            } else {
                matches = (srcPath + '/' + item).match(/\/(.+)\.js/);
                if (matches){
                    files[matches[1]] = [absolutePath + '/' + item , absolutePath + '/common.js'];
                }
            }
        }

    });
}

getEntry('', files);
console.log(JSON.stringify(files));

module.exports = {
    // devtool: "source-map",
    entry: files,
    output: {
        path: __dirname + '/public/js',
        filename: "[name].bundle.js"
    },
    resolve: {
        root: __dirname + '/client/js',
        extensions: ['', '.js', '.json'],
        alias: {
            // 'jquery': path.resolve(__dirname, './client/js/libs/1.8.3/jquery.js'),
            // //'lazyload':'/client/libs/lazyload.js',
            // 'lazyload': path.resolve(__dirname, './client/libs/jquery.lazyload.js'),
            // // 'touchslider':'/client/libs/jquery.touchslider.js',
            // 'touchslider': path.resolve(__dirname, './client/js/libs/jquery.touchslider.js'),
            // 'daterangepicker': path.resolve(__dirname, './client/js/libs/daterangepicker.js'),
            // 'utils': path.resolve(__dirname, './client/libs/utils.js'),
            // 'swipebox':path.resolve(__dirname, './client/js/libs/jquery.swipebox'),
            // 'cookie':path.resolve(__dirname, './client/js/libs/jquery.cookie'),
            // 'swiper':path.resolve(__dirname, './client/js/libs/swiper.jquery.umd'),
            // 'ellipsis':path.resolve(__dirname, './client/js/libs/jquery.ellipsis')


            'jquery': 'libs/1.8.3/jquery.js',
            'lazyload':'libs/jquery.lazyload.js',
            'touchslider':'libs/jquery.touchslider.js',
            'moment':'libs/moment.js',
            'daterangepicker':'libs/daterangepicker.js',
            'swipebox':'libs/jquery.swipebox',
            'cookie':'libs/jquery.cookie',
            'swiper':'libs/swiper.jquery.umd',
            'ellipsis':'libs/jquery.ellipsis',
            'utils': 'libs/utils.js'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vender.js')
    ],
    module: {
        loaders: [
            {test: /\.jsx?$/, loaders: ['jsx-loader']},
            // {test: /\.js?$/, loaders: ['babel-loader']}
        ]
    }
};