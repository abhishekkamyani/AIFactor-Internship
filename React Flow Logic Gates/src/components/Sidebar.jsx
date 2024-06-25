import React from "react";

export default function Sidebar() {
  const onDragStart = (e, nodeType) => {
    
    // setData(format, data)
    e.dataTransfer.setData("application/reactflow", nodeType);
    
    e.dataTransfer.effectAllowed = "move";
  };
  return (
    <div className="flex basis-1/5 h-screen bg-black select-none">
      {/* sidebar */}
      <div className="w-full bg-gray-800 flex flex-col">
        <div className="flex items-center justify-center basis-1/12 bg-gray-900">
          <span className="text-white font-bold text-xs uppercase">
            Select Nodes
          </span>
        </div>
        {/* items */}
        <nav className="bg-gray-200 basis-full pt-5 overflow-y-auto">
          <ul className="flex flex-col items-center gap-y-5">
            <li className="sidebar-item">
              <img src="./images/AND.png" className="sidebar-item-img" onDragStart={(e) => onDragStart(e, "and")} />
            </li>
            <li className="sidebar-item">
              <img src="./images/OR.png" className="sidebar-item-img" onDragStart={(e) => onDragStart(e, "or")} />
            </li>
            <li className="sidebar-item">
              <img src="./images/NOT.png" className="sidebar-item-img" onDragStart={(e) => onDragStart(e, "not")} />
            </li>
            <li className="sidebar-item">
              <img src="./images/Switch-Off.png" className="sidebar-item-img border border-black" onDragStart={(e) => onDragStart(e, "switchButton")} />
            </li>
            <li className="sidebar-item border-none">
              <img src="./images/Light-Off.png" className="sidebar-item-img rotate-90" onDragStart={(e) => onDragStart(e, "light")} />
            </li>
          </ul>
        </nav>
      </div>
      {/* Main content */}
    </div>
  );
}
