import React, {useState} from 'react'
import { MyExperience } from '../models/MyExperience'

interface WorkProps {
    job: MyExperience
}

export function Work({job}: WorkProps) {
    const [details, setDetails] = useState(false)

    return (
        <div className='border py-2 px-4 rounded flex flex-col mb-2 min-w-[300px] items-center gap-2'>
            <p>{job.name}</p>
            <p>{job.occupation}</p>
            <button 
                className='py-2 px-4 border rounded'
                onClick={() => setDetails(prev => !prev)}
                >
                    {details ? 'Hide details' : 'Show details'}
            </button>
            {details && 
            <div className='max-w-[250px] text-center'>
                <p>{job.period}</p>
                <p>{job.description}</p>
            </div>}
        </div>
    )
}