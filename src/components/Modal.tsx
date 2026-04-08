import React, {ReactNode} from "react";
import "./Modal.css"

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({isOpen, onClose, children}: ModalProps) {
  // don't show modal if closed
  if (!isOpen)
    return null;

  return (
    <div className={"lightbox"} onClick={onClose}>
      <div className={"content"} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}