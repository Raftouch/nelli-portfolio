import React from "react";
import { MySkills } from "../models/MySkills";

interface ItSkillsProps {
  it: MySkills;
}

export function ItSkills({ it }: ItSkillsProps) {
  return (
    <div className="group">
      <p className="absolute -translate-x-0 translate-y-[-100%] bg-black/20 text-white rounded px-1 cursor-auto text-sm hidden group-hover:block">
        {it.title}
      </p>
      <img className="relative h-12" src={it.url} alt={it.title} />
    </div>
  );
}
