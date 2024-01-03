/**
 * 获取用户可用的api列表
 * @param key
 * @param steamId
 */
export const GetSupportedAPIList_URL: string = 'steamApi/ISteamWebAPIUtil/GetSupportedAPIList/v1/'

/**
 * 获取steam用户状态的api
 * @parm key 
 * @param steamIds
 */
export const GetPlayerSummaries_URL: string = 'steamApi/ISteamUser/GetPlayerSummaries/v2/'
/**
 * 获取用户库存的api
 * @parm key 
 * @param steamId
 */
export const GetOwnedGames_URL: string = 'steamApi/IPlayerService/GetOwnedGames/v1/'

export const GetRecentlyPlayedGames_URL: string = 'steamApi/IPlayerService/GetRecentlyPlayedGames/v1/'

export const appdetails_URL: string = 'steamStoreApi/api/appdetails/'