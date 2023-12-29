import { AxiosStatic } from "axios";
import { InjectionKey } from "vue";

// axios的provide类型key定义
export const axiosKey: InjectionKey<AxiosStatic> = Symbol('AxiosStatic')