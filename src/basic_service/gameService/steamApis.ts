/**
 * 获取steam用户状态的api
 * @parm key 
 * @param steamIds
 */
export const queryUserInfo:string = 'steamApi/ISteamUser/GetPlayerSummaries/v2/'
/**
 * 获取用户库存的api
 * @parm key 
 * @param steamId
 */
export const queryUserGamesInfo:string = 'steamApi/IPlayerService/GetOwnedGames/v1/'

/**
 * 获取用户最近游玩的游戏
 * @param key
 * @param steamId
 * @param count 游戏数量
 */
export const queryUserRecentPlayedGames:string = 'steamApi/IPlayerService/GetRecentlyPlayedGames/v1/'