const { UNPERMISSION } = require('../config/error')
const permissionService = require('../service/permission.service')

const verifyMomentPermission = async (ctx, next) => {
    const { momentId } = ctx.params
    console.log('momentId', momentId)
    const { id } = ctx.user
    console.log('id', id)

    const isPermission = await permissionService.checkMoment(momentId, id)
    console.log('isPermission', isPermission)

    if (!isPermission) {
        return ctx.app.emit('error', UNPERMISSION, ctx)
    }

    await next()
}

module.exports = {
    verifyMomentPermission
}
