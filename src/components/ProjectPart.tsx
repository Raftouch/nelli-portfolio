import React from "react";
import { projects } from "../data/project";
import { ProjectCard } from "./ProjectCard";

export function ProjectPart() {
  return (
    <>
      <h1 className="font-serif text-center pt-44 text-3xl font-bold uppercase">
        Projets récents et en cours
      </h1>
      <div className="min-h-full grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3 justify-items-center p-20">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}
      </div>
    </>
  );
}
