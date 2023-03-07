import React from 'react'
import { Education } from './Education'
import { Work } from './Work'
import { studies } from '../data/study'
import { jobs } from '../data/work'

export function Experience() {
    const heading = ['mb-3 mt-5 ml-5 font-bold uppercase text-md justify-items-center']
    const experience = ['flex flex-col flex-wrap justify-center m-5']

  return (
    <div className='flex flex-col'>
        <div>
            <h1 className={heading.join('')}>Studies</h1>
            <div className={experience.join('')}>
                {studies.map(study => <Education study={study} key={study.id}/>)}
            </div>
        </div>
        <div>
            <h1 className={heading.join('')}>Work experience</h1>
            <div className={experience.join('')}>
                {jobs.map(job => <Work job={job} key={job.id}/>)}
            </div>
        </div>
    </div>
  )
}