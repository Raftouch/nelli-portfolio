import React, {useState} from 'react'
import { MyExperience } from '../models/MyExperience'

interface EducationProps {
    study: MyExperience
}

export function Education({study}: EducationProps) {
    const [details, setDetails] = useState(false)

    return (
        <div className='border py-2 px-4 rounded flex flex-col mb-2 w-[300px] items-center gap-2'>
                <p className='font-bold'>{study.name}</p>
                <p>{study.occupation}</p>
            <button
                className='py-2 px-4 rounded-md bg-black text-white'
                onClick={() => setDetails(prev => !prev)}
                >
                    {details ? '-' : '+'}
            </button>
            {details && 
            <div className='w-[300px] text-center italic'>
                <p className='font-bold'>{study.period}</p>
                <p>{study.description}</p>
            </div>}
        </div>
    )
}