// import * as echarts from "module";

// Initialize the echarts instance based on the prepared dom
var myChart = echarts.init(document.getElementById("main"), 'dark');
window.addEventListener('resize', function() {
  myChart.resize();
});
// myChart.resize({
//   width: 200,
//   height: 400
// });
// Specify the configuration items and data for the chart
var option = {
  title: {
    text: "Stock Sales in 2015 and 2016",
  },
  tooltip: {},
  legend: {
    data: ["sales 2015", "sales 2016"],
  },
  xAxis: {
    data: ["Shirts", "Cardigans", "Chiffons", "Pants", "Heels", "Socks", "Books"],
  },
  yAxis: {},
  series: [
    {
      name: "sales 2015",
      type: "bar",
      data: [5, 20, 36, 10, 10, 20, 10],
    },

    {
      name: "sales 2016",
      type: "bar",
      // type: "pie",
      data: [7, 30, 26, 20, 15, 40, 23.5],
    },
  ],
};

// Display the chart using the configuration items and data just specified.
myChart.setOption(option);
