import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PortfolioContext } from "../context/PortfolioContext";

export function Navigation() {
  const { dark } = useContext(PortfolioContext);

  return (
    <nav
      className={`z-10 fixed h-[100px] w-full flex justify-between items-center px-5 border-b-[3px] ${
        dark
          ? "border-[#f0f0f0] bg-[#333333] text-[#f0f0f0]"
          : "border-[#333333] bg-[#f0f0f0] text-[#333333]"
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
