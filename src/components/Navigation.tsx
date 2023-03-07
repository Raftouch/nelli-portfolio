import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <nav className='z-10 fixed h-[100px] w-full bg-black text-white flex justify-between items-center px-5 border-b-[3px]'>
            <span className='max-w-[200px]'>NT</span>
            <span>
                <Link to="/" className='mr-5 hover:text-slate-500'>About</Link>
                <Link to="/projects" className='hover:text-slate-500'>Projects</Link>
            </span>
        </nav>
    )
}