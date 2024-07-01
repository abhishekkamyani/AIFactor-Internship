import React from 'react'
import MyChart from './components/MyChart'
import Histogram from './components/Histogram'
import BoxPlot from './components/BoxPlot'
import GaugeChartComponent from './components/GaugeChartComponent'

export default function App() {
  return (
    <div>
      <div className='w-1/2 lg:w-full'>
      {/* <MyChart /> */}
      {/* <Histogram /> */}
      {/* <BoxPlot /> */}
      <GaugeChartComponent />
      </div>
    </div>
  )
}
