const Koa = require('koa')
const koaBody = require('koa-body')
const app = new Koa()

app.use(koaBody())
app.use(async (ctx) => {
    const path = ctx.request.path
    if (path === '/read.gif') {
        ctx.body = 'ok'
        console.log("GET: ", ctx.request.query)
    } else if (path === '/post/webper') {
        console.log("POST: ", ctx.request.body)
        ctx.response.body = 'ok'
        
    } else {
        ctx.body = 'hello koa2'
    }
    // 允许 post 请求可以跨域提交
    ctx.response.set("Access-Control-Allow-Origin", ctx.request.header.origin)
})

app.listen(3000)
console.log('fe-back is starting at port 3000')