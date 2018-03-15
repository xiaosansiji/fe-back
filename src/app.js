const Koa = require('koa')
const app = new Koa()

app.use(async (ctx) => {
    const path = ctx.request.url
    console.log(ctx.request)
    if (path === '/read.gif') {
        ctx.body = 'ok'
    } else if (path === '/post/jserr') {
        ctx.body = 'ok'
    } else {
        ctx.body = 'hello koa2'
    }
})

app.listen(3000)
console.log('fe-back is starting at port 3000')