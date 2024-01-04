<template>
    <img :src="gameDetail?.background" alt="">
    <div>{{ $t('game.name')+$t('colon')+gameDetail?.name}}</div>
    <div>{{ $t('game.about_the_game')+$t('colon')+gameDetail?.about_the_game}}</div>
    <div>{{ $t('game.platform_support')+$t('colon') }}</div>
    <div v-for="(isSupport,index) in gameDetail?.platforms" :key="index">
    {{ isSupport }}</div>
    <div v-if="isRelease(gameDetail?.release_date.coming_soon)"> {{$t('game.release_date')+$t('colon')+gameDetail?.release_date.date}}</div>
</template>

<script setup lang="ts">
import { GameDetails } from '@/domain/steam/Game';
import { getGameDetails } from '@/utils/steamapiUtils';
import { onBeforeMount, ref } from 'vue';
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router';

// 游戏详情数据
let gameDetail=ref<GameDetails>()

// 判断游戏是否发行
const isRelease=(comming_soon:boolean|undefined):boolean=>{
    return comming_soon===true?false:true
}

// 路由钩子
const route: RouteLocationNormalizedLoaded =useRoute()


onBeforeMount(async()=>{    
    gameDetail.value = await getGameDetails(route.query.appid as string)
})

</script>

<style scoped>
</style>