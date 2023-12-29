import en from '@/basic_service/i18n/languages/en.json'
/**
 * @enum 语言枚举
 * 中，英，法，西班牙语
 */
export enum LangEnum {
    zh_CN = 'zh_CN',
    en = 'en',
    fr = 'fr',
    spain = 'spain'
}

/**
 * 语言类型
 */
export type Language = LangEnum.zh_CN | LangEnum.en | LangEnum.fr | LangEnum.spain

/**
 * 消息模板类型
 */
export type MessageSchema = typeof en