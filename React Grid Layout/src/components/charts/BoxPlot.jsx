import ReactEChartsCore from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { BoxplotChart } from 'echarts/charts';
import { TooltipComponent, TitleComponent, DatasetComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { total_bill } from '/public/utils';
import { getBoxPlotData } from '/public/utils';

echarts.use(
    [TitleComponent, TooltipComponent, BoxplotChart, DatasetComponent, LegendComponent, CanvasRenderer]
);

const { boxData, outliers } = getBoxPlotData(total_bill);

const option = {
    title: [
        {
            text: "Box Plot",
            borderColor: "#999",
            borderWidth: 1,
            textStyle: {
                fontWeight: "normal",
                fontSize: 10,
                lineHeight: 15,
            },
            right: "10%",
        }
    ],
    tooltip: {},
    legend: { show: true },
    yAxis: {
        type: "category",
        data: ["Total-Balance"]
    },
    xAxis: {
        type: "value",
        name: "Rupees",
        splitArea: {
            show: false
        },
        splitLine: { show: false },
        scale: true

    },
    series: [
        {
            name: "Total-Balance Box Plot",
            type: "boxplot",
            data: [boxData]
        },
        {
            name: "Total-Balance Outliers",
            type: "scatter",
            data: outliers.map(outlier => [outlier, 0]),
            symbolSize: 7,
            symbol: 'circle',
            itemStyle: {
                color: 'black',
            },
        }
    ],
}


export default function BoxPlot() {
    return (
        <ReactEChartsCore
            echarts={echarts}
            option={option}
            notMerge={true}
            lazyUpdate={true}
            className='!h-full !w-full border-2 rounded-xl bg-slate-100 px-12 py-8 shadow-lg'
        />
    )
}