import ReactECharts from "echarts-for-react"; // Import the wrapper

export default function Histogram() {

  // Define the bins
  var bins = [
    { bin: "0-2", count: 1 },
    { bin: "2-4", count: 4 },
    { bin: "4-6", count: 3 },
    { bin: "6-8", count: 3 },
    { bin: "8-10", count: 2 },
    { bin: "10-12", count: 1 },
  ];

  // Extract bin names and counts
  var binNames = bins.map((bin) => bin.bin);
  var binCounts = bins.map((bin) => bin.count);

  var option = {
    title: {
      text: "Histogram",
    },
    tooltip: {},
    xAxis: {
      type: "category",
      data: binNames,
      name: "Bins",
    },
    yAxis: {
      type: "value",
      name: "Count",
    },
    series: [
      {
        type: "bar",
        data: binCounts,
        itemStyle: {
          color: "#5470C6",
        },
      },
    ],
  };

  return <ReactECharts option={option} style={{ height: 400 }} />;
}
