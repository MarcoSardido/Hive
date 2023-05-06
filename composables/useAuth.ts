import { UserType } from "~/types"

interface signInType {
    email: string
    password: string
}

interface signInResponseType {
    accessToken: string
    user: UserType
}

export default () => {
    const useAuthToken = () => useState('auth_token')
    const useAuthUser = () => useState('auth_user')

    const setToken = (newToken: string) => {
        const authToken = useAuthToken()
        authToken.value = newToken
    }

    const setUser = (newUser: UserType) => {
        const authUser = useAuthUser()
        authUser.value = newUser
    }

    const signIn = ({ email, password }: signInType) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response: signInResponseType = await $fetch('/api/auth/signin', {
                    method: 'POST',
                    body: {
                        email,
                        password
                    }
                })
                setToken(response.accessToken)
                setUser(response.user)

                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    return {
        signIn,
        useAuthUser
    }
}