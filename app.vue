<script setup>
const { initAuth } = useAuth()

onBeforeMount(() => {
  initAuth()
})
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>