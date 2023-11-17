<template>
  <div class="basket-wrapper relative ">
    <div class="basket overflow-hidden" @click.stop>
      <div class="border-b font-semibold flex justify-center">
        <Title>Кошик</Title>
      </div>
      <h1 class="text-3xl font-semibold flex flex-col my-3 px-4">
        <span
          >Гербіцид Комманд<span class="text-green-600">®</span>,ФМС
          УКРАЇНА</span
        >
      </h1>
      <div class="">
        <div
          class="basket-wrapper__footer  sticky top-0 bg-gray-200 p-3 flex justify-between gap-10 font-semibold items-center"
        >
        <div class="flex gap-4">
          <button
            class="border h-10 px-10 bg-red-500 text-white rounded-md hover:shadow-xl hover:bg-red-600 transition"
            @click="myStore.activeBasket = false"
          >
            Продовжити покупки
          </button>
         <router-link to="/PlacingOrder"
            @click="myStore.activeBasket = false"  
            class="border h-10 px-10 bg-green-800 text-white rounded-md hover:bg-green-500 transition hover:shadow-xl flex items-center "
          >

          <i class="fa-solid fa-list-check mr-2"></i>Оформити заказ
         </router-link>
        </div>
          
          <div class="flex gap-5">
            <p>Ціна: {{ calculateMaxPrice() }}</p>
            <p>Кількість товарів ({{ cartProduct.length }})</p>
          </div>
        </div>
        <ul class="flex flex-col py-4  gap-3 h-full">
          <li
              v-for="product in cartProduct"
              :key="product"
              class="basket-product__produc flex cursor-pointer hover:shadow-xl pb-3 transition  justify-between w-full h-full items-center px-4"
            >
              <div class="flex ">
                <p class="basket-product__image-product">
                  <img :src="'../../../public/slide1/' + product.img" alt="" />
                </p>
                <div class="basket-product__produc-info flex flex-col p-5">
                  <p>
                    <strong class="w-24">Товар:</strong> {{ product.title }}
                  </p>
                  <p><strong>Ціна: </strong>{{ product.price }}</p>
                  <div class="basket-product__produc-qauntity">
                    <p>Кількість</p>
                    <button>-</button>
                    <input
                      class="text-center"
                      type="text"
                      :value="product.quantity"
                    />
                    <!-- <button @click="product.quantity = product.quantity + 1"> -->
                    <button @click="addQuantityProduct(product)">+</button>
                  </div>
                </div>
              </div>
              <button
                class="basket-product__produc-delete-btn border h-10 px-10 bg-red-500 text-white rounded-md opacity-0"
                @click="deleteProduct(product.id)"
              >
                Видалити
              </button>
            </li>
        </ul>
      </div>
    </div>
    <div class="basker__close-icon" @click="myStore.activeBasket = false">
        <i class="fa-solid fa-xmark text-white"></i>
      </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useStore } from "../../store/store";
import Title from "../Title.vue";

const myStore = useStore();

let getProducts = ref([]);
let cartProduct = ref([]);


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

const deleteProduct = (id) => {
  cartProduct.value = cartProduct.value.filter( item => item.id != id);
  myStore.cartProduct = cartProduct.value.map(item => item.id)
  console.log(cartProduct.value);
  
};

const calculateMaxPrice = () => {
  let price = 0;
  cartProduct.value.map((item) => {
    price = item.price + price;
  });
  return price;
};

const addQuantityProduct = (product) => {
  product.quantity = product.quantity + 1;
  product.price = product.price + p;
};

onMounted( () => {
  getProduct();
} )
</script>

<style lang="scss" scoped>
.basket-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 1000;
}
.basket {
  background-image: url("../../assets/image/baske/bg.png");
  background-size: cover;
  border-radius: 20px;
  height: 560px;
  overflow-y: scroll;
  width: 1000px;
}

.product-basket-img {
  width: 200px;
  height: 200px;
}
.basket-product__title {
  font-size: 40px;
}
.basket-product__title::after {
  content: url("../../assets/image/Main/Vector.png");
  margin-left: 20px;
}
.basket-product__title::before {
  content: url("../../assets/image/Main/Vector2.png");
  margin-right: 20px;
}
.basket-product__image-product {
  width: 200px;
  min-width: 150px;
  height: 150px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 3px black;
  padding: 20px 0;
  border-radius: 20px;

  img{
    max-height: 10  0%;
    max-width: 100%;
  }
}
.basket-product__produc-qauntity {
  display: flex;
  align-items: center;

  button {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-color: #84c551;
    color: white;
    padding-bottom: 3px;
    margin: 0 5px;
    font-size: 20px;
  }
  input {
    width: 40px;
  }
 
}
.basket-product__produc-delete-btn {
  transition: 0.5s;
}
.basket-product__produc:hover .basket-product__produc-delete-btn {
  opacity: 1;
}
.basket-wrapper__footer {
  position: sticky;
}
.basker__close-icon {
  position: absolute;
  right: 200px;
  top: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  box-shadow: 0 0 5px white;
  cursor: pointer;
  z-index: 1111;

  i {
    font-size: 30px;
  }
}
.basker__close-icon:hover {
  border: 2px solid white;
}
</style>