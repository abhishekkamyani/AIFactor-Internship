import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);
const layouts = {
    lg: [
        { i: "a", x: 0, y: 0, w: 1, h: 1, static: true },
        { i: "b", x: 1, y: 0, w: 3, h: 1, minW: 2, maxW: 4, resizeHandles: ["n", "s", "e", "w", 'sw', 'nw', 'se', 'ne'] },
        { i: "c", x: 4, y: 0, w: 1, h: 1, isBounded: false },
        { i: "d", x: 5, y: 0, w: 1, h: 1, isDraggable: false, isResizable: false },
    ]
};
export default function MyResponsiveGrid() {
    return (
        <ResponsiveGridLayout
            className="layout bg-gray-200"
            layouts={layouts}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
            // this is equal to px
            rowHeight={30}
            resizeHandles={["s", "e"]}
        >
            <div key="a" className="bg-red-500" onClick={() => console.log("clicked")}>a</div>
            <div key="b" className="bg-green-500 text-center">b</div>
            <div key="c" className="bg-blue-500">c</div>
            <div key="d" className="bg-cyan-500">c</div>
        </ResponsiveGridLayout>
    )
}
