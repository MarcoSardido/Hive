<script setup>
const { useAuthUser, useAuthLoading } = useAuth()
const user = useAuthUser()
const isLoading = useAuthLoading()

</script>
<template>
    <Main title="Home" :loading="isLoading">
        <!-- Hello {{ user }} -->
        <Buzz :user="user" />

        <div>
            Some Buzz post
        </div>
    </Main>
</template>