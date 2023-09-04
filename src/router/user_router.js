const KoaRouter = require("koa-router")
const UserController = require("../controller/user.controller")

const userRouter = new KoaRouter({ prefix: "/users" })

userRouter.post("/", UserController.create)

module.exports = userRouter
