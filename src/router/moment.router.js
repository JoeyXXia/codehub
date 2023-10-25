const KoaRouter = require('koa-router')
const { verifyAuth } = require('../middleware/login.middleware')
const {
    create,
    list,
    detail,
    update,
    remove,
    addLabels
} = require('../controller/moment.controller')
const { verifyPermission } = require('../middleware/permission.middleware')
const verifyLableExists = require('../middleware/label.middleware')

const momentRouter = new KoaRouter({ prefix: '/moment' })
momentRouter.post('/', verifyAuth, create)
momentRouter.get('/', list)
momentRouter.get('/:momentId', detail)

momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update)
momentRouter.delete('/:momentId', verifyAuth, verifyPermission, remove)

momentRouter.post(
    '/:momentId/labels',
    verifyAuth,
    verifyPermission,
    verifyLableExists,
    addLabels
)

module.exports = momentRouter
