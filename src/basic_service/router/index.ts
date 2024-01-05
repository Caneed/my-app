import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/basic_service/router/routes'
import { useCommonStore } from '../stores'

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
})

/**
 * 全局路由守卫
 * 通过它来缓存路由
 */
router.beforeEach((to, from, next) => {
    const commonStore = useCommonStore()
    if (commonStore.getLastRoute() === to && commonStore.getCurrentRoute() === from) {
        next()
        return
    }
    if (to.fullPath !== from.fullPath) {
        commonStore.pushRouteHistory(to)
    }
    next()
})