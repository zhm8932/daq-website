var express = require('express');
var path = require('path');
var favicon = require('serve-favicon'); //处理收藏夹图标的
var logger = require('morgan');       //写日志
var cookieParser = require('cookie-parser');  //解析cookie req.cookies属性存放着客户端提交过来的cookie // req.cookie(key,value) 向客户端写入cookie
var bodyParser = require('body-parser');  //处理请求体的 req.body 属性存放着请求体对象
var session = require('express-session');
// var redisStore = require('connect-redis')(session);

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

var app = express();

// 设置模板的存放路径
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//把favicon图标放置在public目录之后取消注释
app.use(favicon(path.join(__dirname, 'public','images', 'favicon.ico')));
app.use(logger('dev'));


app.use(bodyParser.json());  //处理content-type=json的请求体
app.use(bodyParser.urlencoded({ extended: false }));  //处理content-type=urlencoded的请求体 extended为true表示使用querystring来将请求体的字符串转成对象
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));  //静态文件服务中间件 指定一个绝对目录 的路径作为静态文件的根目录

app.use(session({
  // store: new redisStore({}),
  secret: config.sessionSecret,
  cookie:{maxAge:12*60*60*1000}
}));

app.locals.moment = require('moment') //本地模板中引入moment方法
app.locals.markdown = require( "markdown" ).markdown; //markdown编辑语法
app.locals.query = '';
app.locals.sep = '>';


app.locals.locals_sample = JSON.stringify(config.sample);//取样方式及其对应的中文,存入配置文件


//指定路由
app.use('/routes', routes);
app.use('/', indexs);
app.use('/abouts', abouts);
app.use('/agencys', agencys);
app.use('/healths', healths);
app.use('/helps', helps);

app.use('/screenings', screenings);
app.use('/searchs', searchs);
app.use('/treats', treats);
app.use('/users', users);
app.use('/trade', trades);
app.use('/dic', dictionarys);
app.use('/treat',treats);

//捕获404错误并转发到错误处理中间件
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  console.log('404');
  next(err);
});

// error handlers

//开发时的错误处理
//将打印出错误的堆栈信息
if (app.get('env') === 'development') {

  app.set('showStackError',true)
  app.use(logger(':method :url :status'))  //打印请求状态等信息
  app.locals.pretty = true  //格式化页面内容

  app.use(function(err, req, res, next) {
    console.log('development')
    console.log('err1:',err)
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

//生产环境下的错误处理 product
//不向用户暴露堆栈信息
app.use(function(err, req, res, next) {
  console.log('production')
  console.log('err2:',err)
  res.status(err.status || 500);
  res.render('error', {
    // message: err.message,
    message: err.message,
    error: ''
  });
});


module.exports = app;
