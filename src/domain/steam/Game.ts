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

/**
 * 游戏详情
 * @member about_the_game 关于
 * @member achievements 成就
 * @member background 背景图
 * @member background_raw 原图
 * @member capsule_image 胶囊图
 * @member capsule_imageV5 胶囊图V5
 * @member categories 所属种类
 * @member detailed_description 详细描述
 * @member developers 开发商
 * @member header_image 图片
 * @member platforms 平台支持
 * @member name 游戏名
 * @member price_overview 价格一览
 * @member release_date 发售时间
 * @member publishers 发行商
 * @member steam_appid appid
 */
export type GameDetails = {
    about_the_game: string
    achievements: Array<Achievement>
    background: string
    background_raw: string
    capsule_image: string
    capsule_imageV5: string
    categories: Array<Category>
    detailed_description: string
    developers: Array<string>
    header_image: string
    platforms: Record<string, boolean>
    name: string
    price_overview: Price_overview
    release_date: Release_date
    publishers: Array<string>
    steam_appid: string
}


/**
 * 成就
 * @member hightlighted 高光
 * @member total 总数
 */
type Achievement = {
    hightlighted: Array<Highlighted>
    total: number
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
    description: string
    id: number
}

/**
 * 价格一览
 * @member currency 所处的区
 * @member discount_percent 打折力度
 * @member final 最后售价
 * @member final_formatted 最后售价格式化
 * @member initial 最初售价
 * @member initial_formatted 最初售价格式化
 */
type Price_overview = {
    currency: string
    discount_percent: number
    final: number
    final_formatted: string
    initial: number
    initial_formatted: string
}

/**
 * 发行时间
 * @member coming_soon 是否为未发售游戏
 * @member date 发售时间
 */
type Release_date = {
    coming_soon: boolean
    date: string
}