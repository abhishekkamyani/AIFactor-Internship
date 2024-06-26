const nodesData = [
  { src: "./images/AND.png", type: "and" },
  { src: "./images/OR.png", type: "or" },
  { src: "./images/NOT.png", type: "not" },
  { src: "./images/Switch-Off.png", type: "switchButton", additionalClasses: "border border-black" },
  { src: "./images/Light-Off.png", type: "light" },
]

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
            {nodesData.map((node, index) => <li className="sidebar-item" key={index}>
              <img src={node.src} className={`sidebar-item-img ${node.additionalClasses}`} onDragStart={(e) => onDragStart(e, node.type)} />
            </li>
            )}
          </ul>
        </nav>
      </div>
      {/* Main content */}
    </div>
  );
}