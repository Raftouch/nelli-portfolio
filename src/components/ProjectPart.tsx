import React from "react";
import { Projects } from "./Projects";
import { projects } from "../data/project";

export function ProjectPart() {
  return (
    <>
      <h1 className="text-center pt-48 uppercase text-3xl">Quelques projets</h1>
      <div className="h-full grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3 justify-items-center p-20">
        {projects.map((project) => (
          <Projects project={project} key={project.id} />
        ))}
      </div>
    </>
  );
}
