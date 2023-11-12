<template>
  <div class="my-container">
    <section class="about-us__section-image-title pt-10 flex">
      <div class="about-us__image"></div>
      <div class="ml-5 about-us__title-text flex flex-col gap-3">
        <div class="flex items-center">
          <img
            class="about-us__title-icon h-6 mr-2"
            src="../assets/image/Main/Vector.png"
            alt="icon"
          />
          <h2 class="about-us__title">Про нас</h2>
        </div>
        <p>
          <strong class="text-green-700">
            «Компанія ТОВ “ДАМАР АГРОТРЕЙД”
          </strong>
          — молода команда, яка з’явилась на аграрному ринку у 2020 році. Ми не
          боїмось труднощів і викликів. Тому навіть складний ковідний період,
          світова пандемія не стали на заваді успішному старту.
        </p>
        <p>
          Отже,
          <strong class="text-green-700">ми — сміливі, ми — драйвові</strong>,
          ми — ті, що розвивають рослинництво та допомагають ставати успішними
          тисячам вітчизняних аграріїв.
        </p>
        <p>
          <strong class="text-green-700">Бачення:</strong> компанія ТОВ “ДАМАР
          АГРОТРЕЙД” тримає курс на підвищення престижності, довіри до засобів
          захисту рослин made in UA. Прагнемо, аби в кожному регіоні України наш
          споживач мав доступ до якісної продукції та консалтингу від фахівців
          команди.
        </p>

        <p>
          <strong class="text-green-700">Місія: </strong> усе продуктове
          портфоліо, консультативні послуги ТОВ “ДАМАР АГРОТРЕЙД” направлені на
          підвищення рентабельності рослинництва в мінливих кліматичних умовах
          України. Також ставимо собі завдання підвищувати обізнаність клієнтів
          щодо сучасних методів ведення рослинництва...
        </p>
        <div>
          <button class="border py-2 px-10 rounded-xl bg-red-500 text-white">
            Докладніше
          </button>
        </div>
      </div>
    </section>
    <section class="about-us__section-news flex flex-col items-center pt-10">
      <div class="flex items-center">
        <span>
          <img
            class="about-us__title-icon h-6 pr-2"
            src="../assets/image/Main/Vector.png"
            alt="icon"
          />
        </span>
        <h2 class="about-us__news-title p-10">Новинки</h2>
        <span>
          <img
            class="about-us__title-icon h-6 pl-2"
            src="../assets/image/Main/Vector2.png"
            alt="icon"
          />
        </span>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped >
.about-us__image {
  min-height: 580px;
  max-width: 50%;
  width: 100%;
  background-image: url("../assets/image/Main/AboutUs/Vector.png");
  background-repeat: no-repeat;
  background-size: cover;
}
.about-us__title-text {
  width: 50%;
  padding-left: 50px;
}
.about-us__title {
  font-size: 40px;
  font-weight: 700;
}
.about-us__bg-fon {
  width: 200px;
  height: 500px;
}
.about-us__news-title {
  font-size: 40px;
}

@media screen and (max-width: 724px) {
  .about-us__section-image-title {
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  .about-us__image {
    max-width: 100%;
    min-height: 300px;
  }
  .about-us__title-text {
    width: 100%;
    padding: 10px;
    margin: 0;
    p{
      max-width: 100%;
    }
  }
  .about-us__title{
    margin: 20px 0;
  }
}
</style>