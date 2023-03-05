import React from 'react'
import { Education } from './Education'
import { Work } from './Work'
import { studies } from '../data/study'
import { jobs } from '../data/work'

export function Experience() {
    const heading = ['text-center mb-5 mt-8 font-bold uppercase text-xl justify-items-center']

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center'>
        <div>
            <h1 className={heading.join('')}>Studies</h1>
            <div className='flex flex-col flex-wrap justify-center gap-5 m-5'>
                {studies.map(study => <Education study={study} key={study.id}/>)}
            </div>
        </div>
        <div>
            <h1 className={heading.join('')}>Work experience</h1>
            <div className='flex flex-col flex-wrap justify-center gap-5 m-5'>
                {jobs.map(job => <Work job={job} key={job.id}/>)}
            </div>
        </div>
    </div>
  )
}
