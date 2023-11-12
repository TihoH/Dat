<template>
  <div class="partners flex items-center flex-col justify-center">
    <div class="flex items-center">
        <span>
          <img
            class="h-6 mr-2"
            src="../assets/image/Main/Vector.png"
            alt="icon"
          />
        </span>
        <h2 class="about-us__news-title m-10">Партнери</h2>
        <span>
          <img
            class="h-6 ml-2"
            src="../assets/image/Main/Vector2.png"
            alt="icon"
          />
        </span>
      </div>
    <SliderPartners :products="partnersSliderImage" />
    <div>
      <img
        class="about-us__bg-fon absolute left-0 bottom-0 z-0"
        src="../assets/image/stock/ellipse4.png"
        alt=""
      />
      <img
        class="about-us__bg-fon absolute left-0 bottom-40 z-0"
        src="../assets/image/stock/ellipse3.png"
        alt=""
      />
      <img
        class="about-us__bg-fon absolute right-0 bottom-0 z-0"
        src="../assets/image/stock/ellipse1.png"
        alt=""
      />
      <img
        class="about-us__bg-fon absolute right-0 top-0 z-0"
        src="../assets/image/stock/ellipse2.png"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import SliderPartners from "./slider/SliderPartners.vue";
import { ref } from 'vue'

const partnersSliderImage = [
    {img: '1.png' , link: ''},
    {img: '2.png' , link: ''},
    {img: '3.png' , link: ''},
    {img: '4.png' , link: ''},
    {img: '5.png' , link: ''},
    {img: '6.png' , link: ''},
]
</script>

<style lang="scss" scoped>
.partners{
    height: 400px;
    position: relative;
    overflow: hidden;
    background-color: #F8F8F8;  
}
h2{
    font-size: 40px;
}
</style>