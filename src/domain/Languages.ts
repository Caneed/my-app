import en from '@/basic_service/i18n/languages/en.json'
/**
 * @enum 语言枚举
 * 中，英，法，西班牙语
 */
export enum Lang {
    Lang_CN = 'zh_CN',
    Lang_En = 'en',
    Lang_Fr = 'fr',
    Lang_Spain = 'spain'
}

/**
 * 语言类型
 */
export type Language = Lang.Lang_CN | Lang.Lang_En | Lang.Lang_Fr | Lang.Lang_Spain

/**
 * 消息模板类型
 */
export type MessageSchema = typeof en