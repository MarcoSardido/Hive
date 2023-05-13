<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    loading: {
        type: Boolean,
        required: true
    }
})
const { defaultBorderColor } = useTailwindConfig()
</script>
<template>
    <div class="border-x" :class="defaultBorderColor">
        <div class="sticky top-0 px-4 py-3 bg-white/80 backdrop-blur-md dark:bg-pallette-900/80">
            <h2 class="text-xl font-bold text-gray-800 dark:text-gray-100">{{ title }}</h2>
        </div>

        <div v-if="loading" class="flex item-center justify-center mt-40">
            <LoaderMain />
        </div>
        <div v-else>
            <slot></slot>
        </div>

    </div>
</template>

<style lang="scss" scoped></style>