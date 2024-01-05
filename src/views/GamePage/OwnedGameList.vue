<template>
    <div class="flex-col justify-evenly">
        <div v-for="(item, index) in props.gameInfo.games" :key="index" class="">
                <!-- 实际渲染部分 -->
                <div class="item" @click="toDetail(item.appid)">
                    <img :src="buildImageUrl(item)" class="bg-auto min-w-22 max-w-26 bg-auto" />
                    <div>
                        <div>{{ item.name }}</div>
                        <div>
                            {{ buildPlayTime(item.playtime_forever) + $t('hour') }}
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { GameDatas } from '@/domain/steam/Game'
import { Game } from '@/domain/steam/Game'
import { useRouter } from 'vue-router';
import { buildPlayTime } from '@/utils/gameUtils';


const router = useRouter()
// props接收
const props = defineProps<{
    gameInfo: GameDatas,
}>()


/**
 * 获取图标url
 * @param game 游戏
 */
 const buildImageUrl = (game: Game) => {
    return `https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/${game.appid}/${game.img_icon_url}.jpg`
}

/**
 * 跳转到详情页并传参appid
 * @param appid appid
 */
const toDetail = (appid: string) => {
    router.push({
        name: 'gameDetail',
        query: { appid }
    })
}
</script>

<style scoped>
.item {
    @apply border-solid flex justify-between h-20 m-8 p-2 rounded-l-lg bg-[#303841] hover:opacity-70 cursor-pointer;
}
</style>