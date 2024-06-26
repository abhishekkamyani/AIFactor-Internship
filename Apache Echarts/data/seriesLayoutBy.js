var myChart = echarts.init(document.getElementById("main"), "dark");
window.addEventListener("resize", function () {
  myChart.resize();
});

option = {
  legend: {},
  tooltip: {},
  dataset: {
    source: [
      ["product", "2012", "2013", "2014", "2015"],
      ["Matcha Latte", 41.1, 30.4, 65.1, 53.3],
      ["Milk Tea", 86.5, 92.1, 85.7, 83.1],
      ["Cheese Cocxoa", 24.1, 67.2, 79.5, 86.4],
    ],
  },
  grid: [{ bottom: "55%", width: "400px" }, { top: "55%" }],
  xAxis: [
    { type: "category", gridIndex: 0 },
    { type: "category", gridIndex: 1 },
  ],
  yAxis: [{ gridIndex: 0 }, { gridIndex: 1 }],
  series: [
    // These series will show in the first coordinate, each series map a row in dataset.
    { type: "bar", seriesLayoutBy: "row", xAxisIndex: 0, yAxisIndex: 0 },
    { type: "bar", seriesLayoutBy: "row", xAxisIndex: 0, yAxisIndex: 0 },
    { type: "bar", seriesLayoutBy: "row", xAxisIndex: 0, yAxisIndex: 0 },
    // These series will show in the second coordinate, each series map a column in dataset.
    { type: "bar", seriesLayoutBy: "column", xAxisIndex: 1, yAxisIndex: 1 },
    { type: "bar", seriesLayoutBy: "column", xAxisIndex: 1, yAxisIndex: 1 },
    { type: "bar", seriesLayoutBy: "column", xAxisIndex: 1, yAxisIndex: 1 },
    { type: "bar", seriesLayoutBy: "column", xAxisIndex: 1, yAxisIndex: 1 },
  ],
};



myChart.setOption(option);
