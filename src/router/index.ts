import { createWebHashHistory, createRouter } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
        children: [
            {
                path: 'user-info',
                name: 'user-info',
                component: () => import('../components/content/components/user-info.vue')
            },
            {
                path: 'work-experience',
                name: 'work-experience',
                component: () => import('../components/content/components/work-experience.vue')
            },
            {
                path: 'can-write',
                name: 'can-write',
                component: () => import('../components/content/components/can-write.vue')
            }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router