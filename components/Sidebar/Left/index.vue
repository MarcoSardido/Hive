<script setup>
const { defaultTransition } = useTailwindConfig()
</script>
<template>
    <div class="h-screen flex flex-col">
        <div class="py-2 px-3 my-2 rounded-full hover:bg-yellow-50/70 w-full dark:hover:bg-pallette-25"
            :class="defaultTransition">
            <NuxtLink to="/">
                <div class="flex items-center">
                    <div class="w-10 h-10 md:w-10 md:h-10 mr-2 dark:text-pallette-500">
                        <img src="/Brand.png" alt="Hive Logo">
                    </div>
                    <span class="hidden xl:block text-[25px] font-semibold dark:text-white">Hive</span>
                </div>
            </NuxtLink>
        </div>
        <div class="space-y-2">
            <SidebarLeftTab active path="/">
                <template v-slot:icon>
                    <!-- <IconHomeOutline />  -->
                    <IconHome />
                </template>
                <template v-slot:name>
                    Home
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab path="/explore">
                <template v-slot:icon>
                    <!-- <IconHash /> -->
                    <IconHashOutline />
                </template>
                <template v-slot:name>
                    Explore
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab>
                <template v-slot:icon>
                    <!-- <IconMessage /> -->
                    <IconMessageOutline />
                </template>
                <template v-slot:name>
                    Messages
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab>
                <template v-slot:icon>
                    <!-- <IconBell /> -->
                    <IconBellOutline />
                </template>
                <template v-slot:name>
                    Notifications
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab path="/profile/marco">
                <template v-slot:icon>
                    <!-- <IconPerson /> -->
                    <IconPersonOutline />
                </template>
                <template v-slot:name>
                    Profile
                </template>
            </SidebarLeftTab>
            <SidebarLeftTab>
                <template v-slot:icon>
                    <!-- <IconDots /> -->
                    <IconDotsOutline />
                </template>
                <template v-slot:name>
                    More
                </template>
            </SidebarLeftTab>

            <div>
                <UIBuzzButton liquid size="lg">
                    <span class="font-bold">Buzz</span>
                </UIBuzzButton>
            </div>
        </div>
    </div>
</template>