const  express=require("express");
const { json } = require("express/lib/response");
const  app=new  express();
const multer  = require('multer')
app.use("/upload",express.static("upload"));
//引入user
const User=require("./modul/user");
// 处理客户端传递过来的编码
app.use(express.urlencoded());
app.use(express.json());
//引入ejs
app.set("view engine","ejs");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'upload')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })

//注册界面
app.post('/upload', upload.single('avatar'), function (req, res, next) {
    res.json({
        code:200,
        msg:"上传成功",
        path:req.file.path,
    })
  });
  //注册
  app.get("/reg",(req,res)=>{
res.render("reg");

  });
  // 处理注册

  app.post("/doreg", async (req,res)=>
  {
      console.log(req.body);
      const  checked=  await  User.find({username: req.body.username});
      if(checked.length>0)
      {
          //证明用户名已存在
          res.json({
              code:201,
              msg:"用户名已存在",
          })
      }else{
          //说明用户名不存在
          const  user=new  User(req.body);
          const result=  await user.save();
          if(result)
          {
              res.json({
                  code:200,
                  msg:"注册成功",
              })
          }
      }


  }
  );
  //显示登陆
  app.get("/login",(req,res)=>{
      res.render("login");
  });
  // 处理登陆
  app.post("/dologin", async (req,res)=>
  {
      const result=await  User.find(req.body);
      if(result.length>0)
      {
          res.json({
              code:200,
              msg:"登陆成功",
          })
      }else{
          res.json({
              code:201,
              msg:"用户名或密码错误",
          })
      }
  }
  )
app.listen(8888);