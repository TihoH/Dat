<template>
    <div class="about-us-news">
        <SliderProduct :products="swiperProduct"  />
    </div>
</template>

<script setup>
import SliderProduct from "./slider/SliderProduct.vue";

import { onMounted, ref } from 'vue';

const swiperProduct = ref([])

async function getProducts() {
  const response = await fetch('http://localhost:3000/swiperProduct')
  const data = await response.json()
  swiperProduct.value = data
}

onMounted( () => {
  getProducts()
} )
</script>

<style lang="scss" scoped>

</style>