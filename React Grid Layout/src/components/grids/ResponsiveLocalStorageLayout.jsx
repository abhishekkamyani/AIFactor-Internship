import React, { useState, useEffect } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveGridLayout = WidthProvider(Responsive);

const defaultLayouts = {
  lg: [
    { i: 'a', x: 0, y: 0, w: 2, h: 1 },
    { i: 'b', x: 2, y: 0, w: 2, h: 1 },
    { i: 'c', x: 4, y: 0, w: 2, h: 1 },
  ],
//   md: [
//     { i: 'a', x: 0, y: 0, w: 2, h: 2 },
//     { i: 'b', x: 2, y: 0, w: 2, h: 2 },
//     { i: 'c', x: 4, y: 0, w: 2, h: 2 },
//   ],
//   sm: [
//     { i: 'a', x: 0, y: 0, w: 2, h: 2 },
//     { i: 'b', x: 2, y: 0, w: 2, h: 2 },
//     { i: 'c', x: 4, y: 0, w: 2, h: 2 },
//   ],
//   xs: [
//     { i: 'a', x: 0, y: 0, w: 2, h: 2 },
//     { i: 'b', x: 2, y: 0, w: 2, h: 2 },
//     { i: 'c', x: 4, y: 0, w: 2, h: 2 },
//   ],
//   xxs: [
//     { i: 'a', x: 0, y: 0, w: 2, h: 2 },
//     { i: 'b', x: 2, y: 0, w: 2, h: 2 },
//     { i: 'c', x: 4, y: 0, w: 2, h: 2 },
//   ],
};

const MyResponsiveGridLayout = () => {
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
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      rowHeight={200}
      width={1200}
      onLayoutChange={handleLayoutChange}
      resizeHandles= {["n", "s", "e", "w", 'sw', 'nw', 'se', 'ne']}
    >
      <div key="a" className='bg-gray-500'>A</div>
      <div key="b" className='bg-gray-500'>B</div>
      <div key="c" className='bg-gray-500'>C</div>
    </ResponsiveGridLayout>
  );
};

export default MyResponsiveGridLayout;