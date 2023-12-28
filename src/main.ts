import { createApp } from 'vue'
import { router } from './basic_service/router'
import './style.css'
import App from './App.vue'
// @ts-ignore
import Layui from '@layui/layui-vue'
import '@layui/layui-vue/lib/index.css'
import pinia from './basic_service/stores'
import { I18n } from './basic_service/i18n'

createApp(App)
    .use(Layui)
    .use(router)
    .use(pinia)
    .use(I18n)
    .mount('#app')
