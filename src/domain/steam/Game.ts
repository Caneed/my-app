/**
 * @type 游戏类
 * @member appid 应用id
 * @member has_community_visible_stats 在个人空间是否可见
 * @member img_icon_url 图片url
 * @member name 游戏名
 * @member playtime_disconnected 离线游玩时间
 * @member playtime_forever 总游玩时间
 * @member playtime_linux_forever linux系统中的游玩时间
 * @member playtime_mac_forever mac系统的游玩时间
 * @member playtime_windows_forever windows系统的游玩时间
 * @member rtime_last_played 上一次玩的日期
 */
export type Game = {
    appid: string
    has_community_visible_stats: boolean
    img_icon_url: string
    name: string
    playtime_disconnected: string
    playtime_forever: string
    playtime_linux_forever: string
    playtime_mac_forever: string
    playtime_windows_forever: string
    rtime_last_played: string
}

/**
 * 游戏全量数据
 * @member game_count 游戏数量
 * @member games 游戏对象的数组
 */
export type GameDatas = {
    game_count: number
    games: Array<Game>
}