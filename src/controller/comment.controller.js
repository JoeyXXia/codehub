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

    async reply(ctx, next) {
        const { content, momentId, commentId } = ctx.request.body
        const { id } = ctx.user

        const result = await commentService.reply(
            content,
            momentId,
            commentId,
            id
        )
        ctx.body = {
            code: 0,
            message: 'reply comment',
            data: result
        }
    }
}

module.exports = new commentController()
