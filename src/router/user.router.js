const KoaRouter = require('koa-router')
const { create, showAvatarImage } = require('../controller/user.controller')
const { verifyUser, handlePassword } = require('../middleware/user.middleware')

const userRouter = new KoaRouter({ prefix: '/users' })

userRouter.post('/', verifyUser, handlePassword, create)

userRouter.get('/avatar/:userId', showAvatarImage)

module.exports = userRouter
