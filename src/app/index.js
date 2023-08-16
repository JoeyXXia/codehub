const Koa = require("koa")
const userRouter = require("../router/user_router")
const { bodyParser } = require("@koa/bodyparser")

const app = new Koa()

app.use(bodyParser())
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

// app.use((ctx, next) => {
//   ctx.body = `success access`
// })

module.exports = app
