<template>
    <div class="flex flex-wrap justify-evenly">
        <div v-for="(item, index) in gameInfo.games" :key="index" class="">
            <!-- 骨架屏 -->
            <lay-skeleton :loading="loading" animated>
                <!-- 骨架屏插槽部分 -->
                <template #skeleton>
                    <div class="min-h-24 max-h-36 min-w-36 max-w-40 border-solid border-gray-950 flex-col">
                        <lay-skeleton-item type="image" class="min-h-6 max-h-10 min-w-6 max-w-10" />
                        <lay-skeleton-item type="p"/>
                        <lay-skeleton-item type="p"/>
                    </div>
                </template>
                <!-- 实际渲染部分 -->
                <div class="min-h-24 max-h-36 min-w-36 max-w-40 border-solid border-gray-950 flex-col">
                    <img :src="buildImageUrl(item)" class="min-h-6 max-h-10 min-w-6 max-w-10 bg-auto" />
                    <span>{{ item.name }}</span>
                    <span>
                        {{ item.playtime_forever }}
                    </span>
                </div>
            </lay-skeleton>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { Game, GameDatas } from '@/domain/steam/Game';
import { getOwnedGames } from '@/utils/steamapiUtils'

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

onBeforeMount(async () => {
    getOwnedGames().then(res => {
        if (res) {
            gameInfo.value = res
            setTimeout(() => {
                loading.value = false
            }, 1500)
        }
    })
})

</script>

<style scoped></style>