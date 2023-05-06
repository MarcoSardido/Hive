<script setup>
definePageMeta({
    layout: 'auth'
})
const { signIn } = useAuth()

const isLoading = ref(false);
const handleSignIn = async formData => {
    isLoading.value = true
    try {
        const user = await signIn({ email: formData.email, password: formData.password })

        watchEffect(() => {
            // to show loader effects
            setTimeout(() => {
                if (user) return navigateTo('/')
            }, 3000)
        })
    } catch (error) {
        console.error(`Error @handleSignIn: ${error}`)
    }
}

</script>
<template>
    <div class="h-full flex items-center justify-center">
        <div v-if="isLoading" class=" absolute h-screen w-full flex items-center justify-center z-50 opacity-60 bg-black">
            <Loader />
        </div>

        <AuthSignIn :handleSignIn="handleSignIn" />
    </div>
</template>
<style scoped></style>