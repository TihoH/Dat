<template>
    <ul class="sidebar-category__list bg-gray-200  shadow-xl flex flex-col justify-between h-full items-center">
        <li 
            v-for="item in sidebarCategory" 
            :key="item" 
            class="text-xl cursor-pointer  hover:bg-green-800 hover:text-white transition w-full text-center p-2 "
            @click="getCategory(item)"
        >
            {{ item.name }}
        </li>
    </ul>
</template>

<script setup>
import {defineProps} from 'vue'
import { useStore } from '../../store/store'

const myStore = useStore()

const props = defineProps({
    sidebarCategory: {
        required: true,
        type: Array
    }
})

const getCategory = (item) => {
    myStore.editCategory(item.name)
}
</script>

<style lang="scss" scoped>
.sidebar-category__list li:first-child{
    border-radius: 20px 20px 0 0;
}
.sidebar-category__list li:last-child{
    border-radius: 0 0 20px 20px; 
    
}

li:hover{
    padding-left: 40px;
}
</style>