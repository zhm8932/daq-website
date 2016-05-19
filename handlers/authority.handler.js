
exports.loginRequired = function(req,res,next){
    var _user = req.cookies.userAllInfo;
    //console.log('_user:',_user)
    console.log('登录控制器')
    console.log('_user:',_user)

    if(!_user){
        return res.redirect('/login')
    }
    next()
}