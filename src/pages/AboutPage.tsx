import React from 'react'
import { AboutPart } from '../components/AboutPart'
import { ProjectPart } from '../components/ProjectPart'

export function AboutPage() {
    return (
        <div className='h-full font-serif'>
            <AboutPart />
            <ProjectPart />
        </div>
    )
}