<template>
  <div class="my-container-pages pb-20">
    <Title>Оформлення заказу</Title>
    <div class="flex gap-10">
      <Form class="flex-1"></Form>
      <AboutOrder class="flex flex-1  " />
    </div>
  </div>
</template>

<script setup>
import Title from "../Title.vue";
import Form from "../../components/PlacingOrder/Form.vue";
import AboutOrder from "../PlacingOrder/AboutOrder.vue";
</script>

<style lang="scss" scoped>
</style>