import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
    return (
        <nav className='fixed h-[100px] w-full bg-black text-white flex justify-between items-center px-5 border-b-[3px]'>
            <span className='max-w-[130px]'>Nelli Timorshina WEB DEVELOPER</span>
            <span>
                <Link to="/" className='mr-5 hover:text-slate-500'>Home</Link>
                <Link to="/projects" className='hover:text-slate-500'>Projects</Link>
            </span>
        </nav>
    )
}