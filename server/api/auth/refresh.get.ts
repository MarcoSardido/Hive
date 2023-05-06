import { getRefreshTokenByToken } from '~/server/db/refreshToken'
import { decodeRefreshToken, generateTokens } from '~/server/utils/jwt'
import { getUserById } from '~/server/db/users'
import { UserType } from '~/types'

export default defineEventHandler(async event => {
    const refresh_token = getCookie(event, 'refresh_token')

    if (!refresh_token) {
        return sendError(event, createError({ statusCode: 401, statusMessage: 'Refresh token is invalid' }))
    }

    const dbRefreshToken = await getRefreshTokenByToken(refresh_token)
    if (!dbRefreshToken) {
        return sendError(event, createError({ statusCode: 401, statusMessage: 'Refresh token is invalid' }))
    }

    // Verify token
    const token = decodeRefreshToken(refresh_token)

    try {
        const user = await getUserById(token.userId)
        if (!user) return

        const { accessToken } = generateTokens(user)

        return { accessToken }
    } catch (error) {
        return sendError(event, createError({ statusCode: 500, statusMessage: 'Something went wrong' }))
    }
})