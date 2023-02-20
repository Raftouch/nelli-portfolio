import React from 'react'
import { MyProjects } from '../models/MyProjects'

interface ProjectsProps {
    project: MyProjects
}

export function Projects({project}: ProjectsProps) {
    return (
        <div>
            <p>{project.title}</p>
            <p>{project.languages}</p>
        </div>
    )
}
