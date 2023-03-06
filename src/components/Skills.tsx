import React, { useState } from 'react'
import {BsChevronCompactLeft} from 'react-icons/bs'
import {BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import { MyProject } from '../models/MyProject'

interface ProjectProps {
    projects: Array<MyProject>;
}

export function Skills({projects}: ProjectProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? projects.length-1 : currentIndex-1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === projects.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex+1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex)
    }

  return (
    <div className='z-0 max-w-[700px] m-auto py-20 px-4 relative group'>
        <h1 id='projects' className='text-center m-10 uppercase text-3xl'>Projects</h1>
        <div className='border p-2 rounded flex flex-col m-2 min-w-[350px] items-center hover:drop-shadow-2xl'>
            <p className='text-center uppercase font-bold text-lg mb-3'
            >
                {projects[currentIndex].title}</p>
           <img className='w-[400px] cursor-pointer' src={projects[currentIndex].image} />
        </div>
        <div className='absolute top-[50%] -translate-x-0 translate-y-[20%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white hover:text-slate-500 cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className='absolute top-[50%] -translate-x-0 translate-y-[20%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white hover:text-slate-500 cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex justify-center py-5 '>
            {projects.map((project, slideIndex) => (
                <div 
                    key={slideIndex} 
                    onClick={() => goToSlide(slideIndex)} 
                    className='text-2xl cursor-pointer hover:text-slate-500'>
                    <RxDotFilled />
                </div>
            ))}
        </div>
    </div>
  )
}