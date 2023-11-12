<template>
  <div
    v-for="product in routeProduct"
    :key="product.id"
    class="my-container card-product__container py-10"
  >
    <div class="card-product flex gap-10">
      <div class="card-product__image shadow-xl">
        <img :src="'../../../public/slide1/' + product.img" alt="" />
      </div>
      <div class="card-product__info flex-2 w-full">
        <h1 class="text-3xl font-semibold flex flex-col">
          <span>Гербіцид Комманд<span class="text-green-600">®</span></span>
          <span>ФМС УКРАЇНА</span>
        </h1>
        <div class="flex justify-between my-2 mb-3">
          <p class="text-green-700">
            <i class="fa-solid fa-check"></i>
            В Наявності
          </p>
        </div>
        <div
          class="bg-white shadow-xl border-gray-400 rounded-md p-4 flex justify-between"
        >
          <div
            class="border-r border-gray-400 flex-1 flex flex-col justify-between"
          >
            <strong>
              <p>Виробник</p>
            </strong>
            <p class="flex gap-3">
              <img src="../../assets/image/CardProduct/FMClogo.png" alt="" />
              ФМС Україна
            </p>
            <p>Оплата</p>
            <p class="card-product__payment flex gap-2">
              <img src="../../assets/image/CardProduct/banc1.jpg" alt="" />
              <img src="../../assets/image/CardProduct/bank3.png" alt="" />
              <img src="../../assets/image/CardProduct/banc2.png" alt="" />
            </p>
          </div>
          <div class="card-product__delivery flex-1 pl-2">
            <h2>
              <strong> Доставка </strong>
            </h2>
            <p>Завтра відповідно до тарифів перевізника</p>
            <button class="border h-10 w-full rounded-lg mt-3">
              Замовити дзвінок
            </button>
          </div>
        </div>
        <div
          class="card-product__buy-product border-t-2 mt-5 pt-5 flex justify-between items-center"
        >
          <p class="text-3xl text-green-600 font-semibold">
            {{ product.price }} грн
          </p>
          <button class="rounded-lg h-10"  @click="myStore.addProductInBasket(product.id)">Купити</button>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <div class="flex">
        <button
          class="text-2xl font-semibold py-2 px-20 hover:shadow-2xl  duration-700 rounded-2xl"
          v-for="btn in tabBtnsAboutProduct"
          :key="btn"
          @click="tabBtnsInfotProduct = btn.active"
          :class="
            btn.active === tabBtnsInfotProduct
              ? 'card-product__about-unfo-btn'
              : ''
          "
        >
          {{ btn.title }}
        </button>
      </div>
      <div class="shadow-xl p-4 bg-white">
        <div v-if="tabBtnsInfotProduct === 1" class="flex flex-col gap-3">
          <h2>Препарат: <strong>{{ product.title }}</strong></h2>
          <p>
            {{ product.info }}
          </p>
          <p>
            <strong> Применение: </strong>
            {{ product.aplication }}
          </p>
          <div>
            <p>
              <strong>Преимущества:</strong>
            </p>
            <ul class="pl-4">
              <li v-for="item in product.advantages1" :key="item" class="list-disc">
                {{
                item.title
              }}
              </li>
            </ul>
          </div>
        </div>
        <div v-if="tabBtnsInfotProduct === 2" class="comments-product">
          <div v-if="product.commentsProduct.length">
            
          </div>
          <div v-else>
            <h4 class="text-xl">Відгуків немае</h4>
            <button class="rounded-lg h-10 mt-3">Додати</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import {useStore} from './../../store/store'

const route = useRoute();
const myStore = useStore()

let routeProduct = ref([]);

const tabBtnsAboutProduct = ref([
  { title: "Опис", active: 1 },
  { title: "Відгуки", active: 2 },
]);
const tabBtnsInfotProduct = ref(1);

async function getProductById() {
  const response = await fetch("http://localhost:3000/swiperProduct");
  const data = await response.json();
  routeProduct.value = data;
  routeProduct.value = routeProduct.value.filter(
    (item) => item.id === Number(route.params.id)
  );
}

onMounted(() => {
  getProductById();
});
</script>
<style scoped lang="scss">
.card-product {
  padding: 150px 0 50px;
}
.card-product__container{
  min-height: 1000px;
}
.card-product__image {
  height: 300px;
  max-width: 450px;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 70%;
  }
}
.card-product__payment {
  img {
    height: 30px;
  }
}
.card-product__delivery {
  padding: 14px;
  button {
    border: 2px solid #e74e13;
    color: #e74e13;
    font-weight: 600;
    transition: 0.5s;
  }
  button:hover{
    border: 2px solid #1e6140;
    color: #1e6140;
    box-shadow: 0 0 5px #1e6140;
  }
}
.card-product__buy-product {
  button {
    background-color: #e74e13;
    width: 200px;
    color: white;
    height: 40px;
    transition: 0.5s;
  }
  button:hover{
    color: #1e6140;
    box-shadow: 0 0 5px #1e6140;
    background-color: white;
  }
}
.comments-product{
  button {
    background-color: #e74e13;
    width: 200px;
    color: white;
    height: 40px;
    transition: 1s;
  } 
  button:hover{
    color: #1e6140;
    box-shadow: 0 0 5px #1e6140;
    background-color: white;
  }
}

.card-product__about-unfo-btn {
  // padding: 5px 45px;
  border-radius: 20px 20px 0 0;
  background-color: #1e6140;
  color: white;
}
</style>