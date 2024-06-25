import React, { memo, useEffect, useState } from 'react'
import { Handle, useNodes } from 'reactflow'
import { useFlow } from '../ReactFlowContext';

function AND({ data, id }) {
  const { getNodeOutputData, setNodeOutputData } = useFlow();
  const inputA = getNodeOutputData(data.source?.inputA);
  const inputB = getNodeOutputData(data.source?.inputB);

  useEffect(() => {
    const output = (inputA == 1 && inputB == 1) ? 1 : 0;
    setNodeOutputData(id, output);
  }, [inputA, inputB]);

  return (
    <div className='w-40 h-24 relative'>
      <img src='./images/AND.png' alt='AND Gate' className='w-full h-full' />
      <h3 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold'>AND</h3>
      <Handle type='target' id='inputA' className='handle handle-target -left-[1%] top-[21.5%]' />
      <Handle type='target' id='inputB' className='handle handle-target -left-[1%] top-[71%]' />
      <Handle type='source' position='right' className='handle handle-source' />
    </div>
  )
}

export default memo(AND);