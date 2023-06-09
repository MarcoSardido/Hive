//@ts-ignore
import bcrypt from 'bcrypt'
import { UserType } from '~/types'
import { prisma } from '.'

export const createUser = (userData: UserType) => {
    const securedUserData = {
        ...userData,
        password: bcrypt.hashSync(userData.password, 10)
    }
    return prisma.user.create({
        data: securedUserData
    })
}

export const getUserByEmail = (email: any) => {
    return prisma.user.findUnique({
        where: {
            email
        }
    })
}

export const getUserById = (userId: string) => {
    return prisma.user.findUnique({
        where: {
            id: userId
        }
    })
}