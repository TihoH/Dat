<template>
  <form class="flex flex-col gap-2 bg-gray-200 p-3 rounded-2xl">
    <div class="flex justify-between gap-4">
      <p>
        <span>Ім’я</span>
        <input type="text" placeholder="Ім’я" id="" />
      </p>
      <p>
        <span> Прізвище </span>
        <input type="text" placeholder="Прізвище" id="" />
      </p>
    </div>
    <div class="flex justify-between gap-4">
      <p>
        <span>Телефон</span>
        <input type="text" placeholder="Телефон" id="" />
      </p>
      <p>
        <span>Пошта</span>
        <input type="text" placeholder="E-mail" id="" />
      </p>
    </div>
    <span>
        Адреса для доставки
    </span>
    <input type="text" placeholder="Адрес доставки" />
    <div>
      <button class="bg-orange-600 py-2 px-10 text-white rounded-2xl">
        Зберегти
      </button>
    </div>
  </form>
</template>
<script setup>
</script>

<style scoped>
input {
  width: 100%;
  padding: 10px 14px;
  border-radius: 10px;
}
p {
  width: 100%;
}
</style>

