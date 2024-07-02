import React, { useState } from "react";
import MyChart from "./Oldcomponents/MyChart";
import Histogram from "./Oldcomponents/Histogram";
import BoxPlot from "./Oldcomponents/BoxPlot";
import GaugeChartComponent from "./Oldcomponents/GaugeChartComponent";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function App() {
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast?q=karachi&appid=f4a4c80b35c7d0638a2563b560f4b5e6&units=metric"
      );
      // console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const { data: weather, error } = useQuery({
    queryKey: "weather",
    queryFn: fetchWeather,
    // refetchInterval: 60 * 60 * 1000, // 1 hour
    // staleTime: 10 * 60 * 1000, // 10 minutes
    // cacheTime: 1 * 60 * 60 * 1000, // 1 hour
    onError: (error) => {
      console.error("Error fetching weather data:", error);
    },
    refetchOnWindowFocus: false, // Disable automatic refetch on window focus
    // refetchOnMount: false, // Disable automatic refetch on mount
    // refetchOnReconnect: false, // Disable automatic refetch on network reconnection
    refetchOnWindowBlur: false, // Disable automatic refetch on window blur
    // refetchOnMount: false, // Disable automatic refetch on mount
    // refetchOnReconnect
  });

  console.log(weather?.list);

  return (
    <div>
      <div className="w-1/2 lg:w-full">
        <h1>Work</h1>
        {/* <MyChart /> */}
        {/* <Histogram /> */}
        {/* <BoxPlot /> */}
        {/* <GaugeChartComponent /> */}
      </div>
    </div>
  );
}
