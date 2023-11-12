<template>
  <div
    class="registration-wrapper my-container-pages flex flex-col items-center"
  >
    <Title> Реєстрація </Title>
    <h2 class="text-center">
      Увійдіть, щоб використовувати всі можливості особистого кабінету:
      відстеження замовлень, налаштування передплати, зв'язки з соціальними
      мережами та інші. Ми ніколи і за жодних умов не розголошуємо особисті дані
      клієнтів. Контактна інформація буде використана тільки для оформлення
      замовлень та зручнішої роботи з сайтом
    </h2>
    <form class="registration__form flex flex-col gap-3 mt-5">
      <div class="flex justify-between gap-4">
        <input type="text" placeholder="Ім’я" id="" />
        <input type="text" placeholder="Прізвище" id="" />
      </div>
      <div class="flex justify-between gap-4">
        <input type="text" placeholder="Телефон" id="" />
        <input type="text" placeholder="E-mail" id="" />
      </div>
      <input type="text" placeholder="Пароль" />
      <input type="text" placeholder="Підтвердити пароль" />
      <div class="flex items-center justify-center gap-2">
        <input type="checkbox" id="registration-form__checkbox" checked />
        <label for="registration-form__checkbox" class="cursor-pointer">
            я згоден на обробку і захист персональних даних</label
        >
      </div>
      <button class="bg-orange-600 h-12 text-white rounded-2xl">
        Зареєструватися
      </button>
    </form>
  </div>
</template>

<script setup>
import Title from "../Title.vue";
</script>

<style lang="scss" scoped>
.registration__form {
  max-width: 550px;
}
.contacts__form-wrapper {
  max-width: 540px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
input {
  border: 1px solid gray;
  height: 40px;
  width: 100%;
  border-radius: 90px;
  padding: 0 20px;
  outline: none;
}

.contacts__form-massage {
  width: 100%;
  height: 100px;
  border-radius: 20px;
  border: 1px solid gray;
  padding: 20px;
  outline: none;
}
#registration-form__checkbox {
  height: 20px;
  width: 20px;
}
</style>