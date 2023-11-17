<template>
  <div
    class="about-order flex flex-col justify-between gap-3 bg-white shadow-lg rounded-2xl p-5"
  >
    <div class="p-3">
      <h2 class="text-xl font-semibold">Товари у кошику</h2>
      <ul class="flex flex-col gap-2 mt-3">
        <li
          v-for="product in cartProduct"
          :key="product.id"
          class="flex items-center justify-between"
        >
          <div class="flex items-center gap-1">
            <div>
              <img :src="'../../public/slide1/' + product.img" alt="" />
            </div>
            <div class="flex flex-col">
              <h4>
                <strong> Гербіцид Комманд®, ФМС УКРАЇНА </strong>
              </h4>
              <p class="text-green-500 font-semibold text-lg">
                {{ product.price }}, грн
              </p>
            </div>
          </div>
          <i
            @click="deleteProduct(product)"
            class="fa-solid fa-xmark text-2xl text-red-600 cursor-pointer h-12 w-12 flex items-center justify-center rounded-full border border-red-100 hover:text-3xl"
          ></i>
        </li>
      </ul>
    </div>
    <div class="flex flex-col gap-2">
      <div
        class="flex justify-between bg-green-800 p-4 px-6 text-white rounded-2xl"
      >
        <p class="font-thin">
          разом:
          <strong class="font-semibold text-green-300"
            >{{ myStore.cartProduct.length }} товари</strong
          >
        </p>
        <p v-if="myStore.cartProduct.length">
          на сумму:
          <strong class="font-semibold text-green-300">
            {{ calculateMaxPrice }}
          </strong>
          грн
        </p>
      </div>
      <router-link to="OkOrder"  v-if="myStore.cartProduct.length"
        class="rounded-3xl py-2 text-white text-xl bg-orange-600 w-full flex items-center justify-center"
        @click="myStore.cartProduct = []"
      >
        Підтвердити заказ
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { useStore } from "../../store/store";
import { computed, ref } from "vue";

const myStore = useStore();

let getProducts = ref([]);
let cartProduct = ref([]);

const deleteProduct = (product) => {
  cartProduct.value = cartProduct.value.filter((item) => item.id != product.id);
  myStore.cartProduct = cartProduct.value.map((item) => item.id);
};

const calculateMaxPrice = computed(() => {
  if (myStore.cartProduct.length) {
    let maxPrice = 0;
    cartProduct.value.map((item) => {
      maxPrice = maxPrice + item.price;
    });
    return maxPrice;
  }
});

const addOrder = () => {
  console.log('fqfq')

}

async function getProduct() {
  const response = await fetch("http://localhost:3000/swiperProduct");
  const data = await response.json();
  getProducts.value = data;
  getProducts.value.map((item) => {
    myStore.cartProduct.map((i) => {
      if (item.id === i) {
        cartProduct.value.push(item);
      }
    });
  });
}
getProduct();
console.log("fqfq");
</script>

<style lang="scss" scoped>
.about-order {
  height: fit-content;
  min-height: 300px;
}
li {
  width: 100%;
  padding: 10px;
  box-shadow: 0 0 3px gray;
  border-radius: 20px 0px;
  cursor: pointer;
  transition: 0.5s;
  img {
    height: 80px;
  }
}
i {
  opacity: 0;
  transition: 0.5s;
}
li:hover {
  box-shadow: 0 0 5px black;
}
li:hover i {
  opacity: 1;
}
</style>