import React from 'react'
import { MyExperience } from '../models/MyExperience'

interface EducationProps {
    study: MyExperience
}

export function Education({study}: EducationProps) {

    return (
        <div className='border py-2 px-4 rounded flex flex-col mb-2 w-[350px]'>
                <p className='font-bold'>{study.name}</p>
                <p>{study.occupation}</p>
                <p className='text-sm'>{study.period}</p>
                <p className='text-sm'>{study.description}</p>
        </div>
    )
}