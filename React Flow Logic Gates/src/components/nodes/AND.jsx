import React, { memo } from 'react'
import { EdgeLabelRenderer, Handle } from 'reactflow'

function AND(props) {
  // const { inputA, inputB } = data;
  // console.log(inputA, inputB);

  // let output = 0;

  // if (inputA == 1, inputB == 1) {
  //   output = 1;
  // }

  console.log(props);

  return (
    <div className='w-40 h-24 relative'>
      <img src='./images/AND.png' alt='AND Gate' className='w-full h-full' />
      <h3 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold'>AND</h3>
      <Handle type='target' id='inputA'  className='handle handle-target -left-[1%] top-[21.5%]' />
      <Handle type='target' id='inputB'  className='handle handle-target -left-[1%] top-[71%]' />
      <Handle type='source' position='right'  className='handle handle-source' />
    </div>
  )
}

export default memo(AND);