const userService = require("../service/user.service")
class UserCOntroller {
  create(ctx, next) {
    const user = ctx.request.body
    console.log(user)
    userService.create(user)

    ctx.body = "that is ok"
  }
}

module.exports = new UserCOntroller()
