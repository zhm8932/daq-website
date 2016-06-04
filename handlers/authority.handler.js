//显示登录返回数据
function showLogin(req,res,next,msg){
    var data = {
        success : true, //状态
        needLogin:true
    };
    data.msg = msg?msg:"请先登录！";
    res.send(JSON.stringify(data));
}

exports.loginRequired = function(req,res,next){
    var _user = req.cookies.userInfo;

    console.log('登录控制器');
    console.log('_user:',_user);
    if(!_user){
        return showLogin(req,res,next);
    }else{
        next();
    }
};
