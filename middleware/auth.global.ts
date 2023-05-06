export default defineNuxtRouteMiddleware((to, from) => {
    const { useAuthUser, initAuth } = useAuth()
    
    const user = useAuthUser()
    if (!user.value && to.path === '/') return navigateTo('/auth')
})