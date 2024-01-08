<template>
    <div>{{ props.recentGames }}</div>
    <BarChart v-if="recentGames.total_count !== 0" :x-axis-text="getGameNames()" :data="getGameTimes()"></BarChart>
</template>

<script setup lang="ts">
import BarChart from '@/components/charts/BarChart.vue';
import { RecentGame, RecentGames } from '@/domain/steam/RecentGames';
import { buildPlayTime } from '@/utils/gameUtils';

const props = defineProps<{
    recentGames: RecentGames
}>()

const getGameNames = () => {
    return props.recentGames.games.map((item: RecentGame) => item.name)
}
const getGameTimes = () => {
    return props.recentGames.games.map((item: RecentGame) => item.playtime_2weeks).map((item: string) => {
        return buildPlayTime(item)
    })
}
</script>

<style scoped></style>@/hooks/useCharts