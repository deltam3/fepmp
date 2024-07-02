"use client";
import ReactDOM from "react-dom";
import { ReactNode, useEffect } from "react";
import styled from "styled-components";

type ModalProps = {
  onClose: () => void;
  children: ReactNode;
  actionBar: ReactNode;
};

const StyledOutsideArea = styled.div`
  position: fixed;
  inset: 0px;
  --tw-bg-opacity: 1;
  background-color: rgb(209 213 219 / var(--tw-bg-opacity));
  opacity: 0.8;
`;

const StyledModalContainer = styled.div`
  position: fixed;
  inset: 10rem;
  padding: 2.5rem;
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity));
  border-radius: 10px;
`;

function Modal({ onClose, children, actionBar }: ModalProps) {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="fixed z-[9999]">
      <StyledOutsideArea onClick={onClose}></StyledOutsideArea>
      <StyledModalContainer>
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </StyledModalContainer>
    </div>,
    document.querySelector(".modal-container") || document.createElement("div")
  );
}

export default Modal;
