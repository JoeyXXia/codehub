const app = require('../app')
const {
    NAME_OR_PASSWORD_IS_REQUIRED,
    NAME_IS_ALREADY_EXISTS,
} = require('../config/error')
app.on('error', (error, ctx) => {
    let code = 0
    let message = ''

    switch (error) {
        case NAME_OR_PASSWORD_IS_REQUIRED:
            code = -1001
            message = 'name or password can not be empty'
            break
        case NAME_IS_ALREADY_EXISTS:
            code = -1002
            message = 'username already has been used'
    }
    ctx.body = { code, message }
})
