import React from "react";
import { itskills } from "../data/itskills";
import nellidev1 from "../images/nellidev1.png";
import { ItSkills } from "./ItSkills";

export function AboutPart() {
  return (
    <div className="pt-44 flex items-center justify-center flex-wrap">
      <img
        className="max-w-[300px] rounded border-2 border-black mt-10 mb-10 mr-20 ml-20"
        src={nellidev1}
        alt={nellidev1}
      />
      <div className="max-w-[550px] flex flex-col gap-5 ml-20 mr-20">
        <div>
          <h1 className="text-3xl font-bold uppercase mb-5">
            Data Engineer en alternance
          </h1>
          <p className="mb-5">Bonjour, je suis Nelli,</p>
          <p>
            Passionnée par la gestion et l’analyse des données, je suis
            actuellement à la recherche d’une alternance en tant que Data
            Engineer. Forte d’une expérience en développement fullstack et de
            compétences en gestion des données et des API, je souhaite
            approfondir mes connaissances dans le domaine de la data pour
            contribuer à des projets innovants.
          </p>
        </div>
        <div>
          <h1 className="uppercase font-bold mb-5">IT Skills</h1>
          <div className="flex gap-5 items-center flex-wrap">
            {itskills.map((it) => (
              <ItSkills it={it} key={it.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
