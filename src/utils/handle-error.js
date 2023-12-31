const app = require('../app')
const {
    NAME_OR_PASSWORD_IS_REQUIRED,
    NAME_IS_ALREADY_EXISTS,
    USER_DOES_NOT_EXIST,
    PASSWORD_IS_INCORRECT,
    UNAUTHENTICATION,
    UNPERMISSION
} = require('../config/error')
app.on('error', (error, ctx) => {
    let code = 0
    let message = ''
    console.log('i am trying to check the password')
    console.log('error: ' + error)
    switch (error) {
        case NAME_OR_PASSWORD_IS_REQUIRED:
            code = -1001
            message = 'name or password can not be empty'
            break
        case NAME_IS_ALREADY_EXISTS:
            code = -1002
            message = 'username already has been used'
            break
        case USER_DOES_NOT_EXIST:
            code = -1003
            message = 'username does not exist'
            break
        case PASSWORD_IS_INCORRECT:
            code = -1004
            message = 'password is incorrect'
            break
        case UNAUTHENTICATION:
            code = -1005
            message = 'unauthenticated'
            break
        case UNPERMISSION:
            code = -1006
            message = 'unpermission'
            break
        default:
            code = -1007
            message = 'not found'
    }
    ctx.body = { code, message }
})
