const { UNPERMISSION } = require('../config/error')
const permissionService = require('../service/permission.service')

const verifyPermission = async (ctx, next) => {
    const { id } = ctx.user

    const keyName = Object.keys(ctx.params)[0]
    const resourceId = ctx.params[keyName]
    const resourceName = keyName.replace('Id', '')

    const isPermission = await permissionService.checkResource(
        resourceName,
        resourceId,
        id
    )

    if (!isPermission) {
        return ctx.app.emit('error', UNPERMISSION, ctx)
    }

    await next()
}

module.exports = {
    verifyPermission
}
