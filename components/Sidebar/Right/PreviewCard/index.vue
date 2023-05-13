<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
const { defaultBorderColor, defaultTransition } = useTailwindConfig()
</script>
<template>
    <div class="m-2 border rounded-2xl bg-gray-50 dark:bg-transparent overflow-hidden" :class="defaultBorderColor">
        <h1 class="p-3 text-xl font-extrabold text-gray-900 border-b dark:text-white dark:border-[#2f3336]">{{ props.title }}</h1>

        <slot></slot>

        <div class="p-3 text-sm text-pallette-500 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-100/10" :class="defaultTransition">
            Show more
        </div>
    </div>
</template>