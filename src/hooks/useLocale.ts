import { useI18n } from "vue-i18n";
import { computed } from 'vue'
import { Language } from "@/domain/basic_service/Languages";

/**
 * 国际化的自定义hooks
 * @returns i18n:i18n的实例
 * @returns currentLang:当前语言模式
 * @returns switchCurrentLang:切换当前语言模式
 * 
 */

export function useLocale() {
    // 获取i18n的实例
    const i18n = useI18n()
    /**
     * 获取当前语言
     */
    const currentLang = computed(() => {
        return i18n.locale.value
    })
    /**
     * 设置当前语言,并存入localStorages
     * @param value 想要设置的语言
     */
    const switchCurrentLang = (value: Language) => {
        i18n.locale.value = value
        localStorage.setItem('locale', value)

    }
    // 暴露出去
    return {
        currentLang, switchCurrentLang, i18n
    }
}