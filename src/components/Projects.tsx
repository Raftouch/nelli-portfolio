import React from 'react'
import { MyProject } from '../models/MyProject'
import { Link } from 'react-router-dom'

interface ProjectProps {
    project: MyProject
}

export function Projects({project}: ProjectProps) {
    return (
        <div className='border p-2 rounded flex flex-col m-2 min-w-[350px] items-center hover:drop-shadow-2xl'>
            <p className='font-bold mb-2'>{project.title}</p>
            <Link to={project.url} target='_blank'>
                <img className='w-[350px] h-[250px] rounded' src={project.image}/>
            </Link>
        </div>
    )
}
