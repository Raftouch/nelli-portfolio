import React, { useState } from 'react'
import {BsChevronCompactLeft} from 'react-icons/bs'
import {BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
import { MySkills } from '../models/MySkills'

interface SkillsProps {
    skills: Array<MySkills>;
}

export function Skills({skills}: SkillsProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? skills.length-1 : currentIndex-1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === skills.length-1;
        const newIndex = isLastSlide ? 0 : currentIndex+1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex)
    }

  return (
    <div className='max-w-[700px] m-auto py-20 px-4 relative group'>
        <h1 className='text-center m-10 uppercase text-3xl'>Skills</h1>
        <div className='border-2 flex flex-col justify-center items-center pt-10 pb-10 pl-12 pr-12 m-auto h-[400px]'>
            <p className='uppercase font-bold text-xl mb-3'
            >
                {skills[currentIndex].title}</p>
           <img src={skills[currentIndex].url} />
        </div>
        <div className='absolute top-[50%] -translate-x-0 translate-y-[20%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white hover:text-slate-500 cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className='absolute top-[50%] -translate-x-0 translate-y-[20%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white hover:text-slate-500 cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className='flex justify-center py-5 '>
            {skills.map((slide, slideIndex) => (
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