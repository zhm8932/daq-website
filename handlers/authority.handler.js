//显示登录返回数据
function showLogin(req,res,next,msg){
    var data = {
        success : true, //状态
        needLogin:true
    };
    data.msg = msg?msg:"请先登录！";
    res.send(JSON.stringify(data));
}

exports.loginRequiredAsyn = function(req,res,next){
    console.log(req.session);
    var _user = req.session.userInfo;

    if(!_user){
        return showLogin(req,res,next);
    }else{
        next();
    }
};

exports.loginRequired = function(req,res,next){
    var _user = req.session.userInfo;
    if(!_user){
        res.render('login',{
            redirectUrl:req.originalUrl
        });
    }else{
        req.accountId = _user.userAllInfo.accountCommon.id;
        next();
    }
};



