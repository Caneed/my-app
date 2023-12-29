import { key, steamId } from "@/basic_service/gameService/steamKey"

/**
 * 基础steamApi的请求参数(v1版本)
 */
export class BaseSteamReqV1 {
    private steamId: string
    private key: string
    constructor() {
        this.steamId = steamId
        this.key = key
    }
}

/**
 * 基础steamApi的请求参数(v2版本)
 */
export class BaseSteamReqV2 {
    private steamIds: string
    private key: string
    constructor() {
        this.steamIds = steamId
        this.key = key
    }
}