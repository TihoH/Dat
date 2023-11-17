<template>
  <div class="header">
    <TheHeader class="relative" />
    <HeaderAboutSite class="absolute left-0 right-0" />
  </div>
  <div class="router-view">
    <router-view />
    <Basket v-if="myStore.activeBasket" />
  </div>
  <TheFooter />
</template>

<script setup>
import TheHeader from "./Header/TheHeader.vue";
import HeaderAboutSite from "./Header/HeaderAboutSite.vue";
import TheFooter from "./Footer/TheFooter.vue";
import Basket from "./Pages/Basket.vue";
import { useStore } from "../store/store";

const myStore = useStore()
</script>   

<style scoped>
.router-view {
  min-height: 90vh;
  background: rgb(0, 144, 44);
  background: linear-gradient(
    90deg,
    rgba(0, 144, 44, 0.05654761904761907) 0%,
    rgba(132, 153, 155, 0) 35%,
    rgba(255, 252, 0, 0.07055322128851538) 100%
  );
}
</style>