import React, {useState} from 'react'
import { MyExperience } from '../models/MyExperience'

interface WorkProps {
    job: MyExperience
}

export function Work({job}: WorkProps) {
    const [details, setDetails] = useState(false)

    return (
        <div className='border py-2 px-4 rounded flex flex-col mb-2 w-[300px] items-center gap-2'>
            <p className='font-bold'>{job.name}</p>
            <p>{job.occupation}</p>
            <button 
                className='py-2 px-4 rounded-md bg-black text-white'
                onClick={() => setDetails(prev => !prev)}
                >
                    {details ? '-' : '+'}
            </button>
            {details && 
            <div className='w-[300px] text-center italic'>
                <p className='font-bold'>{job.period}</p>
                <p>{job.description}</p>
            </div>}
        </div>
    )
}