import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import Histogram from '../charts/Histogram';
import Gauge from '../charts/Gauge';
import BoxPlot from '../charts/BoxPlot';

const ResponsiveGridLayout = WidthProvider(Responsive);

const defaultLayouts = {
  lg: [
    { i: 'a', x: 0, y: 0, w: 4, h: 10, minW: 4, minH: 10 },
    { i: 'b', x: 6, y: 0, w: 5, h: 10, minW: 5, minH: 10 },
    { i: 'c', x: 1, y: 10, w: 10, h: 10, minH:7, minW: 7},
  ],
 
} 

const Dashboard = () => {
  const [layouts, setLayouts] = useState(defaultLayouts);
  const [isLoading, setIsLoading] = useState(true);

  // Load layouts from localStorage
  useEffect(() => {
    const savedLayouts = localStorage.getItem('responsiveGridLayouts');
    if (savedLayouts) {
      setLayouts(JSON.parse(savedLayouts));
    }
    setIsLoading(false); // Set loading to false after attempting to load the layouts
  }, []);

  // Save layouts to localStorage whenever they change, only if it's not loading
  const handleLayoutChange = (layout, allLayouts) => {
    if (!isLoading) {
      setLayouts(allLayouts);
      localStorage.setItem('responsiveGridLayouts', JSON.stringify(allLayouts));
    }
  };

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading message or spinner if needed
  }

  return (
    <ResponsiveGridLayout
      className="layout mt-10 mb-32 border-2 border-black  bg-gray-200 rounded-md"
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
  );
};

export default Dashboard;