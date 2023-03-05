import React from 'react'
import languages from '../images/languages.png'

export function HomePage() {
    const heading = ['text-center mb-5 mt-8 font-bold uppercase text-xl justify-items-center']

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center'>
            {/* <div className='flex flex-col items-center justify-center'>
                <p className={heading.join('')}>IT Skills</p>
                <div className='flex'>
                    <img src={languages} alt="languages"/>
                </div>
            </div> */}
            {/* <div>
                <p className={heading.join('')}>Languages</p>
                <table className='flex flex-col justify-center items-center text-xl mb-20'>
                    <tr>
                        <td className='p-3 text-violet-700'>BONJOUR</td>
                    </tr>
                    <tr>
                        <td className='p-3 text-green-700'>BUENOS DIAS</td>
                    </tr>
                    <tr>
                        <td className='p-3 text-rose-700'>HELLO</td>
                    </tr>
                    <tr>
                        <td className='p-3 text-blue-700'>ПРИВЕТ</td>
                    </tr>
                    <tr>
                        <td className='p-3 text-lime-700'>GUTEN TAG</td>
                    </tr>
                    <tr>
                        <td className='p-3 text-red-700'>안녕하세요</td>
                    </tr>
                </table>
            </div> */}
        </div>
    )
}