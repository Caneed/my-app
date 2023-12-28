<template>
    <div>
        <lay-exception status="401" title="401" describe="身份认证失败">
            <template #extra>
                <lay-button>刷新</lay-button>
                <lay-button type="primary">返回</lay-button>
            </template>
        </lay-exception>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>