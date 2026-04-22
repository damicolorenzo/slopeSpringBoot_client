import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { setupRouterGuards } from './router'
import 'bootstrap/dist/css/bootstrap.css' 
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

setupRouterGuards(pinia)

app.mount('#app')
