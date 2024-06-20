import { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MarkerType,
  MiniMap,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" }, type: "input" },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" }, type:"default" },
];

const initialEdges = [
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

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant="dots" gap={12} size={1} color="green" />
        {/* variant = dots, cross, lines */}
      </ReactFlow>
    </div>
  );
}
