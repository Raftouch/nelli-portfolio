import React from 'react'
import nellidev from '../images/nellidev.jpeg'

export function Intro() {
  return (
    <div className='pt-40 flex items-center justify-center gap-20 flex-wrap'>
        <img className='max-w-[300px] rounded-full border-2 border-black' src={nellidev} alt={nellidev}/>
        <p>Hi I'm Nelli. Welcome to my world!</p>
    </div>
  )
}
