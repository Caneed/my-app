/**
 * 响应数据的接口
 * @member msg 消息
 * @member code 错误码
 * @member data 数据
 */
export interface ResponseData<T> {
    msg: string
    code: string
    data: T
}