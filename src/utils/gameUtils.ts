
/**
 * 分钟转换小时
 * @param time 分钟
 * @returns 小时
 */
export function buildPlayTime(time:string){
    return (parseInt(time) / 60).toFixed(2)
}