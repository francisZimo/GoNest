var express = require('express');//引入express
var app = express();

app.all("/signup",function(req,res){
    res.send("注册");
   })
app.all("*",function(req,res){
 res.send("404");
})
app.listen(3000);