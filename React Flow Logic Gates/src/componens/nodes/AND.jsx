import React from 'react'
import { EdgeLabelRenderer, Handle } from 'reactflow'

export default function AND({data, isConnectable}) {
  console.log(data);
    return (
    <div className='w-40 h-24 relative'>
    <img src='./images/AND.png' alt='AND Gate' className='w-full h-full' />
    <Handle type='target'  className='absolute -left-[1%] top-[21.5%] bg-blue-600 p-1 border-none' />
    <Handle type='target'  className='absolute -left-[1%] top-[71%] bg-blue-600 p-1 border-none' />
    <Handle type='source' position='right'  className='absolute  bg-red-600 p-1 border-none' />
    
    </div>
  )
}