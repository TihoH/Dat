<template>
  <div>
    <div class="my-container plant-protection">
      <h1>Засоби захисту рослин</h1>
      <div
        class="plant-protection__wrapper-card grid grid-cols-4 w-full gap-3 mt-10"
      >
        <div
          class="plant-protection__item-card w-full relative"
          v-for="product in plantProtection"
          :key="product"
        >
          <router-link to="/">
            <p>
              <img
                :src="'../../../public/PlantProtection/' + product.img"
                alt=""
              />
            </p>
            <p
              class="plant-protection__item-card-title py-4 transition absolute bottom-0 right-0 left-0 rounded-2xl text-center"
            >
              {{ product.title }}
            </p>
          </router-link>
        </div>
      </div>
    </div>
    <div class="plant-protection__bg p-2 flex flex-col justify-center">
      <div class="my-container flex flex-col gap-4 text-white">
        <h1 class="plant-protection__bg-title">Засоби захисту рослин</h1>
        <p>
          Засоби захисту рослин поділяють на чотири основні види: механічні,
          хімічні, біологічні та агротехнічні. Проте найраціональніше - це їх
          одночасне, правильне поєднання. Найпоширеніший метод - це хімічний.
        </p>
        <p>
          Існують тисячі різних видів препаратів хімічного захисту. Але не варто
          їх плутати, а тим більше об′єднувати з хімічними добривами. Методи їх
          впливу на рослини абсолютно протилежні. Необхідно знати і розрізняти
          хімічні засоби захисту рослин. Адже ці препарати мають суоро
          визначений об′єкт впливу (збудник хвороби, комахи-шкідники, вид або
          родина бур′янів). Отрутохімікати не терплять халатності.
        </p>
        <p>
          Це той тип препарату, який недостатньо просто розвести у воді і
          обприскати ним рослини. Якщо отрутохімікати неправильно застосувати,
          то вони можуть завдати шкоди вам, корисним комахам, урожаю.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const plantProtection = ref([]);

async function getProducts() {
  try {
    const response = await fetch("http://localhost:3000/plantProtectionItems");
    const data = await response.json();
    plantProtection.value = data;
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  getProducts();
});
</script>

<style lang="scss" scoped>
.plant-protection {
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__item-card-title {
    background-color: rgba(225, 222, 212, 0.8);
    font-weight: 700;
  }
}
h1 {
  display: flex;
  gap: 10px;
  font-size: 40px;
}
h1::before {
  content: url("");
  background-image: url("../../assets/image/Main/Vector.png");
  background-repeat: no-repeat;
  background-position: bottom;
  width: 45px;
  height: 45px;
}

.plant-protection__item-card {
  width: 100%;
  img {
    width: 340px;
    height: 160px;
    object-fit: cover;
    cursor: pointer;
    border-radius: 20px;
  }
}
.plant-protection__item-card:hover .plant-protection__item-card-title {
  opacity: 0;
}
.plant-protection__bg {
  margin-top: 100px;
  min-height: 500px;
  width: 100%;
  background-image: url("../../assets/image/plantProtectionBg.jpg");
  background-size: cover;

  img {
    height: 100%;
    width: 100%;
  }
}
.plant-protection__bg-title {
  color: white;
}
.plant-protection__bg-title::after {
  content: url("");
  background-image: url("");
  background-repeat: no-repeat;
  background-position: bottom;
  width: 45px;
  height: 45px;
}
@media screen and (max-width: 724px) {
  .plant-protection__wrapper-card {
    grid-template-columns: 1fr;

    img {
      width: 100%;
    }
  }
  .plant-protection__bg-title {
    font-size: 22px;
    display: flex;
    align-items: flex-end;
  }
  .plant-protection {
    padding: 20px;
  }
}
</style>