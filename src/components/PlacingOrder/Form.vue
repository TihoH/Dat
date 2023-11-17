<template>
            <div class="w-full flex flex-col gap-4">
                <h2 class="text-xl font-semibold">Ваші контакти</h2>
                <div class="flex gap-5">
                    <input type="text" placeholder="Ім’я" name="" id="">
                    <input type="text" placeholder="Фамілія" name="" id="">
                </div>
                <div class="flex gap-5">
                    <input type="text" placeholder="Ім’я" name="" id="">
                    <input type="text" placeholder="Фамілія" name="" id="">
                </div>
                <textarea class="rounded-xl border border-gray-500 p-3 mb-3" type="text" placeholder="Коментарій"></textarea>
                <h2 class="text-xl font-semibold border-t border-gray-500 pt-5">Доставка</h2>
                <div class="flex flex-col gap-4">
                    <div class="flex gap-5">
                        <input type="text" placeholder="Місто" name="" id="">
                        <input type="text" placeholder="Фамілія" name="" id="">
                    </div>
                    <div class="flex gap-5">
                        <input type="text" placeholder="Відділення" name="" id="">
                        <input type="text" placeholder="Поштовий індекс" name="" id="">
                    </div>
                </div>
                <div class="type-delivery flex flex-col gap-1 cursor-pointer">
                   <span>
                    <input type="radio" value="Готівка"  v-model="checked" id="var-1" checked><label for="var-1">Готівка</label>
                   </span>
                   <span>
                    <input type="radio" value="Оплата картою"  v-model="checked"  id="var-2" ><label for="var-2">Оплата картою</label>
                   </span>
                 <span>
                    <input type="radio" value="Оплата картою онлайн"  v-model="checked" id="var-3" ><label for="var-3">Оплата картою онлайн</label>
                 </span>
            
                </div>
            </div> 
</template>
<script setup>
import { ref } from 'vue';
const checked = ref('Готівка')
</script>

<style lang="scss" scoped>
input{
    border: 1px solid gray;
    padding: 5px 10px;
    border-radius: 20px;
    width: 100%;
    height: 40px;
    outline: none;
}
input::placeholder{
        color: black;
    }
textarea{
    outline: none;
}
.type-delivery{

    input{
        height: 15px;
        width: auto;
        border-radius: 100%;
    }
    span{
        display: flex;
        align-items: center;
        gap: 5px;
    }
    label{
        cursor: pointer;
    }
}</style>