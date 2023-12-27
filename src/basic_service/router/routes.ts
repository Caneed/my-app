const Home = () => import('@/views/Home/Home.vue')

export const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    }
]