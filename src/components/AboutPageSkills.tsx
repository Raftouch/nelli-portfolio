import React from 'react'
import { Languages } from './Languages'

export function AboutPageSkills() {
  return (
    <div>
        <h1 className='uppercase font-bold mb-5'>IT Skills</h1>
        <div className='flex gap-3 items-center flex-wrap'>
            <img src='./logos/htmlcss.png' alt='logo html css'/>
            <img src='./logos/js.png' alt='logo js'/>
            <img src='./logos/git.png' alt='logo git'/>
            <img src='./logos/react.png' alt='logo react'/>
            <img src='./logos/ts.png' alt='logo typescript'/>
            <img src='./logos/wp.png' alt='logo wordpress'/>
            <img src='./logos/figma.png' alt='logo figma'/>
            <img src='./logos/nodejs.png' alt='logo nodejs'/>
            <img src='./logos/bootstrap.png' alt='logo bootstrap'/>
            <img src='./logos/tailwind.png' alt='logo tailwind'/>
            <img src='./logos/mongodb.png' alt='logo mongodb'/>
        </div>
    </div>
  )
}