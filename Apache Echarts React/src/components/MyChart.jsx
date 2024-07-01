import ReactECharts from 'echarts-for-react'; // Import the wrapper
import * as echarts from 'echarts'; // Import ECharts itself
const option = {
    title: {
      text: 'Basic Bar Chart'
    },
    tooltip: {},
    xAxis: {
      data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
    },
    yAxis: {},
    series: [
      {
        name: 'sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  };
export default function MyChart() {
  return (
    <ReactECharts
    option={option}
    style={{ height: 400 }}
  />
  )
}
