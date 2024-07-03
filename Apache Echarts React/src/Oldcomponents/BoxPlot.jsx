import ReactECharts from "echarts-for-react"; // Import the wrapper

export default function BoxPlot() {

    var data = [
        [0, 10, 900, 1070, 935],
        [960, 830, 960, 1080, 960],
        [880, 790, 920, 1070, 990],
        [890, 810, 970, 1140, 1000],
        [870, 810, 950, 1120, 970]
      ];
  
      var option = {
        title: {
          text: 'Box Plot'
        },
        tooltip: {
          
        },
        legend: { show: true, right: "0" },
        xAxis: {
          type: 'category',
          data: ['Category A', 'Category B', 'Category C', 'Category D', 'Category E']
        },
        yAxis: {
          type: 'value',
          name: 'Values'
        },
        series: [
          {
            name: 'Box Plot',
            type: 'boxplot',
            data: data,
            
          }
        ]
      };
  

   return <ReactECharts option={option} style={{ height: 400 }} />;
}
