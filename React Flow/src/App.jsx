import { useCallback, useState } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Panel,
  addEdge,
  useEdgesState,
  useNodesState,
} from "reactflow";
import defaultNodes from "./nodes";
import defaultEdges, { edgesSettings } from "./edges";
import "reactflow/dist/style.css";

export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(defaultNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(defaultEdges);
  const [variant, setVariant] = useState("cross");

  const onConnect = useCallback(
    (newConnection) =>
      setEdges((prevEds) =>
        addEdge({ ...newConnection, ...edgesSettings }, prevEds)
      ),
    [setEdges]
  );

  const nodeColor = (node) => {
    switch (node.type) {
      case "input":
        return "pink";
      case "output":
        return "tomato";
      default:
        return "blue";
    }
  };

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
        <MiniMap nodeColor={nodeColor} zoomable pannable />
        <Background variant={variant} gap={12} size={2} color="green" />
        {/* variant = dots, cross, lines */}

        <Panel position="top-center">
          <div>Background Variant</div>
          <button onClick={() => setVariant("dots")}>dots</button>
          <button onClick={() => setVariant("lines")}>lines</button>
          <button onClick={() => setVariant("cross")}>cross</button>
        </Panel>
      </ReactFlow>
    </div>
  );
}
