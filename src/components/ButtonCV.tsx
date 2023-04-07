import React, { useContext } from "react";
import { PortfolioContext } from "../context/ModalContext";

export default function ButtonCV() {
  const { open } = useContext(PortfolioContext);
  const button = [
    "rounded-full border-white bg-white border-2 w-[50px] hover:bg-slate-500",
  ];

  return (
    <button onClick={open}>
      <img
        className={button.join("")}
        src="../images/exp.png"
        alt="experience"
      />
    </button>
  );
}
