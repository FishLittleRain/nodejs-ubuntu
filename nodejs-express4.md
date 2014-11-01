# Nodejs开发框架Express4.X开发

------
##1. 建立工程
  express命令创建工程，支持ejs
    
    ~express -e nodejs-demo
  
  下载依赖包
  
    ~npm install
    
  启动项目
  
    ~npm start
    > nodejs-demo@0.0.0 start /home/nexus/workspace/nodejs-demo
    > node ./bin/www

  本地的3000端口被打开，通过浏览器访问: localhost:3000
  
##2. Express4.X配置文件

  app.js
  
    var express = require('express');
    var path = require('path');
    var favicon = require('static-favicon');
    var logger = require('morgan');
    var cookieParser = require('cookie-parser');
    var bodyParser = require('body-parser');
    
    var routes = require('./routes/index');
    var users = require('./routes/users');
    var http = require('http');
    var ejs =require('ejs');
    
    var app = express();

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.engine('.html', ejs.__express);
    app.set('view engine', 'html');
    //app.set('view engine', 'ejs');
    
    app.use(favicon());
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded());
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/', routes);
    app.use('/users', users);
    
    
    /// catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    /// error handlers
    
    // development error handler
    // will print stacktrace
    if (app.get('env') === 'development') {
        app.use(function(err, req, res, next) {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }
    
    // production error handler
    // no stacktraces leaked to user
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;

3. 增加Bootstrap界面框架

复制到public/stylesheets目录
 
    bootstrap.min.css
    bootstrap-responsive.min.css
    
复制到public/javascripts目录

    bootstrap.min.js
    jquery-1.9.1.min.js
    
接下来，我们把index.html页面切分成3个部分：header.html, index.html, footer.html

header.html, 为html页面的头部区域
index.html, 为内容显示区域
footer.html，为页面底部区域
