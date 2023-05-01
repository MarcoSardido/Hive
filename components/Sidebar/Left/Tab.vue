<script setup>
const { defaultTransition } = useTailwindConfig()
const props = defineProps({
    active: {
        type: Boolean,
        default: false
    }
})
const textClasses = computed(() => props.active ? 'font-semibold' : 'font-normal')
</script>
<template>
    <NuxtLink to="#" class="flex items-center p-3 w-full text-black rounded-full hover:bg-yellow-50/70 dark:hover:bg-dim-50 dark:text-white" :class="defaultTransition">
        <div class="text-[30px] text-dark text-[#fed803]">
            <slot name="icon"></slot>
        </div>
        <div class="hidden ml-4 text-xl xl:block" :class="textClasses">
            <slot name="name"></slot>
        </div>
    </NuxtLink>
</template>
<style lang="scss" scoped></style>