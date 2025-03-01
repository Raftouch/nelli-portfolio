import React from "react";
import { MyExperience } from "../models/MyExperience";

interface EducationProps {
  study: MyExperience;
}

export function Education({ study }: EducationProps) {
  return (
    <div className="border py-2 px-4 rounded flex flex-col mb-2 w-[350px]">
      <p>{study.name}</p>
      <p className="font-bold">{study.occupation}</p>
      <p>{study.period}</p>
      <p className="text-xs">{study.description}</p>
    </div>
  );
}
