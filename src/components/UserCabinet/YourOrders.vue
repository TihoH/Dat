<template>
       <div v-if="!myStore.cartProduct.length"  class="bg-gray-200 p-4 rounded-2xl"> 
        <h2 class="text-3xl">
            Замовлень немає
       </h2>
       </div>
       <ul v-else class=" rounded-2xl  flex flex-col gap-2">
            <li v-for="product in products" :key="product.id" class="p-4 flex gap-2 bg-gray-200 rounded-2xl">
                <div>
                    <img :src=" '../../public/slide1/' + product.img" alt="" class="h-32 p-4 bg-white rounded-2xl">
                </div>
                <div>
                    <h3>
                    <strong>
                        Гербіцид Комманд®, ФМС УКРАЇНА
                    </strong>
                </h3>
                  <p>
                    Назва: 
                    {{ product.title }}
                  </p>
                   <p>
                    кількість: 
                    {{ product.quantity }}
                   </p>
                   <p class="px-2 py-1 text-white flex justify-center items-center  " :style="[{backgroundColor: product.status === 'Оплачен' ? '#8B3213' : '' || product.status === 'В дороге' ? '#F69E00' : '' || product.status === 'Завершен' ? '#1E6140' : ''}]">
                    {{ product.status }}
                   </p>
                </div>
            </li>
        </ul>
</template>

<script setup>
import { useStore } from '../../store/store';
import { ref } from 'vue';

const myStore = useStore()

const products = ref([])

async function getProductsInCart(){
    const res = await fetch('http://localhost:3000/swiperProduct') 
    const data = await res.json()
    let product = []
    product = data
    product.map(item => {
        myStore.cartProduct.map( i => {
            if(item.id === i){
                products.value.push(item)
            }
        })
    })
    console.log(products.value)
}

getProductsInCart()

</script>

<style lang="scss" scoped>

</style>