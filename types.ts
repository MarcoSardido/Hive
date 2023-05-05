/**
 * Prisma Add User
 */

type UserType = {
    id?: string
    name: string
    username: string
    email: string
    password?: string
    repeatPassword?: string
    userImage: string
}





export {
    UserType
}