var express = require('express');
var path = require('path');
var favicon = require('serve-favicon'); //处理收藏夹图标的
var compression = require('compression'); //gizp
var logger = require('morgan');       //写日志
var cookieParser = require('cookie-parser');  //解析cookie req.cookies属性存放着客户端提交过来的cookie // req.cookie(key,value) 向客户端写入cookie
var bodyParser = require('body-parser');  //处理请求体的 req.body 属性存放着请求体对象
var session = require('express-session');
var redis = require('redis');
var redisStore = require('connect-redis')(session);
var CONST = require('./utils/const');
var app = express();

var config = require('./config');
var errorHandler = require('./utils/errorHandler');//错误处理公共类
const logFactory = require('./utils/logFactory');

//路由
var indexs = require('./routes/index');
var abouts = require('./routes/about');
var agencys = require('./routes/agency');
var healths = require('./routes/health');
var helps = require('./routes/help');
var routes = require('./routes/route');
var screenings = require('./routes/screening');
var searchs = require('./routes/search');
var treats = require('./routes/treat');
var users = require('./routes/users');
var trades = require('./routes/trade');
var dictionarys = require('./routes/dictionary');



// 设置模板的存放路径
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//把favicon图标放置在public目录之后取消注释
app.use(favicon(path.join(__dirname, 'public','images', 'favicon.png')));
// app.use(logger('dev'));



app.use(bodyParser.json());  //处理content-type=json的请求体
app.use(bodyParser.urlencoded({ extended: false }));  //处理content-type=urlencoded的请求体 extended为true表示使用querystring来将请求体的字符串转成对象
app.use(cookieParser());
app.use('/public',express.static(path.join(__dirname, 'public')));  //静态文件服务中间件 指定一个绝对目录 的路径作为静态文件的根目录
app.use(compression());

var redisClient = redis.createClient(6379,config.options.host, {});
// redisClient.auth(options.pass);
// console.log("options:",options);

redisClient.on("error", function (res, code, err) {
  var err = new Error('redis错误');
  errorHandler.handleError(res, '500', 'html', err);
});

redisClient.on('ready',function(err){
  console.log('ready:Redis链接成功');
  console.log("config.options:",config.options)
});

// console.log("redisClient:",redisClient);
// 此时req对象还没有session这个属性

app.use(session({
  name:"douanquan.sid",
  store: new redisStore(config.options),
  secret: config.sessionSecret,
  cookie:{httpOnly:true}
}));

app.locals.moment = require('moment'); //本地模板中引入moment方法
app.locals.markdown = require( "markdown" ).markdown; //markdown编辑语法

app.locals.query = '';
app.locals.sep = '>';
app.locals.CONST = CONST;
global.CONST = CONST;

app.locals.locals_sample = JSON.stringify(config.sample);//取样方式及其对应的中文,存入配置文件

app.use(logger(':method :url :status'));  //打印请求状态等信息
// app.use(logFactory.connectLogger('router'));

//指定路由
app.use('/routes', routes);
app.use('/', indexs);
app.use('/abouts', abouts);
app.use('/agencys', agencys);
app.use('/healths', healths);
app.use('/helps', helps);

app.use('/screenings', screenings);
// app.use('/searchs', searchs);
app.use('/treats', treats);
app.use('/users', users);
app.use('/trade', trades);
app.use('/dic', dictionarys);
app.use('/treat',treats);

//捕获404错误并转发到错误处理中间件
app.use(function(req, res, next) {
  var err = new Error('抱歉，您访问的资源不存在');
  errorHandler.handleError(res, '404', err);
});


//开发时的错误处理
if (app.get('env') === 'development') {

  app.set('showStackError',true);

  app.locals.pretty = true ; //格式化页面内容

}


//捕获未处理的异常
process.on('uncaughtException', function(err) {
  console.error('Error caught in uncaughtException event:', err);
  // res.render('error', {
  //   message: err.message,
  //   error: err
  // });
});

module.exports = app;
