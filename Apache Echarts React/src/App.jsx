import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LineChart from "./components/charts/LineChart";
import BoxPlotChart from "./components/charts/BoxPlotChart";
import BoxPlotChart2 from "./components/charts/BoxPlotChart2";
import BoxPlot from "./components/charts/BoxPlot";
import ChartDashboard from "./components/ChartsDashboard";

export default function App() {

  return (
    <div className="py-5 h-screen">
      {/* <BoxPlot /> */}
      <ChartDashboard />
    </div>
  );
}
