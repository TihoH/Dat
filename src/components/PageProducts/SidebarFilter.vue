<template>
    <div class="bg-gray-200 p-4 shadow-xl rounded-2xl cursor-pointer">
        <div class="flex justify-between">
       
        </div>
        <input  type="range" min="0" value="150" max="300" class="inpRange" >
    </div>
</template>

<script setup>
import { ref } from "vue";

const valuePrice = ref(
    {min: 0 , max: 300}
    )

function valueInp() {
    let valueInp = document.querySelector('.inpRange')
    console.log('fqfq')
}
valueInp()
</script>

<style lang="scss" scoped>
input{
    width: 100%;
}
</style>