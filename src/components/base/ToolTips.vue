<template>
  <div class="min-h-10 max-h-20 block">
    <div class="min-h-10 max-h-20 w-full fixed bg-slate-600 top-0 flex items-center justify-around">
      <lay-button v-if="commonStore.getRouteLength() !== 0" type="normal" @click="executeBack()">{{ $t('back') }}</lay-button>
    </div>
  </div>
  <lay-backtop></lay-backtop>
</template>

<script setup lang="ts">
import { useCommonStore } from '@/basic_service/stores';
import { useRouter } from 'vue-router';

const commonStore = useCommonStore()
const router = useRouter()

const executeBack = () => {
  commonStore.popRouteHistory()
  router.back()
}
</script>

<style scoped></style>