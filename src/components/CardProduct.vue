<template>
  <div class="product__wrapper w-full">
    <p>
      <img :src=" '../../public/slide1/' + product.img" alt="" />
    </p>
    <div class="product__wrapper-info w-full mt-8">
      <p >{{ product.title }}</p>
      <p>
        <span>Ціна:</span>
        <span>{{ product.price }}</span>
      </p>
      <p>
        <span>Кількість:</span>
        <span> {{ product.quantity }}</span>
      </p>
    </div>
  </div>
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
  padding: 5px;

  p {
    display: flex;
    justify-content: space-between;
  }

  p:first-child {
    display: flex;
    justify-content: center;
  }
}
.product__wrapper-info{
    background-color: #F8F3F1;
    border-radius: 10px;
    padding: 10px ;

  
    
}
</style>