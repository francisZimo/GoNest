// 中间件
var express = require('express');
var app = express();
var path = require('path');


// app.use(express.static(path.join(__dirname,'/')));
app.use(express.static(path.join(__dirname,'/public')));

app.get('/redirect',function(req,res){
    res.redirect("http://www.baidu.com");
   });

app.listen(3000);