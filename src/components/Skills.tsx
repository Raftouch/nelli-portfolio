import React from 'react'
import { itskills } from '../data/itskills'
import { softskills } from '../data/softskills'
import { ItSkills } from './ItSkills'
import { SoftSkills } from './SoftSkills'
import { languages } from '../data/languages'
import { Languages } from './Languages'
import { Hobby } from './Hobby'
import { hobbies } from '../data/hobby'

export default function Skills() {
    const heading = ['mb-3 mt-5 ml-5 font-bold uppercase justify-items-center']
    const skill = ['flex flex-col flex-wrap justify-center gap-5 m-5 pl-2']

  return (
    <div className='flex flex-col'>
        <div>
            <h1 className={heading.join('')}>IT Skills</h1>
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
            <div className='flex w-[150px] pl-7 mb-5'>
                <Languages />
                <div className='flex flex-col gap-5 ml-5 text-green-600'>
                    <p>&#10003;&#10003;&#10003;&#10003;</p>
                    <p>&#10003;&#10003;&#10003;&#10003;</p>
                    <p>&#10003;&#10003;&#10003;&#10003;</p>
                    <p>&#10003;&#10003;&#10003;&#10003;&#10003;</p>
                    <p>&#10003;&#10003;</p>
                    <p>&#10003;</p>
                </div>
            </div>
        </div>

        {/* <div>
            <h1 className={heading.join('')}>Langues</h1>
            <div className={skill.join('')}>
                {languages.map(language => <Languages language={language} key={language.id}/>)}   
            </div>
        </div> */}
        <div>
            <h1 className={heading.join('')}>Hobbies</h1>
            <div className={skill.join('')}>
                {hobbies.map(hobby => <Hobby hobby={hobby} key={hobby.id}/>)}   
            </div>
        </div>
    </div>
  )
}
