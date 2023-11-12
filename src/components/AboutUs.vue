<template>
  <div class="about-us relative">
    <AboutUsTitle />
    <AboutUsNews/>
    <div>
      <img
        class="about-us__bg-fon absolute left-0 bottom-0 z-0"
        src="../assets/image/stock/ellipse4.png"
        alt=""
      />

      <img
        class="about-us__bg-fon absolute left-0 top-20 z-0"
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
import AboutUsNews from './AboutUsNews.vue'
import AboutUsTitle from './AboutUsTitle.vue'

</script>

<style lang="scss" scoped >
.about-us {
  background-color: #f8f8f8;
  min-height: 1200px;
}
.about-us__bg-fon{
  width: 200px;
}

</style>