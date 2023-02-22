import React from 'react'
import linkedinLogo from '../images/linkedinLogo.png'
import githubLogo from '../images/githubLogo.svg'
import emailLogo from '../images/emailLogo.png'
import { Link } from 'react-router-dom'
import Mailto from "react-mailto-link";

export function Contact() {
    return (
        <>
        <h1 className='mb-5 text-center'>Let's stay in touch</h1>
        <div className='flex space-x-10 p-10'>
            <Link to='https://www.linkedin.com/in/nelli-timorshina/' target='_blank'>
                <img className='w-[100px]' src={linkedinLogo} alt={linkedinLogo}/>
            </Link>
            <Link to='https://github.com/Raftouch' target='_blank'>
                <img className='w-[100px]' src={githubLogo} alt={githubLogo}/>
            </Link>
            <Mailto email='ntimorshina@gmail.com'>
                <img className='w-[100px]' src={emailLogo} alt={emailLogo}/>
            </Mailto>
        </div>
        </>
    )
}