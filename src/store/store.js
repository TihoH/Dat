
import { defineStore } from "pinia"
import { ref } from "vue"

export const useStore = defineStore('myStore', () => {
    const cartProduct = ref([])
    const activeBasket = ref(false)
    const productsCatalog = ref([])
    const productsCatalogAll = ref([])

    const addProductInBasket = (id) => {
        activeBasket.value = true
        if(!cartProduct.value.includes(id)){
            cartProduct.value.push(id)
        }
    }
    const editCategory = (name) => {
        console.log(productsCatalog.value)
        productsCatalog.value = productsCatalogAll.value.filter(item => item.category === name)
        console.log(productsCatalog.value)
        
    }

    async function getProducts(){
        const res = await fetch('http://localhost:3000/swiperProduct')
        const data = await res.json()
        productsCatalog.value = data
        productsCatalogAll.value = data
    }

    return { cartProduct , activeBasket , productsCatalog ,productsCatalogAll, editCategory , addProductInBasket , getProducts}
  })