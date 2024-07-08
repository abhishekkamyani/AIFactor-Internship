import React, { useState, useEffect } from 'react';
import GridLayout from 'react-grid-layout';

const defaultLayout = [
  { i: 'a', x: 0, y: 0, w: 2, h: 2 },
  { i: 'b', x: 2, y: 0, w: 2, h: 2 },
  { i: 'c', x: 4, y: 0, w: 2, h: 2 },
];

const MyGridLayout = () => {
  const [layout, setLayout] = useState(defaultLayout);
  const [isLoading, setIsLoading] = useState(true);

  // Load layout from localStorage
  useEffect(() => {
    const savedLayout = localStorage.getItem('gridLayout');
    if (savedLayout) {
      setLayout(JSON.parse(savedLayout));
    }
    setIsLoading(false); // Set loading to false after attempting to load the layout
  }, []);

  // Save layout to localStorage whenever it changes, only if it's not loading
  const handleLayoutChange = (layout) => {
    if (!isLoading) {
      setLayout(layout);
      localStorage.setItem('gridLayout', JSON.stringify(layout));
    }
  };

  if (isLoading) {
    return <div>Loading...</div>; // Show a loading message or spinner if needed
  }

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
      onLayoutChange={handleLayoutChange}
    >
      <div key="a">A</div>
      <div key="b">B</div>
      <div key="c">C</div>
    </GridLayout>
  );
};

export default MyGridLayout;
