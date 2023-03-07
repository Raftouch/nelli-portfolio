import React from 'react'
import { itskills } from '../data/itskills'
import { softskills } from '../data/softskills'
import { ItSkills } from './ItSkills'
import { Languages } from './Languages'
import SoftSkills from './SoftSkills'

export default function Skills() {
    const heading = ['mb-3 mt-5 ml-5 font-bold uppercase justify-items-center']
    const skill = ['flex flex-col flex-wrap justify-center gap-5 m-5']

  return (
    <div className='flex flex-col'>
        <div>
            <h1 className={heading.join('')}>IT</h1>
            <div className={skill.join('')}>
                {itskills.map(it => <ItSkills it={it} key={it.id}/>)}
            </div>
        </div>
        <div>
            <h1 className={heading.join('')}>Soft Skills</h1>
            <div className={skill.join('')}>
                {softskills.map(soft => <SoftSkills soft={soft} key={soft.id}/>)}
            </div>
        </div>
        <div>
            <h1 className={heading.join('')}>Langues</h1>
            <div className='m-5'>
                <Languages /> 
            </div>
        </div>
    </div>
  )
}
