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
    async detail(ctx, next) {
        const { momentId } = ctx.params

        const result = await momentService.queryById(momentId)

        ctx.body = {
            code: 0,
            data: result[0]
        }
    }

    async update(ctx, next) {
        const { momentId } = ctx.params

        const { content } = ctx.request.body
        const result = await momentService.update(content, momentId)
        ctx.body = {
            code: 0,
            message: 'updated successfully',
            data: result
        }
    }
}

module.exports = new MomentController()
