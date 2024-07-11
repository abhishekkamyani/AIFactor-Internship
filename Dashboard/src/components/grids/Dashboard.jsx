import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Histogram from '../charts/Histogram';
import Gauge from '../charts/Gauge';
import BoxPlot from '../charts/BoxPlot';
import axios from 'axios';

const ResponsiveGridLayout = WidthProvider(Responsive);

const defaultLayouts = {
  lg: [
    { i: 'a', x: 0, y: 0, w: 4, h: 10, minW: 4, minH: 10 },
    { i: 'b', x: 6, y: 0, w: 5, h: 10, minW: 5, minH: 10 },
    { i: 'c', x: 1, y: 10, w: 10, h: 10, minH: 7, minW: 7 },
  ],

}

const userId = "0123";
const dashboardId = "dashboard_1";

const Dashboard = () => {
  const [layouts, setLayouts] = useState(defaultLayouts);
  const [isLoading, setIsLoading] = useState(true);


  const fetchLayouts = async () => {
    try {
      const res = await axios.get(`api/v1/dashboard/${userId}/${dashboardId}`);
      console.log(res.data?.layouts);
      setLayouts(res.data?.layouts);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchLayouts();
}, []);

  const handleLayoutChange = (layout, allLayouts) => {
    if (!isLoading) {
      setLayouts(allLayouts);
      console.log(allLayouts);
      // localStorage.setItem('responsiveGridLayouts', JSON.stringify(allLayouts));
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const saveLayouts = async () => {
    try {
      const res = await axios.post(`api/v1/dashboard/${userId}/${dashboardId}`, { layouts: layouts });
      if (res.status === 200) {
        return alert("Saved");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className='mb-32'>
      <nav className='bg-blue-500'>
        <ul className='flex space-x-5 justify-center py-4 items-center'>
          <li><button className='bg-red-600 text-white py-2 px-8 rounded-sm hover:bg-red-500' onClick={fetchLayouts}>Reset</button></li>
          <li><button className='bg-blue-400 text-white py-2 px-8 rounded-sm hover:bg-blue-300' onClick={saveLayouts}>Save</button></li>
        </ul>
      </nav>
      <ResponsiveGridLayout
        className="layout border border-black  bg-gray-200"
        layouts={layouts}
        breakpoints={{ lg: 1040, md: 768, sm: 640, xs: 320, xxs: 0 }}
        cols={{ lg: 12, md: 10, sm: 8, xs: 4, xxs: 2 }}
        rowHeight={30}
        width={1200}
        onLayoutChange={handleLayoutChange}
        useCSSTransforms={!isLoading}
        // verticalCompact={false}
        // preventCollision={true}
        // compactType={"vertical"}
        // resizeHandles= {["n", "s", "e", "w", 'sw', 'nw', 'se', 'ne']}
        resizeHandles={["s", "e", 'se']}
      >
        <div key="a" className='border-2 rounded-xl bg-slate-100 shadow-lg m-1 px-6 py-6'>
          <Histogram />
        </div>
        <div key="b" className='border-2 rounded-xl bg-slate-100 shadow-lg m-1 '>
          <Gauge />
        </div>
        <div key="c" className='border-2 rounded-xl bg-slate-100 shadow-lg m-1 lg:px-6 lg:py-6'>
          <BoxPlot />
        </div>
      </ResponsiveGridLayout>
    </div>
  );
};

export default Dashboard;