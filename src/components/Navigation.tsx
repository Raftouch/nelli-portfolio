import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <nav className='h-[100px] flex justify-between items-center px-5 bg-gray-500 text-white'>
            <span className='max-w-[130px]'>Nelli Timorshina WEB DEVELOPER</span>
            <span>
                <Link to="/" className='mr-5 hover:text-gray-200'>Home</Link>
                <Link to="/about" className='mr-5 hover:text-gray-200'>About</Link>
                <Link to="/projects" className='hover:text-gray-200'>Projects</Link>
            </span>
        </nav>
    )
}