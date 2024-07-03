import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LineChart from "./components/charts/LineChart";
import BoxPlot from "./Oldcomponents/BoxPlot";
import BoxPlotChart from "./components/charts/BoxPlotChart";
import BoxPlotChart2 from "./components/charts/BoxPlotChart2";

export default function App() {
  const [selectedCountryName, setSelectedCountryName] = useState(null);
  const [selectedCityName, setSelectedCityName] = useState(null);
  console.log(selectedCityName);

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=f4a4c80b35c7d0638a2563b560f4b5e6&units=metric`
      );
      console.log(response.data);

      if (response.data && response.data.list) {
        const currentTimestamp = Math.floor(Date.now() / 1000); // Current time in UNIX timestamp
        const twentyFourHoursLaterTimestamp = currentTimestamp + 24 * 60 * 60; // Timestamp for 6 hours later
        // Filter data for the next 6 hours

        const filteredData = response.data.list.filter((item) => {
          const timestamp = item.dt;
          return (
            timestamp >= currentTimestamp &&
            timestamp <= twentyFourHoursLaterTimestamp
          );
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
      const response = await axios.get(
        "https://countriesnow.space/api/v0.1/countries/iso"
      );
      // console.log(response.data?.data?.map((country) => country.name));
      return response.data?.data?.map((country) => country.name);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const fetchCities = async (countryName) => {
    try {
      const response = await axios.post(
        "https://countriesnow.space/api/v0.1/countries/cities",
        { country: countryName }
      );

      return response?.data?.data.sort();
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  const weather= useQuery({
    queryKey: ["weather-", selectedCountryName, selectedCityName],
    queryFn: () => selectedCountryName && selectedCityName && fetchWeather(selectedCityName),
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
    staleTime: Infinity, // Disable automatic refetching for cached data
    cacheTime: Infinity, // Keep cached data forever
  });

  const countries = useQuery({
    queryKey: ["countries"],
    queryFn: fetchCountries,
    refetchOnWindowFocus: false,
    refetchOnWindowBlur: false,
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const cities = useQuery({
    queryKey: ["cities-", selectedCountryName],
    queryFn: () => selectedCountryName && fetchCities(selectedCountryName),
    refetchOnWindowFocus: false,
    refetchOnWindowBlur: false,
    staleTime: Infinity,
    cacheTime: Infinity, 
  });


  return (
    <div className="py-5">
      <h1 className="text-center font-extrabold text-3xl">
        Weather Visualization App
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 my-10">
        <select
          className="bg-gray-200 p-3 rounded-lg w-52"
          name="country"
          id="country"
          value={selectedCountryName}
          onChange={(e) => {
            setSelectedCountryName(e.target.value)
            setSelectedCityName(null);
          }}
        >
          <option value={""}>[-Select Country-]</option>
          {countries?.data?.map((country) => (
            <option value={country} key={country}>
              {country}
            </option>
          ))}
        </select>
        <select
          className="bg-gray-200 p-3 rounded-lg w-52"
          name="city"
          id="city"
          value={selectedCityName}
          onChange={(e) => setSelectedCityName(e.target.value)}
        >
          <option value="">[-Select City-]</option>
          {cities.data?.map((city) => (
            <option value={city} key={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full h-96 my-10">
        {selectedCityName && (
          <LineChart
            data={weather.data?.list}
            title_text={`${selectedCityName} Weather`}
            isLoading={weather.isLoading}
            isError={weather.isError}
          />
        )} 
        <BoxPlot />
        <BoxPlotChart />
        <BoxPlotChart2 />
      </div>
    </div>
  );
}
