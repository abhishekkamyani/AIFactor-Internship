import React, { memo } from 'react'
import { Handle } from 'reactflow'
import { useFlow } from '../ReactFlowContext';

function Output({ data, isConnectable }) {
    const {getNodeOutputData} = useFlow();
    const input = getNodeOutputData(data.source?.input);
    return (
        <div className='relative w-20 h-28 custom-drag-handle'>
            <img src={`./images/${input == 1 ? "Light-On" : "Light-Off"}.png`} alt='Output Node' className='h-full w-full' />
            <Handle position='bottom' id='input' type='target' isConnectable={isConnectable} className='handle handle-target ' />
        </div>
    )
}
export default memo(Output);