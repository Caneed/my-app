<template>
    <div>
        <button @click="toGames()">games</button>
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';


const router = useRouter()
const toGames=()=>{
    router.push('/games')
}
</script>

<style scoped></style>