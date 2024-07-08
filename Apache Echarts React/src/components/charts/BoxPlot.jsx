import ReactEChartsCore from 'echarts-for-react';
import * as echarts from 'echarts/core';
import { BoxplotChart } from 'echarts/charts';
import { TooltipComponent, TitleComponent, DatasetComponent, LegendComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use(
    [TitleComponent, TooltipComponent, BoxplotChart, DatasetComponent, LegendComponent, CanvasRenderer]
);

export default function BoxPlot({ data }) {
    const { boxData, outliers } = data;
    const option = {
        title: [
            // {
            //     text: "Box Plot",
            //     borderColor: "#999",
            //     borderWidth: 1,
            //     textStyle: {
            //         fontWeight: "normal",
            //         fontSize: 10,
            //         lineHeight: 15,
            //     },
            //     right: "10%",
            // }
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
                data: outliers,
                symbolSize: 7,
                symbol: 'circle',
                itemStyle: {
                    color: 'black',
                },
            }
        ],
    }
    return (
        <ReactEChartsCore
            echarts={echarts}
            option={option}
            notMerge={true}
            lazyUpdate={true}
            className='!h-full !w-full'
        />
    )
}