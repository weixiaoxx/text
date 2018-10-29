/**
 * Created by Administrator on 2018\9\8 0008.
 */
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const ejs = require('ejs');
const async = require('async');
const server = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
//接收post数据
server.use(bodyParser.urlencoded({
    extended: true
}));
//设置模版引擎
server.engine('html', ejs.renderFile);
server.set('views', './views');
server.set('view engine', 'html');


server.get('/',function(req,res){
	res.render('index')
})


server.use(express.static('views'));

server.listen(8888);