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

    const signIn = async ({ email, password }: signInType) => {
        try {
            const response: signInResponseType = await $fetch('/api/auth/signin', {
                method: 'POST',
                body: { email, password }
            })
            setToken(response.accessToken)
            setUser(response.user)

            return true
        } catch (error) {
            throw error;
        }
    }

    const refreshToken = async () => {
        try {
            const response: signInResponseType = await $fetch('/api/auth/refresh')
            setToken(response.accessToken)

            return true
        } catch (error) {
            throw error;
        }
    }

    const getUser = async () => {
        try {
            const response: signInResponseType = await useFetchApi('/api/auth/user')
            setUser(response.user)

            return true
        } catch (error) {
            throw error;
        }
    }

    const initAuth = async () => {
        try {
            await refreshToken();
            await getUser()
            return true
        } catch (error) {
            throw error;
        }
    }

    return {
        signIn,
        useAuthUser,
        useAuthToken,
        initAuth
        
    }
}