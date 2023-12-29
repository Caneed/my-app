<template>
    <div>
        <GameCarousel />
        <div>{{ $t('hello') }}</div>
    </div>
</template>

<script setup lang="ts">
import GameCarousel from '@/components/games/GameCarousel.vue';
import { queryUserGamesInfo } from '@/basic_service/gameService/steamApis'
import GetOwnedGames from '@/domain/requests/steamApis/v1/GetOwnedGames'
import { inject, onMounted } from 'vue';
import { axiosKey } from '@/domain/basic_service/injectKeys';



function getAxios() {
    const axios = inject(axiosKey)
    if (!axios) {
        throw new Error(`could not resolve empty object axios`)
    }
    return axios
}

onMounted(async () => {
    const res = await getAxios().get(queryUserGamesInfo, {
        params: {
            ...new GetOwnedGames
        }
    })
    console.log(res)
})
</script>

<style scoped></style>