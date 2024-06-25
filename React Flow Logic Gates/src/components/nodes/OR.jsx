import { useEffect } from 'react'
import { Handle } from 'reactflow'
import { useFlow } from '../ReactFlowContext';

export default function OR({ data, id }) {
    const { getNodeOutputData, setNodeOutputData } = useFlow();
    const inputA = getNodeOutputData(data.source?.inputA);
    const inputB = getNodeOutputData(data.source?.inputB);

    useEffect(() => {
        const output = (inputA == 1 || inputB == 1) ? 1 : 0;
        setNodeOutputData(id, output);
    }, [inputA, inputB]);
    return (
        <div className='w-40 h-20 custom-drag-handle'>
            <img src='./images/OR.png' alt='OR gate' className='h-full w-full' />
            <h3 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-extrabold'>OR</h3>
            <Handle type='target' id='inputA' className='handle handle-target -left-[1%] top-[20%]' />
            <Handle type='target' id='inputB' className='handle handle-target -left-[1%] top-[70%]' />
            <Handle type='source' id='output' className='handle handle-source ' position='right' />
        </div>
    )
}