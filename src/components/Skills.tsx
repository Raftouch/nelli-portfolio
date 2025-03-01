import React from "react";
import { softskills } from "../data/softskills";
import { SoftSkills } from "./SoftSkills";
import { Languages } from "./Languages";
import { Hobby } from "./Hobby";
import { hobbies } from "../data/hobby";
import { languages } from "../data/languages";
import { ItSkills } from "./ItSkills";
import { itskills } from "../data/itskills";

export function Skills() {
  const heading = "mb-3 mt-4 ml-8 font-bold uppercase justify-items-center";
  const skill = "flex flex-col gap-2.5 m-5 pl-4 text-sm";

  return (
    <div className="flex flex-col">
      <div>
        <h1 className={heading}>IT Skills</h1>
        <div className={skill}>
          <div className="grid grid-cols-3 gap-5 mt-1">
            {itskills.map((it) => (
              <ItSkills it={it} key={it.id} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <h1 className={heading}>Soft Skills</h1>
        <div className={skill}>
          {softskills.map((soft) => (
            <SoftSkills soft={soft} key={soft.id} />
          ))}
        </div>
      </div>
      <div>
        <h1 className={heading}>Langues</h1>
        <div className={skill}>
          {languages.map((language) => (
            <Languages language={language} key={language.id} />
          ))}
        </div>
      </div>
      <div>
        <h1 className={heading}>Hobbies</h1>
        <div className={skill}>
          {hobbies.map((hobby) => (
            <Hobby hobby={hobby} key={hobby.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
