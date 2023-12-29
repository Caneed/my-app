<template>
    <div>
        <lay-exception status="401" title="401" describe="身份认证失败">
            <template #extra>
                <lay-button @click="reFresh()">刷新</lay-button>
                <lay-button type="primary" @click="goBack()">返回</lay-button>
            </template>
        </lay-exception>
    </div>
</template>

<script setup lang="ts">
import { router } from '@/basic_service/router';

/**
 * 刷新的方法
 */
function reFresh() {
    location.reload()
}

/**
 * 返回上一页的方法
 */
function goBack() {
    router.go(-1)
}
</script>

<style scoped></style>