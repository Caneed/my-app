import { BaseSteamReqV1 } from "./BaseRequest"
/**
 * @class 获取用户拥有的游戏请求参数类
 * @member include_appinfo 是否获取更多的游戏数据(名称，图标等)默认为true
 * @member include_played_free_games 是否包含免费游戏
 * @member appids_filter 将结果限制在传入的应用中
 * @member language 语言
 */
export class GetOwnedGamesReq extends BaseSteamReqV1 {
    public include_appinfo: boolean
    public include_played_free_games: boolean
    public appids_filter?: string
    constructor() {
        super()
        this.include_appinfo = true
        this.include_played_free_games = false
    }
}

/**
 * 获取用户等级
 * @class
 */
export class GetSteamAuthLevelReq extends BaseSteamReqV1 {
    constructor() {
        super()
    }
}

/**
 * 获取最近游玩的游戏
 * @member count 可选，未设置为全部
 */
export class GetRecentlyPlayedGamesReq extends BaseSteamReqV1 {
    public count?: string
    constructor(count?: string) {
        super()
        if (count) {
            this.count = count
        }
    }
}