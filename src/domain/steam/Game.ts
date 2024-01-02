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

export type GameDetails = {
    about_the_game: string
    achievements: Array<Achievement>
}


/**
 * 成就
 * @member hightlighted 高光
 * @member total 总数
 * @member background 背景图
 * @member background_raw 原图
 * @member caspule_image 胶囊图
 * @member caspule_imageV5 胶囊图V5
 */
type Achievement = {
    hightlighted: Array<Highlighted>
    total: number
    background:string
    background_raw:string
    caspule_image:string
    caspule_imageV5:string
    categories:Array<Category>
}


/**
 * 高光
 * @member name 名字
 * @member path 图片路径
 */
type Highlighted = {
    name: string
    path: string
}

/**
 * 分类
 * @member description 描述
 * @member id id
 */
type Category = {
    description:string
    id:number
}