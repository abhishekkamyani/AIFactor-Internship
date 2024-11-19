import React, { useState } from "react";
import ReactECharts from "echarts-for-react";

const ChartDashboard = () => {
  const [charts, setCharts] = useState([]);

  // Function to add a new chart
  const addChart = (type) => {
    setCharts((prev) => [
      ...prev,
      { id: Date.now(), type, data: [], options: {} }, // New chart with empty data
    ]);
  };

  // Function to update chart data
  const updateChartData = (id, newData) => {
    setCharts((prev) =>
      prev.map((chart) => (chart.id === id ? { ...chart, data: newData } : chart))
    );
  };

  return (
    <div className="p-4">
      {/* Buttons to Add Charts */}
      <div className="flex space-x-4">
        <button onClick={() => addChart("line")} className="btn">Add Line Chart</button>
        <button onClick={() => addChart("histogram")} className="btn">Add Histogram</button>
        <button onClick={() => addChart("boxplot")} className="btn">Add Boxplot</button>
      </div>

      {/* Render Added Charts */}
      <div className="grid grid-cols-2 gap-4 mt-4">
        {charts.map((chart) => (
          <Chart key={chart.id} chart={chart} onUpdateData={updateChartData} />
        ))}
      </div>
    </div>
  );
};

// Individual Chart Component
const Chart = ({ chart, onUpdateData }) => {
  const getChartOptions = () => {
    switch (chart.type) {
      case "line":
        return {
          xAxis: { type: "category", data: chart.data.x || [] },
          yAxis: { type: "value" },
          series: [{ data: chart.data.y || [], type: "line" }],
        };
      case "histogram":
        return {
          xAxis: { type: "category", data: chart.data.x || [] },
          yAxis: { type: "value" },
          series: [{ data: chart.data.y || [], type: "bar" }],
        };
      case "boxplot":
        return {
          tooltip: { trigger: "item" },
          dataset: { source: chart.data || [] },
          series: [{ type: "boxplot" }],
        };
      default:
        return {};
    }
  };

  const handleDataChange = () => {
    // Example: Simulate new data
    const newData = {
      x: ["Jan", "Feb", "Mar"],
      y: [150, 200, 300],
    };
    onUpdateData(chart.id, newData);
  };

  return (
    <div className="chart-card">
      <ReactECharts option={getChartOptions()} style={{ height: "300px" }} />
      <button onClick={handleDataChange} className="btn mt-2">Add Data</button>
    </div>
  );
};

export default ChartDashboard;
