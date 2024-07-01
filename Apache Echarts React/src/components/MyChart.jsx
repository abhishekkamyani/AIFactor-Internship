import ReactECharts from 'echarts-for-react'; // Import the wrapper
// import * as echarts from 'echarts'; // Import ECharts itself
const option = {
  title: {
    text: 'Basic Bar Chart'
  },
  legend: { show: true },
  tooltip: {},
  xAxis: {
    data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
  },
  yAxis: {},
  series: [
    {
      name: 'sales',
      // type: 'scatter',
      type: 'bar',
      data: [5, 20, 36, 10, {
        value: 30,
        itemStyle: {
          color: "green",
          opacity: 0.5,
        }
      }, 20],
      itemStyle: {
        barBorderRadius: 5,
        borderWidth: 3,
        borderType: "dashed",
        borderColor: "red",
        shadowColor: "white",
        shadowBlur: 6,
      },
      // barGap: '200%',
      // barCategoryGap: '40%'
      // barWidth: "50%"
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(0,0,0, 0.5)'
      },
      label:{
        show: true,
        // position: 'top',
        textStyle: {
          fontSize: 20
        }
      }
    },
    // {
    //   type: "line",
    //   name: "line",
    //   data: [5, 20, 36, 10, 30, 20]
    // }
  ]
};

const optionStackedBar = {
  title: {
    text: 'Basic Bar Chart'
  },
  tooltip: {},
  legend: { data: ["2020", "2021"] },
  xAxis: {
    data: ['Lenovo', 'Dell', 'Android', 'Samsung']
  },
  yAxis: {},
  series: [
    {
      name: '2020',
      type: 'bar',
      data: [50, 80, 160, 120],
      stack: "total"
    },
    {
      name: '2021',
      type: 'bar',
      data: [70, 60, 300, 190],
      stack: "total"
    },
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
