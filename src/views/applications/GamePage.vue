<template>
    <div class="flex flex-wrap justify-evenly">
        <div v-for="(item, index) in gameInfo.games" :key="index">
            <div class="min-h-24 max-h-36 min-w-36 max-w-40 border-solid border-gray-950 flex-col">
                <span>{{ item.name }}</span>
                <span>
                    {{ item.playtime_forever }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { queryUserGamesInfo } from '@/basic_service/axios/gameService/steamApis'
import GetOwnedGames from '@/domain/requests/steamApis/v1/GetOwnedGames'
import { getHandler } from '@/basic_service/axios/api'
import { onBeforeMount, ref } from 'vue';
import GameDatas from '@/domain/steam/Game';



/**
 * 游戏数据并初始化为空
 */
let gameInfo = ref<GameDatas>({
    game_count: 0,
    games: []
})

/**
 * 从api获取游戏数据
 */
const getOwnedGameList = async () => {
    const data = await getHandler(queryUserGamesInfo, { ...new GetOwnedGames() })
    return data.response
}

onBeforeMount(async () => {
    await getOwnedGameList()
    gameInfo.value = await getOwnedGameList()
})
</script>

<style scoped></style>@/basic_service/request/gameService/steamApis