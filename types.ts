/**
 * Prisma Add User
 */

interface UserType {
    id?: string
    name: string
    username: string
    email: string
    password?: string
    repeatPassword?: string
    userImage: string
}

interface BuzzDataType {
    id: string
    text: string
}

interface BuzzMediaType {
    url: string,
    providerPublicId: string,
    userId: string,
    buzzId: string
}





export {
    UserType,
    BuzzDataType,
    BuzzMediaType
}