import React from "react";
import { MySkills } from "../models/MySkills";

interface LanguagesProps {
  language: MySkills;
}

export function Languages({ language }: LanguagesProps) {
  return <div>{language.title}</div>;
}
