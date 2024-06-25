import React, { memo, useEffect, useState } from 'react'
import { Handle, useNodes } from 'reactflow'

function AND({ data }) {
  // const [inputs, setInputs] = useState([data.inputA, data.inputB]);

  // const nodes = useNodes();
  
  // useEffect(() => {
  //   const sourceNodes = nodes.filter((node) => {
  //     if (node.id == data.source?.inputA || node.id == data.source?.inputB) {
  //       return node.data;
  //     }
  //   });
  //   setInputs(sourceNodes.map(source => source.data.output));
  // }, [data.source]);

  // console.log(data.source?.inputA);

  const {getNodeState} = data;
  getNodeState(data.source?.inputA);

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