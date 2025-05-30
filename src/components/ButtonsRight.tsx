import React, { useContext } from "react";
import { PortfolioContext } from "../context/PortfolioContext";

export default function ButtonsRight() {
  const { open, style } = useContext(PortfolioContext);
  const button =
    "rounded-full border-white bg-[#f0f0f0] border-2 w-[40px] hover:bg-slate-500";

  return (
    <div className="fixed top-1/2 right-3 flex flex-col items-end space-y-5">
      <button className={button} onClick={open}>
        <img src="../images/exp.png" alt="experience" />
      </button>
      <button className={button} onClick={style}>
        <img src="../images/lightDark.png" alt="light-dark icon" />
      </button>
    </div>
  );
}
