let Koa=require('koa')
let KoaRouter=require('koa-router')
var jwt = require('jsonwebtoken')
var Fly=require("flyio/src/node")
var fly=new Fly
//1.生成应用
const app=new Koa()

//2.生成路由器
const router=new KoaRouter()
//express
// router.get('/',(req,res,next)=>{
//     //req:请求的信息
//     //res:响应的对象
//     //next:负责调用下一个回调
//     //res.send() 返回数据
// })
//koa
router.get('/',(ctx,next)=>{
    //ctx 等同于req+res
    ctx.body="服务器返回的数据"
})

//1.搜索图书的接口
let datas=require('./datas/data.json')
router.get('/searchBooks',(ctx,next)=>{
    //1.获取请求的参数
    let req=ctx.query.req
    //2.处理请求数据
    if(!req){
        ctx.body={
            code:1,
            data:'请输入有效的参数'
        }
    }else{//3.返回相应数据
        ctx.body={
            code:0,
            data:datas
        }
    }
    
})


router.get('/getOpenId',async(ctx,next)=>{
    let code=ctx.query.code
    let appId='wx812b373019ce7752'
    let appSecret='996e585ef7eb5554ce0eec3e18a56966'
    let url=`https://api.weixin.qq.com/sns/jscode2session?appid=${appId}&secret=${appSecret}&js_code=${code}&grant_type=authorization_code`

    //获取openId
    let result=await fly.get(url)
    // console.log(result.data)
    let openId=JSON.parse(result.data).openid
   
    //加密openId
    let sessionKey="sun"
    let token = jwt.sign(openId,sessionKey )
    console.log("加密后的数据",token)
    //解密openId
    var decoded = jwt.verify(token, sessionKey);
    console.log("解密后的数据",decoded)

    ctx.body=token
})

//3.安装路由器，声明使用中间件
app
    .use(router.routes())//声明使用路由
    .use(router.allowedMethods())//允许使用路由的方法

app.listen('3000',()=>{
    console.log('服务器启动成功了')
    console.log("服务器地址：http://localhost:3000")
})