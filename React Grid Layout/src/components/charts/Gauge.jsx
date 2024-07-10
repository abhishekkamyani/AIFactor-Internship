import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

// Import only necessary ECharts modules
import * as echarts from "echarts/core";
import { GaugeChart } from "echarts/charts";
import { TitleComponent, TooltipComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

// Register the required components
echarts.use([TitleComponent, TooltipComponent, GaugeChart, CanvasRenderer]);

const Gauge = () => {
  const [value, setValue] = useState(100); 

  useEffect(() => {
    const interval = setInterval(updateGaugeValue, 1000);

    return () => clearInterval(interval);
  }, []);


  const updateGaugeValue = () => {
    const newValue = Math.floor(Math.random() * 101);
    setValue(newValue);
  };

  const option = {
    title: {
      text: "Gauge Chart",
      left: "5%",
      top: "5%",
    },
    tooltip: {
    },
    series: [
      {
        name: "Business Indicator",
        type: "gauge",
        data: [{ value: value }],
      },
    ],
  };

  return (
      <ReactECharts
        echarts={echarts}
        option={option}
        className="!w-full !h-full"
        // notMerge={true} // Ensure updates replace previous data
      />
  );
};

export default Gauge;
