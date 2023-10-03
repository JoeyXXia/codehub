const {
    NAME_OR_PASSWORD_IS_REQUIRED,
    USER_DOES_NOT_EXIST,
    PASSWORD_IS_INCORRECT
} = require('../config/error')
const userService = require('../service/user.service')
const md5password = require('../utils/md5-password')

const verifyLogin = async (ctx, next) => {
    const { name, password } = ctx.request.body

    // Check name and password is empty
    if (!name || !password) {
        return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
    }
    // Check name and password in database
    const users = await userService.findUserByName(name)
    const user = users[0]
    if (!user) {
        return ctx.app.emit('error', USER_DOES_NOT_EXIST, ctx)
    }

    if (user.password != md5password(password)) {
        return ctx.app.emit('error', PASSWORD_IS_INCORRECT, ctx)
    }

    //keep the user and password
    ctx.user = user
    await next()
}

module.exports = {
    verifyLogin
}
