export default [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "Input" },
    type: "input",
    style: { backgroundColor: "pink" },
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { label: <h2>Default Node</h2> },
    style: { backgroundColor: "blue", color: "white" },
  },
  {
    id: "3",
    position: { x: 200, y: 300 },
    data: { label: "output" },
    type: "output",
    style:{backgroundColor: "tomato"}
  },
];
