import { createI18n } from "vue-i18n";
import { messages } from '@/basic_service/i18n/messages'
import { LangEnum } from "@/domain/basic_service/Languages";

const defaultLang = localStorage.getItem('locale')

/**
 * i18n对象建立
 */
const i18n = createI18n({
    locale: defaultLang || LangEnum.zh_CN,//当前语言
    globalInjection: true,//全局配置
    legacy: false,//vue3写法
    messages
})

export default i18n