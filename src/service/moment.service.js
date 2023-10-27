const connection = require('../app/dababase')

class MomentService {
    async create(content, userId) {
        const statement = 'INSERT INTO moment (content,user_id) VALUES (?, ?);'
        const [result] = await connection.execute(statement, [content, userId])
        return result
    }
    async queryList(offset = 0, size = 100) {
        const statement = `SELECT 
        m.id id, m.content content,m.createAt createTime, m.updateAt updateTime,
        JSON_OBJECT('id',u.id,'name',u.name,'createTime', u.createAt,'updateTime',u.updateAt) user,
        (SELECT COUNT(*) FROM comment WHERE comment.moment_id = m.id) commentCount,
	    (SELECT COUNT(*) FROM moment_label ml WHERE ml.moment_id = m.id) labelCount
        FROM moment m LEFT JOIN user u ON u.id = m.user_id LIMIT ? OFFSET ?;`
        const [result] = await connection.execute(statement, [
            String(size),
            String(offset)
        ])
        return result
    }

    async queryById(id) {
        const statement = `SELECT 
        m.id id, m.content content,m.createAt createTime, m.updateAt updateTime,
        JSON_OBJECT('id',u.id,'name',u.name,'createTime', u.createAt,'updateTime',u.updateAt) user
        FROM moment m LEFT JOIN user u ON u.id = m.user_id where m.id = ?;`
        const [result] = await connection.execute(statement, [id])
        return result
    }

    async update(content, id) {
        const statement = `UPDATE moment SET content = ? WHERE id = ?;`
        const [result] = await connection.execute(statement, [content, id])

        return result
    }

    async remove(id) {
        const statement = `DELETE FROM moment WHERE id = ?;`
        const [result] = await connection.execute(statement, [id])

        return result
    }

    async hasLabel(momentId, labelId) {
        const statement = `SELECT * FROM moment_label WHERE moment_id = ? AND label_id = ?;`
        const [result] = await connection.execute(statement, [
            momentId,
            labelId
        ])
        return !!result.length
    }

    async addLabel(momentId, labelId) {
        const statement = `INSERT INTO moment_label (moment_id, label_id) VALUES(?,?);`
        const [result] = await connection.execute(statement, [
            momentId,
            labelId
        ])
        return result
    }
}

module.exports = new MomentService()
