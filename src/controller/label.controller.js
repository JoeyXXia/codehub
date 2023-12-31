const labelService = require('../service/label.service')

class LabelController {
    async create(ctx, next) {
        const { name } = ctx.request.body

        const result = await labelService.create(name)

        ctx.body = {
            code: 0,
            message: 'create label successfully ',
            data: result
        }
    }

    async list(ctx, next) {}
}

module.exports = new LabelController()
