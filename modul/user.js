var mongoose = require('mongoose');//引入模块
mongoose.connect('mongodb://localhost:27017/520');//连接数据库
//520数据库名字
 const  Schema=mongoose.Schema;
 const userSchema=new  Schema({
username:String,
password:String,
imgurl:String,

 });
 const User=mongoose.model("User",userSchema,"user");
 //导出处User模块
 module.exports=User;
