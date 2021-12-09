import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div
      className="myModal"
      onClick={() => {
        isOpen = false;
      }}
    >
      {children}
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
