import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { router } from './router'
import './style.css'
import App from './App.vue'
// @ts-ignore
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'

const pinia = createPinia()

createApp(App)
    .use(Layui)
    .use(pinia)
    .use(router)
    .mount('#app')
