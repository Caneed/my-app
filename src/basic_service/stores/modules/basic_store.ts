import { Language } from "@/domain/types/LangType";
import { defineStore } from "pinia";
import { ref } from "vue";


/**
 * 基础服务的store
 */
export const useInitStore = defineStore('initStore', () => {
    // ---------------------------国际化i18n模块-------------------------------------
    // 当前语言
    const currentLang = ref<Language>('zh_CN')

    /**
     * 切换当前语言
     * @param lang 切换的语言
    */
    function switchCurrentLang(lang: Language) {
        currentLang.value = lang
    }

    /**
     * 获取当前语言
     * @returns 当前语言
    */
    function getCurrentLang(): Language {
        return currentLang.value
    }
    // ---------------------------国际化i18n模块-------------------------------------

    return { currentLang, switchCurrentLang, getCurrentLang }
})