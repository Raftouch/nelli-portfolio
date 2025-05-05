import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PortfolioContext } from "../context/PortfolioContext";

export function Navigation() {
  const { dark } = useContext(PortfolioContext);

  return (
    <nav
      className={`z-10 fixed h-[100px] w-full flex justify-between items-center px-5 border-b-[3px] ${
        dark
          ? "border-[#ffffff] bg-[#000000] text-[#ffffff]"
          : "border-[#000000] bg-[#ffffff] text-[#000000]"
      } font-serif`}
    >
      <span className="max-w-[200px]">NT</span>
      <span>
        <Link to="/" className="mr-5 hover:text-slate-500">
          À propos
        </Link>
        <Link to="/projects" className="hover:text-slate-500">
          Projets
        </Link>
      </span>
    </nav>
  );
}
