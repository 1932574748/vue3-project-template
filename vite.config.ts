import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

//1、 导入 path 模块，帮助我们解析路径
import { resolve } from 'path'

//2-1 自动导入vue中hook reactive ref等
import AutoImport from 'unplugin-auto-import/vite'
//2-2 自动导入ui-组件 比如说ant-design-vue  element-plus等
import Components from 'unplugin-vue-components/vite'

//3、vue3语法糖
import VueSetupExtend from 'vite-plugin-vue-setup-extend'

//4、vw适配方案
import postcsspxtoviewport from 'postcss-px-to-viewport'
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            //安装两行后你会发现在组件中不用再导入ref，reactive等
            imports: ['vue', 'vue-router'],
            //存放的位置
            dts: "src/auto-import.d.ts",
        }),
        Components({
            // 引入组件的,包括自定义组件，存放的位置
            dts: "src/components.d.ts",
        }),
        VueSetupExtend(),
    ],

    //1、 ↓解析配置
    resolve: {
        // ↓路径别名
        alias: {
            "@": resolve(__dirname, "./src"),
            "_c": resolve(__dirname, "./src/components")
        }
    },

    //代理
    server: {
        proxy: {
            '/api': { // 匹配请求路径，
                // target: 'http://223.75.52.167:21985', // 代理的目标地址
                target: 'https://restapi.amap.com/v3', // 代理的目标地址
                // 开发模式，默认的127.0.0.1,开启后代理服务会把origin修改为目标地址
                changeOrigin: true,
                // secure: true, // 是否https接口
                // ws: true, // 是否代理websockets

                // 路径重写，**** 如果你的后端有统一前缀(如:/api)，就不开启；没有就开启
                //简单来说，就是是否改路径 加某些东西
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },

    //打包
    build: {
        terserOptions: {
            compress: {
                drop_console: true,//去除console相关代码
                drop_debugger: true,//去除debugger相关代码
            },
        },
    },
    css: {
        postcss: {
            plugins: [
                postcsspxtoviewport({
                    unitToConvert: 'px', // 要转化的单位
                    viewportWidth: 1920, // UI设计稿的宽度
                    unitPrecision: 6, // 转换后的精度，即小数点位数
                    propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
                    viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
                    fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
                    selectorBlackList: ['el-'], // 指定不转换为视窗单位的类名,例如van-（vantUI组件），
                    minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
                    mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
                    replace: true, // 是否转换后直接更换属性值
                    exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配，最好不要排除node_modules 文件，排除后在项目中会发现字体不能跟随页面放大
                    landscape: false // 是否处理横屏情况
                })
            ]
        },
        preprocessorOptions: {
            scss: {
                javascriptEnabled: true,
                additionalData: '@import "./src/styles/varible.scss";',
            },
        },
    }
})