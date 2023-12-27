import { createI18n } from 'vue-i18n'

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
}

export default I18nMessage.getInstance()