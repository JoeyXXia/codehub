const jwt = require('jsonwebtoken')

const { PRIVATE_KEY, PUBLIC_KEY } = require('../config/secret')
const { UNAUTHENTICATION } = require('../config/error')

class LonginController {
    async sign(ctx, next) {
        const { id, name } = ctx.user

        const token = jwt.sign({ id, name }, PRIVATE_KEY, {
            expiresIn: 60 * 60 * 24,
            algorithm: 'RS256'
        })

        ctx.body = { id, name, token }
    }

    test(ctx, next) {
        const authorization = ctx.headers.authorization
        const token = authorization.replace('Bearer ', '')
        console.log(token)

        try {
            const result = jwt.verify(token, PUBLIC_KEY, {
                algorithms: ['RS256']
            })
            console.log(result)
            ctx.body = `login test is ok`
        } catch (error) {
            console.log(error)
            ctx.app.emit('error', UNAUTHENTICATION, ctx)
        }
    }
}

module.exports = new LonginController()
