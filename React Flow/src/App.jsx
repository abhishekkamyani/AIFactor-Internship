import { useCallback, useState } from "react";
import ReactFlow, {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "reactflow/dist/style.css";

import TextUpdaterNode from "./TextUpdaterNode";

import "./text-updater-node.css";
import CustomEdge from "./CustomEdge";

const rfStyle = {
  backgroundColor: "#B8CEFF",
};

const initialNodes = [
  {
    id: "node-1",
    type: "textUpdater",
    position: { x: 0, y: 0 },
    data: { value: 123 },
  },
  {
    id: "node-2",
    type: "output",
    targetPosition: "top",
    position: { x: 0, y: 200 },
    data: { label: "node 2 | output" },
  },
  {
    id: "node-3",
    type: "output",
    targetPosition: "top",
    position: { x: 200, y: 200 },
    data: { label: "node 3 | output" },
  },
];

const initialEdges = [
  {
    id: "edge-1",
    source: "node-1",
    target: "node-2",
    sourceHandle: "a",
    type: "custom-edge",
  },
  {
    id: "edge-2",
    source: "node-1",
    target: "node-3",
    sourceHandle: "b",
    type: "custom-edge",
  },
];

// we define the nodeTypes outside of the component to prevent re-renderings
// you could also use useMemo inside the component
const nodeTypes = { textUpdater: TextUpdaterNode };
const edgeTypes = { "custom-edge": CustomEdge };

function Flow() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) =>
      setEdges((eds) => addEdge({ ...connection, animated: true }, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        style={rfStyle}
      />
    </div>
  );
}

export default Flow;
