import { createRouter, createWebHistory } from "vue-router"
//PC端
const routerPc = [
    {
        path: '/',
        redirect: 'index',
    },
    {
        path: '/index',
        name: 'Home',//要保持唯一性
        component: () => import('@/views/index.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about/index.vue')
    },
    {
        path: '/dialog',
        name: 'Dialog',
        component: () => import('@/views/dialog/index.vue')
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue')
    },
]
//移动端
const routesMove = [
    {
        path: '/m/index',
        name: 'MobileHome',//要保持唯一性
        component: () => import('@/views/index.vue'),
    },
    {
        path: '/m/about',
        name: 'MobileAbout',
        component: () => import('@/views/about/index.vue')
    },
    {
        path: '/m/dialog',
        name: 'MobileDialog',
        component: () => import('@/views/dialog/index.vue')
    },
    {
        path: '/m/dashboard',
        name: 'MobileDashboard',
        component: () => import('@/views/dashboard/index.vue')
    },

]
//其他路由
const routesOther = [
    {
        // 配置404页面
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import('@/views/404/index.vue'),
    }
]
const routes = [...routerPc, ...routesMove, ...routesOther]
// 路由
const router = createRouter({
    history: createWebHistory(),
    routes
})
//路由分发
router.beforeEach((to, from, next) => {
    // 是否是移动端设备
    const isMobile =
        /(Android|webOS|iPhone|iPod|tablet|BlackBerry|Mobile)/i.test(
            navigator.userAgent
        );

    // 是否是手机端路由
    const isRouterMobile = /^\/m\//.test(to.fullPath);
    // 移动端并且 不是/m开头路由
    if (isMobile && !isRouterMobile) {
        next('/m' + to.fullPath);
    } else if (!isMobile && isRouterMobile) {
        next(to.fullPath.replace('/m', ''));
    } else {
        next();
    }
});

// 导出
export default router
