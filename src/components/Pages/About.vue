<template>
  <div class="my-container py-5">
    <div class="flex items-center justify-center flex-col">
      <div class="flex items-center">
        <span>
          <img
            class="about-us__title-icon h-7 mr-1"
            src="../../assets/image/Main/Vector.png"
            alt="icon"
          />
        </span>
        <h2 class="about-us__news-title m-10">Про нас</h2>
        <span>
          <img
            class="about-us__title-icon h-7 ml-1"
            src="../../assets/image/Main/Vector2.png"
            alt="icon"
          />
        </span>
      </div>
      <div class="flex gap-5 flex-col">
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
      </div>
    </div>
    <div class="mt-5">
        <ul>
            <h3 class="About__info-title">Цінності: </h3>
            <li>прозорість ділових стосунків з колегами, контрагентами, клієнтами;</li>
            <li>однаково висококласний сервіс для невеликого фермера та потужного холдингу;</li>
            <li>покращення якості товарів та послуг;</li>
            <li>постійна підтримка партнера на усіх етапах виробництва продукції рослинництва;</li>
            <li>екологічність у роботі, думках та цілях;</li>
            <li>підтримка вітчизняного продукту та вітчизняного виробника;</li>
            <li>постійний саморозвиток.…»</li>
        </ul>
      </div>
  </div>
</template>


<script setup scoped>
</script>

<style lang="scss" scoped>
.my-container{
    padding-top: 130px;
}
h2 {
  font-size: 40px;
}
.About__info-title{
    font-size: 20px;
    font-weight: 600;
}
li{
    list-style: none;
}
li:before {
    content:  "—";
    position: relative;
    left:     -5px;
}
li:first-child{
    content: '';
}
</style>