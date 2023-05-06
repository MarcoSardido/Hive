<script setup lang="ts">
definePageMeta({
    middleware: 'auth'
})

const loading = ref(false)
</script>
<template>
    <Main title="Home" :loading="loading">
        Hello
    </Main>
</template>