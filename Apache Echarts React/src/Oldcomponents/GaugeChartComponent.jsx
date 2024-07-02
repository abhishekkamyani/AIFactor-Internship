import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";

// Import only necessary ECharts modules
import * as echarts from "echarts/core";
import { GaugeChart } from "echarts/charts";
import { TitleComponent, TooltipComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

// Register the required components
echarts.use([TitleComponent, TooltipComponent, GaugeChart, CanvasRenderer]);

const GaugeChartComponent = () => {
  const [value, setValue] = useState(100); // Initial value for the gauge

  useEffect(() => {
    const interval = setInterval(updateGaugeValue, 1000); // Update every 2 seconds

    return () => clearInterval(interval);
  }, []);


  const updateGaugeValue = () => {
    // Generate a random value between 0 and 100 for the gauge
    const newValue = Math.floor(Math.random() * 101);
    setValue(newValue);
  };

  const option = {
    title: {
      text: "Gauge Chart",
    },
    tooltip: {
    },
    series: [
      {
        name: "Business Indicator",
        type: "gauge",
        data: [{ value: value, name: "Completion Rate" }],
      },
    ],
    // animationDuration: 0,
    // animationDurationUpdate: 10000,
    // animationEasing: "linear",
    // animationEasingUpdate: "linear",
  };

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <ReactECharts
        echarts={echarts}
        option={option}
        style={{ height: "100%", width: "100%" }}
        // notMerge={true} // Ensure updates replace previous data
      />
    </div>
  );
};

export default GaugeChartComponent;
