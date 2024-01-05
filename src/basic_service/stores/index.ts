import { createPinia } from "pinia";

const pinia = createPinia()

export default pinia
// 统一导出stores
export * from '@/basic_service/stores/modules/common'