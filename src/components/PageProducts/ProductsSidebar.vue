<template>
    <div class="flex flex-col w-full gap-20 ">
        <SidebarCategory 
            class="sidebar-category rounded-2xl" 
            :sidebarCategory="sidebarCategory"
        />
        <SidebarFilter />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import SidebarCategory from './SidebarCategory.vue'
import SidebarFilter from './SidebarFilter.vue'

const sidebarCategory = ref([
    {name: 'Гербіциди'},
    {name: 'Фунгіциди'},
    {name: 'Інсектициди'},
    {name: 'Десиканти'},
    {name: 'Протруювачі'},
    {name: 'Ад’юванти'},
    {name: 'Родентициди'},
    {name: 'Ретарданти'},
])

</script>

<style lang="scss" scoped>
.sidebar-category{
    max-height: 360px;
}
</style>