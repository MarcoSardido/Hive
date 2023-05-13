<script setup>
const { defaultBorderColor } = useTailwindConfig()
const props = defineProps({
    user: {
        type: Object,
        required: true
    },
    isLoading: {
        type: Boolean,
        required: true
    }
})
const emits = defineEmits(['onSubmit'])

const imageInput = ref()
const handleImageClick = () => {
    imageInput.value.click()
}

const selectedFile = ref(null)
const inputImageUrl = ref(null)
const handleImageChange = (event) => {
    const file = event.target.files[0];
    selectedFile.value = file

    const reader = new FileReader()
    reader.onload = (event) => {
        inputImageUrl.value = event.target.result
    }
    reader.readAsDataURL(file)
}

const text = ref('')
const handleFormSubmit = () => {
    emits('onSubmit', {
        text: text.value,
        mediaFiles: [selectedFile.value]
    })
}
</script>
<template>
    <div class="flex items-center flex-shrink-0 p-4 pb-0">
        <div class="flex w-12 items-top">
            <img :src="props.user.user.userImage" alt="" class="inline-block w-10 h-10 rounded-full">
        </div>

        <div class="w-full p-2">
            <textarea v-model="text" rows="2"
                class="w-full p-[10px] text-lg text-gray-900 placeholder:text-gray-400 bg-transparent border-0 dark:text-white focus:ring-0"
                placeholder="What's Buzzin'?">
            </textarea>
        </div>
    </div>

    <!-- Image file -->
    <div class="pl-16" :class="inputImageUrl !== null ? 'p-4' : ''">
        <img v-if="inputImageUrl" :src="inputImageUrl" class="rounded-2xl border" :class="defaultBorderColor">

        <input @change="handleImageChange" ref="imageInput" type="file" hidden
            accept="image/png, image/jpg, image/jpeg, image/gif">
    </div>

    <!-- Icons -->
    <div class="flex items-center justify-center p-2 pl-14">
        <div class="flex w-full text-white">
            <div @click="handleImageClick"
                class="p-2 text-pallette-500 rounded-full hover:bg-pallette-25 cursor-pointer text-xl">
                <IconBuzzImage />
            </div>
            <div class="p-2 text-pallette-500 rounded-full hover:bg-pallette-25 cursor-pointer text-xl">
                <IconBuzzGif />
            </div>
            <div class="p-2 text-pallette-500 rounded-full hover:bg-pallette-25 cursor-pointer text-xl">
                <IconBuzzPoll />
            </div>
            <div class="p-2 text-pallette-500 rounded-full hover:bg-pallette-25 cursor-pointer text-xl">
                <IconBuzzEmoji />
            </div>
            <div class="p-2 text-pallette-500 rounded-full hover:bg-pallette-25 cursor-pointer text-xl">
                <IconBuzzEvent />
            </div>
        </div>
        <div class="ml-auto">
            <UIBuzzButton @click="handleFormSubmit" size="sm" :isLoading="isLoading ? true : false">
                <LoaderButtonLoader v-if="isLoading" />
                <span v-else class="font-bold">Buzz</span>
            </UIBuzzButton>
        </div>
    </div>
</template>
<style scoped></style>