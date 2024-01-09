<template>
    <div ref="barChart" class="w-fit h-fit"></div>
</template>

<script setup lang="ts">
import { getCurrentInstance, nextTick, ref } from 'vue';
import { ECOption } from '@/domain/basic_service/chartOption'
import { drawCharts } from '@/utils/chartsUtils';

// 获取国际化实例
const _this = getCurrentInstance()
// 获取组件实例
const barChart = ref<HTMLElement>()
// 组件传值
const props = defineProps<{
    xAxisText: string[],
    data: Array<string>
}>()

// 图表选项
const option: ECOption = {
    title:{
        text:_this?.appContext.config.globalProperties.$t('game.labels.playtime')
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        axisLabel: { interval: 0, rotate: 30 },
        data: props.xAxisText,
        axisTick: {
            alignWithLabel: true
        }
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: _this?.appContext.config.globalProperties.$t('game.labels.playtime'),
            type: 'bar',
            barWidth: '60%',
            data: props.data
        }
    ]
}

/**
 * nextTick中渲染，确保DOM为最新的DOM
 */
nextTick(() => {
    drawCharts(option, barChart.value, 'dark')
})

</script>

<style scoped></style>