import axios, { AxiosInstance } from "axios";
// 从环境变量获取baseUrl和超时时间
const baseURL = import.meta.env.MODE === 'production' ? '' : import.meta.env.BASE_URL
const timeout = import.meta.env.VITE_REQUEST_TIMEOUT

// const message = ()=>{
//     layer
// }
// axios实例
const axiosInstance: AxiosInstance = axios.create({
    baseURL,
    timeout
})

// 请求拦截器
axiosInstance.interceptors.request.use((config) => {
    return config
}, (error) => {
    return Promise.reject(error)
})

// 响应拦截器
axiosInstance.interceptors.response.use((response) => {
    return response
}, (error) => {
    return error
})

// 导出
export default axiosInstance