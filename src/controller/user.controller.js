const userService = require("../service/user.service")
class UserController {
  async create(ctx, next) {
    const user = ctx.request.body;
    //check username and password
    const { name, password} = name
    
    console.log(user);
    const result = await userService.create(user)
    userService.create(user);

    ctx.body = {
      message:"it is ok",
      data:result
    }
  }
}

module.exports = new UserController()
