<script setup>
// definePageMeta({
//     middleware: 'auth'
// })

const { useAuthUser } = useAuth()
const user = useAuthUser()

const loading = ref(false)
</script>
<template>
    <Main title="Home" :loading="loading">
        Hello {{ user }}
    </Main>
</template>