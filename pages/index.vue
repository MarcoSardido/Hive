<script setup lang="ts">
const { initAuth } = useAuth()

// onBeforeMount(() => initAuth())

const loading = ref(false)
</script>
<template>
    <Main title="Home" :loading="loading">
        Hello
    </Main>
</template>