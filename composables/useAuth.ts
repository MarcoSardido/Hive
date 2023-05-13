import jwt_decode from "jwt-decode"
import { UserType } from "~/types"

interface signInType {
    email: string
    password: string
}

interface signInResponseType {
    accessToken: string
    user: UserType
}

interface jwtDecodeType {
    exp: number
    iat: number
    userId: string
}

export default () => {
    const useAuthToken = () => useState('auth_token')
    const useAuthUser = () => useState('auth_user')
    const useAuthLoading = () => useState('auth_loading', () => true)

    const setToken = (newToken: string) => {
        const authToken = useAuthToken()
        authToken.value = newToken
    }

    const setUser = (newUser: UserType) => {
        const authUser = useAuthUser()
        authUser.value = newUser
    }

    const setIsAuthLoading = (value: boolean) => {
        const authLoading = useAuthLoading()
        authLoading.value = value
    }

    const signIn = ({ email, password }: signInType) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response: signInResponseType = await $fetch('/api/auth/signin', {
                    method: 'POST',
                    body: { email, password }
                })
                setToken(response.accessToken)
                setUser(response.user)

                navigateTo('/')
            } catch (error) {
                reject(error)
            }
        })
    }

    const refreshToken = async () => {
        return new Promise(async (resolve, reject) => {
            try {
                const response: signInResponseType = await $fetch('/api/auth/refresh')
                setToken(response.accessToken)

                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    const getUser = async () => {
        return new Promise(async (resolve, reject) => {
            try {
                const response: signInResponseType = await useFetchApi('/api/auth/user')
                setUser(response)

                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
    }

    const reRefreshAccessToken = () => {
        const authToken = useAuthToken()
        if (!authToken.value) return

        const jwt: jwtDecodeType = jwt_decode(authToken.value)
        const newRefreshTime = jwt.exp - 60000

        setTimeout(async () => {
            await refreshToken()
            reRefreshAccessToken()
        }, newRefreshTime)
    }

    const initAuth = async () => {
        return new Promise(async (resolve, reject) => {
            setIsAuthLoading(true)
            try {
                await refreshToken();
                await getUser()

                reRefreshAccessToken()

                resolve(true)
            } catch (error) {
                reject(error)
            } finally {
                setIsAuthLoading(false)
            }
        })
    }

    return {
        signIn,
        useAuthUser,
        useAuthToken,
        initAuth,
        useAuthLoading
    }
}