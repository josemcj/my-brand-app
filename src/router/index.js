import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/useAuthStore'
import routes from './routes'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !localStorage.getItem('token')) {
        next({ name: 'login' })
    } else {
        next()
    }
})

export default router
