/*
 * config 配置文件
 * */
var path = require('path')

// 通过NODE_ENV来设置环境变量，如果没有指定则默认为开发环境
// var env = process.env.NODE_ENV || 'production';

var env = process.env.NODE_ENV || 'development'
env = env.toLowerCase();

console.log('__dirname::',__dirname)
console.log('env::',env)

// console.log('process.env::',process.env)
// 载入配置文件
var file = path.resolve(__dirname,'config',env);
try {
    if (env == 'production') {
        console.log('生产环境配置')
        var config = require('./config/production');
    } else {
        console.log('开发环境配置')

        var config = require('./config/development');

    }
}catch (err){
    console.error('Cannot load config: [%s] %s', env);
    throw err;
}
// console.log('Load config: [%s] %s', env, file);
// console.log(config);
// console.log('listen on hostname %s', config.hostname_test);
// 如果是开发环境，将输出 listen on port 3000
// 如果是生产环境，将输出 listen on port 80

module.exports = config