import React from 'react'
import { MySkills } from '../models/MySkills'

interface HobbyProps {
  hobby: MySkills
}

export function Hobby({hobby}: HobbyProps) {
  return (
    <div>
      {hobby.title}
    </div>
  )
}