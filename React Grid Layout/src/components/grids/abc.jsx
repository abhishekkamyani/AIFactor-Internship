// import React, { useState } from "react";
// import { WidthProvider, Responsive } from "react-grid-layout";
// import _ from "lodash";

// const ResponsiveReactGridLayout = WidthProvider(Responsive);

// const AddRemoveLayout = (props) => {
//     const defaultProps = {
//         className: "layout",
//         cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
//         rowHeight: 100,
//     };

//     const mergedProps = { ...defaultProps, ...props };

//     const [items, setItems] = useState(
//         [0, 1, 2, 3, 4].map((i, key, list) => ({
//             i: i.toString(),
//             x: i * 2,
//             y: 0,
//             w: 2,
//             h: 2,
//             add: i === list.length - 1,
//         }))
//     );
//     const [newCounter, setNewCounter] = useState(0);

//     const onAddItem = () => {
//         setItems([
//             ...items,
//             {
//                 i: "n" + newCounter,
//                 x: (items.length * 2) % (mergedProps.cols.lg || 12),
//                 y: Infinity, // puts it at the bottom
//                 w: 2,
//                 h: 2,
//             },
//         ]);
//         setNewCounter(newCounter + 1);
//     };

//     const onBreakpointChange = (breakpoint, cols) => {
//         // Handle breakpoint change if necessary
//     };

//     const onLayoutChange = (layout) => {
//         props.onLayoutChange(layout);
//         // You can handle layout change here if necessary
//     };

//     const onRemoveItem = (i) => {
//         console.log("removing", i);
//         setItems(_.reject(items, { i: i }));
//     };

//     const createElement = (el) => {
//         const removeStyle = {
//             position: "absolute",
//             right: "2px",
//             top: "2px",
//             cursor: "pointer",
//         };
//         return (
//             <div key={el.i} data-grid={el}>
//                 <span className="text">{el.i}</span>
//                     <span
//                     className="remove"
//                     style={removeStyle}
//                     onClick={() => onRemoveItem(el.i)}
//                 >
//                     x
//                 </span>
//             </div>
//         );
//     };

//     return (
//         <div>
//             <button onClick={onAddItem}>Add Item</button>
//             <ResponsiveReactGridLayout
//                 onLayoutChange={onLayoutChange}
//                 onBreakpointChange={onBreakpointChange}
//                 {...mergedProps}
//             >
//                 {_.map(items, (el) => createElement(el))}
//             </ResponsiveReactGridLayout>
//         </div>
//     );
// };

// export default AddRemoveLayout;

// if (process.env.STATIC_EXAMPLES === true) {
//     import("../test-hook.jsx").then((fn) => fn.default(AddRemoveLayout));
// }

// import React, { useState, useEffect } from "react";
// import { WidthProvider, Responsive } from "react-grid-layout";

// const ResponsiveReactGridLayout = WidthProvider(Responsive);
// const originalLayouts = getFromLS("layouts") || {};

// const ResponsiveLocalStorageLayout = () => {
//   const [layouts, setLayouts] = useState(JSON.parse(JSON.stringify(originalLayouts)));

//   const defaultProps = {
//     className: "layout",
//     cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
//     rowHeight: 30
//   };

//   const resetLayout = () => {
//     setLayouts({});
//   };

//   const onLayoutChange = (layout, layouts) => {
//     saveToLS("layouts", layouts);
//     setLayouts(layouts);
//   };

//   return (
//     <div>
//       <button onClick={resetLayout}>Reset Layout</button>
//       <ResponsiveReactGridLayout
//         className={defaultProps.className}
//         cols={defaultProps.cols}
//         rowHeight={defaultProps.rowHeight}
//         layouts={layouts}
//         onLayoutChange={onLayoutChange}
//       >
//         <div key="1" data-grid={{ w: 2, h: 3, x: 0, y: 0, minW: 2, minH: 3 }}>
//           <span className="text">1</span>
//         </div>
//         <div key="2" data-grid={{ w: 2, h: 3, x: 2, y: 0, minW: 2, minH: 3 }}>
//           <span className="text">2</span>
//         </div>
//         <div key="3" data-grid={{ w: 2, h: 3, x: 4, y: 0, minW: 2, minH: 3 }}>
//           <span className="text">3</span>
//         </div>
//         <div key="4" data-grid={{ w: 2, h: 3, x: 6, y: 0, minW: 2, minH: 3 }}>
//           <span className="text">4</span>
//         </div>
//         <div key="5" data-grid={{ w: 2, h: 3, x: 8, y: 0, minW: 2, minH: 3 }}>
//           <span className="text">5</span>
//         </div>
//       </ResponsiveReactGridLayout>
//     </div>
//   );
// };

// function getFromLS(key) {
//   let ls = {};
//   if (typeof localStorage !== "undefined") {
//     try {
//       ls = JSON.parse(localStorage.getItem("rgl-8")) || {};
//     } catch (e) {
//       /* Ignore */
//     }
//   }
//   return ls[key];
// }

// function saveToLS(key, value) {
//   if (typeof localStorage !== "undefined") {
//     localStorage.setItem(
//       "rgl-8",
//       JSON.stringify({
//         [key]: value
//       })
//     );
//   }
// }

// export default ResponsiveLocalStorageLayout;

// if (process.env.STATIC_EXAMPLES === true) {
//   import("../test-hook.jsx").then(fn => fn.default(ResponsiveLocalStorageLayout));
// }

// import React, { useState, useEffect } from "react";
// import _ from "lodash";
// import RGL, { WidthProvider } from "react-grid-layout";

// const ReactGridLayout = WidthProvider(RGL);

// const DynamicMinMaxLayout = () => {
//   const [layout, setLayout] = useState([]);
//   const [items, setItems] = useState(20);
//   const [rowHeight, setRowHeight] = useState(30);
//   const [cols, setCols] = useState(12);

//   useEffect(() => {
//     setLayout(generateLayout(items));
//   }, [items]);

//   const generateLayout = (items) => {
//     return _.map(new Array(items), (item, i) => {
//       const w = _.random(1, 2);
//       const h = _.random(1, 3);
//       return {
//         x: (i * 2) % cols,
//         y: Math.floor(i / 6),
//         w: w,
//         h: h,
//         i: i.toString(),
//       };
//     });
//   };

//   const onLayoutChange = (newLayout) => {
//     setLayout(newLayout);
//   };

//   const onResize = (layout, oldLayoutItem, layoutItem, placeholder) => {
//     // `oldLayoutItem` contains the state of the item before the resize.
//     // You can modify `layoutItem` to enforce constraints.

//     if (layoutItem.h < 3 && layoutItem.w > 2) {
//       layoutItem.w = 2;
//       placeholder.w = 2;
//     }

//     if (layoutItem.h >= 3 && layoutItem.w < 2) {
//       layoutItem.w = 2;
//       placeholder.w = 2;
//     }
//   };

//   return (
//     <ReactGridLayout
//       onLayoutChange={onLayoutChange}
//       onResize={onResize}
//       layout={layout}
//       cols={cols}
//       rowHeight={rowHeight}
//       isDraggable={true}
//       isResizable={true}
//     >
//       {layout.map((l) => (
//         <div key={l.i} data-grid={l}>
//           <span className="text">{l.i}</span>
//         </div>
//       ))}
//     </ReactGridLayout>
//   );
// };

// export default DynamicMinMaxLayout;

import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Responsive, WidthProvider } from 'react-grid-layout';

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const ToolBoxItem = ({ item, onTakeItem }) => {
  return (
    <div
      className="toolbox__items__item"
      onClick={() => onTakeItem(item)}
    >
      {item.i}
    </div>
  );
};

const ToolBox = ({ items, onTakeItem }) => {
  return (
    <div className="toolbox">
      <span className="toolbox__title">Toolbox</span>
      <div className="toolbox__items">
        {items.map(item => (
          <ToolBoxItem
            key={item.i}
            item={item}
            onTakeItem={onTakeItem}
          />
        ))}
      </div>
    </div>
  );
};

const ToolboxLayout = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState('lg');
  const [compactType, setCompactType] = useState('vertical');
  const [mounted, setMounted] = useState(false);
  const [layouts, setLayouts] = useState({ lg: generateLayout() });
  const [toolbox, setToolbox] = useState({ lg: [] });

  useEffect(() => {
    setMounted(true);
  }, []);

  const generateDOM = () => {
    return _.map(layouts[currentBreakpoint], l => {
      return (
        <div key={l.i} className={l.static ? "static" : ""}>
          <div className="hide-button" onClick={() => onPutItem(l)}>
            &times;
          </div>
          {l.static ? (
            <span
              className="text"
              title="This item is static and cannot be removed or resized."
            >
              Static - {l.i}
            </span>
          ) : (
            <span className="text">{l.i}</span>
          )}
        </div>
      );
    });
  };

  const onBreakpointChange = (breakpoint) => {
    setCurrentBreakpoint(breakpoint);
    setToolbox(prevState => ({
      ...prevState.toolbox,
      [breakpoint]:
        prevState.toolbox[breakpoint] ||
        prevState.toolbox[currentBreakpoint] ||
        []
    }));
  };

  const onCompactTypeChange = () => {
    const newCompactType =
      compactType === "horizontal"
        ? "vertical"
        : compactType === "vertical"
        ? null
        : "horizontal";
    setCompactType(newCompactType);
  };

  const onTakeItem = (item) => {
    setToolbox(prevState => ({
      ...prevState.toolbox,
      [currentBreakpoint]: prevState.toolbox[currentBreakpoint].filter(({ i }) => i !== item.i)
    }));
    setLayouts(prevState => ({
      ...prevState.layouts,
      [currentBreakpoint]: [
        ...prevState.layouts[currentBreakpoint],
        item
      ]
    }));
  };

  const onPutItem = (item) => {
    setToolbox(prevState => ({
      ...prevState.toolbox,
      [currentBreakpoint]: [
        ...(prevState.toolbox[currentBreakpoint] || []),
        item
      ]
    }));
    setLayouts(prevState => ({
      ...prevState.layouts,
      [currentBreakpoint]: prevState.layouts[currentBreakpoint].filter(({ i }) => i !== item.i)
    }));
  };

  const onLayoutChange = (layout, layouts) => {
    setLayouts(layouts);
  };

  const onNewLayout = () => {
    setLayouts({ lg: generateLayout() });
  };

  return (
    <div>
      <div>
        Current Breakpoint: {currentBreakpoint} (
        {cols[currentBreakpoint]} columns)
      </div>
      <div>
        Compaction type:{" "}
        {_.capitalize(compactType) || "No Compaction"}
      </div>
      <button onClick={onNewLayout}>Generate New Layout</button>
      <button onClick={onCompactTypeChange}>
        Change Compaction Type
      </button>

      <ToolBox
        items={toolbox[currentBreakpoint] || []}
        onTakeItem={onTakeItem}
      />

      <ResponsiveReactGridLayout
        className="layout"
        rowHeight={30}
        layouts={layouts}
        onBreakpointChange={onBreakpointChange}
        onLayoutChange={onLayoutChange}
        measureBeforeMount={false}
        useCSSTransforms={mounted}
        compactType={compactType}
        preventCollision={!compactType}
        cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
      >
        {generateDOM()}
      </ResponsiveReactGridLayout>
    </div>
  );
};

function generateLayout() {
  return _.map(_.range(0, 25), function(item, i) {
    var y = Math.ceil(Math.random() * 4) + 1;
    return {
      x: (_.random(0, 5) * 2) % 12,
      y: Math.floor(i / 6) * y,
      w: 2,
      h: y,
      i: i.toString(),
      static: Math.random() < 0.05
    };
  });
}

export default ToolboxLayout;