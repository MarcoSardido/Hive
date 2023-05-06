import { getUserById } from "~/server/db/users"
import { userTransformer } from "~/server/transformers/user"
import { decodeAccessToken } from "~/server/utils/jwt"

export default defineEventHandler(async event => {
    const token = event.node.req.headers['authorization']?.split(' ')[1]
    const decoded = decodeAccessToken(token)

    if (!decoded) {
        return sendError(event, createError({ statusCode: 401, statusMessage: 'Unauthorized' }))
    }

    try {
        const userId = decoded.userId
        const user = await getUserById(userId)

        event.context.$auth = { user }
        // @ts-ignore
        return userTransformer(user)
    } catch (error) {
        return
    }
})