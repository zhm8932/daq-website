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
                    files[matches[1]] = [absolutePath + '/' + item , path.join(__dirname, rootPath,  'common.js')];
                }
            }
        }

    });

    console.log("files:",files)
}

getEntry('', files);

module.exports = {
    // devtool: "source-map",
    entry: files,
    output: {
        path: __dirname + '/public/js',
        filename: "[name].bundle.js"
    },
    externals: {
        // require("jquery") is external and available
        //  on the global var jQuery
        "jquery": "jQuery"
    },
    resolve: {
        root: __dirname + '/client/js',
        extensions: ['', '.js','.jsx','.json'],
        alias: {
            'jquery': 'libs/1.8.3/jquery.js',
            'lazyload':'libs/jquery.lazyload.js',
            'touchslider':'libs/jquery.touchslider.js',
            'slides':'libs/jquery.slides.js',
            'movingBoxes':'libs/jquery.movingBoxes.js',
            // 'moment':'libs/moment.js',
            'daterangepicker':'libs/daterangepicker.js',
            'swipebox':'libs/jquery.swipebox',
            'cookie':'libs/jquery.cookie',
            'swiper':'libs/swiper.jquery.umd',
            'ellipsis':'libs/jquery.ellipsis',
            'utils': 'libs/utils.js'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendor.js')
    ],
    module: {
        loaders: [
            {test: /\.jsx$/,loader: 'babel-loader!jsx-loader?harmony',exclude: /node_modules/}
            // {test: /\.js?$/, loaders: ['babel-loader']}
        ]
    }
};