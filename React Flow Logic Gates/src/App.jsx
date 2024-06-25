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
import CustomReactFlowProvider, { useFlow } from "./components/ReactFlowContext";


const nodeTypes = { "and": AND, "switchButton": SwitchButton, "light": Output };

let id = 0;
const getNodeID = () => `Node_${id++}`;

function App() {

  const { nodes, setNodes, edges, setEdges, onNodesChange, onEdgesChange } = useFlow();
  const reactFlowWrapper = useRef(null);
  const { screenToFlowPosition } = useReactFlow();

  const onConnect = useCallback(
    (params) => {
      setEdges((eds) => addEdge(params, eds))
      setNodes((nds) => nds.map(node => {
        if (node.id == params.target) {
          node.data = { ...node.data, source: { ...node.data.source, [params.targetHandle]: params.source } };
          return node;
        }
        return node;
      }))
    },
    [setEdges, setNodes]
  );

  const onEdgesDelete = useCallback(
    (deletedEdges) => {
      setNodes(nds => nds.map(node => {
        if (node.id == deletedEdges[0].target) {
          node.data = { ...node.data, source: { ...node.data.source, [deletedEdges[0].targetHandle]: undefined } }
          return node;
        }
        return node;
      }))
    }
    , [setEdges, setNodes])

  const onDragOver = useCallback((e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (e) => {
      e.preventDefault();
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
        data: { ...getNodeData(nodeType) },
      };

      setNodes((currentNodes) => currentNodes.concat(newNode));
    },
    [screenToFlowPosition]
  );


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
          onEdgesDelete={onEdgesDelete}
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
    // <CustomReactFlowProvider>
    <ReactFlowProvider>
      <App />
    </ReactFlowProvider>
    // </CustomReactFlowProvider>
  );
};
