import React, {useState} from 'react'
import { MyExperience } from '../models'

interface EducationProps {
    study: MyExperience
}

export function Education({study}: EducationProps) {
    const [details, setDetails] = useState(false)

    return (
        <div className='border py-2 px-4 rounded flex flex-col mb-2 min-w-[300px] items-center'>
            <p>{study.name}</p>
            <p>{study.occupation}</p>
            <button 
                className='py-2 px-4 border rounded'
                onClick={() => setDetails(prev => !prev)}
                >
                    {details ? 'Hide details' : 'Show details'}
            </button>
            {details && 
            <div className='w-[300px] text-center'>
                <p>{study.description}</p>
            </div>}
        </div>
    )
}