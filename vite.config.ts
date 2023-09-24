import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//1、 导入 path 模块，帮助我们解析路径
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
    ],

    //1、 ↓解析配置
    resolve: {
        // ↓路径别名
        alias: {
            "@": resolve(__dirname, "./src"),
            "_c": resolve(__dirname, "./src/components")
        }
    }
})
