/**
 * 获取用户可用的api列表
 * @param key
 * @param steamId
 */
export const querySupportedApiList: string = 'steamApi/ISteamWebAPIUtil/GetSupportedAPIList/v1/'

/**
 * 获取steam用户状态的api
 * @parm key 
 * @param steamIds
 */
export const queryUserInfo: string = 'steamApi/ISteamUser/GetPlayerSummaries/v2/'
/**
 * 获取用户库存的api
 * @parm key 
 * @param steamId
 */
export const queryUserGamesInfo: string = 'steamApi/IPlayerService/GetOwnedGames/v1/'

export const queryRecentPlayedGame: string = 'steamApi/IPlayerService/GetRecentlyPlayedGames/v1/'

export const queryGameDetail: string = 'steamStoreApi/api/appdetails/'