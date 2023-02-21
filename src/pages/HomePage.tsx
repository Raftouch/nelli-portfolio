import React from 'react'
import nellidev from '../images/nellidev.jpeg'

export function HomePage() {
    return (
        <div className='mt-20 flex items-center justify-center gap-20 flex-wrap'>
            <img className='max-w-[300px] rounded-full border-2 border-black' src={nellidev} alt={nellidev}/>
            <h1>Hi I'm Nelli. Welcome to my world!</h1>
        </div>
    )
}