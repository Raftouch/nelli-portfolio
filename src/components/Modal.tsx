import React, { useContext } from "react";
import { PortfolioContext } from "../context/ModalContext";

interface ModalProps {
  children: React.ReactNode;
}

export function Modal({ children }: ModalProps) {
  const { close } = useContext(PortfolioContext);

  return (
    <>
      <div
        className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"
        onClick={close}
      />
      <div className="z-20 min-w-[400px] p-5 rounded bg-white text-black absolute top-0 left-1/2 -translate-x-1/2">
        {children}
      </div>
    </>
  );
}
