import React from 'react'
import { MyProject } from '../models/MyProject'
import { Link } from 'react-router-dom'

interface ProjectProps {
    project: MyProject
}

export function Projects({project}: ProjectProps) {
    return (
        <div className='border py-2 px-4 rounded flex flex-col mb-2 min-w-[300px] items-center'>
            <p>{project.title}</p>
            <img className='min-w-[350px] min-h-[250px]' src={project.image}/>
            <p>{project.languages}</p>
            <Link to={project.url} target='_blank'>link</Link>
        </div>
    )
}
