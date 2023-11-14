<template>
  <div class="grid grid-cols-2 w-full gap-4">
    <div
      v-for="item in cabinetLinks"
      :key="item"
      @click="$emit('emitClicklink' , item)"
      class="cursor-pointer transition hover:shadow-2xl font-thin border-2 hover:border-red-600 h-40 rounded-3xl p-2 flex flex-col gap-3 justify-center items-center
       bg-green-900 text-white "
    >
      <div>
        <img :src=" '../../../public/cabinet/1/' + item.icon  " alt="">
      </div>
      <div>
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<script setup >
import { ref } from "vue";

const cabinetLinks = ref([
  { title: "Поточні замовлення", link: 2 , icon: "1.png" },
  { title: " Особисті дані", link: 3 , icon: "2.png" },
  { title: "Історія замовлень", link: 5 , icon: "3.png" },
  { title: "Змінити пароль", link: 4 , icon: "4.png" },
]);
</script>