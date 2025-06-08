import React, { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";
import lightDark from "../images/lightDark.png";
import experience from "../images/experience.png";

export default function ButtonsRight() {
  const { open, style } = useContext(PortfolioContext);
  const button =
    "rounded-full border-white bg-[#f0f0f0] border-2 w-[40px] hover:bg-slate-500";

  return (
    <div className="fixed top-1/2 right-3 flex flex-col items-end space-y-5">
      <button className={button} onClick={open}>
        <img src={experience} alt="experience" />
      </button>
      <button className={button} onClick={style}>
        <img src={lightDark} alt="light-dark icon" />
      </button>
    </div>
  );
}
