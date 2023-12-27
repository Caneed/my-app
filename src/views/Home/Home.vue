<template>
    <div>
        <h1>Home</h1>
        <lay-icon type="layui-icon-face-smile"></lay-icon> &nbsp;
        <lay-icon type="layui-icon-face-smile" color="#009688"></lay-icon> &nbsp;
        <lay-icon type="layui-icon-face-smile" color="#5FB878"></lay-icon> &nbsp;
        <lay-icon type="layui-icon-face-smile" color="#1E9FFF"></lay-icon> &nbsp;
        <lay-icon type="layui-icon-face-smile" color="#FFB800"></lay-icon> &nbsp;
        <lay-icon type="layui-icon-face-smile" color="#FF5722" size="24px"></lay-icon> &nbsp;
        <div>{{ mouse.x }}</div>
        <div>{{ mouse.y }}</div>
        <div>{{ currentLang }}</div>
        <button @click="switchCurrentLang('en')"> click</button>
    </div>
</template>

<script setup lang="ts">

import { useMouse } from '@vueuse/core'
import { reactive } from 'vue';
import { useInitStore } from '@/basic_service/stores';
import { storeToRefs } from 'pinia';

const store = useInitStore()
const { currentLang } = storeToRefs(store)
const {switchCurrentLang} = store
const mouse = reactive(useMouse())
</script>

<style scoped></style>