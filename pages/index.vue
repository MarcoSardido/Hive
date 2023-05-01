<script setup lang="ts">
useHead({
    title: 'Hive'
})
</script>
<template>
    <!-- Left side bar -->
    <div class="hidden md:block xs-col-span-1 xl:col-span-2">
        <div class="sticky top-0">
            <SidebarLeft />
        </div>
    </div>

    <!-- Main content -->
    <main class="col-span-12 md:col-span-8 xl:col-span-6 border-2 border-red-500">
        <h1>h1</h1>
    </main>

    <!-- Right side bar -->
    <div class="hidden col-span-12 md:block xl:col-span-4 md:col-span-3">
        <div class="sticky top-0">
            <SidebarRight />
        </div>
    </div>
</template>