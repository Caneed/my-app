const Home = () => import('@/views/Home/Home.vue')
const NotFound = () => import('@/views/NotFound/NotFound.vue')

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/404',
        name: 'NotFound',
        component: NotFound
    },
    // 自定义404页面捕获解析不了的url并重定向为404，放在routes最后面
    {
        path:'/:catchAll(.*)',
        redirect:'/404'
    }
]