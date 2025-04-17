import { useContext } from "react";
import { Experience } from "./Experience";
import { Skills } from "./Skills";
import { PortfolioContext } from "../context/PortfolioContext";

export function Resume() {
  const { close } = useContext(PortfolioContext);

  return (
    <div className="bg-black/5">
      <div className="max-w-[400px] flex flex-col gap-2 p-8">
        <p className="text-sm">Nelli Timorshina</p>
        <h1 className="uppercase font-bold">Developpeuse IA, en alternance</h1>
      </div>
      <button
        className="absolute right-10 top-10 px-4 py-2 font-bold hover:text-red-900"
        onClick={close}
      >
        X
      </button>
      <div className="flex flex-wrap">
        <div className="w-[250px]">
          <Skills />
        </div>
        <div>
          <Experience />
        </div>
      </div>
    </div>
  );
}
