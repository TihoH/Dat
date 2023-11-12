<template>
  <div class="my-container__mini relative z-50">
    <swiper
    :spaceBetween="30"
    :pagination="{
      clickable: true,
    }"
    :navigation="true"
    :modules="modules"
    class="mySwiper w-full"
    :breakpoints="{ 500:{ slidesPerView:2 }, 700:{ slidesPerView:4, } , 900:{ slidesPerView:4, } }"
    >
      <swiper-slide
        class="swiper-slide w-full"
        v-for="product in products"
        :key="product.id"
      >
        <router-link class="w-full" :to=" '/CartProduct/' + product.id ">
          <CardProduct  class="cursor-pointer" :product="product" />
        </router-link>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import CardProduct from "../CardProduct.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import { FreeMode, Navigation ,Pagination } from "swiper/modules";

const modules = [FreeMode, Pagination , Navigation ]
const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        1024: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        1720: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
};
      
const props = defineProps({
  products: {
    type: Object , 
    required: true 
  }
})
</script>

<style lang="scss"  >
.my-container__mini{
  max-width: 1000px;
  margin:  0 auto;
}
.swiper {
  width: 100%;
  height: 300px;
  position: static;
}


.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  border-radius: 20px;
  
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  max-width: 150px;
  max-height: 100%;
  object-fit: cover;
}
.swiper-pagination-horizontal{
  top: 0;
}
.swiper-horizontal > .swiper-pagination-bullets, .swiper-pagination-bullets.swiper-pagination-horizontal{
 bottom: -50px;
}
.swiper-button-next{
  right: -100px;
  font-size: 20px;
}
.swiper-button-prev{
  left: -100px;
}

@media screen and (max-width: 724px) {
  .my-container__mini{
  padding: 20px;
  max-width: 100%;
}
}
</style>