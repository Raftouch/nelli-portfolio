import React from 'react'
import { Education } from '../components/Education'
import { Work } from '../components/Work'
import { studies } from '../data/study'
import { jobs } from '../data/work'

export function AboutPage() {
    const heading = ['text-center mb-10 animate-bounce font-bold uppercase']

    return (
        <div className='container m-20 flex gap-10 justify-center flex-wrap mx-auto'>
            <div>
                <h1 className={heading.join('')}>Studies</h1>
                <div className='flex flex-wrap justify-center gap-5'>
                    {studies.map(study => <Education study={study} key={study.id}/>)}
                </div>
            </div>
            <div>
                <h1 className={heading.join('')}>Work experience</h1>
                <div className='flex flex-wrap justify-center gap-5'>
                    {jobs.map(job => <Work job={job} key={job.id}/>)}
                </div>
            </div>
        </div>
    )
}