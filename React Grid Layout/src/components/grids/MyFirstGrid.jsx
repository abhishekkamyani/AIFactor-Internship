import GridLayout from "react-grid-layout";

export default function MyFirstGrid() {
  // layout is an array of objects, see the demo for more complete usage
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ];
  return (
    <GridLayout
      className="layout bg-purple-500"
      layout={layout}
      cols={12}
      rowHeight={30}
      width={1200}
    >
      <div key="a" className="bg-red-500">
        a
      </div>
      <div key="b" className="bg-green-500">
        b
      </div>
      <div key="c" className="bg-blue-500">
        c
      </div>

      <div key="d" onClick={() => console.log("clicked")} data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }} className="bg-cyan-300">
        d
      </div>
      <div key="e" data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }} className="bg-slate-500">
        e
      </div>
      <div key="f" data-grid={{ x: 4, y: 0, w: 1, h: 2 }} className="bg-neutral-400">
        f
      </div>
    </GridLayout>
  );
}
