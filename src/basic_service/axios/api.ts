import axiosInstance from "./axiosInstance";
import { ResponseData } from "@/domain/response/ResponseData";

// axios.get重写
export const getHandler = async <T, R>(url: string, params?: R) => {
    const response = await axiosInstance.get(url, { params })
    return response.data
}

// axios.post重写
export const postHandler = async <T, R>(url: string, params?: R) => {
    const response = await axiosInstance.post(url, { params })
    return response.data
}