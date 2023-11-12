<template>
  <div class="slider-product__stock relative flex flex-col items-center justify-center">
    <div class="flex items-center">
        <span>
          <img
            class="Stock__news__title-icon h-6 mr-2"
            src="../assets/image/Main/Vector.png"
            alt="icon"
          />
        </span>
        <h2 class="Stock__news-title m-10">Акції</h2>
        <span>
          <img
            class="Stock__news__title-icon h-6 ml-2"
            src="../assets/image/Main/Vector2.png"
            alt="icon"
          />
        </span>
      </div>
    <SliderProduct :products="swiperProduct" class="slider-product__about-stock" />
    <div class="mt-12">
      <button class="mt-5 border border-transparent hover:border-white py-2 px-10 rounded-xl bg-red-500 text-white hover:bg-transparent  transition hover:shadow-xl">Дивитися всі пропозиції</button>
    </div>
    <div class="stock__bg-image">
      <img
        class="about-us__bg-fon absolute left-0 bottom-0"
        src="../assets/image/stock/ellipse4.png"
        alt=""
      />
      <img
        class="about-us__bg-fon absolute left-0 bottom-40"
        src="../assets/image/stock/ellipse3.png"
        alt=""
      />
      <img
        class="about-us__bg-fon absolute left-0 top-20"
        src="../assets/image/stock/ellipse3.png"
        alt=""
      />
      <img
        class="about-us__bg-fon absolute right-0 bottom-0"
        src="../assets/image/stock/ellipse1.png"
        alt=""
      />
      <img
        class="about-us__bg-fon absolute right-0 top-0"
        src="../assets/image/stock/ellipse2.png"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import SliderProduct from "./slider/SliderProduct.vue";
import { ref } from 'vue';

const swiperProduct = ref([
        {
          title: "Петунія Софістика F1",
          id: 1,
          price: 20,
          quantity: 1,
          img: "Rectangle2.png",
        },
        {
          title: "Cкор 250 эс",
          id: 2,
          price: 22,
          quantity: 1,
          img: "Rectangle3.png",
        },
        {
          title: "Cкор 250 rp",
          id: 3,
          price: 95,
          quantity: 1,
          img: "Rectangle4.png",
        },
        {
          title: "Петунія Софістика F1",
          id: 4,
          price: 44,
          quantity: 1,
          img: "Rectangle1.png",
        },
        {
          title: "Кальцемін",
          id: 5,
          price: 105,
          quantity: 1,
          img: "5.jpg",
        },
])
</script>

<style lang="scss" scoped>
.slider-product__stock {
  height: 800px;
  background-color: #1e6140;
}
.Stock__news-title{
    font-size: 40px;
    color: white;
}
</style>