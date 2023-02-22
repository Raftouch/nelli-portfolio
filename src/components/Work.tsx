import React, {useState} from 'react'
import { MyExperience } from '../models/MyExperience'

interface WorkProps {
    job: MyExperience
}

export function Work({job}: WorkProps) {
    const [details, setDetails] = useState(false)
    const btnColor = details ? 'bg-white text-black border-2 border-black hover:bg-rose-200' : 'bg-black text-white hover:text-rose-200'
    const btnColors = ['py-2 px-4 rounded-md', btnColor]

    return (
        <div className='border py-2 px-4 rounded flex flex-col mb-2 min-w-[300px] items-center gap-2 bg-rose-100'>
            <p className='font-bold'>{job.name}</p>
            <p>{job.occupation}</p>
            <button 
                className={btnColors.join(' ')}
                onClick={() => setDetails(prev => !prev)}
                >
                    {details ? 'Hide details' : 'Show details'}
            </button>
            {details && 
            <div className='max-w-[250px] text-center italic'>
                <p className='font-bold'>{job.period}</p>
                <p>{job.description}</p>
            </div>}
        </div>
    )
}