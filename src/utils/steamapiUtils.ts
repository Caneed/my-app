import { getHandler } from "@/basic_service/axios/api"
import { GetOwnedGames_URL, GetRecentlyPlayedGames_URL, appdetails_URL } from "@/basic_service/axios/gameService/steamApis"
import { GetOwnedGamesReq } from "@/domain/requests/steamApis/steamAPiv1"
import getRecentlyPlayedGames from '@/domain/requests/steamApis/v1/GetRecentPlayedGames'

/**
 * 从api获取游戏数据
 */
export const getOwnedGames = async () => {
    const data = await getHandler(GetOwnedGames_URL, { ...new GetOwnedGamesReq() })
    return data.response
}

/**
 * 通过appid查询游戏详情
 * @param appids appids
 * @returns 游戏详情信息
 */
export const getGameDetails = async (appids: string) => {
    const data = await getHandler(appdetails_URL, { appids })
    return data[appids].data
}

export const getRecentPlayedGames = async ()=>{
    const data = await getHandler(GetRecentlyPlayedGames_URL,{
        ...new getRecentlyPlayedGames()
    })
    return data.response
}