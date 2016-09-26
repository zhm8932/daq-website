/*
 * 生产环境配置
 * */

var config = {
    debug:true,  // debug 为 true 时，用于本地调试
    hostname_test:"beta.api.douanquan.com",  //(线上测试)
    // hostname_test:"172.16.61.219",  //(内网测试)
    //hostname_test:"192.168.6.73",
    port_test:'80',
    path:'/router',
    imgDomain:'http://jhd-daq-img.oss-cn-shanghai.aliyuncs.com/',

    host:'localhost',
    port:8181, //端口
    pageSize:10,

    // appKey:'T-OPF-02191317',  //授权AppKey
    // secret:'themis-opf-test', //密匙

    appKey:'OPF-JHD-DAQ-Web',  //授权AppKey
    secret:'DAQ-Web', //密匙
    v:"1.0.0",
    format:"json",

    //文章父级目录,用来查询所有文章
    articleParentCategory:'2140011038422147048',
    //用来对应各种取样方式
    sample:{"sampling_home":"上门取样","sampling_delivery":"快递取样","sampling_clinic":"门诊取样"},
    sessionSecret:"DAQ-Web-Session",
    addressJSON:[{"categoryId":"2140010947025762019","name":"广东省","level":1},{"categoryId":"2140010948244539022","name":"广州市","level":2}],

    //=========测试环境
    // //用于访问静态文件
    hostname_node:'172.16.61.219',
    port_node:'3000',
    //文件服务器
    server_file_path:'http://beta.file.douanquan.com/',
    server_img_path:'http://beta.image.douanquan.com/',
    options:{
        // host:"1ac256e68d824785.m.cnsza.kvstore.aliyuncs.com",
        "host":"127.0.0.1",
        // "pass":'1ac256e68d824785:JihuiduoRedis88',
        // "password":'1ac256e68d824785:JihuiduoRedis88',
        "port": "6379"
        // "ttl": 60 * 60 * 1000   //Session的有效期为1天
    }
}

module.exports = config;