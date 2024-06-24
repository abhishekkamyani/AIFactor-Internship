import React, { memo } from 'react'
import { Handle } from 'reactflow'

function Output({ data, isConnectable }) {
    console.log(data);
    return (
        <div className='relative w-20 h-28'>
            <img src='./images/Light-Off.png' alt='Output Node' className='h-full w-full' />
            <Handle position='bottom' type='target' isConnectable={isConnectable} className='handle handle-target ' />
        </div>
    )
}
export default memo(Output);