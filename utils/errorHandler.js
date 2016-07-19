var errorPageJson = {'404': 'error_404', '500': 'error_500', '200': 'error_tip'};

exports.handleError = function(res, code, type, error){
    _handleError(res, code, type, error);
};

exports.getErrorMsg = function(error){
    _getErrorMsg(error);
};

exports.handleServerError = function handleInternalError(res, code, type, error) {
    if (code === '200') {
        _handleError(res, '200', type, error);
    } else {
        _handleError(res, '500', type, error);
    }
};

function _handleError(res, code, type, error){
    error = _getErrorMsg(error,code);

    res.statusCode = code;
    var errorPage = errorPageJson[code] || 'error_tip';
    if (type === 'html') {
        res.render(errorPage, {
            message: error.externalMsg
        });
    } else{
        var errorJson = {code: code, msg: error.externalMsg, success: false};
        res.json(JSON.stringify(errorJson));
    }
}

function _getErrorMsg(error,code){
    var env = process.env.NODE_ENV || 'development';
    error.externalMsg = '服务器内部错误';
    if (env === 'development') {
        error.externalMsg = error.message + '\n' + error.stack;
    } else {
        if (code === '200') {
            error.externalMsg = error.message;
        } else if (code == '404') {
            error.externalMsg = '抱歉，您访问的资源不存在';
        }
    }
    return error;
}
