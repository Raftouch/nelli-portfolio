import React from 'react'
import { Experience } from './Experience'
import { Skills } from './Skills'
import { Contact } from './Contact'

export function Resume() {
  return (
    <div className='w-full h-full mt-14 bg-black/5'>
        <div className='max-w-[450px] flex flex-col gap-2 p-5'>
            <p className='text-sm'>Nelli Timorshina</p>
            <h1 className='uppercase font-bold'>Développeuse web</h1>
            <p className='text-sm'>Actuellement en reconversion professionnelle chez Simplon.co, je suis à la recherche d’un stage de deux mois</p>
        </div>
        <div className='flex flex-wrap'>
            <div className='w-[250px]'>
                <Contact />
                <Skills />
            </div>
            <div>
                <Experience />
            </div>
        </div>
    </div>
  )
}