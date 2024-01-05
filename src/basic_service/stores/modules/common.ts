import { defineStore } from "pinia";
import { reactive } from "vue";
import { RouteLocationNormalizedLoaded } from "vue-router";

export const useCommonStore = defineStore('commonStore', () => {
    // 路由缓存
    const routeHistory = reactive<Array<RouteLocationNormalizedLoaded>>([])
    /**
     * 路由跳转
     * @param currentRoute 将前往的路由push到路由缓存 
     */
    const pushRouteHistory = (currentRoute: RouteLocationNormalizedLoaded) => {
        routeHistory.push(currentRoute)
    }
    /**
     * 返回
     */
    const popRouteHistory = () => {
        routeHistory.pop()
    }
    /**
     * 获取当前路由
     * @returns 当前路由
     */
    const getCurrentRoute = (): RouteLocationNormalizedLoaded => {
        return routeHistory[routeHistory.length - 1]
    }

    /**
     * 获取上一个路由
     * @returns 上一个路由
     */
    const getLastRoute = (): RouteLocationNormalizedLoaded => {
        return routeHistory[routeHistory.length - 2]
    }
    /**
     * 
     * @returns 返回路由列表的长度
     */
    const getRouteLength = (): number => {
        return routeHistory.length
    }

    return {
        pushRouteHistory,
        popRouteHistory,
        getCurrentRoute,
        getLastRoute,
        getRouteLength
    }
})