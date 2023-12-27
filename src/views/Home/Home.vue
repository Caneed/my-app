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
    </div>
</template>

<script setup lang="ts">

import { useMouse } from '@vueuse/core'
import { reactive } from 'vue';

const mouse = reactive(useMouse())
</script>

<style scoped></style>