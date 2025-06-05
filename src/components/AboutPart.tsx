import React from "react";
import { itskills } from "../data/itskills";
import nellidev from "../images/nellidev.png";
import { ItSkills } from "./ItSkills";

export function AboutPart() {
  return (
    <div className="font-serif pt-44 flex items-center justify-center flex-wrap">
      <img
        className="max-w-[300px] rounded mt-10 mb-10 mr-20 ml-20"
        src={nellidev}
        alt={nellidev}
      />
      <div className="max-w-[550px] flex flex-col gap-5 ml-20 mr-20">
        <div>
          <h1 className="text-3xl font-bold uppercase mb-5">
            Développeur Logiciel, en alternance
          </h1>
          <p className="mb-5">Bonjour, je suis Nelli,</p>
          <p>
            Passionnée par les métiers de la tech, je dispose d’une première
            expérience en développement fullstack et en relation client. Je
            propose mes compétences dans le cadre d’une alternance de 18 mois à
            partir de septembre 2025, avec un intérêt particulier pour les
            projets en développement web ou en intelligence artificielle.
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
