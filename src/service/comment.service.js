const connection = require('../app/dababase')

class commentService {
    async create(content, momentId, useId) {
        const statement =
            'INSERT INTO comment (content, moment_id, user_id) VALUES (?, ?, ?);'
        const [result] = await connection.execute(statement, [
            content,
            momentId,
            useId
        ])
        return result
    }

    async reply(content, momentId, commentId, useId) {
        const statement =
            'INSERT INTO comment (content, moment_id,comment_id, user_id) VALUES (?, ?, ?,?);'
        const [result] = await connection.execute(statement, [
            content,
            momentId,
            commentId,
            useId
        ])
        return result
    }
}

module.exports = new commentService()
