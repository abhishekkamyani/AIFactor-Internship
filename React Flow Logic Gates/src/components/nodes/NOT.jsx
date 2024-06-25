import { Handle } from "reactflow";
import { useFlow } from "../ReactFlowContext";
import { useEffect } from "react";

export default function NOT({ data, id }) {
    const { getNodeOutputData, setNodeOutputData } = useFlow();
    const input = getNodeOutputData(data.source?.input);

    useEffect(() => {
        const output = input == 1 ? 0 : 1;
        setNodeOutputData(id, output);
    }, [input]);

    return (
        <div className="w-44 h-20 custom-drag-handle">
            <img src='./images/NOT.png' alt='AND Gate' className='w-full h-full' />
            <h3 className='absolute left-[44%] top-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold'>NOT</h3>
            <Handle type='target' id='input' className='handle handle-target' position="left" />
            <Handle type='source' position='right' className='handle handle-source' />
        </div>
    )
}