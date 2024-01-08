<template>
    <lay-tab type="brief" v-model="currentPage" :activeBarTransition="true">
        <lay-tab-item title="库存" layui-show id="1">
            <div style="padding:20px">
                <OwnedGameList :gameInfo="gameInfo"></OwnedGameList>
            </div>
        </lay-tab-item>
        <lay-tab-item title="最近游玩" layui-show id="2">
            <div style="padding:20px">
                <RecentPlayed :recentGames="recentGames"></RecentPlayed>
            </div>
        </lay-tab-item>
    </lay-tab>
</template>

<script setup lang="ts">
import RecentPlayed from './RecentPlayed.vue';
import OwnedGameList from './OwnedGameList.vue'
import { onBeforeMount, ref } from 'vue';
import { Game, GameDatas } from '@/domain/steam/Game';
import { RecentGames } from '@/domain/steam/RecentGames'
import { getOwnedGames, getRecentPlayedGames } from '@/utils/steamapiUtils'

//当前页面加载组件
const currentPage = ref('1')

// 游戏库存
let gameInfo = ref<GameDatas>({
    game_count: 0,
    games: []
})
// 创建最近游戏
let recentGames = ref<RecentGames>({
    total_count: 0,
    games: []
})

/**
 * 根据游戏时间进行排序
 */
const sortGames = () => {
    gameInfo.value.games.sort((prev: Game, next: Game) => {
        return parseInt(next.playtime_forever) - parseInt(prev.playtime_forever)
    })
}

/**
 * 初始化库存
 */
const initOwnedGames = () => {
    getOwnedGames().then(res => {
        if (res) {
            gameInfo.value = res
            sortGames()
        }
    })
}

/**
 * 初始化最近游玩
 */
const initRecentPlayed = async () => {
    recentGames.value = await getRecentPlayedGames()
}

onBeforeMount(async () => {
    initOwnedGames()
    initRecentPlayed()
})

</script>

<style scoped></style>