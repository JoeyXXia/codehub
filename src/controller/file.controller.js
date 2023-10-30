const fileService = require('../service/file.service')
const { SERVER_HOST, SERVER_PORT } = require('../config/server')
const userService = require('../service/user.service')

class FileController {
    async create(ctx, next) {
        const { filename, mimetype, size } = ctx.request.file
        const { id } = ctx.user

        const result = await fileService.create(filename, mimetype, size, id)
        const avatarUrl = `${SERVER_HOST}:${SERVER_PORT}/users/avatar/${id}`

        const result2 = await userService.UpdateUserAvatar(avatarUrl, id)

        ctx.body = {
            code: 0,
            message: 'upload success',
            data: avatarUrl
        }
    }
}

module.exports = new FileController()
