import _ from "lodash";
import { useEffect, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const defaultLayouts = {
  lg: [
    { i: "0", x: 0, y: 0, w: 2, h: 2 },
    { i: "1", x: 2, y: 0, w: 2, h: 2 },
    { i: "2", x: 4, y: 0, w: 2, h: 2 },
    { i: "3", x: 6, y: 0, w: 2, h: 2 },
    { i: "4", x: 8, y: 0, w: 2, h: 2 },
  ],
};

export default function AddRemoveLayout({
  className = "layout",
  cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  rowHeight = 100,
}) {
  const [layouts, setLayouts] = useState(defaultLayouts);
  const [counter, setCounter] = useState(5);
  const [isLoading, setIsLoading] = useState(true);

  // Load layouts from localStorage
  useEffect(() => {
    const savedLayouts = localStorage.getItem("responsiveGridLayouts");
    const savedCounter = localStorage.getItem("gridCounter");
    if (savedLayouts) {
      setLayouts(JSON.parse(savedLayouts));
    }
    if (savedCounter) {
      setCounter(parseInt(savedCounter, 10));
    }
    setIsLoading(false);
  }, []);

  // Save layouts and counter to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("responsiveGridLayouts", JSON.stringify(layouts));
      localStorage.setItem("gridCounter", counter.toString());
    }
  }, [layouts, counter, isLoading]);

  const onAddItem = () => {
    const newLayouts = { ...layouts };
    const newItem = {
      i: counter.toString(),
      x: (layouts.lg.length * 2) % (cols.lg || 12),
      y: Infinity, // puts it at the bottom
      w: 2,
      h: 2,
    };
    newLayouts.lg.push(newItem);
    setLayouts(newLayouts);
    setCounter(counter + 1);
  };

  const onRemoveItem = (i) => {
    console.log("removing: " + i);
    const newLayouts = {
      ...layouts,
      lg: layouts.lg.filter((item) => item.i !== i),
    };
    setLayouts(newLayouts);
  };

  const handleLayoutChange = (layout, allLayouts) => {
    setLayouts(allLayouts);
  };

  const createElement = (el) => {
    return (
      <div
        key={el.i}
        data-grid={el}
        className="bg-gray-200 flex items-center justify-center"
      >
        <span className="text-3xl font-extrabold">{el.i}</span>
        <span
          className="absolute top-0.5 right-0.5 cursor-pointer"
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onRemoveItem(el.i);
          }}
        >
          X
        </span>
      </div>
    );
  };

  return (
    <div>
      <button onClick={onAddItem}>Add item</button>
      <ResponsiveReactGridLayout
        className={className}
        // This turns off compaction so you can place items wherever.
        // verticalCompact={false}
        cols={cols}
        // This turns off rearrangement so items will not be pushed arround.
        // preventCollision={true}
        layouts={layouts}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        rowHeight={rowHeight}
        onLayoutChange={handleLayoutChange}
        width={1200}
      >
        {_.map(layouts.lg, (item) => createElement(item))}
      </ResponsiveReactGridLayout>
    </div>
  );
}
