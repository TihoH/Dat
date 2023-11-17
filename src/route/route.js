import { createRouter, createWebHistory } from 'vue-router'
import TheMain from '../components/TheMain.vue'
import About from '../components/Pages/About.vue'
import PlantProtection from '../components/Pages/PlantProtection.vue'
import CartProduct from '../components/Pages/CartProduct.vue'
import PaymentDelivery from '../components/Pages/PaymentDelivery.vue'
import Contacts from '../components/Pages/Contacts.vue'
import Registration from '../components/Pages/Registration.vue'
import UserCabinet from '../components/Pages/UserCabinet.vue'
import PageProducts from '../components/Pages/PageProducts.vue'
import PlacingOrder from '../components/Pages/PlacingOrder.vue'
import OkOrder from '../components/Pages/OkOrder.vue'
import News from '../components/Pages/News.vue'


const routes = [
    { path: '/TheMain', component: TheMain , alias: '/' },
    { path: '/About', component: About  },
    { path: '/PlantProtection', component: PlantProtection  },
    { path: '/CartProduct/:id', component: CartProduct  },
    { path: '/Contacts', component: Contacts  },
    { path: '/PaymentDelivery', component: PaymentDelivery},
    { path: '/Registration', component: Registration},
    { path: '/UserCabinet', component: UserCabinet},
    { path: '/PageProducts', component: PageProducts},
    { path: '/PlacingOrder', component: PlacingOrder},
    { path: '/OkOrder', component: OkOrder},
    { path: '/News', component: News},
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router