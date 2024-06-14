import { MarkerType } from "reactflow";

export default [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    label: "1 to 2",
    type: "smoothstep",
    animated: true,
    style: { stroke: "red" },
    markerEnd: { type: MarkerType.Arrow },
  },
];


// type: "step, smoothstep, straight"
//MarkerType = Arrow, ArrowClosed

export const edgesSettings = {
  type: "smoothstep",
  animated: true,
  style: { stroke: "red" },
  markerEnd: { type: MarkerType.Arrow },
}