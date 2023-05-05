/**
 * Prisma Add User
 */

type UserType = {
    name: string
    username: string
    email: string
    password: string
    repeatPassword?: string
    userImage: string
}





export {
    UserType
}