<template>
    <div ref="pieChart"  style="width: 500px; height: 600px;"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import useCharts from '@/hooks/useCharts'
import { ECOption } from '@/domain/basic_service/chartOption'
import { onMounted } from 'vue';

const echarts = useCharts()
const pieChart = ref()
const props = defineProps<{
    xAxisText?: string[],
    data?: Array<number>
}>()
console.log(props.xAxisText);

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



onMounted(() => {
    setTimeout(() => {
        echarts.init(pieChart.value).setOption(option)
    }, 1000);
})


</script>

<style scoped></style>