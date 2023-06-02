import React, { useContext } from "react";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { Contact } from "./Contact";
import { PortfolioContext } from "../context/ModalContext";

export function Resume() {
  const { close } = useContext(PortfolioContext);

  return (
    <div className="bg-black/5">
      <div className="w-[400px] flex flex-col gap-2 p-8">
        <p className="text-sm">Nelli Timorshina</p>
        <h1 className="uppercase font-bold">Développeuse web</h1>
        <p className="text-sm">
          Actuellement en reconversion professionnelle chez Simplon.co, je suis
          à la recherche d’une alternance pour une période de 18 mois
        </p>
      </div>
      <button
        className="absolute right-10 top-10 px-4 py-2 font-bold hover:text-red-900"
        onClick={close}
      >
        X
      </button>
      <div className="flex flex-wrap">
        <div className="w-[250px]">
          <Contact />
          <Skills />
        </div>
        <div>
          <Experience />
        </div>
      </div>
    </div>
  );
}
