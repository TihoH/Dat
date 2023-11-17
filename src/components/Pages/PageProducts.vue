<template>
    <div class="my-container-pages py-20">
        <Title>Засоби захисту рослин</Title>
        <div>
            <div class="page-products__sidebar flex gap-4">
                <ProductsSidebar class="products-sidebar" />
                <ProductsCatalog />
            </div>
        </div>
    </div>
</template>

<script setup>
import Title from '../Title.vue';
import ProductsSidebar from '../PageProducts/ProductsSidebar.vue'
import ProductsCatalog from '../PageProducts/ProductsCatalog.vue'
</script>

<style lang="scss" scoped>
.products-sidebar{
    width: 100%;
    max-width: 260px;
    // min-height: 360px;
}
</style>