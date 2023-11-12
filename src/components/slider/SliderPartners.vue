<template>
    <swiper
    :breakpoints="{ 500:{ slidesPerView:2 }, 900:{ slidesPerView:5, } }"
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      :navigation="true"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        class="swiper-slide"
        v-for="product in products"
        :key="product.id"
      >
        <img :src="'../../public/Partners/' + product.img" alt="" />
      </swiper-slide>
    </swiper>
</template>
  <script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";

const modules = [Pagination, Navigation];
const props = defineProps({
  products: {
    type: Object,
    required: true,
  },
});
</script>
  
<style lang="scss" scoped >

.swiper {
  width: 100%;
  height: 120px;
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


.swiper-button-next{
  right: 100px;
  font-size: 20px;
  position: absolute;
}
.swiper-button-prev{
  left: 0;
}


@media screen and (max-width: 724px) {
  .swiper{
    width: 80%;
  }
}


</style>