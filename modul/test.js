//引入User模块
const  User=require("./user");
//实例化User
const user= new User({
    username:"zhansgan",
    password:"123456",
});
//添加数据
// user.save().then((res)=>{
//     console.log("数据添加成功");
//     console.log(res);
// });
//for循环添加数据
// for(var i=0;i<20;i++)
// {
//     const user=new  User({
//         username:"lisi"+i,
//         password:parseFloat(Math.random()*100)
//     });
//     user.save().then((res)=>{
//         console.log(1111,res);
//     })
// }
//修改数据
// User.findByIdAndUpdate("62870b2d81c2bc65257466db",{
// username:"sssssss",

// }).then((res)=>{
//     console.log(res);
// })
//查询
// User.find().then((res)=>{
//     console.log(2222,res);
// });
//删除
User.findByIdAndDelete("62870d2ae467b0af579d9e4a").then((res)=>{
    console.log("删除成功");
    console.log(res);
})