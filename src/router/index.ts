import { createWebHistory, createRouter } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/Tsx',
        name: 'Tsx',
        component: () => import('@/views/Tsx/index.vue')
    },
    {
        path: '/Map',
        name: 'Map',
        component: () => import('@/views/Map/Map.vue')
    },
    {
        path: '/List',
        name: 'List',
        component: () => import('@/views/List/useList.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router