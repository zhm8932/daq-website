var path = require('path');
var env = process.env.NODE_ENV || 'development'
env = env.toLowerCase();

var config = {
    debug:true,
    hostname:'beta.api.douanquan.com',
    port:'80',
    path:'/router',
    pageSize:10,
    imgDomain:'http://jhd-daq-img.oss-cn-shanghai.aliyuncs.com/',

    appKey:'T-OPF-02191317',  //授权AppKey
    secret:'themis-opf-test', //密匙
    v:"1.0.0",
    format:"json",

    sessionSecret:"DAQ-Manager-Session",

    options:{
        // host:"1ac256e68d824785.m.cnsza.kvstore.aliyuncs.com",
        "host":"127.0.0.1",
        // "pass":'1ac256e68d824785:JihuiduoRedis88',
        // "password":'1ac256e68d824785:JihuiduoRedis88',
        "port": "6379",
        "ttl": 60 * 60 * 24 * 1   //Session的有效期为1天
    }
}

try {
    if (env=='beta'){
        console.log('beta环境配置')
        config.options.host = "1ac256e68d824785.m.cnsza.kvstore.aliyuncs.com";
        config.options.pass='1ac256e68d824785:JihuiduoRedis88';
    }
}catch (err){
    console.error('Cannot load config: [%s] %s', env);
    throw err;
}

module.exports = config