import { createI18n } from "vue-i18n";
import { messages } from '@/basic_service/i18n/messages'
import { Lang } from "@/domain/Languages";


/**
 * i18n对象建立
 */
export const I18n = createI18n({
    locale: Lang.Lang_CN,//当前语言
    globalInjection: true,//全局配置
    legacy: false,//vue3写法
    messages
})