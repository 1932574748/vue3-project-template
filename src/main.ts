import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//1、route
import router from '@/router/index'

//2、pinia
import pinia from '@/store'

//3、element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

//1、route
app.use(router)
//2、pinia
app.use(pinia)
//3、element-plus
app.use(ElementPlus)
app.mount('#app')
