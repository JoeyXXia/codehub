const jwt = require('jsonwebtoken')

const { PRIVATE_KEY } = require('../config/secret')

class LonginController {
    async sign(ctx, next) {
        console.log('step in sign')
        const { id, name } = ctx.user

        const token = jwt.sign({ id, name }, PRIVATE_KEY, {
            expiresIn: 60 * 60 * 24,
            algorithm: 'RS256'
        })

        ctx.body = { id, name, token }
    }
}

module.exports = new LonginController()
