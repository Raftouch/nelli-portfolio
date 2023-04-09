import React, { useContext, useState, useMemo } from "react";
import { Navigation } from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import { Modal } from "./components/Modal";
import { ButtonsLeft } from "./components/ButtonsLeft";
import { AboutPage } from "./pages/AboutPage";
import { ProjectPart } from "./components/ProjectPart";
import { Resume } from "./components/Resume";
import ButtonCV from "./components/ButtonCV";
import { PortfolioContext } from "./context/ModalContext";

function App() {
  const { modal } = useContext(PortfolioContext);
  const [dark, setDark] = useState(false);
  const button = [
    "rounded-full border-white bg-white border-2 w-[50px] hover:bg-slate-500",
  ];

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);

  return (
    <div style={themeStyles}>
      <div className={modal ? "position: fixed" : "position: static"}>
        <Navigation />
        <Routes>
          <Route path="/" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectPart />} />
        </Routes>
      </div>
      <ButtonsLeft />
      {modal && (
        <Modal>
          <Resume />
        </Modal>
      )}
      <div className="fixed top-1/3 right-2 flex flex-col items-end space-y-5">
        <ButtonCV />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          <img
            className={button.join("")}
            src="../images/lightDark.png"
            alt="light-dark icon"
          />
        </button>
      </div>
    </div>
  );
}

export default App;
