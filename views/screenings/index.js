var express = require('express');
var router = express.Router();
var config = require('../config');
var util = require('../utils/ajax');
var Requests = require('../request/indexs.request')
/* GET home page. */


router.use(function (req,res,next) {
  var account = req.session.account;
  if(account){
    res.locals.account = account;

  }
  next()

})
router.get('/', function(req, res, next) {
  console.log("req.session:",req.session)
  res.render('index', { title: '机会多API调试工具' });
});

router.post('/login',Requests.login);
router.post('/logout',Requests.logout);

router.get('/routers', function(req, res, next) {



  var currentPage = req.query.page||1;

  var query = req.query
  var body = req.body
  // console.log('query:',query)
  // console.log('query:',query)

  var bizParam = query.bizParam
  var apiName = query.apiName;
  var method = query.method;
  var port = query.port;
  var hostname = query.hostname;
  var appKey = query.appKey;
  var secret = query.secret;
  var timestamp = query.timestamp;
  var accessToken = req.session&&req.session.accessToken
  
  console.log("accessToken:",accessToken)

  var bizParam = JSON.parse(bizParam)
  util.ajax({
    method:method,
    apiName:apiName,
    bizParam:bizParam,
    hostname:hostname,
    port:port,
    appKey:appKey,
    secret:secret,
    timestamp:timestamp,
    accessToken:accessToken,
    callback:function (data,success,signParamStr) {
      // console.log("json:",data)
      // console.log("json:",typeof data)
      console.log("signParamStr:",signParamStr)
      var obj = {};
      if(typeof data=='string'){
        var data = JSON.parse(data);
        // console.log(data)
      }
      obj.data=data
      obj.signParamStr=signParamStr
      res.send(obj)
    }
  });

});

// router.get('/routers', function(req, res, next) {
//   var currentPage = req.query.page||1;
//
//   var query = req.query
//   var body = req.body
//   // console.log('query:',query)
//   // console.log('query:',query)
//
//   var bizParam = query.bizParam
//   var apiName = query.apiName;
//   var method = query.method;
//   var port = query.port;
//   var hostname = query.hostname;
//   var appKey = query.appKey;
//   var secret = query.secret;
//   var timestamp = query.timestamp;
//
//   var bizParam = JSON.parse(bizParam)
//   util.ajax(method,apiName,bizParam,hostname,port,appKey,secret,timestamp,function (data,success,signParamStr) {
//     // console.log("json:",data)
//     // console.log("json:",typeof data)
//     console.log("signParamStr:",signParamStr)
//     var obj = {};
//     if(typeof data=='string'){
//       var data = JSON.parse(data);
//       // console.log(data)
//     }
//     obj.data=data
//     obj.signParamStr=signParamStr
//     res.send(obj)
//   });
//
// });



module.exports = router;
