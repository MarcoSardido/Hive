import { createUser } from '~/server/db/users';
import { userTransformer } from '~/server/transformers/user';
import { UserType } from '~/types'

export default defineEventHandler(async event => {
    const resBody = await readBody(event);
    const { username, email, password, repeatPassword, name } = resBody

    if (!username || !email || !password || !repeatPassword || !name) {
        return sendError(event, createError({ statusCode: 400, statusMessage: 'Invalid params' }))
    }

    if (password !== repeatPassword) {
        return sendError(event, createError({ statusCode: 400, statusMessage: 'Password do not match' }))
    }

    const userData: UserType = {
        name,
        username,
        email,
        password,
        userImage: 'https://picsum.photos/200/200'
    }
    const user = await createUser(userData)


    return {
        body: userTransformer(user)
    }
})