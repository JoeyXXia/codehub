const connection = require('../app/dababase')

class MomentService {
    async create(content, userId) {
        const statement = 'INSERT INTO moment (content,user_id) VALUES (?, ?);'
        const [result] = await connection.execute(statement, [content, userId])
        return result
    }
    async queryList(offset = 0, size = 10) {
        const statement = `SELECT 
        m.id id, m.content content,m.createAt createTime, m.updateAt updateTime,
        JSON_OBJECT('id',u.id,'name',u.name,'createTime', u.createAt,'updateTime',u.updateAt) user
        FROM moment m LEFT JOIN user u ON u.id = m.user_id LIMIT ? OFFSET ?;`
        const [result] = await connection.execute(statement, [
            String(size),
            String(offset)
        ])
        return result
    }
}

module.exports = new MomentService()
