
import { defineStore } from "pinia"
import { ref } from "vue"

export const useStore = defineStore('myStore', () => {
    const cartProduct = ref([])
    const activeBasket = ref(false)

    const addProductInBasket = (id) => {
        activeBasket.value = true
        if(!cartProduct.value.includes(id)){
            cartProduct.value.push(id)
        }
    }
  
    return { cartProduct , activeBasket , addProductInBasket}
  })