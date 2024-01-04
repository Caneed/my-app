import { BaseSteamReqV1 } from '../BaseRequest';


class getRecentlyPlayedGames extends BaseSteamReqV1 {
  public count?:string
  constructor(count?:string){
    super()
    if(count){
      this.count = count
    }
  }
}

export default getRecentlyPlayedGames