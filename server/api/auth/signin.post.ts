// @ts-ignore
import bcrypt from 'bcrypt'
import { createRefreshToken } from '~/server/db/refreshToken';
import { getUserByEmail } from "~/server/db/users";
import { userTransformer } from '~/server/transformers/user';
import { generateTokens } from '~/server/utils/jwt';

export default defineEventHandler(async event => {
    const resBody = await readBody(event);
    const { email, password } = resBody

    if (!email || !password) {
        return sendError(event, createError({ statusCode: 400, statusMessage: 'Invalid params' }))
    }

    // Check if user has account.
    const foundUser = await getUserByEmail(email)
    if (!foundUser) {
        return sendError(event, createError({ statusCode: 400, statusMessage: 'There is no account with this email' }))
    }

    // Compare entered password to DB password.
    const doesPasswordMatch = await bcrypt.compare(password, foundUser.password)
    if (!doesPasswordMatch) {
        return sendError(event, createError({ statusCode: 400, statusMessage: 'Password is incorrect' })) 
    }

    // Generate Tokens
    // Access Token
    // Refresh Token
    const { accessToken, refreshToken } = generateTokens(foundUser)

    // Save in DB
    await createRefreshToken({
        token: refreshToken,
        userId: foundUser.id
    })

    // Add it in http only cookie
    setCookie(event, 'refresh_token', refreshToken, {
        httpOnly: true,
        sameSite: true
    })

    return {
        user: userTransformer(foundUser),
        accessToken: accessToken,
    }
})