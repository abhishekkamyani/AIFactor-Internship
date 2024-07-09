import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const initialLayouts = {
  lg: [
    { i: "1", x: 0, y: 0, w: 2, h: 3 },
    { i: "2", x: 2, y: 0, w: 2, h: 3 },
    { i: "3", x: 4, y: 0, w: 2, h: 3 },
    { i: "4", x: 6, y: 0, w: 2, h: 3 },
    { i: "5", x: 8, y: 0, w: 2, h: 3 },
  ],
};

const DragFromOutsideLayout = (props) => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState("lg");
  const [compactType, setCompactType] = useState("vertical");
  const [mounted, setMounted] = useState(false);
  const [layouts, setLayouts] = useState(initialLayouts);

  useEffect(() => {
    setMounted(true);
  }, []);

  const onBreakpointChange = (breakpoint) => {
    setCurrentBreakpoint(breakpoint);
  };

  const onCompactTypeChange = () => {
    setCompactType((prevCompactType) =>
      prevCompactType === "horizontal"
        ? "vertical"
        : prevCompactType === "vertical"
        ? null
        : "horizontal"
    );
  };

  const onLayoutChange = (layout, layouts) => {
    setLayouts(layouts);
    if (props.onLayoutChange) {
      props.onLayoutChange(layout, layouts);
    }
  };

  const onNewLayout = () => {
    setLayouts(initialLayouts);
  };

  const onDrop = (layout, layoutItem, _event) => {
    alert(
      `Dropped element props:\n${JSON.stringify(
        layoutItem,
        ["x", "y", "w", "h"],
        2
      )}`
    );
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <div className="mb-2">
          Current Breakpoint: {currentBreakpoint} (
          {props.cols[currentBreakpoint]} columns)
        </div>
        <div className="mb-2">
          Compaction type: {compactType || "No Compaction"}
        </div>
        <button
          className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onNewLayout}
        >
          Generate New Layout
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={onCompactTypeChange}
        >
          Change Compaction Type
        </button>
      </div>
      <div
        className="droppable-element p-4 bg-gray-200 border border-gray-400 rounded"
        draggable={true}
        unselectable="on"
        onDragStart={(e) => e.dataTransfer.setData("text/plain", "")}
      >
        Droppable Element (Drag me!)
      </div>
      <ResponsiveReactGridLayout
        {...props}
        layouts={layouts}
        onBreakpointChange={onBreakpointChange}
        onLayoutChange={onLayoutChange}
        onDrop={onDrop}
        measureBeforeMount={false}
        useCSSTransforms={mounted}
        compactType={compactType}
        preventCollision={!compactType}
        isDroppable={true}
      >
        {layouts.lg.map((item) => (
          <div key={item.i} className="bg-blue-300 border border-blue-500">
            <span className="text">{item.i}</span>
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </div>
  );
};

DragFromOutsideLayout.defaultProps = {
  className: "layout",
  rowHeight: 30,
  onLayoutChange: function () {},
  cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
};

export default DragFromOutsideLayout;