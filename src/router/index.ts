import { createWebHashHistory, createRouter } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/index.vue')
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router