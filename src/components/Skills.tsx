import React from 'react'
import { softskills } from '../data/softskills'
import { SoftSkills } from './SoftSkills'
import { Languages } from './Languages'
import { Hobby } from './Hobby'
import { hobbies } from '../data/hobby'
import { languages } from '../data/languages'
import { ItSkills } from './ItSkills'
import { itskills } from '../data/itskills'

export function Skills() {
    const heading = ['mb-3 mt-5 ml-5 font-bold uppercase justify-items-center']
    const skill = ['flex flex-col gap-4 m-5 pl-2']

  return (
    <div className='flex flex-col'>
        <div>
            <h1 className={heading.join('')}>IT Skills</h1>
            <div className={skill.join('')}>
                <div className='grid grid-cols-2 gap-5 mt-2'>
                    {itskills.map(it => <ItSkills it={it} key={it.id} />)}
                </div>
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
            <div className='flex w-[150px]'>
                <div className={skill.join('')}>
                    {languages.map(language => <Languages language={language} key={language.id}/>)}
                </div>
                <div className={skill.join('text-green-600')}>
                    <p>&#10003;&#10003;&#10003;&#10003;</p>
                    <p>&#10003;&#10003;&#10003;&#10003;</p>
                    <p>&#10003;&#10003;&#10003;&#10003;</p>
                    <p>&#10003;&#10003;&#10003;&#10003;&#10003;</p>
                    <p>&#10003;&#10003;</p>
                    <p>&#10003;</p>
                </div>
            </div>
        </div>
        <div>
            <h1 className={heading.join('')}>Hobbies</h1>
            <div className={skill.join('')}>
                {hobbies.map(hobby => <Hobby hobby={hobby} key={hobby.id}/>)}   
            </div>
        </div>
    </div>
  )
}