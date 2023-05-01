<script setup>
const { defaultTransition, defaultBorderColor } = useTailwindConfig()
const wrapperClass = computed(() => `${defaultTransition} ${defaultBorderColor}`)
</script>
<template>
    <div class="p-3 hover:bg-gray-100 cursor-pointer border-b dark:hover:bg-dim-50" :class="wrapperClass">
        <slot></slot>
    </div>
</template>



<style lang="scss" scoped></style>