import React from "react";

export default function Sidebar() {
  const onDragStart = (e, nodeType) => {
    
    // setData(format, data)
    e.dataTransfer.setData("application/reactflow", nodeType);
    
    e.dataTransfer.effectAllowed = "move";
    // console.log(e.dataTransfer.getData("application/reactflow"));
    // console.log(e);
  };
  return (
    <div className="flex basis-1/5 h-screen bg-black">
      {/* sidebar */}
      <div className="w-full bg-gray-800 flex flex-col">
        <div className="flex items-center justify-center basis-1/12 bg-gray-900">
          <span className="text-white font-bold text-xs uppercase">
            Select Nodes
          </span>
        </div>
        {/* items */}
        <nav className="bg-gray-200 basis-full pt-5 select-none">
          <ul className="flex flex-col gap-10 items-center justify-center">
            <li className="border-b px-2 md:px-12 pb-2 border-black">
              <img src="./images/AND.png" className="h-full w-full" onDragStart={(e) => onDragStart(e, "AND")} />
            </li>
          </ul>
        </nav>
      </div>
      {/* Main content */}
    </div>
  );
}
