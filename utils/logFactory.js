/**
 * Created by chenlu on 16/7/21.
 */
"use strict";

const fs = require('fs');
const log4js = require('log4js');
const path = require('path');

const JSON_PATH = require('../config/log4js.config');
const LOG_DIR = path.resolve(__dirname, '../logs');

class Log {
    constructor() {
        //加载log4js配置
        if(!fs.existsSync(LOG_DIR)) {
            fs.mkdirSync(LOG_DIR);
        }
        this._defaults = {};
        log4js.configure(JSON_PATH);
    }

    getLogger(name) {
        let _default = this._defaults;
        if(!name) {
            return this;
        }else{
            let logger = _default[name];
            if(!logger) {
                logger = log4js.getLogger(name);
            }
            return logger;
        }
    }

    connectLogger(name) {
        return log4js.connectLogger(this.getLogger(name), { level: 'auto'/*, format: ':method :url :status'*/ });
    }
}

var instance = new Log();
module.exports = instance;
