import React from "react";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export function Modal({ children, onClose }: ModalProps) {
  return (
    <>
      <div
        className="fixed bg-black/50 top-0 right-0 left-0 bottom-0"
        onClick={onClose}
      />
      <div className="z-20 min-w-[400px] p-5 rounded bg-white text-black absolute top-0 left-1/2 -translate-x-1/2">
        {children}
      </div>
    </>
  );
}
