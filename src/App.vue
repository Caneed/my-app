<template>
  <div>
    <ToolTips></ToolTips>
    <router-view link="/" class="h-full w-full"></router-view>
  </div>
</template>

<script setup lang="ts">
import ToolTips from '@/components/base/ToolTips.vue'
</script>
<style scoped></style>
