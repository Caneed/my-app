import { BaseSteamReqV1 } from "../BaseRequest";

/**
 * @class 获取用户拥有的游戏请求参数类
 * @member include_appinfo 是否获取更多的游戏数据(名称，图标等)默认为true
 * @member include_played_free_games 是否包含免费游戏
 * @member appids_filter 将结果限制在传入的应用中
 * @member language 语言
 */
class GetOwnedGames extends BaseSteamReqV1 {
    public include_appinfo: boolean
    public include_played_free_games: boolean
    public appids_filter?: string
    constructor() {
        super()
        this.include_appinfo = true
        this.include_played_free_games = false
    }
}

export default GetOwnedGames