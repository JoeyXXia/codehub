const jwt = require('jsonwebtoken')

const { PRIVATE_KEY } = require('../config/secret')

class LonginController {
    async sign(ctx, next) {
        const { id, name } = ctx.user
        console.log(id, name)
        console.log('this is private', PRIVATE_KEY)
        // const token = jwt.sign({ id, name }, PRIVATE_KEY, {
        //     // expiresIn: 24 * 60 * 60,
        //     // algorithm: 'RS256'
        // })
        console.log('this is token', token)
        // ctx.body = {
        //     code: 0,
        //     data: {
        //         token,
        //         id,
        //         name
        //     }
        // }
    }
}

module.exports = new LonginController()
