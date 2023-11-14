<template>
  <ul class="sidebar-cabinet flex flex-col gap-1">
    <li 
        class="flex flex-1 items-center pl-4 bg-gray-200 transition cursor-pointer hover:bg-green-200 " 
        v-for="link in sidebarLLinks" 
        :key="link.id"
        @click="emitsLink(link)"
        :style="[{backgroundColor: isActiveMenu === link.activeMenu ? '#84C551' : '' } , {color: isActiveMenu === link.activeMenu ? 'white' : '' }]" 
    >
    <i :class=" link.icon "></i>
      {{ link.name }}
    </li>
  </ul>
</template>

<script setup>
import { ref } from "vue";
import { defineEmits } from "vue";
import { defineProps } from "vue";

const emit = defineEmits(['activeMenu'])
const props = defineProps({
  isActiveMenu: {
    type: Number,
    required: true
  }
})

const sidebarLLinks = ref([
  { name: "Мій кабінет", icon: "fa-solid fa-user-tie", activeMenu: 1, id: 1 },
  { name: "Поточні замовлення", icon: "fa-regular fa-rectangle-list", activeMenu: 2, id: 2 },
  { name: "Особисті дані", icon: "fa-regular fa-address-card", activeMenu: 3, id: 3 },
  { name: "Змінити пароль", icon: "fa-solid fa-unlock-keyhole", activeMenu: 4, id: 4 },
  { name: "Історія замовлень", icon: "fa-solid fa-list-check", activeMenu: 5, id: 5 },
]);

const emitsLink = (link) => {
    emit('activeMenu' , link)
    isActiveMenu = link.activeMenu

}

</script>

<style lang="scss" scoped>

.styleMenu{
    border-radius: 20px, 20px, 0px, 0px;
}
li:first-child{
    border-radius: 20px 20px 0 0;
}
li:last-child{
    border-radius: 0 0  20px 20px;
}
i{
  font-size: 20px;
  margin-right: 5px;
}
</style>