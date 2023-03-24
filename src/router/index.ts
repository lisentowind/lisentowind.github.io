import { createWebHistory, createRouter } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/Map',
        name: 'Map',
        component: () => import('@/views/Map/Map.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router