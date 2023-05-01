<script setup lang="ts">
useHead({
    title: 'Hive'
})
</script>
<template>
    <!-- Left side bar -->
    <div class="hidden md:block xs-col-span-1 lg:col-span-2">
        <div class="sticky top-0">
            <SidebarLeft />
        </div>
    </div>
    <!-- Main content -->
    <main class="col-span-12 md:col-span-8 xl:col-span-6 bg-red-500">
        <h1>h1</h1>
    </main>

    <!-- Right side bar -->
</template>