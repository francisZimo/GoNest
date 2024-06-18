var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.end('welcome to  首页');
});
app.get('/about',function(req,res){
 res.end('欢迎来到关于我们');
})
app.listen(3000);