import React from "react";
import ReactEcharts from "echarts-for-react";

const BoxPlotChart = () => {
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

  const calculateBoxPlotData = (data) => {
    return data.map((group) => {
      group.sort((a, b) => a - b);

      const q1 = group[Math.floor(group.length / 4)];
      const median = group[Math.floor(group.length / 2)];
      const q3 = group[Math.floor(group.length * (3 / 4))];
      const min = group[0];
      //   console.log("min:" + min);
      const max = group[group.length - 1];
      const iqr = q3 - q1;

      const lowerBound = q1 - 1.5 * iqr;
      const upperBound = q3 + 1.5 * iqr;

      const filteredData = group.filter(
        (x) => x >= lowerBound && x <= upperBound
      );

      return [
        // Math.min(...filteredData),
        min,
        q1,
        median,
        q3,
        max,
        // Math.max(...filteredData),
        // ...group.filter(x => x < lowerBound || x > upperBound)
      ];
    });
  };

  const getOption = () => {
    const boxPlotData = calculateBoxPlotData(salesData);

    return {
      title: {
        text: "Sales Performance Box Plot",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: { show: true, right: "0" },
      yAxis: {
        type: "value",
        name: "Sales",
      },
      xAxis: {
        type: "category",
        data: ["Group 1", "Group 2", "Group 3", "Group 4", "Group 5"],
      },
      series: [
        {
          name: "Sales",
          type: "boxplot",
          data: boxPlotData,
        //   tooltip: {
        //     formatter: function (param) {
        //       return [
        //         `Group ${param.data[0] + 1}`,
        //         "Max: " + param.data[5],
        //         "Q3: " + param.data[4],
        //         "Median: " + param.data[3],
        //         "Q1: " + param.data[2],
        //         "Min: " + param.data[1],
        //       ].join("<br/>");
        //     },
        //   },
        },
      ],
    };
  };

  return (
    <div>
      <h1>Daily Sales Performance</h1>
      <ReactEcharts
        option={getOption()}
        style={{ height: "400px", width: "100%" }}
      />
    </div>
  );
};

export default BoxPlotChart;
