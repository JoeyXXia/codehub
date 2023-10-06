const Koa = require('koa')
const registerRouters = require('../router')
const { bodyParser } = require('@koa/bodyparser')

const app = new Koa()

app.use(bodyParser())
registerRouters(app)

module.exports = app
