const KoaRouter = require("koa-router")
const UserCOntroller = require("../controller/user.controller")

const userRouter = new KoaRouter({ prefix: "/users" })

userRouter.post("/", UserCOntroller.create)

module.exports = userRouter
