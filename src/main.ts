import { createApp } from 'vue'
import './style.css'//初始化样式
import "nprogress/nprogress.css" //nprogress样式引入
import App from './App.vue'

//1、route
import router from '@/router/index'

//2、pinia
import pinia from '@/store'

//3、element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

//4、引入echarts
import * as echarts from 'echarts'

const app = createApp(App)

//1、route
app.use(router)
//2、pinia
app.use(pinia)
//3、element-plus
app.use(ElementPlus)
//4、放入全局
app.config.globalProperties.$echarts = echarts
app.mount('#app')
