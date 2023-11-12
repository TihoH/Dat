<template>
  <div class="flex my-container footer-container py-10">
    <div class="footer__section">
      <div class="footer__logo mb-5">
        <img src="../../assets/image/header/logo.svg" alt="" />
      </div>
      <p>Пропонуємо покупцям широкий вибір насіння овочів</p>
    </div>
    <div class="footer__section">
      <ul>
        <li class="footer__section-title">Інформація</li>
        <li>оплата і доставка</li>
        <li>Партнеры</li>
        <li>Про компанію </li>
      </ul>
    </div>
    <div class="footer__section">
      <ul>
        <li class="footer__section-title">Товари</li>
        <li>Каталог продукції</li>
        <li>Насіння</li>
        <li>Добрива</li>
        <li>Засоби захисту рослин</li>
        <li>Агроному в поміч</li>
      </ul>
    </div>
    <div class="footer__section">
      <ul>
        <li class="footer__section-title">Контакти</li>
        <li>
          <div>
            <p>+38 (067) 115 00 58</p>
            <p class="text-green-600 underline">Замовити зворотній зв’язок</p>
          </div>
        </li>
        <li>Партнеры</li>
      </ul>
    </div>
  </div>
</template>

<script setup >
import { onMounted } from "vue";

</script>

<style lang="scss" scoped>
.footer__section {
  width: calc(100% / 4);
}
.footer__section-title{
    margin-bottom: 15px;
    font-weight: 700;
}

@media screen and (max-width: 724px) {
  .footer-container{
    flex-direction: column;
    padding: 10px;

    div{
      width: 100%;
    }
  }
}
</style>