<template>
    <div>{{ props.recentGames }}</div>
    <BarChart v-if="recentGames.total_count !== 0" :x-axis-text="getGameNames()" :data="getGameTimes()" class="w-96 h-96"></BarChart>
</template>

<script setup lang="ts">
import BarChart from '@/components/charts/BarChart.vue';
import { RecentGame, RecentGames } from '@/domain/steam/RecentGames';
import { buildPlayTime } from '@/utils/gameUtils';

// 参数
const props = defineProps<{
    recentGames: RecentGames
}>()

// 游戏名映射
const getGameNames = () => {
    return props.recentGames.games.map((item: RecentGame) => item.name)
}
// 游戏时间映射
const getGameTimes = () => {
    return props.recentGames.games.map((item: RecentGame) => item.playtime_2weeks).map((item: string) => {
        return buildPlayTime(item)
    })
}
</script>

<style scoped></style>