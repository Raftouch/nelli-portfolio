import React from "react";
import { itskills } from "../data/itskills";
import nellidev1 from "../images/nellidev1.png";
import { ItSkills } from "./ItSkills";

export function AboutPart() {
  return (
    <div className="pt-44 flex items-center justify-center flex-wrap">
      <img
        className="max-w-[300px] rounded border-2 border-black mb-10 mr-20 ml-20"
        src={nellidev1}
        alt={nellidev1}
      />
      <div className="max-w-[550px] flex flex-col gap-5 ml-20 mr-20">
        <div>
          <h1 className="text-2xl font-bold uppercase mb-5">
            Développeuse web
          </h1>
          <p className="mb-5">Bonjour, je suis Nelli,</p>
          <p>
            Après plusieurs années à chercher et à essayer, j'ai enfin trouvé ma
            voie, j'ai trouvé ma passion - développement web moderne, responsive
            et fonctionnel. <br /> Actuellement en reconversion professionnelle
            chez Simplon.co, je suis à la recherche d’un stage de deux mois.{" "}
            <br /> Bien qu'il me reste encore beaucoup à apprendre, je suis
            convaincue que mon esprit d'initiative, ma motivation et ma bonne
            humeur ensemble avec mes compétences acquises peuvent produire de
            très bons résultats.
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
