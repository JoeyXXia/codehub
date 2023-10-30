const fs = require('fs')

const { UPLOAD_PATH } = require('../config/path')
const fileService = require('../service/file.service')
const userService = require('../service/user.service')

class UserController {
    async create(ctx, next) {
        // 获取用户请求传递的参数
        const user = ctx.request.body

        // 查询数据
        const result = await userService.create(user)

        // 返回数据
        ctx.body = result
    }

    async showAvatarImage(ctx, next) {
        const { userId } = ctx.params

        const avatarInfo = await fileService.queryAvatarByUserId(userId)

        const { filename, mimetype } = avatarInfo
        ctx.type = mimetype

        ctx.body = fs.createReadStream(`${UPLOAD_PATH}/${filename}`)
    }
}

module.exports = new UserController()
