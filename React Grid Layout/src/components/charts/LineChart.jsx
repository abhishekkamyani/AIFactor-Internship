import { format } from "date-fns";
import EChartsReact from "echarts-for-react";
import * as echarts from "echarts/core";
import { useEffect, useRef, useState } from "react";

export default function LineChart({ data = [], title_text, isLoading, isError }) {
  const myData = data.map((item) => {
    return {
      time: format(item.dt_txt, "hh:mmaa"),
      date: format(item.dt_txt, "MM/dd/yyyy"),
      temp: item.main.temp,
    };
  });

  const option = {
    title: { text: title_text },
    legend: { show: true, right: 0 },
    tooltip: {},
    xAxis: {
      // data: myData.map(item => item.time + "/n" + item.date)
      data: myData.map((item) => `${item.date}\n${item.time}`),
      style: { lineHeight: "20px" },
    },
    yAxis: {},
    series: [
      {
        name: "Temperature",
        data: myData.map((item) => item.temp),
        type: "line",
        smooth: true,
      },
    ],
  };

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (isLoading) {
        chartRef.current.getEchartsInstance().showLoading();
      } else {
        chartRef.current.getEchartsInstance().hideLoading();
      }

      if (isError) {
        alert("Sorry, weather is not available for this city")
      }
    }
  }, [isLoading]);

  return (
    <EChartsReact option={option} className="!w-full !h-full" ref={chartRef} />
  );
}
