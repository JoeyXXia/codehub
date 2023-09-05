const userService = require("../service/user.service")

const verifyUser = async (ctx,next) => {
  const {name,password} = ctx.request.body
  if(!name || !password) {
    ctx.body = {
      code:-1001,
      message:'username or password can not be empty'
    }
    return
  }

  const users = await userService.findUserByName(name) 
    if(users.length) {
      ctx.body = {
        code:-1002,
        message:'username has been used'
      }
      return 
    }

    await next()
  }
  module.exports = {
    verifyUser
  }
