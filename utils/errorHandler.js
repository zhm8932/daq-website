const logUtil = require('./logFactory');
const errorLog = logUtil.getLogger('error');
const routerLog = logUtil.getLogger('router');

var errorPageJson = {'404': 'error_404', '500': 'error_500', '200': 'error_tip'};//不同响应码的不同提示页面
/**
 * 统一处理[NODE]服务器中错误的方法
 * @param res 响应
 * @param code http响应码
 * @param error 错误Error
 */
exports.handleError = function(res, code, error){
    _handleError(res, code,  error);
};

/**
 * 处理[JAVA]服务器端返回的错误。
 * [JAVA]服务器返回success为false时调用该方法。错误码为300时,http响应码设为200,原样展示错误信息。错误码为其他时,http响应码设为500,提示信息为"服务器内部错误"
 * @param res 响应
 * @param serverCode 服务器返回的响应码
 * @param error 错误Error
 */
exports.handleServerError = function handleInternalError(res, serverCode, error) {
    _handleError(res, '200',  error,true);

    // if (serverCode === '300' || serverCode === '200300' || serverCode ==='10000000'||serverCode==='11000000') {
    //     _handleError(res, '200',  error,true);
    // } else {
    //     _handleError(res, '500', error,true);
    // }
};


/**
 * 根据是生产环境还是开发环境来决定返回的错误的描述信息,存放在error.externalMsg里。默认错误信息为"服务器内部错误"
 * @param error 错误Error
 * @param code http响应码。为200时代表Java服务器返回的错误信息应该展示给用户
 * @returns {*} 错误Error,已定义好error.externalMsg
 */
exports.getErrorMsg = function(error,code){
    _getErrorMsg(error,code);
};


/**
 * 统一处理错误的方法
 * @param res 响应
 * @param code http响应码
 * @param error 错误Error
 * @param isServerError 是否是服务器错误
 * @private
 */
function _handleError(res, code, error,isServerError){
    errorLog.error(error);
    routerLog.error(error);
    console.log(error);
    error = _getErrorMsg(error,code,isServerError);//根据情况构造错误提示信息

    res.status(code);

    res.format({
        html:function(){
            var errorPage = errorPageJson[code] || 'error_tip';//根据不同的响应码渲染不同的错误页面,默认渲染error_tip页面
            res.render(errorPage, {
                message: error.externalMsg,
                serverCode:error.serverCode || ''
            });
        },
        json:function(){
            var errorJson = {code: code, msg: error.externalMsg, success: false,serverCode:error.serverCode || ''};//服务端错误码:用来判断服务端的错误
            res.send(errorJson);
        }
    });



    // res.statusCode = code;//设置http响应码
    // if (type === 'html') {//响应类型为html时,渲染错误页面并返回
    //     var errorPage = errorPageJson[code] || 'error_tip';//根据不同的响应码渲染不同的错误页面,默认渲染error_tip页面
    //     res.render(errorPage, {
    //         message: error.externalMsg
    //     });
    // } else{//响应类型为json时,构造json,并返回json
    //     var errorJson = {code: code, msg: error.externalMsg, success: false};
    //     res.json(JSON.stringify(errorJson));
    // }
}

/**
 * 构造错误信息,存放在error.externalMsg里
 * 生产环境返回错误堆栈信息,开发环境不返回堆栈信息
 * 响应码200:原样展示错误信息。响应码404:""。响应码500及其他:"服务器内部错误"。
 * @param error 错误Error
 * @param code http响应码。为200时代表Java服务器返回的错误信息应该展示给用户
 * @param isServerError 是否是服务器错误。如果是服务器错误,并且handleServerError方法已经将http响应码已经设为200,则无需展示堆栈信息
 * @returns {*} 错误Error,已定义好error.externalMsg
 * @private
 */
function _getErrorMsg(error,code,isServerError){
    var env = process.env.NODE_ENV || 'development';
    if (env === 'development') {
        if(isServerError && code == '200'){//如果是服务器错误,并且http响应码已经设为200,则无需展示堆栈信息
            error.externalMsg = error.message;
        }else{
            error.externalMsg = error.message + '.\n' + error.stack;
        }
    }else {
        if (code === '200') {
            error.externalMsg = error.message;
        } else if (code == '404') {
            error.externalMsg = '抱歉，您访问的资源不存在';
        }else{
            error.externalMsg = '服务器内部错误';
        }
    }
    return error;
}

