const Home = () => import('@/views/home/Home.vue')
const NotFound = () => import('@/views/error/NotFound.vue')
const Game = () => import('@/views/GamePage/GamePage.vue')
const GameDetail = () => import('@/views/GameDetail.vue')

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/games',
        name: 'games',
        component: Game,
    }, {
        path: '/gameDetail',
        name: 'gameDetail',
        component: GameDetail
    },{
        path: '/404',
        name: 'NotFound',
        component: NotFound
    },
    // 自定义404页面捕获解析不了的url并重定向为404，放在routes最后面
    {
        path: '/:catchAll(.*)',
        redirect: '/404'
    }
]