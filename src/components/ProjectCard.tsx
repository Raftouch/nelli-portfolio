import React from "react";
import { MyProject } from "../models/MyProject";
import { Link } from "react-router-dom";

interface ProjectProps {
  project: MyProject;
}

export function ProjectCard({ project }: ProjectProps) {
  return (
    <div className="group p-2 rounded flex flex-col min-w-[350px] min-h-[250px] items-center drop-shadow-2xl">
      <Link to={project.url} target="_blank">
        <img
          className="relative w-[350px] h-[250px] rounded"
          src={project.image}
          alt={project.image}
        />
        <div className="absolute inset-2 bg-black/80 text-[#f0f0f0] cursor-pointer w-[350px] h-[250px] rounded hidden group-hover:flex items-center justify-center">
          <div className="flex flex-col gap-5 items-center pl-10 pr-10">
            <h1 className="text-lg font-bold uppercase text-center">
              {project.title}
            </h1>
            {project.description}
          </div>
        </div>
      </Link>
    </div>
  );
}
