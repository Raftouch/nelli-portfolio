import React from 'react'
import { Experience } from './Experience'
import Skills from './Skills'
import cvpic from '../images/cvpic.png'
import { CvContacts } from './CvContacts'

export function Resume() {
  return (
    <div className='w-full h-full mt-14 bg-black/5'>
        <div className='flex gap-11 items-center ml-5 pt-10 flex-wrap'>
            <img className='max-w-[200px] rounded-full' src={cvpic} alt='' />
            <div className='max-w-[300px] flex flex-col gap-2'>
                <p className='text-sm'>Nelli Timorshina</p>
                <h1 className='uppercase font-bold'>Développeuse web</h1>
                <p className='text-sm'>Actuellement en reconversion professionnelle chez Simplon.co, je suis à la recherche d’un stage de deux mois</p>
            </div>
        </div>
        <div className='flex flex-wrap mt-3'>
            <div className='w-[250px]'>
                <CvContacts />
                <Skills />
            </div>
            <div>
                <Experience />
            </div>
        </div>
    </div>
  )
}