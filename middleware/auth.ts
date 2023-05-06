export default defineNuxtRouteMiddleware((to, from) => {
    const { useAuthUser } = useAuth()
    const user = useAuthUser()

    if (!user.value) return navigateTo('/auth') 
})