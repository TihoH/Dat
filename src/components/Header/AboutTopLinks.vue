<template>
  <div>
    <div class="my-container flex justify-between items-center ">
      <ul class="about-links__menu flex border-r border-green-700 w-full">
        <li
          v-for="link in aboutLink"
          :key="link.linl"
          class="link-header"
        >
          <router-link 
            :to="link.linl " 
            class="font-thin" 
            :style="{color: activeMenuLink === link.linl ? 'red' : 'white'}"
            @click="activeMenuLink = '/'+route.path"
          >
            {{ link.title }}
            <i v-if="link.iconActive" class="fa-solid fa-chevron-down mt-1 ml-1"></i>
            <ul class="show-link-header" v-if="link.hoverMeny">
                <li v-for="hoverLink in link.hoverMeny" :key="hoverLink">
                  <router-link to="#">
                    {{ hoverLink.title }}
                  </router-link>
                </li>
              </ul>
          </router-link>
        </li>
      </ul>
      <div class="flex items-center gap-2">
        <router-link to="/UserCabinet" class="link-my link-my-border  relative   flex items-center font-thin gap-2 text-white hover:text-yellow-100 hover:shadow-xl" >
            <i class="fa-solid fa-door-open text-2xl"></i>
          <span>Вхід</span>
        </router-link>
        <span class="border h-5"></span>
        <router-link to="Registration" class="link-my relative flex items-center gap-2 text-white font-thin hover:text-yellow-100 hover:shadow-xl ">Реестрація</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";

const route = useRoute()
const aboutLink = ref([
  { title: "Про нас", linl: "About" , iconActive: true , activeHoverMenu: false ,  hoverMeny: [
    {title: 'Наша команда' , linl: ''},
    {title: 'Партнери' , linl: ''},
    {title: 'Договір' , linl: ''},
  ] },
  { title: "Каталог продукції", linl: "" },
  { title: "Оплата і доставка", linl: "PaymentDelivery" },
  { title: "Партнери", linl: "" },
  { title: "Новини", linl: "" },
  { title: "Контакти", linl: "Contacts" },
]);
const activeMenuLink = ref(route)

</script>

<style lang="scss" scoped>
.about-links__menu{
  max-width: 880px;
}
.about-links__menu li:not(:first-child){
  text-align: center;
}
.header-menu{
  position: relative;
  z-index: 1002;
}
.link-header{
  position: relative;
  padding: 15px 20px 15px 0 ;
  color: white;
}
.link-header:hover{
  background-color: #347153;
}
.link-header{
  position: relative;
  padding: 15px 0;
  color: white;
  padding-left: 5px;
  width: 100%;
}
.show-link-header{
  display: none;
}
.link-header:hover .show-link-header{
  display: block;
  position: absolute;
  background-color: #347153;
  width: 200px;
  top: 54px;
  left: 0;
  z-index: 100;
  padding: 10px;
  padding-top: 5px;
  border-radius: 0 0 20px 20px;
}
i{
  transition: 0.5s;
}
.link-header:hover i{
  transform: rotate(90deg);
}
.link-my::before{
  content: '';
  width: 100px;
  border: 1px solid #FEF9C3;
  position: absolute;
  bottom: 0;
  left: -7px;
  transform: translateX(-100px);
  transition: 1s;
}
.link-my{
  padding-bottom: 5px;
  overflow: hidden;
  height: 35px;
}
.link-my:hover::before{
 transform: translateX(0px);
}

</style>