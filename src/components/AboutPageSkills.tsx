import React from 'react'

export function AboutPageSkills() {
  return (
    <>
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
        </div>
    </div>
    <div>
        <h1 className='uppercase font-bold mb-5'>Languages</h1>
        <div className='flex gap-5 items-center flex-wrap'>
            <p className='text-violet-700'>Français</p>
            <p className='text-green-700'>Anglais</p>
            <p className='text-blue-700'>Allemand</p>
            <p className='text-cyan-700'>Russe</p>
            <p className='text-yellow-700'>Espagnol</p>
            <p className='text-red-700'>Turque</p>  
        </div>
    </div>
    </>
  )
}
