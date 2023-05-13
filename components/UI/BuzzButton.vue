<script setup>
const props = defineProps({
    disabled: {
        type: Boolean,
        default: false
    },
    size: {
        type: String,
        default: 'md'
    },
    liquid: {
        type: Boolean,
        default: false
    },
    isLoading: {
        type: Boolean,
        default: false,
    }
})

const paddingClasses = computed(() => {
    switch (props.size) {
        case 'sm':
            return `w-20 ${props.isLoading ? 'py-3' : 'py-1.5'} `
        case 'lg':
            return 'px-4 py-3'
        default:
            return 'px-3, py-3'
    }
})

const fontSize = computed(() => {
    switch (props.size) {
        case 'lg':
            return 'text-md'
        default:
            return 'text-sm'
    }
})

const defaultWidth = computed(() => {
    switch (props.size) {
        default:
            return 'w-min'
    }
})

const dynamicStyles = computed(() => `${paddingClasses.value} ${props.liquid ? 'w-full' : defaultWidth.value}`)
</script>
<template>
    <button
        class="flex justify-center text-white bg-pallette-500 rounded-full hover:bg-pallette-400 text-sm disabled:bg-pallette-200 disabled:cursor-not-allowed"
        :class="dynamicStyles" :disabled="props.disabled || props.isLoading">
        <span :class="fontSize">
            <slot />
        </span>
    </button>
</template>