import React from 'react'
import nellidev1 from '../images/nellidev1.png'
import { AboutPageSkills } from './AboutPageSkills'
import { Languages } from './Languages'

export function AboutPart() {
  return (
    <div className='pt-48 flex items-center justify-center flex-wrap'>
        <img className='max-w-[300px] rounded-full border-2 border-black mb-10' src={nellidev1} alt={nellidev1}/>
        <div className='max-w-[600px] flex flex-col gap-5 ml-20 mr-20'>
          <div>
            <h1 className='text-2xl font-bold uppercase mb-5'>Web Developer</h1>
            <p className='mb-5'>Hi I'm Nelli.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut quia laudantium doloribus corporis corrupti eveniet aliquam quidem quo eum magni consequuntur repellat, asperiores, excepturi minus sint commodi quis laboriosam veritatis.</p>
          </div>
         <AboutPageSkills />
        </div>
    </div>
  )
}