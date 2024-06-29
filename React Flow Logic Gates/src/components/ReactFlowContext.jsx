import { createContext, useContext } from "react";
import { useEdgesState, useNodesState } from "reactflow";
// import AND from "./nodes/AND";
// import SwitchButton from "./nodes/SwitchButton";
// import Output from "./nodes/Output";

const ReactFlowContext = createContext();

// const nodeTypes = { "and": AND, "switchButton": SwitchButton, "light": Output };
// const nodeTypes = { };

const initialNodes = [
  // { id: "1", position: { x: 0, y: 0 }, type: "and", data: { label: "1" }, parentId: "3" },
  // { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
  // { id: "3", position: { x: 0, y: 200 }, data: { label: "3" } },
  // { id: "3", position: { x: 0, y: 200 }, type: "switchButton", data: { label: "2" }, dragHandle: '.custom-drag-handle' },
  // { id: "4", position: { x: 0, y: 300 }, type: "light", data: { label: "2" } },
];
const initialEdges = [
//   { id: "e2-3", source: "2", target: "3", targetHandle: "inputA" },
];

export default function CustomReactFlowProvider({ children }) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const getNodeOutputData = (id) => {
    const node = nodes.find((node) => node.id == id);
    return node?.data?.output;
  };

  const setNodeOutputData = (id, value) => {
    setNodes((nds) =>
      nds.map((node) =>
        node.id === id
          ? {
              ...node,
              data: {
                ...node.data,
                output: value,
              },
            }
          : node
      )
    );
  };

  return (
    <ReactFlowContext.Provider
      value={{
        nodes,
        setNodes,
        onNodesChange,
        edges,
        setEdges,
        onEdgesChange,
        getNodeOutputData,
        setNodeOutputData,
      }}
    >
      {children}
    </ReactFlowContext.Provider>
  );
}

const useFlow = () => useContext(ReactFlowContext);

export { useFlow };
