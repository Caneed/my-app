<template>
    <div ref="barChart" style="width: 500px; height: 600px;"></div>
</template>

<script setup lang="ts">
import { nextTick, ref } from 'vue';
import { ECOption } from '@/domain/basic_service/chartOption'
import { drawCharts } from '@/utils/chartsUtils';

const barChart = ref<HTMLElement>()
const props = defineProps<{
    xAxisText?: string[],
    data?: Array<string>
}>()

const option: ECOption = {
    xAxis: {
        data: props.xAxisText
    },
    yAxis: {},
    series: [
        {
            type: 'bar',
            data: props.data
        }
    ]
}

nextTick(() => {
    drawCharts(option, barChart.value)
})

</script>

<style scoped></style>