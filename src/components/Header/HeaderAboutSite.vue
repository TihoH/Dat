<template>
  <div class="my-container">
    <div class="wrapper mt-4 relative z-50">
      <div class="wrapper-info w-full flex items-center justify-between">
        <div class="logo">
          <router-link to="/">
            <img src="../../assets/image/header/logo.svg" alt="" />
          </router-link>
        </div>
        <div class="searche relative">
          <input class="border" type="text" placeholder="Пошук" />
          <span class="searche__icon-searche">
            <i class="fa-solid fa-magnifying-glass cursor-pointer hover:text-yellow-100 " title="Пошук"></i>
          </span>
        </div>
        <div class="tell flex items-center gap-2">
          <div class="p-3 border rounded-full border-red-800">
            <PhoneIcon class="ml-1 h-5 text-red-800 rotate-45" />
          </div>
          <div class="flex flex-col">
            <a href="tell:380671150058" title="Дзвінок">+38 (067) 115 00 58</a>
            <button class="text-green-600 underline">Замовити зворотній зв’язок</button>
          </div>
        </div>
        <div class="icons flex items-center gap-2">
          <span class="border rounded-full border-red-800 cursor-pointer hover:shadow-xl hover:border-none transition"
            title="корзина" @click="myStore.activeBasket = true">
            <ShoppingCartIcon class="h-7 t text-red-800 relative" />
            <p v-if="myStore.cartProduct.length"
              class="ShoppingCartIcon__quantity-product absolute bg-green-600 text-white">
              {{ myStore.cartProduct.length }}
            </p>
          </span>
          <span class="border rounded-full border-red-800">
            <HeartIcon class="h-7 text-red-800" />
          </span>
        </div>
      </div>
      <div class="aboutSite__btn-links flex justify-between gap-5 pt-4">
        <router-link :to="btn.link" v-for="btn in categoriesLinks" :key="btn.link" @click="activeLink(btn.link)"
          class=" font-semibold uppercase  flex flex-1 gap-1 items-center justify-center border border-green-800 text-center hover:border-transparent hover:bg-red-500 hover:text-white transition rounded-full bg-transparent">
          <img :src="'../../../public/headerImg/' + btn.icon" class="header-link__btn-img" alt="" />
           <span class="aboutSite__btn-links-text">{{ btn.title }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { PhoneIcon } from "@heroicons/vue/24/solid";
import { ShoppingCartIcon } from "@heroicons/vue/24/solid";
import { HeartIcon } from "@heroicons/vue/24/solid";
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "../../store/store";

const route = useRoute();

const myStore = useStore();

const categoriesLinks = ref([
  { title: "Насіння", icon: "1.png", link: "" },
  { title: "Засоби захисту рослин", icon: "2.png", link: "PlantProtection" },
  { title: "Добрива", icon: "3.png", link: "" },
  { title: "кормова група", icon: "4.png", link: "" },
  { title: "Агроному в поміч", icon: "5.png", link: "" },
]);
const isActiveHeaderLink = ref("a");

const activeLink = (link) => {
  isActiveHeaderLink.value = link;
};

onMounted(() => {
  isActiveHeaderLink.value = "a";
});
</script>

<style lang="scss" scoped>
.logo {
  img {
    height: 50px;
  }
}

.searche input {
  width: 300px;
  padding-left: 15px;
  border-radius: 50px;
  height: 45px;
  padding-right: 50px;
}

.searche__icon-searche {
  position: absolute;
  right: 20px;
  top: 10px;
  border-left: 1px solid #e5e7eb;
  padding-left: 10px;
  color: #e5e7eb;
}

.icons span {
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ShoppingCartIcon__quantity-product {
  width: 20px;
  height: 20px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  right: 55px;
  top: 30px;
}
.aboutSite__btn-links-text{
  max-width: 150px;
}

.header-link__btn-img {

  height: 25px;
}

.aboutSite__btn-links {

  a {
    font-size: 14px;
  }
}

.styleBtn {
  box-shadow: 0 0 3px black;
}

@media screen and (max-width: 724px) {

  // .wrapper{
  //   flex-direction: column;
  // }
  .wrapper-info {
    padding: 10px;
  }

  .searche {
    display: none;
  }

  .tell {
    display: none;
  }
}
</style>