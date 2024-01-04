<template>
    <div class="flex-col justify-evenly">
        <div v-for="(item, index) in gameInfo.games" :key="index" class="">
            <!-- 骨架屏 -->
            <lay-skeleton :loading="loading" animated>
                <!-- 骨架屏插槽部分 -->
                <template #skeleton>
                    <div class="item">
                        <lay-skeleton-item type="image" class="min-h-6 max-h-10 min-w-6 max-w-10" />
                        <lay-skeleton-item type="p" />
                        <lay-skeleton-item type="p" />
                    </div>
                </template>
                <!-- 实际渲染部分 -->
                <div class="item" @click="toDetail(item.appid)">
                    <img :src="buildImageUrl(item)" class="bg-auto min-w-22 max-w-26 bg-auto" />
                    <div>
                        <div>{{ item.name }}</div>
                        <div>
                            {{ buildPlayTime(item) + $t('hour') }}
                        </div>
                    </div>
                </div>
            </lay-skeleton>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { Game, GameDatas } from '@/domain/steam/Game';
import { getOwnedGames } from '@/utils/steamapiUtils'
import { router } from '@/basic_service/router';
// 是否正在加载
let loading = ref<boolean>(true)
/**
 * 游戏数据并初始化为空
 */
let gameInfo = ref<GameDatas>({
    game_count: 0,
    games: []
})

/**
 * 获取图标url
 * @param game 游戏
 */
const buildImageUrl = (game: Game) => {
    return `https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`
}

const toDetail = (appid: string) => {
    router.push({
        name: 'gameDetail',
        query: { appid }
    })
}

/**
 * 返回游戏时间(分钟-小时)保留两位
 * @param game 游戏
 */
const buildPlayTime = (game: Game) => {
    return (parseInt(game.playtime_forever) / 60).toFixed(2)
}

/**
 * 根据游戏时间进行排序
 */
const sortGames = () => {
    gameInfo.value.games.sort((prev: Game, next: Game) => {
        return parseInt(next.playtime_forever) - parseInt(prev.playtime_forever)
    })
}

onBeforeMount(async () => {
    getOwnedGames().then(res => {
        if (res) {
            gameInfo.value = res
            sortGames()
            setTimeout(() => {
                loading.value = false
            }, 1500)
        }
    })
})

</script>

<style scoped>
.item {
    @apply border-solid flex justify-between h-20 m-8 p-2 rounded-l-lg bg-[#303841] hover:opacity-70 cursor-pointer;
}
</style>