const commentService = require('../service/comment.service')

class commentController {
    async create(ctx, next) {
        const { content, momentId } = ctx.request.body
        const { id } = ctx.user

        const result = await commentService.create(content, momentId, id)
        ctx.body = {
            code: 0,
            message: 'create comment',
            data: result
        }
    }
}

module.exports = new commentController()
