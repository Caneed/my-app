export type RecentGames = {
  total_count:number
  games:Array<RecentGame>
}

/**
 * 最近游戏
 * @member appid appid
 * @member name 名字
 * @member playtime_2weeks 近两周时间
 * @member playtime_forever 总时间
 * @member img_icon_url 图标url
 * @member playtime_linux_forever linux系统上的时间
 * @member playtime_mac_forever mac 系统上的时间
 * @member playtime_windows_forever win上的总时间
 */
type RecentGame = {
  appid:string
  name:string
  playtime_2weeks:string
  playtime_forever:string
  img_icon_url:string
  playtime_windows_forever:string
  playtime_mac_forever:string
  playtime_linux_forever:string
}