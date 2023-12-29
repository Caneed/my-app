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