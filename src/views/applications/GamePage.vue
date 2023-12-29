<template>
    <div>
        {{ games }}
    </div>
</template>

<script setup lang="ts">
import { queryUserGamesInfo } from '@/basic_service/gameService/steamApis'
import GetOwnedGames from '@/domain/requests/steamApis/v1/GetOwnedGames'
import { inject, onMounted, reactive } from 'vue';
import { axiosKey } from '@/domain/basic_service/injectKeys';
// import Game from '@/domain/steam/Game'

let games = reactive([])

function getAxios() {
    const axios = inject(axiosKey)
    if (!axios) {
        throw new Error(`could not resolve empty object axios`)
    }
    return axios
}

onMounted(async () => {
    games = await getOwnedGameList()
    console.log(games)
})

const getOwnedGameList = async () => {
    const res = await getAxios().get(queryUserGamesInfo, {
        params: {
            ...new GetOwnedGames()
        }
    })
    console.log(res.data);

    return res.data.response
}
</script>

<style scoped></style>