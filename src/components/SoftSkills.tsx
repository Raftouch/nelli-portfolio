import React from 'react'
import { MySkills } from '../models/MySkills'

interface SoftSkillsProps {
    soft: MySkills
}

export default function SoftSkills({soft}: SoftSkillsProps) {
  return (
    <div className='grid grid-cols-2 border rounded'>
                <p>{soft.title}</p>
        </div>
  )
}
