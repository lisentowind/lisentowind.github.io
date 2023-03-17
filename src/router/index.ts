import { createWebHistory, createRouter } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'Map',
        component: () => import('@/views/Map/Map.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router