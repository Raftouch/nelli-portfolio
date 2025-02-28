import React from "react";
import linkedinLogo from "../images/linkedinLogo.png";
import githubLogo from "../images/githubLogo.png";
import emailLogo from "../images/emailLogo.png";
import { Link } from "react-router-dom";
import Mailto from "react-mailto-link";

export function ButtonsLeft() {
  const contact =
    "w-[100px] bg-[#f0f0f0] rounded-full border-white border-2 hover:bg-slate-500";

  return (
    <div className="fixed top-1/3 left-2 flex flex-col space-y-5 w-[50px]">
      <Link to="https://www.linkedin.com/in/nelli-timorshina/" target="_blank">
        <img className={contact} src={linkedinLogo} alt={linkedinLogo} />
      </Link>
      <Link to="https://github.com/Raftouch" target="_blank">
        <img className={contact} src={githubLogo} alt={githubLogo} />
      </Link>
      <Mailto email="ntimorshina@gmail.com">
        <img className={contact} src={emailLogo} alt={emailLogo} />
      </Mailto>
    </div>
  );
}
