import en from '@/basic_service/i18n/languages/en.json'
import zh_CN from '@/basic_service/i18n/languages/zh_CN.json'
import fr from '@/basic_service/i18n/languages/fr.json'
import spain from '@/basic_service/i18n/languages/spain.json'
/**
 * i18n信息获取的类
 */
class I18nMessage {
    private static instance: I18nMessage
    /**
     * 单例模式
     */
    public static getInstance(): I18nMessage {
        this.instance || this.instance === new I18nMessage()
        return this.instance
    }

    /**
     * 获取i18n信息
     */
    public static getI18nMessage() {
        const messages = {
            'en': en,
            'zh_CN':zh_CN,
            'fr':fr,
            'spain':spain
        }
        return messages
    }

}

export default I18nMessage.getInstance()