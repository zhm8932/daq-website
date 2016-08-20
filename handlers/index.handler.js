var TradeRequest = require('../requests/trade.request');
//首页回调处理

exports.index = function(req,res) {
    var get_goods_list = req.get_goods_list
    var get_department = req.get_department
    res.locals.get_goods_list_success = get_goods_list.success;
    res.locals.get_department_success = get_department.success;



    // console.log('get_goods_list.success:',get_goods_list.success)
    // console.log('get_department.success:',get_department.success)
    if(get_goods_list.success){
        get_goods_list=get_goods_list.data.data
    }
    if(get_department.success){
        get_department = get_department.data;
    }
    if(get_goods_list.success&&get_department.success){
        res.render('error', {
            title: '404',
            keywords: '404页面',
            description: '404首页描述'
        });

    }else{
        res.render('index', {
            title: '都安全医疗',
            keywords: '都安全,都安全医疗,都安全两性生殖健康,都安全宫颈癌筛查,都安全两性筛查,生殖感染检查,阴道微生态检查',
            description: '都安全医疗是一家专注两性生殖健康的筛查诊疗平台，遵循国际筛查诊疗规范，致力于提供两性生殖感染、宫颈癌筛查和女性阴道微生态等筛查诊疗一站式全流程医疗服务。',
            get_goods_list:get_goods_list,
            get_department:get_department
        });
    }

};

exports.get_cart_num = function (req,res,next) {
    console.log("req::url:",req.url);
    // console.log("browser:",browser);
    var accountId = req.accountId?req.accountId:req.body.accountId;
    console.log("accountId:",accountId);
    if(accountId){
        if(req.cookies&&req.cookies.cartNum){
            res.locals.cartNum=req.cookies.cartNum;
            next();
        }
        else{
            TradeRequest.GetCartCount(req,res,function (err,data) {
                var query = req.query;
                var json = JSON.parse(data);
                if(json.success){
                    // res.locals.cartNum=json.data.length||'0';
                    var cartNum = json.data;
                    res.locals.cartNum=cartNum;
                    res.cookie('cartNum',cartNum)
                }else{
                    res.locals.cartNum='0';
                }
                next()

            })
        }

    }else{
        res.locals.cartNum='0';
        next()
    }
}

exports.get_wap_tit = function (req,res,next) {
    // if(browser.mobile){
    if(true){
        var url = req.url;
        var curTit = '';
        console.log("url:",url);
        if(url=='/trade/order/list'||url.search('/trade/order')!=-1){
            if(url.search('/detail')!=-1){
                url = '/trade/order/list';
                curTit = '<i class="icon t1"></i><a href='+url+'>我的订单</a> > <em>订单详情</em>'
            }else{
                curTit = '<i class="icon t1"></i><a href='+url+'>我的订单</a>'
            }

        }
        else if(url=='/users/reservation/list'||url.search('/users/reservation')!=-1){
            if(url.search('/detail')!=-1){
                url = '/users/reservation/list';
                curTit = '<i class="icon t2"></i><a href='+url+'>我的报告</a> > <em>预约详情</em>'
            }else{
                curTit = '<i class="icon t2"></i><a href='+url+'>我的报告</a>'
            }

        }
        else if(url=='/users/register/list'){
            curTit = '<i class="icon t3"></i><a href='+url+'>我的挂号</a>'
        }
        else if(url=='/users/coupon/listView'||url.search('/users/coupon')!=-1){
            curTit = '<i class="icon t4"></i><a href='+url+'>优惠券</a>'
        }
        else if(url=='/users/account/info'||url.search('/users/account')!=-1){
            curTit = '<a href='+url+'>账号信息</a>'
        }
        console.log("curTit:",curTit);
        res.locals.curTit = curTit;
    }
    next();
};

exports.render_register = function (req,res,next) {
    res.render('register',{
        title:'都安全新用户注册'
    });
};

exports.render_retrieve_password = function (req,res,next) {
    res.render('retrieve_password',{
        title:'都安全用户找回密码'
    });
};
