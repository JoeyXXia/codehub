const KoaRouter = require('koa-router')

const fileRouter = new KoaRouter({ prefix: '/file' })

fileRouter.post('/avatar', (ctx, next) => {})

module.exports = fileRouter
