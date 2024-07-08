import React, { useState } from "react";
import { WidthProvider, Responsive } from "react-grid-layout";
import _ from "lodash";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

const AddRemoveLayout = (props) => {
    const defaultProps = {
        className: "layout",
        cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
        rowHeight: 100,
    };

    const mergedProps = { ...defaultProps, ...props };

    const [items, setItems] = useState(
        [0, 1, 2, 3, 4].map((i, key, list) => ({
            i: i.toString(),
            x: i * 2,
            y: 0,
            w: 2,
            h: 2,
            add: i === list.length - 1,
        }))
    );
    const [newCounter, setNewCounter] = useState(0);

    const onAddItem = () => {
        setItems([
            ...items,
            {
                i: "n" + newCounter,
                x: (items.length * 2) % (mergedProps.cols.lg || 12),
                y: Infinity, // puts it at the bottom
                w: 2,
                h: 2,
            },
        ]);
        setNewCounter(newCounter + 1);
    };

    const onBreakpointChange = (breakpoint, cols) => {
        // Handle breakpoint change if necessary
    };

    const onLayoutChange = (layout) => {
        props.onLayoutChange(layout);
        // You can handle layout change here if necessary
    };

    const onRemoveItem = (i) => {
        console.log("removing", i);
        setItems(_.reject(items, { i: i }));
    };

    const createElement = (el) => {
        const removeStyle = {
            position: "absolute",
            right: "2px",
            top: "2px",
            cursor: "pointer",
        };
        return (
            <div key={el.i} data-grid={el}>
                <span className="text">{el.i}</span>
                <span
                    className="remove"
                    style={removeStyle}
                    onClick={() => onRemoveItem(el.i)}
                >
                    x
                </span>
            </div>
        );
    };

    return (
        <div>
            <button onClick={onAddItem}>Add Item</button>
            <ResponsiveReactGridLayout
                onLayoutChange={onLayoutChange}
                onBreakpointChange={onBreakpointChange}
                {...mergedProps}
            >
                {_.map(items, (el) => createElement(el))}
            </ResponsiveReactGridLayout>
        </div>
    );
};

export default AddRemoveLayout;

if (process.env.STATIC_EXAMPLES === true) {
    import("../test-hook.jsx").then((fn) => fn.default(AddRemoveLayout));
}