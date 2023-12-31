import { ECOption } from "@/domain/basic_service/chartOption"
import useCharts from "@/hooks/useCharts"


/**
 * 画图
 * @param option chartsOption
 * @param dom 要挂载的DOM结点
 */
export const drawCharts = (option: ECOption, dom: HTMLElement | undefined, theme?: string) => {
    const chart = useCharts().init(dom,theme)
    chart.setOption(option)
    chart.resize()
    window.addEventListener('resize', () => {
        chart.resize()
    })
}