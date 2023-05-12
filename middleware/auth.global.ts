/**
 * This middleware will run before going to "/" route
 */
export default defineNuxtRouteMiddleware(async (to, next) => {
    const { useAuthUser, useAuthLoading } = useAuth()
    const isLoading = useAuthLoading()
    const user = useAuthUser()

    // Todo: Add router guard for home page

    // onBeforeRouteLeave(() => {
    //     console.log(user.value)
    // })
    // watch(isLoading, () => {
    //     if (!isLoading.value) {
    //         if (to.path === '/auth') return navigateTo('/')
    //     }
    // })


})