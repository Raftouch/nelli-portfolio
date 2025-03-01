import React from "react";
import { AboutPart } from "../components/AboutPart";
import { ProjectPart } from "../components/ProjectPart";

export function MainPage() {
  return (
    <div className="h-full">
      <AboutPart />
      <ProjectPart />
    </div>
  );
}
