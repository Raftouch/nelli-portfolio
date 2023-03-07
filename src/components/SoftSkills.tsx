import React from 'react'
import { MySkills } from '../models/MySkills'

interface SoftSkillsProps {
    soft: MySkills
}

export function SoftSkills({soft}: SoftSkillsProps) {
  return (
    <div>
        {soft.title}
    </div>
  )
}
