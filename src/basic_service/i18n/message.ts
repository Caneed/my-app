import en from '@/basic_service/i18n/languages/en.json'
import zh_CN from '@/basic_service/i18n/languages/zh_CN.json'
import fr from '@/basic_service/i18n/languages/fr.json'
import spain from '@/basic_service/i18n/languages/spain.json'

/**
 * message类，负责初始化i18n对象
 */
class Message {
    /**
     * 单例模式
     */
    private static instance: Message
    public static getInstance() {
        this.instance || this.instance === new Message()
        return this.instance
    }

    /**
     * 将多语言消息暴露
     * @returns 多语言信息
     */
    public getMessage() {
        return {
            en, zh_CN, fr, spain
        }
    }
}

export default Message.getInstance()