import React, { useCallback } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  MiniMap,
  Controls,
} from "reactflow";

import "reactflow/dist/style.css";
import AND from "./componens/nodes/AND";

const nodeTypes = { AND: AND };

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, type: "AND", data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

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
        nodeTypes={nodeTypes}
      >
        <Background color="black" size={2} variant="dots" />
        <MiniMap zoomable pannable />
        <Controls />
      </ReactFlow>
    </div>
  );
}
