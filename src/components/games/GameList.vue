<template>
    <div>
        <div>{{ data.game_count }}</div>
        <div v-for="(item, index) in data" :key="index">
            {{ item }}
        </div>
    </div>
</template>

<script setup lang="ts">
// import Game from '@/domain/steam/Game';
import Game from '@/domain/steam/Game';
import { onMounted } from 'vue';


const data = defineProps<{
    games: Array<Game>
    game_count: number
}>()

onMounted(() => {
    console.log(data)
})
</script>

<style scoped></style>