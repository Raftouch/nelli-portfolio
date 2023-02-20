import React from 'react'
import { Education } from '../components/Education'
import { Work } from '../components/Work'
import { studies } from '../data/study'
import { jobs } from '../data/work'

export function AboutPage() {
    return (
        <div className='container m-20 flex gap-10 justify-center flex-wrap mx-auto'>
            <div>
                {studies.map(study => <Education study={study} key={study.id}/>)}
            </div>
            <div>
                {jobs.map(job => <Work job={job} key={job.id}/>)}
            </div>
        </div>
    )
}