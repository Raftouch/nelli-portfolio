import React, { useContext } from "react";
import { Navigation } from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import { Modal } from "./components/Modal";
import { ButtonsLeft } from "./components/ButtonsLeft";
import { MainPage } from "./pages/MainPage";
import { ProjectPart } from "./components/ProjectPart";
import { Resume } from "./components/Resume";
import { PortfolioContext } from "./context/PortfolioContext";
import ButtonsRight from "./components/ButtonsRight";
import Style from "./components/Style";

function App() {
  const { modal } = useContext(PortfolioContext);

  return (
    <Style>
      <div className={modal ? "position: fixed" : "position: static"}>
        <Navigation />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/projects" element={<ProjectPart />} />
        </Routes>
      </div>
      <ButtonsLeft />
      {modal && (
        <Modal>
          <Resume />
        </Modal>
      )}
      <ButtonsRight />
    </Style>
  );
}

export default App;
