// @ts-ignore
import jwt from 'jsonwebtoken'
import { UserType } from '~/types'

const config = useRuntimeConfig()

const generateAccessToken = (user: UserType) => {
    return jwt.sign({ userId: user.id }, config.jwtAccessSecret, {
        expiresIn: '10m'
    })
}
const generateRefreshToken = (user: UserType) => {
    return jwt.sign({ userId: user.id }, config.jwtRefreshSecret, {
        expiresIn: '4h'
    })
}

export const decodeRefreshToken = (token: any) => {
    try {
        return jwt.verify(token, config.jwtRefreshSecret)
    } catch (error) {
        return null
    }
}

export const decodeAccessToken = (token: any) => {
    try {
        return jwt.verify(token, config.jwtAccessSecret)
    } catch (error) {
        return null
    }
}

export const generateTokens = (user: UserType) => {
    const accessToken = generateAccessToken(user)
    const refreshToken = generateRefreshToken(user)

    return {
        accessToken: accessToken,
        refreshToken: refreshToken
    }
}

export const sendRefreshToken = (event: any, token: any) => {
    event.node.res.setHeader('Set-Cookie', `refresh_token=${token}; HttpOnly; SameSite=Strict`)
}