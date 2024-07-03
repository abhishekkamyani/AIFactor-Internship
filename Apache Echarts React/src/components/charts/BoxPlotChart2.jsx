import React from "react";
import ReactECharts from "echarts-for-react";

function BoxPlotChart2() {
  const salesData = [
    [
      850, 740, 900, 1070, 930, 850, 950, 980, 980, 880, 1000, 980, 930, 650,
      760, 810, 1000, 1000, 960, 960,
    ],
    [
      960, 940, 960, 940, 880, 800, 850, 880, 900, 840, 830, 790, 810, 880, 880,
      830, 800, 790, 760, 800,
    ],
    [
      880, 880, 880, 860, 720, 720, 620, 860, 970, 950, 880, 910, 850, 870, 840,
      840, 850, 840, 840, 840,
    ],
    [
      890, 810, 810, 820, 800, 770, 760, 740, 750, 760, 910, 920, 890, 860, 880,
      720, 840, 850, 850, 780,
    ],
    [
      890, 840, 780, 810, 760, 810, 790, 810, 820, 850, 870, 870, 810, 740, 810,
      940, 950, 800, 810, 870,
    ],
  ];

  const boxPlotData = salesData.map((data) => {
    // Calculate box plot statistics
    data.sort((a, b) => a - b);
    const min = data[0];
    const max = data[data.length - 1];
    const q1 = data[Math.floor(data.length * 0.25)];
    const median = data[Math.floor(data.length * 0.5)];
    const q3 = data[Math.floor(data.length * 0.75)];
    return [min, q1, median, q3, max];
  });


  const option = {
    dataset: {
      source: [
        ["Group", "min", "q1", "median", "q3", "max"],
        ...boxPlotData.map((data, index) => [`${index + 1}`, ...data]),
      ],
    },
    title: {
      text: "Sales Data Box Plot",
      left: "center",
    },
    tooltip: {
      //   trigger: 'axis',
      axisPointer: {
        type: "shadow",
      },
    },
    xAxis: {
      type: "category",
      axisLabel: {
        // formatter: '{value}'
      },
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Sales Data",
        type: "boxplot",
        encode: {
          x: 0,
          y: [1, 2, 3, 4, 5],
        },
        tooltip: {
          formatter: function (param) {
            return [
              `Group: ${param.data[0]}`,
              "Max: " + param.data[5],
              "Q3: " + param.data[4],
              "Median: " + param.data[3],
              "Q1: " + param.data[2],
              "Min: " + param.data[1],
            ].join("<br/>");
          },
        },
      },
    ],
  };

  return (
    <ReactECharts option={option} style={{ height: 400, width: "100%" }} />
  );
}

export default BoxPlotChart2;
