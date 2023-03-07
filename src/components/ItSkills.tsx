import React from 'react'
import { MySkills } from '../models/MySkills'

interface ItSkillsProps {
    it: MySkills
}

export function ItSkills({it}: ItSkillsProps) {
  return (
    <div>
                <p>{it.title}</p>
        </div>
  )
}
