import { MessageSchema } from "@/domain/Languages";
import en from '@/basic_service/i18n/languages/en.json'
import zh_CN from '@/basic_service/i18n/languages/zh_CN.json'
import spain from '@/basic_service/i18n/languages/spain.json'
import fr from '@/basic_service/i18n/languages/fr.json'

/**
 * i18n信息组成
 */
export const messages: Record<string, MessageSchema> = {
    en, zh_CN, spain, fr
}