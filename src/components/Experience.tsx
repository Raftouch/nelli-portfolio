import React from "react";
import { Education } from "./Education";
import { Work } from "./Work";
import { studies } from "../data/study";
import { jobs } from "../data/work";

export function Experience() {
  const heading =
    "mb-3 mt-5 ml-8 font-bold uppercase text-md justify-items-center";
  const experience = "flex flex-col ml-5 mr-5 text-sm";

  return (
    <div className="flex flex-col">
      <div>
        <h1 className={heading}>Expériences professionnelles</h1>
        <div className={experience}>
          {jobs.map((job) => (
            <Work job={job} key={job.id} />
          ))}
        </div>
      </div>
      <div>
        <h1 className={heading}>Formations</h1>
        <div className={experience}>
          {studies.map((study) => (
            <Education study={study} key={study.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
