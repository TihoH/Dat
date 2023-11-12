<template>
  <div class="contacts-wrapper py-10 pb-20 my-container">
    <div class="text-center text-3xl my-5">
        <Title>
            Контакти
        </Title>
    </div>
    <div class="contacts border-2 py-5 shadow-lg rounded-3xl">
      <div class="contacts__locations p-4 flex justify-between border-b-2">
        <div class="flex flex-1 justify-center items-center gap-3">
          <i
            class="fa-solid fa-location-dot text-3xl text-red-800 border border-red-800 w-10 h-10 flex items-center justify-center rounded-full p-7"
          ></i>
          <div>
            <p class="text-xl">Україна, Вінницька область,</p>
            <p class="text-xl">Вінниця, Хмельницьке шосе, 122</p>
          </div>
        </div>
        <div class="contacts__location-time flex justify-center  flex-1 items-center gap-3">
          <div>
            <i
              class="fa-solid fa-clock-rotate-left text-3xl text-red-800 border border-red-800 w-10 h-10 flex items-center justify-center rounded-full p-7"
            ></i>
          </div>
          <div>
            <p class="text-xl font-semibold">Пн-Пт</p>
            <p class="text-xl">9.00-18.00</p>
          </div>
        </div>
        <div class="location__mail flex  justify-center flex-1 items-center gap-3">
          <i
            class="fa-regular fa-envelope text-3xl text-red-800 border border-red-800 w-5 h-5 flex items-center justify-center rounded-full p-7"
          ></i>
          <a href="mailto:shop@ukrsemena.com" class="text-xl">shop@ukrsemena.com</a>
        </div>
      </div>
      <div class="p-4">
        <h2 class="text-green-600">
          <strong>Відділ продажу та агрономічного супроводу</strong>
        </h2>
        <p>
          Якщо Вам потрібна допомога при оформленні замовлення, консультація по
          використанню товарів, є питання що до Ваших замовлень звертайтеся
          сюди:
        </p>
        <div>
          <div
            class="contacts__location-time flex items-center  py-4"
          >
            <div class="flex flex-1 gap-4">
                <i
                  class="fa-solid fa-clock-rotate-left text-3xl text-red-800 border border-red-800 w-10 h-10 flex items-center justify-center rounded-full p-7"
                ></i>
              <div>
                <p class="text-xl font-semibold">Пн-Пт</p>
                <p class="text-xl">9.00-18.00</p>
              </div>
            </div>
            <div class="flex flex-1 justify-center items-center gap-4 pl-5">
              <i
                class="ml-10 fa-solid fa-phone text-3xl text-red-800 border border-red-800 w-10 h-10 flex items-center justify-center rounded-full p-7"
              ></i>
              <div class="flex flex-col">
                <a href="tel:0504242820">(050) 42-42-820</a>
                <a href="tel:0504242824">(050) 42-42-824</a>
              </div>
            </div>
            <div class="flex flex-1  items-center gap-4 pl-10">
              <i
                class="fa-solid fa-phone text-3xl text-red-800 ml-5 border border-red-800 w-10 h-10 flex items-center justify-center rounded-full p-7"
              ></i>
              <div class="flex flex-col">
                <a href="tel:0971825141">(097) 182-51-41 </a>
                <a href="tel:0981237000">(098) 123-70-00</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div  class="mt-5 flex items-center text-center flex-col">
        <h2 class="text-3xl text-center">
            Напишіть нам
        </h2>
      <div class="contacts__form-wrapper mt-2">
        <p>
            Введіть ваші контактні дані і текст повідомлення, якщо у вас виникли питання або пропозиції, і ми найближчим часом відповімо вам.
        </p>
        <form class="contacts__form flex flex-col gap-3 mt-5 ">
            <div class="flex justify-between gap-4">
                <input type="text" placeholder="Ім’я"  id="">
                <input type="text" placeholder="Фамілія"  id="">
            </div>
            <div class="flex justify-between gap-4">
                <input type="text" placeholder="Телефон"  id="">
                <input type="text" placeholder="Телефон"  id="">
            </div>
            <textarea class="contacts__form-massage" placeholder="Ваше повідомлення"></textarea>
            <button class="bg-orange-600 h-12 text-white rounded-xl">Відправити</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from '../../components/Title.vue'

</script>

<style lang="scss" scoped>
.contacts-wrapper {
  padding-top: 150px;
}
.contacts {
  min-height: 300px;
}
.contacts__locations {
  min-height: 100px;
}

a{
    transition: 0.25s;
}
a:hover{
    color: blue;
}
.contacts__form-wrapper{
    max-width: 540px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
input{
    border: 1px solid gray;
    height: 40px;
    width: 100%;
    border-radius: 90px;
    padding: 0 20px ;
    outline: none;
}

.contacts__form-massage{
    width: 100%;
    height: 100px;
    border-radius: 20px;
    border: 1px solid gray;
    padding: 20px;
    outline: none;
}
</style>
