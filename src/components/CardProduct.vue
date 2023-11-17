<template>
  <router-link :to="'/CartProduct/' + product.id" class="product__wrapper w-full bg-white flex flex-col  justify-between">
      <p class="flex items-center h-full">
        <img :src="'../../public/slide1/' + product.img" alt="" />
      </p>
      <div class="product__wrapper-info w-full mt-8">
        <p>{{ product.title }}</p>
        <p>
          <span>Ціна:</span>
          <span>{{ product.price }}</span>
        </p>
        <p>
          <span>Кількість:</span>
          <span> {{ product.quantity }}</span>
        </p>
      </div>
  </router-link>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
  },
});
</script>

<style lang="scss" scope>
.product__wrapper {
  width: 100%;
  max-height: 350px;
  padding: 5px;
  img {
    max-height: 200px;
  }

  p {
    display: flex;
    justify-content: space-between;
  }

  p:first-child {
    display: flex;
    justify-content: center;
  }
}
.product__wrapper-info {
  background-color: #f8f3f1;
  border-radius: 10px;
  padding: 10px;
}
</style>