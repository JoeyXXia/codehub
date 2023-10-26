const connection = require('../app/dababase')

class FileService {
    async create(id) {
        const statement = 'statement'
        const [result] = await connection.execute(statement, id)
        return result
    }
}

module.exports = new FileService()
