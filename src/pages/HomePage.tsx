import React from 'react'
import { Intro } from '../components/Intro'
import Skills from '../components/Skills'
import { skills } from '../data/skills'

export function HomePage() {
    return (
        <div className='h-full'>
            <Intro />
            <Skills skills={skills} />
        </div>
    )
}