const momentService = require('../service/moment.service')

class MomentController {
    async create(ctx, next) {
        const { content } = ctx.request.body

        const { id } = ctx.user
        const result = await momentService.create(content, id)

        ctx.body = {
            code: 0,
            message: 'create moment successfully',
            data: result
        }
    }
    async list(ctx, next) {
        const { offset, size } = ctx.query

        const result = await momentService.queryList(offset, size)
        ctx.body = {
            code: 0,
            data: result
        }
    }
}

module.exports = new MomentController()
