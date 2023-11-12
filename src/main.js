import { createApp } from 'vue'
import './style.css'
import App from './components/App.vue'
import { createPinia } from 'pinia'
const app = createApp(App)

const pinia = createPinia()
app.use(pinia)

import route from './route/route'
app.use(route)

app.mount('#app')
