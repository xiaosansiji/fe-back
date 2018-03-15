const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
    const path = ctx.request.url
    if (path === '/read.gif') {
        ctx.body = 'ok'
    } else if (path === '/post/jserr') {
        ctx.body = 'ok'
    } else {
        ctx.body = 'hello koa2'
    }
    // 允许 post 请求可以跨域提交
    ctx.response.set("Access-Control-Allow-Origin", ctx.request.header.referer.replace(/\/$/gi, ""))
})

app.listen(3000)
console.log('fe-back is starting at port 3000')