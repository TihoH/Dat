<template>
    <div class="ok-order text-white flex flex-col justify-center">
        <Title>Дякуемо за заказ</Title>
        <p class="text-center text-2xl flex flex-col">
            <span>Наш менеджер зв’яжеться з вами скоро  </span>
            <span>та відправить вам заказ</span>
        </p>
        <div class="flex gap-10 justify-center w-full mt-5">
            <router-link to="/PageProducts" class="py-2 px-10 rounded-2xl bg-orange-600 flex gap-3 items-center hover:shadow-white transition hover:shadow-md ">
                <i class="fa-solid fa-cart-shopping"></i>
                <span>Продовжити покупки</span>
            </router-link>
            <router-link to="/" class="border py-2 px-10 rounded-2xl  hover:border-yellow-200 transition hover:shadow-md hover:shadow-white">Повернутися на головну</router-link>
        </div>
    </div>
</template>

<script setup>
import Title from '../Title.vue';
</script>

<style lang="scss" scoped>
.ok-order{
    margin-top: 150px;
    background-image: url('../../assets/image/OkOrder/bgOrder.png');

    background-repeat: no-repeat;
    height: 600px;
}
</style>