import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//1、route
import router from '@/router/index'

const app = createApp(App)

//1、route
app.use(router)
app.mount('#app')
