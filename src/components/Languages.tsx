import React from 'react'
import { MySkills } from '../models/MySkills'

// interface LanguagesProps {
//     language: MySkills
// }
// export function Languages({language}: LanguagesProps) {
export function Languages() {
    return (
        // <div>
        //         {language.title}
        <div className='flex gap-5 items-center flex-wrap'>
            <p className='text-violet-700'>Français</p>
            <p className='text-green-700'>Anglais</p>
            <p className='text-blue-700'>Allemand</p>
            <p className='text-cyan-700'>Russe</p>
            <p className='text-yellow-700'>Espagnol</p>
            <p className='text-red-700'>Turque</p>  
        </div>

        //         <div>
        //             <p>&#10003;&#10003;&#10003;&#10003;</p>
        //             <p>&#10003;&#10003;&#10003;&#10003;&#10003;</p>
        //         </div>
        // </div>
    )
}