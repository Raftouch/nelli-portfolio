import React, {useState} from 'react'
import { MyExperience } from '../models'

interface WorkProps {
    job: MyExperience
}

export function Work({job}: WorkProps) {
    const [details, setDetails] = useState(false)

    return (
        <div className='border py-2 px-4 rounded flex flex-col mb-2 min-w-[300px] items-center'>
            <p>{job.name}</p>
            <p>{job.occupation}</p>
            <button 
                className='py-2 px-4 border rounded'
                onClick={() => setDetails(prev => !prev)}
                >
                    {details ? 'Hide details' : 'Show details'}
            </button>
            {details && 
            <div className='w-[300px] text-center'>
                <p>{job.description}</p>
            </div>}
        </div>
    )
}