<template>
    <div>121312312</div>
</template>

<script setup lang="ts">
import { router } from '@/basic_service/router';
import { onBeforeMount } from 'vue';
import { onMounted } from 'vue';

onBeforeMount(()=>{
    console.log(router.currentRoute.value.query)
    
})

onMounted(()=>{
    console.log(router)
})

</script>

<style scoped></style>