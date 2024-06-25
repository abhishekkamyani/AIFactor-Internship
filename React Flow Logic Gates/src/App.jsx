import React, { useCallback, useRef } from "react";
import ReactFlow, {
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  MiniMap,
  Controls,
  ReactFlowProvider,
  useReactFlow,
} from "reactflow";

import "reactflow/dist/style.css";
import AND from "./components/nodes/AND";
import Sidebar from "./components/Sidebar";
import { getNodeData } from "../public/utils";
import SwitchButton from "./components/nodes/SwitchButton";
import Output from "./components/nodes/Output";

const nodeTypes = { "and": AND, "switchButton": SwitchButton, "light": Output };

const initialNodes = [
  // { id: "1", position: { x: 0, y: 0 }, type: "and", data: { label: "1" }, parentId: "3" },
  // { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
  // { id: "3", position: { x: 0, y: 200 }, type: "switchButton", data: { label: "2" }, dragHandle: '.custom-drag-handle' },
  // { id: "4", position: { x: 0, y: 300 }, type: "light", data: { label: "2" } },
];
const initialEdges = [{ id: "e1-3", source: "3", target: "1", targetHandle: "inputA" }];
let id = 0;
const getNodeID = () => `Node_${id++}`;

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const reactFlowWrapper = useRef(null);
  const { screenToFlowPosition } = useReactFlow();


  
  const getNodeState = (id) => {
    console.log(nodes);
  }

  const onConnect = useCallback(
    (params) => {
      console.log(params);
      setEdges((eds) => addEdge(params, eds))
      setNodes((nds) => nds.map(node => {
        // console.log(params);
        if (node.id == params.target) {
          node.data = { ...node.data, source: { ...node.data.source, [params.targetHandle]: params.source } };
          return node;
        }
        return node;
      }))
    },
    [setEdges]
  );

  const onDragOver = useCallback((e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (e) => {
      e.preventDefault();
      // console.log(e);
      // console.log(e.dataTransfer.getData("application/reactflow"));
      const nodeType = e.dataTransfer.getData("application/reactflow");

      // check if the dropped element is valid
      if (typeof nodeType === "undefined" || !nodeType) {
        return;
      }

      const position = screenToFlowPosition({
        x: e.clientX,
        y: e.clientY,
      });

      const newNode = {
        id: getNodeID(),
        type: nodeType,
        position,
        data: { ...getNodeData(nodeType), getNodeState },
      };

      console.log(newNode);

      setNodes((currentNodes) => currentNodes.concat(newNode));
    },
    [screenToFlowPosition]
  );

  // getNodeState();

  return (
    <div className="flex h-screen w-screen">
      <Sidebar />

      <div
        className="reactflow-wrapper h-full basis-full"
        ref={reactFlowWrapper}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          nodeTypes={nodeTypes}
          onDragOver={onDragOver}
          onDrop={onDrop}
        >
          <Background color="black" size={2} variant="dots" />
          <MiniMap zoomable pannable />
          <Controls />
        </ReactFlow>
      </div>
    </div>
  );
}

export default () => {
  return (
    <ReactFlowProvider>
      <App />
    </ReactFlowProvider>
  );
};
