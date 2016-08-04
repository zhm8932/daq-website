const path = require('path');
exports  = {
  "appenders": [
    {
      "type": "dateFile",
      "filename": path.resolve(__dirname, "../logs/app.log"),
      "category": "app",
      "pattern": "-yyyy-MM-dd"
    },
    {
      "type": "dateFile",
      "filename": path.resolve(__dirname, "../logs/http.log"),
      "category": "http",
      "pattern": "-yyyy-MM-dd"
    },
    {
      "type": "dateFile",
      "filename": path.resolve(__dirname, "../logs/router.log"),
      "category": "router",
      "pattern": "-yyyy-MM-dd"
    },
    {
      "type": "dateFile",
      "filename": path.resolve(__dirname, "../logs/service.log"),
      "category": "service",
      "pattern": "-yyyy-MM-dd"
    },
    {
      "type": "dateFile",
      "filename": path.resolve(__dirname, "../logs/request.log"),
      "category": "request",
      "pattern": "-yyyy-MM-dd"
    },
    {
      "type": "dateFile",
      "filename": path.resolve(__dirname, "../logs/proxy.log"),
      "category": "proxy",
      "pattern": "-yyyy-MM-dd"
    },
    {
      "type": "dateFile",
      "filename": path.resolve(__dirname, "../logs/middleware.log"),
      "category": "middleware",
      "pattern": "-yyyy-MM-dd"
    },
    {
      "type": "dateFile",
      "filename": path.resolve(__dirname, "../logs/error.log"),
      "category": "error",
      "pattern": "-yyyy-MM-dd"
    }
  ],
  "levels": [{
    "router": "INFO",
    "request": "INFO",
    "middleware": "INFO",
    "proxy": "INFO",
    "service": "INFO",
    "error": "ERROR"
  }]
};

