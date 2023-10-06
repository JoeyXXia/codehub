const jwt = require('jsonwebtoken')

const { PRIVATE_KEY, PUBLIC_KEY } = require('../config/secret')

class LonginController {
    async sign(ctx, next) {
        const { id, name } = ctx.user

        const token = jwt.sign({ id, name }, PRIVATE_KEY, {
            expiresIn: 60 * 60 * 24,
            algorithm: 'RS256'
        })

        ctx.body = { id, name, token }
    }
}

module.exports = new LonginController()
