var webpack = require('webpack');
// var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var path = require('path');

module.exports = {
    //插件项
    // plugins: [commonsPlugin],
    //页面入口文件配置
    entry: {
        // index : './src/js/page/index.js'
        treat_reg_doc: './client/js/treat/reg_doc.js'
    },
    //入口文件输出配置
    output: {
        path: path.resolve(__dirname, './public/js'),
        filename: '[name].bundle.js'
    },
    module: {
        //加载器配置
        loaders: [
            {test: require.resolve('jquery'), loader: 'expose?jQuery'},
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.js$/, loader: 'jsx-loader?harmony'},
            {test: /\.scss$/, loader: 'style!css!sass?sourceMap'},
            {test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    externals: {
        "react" : "React",
        "jquery" : "jQuery",
        "lodash": "_"
    },
    //其它解决方案配置
    resolve: {
        root: path.resolve(__dirname, './client'), //绝对路径
        extensions: ['', '.js', '.json', '.scss'],
        alias: {
            'jquery': '/js/libs/1.8.3/jquery.js',
            //'lazyload':'/client/libs/lazyload.js',
            'lazyload': path.resolve(__dirname, './client/libs/jquery.lazyload.js'),
            // 'touchslider':'/client/libs/jquery.touchslider.js',
            'touchslider': path.resolve(__dirname, './client/js/libs/jquery.touchslider.js'),
            'daterangepicker': path.resolve(__dirname, './client/js/libs/daterangepicker.js'),
            'utils': path.resolve(__dirname, './client/libs/utils.js'),
            'swipebox':path.resolve(__dirname, './client/js/libs/jquery.swipebox'),
            'cookie':path.resolve(__dirname, './client/js/libs/jquery.cookie'),
            'swiper':path.resolve(__dirname, './client/js/libs/swiper.jquery.umd'),
            'ellipsis':path.resolve(__dirname, './client/js/libs/jquery.ellipsis')
        }
    }
};