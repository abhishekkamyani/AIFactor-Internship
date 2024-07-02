import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LineChart from "./components/charts/LineChart";

export default function App() {
  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        "https://api.openweathermap.org/data/2.5/forecast?q=karachi&appid=f4a4c80b35c7d0638a2563b560f4b5e6&units=metric"
      );
      // console.log(response.data);

      if (response.data && response.data.list) {
        const currentTimestamp = Math.floor(Date.now() / 1000); // Current time in UNIX timestamp
        const twentyFourHoursLaterTimestamp = currentTimestamp + (24 * 60 * 60); // Timestamp for 6 hours later
        // Filter data for the next 6 hours

        const filteredData = response.data.list.filter(item => {
          const timestamp = item.dt;
          return timestamp >= currentTimestamp && timestamp <= twentyFourHoursLaterTimestamp;
        });

        response.data.list = filteredData;
      }

      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  };


  const fetchCountries = async () => {
    try {
      const response = await axios.get("https://countriesnow.space/api/v0.1/countries/iso");
      console.log(response.data?.data?.map(country => country.name));
      return response;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }


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

  const countries = useQuery({
    queryKey: "countries",
    queryFn: fetchCountries,
    refetchOnWindowFocus: false, 
    refetchOnWindowBlur: false,
  })

  // console.log(countries);

  return (
    <div className="py-5">
      <h1 className="text-center font-extrabold text-3xl">Weather Visualization App</h1>
      <div className="flex justify-center space-x-20 my-10">
        <select className="bg-gray-200 p-3 !h-1/2 rounded-lg" name="country" id="country" >
          <option className="">[-Select Country-]</option>
        </select>
        <select className="bg-gray-200 p-3 !h-1/2 rounded-lg" name="city" id="city" >
          <option className="">[-Select City-]</option>
        </select>
      </div>
      <div className="w-full h-96 my-10">
        <LineChart data={weather?.list} />
      </div>
    </div>
  );
}
