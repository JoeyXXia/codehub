const {
    NAME_OR_PASSWORD_IS_REQUIRED,
    NAME_IS_ALREADY_EXISTS,
} = require('../config/error')
const userService = require('../service/user.service')

const verifyUser = async (ctx, next) => {
    const { name, password } = ctx.request.body
    if (!name || !password) {
        return ctx.app.emit('error', NAME_OR_PASSWORD_IS_REQUIRED, ctx)
    }

    const users = await userService.findUserByName(name)
    if (users.length) {
        return ctx.app.emit('error', NAME_IS_ALREADY_EXISTS, ctx)
    }
    await next()
}

module.exports = {
    verifyUser,
}
