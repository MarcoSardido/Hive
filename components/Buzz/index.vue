<script setup>
const props = defineProps({
    user: {
        type: Object,
        required: true
    }
})
const { postBuzz } = useBuzz()
const isLoading = ref(false)

const handleFormSubmit = async (data) => {
    isLoading.value = true
    try {
        const response = await postBuzz({
            text: data.text,
            mediaFiles: data.mediaFiles
        })
        console.log(response)
    } catch (error) {
        console.error(error)
    } finally {
        isLoading.value = false
    }
}
</script>
<template>
    <div>
        <BuzzFormInput :user="user" :isLoading="isLoading" @onSubmit="handleFormSubmit" />
    </div>
</template>
<style scoped></style>