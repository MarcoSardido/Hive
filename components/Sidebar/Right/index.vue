<script setup>
const whatsHappeningList = ref([
    {
        title: '#KissesDelavin',
        count: '32.4k Buzz'
    },
    {
        title: 'SpaceX',
        count: '18.2k Buzz'
    },
    {
        title: 'Philippine Arena',
        count: '15.4k Buzz'
    },
    {
        title: 'NAIA',
        count: '7,341 Buzz'
    },
])

const whoToFollowList = ref([
    {
        name: 'Joe Biden',
        username: '@joeBiden',
        image: 'https://picsum.photos/200/200'
    },
    {
        name: 'Joe Biden',
        username: '@joeBiden',
        image: 'https://picsum.photos/200/200'
    },
    {
        name: 'Joe Biden',
        username: '@joeBiden',
        image: 'https://picsum.photos/200/200'
    },
    {
        name: 'Joe Biden',
        username: '@joeBiden',
        image: 'https://picsum.photos/200/200'
    },
])
</script>
<template>
    <div class="flex flex-col">
        <SidebarRightPreviewCard title="What's happening">
            <SidebarRightPreviewCardItem v-for="whatsHappening in whatsHappeningList">
                <h2 class="font-bold text-gray-800 text-md dark:text-white">{{ whatsHappening.title }}</h2>
                <p class="text-xs text-gray-400">{{ whatsHappening.count }}</p>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>

        <SidebarRightPreviewCard title="Who to follow">
            <SidebarRightPreviewCardItem v-for="whoToFollow in whoToFollowList">
                <div class="flex flex-row justify-between items-center p-2">
                    <div class="flex flex-row">
                        <img :src="whoToFollow.image" :alt="whoToFollow.name" class="h-10 w-10 rounded-full">
                        <div class="flex flex-col ml-2">
                            <h1 class="text-sm font-bold text-gray-900 dark:text-white">{{ whoToFollow.name }}</h1>
                            <p class="text-xs text-gray-400">{{ whoToFollow.username }}</p>
                        </div>
                    </div>
                    <div class="flex items-center h-full">
                        <button class="px-4 py-2 font-bold text-xs text-white dark:text-white bg-pallette-500 dark:bg-pallette-500 rounded-full">Follow</button>
                    </div>
                </div>
            </SidebarRightPreviewCardItem>
        </SidebarRightPreviewCard>
    </div>
</template>