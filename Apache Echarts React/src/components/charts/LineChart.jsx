import { format } from 'date-fns';
import EChartsReact from 'echarts-for-react';

export default function LineChart({ data = [], title_text }) {
  const myData = data.map(item => {
    return {
      time: format(item.dt_txt, 'hh:mmaa'),
      date: format(item.dt_txt, 'MM/dd/yyyy'),
      temp: item.main.temp
    }
  });

  const option = {
    title: { text: title_text },
    legend: { show: true },
    tooltip: {},
    xAxis: {
      // data: myData.map(item => item.time + "/n" + item.date)
      data: myData.map(item => `${item.date}\n${item.time}`),
      style: {lineHeight: "20px"}
    },
    yAxis: {},
    series: [
      {
        name: "Temperature",
        data: myData.map(item => item.temp),
        type: "line"
      }
    ]
  }

  return (
    <EChartsReact option={option} className='!w-full !h-full' />
  )
}