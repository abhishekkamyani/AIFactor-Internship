import React, { memo, useState } from "react";
import { Handle } from "reactflow";
import { useFlow } from "../ReactFlowContext";

function SwitchButton({ data, isConnectable, id }) {

  // const [output, setOutput] = useState(data.output);
  const {setNodeOutputData} = useFlow();

  const handleOnClick = () => {
    // setOutput(output ? 0 : 1);
    const output = data.output ? 0 : 1;
    setNodeOutputData(id, output);
  };

  return (
    <div className="relative w-24 h-24">
      <img
        src={`./images/${data.output == 0 ? "Switch-Off" : "Switch-On"}.png`}
        alt="Switch Button"
        className="h-full w-full border border-black"
        onClick={handleOnClick}
      />
      <div className="absolute left-full top-[37%] custom-drag-handle cursor-move custom-drag-handle py-3">
        <div className="bg-black h-px w-14"></div>
        <Handle
          position="right"
          type="source"
          isConnectable={isConnectable}
          className="handle handle-source"
        />
      </div>
    </div>
  );
}

export default memo(SwitchButton);
