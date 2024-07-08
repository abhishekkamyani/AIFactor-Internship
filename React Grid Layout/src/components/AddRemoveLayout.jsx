import _ from "lodash";
import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function AddRemoveLayout({
  className = "layout",
  cols = { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
  rowHeight = 100,
}) {
  const [items, setItems] = useState(
    Array(5)
      .fill()
      .map((_, index, arr) => ({
        i: index.toString(),
        x: index * 2,
        y: 0,
        w: 2,
        h: 2,
        add: index === arr.length - 1,
      }))
  );
  const [counter, setCounter] = useState(items.length);

  const onAddItem = () => {
    setItems([
      ...items,
      {
        i: "n" + counter,
        x: (items.length * 2) % (cols.lg || 12),
        y: Infinity, // puts it at the bottom
        w: 2,
        h: 2,
      },
    ]);
    setCounter(counter + 1);
  };

  const onRemoveItem = (i) => {
    console.log("removing: " + i);
    setItems(_.reject(items, { i: i }));
  };

  const createElement = (el) => {
    return (
      <div
        key={el.i}
        data-grid={el}
        className="bg-gray-200 flex items-center justify-center"
      >
        {!el.add ? (
            <>
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
            </>
        ) : (
          <span className="text-3xl font-extrabold cursor-pointer" onMouseDown={() => onAddItem(el.i)}>+</span>
        )}
       
      </div>
    );
  };

  return (
    <div>
      <button onClick={onAddItem}>Add item</button>
      <ResponsiveReactGridLayout
        className={className}
        cols={cols}
        rowHeight={rowHeight}
      >
        {_.map(items, (item) => createElement(item))}
      </ResponsiveReactGridLayout>
    </div>
  );
}
