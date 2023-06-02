import React from "react";
import { MyExperience } from "../models/MyExperience";

interface WorkProps {
  job: MyExperience;
}

export function Work({ job }: WorkProps) {
  return (
    <div className="border py-2 px-4 rounded flex flex-col mb-2 w-[350px]">
      <div className="flex space-x-2">
        <p>{job.name} -</p>
        <p className="font-bold">{job.occupation}</p>
      </div>
      <p>{job.period}</p>
      <p className="italic">{job.description}</p>
    </div>
  );
}
