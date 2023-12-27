import { createI18n } from "vue-i18n";
import en from '@/basic_service/i18n/languages/en.json'
import { Language } from "@/domain/types/LangType";
import { useInitStore } from "../stores";

type MessageSchema = typeof en

const initStore = useInitStore()

export const i18n = createI18n<[MessageSchema], Language>({
    locale: initStore.getCurrentLang()
})