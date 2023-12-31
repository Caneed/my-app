<template>
    <div class="flex flex-wrap justify-evenly">
        <div v-for="(item, index) in data.games" :key="index">
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
import { queryUserGamesInfo } from '@/basic_service/gameService/steamApis'
import GetOwnedGames from '@/domain/requests/steamApis/v1/GetOwnedGames'
import { inject, onBeforeMount, ref } from 'vue';
import { axiosKey } from '@/domain/basic_service/injectKeys';
import GameDatas from '@/domain/steam/Game';
// import  GameDatas from '@/domain/steam/Game';


/**
 * 初始化axios
 */
function getAxios() {
    const axios = inject(axiosKey)
    if (!axios) {
        throw new Error(`could not resolve empty object axios`)
    }
    return axios
}
/**
 * 游戏数据并初始化为空
 */
let data = ref<GameDatas>({
    game_count:0,
    games:[]
})

/**
 * 从api获取游戏数据
 */
const getOwnedGameList = async () => {
    const res = await getAxios().get(queryUserGamesInfo, {
        params: {
            ...new GetOwnedGames()
        }
    })
    return res.data.response
}

onBeforeMount(async () => {
    data.value = await getOwnedGameList()
})
</script>

<style scoped></style>