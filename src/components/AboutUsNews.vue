<template>
  <div class="about-us-news">
    <SliderProduct :products="swiperProduct" />
  </div>
</template>

<script setup>
import SliderProduct from "./slider/SliderProduct.vue";

import { onMounted, ref } from "vue";

const swiperProduct = ref([]);
let dataProducts = ref([]);
const lengthSlider = 5;

async function getProducts() {
  try {
    const response = await fetch("http://localhost:3000/swiperProduct");
    const data = await response.json();
    dataProducts.value = data;
    dataProducts.value.map((item) => {
      if (swiperProduct.value.length < lengthSlider) {
        swiperProduct.value.push(item);
      }
    });
  } catch (error) {
    console.warn(error + "(ошибка гет слайдер)");
  }
}

onMounted(() => {
  getProducts();
});
</script>

<style lang="scss" scoped>
</style>