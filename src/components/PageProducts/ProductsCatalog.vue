<template>
    <div class="grid grid-cols-3 gap-4 w-full">
        <CardProduct 
            v-for="product in myStore.productsCatalog" 
            :key="product.id" :product="product" 
            class="products-catalog__product border hover:shadow-lg transition cursor-pointer rounded-2xl" 
        />
    </div>
</template>

<script setup>
import CardProduct from '../../components/CardProduct.vue'
import { useStore } from "../../store/store";

const myStore = useStore()

myStore.getProducts()
</script>

<style lang="scss" scoped>
.products-catalog__product{
    max-height: 350px;
}
</style>